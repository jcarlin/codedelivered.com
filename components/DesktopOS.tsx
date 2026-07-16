'use client'

import { useState, useEffect } from 'react'

export default function DesktopOS({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState(new Date())
  const [temp, setTemp] = useState<number | null>(() => {
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem('cachedTemp')
      return cached ? Number(cached) : null
    }
    return null
  })

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Resolve approximate coordinates from the visitor's IP (no browser prompt).
    // Two providers are tried so a single outage doesn't drop the temperature.
    const resolveCoords = async (): Promise<{ lat: number; lon: number } | null> => {
      try {
        const r = await fetch('https://ipapi.co/json/')
        const g = await r.json()
        if (g.latitude && g.longitude) return { lat: g.latitude, lon: g.longitude }
      } catch {
        // fall through to the backup provider
      }
      try {
        const r = await fetch('https://ipwho.is/')
        const g = await r.json()
        if (g.latitude && g.longitude) return { lat: g.latitude, lon: g.longitude }
      } catch {
        // give up — keep showing the cached value (if any) and date/time
      }
      return null
    }

    const fetchWeather = async () => {
      try {
        const coords = await resolveCoords()
        if (!coords) return

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m&temperature_unit=fahrenheit`
        )
        const weather = await weatherRes.json()
        if (weather.current?.temperature_2m != null) {
          const rounded = Math.round(weather.current.temperature_2m)
          setTemp(rounded)
          localStorage.setItem('cachedTemp', String(rounded))
        }
      } catch {
        // Silently fail — date/time still render
      }
    }

    fetchWeather()
  }, [])

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  const formatDate = (date: Date) =>
    date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-12 backdrop-blur-xl z-50"
        style={{
          transform: 'translateZ(0)',
          background: 'color-mix(in oklch, var(--panel) 72%, transparent)',
          borderBottom: '1px solid var(--line)',
          color: 'var(--text)',
        }}
      >
        <div className="flex items-center justify-between h-full px-4 md:px-6">
          {/* Left: brand lockup */}
          <a
            href="#top"
            className="flex items-center gap-2.5 no-underline"
            style={{ color: 'var(--text)' }}
            aria-label="CodeDelivered home"
          >
            <span
              className="grid place-items-center font-mono font-bold"
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: 'var(--accent)',
                color: '#1a1305',
                fontSize: 13,
                boxShadow: '0 6px 18px -8px var(--glow)',
                flex: 'none',
              }}
              aria-hidden="true"
            >
              &gt;_
            </span>
            <span
              style={{
                fontFamily: 'var(--font-head)',
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Code<b style={{ color: 'var(--accent)', fontWeight: 800 }}>Delivered</b>
            </span>
          </a>

          {/* Center: section nav (hidden on small screens to keep the bar from wrapping) */}
          <nav
            className="hidden md:flex items-center gap-6 text-xs font-mono"
            aria-label="Sections"
            style={{ letterSpacing: '0.04em' }}
          >
            {[
              ['Work', '#work'],
              ['Services', '#services'],
              ['Security', '#security'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="opacity-70 hover:opacity-100 transition-opacity no-underline"
                style={{ color: 'var(--text)' }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right: desktop weather / date / time widget */}
          <div
            className="flex items-center gap-3 text-xs font-mono"
            style={{ color: 'var(--text)' }}
          >
              {temp !== null && (
                <span className="flex items-center gap-1">
                  <svg
                    className="w-3.5 h-3.5 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                {temp}°F
              </span>
            )}
            <span className="hidden sm:inline">{formatDate(time)}</span>
            <span>{formatTime(time)}</span>
          </div>
        </div>
      </div>

      <div className="pt-12">{children}</div>
    </>
  )
}
