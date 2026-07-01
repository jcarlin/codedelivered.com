import DesktopOS from '@/components/DesktopOS'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
// import Governance from '@/components/Governance' // disabled — uncomment to enable section
import Projects from '@/components/Projects'
// import Testimonials from '@/components/Testimonials' // disabled — uncomment to enable section
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

        {/* Solid block: projects (governance + testimonials disabled per request) */}
        <div className="cd-page">
          {/* <Governance /> */}
          <Projects />
          {/* <Testimonials /> */}
        </div>

        {/* Reveal block: editor + github show the sunset background */}
        <EditorStack />
        <GitHubHeatmap />

        {/* Solid block: contact */}
        <div className="cd-page">
          <Contact />
        </div>
      </main>
      <Footer />
    </DesktopOS>
  )
}
