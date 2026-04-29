import { useEffect, useState } from 'react'
import upcomingEventImage from '../assets/Uy May Nag Heart.png'

function HeroSection() {
  const [accentColor, setAccentColor] = useState({ r: 46, g: 54, b: 64 })

  useEffect(() => {
    let isMounted = true
    const image = new Image()

    image.onload = () => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      if (!context) return

      canvas.width = 28
      canvas.height = 28
      context.drawImage(image, 0, 0, canvas.width, canvas.height)

      const data = context.getImageData(0, 0, canvas.width, canvas.height).data
      let red = 0
      let green = 0
      let blue = 0
      let count = 0

      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3]
        if (alpha < 120) continue
        red += data[i]
        green += data[i + 1]
        blue += data[i + 2]
        count += 1
      }

      if (count > 0 && isMounted) {
        setAccentColor({
          r: Math.round(red / count),
          g: Math.round(green / count),
          b: Math.round(blue / count),
        })
      }
    }

    image.src = upcomingEventImage

    return () => {
      isMounted = false
    }
  }, [])

  const accent = (opacity: number) =>
    `rgba(${accentColor.r}, ${accentColor.g}, ${accentColor.b}, ${opacity})`

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
        <div
          className="relative flex h-full min-h-72 items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed p-2 shadow-[0_14px_45px_rgba(15,18,24,0.18)]"
          style={{
            borderColor: accent(0.45),
            background: `radial-gradient(circle at 12% 20%, ${accent(0.25)} 0%, ${accent(0)} 48%), linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.72) 100%)`,
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/20">
            <img
              src={upcomingEventImage}
              alt="Upcoming event poster"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d10]/30 via-transparent to-transparent" />
            <div className="font-event absolute left-3 top-3 rounded-full border border-white/35 bg-black/55 px-4 py-2 text-base uppercase tracking-[0.18em] text-white backdrop-blur-sm md:text-lg">
              Upcoming Event
            </div>
            <div className="absolute bottom-3 right-3 rounded-xl bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0b0d10] shadow-sm">
              Feb 14 • 2PM
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-[var(--ink)]/80">
          Upcoming event highlight. Invite your friends and family.
        </p>
      </aside>
    </main>
  )
}

export default HeroSection
