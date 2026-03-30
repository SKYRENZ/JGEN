const navItems = ['Home', 'About', 'Ministries', 'Events', 'Contact']

const events = [
  {
    title: 'Sunday Gathering',
    time: 'Every Sunday, 9:30 AM',
    details: 'Worship, teaching, and prayer for all ages.',
  },
  {
    title: 'Youth Night',
    time: 'Friday, 6:30 PM',
    details: 'Music, small groups, and leadership mentoring.',
  },
  {
    title: 'Community Table',
    time: 'First Saturday, 11:00 AM',
    details: 'Neighborhood meal and outreach support.',
  },
]

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfaKKUSv6nfWMLP7PCe3Az-zIyqskGFkSNmsX9Onv6tmGZYUg/viewform?embedded=true'

function App() {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full border-y border-[var(--grid-line)] bg-[var(--shell)]/90">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--grid-line)] px-6 py-5 md:px-10">
          <div className="font-display text-xl font-bold tracking-wide text-[var(--forest)] md:text-2xl">
            Grace Harbor
          </div>
          <nav>
            <ul className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--ink)]/85 md:gap-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="rounded-full px-3 py-1 transition hover:bg-[var(--forest)] hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="rounded-full bg-[var(--forest)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#244739]">
            Join Us
          </button>
        </header>

        <main className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="texture-lines border-b border-[var(--grid-line)] px-6 py-10 md:px-10 md:py-14 lg:border-b-0 lg:border-r">
            <p className="mb-4 inline-flex rounded-full border border-[var(--gold)]/60 bg-[var(--gold)]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[var(--forest)]">
              Welcome Home
            </p>
            <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-6xl">
              A Place To
              <br />
              Grow In Faith
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink)]/80 md:text-lg">
              Building a Christ-centered community through worship, discipleship,
              and practical love for our city.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-bold tracking-wide text-white transition hover:bg-[#ab8755]">
                Plan Your Visit
              </button>
              <button className="rounded-full border border-[var(--forest)] px-6 py-3 text-sm font-bold tracking-wide text-[var(--forest)] transition hover:bg-[var(--forest)] hover:text-white">
                Watch Online
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['450+', 'Families Connected'],
                ['22', 'Neighborhood Outreach Teams'],
                ['15y', 'Serving Our Community'],
              ].map(([value, label]) => (
                <article
                  key={label}
                  className="rounded-2xl border border-[var(--grid-line)] bg-white px-4 py-4"
                >
                  <p className="font-display text-3xl font-bold text-[var(--forest)]">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-[var(--ink)]/75">{label}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className="placeholder-grid border-b border-[var(--grid-line)] px-6 py-10 md:px-10 md:py-14 lg:border-b-0">
            <div className="flex h-full min-h-72 flex-col rounded-3xl border border-dashed border-[var(--forest)]/45 bg-white/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--forest)]/80">
                Hero Image
              </p>
              <div className="mt-4 flex flex-1 items-center justify-center rounded-2xl border-2 border-dashed border-[var(--gold)]/70 bg-[var(--paper)] px-4 text-center">
                <p className="font-display text-2xl text-[var(--forest)]/70">
                  Blank Image Placeholder
                </p>
              </div>
              <p className="mt-4 text-sm text-[var(--ink)]/70">
                Reserved space for your photo or ministry artwork.
              </p>
            </div>
          </aside>
        </main>

        <section className="grid gap-6 border-t border-[var(--grid-line)] px-6 py-10 md:px-10 md:py-12 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-2xl border border-[var(--grid-line)] bg-white p-5 shadow-[0_10px_24px_rgba(45,62,52,0.08)]"
            >
              <h2 className="font-display text-2xl text-[var(--ink)]">{event.title}</h2>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-[var(--forest)]">
                {event.time}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/75">
                {event.details}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 border-t border-[var(--grid-line)] bg-[#f0ebdf] px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--forest)]/90">
              Sermon Library
            </p>
            <h3 className="font-display mt-3 text-3xl leading-tight text-[var(--ink)] md:text-4xl">
              Weekly Messages
              <br />
              And Study Notes
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--ink)]/75 md:text-base">
              Keep this area ready for sermon thumbnails and featured study
              resources.
            </p>
          </div>
          <div className="rounded-3xl border-2 border-dashed border-[var(--forest)]/45 bg-white p-6">
            <div className="placeholder-grid flex h-56 items-center justify-center rounded-2xl border border-dashed border-[var(--gold)]/70 bg-[var(--paper)] px-4 text-center md:h-64">
              <p className="font-display text-2xl text-[var(--forest)]/70">
                Blank Content Image Area
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--grid-line)] bg-[var(--shell)] px-6 py-12 md:px-10 md:py-14">
          <div className="mx-auto w-full max-w-4xl">
            <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-[var(--forest)]/90">
              RSVP Form
            </p>
            <h3 className="font-display mt-3 text-center text-3xl leading-tight text-[var(--ink)] md:text-4xl">
              Can You Attend?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[var(--ink)]/75 md:text-base">
              Fill out the form below to let us know if you can join. Replace the
              embed URL in the code with your Google Form link.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--grid-line)] bg-white shadow-[0_10px_24px_rgba(45,62,52,0.08)]">
              <iframe
                title="Can you attend RSVP form"
                src={GOOGLE_FORM_EMBED_URL}
                className="h-[760px] w-full"
                loading="lazy"
              >
                Loading Google Form...
              </iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
