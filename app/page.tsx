import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
