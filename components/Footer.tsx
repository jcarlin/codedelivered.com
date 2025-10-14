import { SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-surface py-12 snap-start">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-text-secondary text-sm">
            © {new Date().getFullYear()} CodeDelivered LLC. All rights reserved.
          </div>

          <div className="flex gap-8">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-gold transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-text-secondary hover:text-gold transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
