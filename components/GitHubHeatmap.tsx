import GitHubCalendarCard from './GitHubCalendarCard'

export default function GitHubHeatmap() {
  return (
    <section id="github" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gold">GitHub</span> Contributions
        </h2>
        <p className="text-black text-center mb-12 max-w-2xl mx-auto font-medium">
          Live contribution activity since December 2025 — updated automatically from GitHub
        </p>

        <div className="flex flex-col items-center gap-10">
          <GitHubCalendarCard
            username="jcarlin"
            label="Personal"
            profileUrl="https://github.com/jcarlin"
          />
          <GitHubCalendarCard
            username="jcarlin-OF"
            label="Work"
            profileUrl="https://github.com/jcarlin-OF"
          />
        </div>
      </div>
    </section>
  )
}
