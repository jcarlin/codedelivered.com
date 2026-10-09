export default function Hero() {
  return (
    <section id="top" className="hero reveal">
      <div className="wrap">
        <span className="hero-eyebrow">
          <span className="dot"></span>US-led · nearshore talent · your time zone
        </span>
        <h1 style={{ marginTop: 22 }}>
          AI Engineering & Full-Stack Development, <span className="g">Delivered.</span>
        </h1>
        <p>
          Senior US and nearshore engineers building intelligent, scalable products — governed, secure, and shipped on time.
        </p>
        <div className="cta">
          <a className="btn" href="#contact">
            Start a project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="btn ghost" href="#work">See our work</a>
        </div>
      </div>
    </section>
  )
}
