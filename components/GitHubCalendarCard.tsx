'use client'

import { useRef, useEffect } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

const START_DATE = '2025-12-01'

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
    <div className="gh-card">
      <div className="lab">
        <span>{label}</span>
        <a href={profileUrl} target="_blank" rel="noreferrer">
          View profile →
        </a>
      </div>
      <div ref={scrollRef} className="overflow-x-auto">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          transformData={(activities) => activities.filter((a) => a.date >= START_DATE)}
          labels={{ totalCount: '{{count}} contributions since Dec 2025' }}
        />
      </div>
    </div>
  )
}
