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

    // Pin the view to the most recent (right-most) weeks.
    const scrollRight = () => {
      if (el.scrollWidth > el.clientWidth) {
        el.scrollLeft = el.scrollWidth
      }
    }

    const observer = new ResizeObserver(scrollRight)

    const watchChild = () => {
      const child = el.firstElementChild
      if (child) {
        observer.observe(child)
        // a couple of frames so it lands right after the calendar paints
        requestAnimationFrame(() => {
          scrollRight()
          requestAnimationFrame(scrollRight)
        })
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
      <div ref={scrollRef} className="gh-scroll max-w-full min-w-0">
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
