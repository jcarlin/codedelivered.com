import { SOCIAL_LINKS } from '@/lib/constants'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-14 bg-white/80 backdrop-blur-md border-t border-black/[0.08] z-50" style={{ transform: 'translateZ(0)' }}>
      <div className="flex items-center justify-end h-full px-4">
        <div className="flex items-center gap-4 pl-4 border-l border-black/[0.08]">
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
            <img
              src="/projects/github-mark.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
