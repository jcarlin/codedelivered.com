import { SERVICES } from '@/lib/constants'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services">
      {/* Title band on the solid background — gives a clear division from the hero */}
      <div className="cd-page">
        <div
          className="wrap"
          style={{ paddingTop: 'clamp(64px, 9vw, 128px)', paddingBottom: 'clamp(36px, 5vw, 56px)' }}
        >
          <span className="eyebrow">What we deliver</span>
          <h2 className="sec-h">
            Three teams in one, <span className="g">on demand.</span>
          </h2>
          <p className="sec-sub">
            AI, product engineering, and infrastructure under one roof — scale any of them up or down as your roadmap moves.
          </p>
        </div>
      </div>

      {/* Cards band — reveals the hero photo behind the cards */}
      <div className="reveal">
        <div
          className="wrap"
          style={{ paddingTop: 'clamp(28px, 4vw, 44px)', paddingBottom: 'clamp(64px, 9vw, 128px)' }}
        >
          <div className="svc-grid" style={{ marginTop: 0 }}>
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
        </div>
      </div>
    </section>
  )
}
