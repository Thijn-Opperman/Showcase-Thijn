import { Hero } from "@/components/hero"
import { Technologies } from "@/components/technologies"
import { About } from "@/components/about"
import { WorkMethodology } from "@/components/work-methodology"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
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