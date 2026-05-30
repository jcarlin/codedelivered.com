import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0b',
        'bg-2': '#0f0f11',
        panel: '#111114',
        'panel-2': '#16161a',
        accent: '#f2b21e',
        gold: '#f2b21e',
        surface: '#16161a',
        text: '#f6f5f2',
        'text-primary': '#f6f5f2',
        'text-secondary': '#a8a7ad',
        muted: '#a8a7ad',
        'muted-2': '#6c6b72',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        head: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
