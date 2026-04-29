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
          Welcome Home
        </p>
        <h1 className="font-display text-4xl leading-tight text-(--ink) md:text-6xl">
          A Place To
          <br />
          Grow In Faith
        </h1>
        <div id="about" className={`${SECTION_SCROLL_MARGIN} mt-5 max-w-xl`}>
          <p className="text-base leading-relaxed text-(--ink)/80 md:text-lg">
            Building a Christ-centered community through worship, discipleship,
            and practical love for our city.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-linear-to-r from-(--primary-mid) to-(--primary-light) px-6 py-3 text-sm font-bold tracking-wide text-white transition hover:shadow-lg hover:shadow-(--primary-mid)/40">
            Plan Your Visit
          </button>
          <button className="rounded-full border-2 border-(--primary-dark) px-6 py-3 text-sm font-bold tracking-wide text-(--primary-dark) transition hover:bg-(--primary-dark) hover:text-white">
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
              className="rounded-2xl border border-(--accent)/30 bg-linear-to-br from-white to-(--accent)/5 px-4 py-4 transition hover:border-(--accent)/60 hover:shadow-md hover:shadow-(--accent)/10"
            >
              <p className="font-display text-3xl font-bold bg-linear-to-r from-(--primary-mid) to-(--accent) bg-clip-text text-transparent">
                {value}
              </p>
              <p className="mt-1 text-sm text-(--ink)/75">{label}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="placeholder-grid px-4 py-8 sm:px-6 md:px-10 md:py-14">
          <div className="flex h-full min-h-72 flex-col rounded-3xl border-2 border-(--accent)/40 bg-white/75 p-6 shadow-[0_14px_45px_rgba(103,232,249,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--forest)/80">
            Hero Image
          </p>
          <div
            className="group relative mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-2xl border-2 border-(--accent) bg-(--paper) cursor-pointer"
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
              className="h-full w-full object-cover transition duration-300 max-md:brightness-75 max-md:contrast-90 md:group-hover:brightness-75 md:group-hover:contrast-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0b0d10]/55 via-transparent to-transparent transition duration-300 max-md:from-[#0b0d10]/60 md:from-[#0b0d10]/40 md:group-hover:from-[#0b0d10]/55" />
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
          <p className="mt-4 text-sm font-medium text-(--ink)/80">
            Upcoming event highlight. Invite your friends and family.
          </p>
        </div>
      </aside>
    </main>
  )
}

export default HeroSection
