'use client'

import { useEffect, useState } from 'react'

type Theme = 'warm' | 'crisp' | 'tinted'

const THEMES: { id: Theme; label: string }[] = [
  { id: 'warm', label: 'Warm' },
  { id: 'crisp', label: 'Crisp' },
  { id: 'tinted', label: 'Tinted' },
]

const STORAGE_KEY = 'cd-theme'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('warm')

  // Reflect whatever the no-flash init script already applied to <html>.
  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) || 'warm'
    if (THEMES.some((t) => t.id === current)) setTheme(current)
  }, [])

  const select = (next: Theme) => {
    setTheme(next)
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore storage failures (private mode, etc.)
    }
  }

  return (
    <div className="theme-toggle" role="group" aria-label="Color theme">
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          className={'tt-opt' + (theme === t.id ? ' on' : '')}
          aria-pressed={theme === t.id}
          onClick={() => select(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
