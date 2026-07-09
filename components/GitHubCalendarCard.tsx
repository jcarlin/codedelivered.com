'use client'

import { useRef, useEffect } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

const START_DATE = '2025-12-01'

interface GitHubCalendarCardProps {
  username: string
  label?: string
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

    // The calendar loads its data asynchronously, so keep re-pinning as the
    // DOM/size settles instead of giving up after the first change.
    const observer = new ResizeObserver(scrollRight)
    const observeChildren = () => {
      for (const child of Array.from(el.children)) observer.observe(child)
    }
    observeChildren()

    const mutation = new MutationObserver(() => {
      observeChildren()
      scrollRight()
    })
    mutation.observe(el, { childList: true, subtree: true })

    // Timed fallbacks covering the async fetch/paint window.
    const timers = [50, 200, 500, 900, 1400, 2000].map((t) =>
      window.setTimeout(scrollRight, t)
    )

    return () => {
      observer.disconnect()
      mutation.disconnect()
      timers.forEach((id) => window.clearTimeout(id))
    }
  }, [])

  return (
    <div className="gh-card">
      <div className="lab">
        {label && <span>{label}</span>}
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
