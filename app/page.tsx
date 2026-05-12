import Image from "next/image";

const services = [
  {
    name: "Dumpster rentals",
    detail: "Reliable dumpster options for cleanouts, remodels, debris, and job sites.",
  },
  {
    name: "Stump grinding",
    detail: "Professional stump grinding to open up yards, driveways, and work areas.",
  },
  {
    name: "Junk removal",
    detail: "Furniture, clutter, and unwanted items removed without the hassle.",
  },
  {
    name: "Property cleanouts",
    detail: "Help clearing garages, rentals, estates, and full properties.",
  },
  {
    name: "Brush removal",
    detail: "Branches, yard waste, storm debris, and overgrowth hauled away.",
  },
  {
    name: "Debris removal",
    detail: "Cleanup support for construction debris, brush, junk, and more.",
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
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <section className="bg-zinc-950 px-5 py-3 text-sm text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-zinc-200">
            Licensed and insured local contractor
          </p>
          <div className="flex flex-col gap-1 font-semibold sm:flex-row sm:gap-5">
            <a className="text-orange-400 hover:text-orange-300" href="tel:3524365635">
              (352) 436-5635
            </a>
            <a className="text-zinc-200 hover:text-orange-300" href="mailto:abcwork74@gmail.com">
              abcwork74@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-stone-100 px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <header className="flex flex-col gap-2 border-b border-zinc-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-3xl font-black tracking-tight text-zinc-950">
                ABC Work
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-600">
                Dumpster rentals, stump grinding, junk removal, and cleanouts
              </p>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">
              Citrus County, FL
            </p>
          </header>

          <div className="grid gap-8 py-8 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-5 lg:py-10">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-black text-orange-700">
                Serving Citrus County and surrounding areas.
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-5xl">
                Reliable dumpsters, stump grinding, and cleanup services.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
                ABC Work helps homeowners, contractors, and property managers
                clear space with dependable dumpster rentals, professional stump
                grinding, junk removal, cleanouts, and debris removal.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-14 items-center justify-center rounded-md bg-orange-500 px-8 text-base font-black text-zinc-950 shadow-lg shadow-orange-200 transition hover:bg-orange-400"
                  href="tel:3524365635"
                >
                  Call Now
                </a>
                <a
                  className="inline-flex min-h-14 items-center justify-center rounded-md border border-zinc-900 bg-zinc-950 px-8 text-base font-bold text-white transition hover:bg-zinc-800"
                  href="#quote"
                >
                  Request a Free Quote
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm font-bold text-zinc-700 sm:grid-cols-3">
                <p className="rounded-md border border-zinc-200 bg-white p-4 shadow-sm">
                  Fast local response
                </p>
                <p className="rounded-md border border-zinc-200 bg-white p-4 shadow-sm">
                  Licensed and insured
                </p>
                <p className="rounded-md border border-zinc-200 bg-white p-4 shadow-sm">
                  Clear communication
                </p>
              </div>
            </div>

            <div className="grid justify-items-center gap-4 lg:justify-items-start">
              <Image
                alt="ABC Work dumpster loading services"
                className="h-auto max-h-[560px] w-auto max-w-full rounded-lg shadow-xl shadow-zinc-200"
                height={1270}
                priority
                sizes="(min-width: 1024px) 420px, 100vw"
                src="/images/dumpster-loading.jpg"
                width={906}
              />
            </div>
          </div>

          <div className="grid gap-4 pb-8 sm:grid-cols-2 lg:pb-10">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-zinc-950">Dumpster rentals</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                For remodels, cleanouts, brush, junk, and debris.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-zinc-950">Stump grinding</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Clear stumps cleanly so yards and access areas open back up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-600">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">
              Practical help for tough cleanup and property projects.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                className="rounded-lg border border-zinc-200 bg-stone-50 p-5 transition hover:border-orange-300 hover:bg-white hover:shadow-md"
                key={service.name}
              >
                {service.name === "Dumpster rentals" ? (
                  <Image
                    alt="ABC Work dumpster rental and cleanup"
                    className="mb-5 h-auto max-w-full rounded-md"
                    height={1004}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src="/images/481995667_606737238864423_2537526134187271_n.jpg"
                    width={2048}
                  />
                ) : null}
                {service.name === "Stump grinding" ? (
                  <Image
                    alt="ABC Work stump grinding service"
                    className="mb-5 h-auto max-w-full rounded-md"
                    height={574}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src="/images/stump-grinder.jpg"
                    width={831}
                  />
                ) : null}
                {service.name === "Junk removal" ? (
                  <Image
                    alt="ABC Work junk and debris removal"
                    className="mb-5 h-auto max-w-full rounded-md"
                    height={1210}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src="/images/480807077_608529052018575_8891667848226676131_n.jpg"
                    width={2048}
                  />
                ) : null}
                <div className="mb-5 h-1.5 w-12 rounded-full bg-orange-500" />
                <h3 className="text-lg font-black">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {service.detail}
                </p>
              </div>
            ))}
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
              "Dependable cleanup from the first call to the final haul.",
            ].map((reason) => (
              <div
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
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

      <section id="quote" className="bg-stone-50 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-600">
              Free quote
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Tell us what needs to be cleared.
            </h2>
            <p className="mt-5 leading-8 text-zinc-700">
              Call for the fastest response, or send the basic details and ABC
              Work will follow up about scheduling, pricing, and the right
              service for the job.
            </p>
            <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
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
            </div>
          </div>

          <form className="grid gap-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-lg shadow-zinc-200 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Name
                <input className="min-h-12 rounded-md border border-zinc-300 bg-white px-4 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Phone
                <input className="min-h-12 rounded-md border border-zinc-300 bg-white px-4 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Service needed
              <input
                className="min-h-12 rounded-md border border-zinc-300 bg-white px-4 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                placeholder="Dumpster rental, stump grinding, or cleanup"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Project details
              <textarea className="min-h-32 rounded-md border border-zinc-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
            </label>
            <button
              className="min-h-14 rounded-md bg-orange-500 px-6 text-base font-black text-zinc-950 shadow-md shadow-orange-100 transition hover:bg-orange-400"
              type="button"
            >
              Request a Free Quote
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white px-5 py-8 text-sm text-zinc-600 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-black text-zinc-950">ABC Work</p>
          <p>Dumpster rentals, stump grinding, junk removal, cleanouts, brush and debris removal.</p>
          <p className="font-semibold text-zinc-950">Licensed and insured</p>
        </div>
      </footer>
    </main>
  );
}
