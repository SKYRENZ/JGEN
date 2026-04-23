import EventsSection from '../components/EventsSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navigation from '../components/Navigation'
import MinistrySection from '../components/MinistrySection'

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfaKKUSv6nfWMLP7PCe3Az-zIyqskGFkSNmsX9Onv6tmGZYUg/viewform?embedded=true'

function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-[72px]">
      <div className="w-full bg-[var(--shell)]/90">
        <Navigation brandName="Jesus Generation" />
        <HeroSection />
        <EventsSection />
<MinistrySection />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
