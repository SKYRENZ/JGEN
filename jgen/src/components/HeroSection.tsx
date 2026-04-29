import upcomingEventImage from '../assets/JGEN 21st anniv.png'
import {
  SECTION_MIN_HEIGHT,
  SECTION_SCROLL_MARGIN,
} from '../styles/sectionLayout'

type Props = {
  onOpenForm?: () => void
}

function HeroSection({ onOpenForm }: Props) {
  return (
    <main
      id="home"
      className={`${SECTION_SCROLL_MARGIN} grid ${SECTION_MIN_HEIGHT} gap-0 border-b border-(--grid-line) lg:grid-cols-[1.15fr_0.85fr]`}
    >
      <section className="texture-lines px-4 py-8 sm:px-6 md:px-10 md:py-14 lg:border-r lg:border-(--grid-line)">
        <p className="mb-4 inline-flex rounded-full border border-(--primary-mid) bg-linear-to-r from-(--primary-mid)/30 to-(--accent)/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-(--primary-dark)">
          Hi Katruepa!!
        </p>
        <h1 className="font-display text-4xl leading-tight text-(--ink) md:text-6xl">
          Our Youth Ministry
          <br />
          Exist....
        </h1>
        <div id="about" className={`${SECTION_SCROLL_MARGIN} mt-5 max-w-xl`}>
          <p className="text-base leading-relaxed text-(--ink)/80 md:text-lg">
          to REACH young people to Christ,
          <br />
          to GUIDE them to God's Word,
          <br />
          to OFFER themselves to the Lord
          and ENJOY a meaningful relationship with God
          as they SERVE Him in the ministry.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://www.facebook.com/JGENYM"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-(--primary-mid) to-(--primary-light) px-7 py-4 text-base font-bold tracking-wide text-white transition hover:shadow-lg hover:shadow-(--primary-mid)/40"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 4.98 3.66 9.1 8.44 9.88v-6.99H7.9v-2.9h2.53V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v6.99C18.34 21.17 22 17.05 22 12.07Z" />
            </svg>
            Visit Our Page
          </a>
        </div>

      </section>

      <aside className="placeholder-grid flex items-center justify-center px-4 py-8 sm:px-6 md:px-10 md:py-14">
        <div className="w-full max-w-235 overflow-hidden rounded-3xl border-2 border-(--accent)/40 bg-linear-to-br from-(--shell) via-[#eef5fb] to-(--accent)/10 shadow-[0_14px_45px_rgba(103,232,249,0.12)]">
          <div
            className="group relative aspect-940/788 w-full overflow-hidden rounded-3xl border-2 border-(--accent) bg-linear-to-br from-[#0c1418] via-[#26313a] to-[#4c5b3e] cursor-pointer"
            role={onOpenForm ? 'button' : undefined}
            tabIndex={onOpenForm ? 0 : undefined}
            onClick={() => onOpenForm && onOpenForm()}
            onKeyDown={(e) => {
              if (!onOpenForm) return
              if (e.key === 'Enter' || e.key === ' ') onOpenForm()
            }}
          >
            <img
              src={upcomingEventImage}
              alt="JGen 21st anniversary poster"
              className="h-full w-full object-contain transition duration-300 max-md:brightness-75 max-md:contrast-90 md:group-hover:brightness-75 md:group-hover:contrast-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0b0d10]/45 via-transparent to-transparent transition duration-300 max-md:from-[#0b0d10]/55 md:from-[#0b0d10]/40 md:group-hover:from-[#0b0d10]/55" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 md:opacity-0 md:group-hover:opacity-100">
              <span className="rounded-full border border-white/35 bg-black/45 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm shadow-lg">
                Click to pre register
              </span>
            </div>
            <div className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Upcoming Event
            </div>
            <div className="absolute bottom-3 right-3 rounded-xl bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0b0d10] shadow-sm">
              May 23 • 2PM
            </div>
          </div>
        </div>
      </aside>
    </main>
  )
}

export default HeroSection
