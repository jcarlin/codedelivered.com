'use client'

import { useEffect, useState } from 'react'

type Mode = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'theme'

const isMode = (v: string | null): v is Mode =>
  v === 'light' || v === 'dark' || v === 'system'

// Resolve a mode down to the concrete data-theme the CSS palettes expect.
const resolveTheme = (mode: Mode): 'tinted' | 'dark' => {
  if (mode === 'light') return 'tinted'
  if (mode === 'dark') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'tinted'
}

const applyTheme = (mode: Mode) => {
  document.documentElement.setAttribute('data-theme', resolveTheme(mode))
}

const OPTIONS: { mode: Mode; title: string; label: string; icon: JSX.Element }[] = [
  {
    mode: 'light',
    title: 'Light',
    label: 'Light theme',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="4" strokeWidth={1.6} />
        <path
          strokeLinecap="round"
          strokeWidth={1.6}
          d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1 1M17.4 17.4l1 1M18.4 5.6l-1 1M6.6 17.4l-1 1"
        />
      </svg>
    ),
  },
  {
    mode: 'system',
    title: 'System',
    label: 'Match device theme',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="1.5" strokeWidth={1.6} />
        <path strokeLinecap="round" strokeWidth={1.6} d="M9 20h6M12 16v4" />
      </svg>
    ),
  },
  {
    mode: 'dark',
    title: 'Dark',
    label: 'Dark theme',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M20 14.5A8 8 0 019.5 4a7 7 0 108.9 10.5z"
        />
      </svg>
    ),
  },
]

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>('system')

  // Adopt the stored preference on mount and re-assert the theme. The inline
  // <head> script sets data-theme pre-paint, but React hydration reconciles the
  // server-rendered <html> attribute, so we re-apply here to keep it correct.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const initial = isMode(stored) ? stored : 'system'
    setMode(initial)
    applyTheme(initial)
  }, [])

  // While on "system", follow live OS appearance changes.
  useEffect(() => {
    if (mode !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyTheme('system')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [mode])

  const select = (next: Mode) => {
    setMode(next)
    localStorage.setItem(STORAGE_KEY, next)
    applyTheme(next)
  }

  return (
    <div
      className="theme-seg"
      role="group"
      aria-label="Color theme"
    >
      {OPTIONS.map((opt) => {
        const active = mode === opt.mode
        return (
          <button
            key={opt.mode}
            type="button"
            className={active ? 'theme-seg-btn is-active' : 'theme-seg-btn'}
            aria-label={opt.label}
            aria-pressed={active}
            title={opt.title}
            onClick={() => select(opt.mode)}
          >
            {opt.icon}
          </button>
        )
      })}
    </div>
  )
}
