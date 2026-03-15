# Roadmap & Maturity Plan

## Maturity Advancement Summary

### Phase 1: Foundation (Completed)
Initial site build — core landing page structure.

- [x] Next.js 14 App Router setup with TypeScript
- [x] Dark theme with warm gold (#E5B534) accent system
- [x] Hero section with smooth-scroll CTA
- [x] Services grid (AI Engineering, Full-Stack, Cloud & DevOps)
- [x] Project portfolio cards with tech badges
- [x] Contact form with Web3Forms integration
- [x] Footer with social links
- [x] Tailwind CSS design system with custom tokens
- [x] SEO metadata (Open Graph, Twitter Cards)
- [x] Mobile responsive layout
- [x] Vercel deployment with custom domain

### Phase 2: Visual Polish (Completed)
Background, scroll, and layout refinements.

- [x] Fixed-position background images (mobile/desktop variants)
- [x] Scroll-triggered animations via Intersection Observer
- [x] Glass card hover effects (gold border glow, lift)
- [x] Grid background overlay on Hero section
- [x] Sticky footer positioning
- [x] Mobile background image fixes (iOS Safari compatibility)

### Phase 3: Interactive Features (Completed)
Dynamic components that showcase technical depth.

- [x] **EditorStack** — Terminal-style tech stack display with Python/JS tab rotation
- [x] 19 Python packages and 13 JavaScript packages catalogued
- [x] **DesktopOS Menu Bar** — macOS-style chrome with live clock and date
- [x] **IP-based temperature** — Geolocation weather display with localStorage caching
- [x] **Image Modal** — Full-screen project screenshot viewer with Escape key support

### Phase 4: GitHub Integration (Completed)
Live contribution data and profile links.

- [x] **GitHub Contribution Heatmaps** — Live calendars via react-github-calendar
- [x] Dual profile support (personal + work accounts)
- [x] **ResizeObserver** auto-scroll to recent activity on mobile
- [x] Clickable heatmap cards linking to GitHub profiles
- [x] GitHub Contributions section heading links to profile

### Phase 5: Content & Branding (Completed)
Portfolio expansion and business positioning.

- [x] **5 real project cards** with screenshots (Vault AI, Enterprise RAG, Boston Scientific Compass, NEXUS, Wine Shelf Scanner)
- [x] Live demo links and GitHub repository links on project cards
- [x] **Nearshore team positioning** — Rebranded from solo to US-led team with nearshore talent
- [x] Updated service descriptions for team voice
- [x] Card title color refinements (gold → white for professionalism)
- [x] Unified card color scheme across services and projects

### Phase 6: SEO & Discoverability (Completed)
Search engine and AI crawler optimization.

- [x] JSON-LD structured data (ProfessionalService schema)
- [x] robots.ts with explicit AI crawler permissions (GPTBot, Claude-Web, PerplexityBot)
- [x] sitemap.ts generation
- [x] Canonical URL and metadata base configuration
- [x] Open Graph images and Twitter Card support
- [x] Extended keywords (nearshore, staff augmentation)

---

## Current State: Production v2.0

The site is live at codedelivered.com with all six phases complete. It features:
- 14 React components across 876 lines of code
- 4 runtime dependencies (minimal by design)
- Full SEO optimization including AI crawler support
- Interactive elements (EditorStack, GitHub heatmaps, weather, image modals)
- 5 real portfolio projects with live links
- Mobile-first responsive design

---

## Future Roadmap

### Near Term (Next Quarter)

| Priority | Feature | Notes |
|----------|---------|-------|
| High | Blog / Articles section | Thought leadership for AI engineering topics |
| High | Client testimonials | Social proof when available |
| Medium | Case study pages | Deep-dive project write-ups (multi-page) |
| Medium | Analytics integration | Track visitor behavior and form conversions |

### Medium Term (6 Months)

| Priority | Feature | Notes |
|----------|---------|-------|
| Medium | Dark/light mode toggle | Currently dark-only |
| Medium | Newsletter signup | Email capture for content distribution |
| Low | A/B testing for CTA | Optimize conversion rates |
| Low | Downloadable portfolio PDF | One-pager for offline sharing |

### Exploratory

| Feature | Notes |
|---------|-------|
| Project detail pages | Route per project with full case study |
| Tech blog with MDX | Static blog posts using Next.js MDX support |
| Contact form analytics | Track submission rates, response times |
| Performance monitoring | Real User Monitoring (RUM) integration |
| Internationalization | Spanish language support for nearshore positioning |

---

## Technical Debt & Maintenance

| Item | Status | Notes |
|------|--------|-------|
| Test coverage | Not started | No test files exist; add Playwright E2E tests |
| Accessibility audit | Partial | Keyboard nav works; formal WCAG 2.1 audit needed |
| Lighthouse CI | Not started | Automate performance regression checks |
| Dependency updates | Ongoing | Next.js 14 → 15 migration when stable |
| Image optimization | Partial | Consider next/image for automatic optimization |
| Google Search Console | Not started | Verification code placeholder exists in layout.tsx |

---

*Last updated: March 15, 2026*
