import { useEffect, useState } from 'react'
import proofServiceImage from '../assets/JGEN Proof service.png'

type EventItem = {
  title: string
  time: string
  details: string
  longDetails: string
  location: string
  image?: string
}

const events = [
  {
    title: 'Sunday Proof Service',
    time: 'Every 1st Sunday of the month',
    details: 'Worship, teaching, and prayer for all ages.',
    longDetails:
      'Join us for an extended worship night with testimonies, prayer, and a message focused on God\'s faithfulness. Bring your family and friends.',
    location: 'Galilean Worship Center',
    image: proofServiceImage,
  },
  {
    title: 'Youth Night',
    time: 'Friday, 6:30 PM',
    details: 'Music, small groups, and leadership mentoring.',
    longDetails:
      'A night for students and young adults featuring worship, games, group discussions, and practical leadership coaching.',
    location: 'JGEN Youth Hall',
  },
  {
    title: 'Community Table',
    time: 'First Saturday, 11:00 AM',
    details: 'Neighborhood meal and outreach support.',
    longDetails:
      'Serve with us through shared meals, prayer support, and practical outreach for families in need around our community.',
    location: 'Church Courtyard',
  },
] satisfies EventItem[]

function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)

  useEffect(() => {
    if (!selectedEvent) return

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedEvent(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onEscape)
    }
  }, [selectedEvent])

  return (
    <>
      <section
        id="events"
        className="scroll-mt-[72px] flex min-h-[calc(100svh-72px)] flex-col justify-center gap-6 border-b border-[var(--grid-line)] py-6 md:py-8"
      >
        <div className="grid gap-6 px-4 sm:px-6 md:px-10 lg:grid-cols-3">
          {events.map((event) => (
            <button
              key={event.title}
              type="button"
              onClick={() => setSelectedEvent(event)}
              className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-[var(--grid-line)] bg-white p-7 text-left shadow-[0_10px_24px_rgba(45,62,52,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(45,62,52,0.14)]"
            >
              {event.image ? (
                <div className="mb-5 overflow-hidden rounded-xl border border-[var(--grid-line)]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-56 w-full object-cover"
                  />
                </div>
              ) : null}

              <h2 className="font-display text-4xl text-[var(--ink)] md:text-[2.2rem]">
                {event.title}
              </h2>
              <p className="mt-3 text-xl font-bold uppercase tracking-wide text-[var(--forest)] md:text-[1.3rem]">
                {event.time}
              </p>
              <p className="mt-4 text-xl leading-relaxed text-[var(--ink)]/75 md:text-[1.35rem]">
                {event.details}
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--forest)]/80">
                Tap for more details
              </p>
            </button>
          ))}
        </div>

        <div
          id="ministries"
          className="scroll-mt-[72px] grid gap-6 bg-[#f0ebdf] px-4 py-8 sm:px-6 md:px-10 md:py-10 lg:grid-cols-[1fr_1.2fr]"
        >
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
        </div>
      </section>

      {selectedEvent ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative max-h-[90svh] w-full max-w-2xl overflow-hidden rounded-3xl bg-[var(--shell)] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)] md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setSelectedEvent(null)}
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#ff4d5a]/70 bg-[#2a0f13] text-2xl font-bold leading-none text-[#ff5d6a] shadow-[0_8px_18px_rgba(255,77,90,0.28)] transition hover:bg-[#3a1218]"
            >
              ×
            </button>

            {selectedEvent.image ? (
              <div className="mb-4 overflow-hidden rounded-2xl border border-[var(--grid-line)] bg-black/5">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="max-h-[36svh] w-full object-contain md:max-h-[42svh]"
                />
              </div>
            ) : null}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--forest)]/80">
              Event Details
            </p>
            <h3 className="font-display mt-2 text-3xl text-[var(--ink)] md:text-4xl">
              {selectedEvent.title}
            </h3>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--forest)] md:text-base">
              {selectedEvent.time}
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--ink)]/70">
              Location: {selectedEvent.location}
            </p>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink)]/85">
              {selectedEvent.longDetails}
            </p>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default EventsSection
