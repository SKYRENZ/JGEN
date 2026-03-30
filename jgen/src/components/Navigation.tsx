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
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-start gap-4 border-b border-[var(--grid-line)] bg-[var(--shell)]/95 px-4 py-5 backdrop-blur-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 md:px-10">
      <div className="font-display text-xl font-bold tracking-wide text-[var(--forest)] md:text-2xl">
        {brandName}
      </div>
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[var(--ink)]/85 sm:gap-3 md:gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-full px-3 py-1 transition hover:bg-[var(--forest)] hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="#contact"
        className="rounded-full bg-[var(--forest)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#244739] sm:ml-auto"
      >
        Join Us
      </a>
    </header>
  )
}

export default Navigation