"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const services = [
  {
    name: "Dumpster Rentals",
    detail: "Reliable dumpster options for remodels, roofing projects, property work, and job sites.",
  },
  {
    name: "Stump Grinding",
    detail: "Professional stump grinding to open up yards, driveways, and work areas.",
  },
  {
    name: "Rock & Dirt Delivery",
    detail: "Rock and dirt delivery for driveways, landscaping, fill, and residential property projects.",
  },
  {
    name: "Driveway Grading",
    detail: "Driveway scraping, leveling, and grading to smooth rough areas and improve access.",
  },
  {
    name: "Garden Tilling",
    detail: "Garden preparation and tilling for homeowners getting planting areas ready.",
  },
  {
    name: "General Tractor Work",
    detail: "Tractor assistance for grading, spreading material, property maintenance, and small projects.",
  },
];

const serviceAreas = [
  "Inverness",
  "Crystal River",
  "Homosassa",
  "Lecanto",
  "Beverly Hills",
  "Citrus Springs",
  "Floral City",
  "Citrus County",
];

export default function Home() {
  const [quoteStatus, setQuoteStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuoteStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Quote request failed");
      }

      form.reset();
      setQuoteStatus("sent");
    } catch {
      setQuoteStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950 max-sm:pb-24">
      <section className="bg-zinc-950 px-5 py-3 text-sm text-white max-sm:px-4 max-sm:py-2 max-sm:text-[0.95rem] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 max-sm:gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold leading-snug text-zinc-200">
            Licensed and insured local contractor
          </p>
          <div className="flex flex-col gap-1 font-semibold leading-snug max-sm:gap-0.5 sm:flex-row sm:gap-5">
            <a className="text-orange-400 hover:text-orange-300" href="tel:3524365635">
              (352) 436-5635
            </a>
            <a className="text-zinc-200 hover:text-orange-300" href="mailto:abcwork74@gmail.com">
              abcwork74@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-stone-100 px-5 sm:px-8 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[16vw] flex-col gap-1 overflow-hidden opacity-45 brightness-75 xl:flex"
        >
          {[
            "/images/stump-grinder.jpg",
            "/images/481995667_606737238864423_2537526134187271_n.jpg",
            "/images/drivewaynext.jpg",
          ].map((src) => (
            <div className="relative min-h-0 flex-1 bg-zinc-900" key={src}>
              <Image alt="" className="object-cover" fill src={src} />
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[16vw] flex-col gap-1 overflow-hidden opacity-45 brightness-75 xl:flex"
        >
          {[
            "/images/580140515_811754488362696_6753185236808792455_n.jpg",
            "/images/stump-before-after.jpg",
            "/images/stump2.jpg",
          ].map((src) => (
            <div className="relative min-h-0 flex-1 bg-zinc-900" key={src}>
              <Image alt="" className="object-cover" fill src={src} />
            </div>
          ))}
        </div>
        <div className="relative z-10 mx-auto min-h-full max-w-5xl bg-gradient-to-b from-white to-stone-100 px-4 py-6 max-sm:py-3 sm:px-6 lg:px-8">
          <header className="flex flex-col items-center gap-2 border-b border-zinc-200 pb-5 text-center max-sm:gap-0.5 max-sm:pb-2 sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div className="text-center sm:text-left">
              <p className="inline-block border-y border-red-700/30 px-2 text-3xl font-black tracking-tight text-zinc-950 shadow-[0_1px_0_rgba(255,255,255,0.9),0_3px_0_rgba(30,64,175,0.16)] max-sm:text-2xl">
                ABC Work
              </p>
            </div>
            <p className="hidden text-sm font-bold uppercase tracking-[0.16em] text-orange-600 sm:block sm:text-right">
              Citrus County, FL
            </p>
          </header>

          <div className="relative grid gap-8 py-8 max-sm:py-3 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-5 lg:py-10">
            <div>
              <div className="max-sm:flex max-sm:w-full max-sm:justify-center">
                <p className="mb-5 inline-flex items-center rounded-full border border-orange-300/90 bg-gradient-to-b from-orange-50 to-orange-100/80 px-4 py-2 text-sm font-black text-orange-700 shadow-[inset_0_2px_0_rgba(255,255,255,0.98),0_6px_0_rgba(180,83,9,0.28),0_18px_30px_rgba(120,53,15,0.2),0_3px_8px_rgba(120,53,15,0.2)] max-sm:mb-2 max-sm:whitespace-nowrap max-sm:px-2.5 max-sm:py-1.5 max-sm:text-[0.78rem]">
                  Serving Citrus County and surrounding areas.
                </p>
              </div>
              <div className="relative mb-3.5 aspect-[16/9] overflow-hidden rounded-lg shadow-[0_4px_0_rgba(120,113,108,0.18),0_16px_28px_rgba(41,37,36,0.16)] transition-transform duration-150 ease-out active:translate-y-[2px] active:shadow-[0_1px_0_rgba(120,113,108,0.16),0_6px_14px_rgba(41,37,36,0.12)] sm:hidden">
                <Image
                  alt="ABC Work dumpster rental truck and trailer"
                  className="h-full w-full object-cover contrast-105 saturate-110"
                  height={850}
                  priority
                  sizes="100vw"
                  src="/images/448005019_430208936517255_3916163214568262560_n.jpg"
                  width={850}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-zinc-950 max-sm:text-[1.98rem] max-sm:leading-[1.04] max-sm:tracking-normal sm:text-5xl lg:text-5xl">
                Reliable dumpster rentals, stump grinding, and tractor services.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700 max-sm:mt-2.5 max-sm:text-[1.05rem] max-sm:leading-[1.68] max-sm:text-zinc-800">
                Fast, reliable property services with straightforward pricing and local experience you can count on.
              </p>
              <div className="mt-6 hidden flex-col gap-3 max-sm:mt-2.5 sm:flex sm:flex-row">
                <a
                  className="inline-flex min-h-14 items-center justify-center rounded-lg border border-[#c94f0b]/80 bg-gradient-to-b from-[#f47c20] to-[#dd5f0b] px-8 text-base font-black text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_4px_0_rgba(171,63,10,0.72),0_13px_24px_rgba(39,39,42,0.18),0_3px_7px_rgba(63,63,70,0.14)] transition duration-150 ease-out hover:from-[#ff8a2a] hover:to-[#dd5f0b] active:translate-y-[3px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_1px_0_rgba(171,63,10,0.58),0_6px_12px_rgba(39,39,42,0.14)]"
                  href="tel:3524365635"
                >
                  Call Now
                </a>
                <a
                  className="inline-flex min-h-14 items-center justify-center rounded-lg border border-zinc-800 bg-gradient-to-b from-zinc-800 to-zinc-950 px-8 text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_0_rgba(0,0,0,0.68),0_13px_24px_rgba(39,39,42,0.24),0_3px_7px_rgba(0,0,0,0.2)] transition duration-150 ease-out hover:from-zinc-700 hover:to-zinc-950 active:translate-y-[3px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_0_rgba(0,0,0,0.56),0_6px_12px_rgba(39,39,42,0.16)]"
                  href="#quote"
                >
                  Request a Free Quote
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 text-sm font-bold text-zinc-700 max-sm:mt-4">
                <p className="flex min-h-10 items-center justify-center rounded-lg border border-stone-200 bg-gradient-to-b from-white to-stone-50 px-3 py-2 text-center shadow-[inset_0_2px_0_rgba(255,255,255,0.98),0_6px_0_rgba(146,64,14,0.2),0_18px_28px_rgba(120,113,108,0.18),0_4px_8px_rgba(120,113,108,0.14)] max-sm:min-h-16 max-sm:border-stone-100 max-sm:px-2 max-sm:text-[0.78rem] max-sm:leading-tight">
                  Fast Local Response
                </p>
                <p className="flex min-h-10 items-center justify-center rounded-lg border border-stone-200 bg-gradient-to-b from-white to-stone-50 px-3 py-2 text-center shadow-[inset_0_2px_0_rgba(255,255,255,0.98),0_6px_0_rgba(146,64,14,0.2),0_18px_28px_rgba(120,113,108,0.18),0_4px_8px_rgba(120,113,108,0.14)] max-sm:min-h-16 max-sm:border-stone-100 max-sm:px-2 max-sm:text-[0.78rem] max-sm:leading-tight">
                  Licensed and Insured
                </p>
                <p className="flex min-h-10 items-center justify-center rounded-lg border border-stone-200 bg-gradient-to-b from-white to-stone-50 px-3 py-2 text-center shadow-[inset_0_2px_0_rgba(255,255,255,0.98),0_6px_0_rgba(146,64,14,0.2),0_18px_28px_rgba(120,113,108,0.18),0_4px_8px_rgba(120,113,108,0.14)] max-sm:min-h-16 max-sm:border-stone-100 max-sm:px-2 max-sm:text-[0.78rem] max-sm:leading-tight">
                  Clear Communication
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute right-8 top-8 hidden lg:block xl:right-10">
              <Image
                alt="ABC Work dumpster loading services"
                className="h-[410px] w-auto max-w-full rounded-lg shadow-xl shadow-zinc-200 xl:h-[440px]"
                height={1270}
                priority
                sizes="(min-width: 1280px) 278px, (min-width: 1024px) 257px, 100vw"
                src="/images/dumpster-loading.jpg"
                width={906}
              />
            </div>
          </div>

        </div>
      </section>

      <section id="quote" className="bg-stone-50 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-600">
              Free quote
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Tell us what project you need help with.
            </h2>
            <p className="mt-5 leading-8 text-zinc-700">
              Call for the fastest response, or send the basic details and ABC
              Work will follow up about scheduling, pricing, and the right
              equipment for the job.
            </p>
            <div className="mt-6 rounded-xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-5 shadow-[inset_0_2px_0_rgba(255,255,255,0.98),0_7px_0_rgba(146,64,14,0.18),0_22px_34px_rgba(120,113,108,0.2),0_5px_10px_rgba(120,113,108,0.15)]">
              <p className="font-black text-zinc-950">ABC Work</p>
              <p className="mt-1 text-sm font-semibold text-zinc-600">
                Licensed and insured
              </p>
              <a className="mt-4 block text-lg font-black text-orange-600" href="tel:3524365635">
                (352) 436-5635
              </a>
              <a className="mt-1 block font-semibold text-zinc-700" href="mailto:abcwork74@gmail.com">
                abcwork74@gmail.com
              </a>
              <div className="mt-4 grid justify-items-center gap-2">
                <a
                  className="inline-flex w-4/5 items-center justify-center rounded-full border border-[#0f5fca] bg-[#1877F2] px-3.5 py-1 text-xs font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_0_rgba(15,95,202,0.7),0_7px_14px_rgba(24,119,242,0.2)] transition hover:bg-[#166fe5] sm:w-1/2"
                  href="https://www.facebook.com/people/ABC-WORK/100085844552651/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Follow ABC Work on Facebook
                </a>
                <a
                  className="inline-flex w-4/5 items-center justify-center rounded-full border border-stone-300 bg-gradient-to-b from-white to-stone-50 px-3.5 py-1 text-xs font-bold text-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_2px_0_rgba(146,64,14,0.1),0_7px_14px_rgba(120,113,108,0.12)] transition hover:border-orange-300 hover:text-orange-700 sm:w-1/2"
                  href="https://www.google.com/maps/place/ABC+Work/%4028.9418556%2c-83.8118365%2c8z/data=%213m1%214b1%214m6%213m5%211s0x6c6f9b0c11527d19:0xf0f681309537ea30%218m2%213d28.94829%214d-82.492436%2116s/g/11v40zbby8?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Find Us on Google
                </a>
              </div>
            </div>
          </div>

          <form
            className="grid gap-4 rounded-xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-5 shadow-[inset_0_2px_0_rgba(255,255,255,0.98),0_7px_0_rgba(146,64,14,0.18),0_24px_38px_rgba(120,113,108,0.22),0_5px_10px_rgba(120,113,108,0.15)] sm:p-6"
            onSubmit={handleQuoteSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Name
                <input className="min-h-12 rounded-md border border-zinc-300 bg-white px-4 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" name="name" required />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Phone
                <input className="min-h-12 rounded-md border border-zinc-300 bg-white px-4 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" name="phone" required />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Service needed
              <input
                className="min-h-12 rounded-md border border-zinc-300 bg-white px-4 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                name="service"
                placeholder="Dumpster rental, stump grinding, grading, or tractor work"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Project details
              <textarea className="min-h-32 rounded-md border border-zinc-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" name="details" required />
            </label>
            {quoteStatus === "sent" ? (
              <p className="font-semibold text-green-700">
                Thanks — your quote request has been sent.
              </p>
            ) : null}
            {quoteStatus === "error" ? (
              <p className="font-semibold text-red-700">
                Something went wrong. Please call or try again.
              </p>
            ) : null}
            <button
              className="min-h-14 rounded-lg border border-[#c94f0b]/80 bg-gradient-to-b from-[#f47c20] to-[#dd5f0b] px-6 text-base font-black text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_4px_0_rgba(171,63,10,0.72),0_13px_24px_rgba(39,39,42,0.17),0_3px_7px_rgba(63,63,70,0.13)] transition duration-150 ease-out hover:from-[#ff8a2a] hover:to-[#dd5f0b] active:translate-y-[3px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_1px_0_rgba(171,63,10,0.58),0_6px_12px_rgba(39,39,42,0.14)]"
              disabled={quoteStatus === "sending"}
              type="submit"
            >
              {quoteStatus === "sending" ? "Sending..." : "Request a Free Quote"}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-600">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">
              Practical help for tough property and tractor projects.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const serviceCard =
                service.name === "Driveway Grading"
                  ? {
                      ...service,
                      name: "Driveway Grading & Garden Tilling",
                      detail:
                        "Driveway scraping, leveling, grading, and garden tilling to improve access and prepare planting areas.",
                    }
                  : service.name === "Garden Tilling"
                    ? {
                        ...service,
                        name: "Debris Clearing",
                        detail:
                          "Cleanup and removal of debris, broken concrete, brush, and unwanted material from property and work areas.",
                      }
                    : service;

              return (
                <div
                  className="rounded-xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-5 shadow-[inset_0_2px_0_rgba(255,255,255,0.98),0_7px_0_rgba(146,64,14,0.18),0_22px_34px_rgba(120,113,108,0.2),0_5px_10px_rgba(120,113,108,0.15)] transition duration-150 ease-out hover:border-orange-300 hover:from-white hover:to-orange-50/40 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.98),0_7px_0_rgba(180,83,9,0.24),0_24px_38px_rgba(120,113,108,0.22),0_6px_12px_rgba(120,53,15,0.16)] active:translate-y-[3px] max-sm:border-stone-100 max-sm:p-6"
                  key={serviceCard.name}
                >
                  {serviceCard.name === "Dumpster Rentals" ? (
                    <Image
                      alt="ABC Work dumpster rental service"
                      className="mb-5 h-auto max-w-full rounded-md"
                      height={1004}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      src="/images/481995667_606737238864423_2537526134187271_n.jpg"
                      width={2048}
                    />
                  ) : null}
                  {serviceCard.name === "Stump Grinding" ? (
                    <Image
                      alt="ABC Work stump grinding service"
                      className="mb-5 h-auto max-w-full rounded-md"
                      height={574}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      src="/images/stump-grinder.jpg"
                      width={831}
                    />
                  ) : null}
                  {serviceCard.name === "Rock & Dirt Delivery" ? (
                    <Image
                      alt="ABC Work rock and dirt delivery"
                      className="mb-5 h-auto max-w-full rounded-md"
                      height={1210}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      src="/images/480807077_608529052018575_8891667848226676131_n.jpg"
                      width={2048}
                    />
                  ) : null}
                  {serviceCard.name === "Driveway Grading & Garden Tilling" ? (
                    <Image
                      alt="ABC Work driveway grading and garden tilling"
                      className="mb-5 h-auto max-w-full rounded-md"
                      height={600}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      src="/images/driveway-2.jpeg"
                      width={450}
                    />
                  ) : null}
                  {serviceCard.name === "General Tractor Work" ? (
                    <Image
                      alt="ABC Work general tractor work"
                      className="mb-5 h-auto max-w-full rounded-md"
                      height={1448}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      src="/images/tractor-work-2.png"
                      width={1086}
                    />
                  ) : null}
                  {serviceCard.name === "Debris Clearing" ? (
                    <Image
                      alt="ABC Work debris clearing"
                      className="mb-5 h-auto max-w-full rounded-md"
                      height={450}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      src="/images/debris-2.jpeg"
                      width={600}
                    />
                  ) : null}
                  <div className="mb-5 h-1.5 w-12 rounded-full bg-orange-500" />
                  <h3 className="text-lg font-black max-sm:text-xl">{serviceCard.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 max-sm:text-base max-sm:leading-7">
                    {serviceCard.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-600">
              Why choose ABC Work
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              A local crew you can trust on your property.
            </h2>
            <Image
              alt="ABC Work family owned local service"
              className="mt-6 h-auto max-w-full rounded-lg shadow-sm"
              height={1248}
              sizes="(min-width: 1024px) 420px, 100vw"
              src="/images/family-owned.jpg"
              width={944}
            />
          </div>
          <div className="grid gap-4">
            {[
              "Licensed and insured for peace of mind on every job.",
              "Responsive scheduling and straightforward communication.",
              "Ready for homes, rentals, job sites, and rural properties.",
              "Dependable property support from the first call to the finished job.",
            ].map((reason) => (
              <div
                className="rounded-xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-5 shadow-[inset_0_2px_0_rgba(255,255,255,0.98),0_7px_0_rgba(146,64,14,0.18),0_22px_34px_rgba(120,113,108,0.2),0_5px_10px_rgba(120,113,108,0.15)]"
                key={reason}
              >
                <div className="flex gap-4">
                  <span className="mt-1 h-5 w-5 flex-none rounded-full border-4 border-orange-200 bg-orange-500" />
                  <p className="text-base font-semibold leading-7 text-zinc-700">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-lg border border-zinc-800 bg-zinc-950 p-6 text-white shadow-lg shadow-zinc-200 sm:p-8 lg:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-400">
            Service areas
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">
            Serving Citrus County and surrounding areas.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-zinc-100"
                key={area}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white px-5 py-8 text-sm text-zinc-600 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-black text-zinc-950">ABC Work</p>
          <p>Dumpster rentals, stump grinding, driveway grading, tractor work, rock and dirt delivery, and garden tilling.</p>
          <p className="font-semibold text-zinc-950">Licensed and insured</p>
        </div>
      </footer>

      <div
        className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 sm:hidden"
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 -14px 34px rgba(24,24,27,0.16)",
        }}
      >
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#c94f0b]/80 bg-gradient-to-b from-[#f47c20] to-[#dd5f0b] px-4 text-sm font-black text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_4px_0_rgba(171,63,10,0.72),0_12px_20px_rgba(39,39,42,0.18),0_3px_7px_rgba(63,63,70,0.14)] transition duration-150 ease-out active:translate-y-[3px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_1px_0_rgba(171,63,10,0.58),0_5px_10px_rgba(39,39,42,0.13)]"
            href="tel:3524365635"
          >
            Call Now
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-zinc-800 bg-gradient-to-b from-zinc-800 to-zinc-950 px-4 text-sm font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_0_rgba(0,0,0,0.68),0_12px_20px_rgba(39,39,42,0.24),0_3px_7px_rgba(0,0,0,0.2)] transition duration-150 ease-out active:translate-y-[3px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_0_rgba(0,0,0,0.56),0_5px_10px_rgba(39,39,42,0.16)]"
            href="#quote"
          >
            Request Quote
          </a>
        </div>
      </div>
    </main>
  );
}
