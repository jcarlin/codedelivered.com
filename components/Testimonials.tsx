'use client'

import { useEffect, useState } from 'react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = TESTIMONIALS[i]

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="clients" className="cd-section wrap">
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '70ch' }}>
        <span className="eyebrow">What clients say</span>
        <h2 className="sec-h">
          Trusted to <span className="g">ship the hard stuff.</span>
        </h2>
      </div>
      <div
        style={{
          marginTop: 44,
          border: '1px solid var(--line)',
          borderRadius: 24,
          background: 'var(--panel-grad)',
          boxShadow: 'var(--shadow)',
          padding: 'clamp(34px, 5vw, 70px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 900,
            fontSize: 70,
            lineHeight: 0.5,
            color: 'var(--accent-text)',
            height: 36,
          }}
        >
          &ldquo;
        </div>
        <q
          style={{
            quotes: 'none',
            display: 'block',
            fontFamily: 'var(--font-head)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            fontSize: 'clamp(22px, 3vw, 38px)',
            lineHeight: 1.25,
            color: 'var(--text)',
            maxWidth: '24ch',
            textWrap: 'balance',
          }}
        >
          {t.quote}
        </q>
        <figcaption style={{ display: 'flex', alignItems: 'center', gap: 13, paddingTop: 30 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              background: 'var(--accent-tint)',
              border: '1px solid var(--accent-line)',
              color: 'var(--accent-text)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: 14,
              flex: 'none',
            }}
          >
            {t.init}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
            <div style={{ color: 'var(--muted)', fontSize: 13 }}>{t.role}</div>
          </div>
        </figcaption>
        <div style={{ display: 'flex', gap: 9, marginTop: 30 }}>
          {TESTIMONIALS.map((_, j) => (
            <button
              key={j}
              type="button"
              onClick={() => setI(j)}
              aria-label={`Testimonial ${j + 1}`}
              style={{
                width: j === i ? 26 : 9,
                height: 9,
                borderRadius: j === i ? 5 : '50%',
                border: 0,
                background: j === i ? 'var(--accent)' : 'var(--line-2)',
                cursor: 'pointer',
                padding: 0,
                transition: '0.2s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
