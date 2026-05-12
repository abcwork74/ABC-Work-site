import nodemailer from "nodemailer";

export const runtime = "nodejs";

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = getValue(formData, "name");
  const phone = getValue(formData, "phone");
  const service = getValue(formData, "service");
  const details = getValue(formData, "details");
  const email = getValue(formData, "email");

  if (!name || !phone || !service || !details) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return Response.json({ error: "Email is not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const body = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Service needed: ${service}`,
    `Project details: ${details}`,
  ]
    .filter(Boolean)
    .join("\n");

  await transporter.sendMail({
    from: `"ABC Work Website" <${user}>`,
    replyTo: email || undefined,
    to: "abcwork74@gmail.com",
    subject: "New Quote Request from ABC Work Website",
    text: body,
  });

  return Response.json({ ok: true });
}
