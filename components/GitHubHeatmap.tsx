'use client'

import { useRef, useEffect } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

export default function GitHubHeatmap() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    // ResizeObserver fires after layout, so scrollWidth is accurate
    const observer = new ResizeObserver(() => {
      if (el.scrollWidth > el.clientWidth) {
        el.scrollLeft = el.scrollWidth
      }
    })

    // Observe the first child (the calendar) for size changes when data loads
    const watchChild = () => {
      const child = el.firstElementChild
      if (child) {
        observer.observe(child)
      }
    }

    watchChild()

    // In case the calendar element hasn't mounted yet
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
    <section id="github" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <a
          href="https://github.com/jcarlin"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 group-hover:text-gold transition-colors duration-200">
            <span className="text-gold">GitHub</span> Contributions
          </h2>
          <p className="text-black text-center mb-12 max-w-2xl mx-auto font-medium">
            Live contribution activity — updated automatically from GitHub
          </p>
        </a>

        <div className="flex justify-center">
          <div
            ref={scrollRef}
            className="glass-card p-6 md:p-8 inline-block overflow-x-auto max-w-full"
          >
            <GitHubCalendar
              username="jcarlin"
              colorScheme="dark"
              blockSize={14}
              blockMargin={4}
              fontSize={14}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
