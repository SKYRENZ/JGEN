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
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-start gap-4 border-b border-[var(--accent)]/20 bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary-mid)]/80 to-[var(--primary-dark)] px-4 py-5 shadow-[0_10px_35px_rgba(103,232,249,0.15)] backdrop-blur-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 md:px-10">
      <div className="font-display text-xl font-bold tracking-wide bg-gradient-to-r from-white to-[var(--accent)] bg-clip-text text-transparent md:text-2xl">
        {brandName}
      </div>
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white/80 sm:gap-3 md:gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-full px-3 py-1 transition hover:text-[var(--accent)] hover:bg-white/10"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="#contact"
        className="rounded-full border-2 border-[var(--accent)] bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--primary-dark)] transition hover:bg-white hover:border-white sm:ml-auto"
      >
        Join Us
      </a>
    </header>
  )
}

export default Navigation