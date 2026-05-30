'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ImageModal from './ImageModal'

interface ProjectCardProps {
  name: string
  tag: string
  description: string
  techStack: string[]
  image?: string
  url?: string
  website?: string
  github?: string
  comingSoon?: boolean
  flip?: boolean
  delay?: number
}

function ExtIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  )
}

function GhIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-4 1.3-4-2.2-5.5-2.6M15 21v-3.4c0-1 .3-1.6.8-2 -3-.3-6-1.4-6-6.3 0-1.4.5-2.5 1.2-3.4 -.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.3a11 11 0 0 1 6 0C18.9 1.7 20 2 20 2c.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.4 0 4.9-3 6-5.9 6.3.4.4.8 1.1.8 2.3V21" />
    </svg>
  )
}

export default function ProjectCard({
  name,
  tag,
  description,
  techStack,
  image,
  url,
  website,
  github,
  comingSoon = false,
  flip = false,
  delay = 0,
}: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

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
    <>
      <article
        ref={cardRef}
        className={'pj-row' + (flip ? ' flip' : '')}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="pj-media">
          {image ? (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              aria-label={`View ${name} screenshot`}
              style={{
                all: 'unset',
                display: 'block',
                width: '100%',
                height: '100%',
                position: 'relative',
                cursor: 'zoom-in',
              }}
            >
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </button>
          ) : (
            <div className="pj-soon">
              <span className="status-pill">
                <span className="dot"></span>Coming Soon
              </span>
            </div>
          )}
        </div>
        <div className="pj-info">
          <span className="pj-tag">{tag}</span>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="pills mini">
            {techStack.map((tech) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ))}
          </div>
          {!comingSoon && (url || website || github) && (
            <div className="pj-links">
              {url && (
                <a href={url} target="_blank" rel="noreferrer">
                  <ExtIcon />
                  Live App
                </a>
              )}
              {website && (
                <a href={website} target="_blank" rel="noreferrer">
                  <WebIcon />
                  Website
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noreferrer">
                  <GhIcon />
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </article>

      {image && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc={image}
          imageAlt={name}
        />
      )}
    </>
  )
}
