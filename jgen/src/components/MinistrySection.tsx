import { useState } from 'react'
import spiritualMinistryImage from '../assets/ministries1.png'
import creativeMediaMinistryImage from '../assets/ministtries2.png'
import serviceMinistryImage from '../assets/ministries3.png'
import leadershipDevelopmentImage from '../assets/ministries4.png'
import {
  SECTION_MIN_HEIGHT,
  SECTION_SCROLL_MARGIN,
} from '../styles/sectionLayout'

const ministries = [
  {
    title: 'Spiritual Ministries',
    image: spiritualMinistryImage,
  },
  {
    title: 'Creative & Media Ministries',
    image: creativeMediaMinistryImage,
  },
  {
    title: 'Service Ministries',
    image: serviceMinistryImage,
  },
  {
    title: 'Leadership & Development',
    image: leadershipDevelopmentImage,
  }
]

function MinistrySection() {
  const [selectedMinistry, setSelectedMinistry] = useState<(typeof ministries)[number] | null>(null)

  return (
    <>
      <section id="ministries" className={`${SECTION_SCROLL_MARGIN} w-full ${SECTION_MIN_HEIGHT} relative overflow-hidden bg-black/20`}>
        <div className={`flex ${SECTION_MIN_HEIGHT} flex-col lg:flex-row lg:h-[calc(100svh-72px)]`}>
        {ministries.map((ministry) => (
          <button
            key={ministry.title}
            type="button"
            onClick={() => setSelectedMinistry(ministry)}
            className="relative min-h-72 lg:min-h-0 lg:h-full lg:basis-0 flex-1 group cursor-pointer overflow-hidden shadow-lg transition-all duration-500 hover:scale-[1.02] hover:brightness-110 hover:shadow-2xl hover:-translate-y-1"
            style={{
              backgroundImage: `url(${ministry.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent group-hover:bg-black/20 transition-all duration-300 ease-in-out" />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-end space-y-3 p-5 pb-10 text-center md:p-6 md:pb-12">
              <h4 className="font-display text-sm font-bold uppercase leading-tight tracking-wide text-white drop-shadow-2xl md:text-base lg:text-lg xl:text-xl">
                {ministry.title}
              </h4>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
                <span className="inline-flex rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm shadow-xl transition-all duration-300 group-hover:bg-white/30 group-hover:-translate-y-1">
                  Learn More →
                </span>
              </div>
            </div>
          </button>
        ))}
        </div>

        <div className="absolute left-1/2 top-10 z-10 w-full max-w-2xl -translate-x-1/2 px-4 text-center md:top-12">
          <p className="mb-3 inline-block rounded-full bg-black/40 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-(--accent) backdrop-blur-sm shadow-lg md:text-sm">
            Our Ministries
          </p>
          <h3 className="mx-2 mb-4 font-display text-2xl leading-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] md:text-4xl lg:text-5xl">
            How We Serve
          </h3>
          <div className="mx-auto mb-4 h-1 w-16 bg-linear-to-r from-(--primary-mid) to-(--accent) shadow-md" />
          <p className="mx-auto max-w-lg rounded-2xl bg-black/30 px-6 py-3 text-sm leading-relaxed text-white/90 backdrop-blur-sm shadow-md md:text-base">
            JGen Youth operates through dedicated ministry teams serving different aspects of our mission.
          </p>
        </div>
      </section>

      {selectedMinistry ? (
        <div
          className="fixed inset-0 z-75 bg-black/70 p-4"
          onClick={() => setSelectedMinistry(null)}
          role="presentation"
        >
          <div
            className="mx-auto flex h-[calc(100vh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close ministry modal"
              onClick={() => setSelectedMinistry(null)}
              className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-2xl font-bold leading-none text-white transition hover:bg-black"
            >
              ×
            </button>

            <div className="flex-1 overflow-hidden bg-black/10">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedMinistry.image})` }}
              />
            </div>

            <div className="border-t border-black/10 bg-white px-5 py-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--forest)/80">
                Ministry Section
              </p>
              <h4 className="mt-1 font-display text-2xl text-(--ink) md:text-3xl">
                {selectedMinistry.title}
              </h4>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default MinistrySection

