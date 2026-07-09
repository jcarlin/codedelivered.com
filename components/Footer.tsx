import { SOCIAL_LINKS } from '@/lib/constants'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 h-14 backdrop-blur-xl z-50"
      style={{
        transform: 'translateZ(0)',
        background: 'color-mix(in oklch, var(--panel) 72%, transparent)',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div className="flex items-center justify-between h-full px-4">
        <ThemeToggle />
        <div className="flex items-center gap-4 pl-4" style={{ borderLeft: '1px solid var(--line)' }}>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
            aria-label="LinkedIn"
          >
            <Image
              src="/projects/LI-In-Bug.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
            aria-label="GitHub"
          >
            <Image
              src="/projects/github-mark-white.png"
              alt="GitHub"
              width={20}
              height={20}
              className="w-5 h-5 gh-mark"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
