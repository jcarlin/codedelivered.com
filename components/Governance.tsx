import { GOVERNANCE } from '@/lib/constants'

const ICONS = ['⛨', '◉', '✓']

export default function Governance() {
  return (
    <section id="security" className="cd-section wrap">
      <div style={{ maxWidth: '62ch' }}>
        <span className="eyebrow">{GOVERNANCE.eyebrow}</span>
        <h2 className="sec-h">
          {GOVERNANCE.title.split('automated')[0]}
          <span className="g">automated.</span>
        </h2>
        <p className="sec-sub">{GOVERNANCE.description}</p>
      </div>
      <div className="svc-grid" style={{ marginTop: 40 }}>
        {GOVERNANCE.items.map((it, i) => (
          <div key={it.title} className="svc">
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                display: 'grid',
                placeItems: 'center',
                background: 'var(--accent-tint)',
                border: '1px solid var(--accent-line)',
                color: 'var(--accent-text)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
              }}
            >
              {ICONS[i]}
            </div>
            <h3 style={{ fontSize: 18, marginTop: 16 }}>{it.title}</h3>
            <p style={{ marginTop: 8 }}>{it.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
