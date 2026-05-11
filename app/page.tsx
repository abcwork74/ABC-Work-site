const services = [
  "Dumpster rentals",
  "Stump grinding",
  "Junk removal",
  "Property cleanouts",
  "Brush removal",
  "Debris hauling",
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
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-8 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                Licensed and insured
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight">
                ABC Work
              </p>
            </div>
            <div className="text-sm text-zinc-300 sm:text-right">
              <a className="block font-semibold text-white" href="tel:3524365635">
                (352) 436-5635
              </a>
              <a className="block hover:text-orange-400" href="mailto:abcwork74@gmail.com">
                abcwork74@gmail.com
              </a>
            </div>
          </header>

          <div className="grid gap-10 pb-12 pt-2 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-zinc-950">
                Serving Citrus County, Florida
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Reliable dumpster rentals, cleanouts, and debris removal.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                ABC Work helps homeowners, contractors, and property managers
                clear the mess with professional hauling, stump grinding, junk
                removal, and site cleanup services.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-14 items-center justify-center rounded-md bg-orange-500 px-7 text-base font-black text-zinc-950 shadow-lg shadow-orange-950/30 transition hover:bg-orange-400"
                  href="tel:3524365635"
                >
                  Call Now
                </a>
                <a
                  className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/30 px-7 text-base font-bold text-white transition hover:border-orange-400 hover:text-orange-400"
                  href="#quote"
                >
                  Request a Free Quote
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white p-6 text-zinc-950 shadow-2xl shadow-black/30">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">
                Fast local service
              </p>
              <h2 className="mt-3 text-2xl font-black">Clean up made simple.</h2>
              <div className="mt-6 grid gap-3 text-sm font-semibold text-zinc-700">
                <div className="rounded-md bg-zinc-100 p-4">Dumpster rentals for projects big and small</div>
                <div className="rounded-md bg-zinc-100 p-4">Junk, brush, and debris hauled away</div>
                <div className="rounded-md bg-zinc-100 p-4">Clear pricing and dependable scheduling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">
            Practical help for tough cleanup jobs.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
                key={service}
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-orange-500" />
                <h3 className="text-lg font-black">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">
              Why choose ABC Work
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              A local crew you can count on.
            </h2>
          </div>
          <div className="grid gap-5">
            {[
              "Licensed and insured for your peace of mind.",
              "Professional, responsive service from quote to cleanup.",
              "Built for local homes, job sites, rentals, and properties.",
              "Straightforward communication and reliable follow-through.",
            ].map((reason) => (
              <div className="flex gap-4" key={reason}>
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-orange-500" />
                <p className="text-lg leading-8 text-zinc-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-500">
            Service areas
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">
            Serving Citrus County and nearby communities.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200"
                key={area}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="bg-zinc-100 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">
              Free quote
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Tell us what needs to go.
            </h2>
            <p className="mt-5 leading-8 text-zinc-700">
              Call for the fastest response, or send the basic details and ABC
              Work will follow up about scheduling and pricing.
            </p>
            <div className="mt-6 rounded-lg bg-zinc-950 p-5 text-white">
              <p className="font-black">ABC Work</p>
              <a className="mt-3 block text-orange-400" href="tel:3524365635">
                (352) 436-5635
              </a>
              <a className="mt-1 block text-zinc-300" href="mailto:abcwork74@gmail.com">
                abcwork74@gmail.com
              </a>
            </div>
          </div>

          <form className="grid gap-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Name
                <input className="min-h-12 rounded-md border border-zinc-300 px-4 font-normal outline-none focus:border-orange-500" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Phone
                <input className="min-h-12 rounded-md border border-zinc-300 px-4 font-normal outline-none focus:border-orange-500" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Service needed
              <input className="min-h-12 rounded-md border border-zinc-300 px-4 font-normal outline-none focus:border-orange-500" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Project details
              <textarea className="min-h-32 rounded-md border border-zinc-300 px-4 py-3 font-normal outline-none focus:border-orange-500" />
            </label>
            <button
              className="min-h-13 rounded-md bg-orange-500 px-6 text-base font-black text-zinc-950 transition hover:bg-orange-400"
              type="button"
            >
              Request a Free Quote
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-zinc-950 px-6 py-8 text-sm text-zinc-400 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-white">ABC Work</p>
          <p>Dumpster rentals, stump grinding, junk removal, cleanouts, brush and debris removal.</p>
          <p>Licensed and insured</p>
        </div>
      </footer>
    </main>
  );
}
