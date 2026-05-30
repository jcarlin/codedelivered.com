import ContactForm from './ContactForm'
import { SOCIAL_LINKS } from '@/lib/constants'

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="cd-section wrap">
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '70ch' }}>
        <span className="eyebrow">Let&rsquo;s build together</span>
        <h2 className="sec-h">
          Have something <span className="g">worth shipping?</span>
        </h2>
        <p className="sec-sub" style={{ marginInline: 'auto' }}>
          Tell us what you&rsquo;re building. We&rsquo;ll come back within one business day with a plan, a team, and a timeline.
        </p>
      </div>
      <div className="contact-card">
        <ContactForm />
        <aside className="contact-aside">
          <h3>Start a conversation</h3>
          <p>US-led, nearshore-powered. Senior engineers in your time zone, governance baked in from day one.</p>
          <div className="contact-list">
            <a
              className="ci"
              href={`mailto:${SOCIAL_LINKS.email}`}
              style={{ textDecoration: 'none' }}
            >
              <span className="ico">
                <MailIcon />
              </span>
              {SOCIAL_LINKS.email}
            </a>
            <div className="ci">
              <span className="ico">
                <ClockIcon />
              </span>
              Replies within one business day
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
