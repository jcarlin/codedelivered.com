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
        background: '#FAFAF7',
        'bg-2': '#F4F4F0',
        panel: '#FFFFFF',
        'panel-2': '#F8F8F5',
        accent: '#B8860B',
        gold: '#B8860B',
        surface: '#F8F8F5',
        text: '#1C1C1C',
        'text-primary': '#1C1C1C',
        'text-secondary': '#636363',
        muted: '#636363',
        'muted-2': '#9A9A9A',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        head: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
