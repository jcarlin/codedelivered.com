import { SERVICES } from '@/lib/constants'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services" className="cd-section wrap">
      <div>
        <span className="eyebrow">What we deliver</span>
        <h2 className="sec-h">
          Three teams in one, <span className="g">on demand.</span>
        </h2>
        <p className="sec-sub">
          AI, product engineering, and infrastructure under one roof — scale any of them up or down as your roadmap moves.
        </p>
      </div>
      <div className="svc-grid">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={index}
            n={service.n}
            title={service.title}
            tagline={service.tagline}
            description={service.description}
            points={service.points}
            techStack={service.techStack}
          />
        ))}
      </div>
    </section>
  )
}
