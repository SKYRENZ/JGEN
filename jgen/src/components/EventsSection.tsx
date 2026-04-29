import { useEffect, useRef, useState } from 'react'
import proofServiceImage from '../assets/JGEN Proof service.png'
import KatruepaGatheringImage from '../assets/Katruepa Gathering.png'
import PusoNotebookImage from '../assets/Puso Notebook.jpg'
import {
  SECTION_MIN_HEIGHT,
  SECTION_PAD_X,
  SECTION_PAD_Y,
  SECTION_SCROLL_MARGIN,
  SECTION_STACK_STAGE,
  SECTION_WIDTH,
} from '../styles/sectionLayout'

type EventCard = {
  eyebrow: string
  title: string
  description: string
  note: string
  image: string
}

const eventCards = [
  {
    eyebrow: 'Fellowship',
    title: 'Sunday Proof Service',
    description: 'Worship, teaching, and prayer for all ages.',
    note: 'Every 1st Sunday of the month, right after Service',
    image: proofServiceImage,
  },
  {
    eyebrow: 'Evangelism',
    title: 'Katruepa Gathering',
    description: 'Music, small groups, and leadership mentoring.',
    note: 'Every 2nd Sunday of the month, 2:00 PM',
    image: KatruepaGatheringImage,
  },
  {
    eyebrow: 'Discipleship',
    title: 'CareGroup',
    description: 'Neighborhood meal and outreach support.',
    note: 'Schedule to be announced',
    image: proofServiceImage,
  },
  {
    eyebrow: 'Notebook Session',
    title: 'Puso Notebook Session',
    description: 'A guided space for reflection, journaling, and growth.',
    note: 'Schedule to be announced',
    image: PusoNotebookImage,
  },
] satisfies EventCard[]

function EventsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % eventCards.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const nextCard = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % eventCards.length)
  }

  const previousCard = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex - 1 + eventCards.length) % eventCards.length,
    )
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse') return
    touchStart.current = { x: event.clientX, y: event.clientY }
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!touchStart.current || event.pointerType === 'mouse') return

    const deltaX = event.clientX - touchStart.current.x
    const deltaY = event.clientY - touchStart.current.y
    const isHorizontalSwipe = Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)

    if (isHorizontalSwipe) {
      if (deltaX < 0) {
        nextCard()
      } else {
        previousCard()
      }
    }

    touchStart.current = null
  }

  return (
    <section
      id="events"
      className={`${SECTION_SCROLL_MARGIN} ${SECTION_MIN_HEIGHT} border-b border-(--grid-line) bg-[#f0ebdf] ${SECTION_PAD_X} ${SECTION_PAD_Y}`}
    >
      <div className={`${SECTION_WIDTH} grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center`}>
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-(--forest)/90">
            Events
          </p>
          <h2 className="font-display mt-3 text-3xl leading-tight text-(--ink) md:text-4xl lg:text-5xl">
            Featured
            <br />
            Event Stack
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-(--ink)/75 md:text-base">
            The cards rotate automatically every 5 seconds. Swipe on mobile or tap Next inside the card.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-(--grid-line) bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-(--forest)/75 md:hidden">
            Swipe cards
            <span aria-hidden="true">← →</span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-4xl px-1 py-8 sm:px-4 max-md:py-6">
          <div
            className={`${SECTION_STACK_STAGE} mx-auto max-md:mt-4`}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              touchStart.current = null
            }}
            style={{ touchAction: 'pan-y' }}
          >
            {eventCards.map((card, index) => {
              const offset = (index - activeIndex + eventCards.length) % eventCards.length
              const isActive = offset === 0

              return (
                <article
                  key={card.title}
                  className={`absolute inset-0 overflow-hidden rounded-[1.75rem] border border-(--grid-line) bg-white shadow-[0_16px_40px_rgba(0,0,0,0.14)] transition-all duration-500 ease-out ${
                    isActive
                      ? 'z-30 translate-x-0 translate-y-0 scale-100 opacity-100'
                      : offset === 1
                        ? 'z-20 translate-x-5 translate-y-5 scale-[0.97] opacity-95'
                        : 'z-10 translate-x-10 translate-y-10 scale-[0.94] opacity-85'
                  }`}
                >
                  <div className="grid h-full lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-56 overflow-hidden lg:min-h-full">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    <div className="flex flex-col justify-between p-6 sm:p-7 lg:p-8">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--forest)/80">
                          {card.eyebrow}
                        </p>
                        <h3 className="font-display mt-3 text-2xl leading-tight text-(--ink) md:text-3xl lg:text-[2.4rem]">
                          {card.title}
                        </h3>
                        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-(--forest) md:text-base">
                          {card.note}
                        </p>
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-(--ink)/80 md:text-base">
                          {card.description}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center justify-between gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--forest)/70">
                          {String(activeIndex + 1).padStart(2, '0')} / {String(eventCards.length).padStart(2, '0')}
                        </p>
                        <button
                          type="button"
                          onClick={nextCard}
                          className="inline-flex items-center rounded-full border border-(--forest)/25 bg-(--paper) px-5 py-2.5 text-sm font-semibold text-(--forest) transition hover:bg-white"
                        >
                          Next →
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
