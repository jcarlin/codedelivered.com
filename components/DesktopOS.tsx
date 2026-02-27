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

  // Fetch weather via IP-based geolocation (no browser prompt)
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const geoRes = await fetch('https://ipapi.co/json/')
        const geo = await geoRes.json()
        if (!geo.latitude || !geo.longitude) return

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&current=temperature_2m&temperature_unit=fahrenheit`
        )
        const weather = await weatherRes.json()
        if (weather.current?.temperature_2m != null) {
          const rounded = Math.round(weather.current.temperature_2m)
          setTemp(rounded)
          localStorage.setItem('cachedTemp', String(rounded))
        }
      } catch {
        // Silently fail — temp just won't show
      }
    }

    fetchWeather()
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <>
      {/* macOS Menu Bar */}
      <div className="fixed top-0 left-0 right-0 h-7 bg-black/40 backdrop-blur-xl border-b border-white/10 z-50" style={{ transform: 'translateZ(0)' }}>
        <div className="flex items-center justify-between h-full px-4 text-white/90 text-sm">
          <div className="flex items-center gap-4">
            <span className="font-semibold"></span>
            <span className="text-xs opacity-80">CodeDelivered</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            {temp !== null && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {temp}°F
              </span>
            )}
            <span>{formatDate(time)}</span>
            <span className="font-mono">{formatTime(time)}</span>
          </div>
        </div>
      </div>

      {/* Content with top padding for menu bar */}
      <div className="pt-7">
        {children}
      </div>
    </>
  )
}
