# Architecture

## Overview

CodeDelivered.com is a single-page Next.js 14 application using the App Router. It renders a landing page with six content sections wrapped in a macOS-style desktop chrome. The site is statically optimizable, uses no server-side data fetching, and relies on a single third-party runtime dependency beyond React/Next.js.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3.4 + custom CSS utilities |
| Contact Form | Web3Forms (client-side POST) |
| GitHub Data | react-github-calendar (client-side fetch) |
| Deployment | Vercel |

## Component Tree

```
RootLayout (app/layout.tsx)
├── BackgroundImage          # Fixed-position bg with mobile/desktop variants
├── <script> JSON-LD         # Structured data for search engines
└── Home (app/page.tsx)
    └── DesktopOS            # macOS menu bar wrapper (clock, date, temp)
        └── <main>
            ├── Hero                    # Full-viewport hero with CTA
            ├── <div> (bg-background)   # Combined dark section
            │   ├── Services
            │   │   └── ServiceCard ×3  # Intersection Observer fade-in
            │   └── Projects
            │       └── ProjectCard ×5  # Image modal + external links
            ├── EditorStack             # Terminal-style package display
            ├── GitHubHeatmap
            │   └── GitHubCalendarCard ×2  # ResizeObserver for mobile scroll
            └── Contact
                └── ContactForm         # Web3Forms + honeypot spam protection
        └── Footer                      # Fixed sticky footer
```

## Page Sections (render order)

1. **Hero** — Full viewport, headline + CTA button (scrolls to Contact)
2. **Services** — 3-column grid of expertise areas with scroll-triggered animations
3. **Projects** — 3-column grid of portfolio items with screenshots, live links, GitHub links
4. **EditorStack** — Terminal UI rotating between Python requirements.txt and package.json
5. **GitHub Heatmap** — Live contribution calendars for two GitHub profiles
6. **Contact** — Form with name/email/message, Web3Forms backend
7. **Footer** — Fixed at bottom with LinkedIn/GitHub/email links

## Data Flow

```
lib/constants.ts ──→ Components (static content)
                       ├── SERVICES      → Services/ServiceCard
                       ├── PROJECTS      → Projects/ProjectCard
                       ├── SOCIAL_LINKS  → Footer, Contact
                       ├── PYTHON_PACKAGES   → EditorStack
                       └── JAVASCRIPT_PACKAGES → EditorStack

Web3Forms API ←── ContactForm (POST on submit)
GitHub API    ←── react-github-calendar (client-side fetch)
ip-api.com    ←── DesktopOS (temperature via IP geolocation)
```

All content is defined in `lib/constants.ts`. No CMS, no database, no server-side API routes.

## Styling Architecture

### Design Tokens (tailwind.config.ts)

```
background:     #0A0A0A    (near black)
surface:        #1A1A1A    (card backgrounds)
gold:           #E5B534    (accent color)
text-primary:   #F5F5F5    (headings, body)
text-secondary: #A0A0A0    (muted text)
```

### Custom CSS Classes (globals.css)

| Class | Purpose |
|-------|---------|
| `.glass-card` | Semi-transparent card with blur, gold border on hover, lift effect |
| `.gradient-bg` | 135° gradient from #0A0A0A to #1A1A1A |
| `.tech-badge` | Gold-tinted pill for technology labels |
| `.btn-primary` | Gold button with hover scale + glow |

### Animations

- **fadeIn / scaleIn** — CSS keyframe animations for element entrance
- **blob** — Slow ambient movement animation (20s cycle)
- **Intersection Observer** — ServiceCard uses native IO for scroll-triggered fade-in
- **ResizeObserver** — GitHubCalendarCard uses RO to auto-scroll heatmaps on mobile

## Key Patterns

### Client-Side Only

All components use `'use client'` directives. There are no server components beyond the root layout. This is intentional — the site is content-static and all interactivity (animations, form submission, GitHub data, geolocation) happens client-side.

### No External State Management

Components manage their own state with `useState` and `useEffect`. No Redux, Zustand, or context providers. The app is simple enough that prop drilling from constants is sufficient.

### Image Strategy

- Project screenshots stored in `public/projects/`
- Background images use fixed-position `<img>` elements (not CSS `background-image`) to avoid iOS Safari rendering bugs
- Separate mobile/desktop background variants loaded based on viewport

### SEO & Discoverability

- JSON-LD structured data (ProfessionalService schema) in layout
- Open Graph + Twitter Card meta tags
- `robots.ts` explicitly allows AI crawlers (GPTBot, Claude-Web, PerplexityBot)
- `sitemap.ts` generates sitemap.xml
- Semantic HTML structure

## Build & Deploy

```bash
npm run dev     # Local development (localhost:3000)
npm run build   # Production build
npm start       # Serve production build locally
```

Deployed via Vercel with automatic builds on push to main. Domain: codedelivered.com.

## Dependencies (minimal by design)

**Runtime:** next, react, react-dom, react-github-calendar (4 packages)

**Dev:** typescript, tailwindcss, postcss, autoprefixer, eslint, @types/* (standard Next.js toolchain)

No animation libraries, no CSS-in-JS, no state management libraries, no icon libraries.
