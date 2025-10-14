'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ImageModal from './ImageModal'

interface ProjectCardProps {
  name: string
  description: string
  techStack: string[]
  image?: string
  delay?: number
}

export default function ProjectCard({ name, description, techStack, image, delay = 0 }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    <>
      <div
        ref={cardRef}
        onClick={() => image && setIsModalOpen(true)}
        className={`glass-card p-6 transition-all duration-700 relative overflow-hidden group ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${image ? 'cursor-pointer' : ''}`}
      >
        {/* Background Image */}
        {image && (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Dark overlay - lightens on hover */}
            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-all duration-300 z-0" />

            {/* Click to view indicator */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-1 text-xs text-gold font-medium bg-black/60 px-2 py-1 rounded">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span>View</span>
              </div>
            </div>
          </>
        )}

        {/* Content */}
        <div className="relative z-10">
          <h4 className="text-xl font-bold mb-3 text-gold">{name}</h4>
          <p className="text-text-primary mb-4 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
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
