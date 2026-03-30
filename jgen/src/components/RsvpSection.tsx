type RsvpSectionProps = {
  formUrl: string
}

function RsvpSection({ formUrl }: RsvpSectionProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-[72px] flex min-h-[calc(100svh-72px)] flex-col justify-center bg-[var(--shell)] px-4 py-10 sm:px-6 md:px-10 md:py-14"
    >
      <div className="mx-auto w-full max-w-4xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-[var(--forest)]/90">
          RSVP Form
        </p>
        <h3 className="font-display mt-3 text-center text-3xl leading-tight text-[var(--ink)] md:text-4xl">
          Can You Attend?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[var(--ink)]/75 md:text-base">
          Fill out the form below to let us know if you can join.
        </p>

        <div className="mt-8 max-w-full overflow-hidden rounded-3xl border border-[var(--grid-line)] bg-white shadow-[0_10px_24px_rgba(45,62,52,0.08)]">
          <iframe
            title="Can you attend RSVP form"
            src={formUrl}
            className="h-[58svh] min-h-[420px] w-full md:h-[62svh]"
            loading="lazy"
          >
            Loading Google Form...
          </iframe>
        </div>
      </div>
    </section>
  )
}

export default RsvpSection
