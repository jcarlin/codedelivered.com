import DesktopOS from '@/components/DesktopOS'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import EditorStack from '@/components/EditorStack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <DesktopOS>
      <main className="snap-y snap-proximity min-h-screen overflow-y-auto pb-14">
        <Hero />
        {/* Combined Services & Projects Section */}
        <div className="bg-background snap-start min-h-screen">
          <Services />
          <Projects />
        </div>
        <EditorStack />
        <Contact />
      </main>
      <Footer />
    </DesktopOS>
  )
}
