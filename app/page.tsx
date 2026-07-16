import DesktopOS from '@/components/DesktopOS'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Governance from '@/components/Governance'
import Projects from '@/components/Projects'
import Founder from '@/components/Founder'
import EditorStack from '@/components/EditorStack'
import GitHubHeatmap from '@/components/GitHubHeatmap'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <DesktopOS>
      <main className="min-h-screen pb-14">
        <Hero />

        {/* Services extends the hero photo as its background (reveal) */}
        <Services />

        {/* Solid block: projects + founder */}
        <div className="cd-page">
          <Projects />
          <Founder />
        </div>

        {/* Reveal block: editor + github show the sunset background */}
        <EditorStack />
        <GitHubHeatmap />

        {/* Solid block: governance + contact */}
        <div className="cd-page">
          <Governance />
          <Contact />
        </div>
      </main>
      <Footer />
    </DesktopOS>
  )
}
