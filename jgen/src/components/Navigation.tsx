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
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-start gap-4 border-b border-white/10 bg-[#0b0d10]/95 px-4 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 md:px-10">
      <div className="font-display text-xl font-bold tracking-wide text-[#e6e9ee] md:text-2xl">
        {brandName}
      </div>
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#c5cad2] sm:gap-3 md:gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-full px-3 py-1 transition hover:bg-[#1a1f26] hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="#contact"
        className="rounded-full border border-white/15 bg-[#e6e9ee] px-5 py-2 text-sm font-semibold text-[#0b0d10] transition hover:bg-white sm:ml-auto"
      >
        Join Us
      </a>
    </header>
  )
}

export default Navigation