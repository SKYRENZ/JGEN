import upcomingEventImage from '../assets/Uy May Nag Heart.png'

function HeroSection() {
  return (
    <main
      id="home"
      className="scroll-mt-[72px] grid min-h-[calc(100svh-72px)] gap-0 border-b border-[var(--grid-line)] lg:grid-cols-[1.15fr_0.85fr]"
    >
      <section className="texture-lines px-4 py-8 sm:px-6 md:px-10 md:py-14 lg:border-r lg:border-[var(--grid-line)]">
        <p className="mb-4 inline-flex rounded-full border border-[var(--gold)]/60 bg-[var(--gold)]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[var(--forest)]">
          Welcome Home
        </p>
        <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-6xl">
          A Place To
          <br />
          Grow In Faith
        </h1>
        <div id="about" className="scroll-mt-[72px] mt-5 max-w-xl">
          <p className="text-base leading-relaxed text-[var(--ink)]/80 md:text-lg">
            Building a Christ-centered community through worship, discipleship,
            and practical love for our city.
          </p>
        </div>

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

      <aside className="placeholder-grid px-4 py-8 sm:px-6 md:px-10 md:py-14">
        <div className="flex h-full min-h-72 flex-col rounded-3xl border border-dashed border-[var(--forest)]/45 bg-white/75 p-6 shadow-[0_14px_45px_rgba(15,18,24,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--forest)]/80">
            Hero Image
          </p>
          <div className="relative mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[var(--gold)]/70 bg-[var(--paper)]">
            <img
              src={upcomingEventImage}
              alt="Upcoming event poster"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d10]/30 via-transparent to-transparent" />
            <div className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Upcoming Event
            </div>
            <div className="absolute bottom-3 right-3 rounded-xl bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0b0d10] shadow-sm">
              Feb 14 • 2PM
            </div>
          </div>
          <p className="mt-4 text-sm font-medium text-[var(--ink)]/80">
            Upcoming event highlight. Invite your friends and family.
          </p>
        </div>
      </aside>
    </main>
  )
}

export default HeroSection
