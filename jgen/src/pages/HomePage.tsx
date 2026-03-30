import EventsSection from '../components/EventsSection'
import HeroSection from '../components/HeroSection'
import Navigation from '../components/Navigation'
import RsvpSection from '../components/RsvpSection'

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfaKKUSv6nfWMLP7PCe3Az-zIyqskGFkSNmsX9Onv6tmGZYUg/viewform?embedded=true'

function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-[72px]">
      <div className="w-full border-y border-[var(--grid-line)] bg-[var(--shell)]/90">
        <Navigation brandName="Jesus Generation" />
        <HeroSection />
        <EventsSection />
        <RsvpSection formUrl={GOOGLE_FORM_EMBED_URL} />
      </div>
    </div>
  )
}

export default HomePage
