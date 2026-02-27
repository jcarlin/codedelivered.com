'use client'

import { useState, useEffect } from 'react'

export default function DesktopOS({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState(new Date())
  const [temp, setTemp] = useState<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Fetch weather based on user's geolocation
  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&temperature_unit=fahrenheit`
        )
        const data = await res.json()
        if (data.current?.temperature_2m != null) {
          setTemp(Math.round(data.current.temperature_2m))
        }
      } catch {
        // Silently fail — temp just won't show
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => {
          // Permission denied or error — try IP-based fallback
          fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
              if (data.latitude && data.longitude) {
                fetchWeather(data.latitude, data.longitude)
              }
            })
            .catch(() => {})
        }
      )
    }
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
