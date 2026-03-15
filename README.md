# CodeDelivered.com

Modern, dark-themed landing page for CodeDelivered LLC — a US-led AI engineering & full-stack development consultancy with nearshore talent.

## Tech Stack

- **Next.js 14** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Web3Forms** — Contact form backend (free)
- **react-github-calendar** — Live GitHub contribution heatmaps

## Features

- Dark theme with warm gold (#E5B534) accents
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations with Intersection Observer
- **EditorStack** — Terminal-style tech stack display rotating between Python and JS packages
- **GitHub Contributions** — Live heatmap integration with dual profiles and mobile auto-scroll
- **DesktopOS Menu Bar** — macOS-style top bar with live clock, date, and IP-based temperature
- **Project Portfolio** — Cards with live demo links, GitHub links, and full-screen image modal
- **Background Images** — Fixed-position with separate mobile/desktop variants
- SEO optimized (JSON-LD, Open Graph, Twitter Cards, robots.txt, sitemap)
- AI crawler friendly (GPTBot, Claude-Web, PerplexityBot explicitly allowed)
- Hover effects on cards and buttons
- Fast loading with minimal dependencies

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### 1. Update Social Links

Edit `lib/constants.ts`:

```typescript
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourprofile',
  email: 'info@codedelivered.com',
}
```

### 2. Configure Contact Form

The contact form uses [Web3Forms](https://web3forms.com) (free, no signup needed).

1. Get your free access key from https://web3forms.com
2. Update `components/ContactForm.tsx`:

```typescript
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
```

### 3. Customize Content

Edit `lib/constants.ts` to update:
- `SERVICES` — Expertise areas and descriptions
- `PROJECTS` — Portfolio items with images, links, and tech stacks
- `PYTHON_PACKAGES` — Python tech stack displayed in EditorStack
- `JAVASCRIPT_PACKAGES` — JS/TS tech stack displayed in EditorStack

## Project Structure

```
codedelivered.com/
├── app/
│   ├── layout.tsx              # Root layout, metadata, JSON-LD
│   ├── page.tsx                # Main landing page
│   ├── globals.css             # Tailwind + custom styles & animations
│   ├── robots.ts               # SEO robots configuration
│   └── sitemap.ts              # Sitemap generation
├── components/
│   ├── Hero.tsx                # Hero section with CTA
│   ├── Services.tsx            # Services grid container
│   ├── ServiceCard.tsx         # Service card with scroll animation
│   ├── Projects.tsx            # Featured projects grid
│   ├── ProjectCard.tsx         # Project card with image modal & links
│   ├── Contact.tsx             # Contact section wrapper
│   ├── ContactForm.tsx         # Web3Forms form with spam protection
│   ├── EditorStack.tsx         # Terminal-style package display
│   ├── GitHubHeatmap.tsx       # GitHub contributions section
│   ├── GitHubCalendarCard.tsx  # Individual heatmap with ResizeObserver
│   ├── DesktopOS.tsx           # macOS menu bar (clock, temp)
│   ├── BackgroundImage.tsx     # Fixed background (mobile/desktop)
│   ├── ImageModal.tsx          # Full-screen image viewer
│   └── Footer.tsx              # Fixed footer with social links
├── lib/
│   └── constants.ts            # All content & configuration data
├── public/
│   └── projects/               # Project screenshots & backgrounds
├── tailwind.config.ts          # Custom colors & font config
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript config with path aliases
└── CLAUDE.md                   # Project specification
```

## Architecture

See [ARCHITECTURE.md](ARCHITECTURE.md) for detailed system architecture and component relationships.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the maturity advancement plan and future direction.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" and select your repository
4. Vercel auto-detects Next.js — click Deploy
5. Configure your domain (codedelivered.com) in Vercel settings

## Customization

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: '#0A0A0A',
  surface: '#1A1A1A',
  gold: '#E5B534',
  'text-primary': '#F5F5F5',
  'text-secondary': '#A0A0A0',
}
```

### Typography

Uses Inter font from Google Fonts. Change in `app/globals.css`.

### Add New Sections

Create a component in `components/` and import it in `app/page.tsx`.

## Performance

- Lighthouse Score: 95+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Mobile Performance: 90+

## License

© 2026 CodeDelivered LLC. All rights reserved.

## Support

For questions or issues, contact: info@codedelivered.com
