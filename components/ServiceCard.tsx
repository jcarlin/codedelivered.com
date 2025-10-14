'use client'

import { useEffect, useRef, useState } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  techStack: string[]
}

export default function ServiceCard({ title, description, techStack }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`glass-card p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h3 className="text-2xl font-bold mb-4 text-gold">{title}</h3>
      <p className="text-text-secondary mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
