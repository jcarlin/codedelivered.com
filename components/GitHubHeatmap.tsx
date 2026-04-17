import GitHubCalendarCard from './GitHubCalendarCard'

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

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-8">
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
