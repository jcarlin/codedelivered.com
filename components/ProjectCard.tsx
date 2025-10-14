'use client'

import { useEffect, useRef, useState } from 'react'

interface ProjectCardProps {
  name: string
  description: string
  techStack: string[]
  delay?: number
}

export default function ProjectCard({ name, description, techStack, delay = 0 }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={`glass-card p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h4 className="text-xl font-bold mb-3 text-gold">{name}</h4>
      <p className="text-text-secondary mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="tech-badge text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
