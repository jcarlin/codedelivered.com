import { PROJECTS } from '@/lib/constants'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="work" className="cd-section wrap">
      <div>
        <span className="eyebrow">Featured work</span>
        <h2 className="sec-h">
          Shipped. <span className="g">In production.</span>
        </h2>
        <p className="sec-sub">
          A sample of recent builds — from frontier-model platforms to enterprise workflow systems.
        </p>
      </div>
      <div className="pj-rows">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            flip={index % 2 === 1}
            delay={index * 80}
          />
        ))}
      </div>
    </section>
  )
}
