import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CodeDelivered LLC — AI Engineering & Full-Stack Development'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(circle at 20% 20%, #1a1a1a 0%, #0A0A0A 60%, #000 100%)',
          color: '#F5F5F5',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              background: '#0A0A0A',
              border: '2px solid #E5B534',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#E5B534',
              fontSize: '32px',
              fontWeight: 800,
            }}
          >
            CD
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#F5F5F5' }}>
              CodeDelivered LLC
            </div>
            <div style={{ fontSize: '20px', color: '#A0A0A0' }}>codedelivered.com</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '76px',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>AI Engineering &</span>
            <span>
              Full-Stack <span style={{ color: '#E5B534' }}>Delivered</span>
            </span>
          </div>
          <div style={{ fontSize: '28px', color: '#A0A0A0', maxWidth: '900px' }}>
            US-led teams with top nearshore talent. RAG, agents, and modern web
            apps shipped on time, in your time zone.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          {['LLMs', 'RAG', 'Next.js', 'FastAPI', 'AWS', 'Kubernetes'].map((t) => (
            <div
              key={t}
              style={{
                padding: '8px 18px',
                fontSize: '22px',
                fontWeight: 500,
                color: '#E5B534',
                border: '1px solid rgba(229, 181, 52, 0.4)',
                background: 'rgba(229, 181, 52, 0.08)',
                borderRadius: '999px',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
