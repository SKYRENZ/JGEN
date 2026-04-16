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

function EventsSection() {
  return (
    <section
      id="events"
      className="scroll-mt-[72px] flex min-h-[calc(100svh-72px)] flex-col justify-center gap-6 border-b border-[var(--grid-line)] py-6 md:py-8"
    >
      <div className="grid gap-6 px-4 sm:px-6 md:px-10 lg:grid-cols-3">
        {events.map((event) => (
          <article
            key={event.title}
            className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-[var(--accent)]/30 bg-gradient-to-br from-white to-[var(--accent)]/5 p-7 shadow-[0_10px_24px_rgba(103,232,249,0.08)] transition hover:border-[var(--accent)]/60 hover:shadow-[0_10px_35px_rgba(103,232,249,0.15)]"
          >
            <h2 className="font-display text-4xl bg-gradient-to-r from-[var(--primary-mid)] to-[var(--ink)] bg-clip-text text-transparent md:text-[2.2rem]">
              {event.title}
            </h2>
            <p className="mt-3 text-xl font-bold uppercase tracking-wide text-[var(--primary-mid)] md:text-[1.3rem]">
              {event.time}
            </p>
            <p className="mt-4 text-xl leading-relaxed text-[var(--ink)]/75 md:text-[1.35rem]">
              {event.details}
            </p>
          </article>
        ))}
      </div>

      <div
        id="sermons"
        className="scroll-mt-[72px] grid gap-6 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--primary-mid)]/10 px-4 py-8 sm:px-6 md:px-10 md:py-10 lg:grid-cols-[1fr_1.2fr] border-y border-[var(--accent)]/20"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[var(--accent)] to-[var(--primary-mid)] bg-clip-text text-transparent">
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
        <div className="rounded-3xl border-2 border-[var(--accent)]/40 bg-white p-6 shadow-[0_10px_24px_rgba(103,232,249,0.08)]">
          <div className="placeholder-grid flex h-56 items-center justify-center rounded-2xl border border-[var(--accent)]/30 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--primary-mid)]/5 px-4 text-center md:h-64">
            <p className="font-display text-2xl text-[var(--primary-mid)]/60">
              Blank Content Image Area
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
