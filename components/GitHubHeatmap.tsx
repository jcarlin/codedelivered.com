import GitHubCalendarCard from './GitHubCalendarCard'

export default function GitHubHeatmap() {
  return (
    <section id="github" className="reveal cd-section">
      <div className="wrap">
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '70ch' }}>
          <span className="eyebrow">Always shipping</span>
          <h2 className="sec-h">
            Proof of work, <span className="g">live from GitHub</span>
          </h2>
          <p className="sec-sub" style={{ marginInline: 'auto' }}>
            The founder&rsquo;s contribution activity across client and product work — pulled straight from GitHub.
          </p>
        </div>

        <div className="gh-grid">
          <GitHubCalendarCard
            username="jcarlin"
            profileUrl="https://github.com/jcarlin"
          />
          <GitHubCalendarCard
            username="jcarlin-OF"
            profileUrl="https://github.com/jcarlin-OF"
          />
        </div>
      </div>
    </section>
  )
}
