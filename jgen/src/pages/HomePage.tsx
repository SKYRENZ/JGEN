import { useState } from 'react'
import EventsSection from '../components/EventsSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navigation from '../components/Navigation'
import MinistrySection from '../components/MinistrySection'
import GoogleFormModal from '../components/GoogleFormModal'

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfaKKUSv6nfWMLP7PCe3Az-zIyqskGFkSNmsX9Onv6tmGZYUg/viewform?embedded=true'

function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-[72px]">
      <div className="w-full bg-[var(--shell)]/90">
        <Navigation brandName="Jesus Generation" />
        <HeroSection onOpenForm={() => setIsFormOpen(true)} />
        <EventsSection />
        <MinistrySection />
        <Footer />
        <GoogleFormModal
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          src={GOOGLE_FORM_EMBED_URL}
        />
      </div>
    </div>
  )
}

export default HomePage
