import { PROJECTS } from '@/lib/constants'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-surface/30 snap-start">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-gold">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
