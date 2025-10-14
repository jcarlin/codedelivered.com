import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="snap-y snap-proximity h-screen overflow-y-auto">
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
