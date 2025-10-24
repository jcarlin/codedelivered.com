'use client'

import { useState, useEffect } from 'react'

export default function DesktopOS({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
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
