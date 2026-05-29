import GitHubCalendarCard from './GitHubCalendarCard'

export default function GitHubHeatmap() {
  return (
    <section id="github" className="reveal cd-section">
      <div className="wrap">
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '70ch' }}>
          <span className="eyebrow">Always shipping</span>
          <h2 className="sec-h">
            Live from our <span className="g">GitHub</span>
          </h2>
          <p className="sec-sub" style={{ marginInline: 'auto' }}>
            Contribution activity across personal and client work — pulled straight from GitHub.
          </p>
        </div>

        <div className="gh-grid">
          <GitHubCalendarCard
            username="jcarlin"
            label="Personal — @jcarlin"
            profileUrl="https://github.com/jcarlin"
          />
          <GitHubCalendarCard
            username="jcarlin-OF"
            label="Work — @jcarlin-OF"
            profileUrl="https://github.com/jcarlin-OF"
          />
        </div>
      </div>
    </section>
  )
}
