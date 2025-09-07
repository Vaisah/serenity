import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { JamieAgent } from "@/components/jamie-agent"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <JamieAgent />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
