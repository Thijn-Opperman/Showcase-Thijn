import { Hero } from "@/components/hero"
import { Technologies } from "@/components/technologies"
import { About } from "@/components/about"
import { WorkMethodology } from "@/components/work-methodology"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"
import PillNav from "@/components/PillNav"

export default function Home() {
  return (
    <main>
      {/* Sticky Navigation */}
      <div className="fixed top-6 left-1/2" style={{ zIndex: 100, transform: 'translateX(-50%)' }}>
        <PillNav
          logo="/profile.png"
          logoAlt="Thijn Opperman"
          items={[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#services' },
            { label: 'Contact', href: '#contact' }
          ]}
          activeHref="#home"
          baseColor="#000"
          pillColor="#4ecb71"
          hoveredPillTextColor="#000"
          pillTextColor="#000"
        />
      </div>

      <Hero />
      <Technologies />
      <About />
      <WorkMethodology />
      <Services />
      <Skills />
      <Footer />
    </main>
  )
}