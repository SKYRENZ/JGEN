import { useState } from 'react'

type NavigationProps = {
  brandName: string
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Contact', href: '#contact' },
]

function Navigation({ brandName }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--accent)/20 bg-linear-to-r from-(--primary-dark) via-(--primary-mid)/80 to-(--primary-dark) shadow-[0_10px_35px_rgba(103,232,249,0.15)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
        <div className="font-display text-xl font-bold tracking-wide bg-linear-to-r from-white to-(--accent) bg-clip-text text-transparent md:text-2xl">
          {brandName}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <nav>
            <ul className="flex items-center gap-3 lg:gap-6 text-sm font-semibold text-white/80">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-(--accent)"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="rounded-full border-2 border-(--accent) bg-(--accent) px-5 py-2 text-sm font-semibold text-(--primary-dark) transition hover:bg-white hover:border-white"
          >
            Join Us
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/15 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div className={`${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-4 sm:px-6 md:px-10">
          <nav className="w-full">
            <ul className="flex flex-col gap-2 text-sm font-semibold text-white/80">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-(--accent)"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-(--accent) bg-(--accent) px-5 py-2 text-sm font-semibold text-(--primary-dark) transition hover:bg-white hover:border-white"
          >
            Join Us
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navigation