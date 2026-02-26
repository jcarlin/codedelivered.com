'use client'

import { GitHubCalendar } from 'react-github-calendar'

export default function GitHubHeatmap() {
  return (
    <section id="github" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gold">GitHub</span> Contributions
        </h2>
        <p className="text-black text-center mb-12 max-w-2xl mx-auto font-medium">
          Live contribution activity — updated automatically from GitHub
        </p>

        <div className="flex justify-center">
          <div className="glass-card p-6 md:p-8 inline-block overflow-x-auto max-w-full">
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
