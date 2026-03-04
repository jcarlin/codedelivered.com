'use client'

import { useRef, useEffect } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

interface GitHubCalendarCardProps {
  username: string
  label: string
  profileUrl: string
}

export default function GitHubCalendarCard({ username, label, profileUrl }: GitHubCalendarCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const observer = new ResizeObserver(() => {
      if (el.scrollWidth > el.clientWidth) {
        el.scrollLeft = el.scrollWidth
      }
    })

    const watchChild = () => {
      const child = el.firstElementChild
      if (child) {
        observer.observe(child)
      }
    }

    watchChild()

    const mutation = new MutationObserver(() => {
      watchChild()
      mutation.disconnect()
    })
    mutation.observe(el, { childList: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-secondary hover:text-gold transition-colors duration-200 mb-3"
      >
        {label} — @{username}
      </a>
      <div
        ref={scrollRef}
        className="glass-card p-6 md:p-8 inline-block overflow-x-auto max-w-full"
      >
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          blockSize={14}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </div>
  )
}
