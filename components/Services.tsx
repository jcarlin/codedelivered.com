import { SERVICES } from '@/lib/constants'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What I <span className="text-gold">Build</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              techStack={service.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
