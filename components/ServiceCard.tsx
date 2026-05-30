'use client'

import { useEffect, useRef, useState } from 'react'

interface ServiceCardProps {
  n: string
  title: string
  tagline: string
  description: string
  points: string[]
  techStack: string[]
}

export default function ServiceCard({ n, title, tagline, description, points, techStack }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

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
    <article
      ref={cardRef}
      className="svc"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, border-color 0.25s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="num">/ {n}</div>
      <h3>{title}</h3>
      <div className="tl">{tagline}</div>
      <p>{description}</p>
      <ul className="pts">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="divider"></div>
      <div className="pills">
        {techStack.map((tech) => (
          <span key={tech} className="pill">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
