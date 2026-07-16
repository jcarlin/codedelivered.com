'use client'

import { useState } from 'react'
import { FOUNDER, SOCIAL_LINKS } from '@/lib/constants'

function LinkOut({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-100 transition-opacity"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.04em',
        color: 'var(--accent-text)',
        textDecoration: 'none',
        opacity: 0.9,
      }}
    >
      {label}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </svg>
    </a>
  )
}

export default function Founder() {
  // /founder.jpg may not exist yet — fall back to a monogram tile until it does.
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="founder" className="cd-section wrap">
      <div style={{ maxWidth: '62ch' }}>
        <span className="eyebrow">{FOUNDER.eyebrow}</span>
        <h2 className="sec-h">
          Who you&rsquo;ll <span className="g">work with.</span>
        </h2>
      </div>

      <div
        style={{
          marginTop: 40,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 'clamp(24px, 4vw, 48px)',
          background: 'var(--panel-grad)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--r)',
          boxShadow: 'var(--shadow)',
          padding: 'clamp(24px, 4vw, 44px)',
        }}
      >
        <div
          style={{
            width: 148,
            height: 148,
            borderRadius: 20,
            overflow: 'hidden',
            flex: 'none',
            display: 'grid',
            placeItems: 'center',
            background: 'var(--accent-tint)',
            border: '1px solid var(--accent-line)',
            boxShadow: '0 12px 32px -14px var(--glow)',
          }}
        >
          {photoOk ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              onError={() => setPhotoOk(false)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <span
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-head)',
                fontWeight: 800,
                fontSize: 46,
                letterSpacing: '-0.02em',
                color: 'var(--accent-text)',
              }}
            >
              {FOUNDER.initials}
            </span>
          )}
        </div>

        <div style={{ flex: '1 1 340px', minWidth: 0 }}>
          <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 24, fontWeight: 700 }}>
            {FOUNDER.name}
          </h3>
          <span
            style={{
              display: 'block',
              marginTop: 4,
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--accent-text)',
            }}
          >
            {FOUNDER.role}
          </span>
          {FOUNDER.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} style={{ marginTop: 14, color: 'var(--muted)', maxWidth: '62ch' }}>
              {paragraph}
            </p>
          ))}
          <div style={{ display: 'flex', gap: 22, marginTop: 20 }}>
            <LinkOut href={SOCIAL_LINKS.linkedin} label="LinkedIn" />
            <LinkOut href={SOCIAL_LINKS.github} label="GitHub" />
          </div>
        </div>
      </div>
    </section>
  )
}
