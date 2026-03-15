# CodeDelivered.com - Project Specification

## Project Overview

**Objective:** Modern, professional, dark-themed single-page landing site showcasing US-led AI engineering and full-stack development with nearshore talent.

**Status:** Production — live at codedelivered.com

**Site Goals:**
- Modern, clean dark aesthetic with warm gold accents
- Showcase AI engineering expertise and project portfolio
- Interactive elements (EditorStack, GitHub heatmaps, DesktopOS menu bar)
- Professional contact form with spam protection
- Mobile responsive with separate background variants
- Fast loading, SEO optimized, AI crawler friendly

---

## Tech Stack

### Core Technologies
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

### Third-Party Services
- **Contact Form:** Web3Forms (free tier, no backend needed)
- **GitHub Heatmaps:** react-github-calendar

### Why This Stack?
- **Next.js:** Industry standard, excellent performance, SEO-friendly, easy Vercel deployment
- **TypeScript:** Type safety, better DX
- **Tailwind:** Rapid styling, consistent design system, small bundle size
- **No animation libraries:** Keep it simple with CSS transitions/animations

---

## Design System

### Color Palette

**Brand Evolution:**
- Current site uses Orange (#FFA500)
- New site uses Warm Gold (#E5B534) - more sophisticated, honors orange heritage

**Primary Colors:**
```
Background:     #0A0A0A (near black)
Card/Surface:   #1A1A1A (dark gray)
Accent/Gold:    #E5B534 (warm gold)
Text Primary:   #F5F5F5 (off-white)
Text Secondary: #A0A0A0 (medium gray)
Border:         rgba(229, 181, 52, 0.2) (gold with transparency)
```

### Typography

**Font Family:** Inter (free, clean, modern)
- Headings: Inter 700-800 weight
- Body: Inter 400-500 weight
- Small/Labels: Inter 500 weight

**Font Sizes (Tailwind):**
```
Hero Headline:    text-5xl md:text-6xl lg:text-7xl
Section Titles:   text-3xl md:text-4xl
Card Titles:      text-xl md:text-2xl
Body Text:        text-base md:text-lg
Small Text:       text-sm
```

### Spacing
- Section padding: py-20 md:py-32
- Container max-width: max-w-7xl
- Card spacing: space-y-8 or gap-8
- Consistent padding: p-6 md:p-8

### Effects & Animations

**Hover Effects:**
- Cards: Subtle lift (transform: translateY(-4px)) + gold border glow
- Buttons: Scale slightly (scale-105) + brightness increase
- Links: Gold underline animation

**Scroll Animations:**
- Fade-in on scroll using Intersection Observer
- Stagger delays for multiple items (100-200ms between)
- Smooth scrolling between sections

**Transitions:**
- Duration: 200-300ms
- Easing: ease-in-out
- Properties: transform, box-shadow, border-color, opacity

---

## Site Structure

### Page Layout (Single Page, Sections)

```
┌─────────────────────────────────────┐
│          Hero Section               │  Full viewport height
│  - Headline + Subheadline           │  Dark gradient background
│  - CTA Button (scroll to contact)   │  Gold CTA button
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│       Services/Expertise            │  3-column grid (1-col mobile)
│  ┌───────┐  ┌───────┐  ┌───────┐   │  Hover effects
│  │  AI   │  │ Full  │  │ Cloud │   │  Tech badges
│  │ Eng   │  │ Stack │  │DevOps │   │
│  └───────┘  └───────┘  └───────┘   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│       Featured Projects             │  2-3 cards
│  ┌─────────────┐  ┌─────────────┐  │  Project name + description
│  │  Project 1  │  │  Project 2  │  │  Tech stack badges
│  └─────────────┘  └─────────────┘  │  Hover lift effect
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│          Contact Form               │  Simple form
│  Name:    [_______________]         │  Name, Email, Message
│  Email:   [_______________]         │  Gold submit button
│  Message: [_______________]         │  Formspree integration
│           [Submit Button]           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│            Footer                   │  Social links
│  LinkedIn | GitHub                  │  Copyright 2025
│  © CodeDelivered LLC 2025           │
└─────────────────────────────────────┘
```

---

## Content Strategy

### Hero Section
**Headline:** "AI Engineering & Full-Stack Development, Delivered"

**Subheadline:** "US-led AI engineering and full-stack development with top nearshore talent. Flexible teams that scale with your project."

**CTA:** "Get in Touch" (smooth scrolls to contact form)

### Services Section

**1. AI Engineering**
- Description: "Custom LLM applications, RAG systems, and intelligent automation — built by engineers who live and breathe AI, every day"
- Tech: vLLM, OpenAI, Anthropic, LangChain, Vector DBs, Python

**2. Full-Stack Development**
- Description: "Modern, scalable web applications built by our US and nearshore engineers — scale the team up or down as your project demands"
- Tech: React, Next.js, Node.js, TypeScript, PostgreSQL

**3. Cloud & DevOps**
- Description: "Robust cloud infrastructure, CI/CD pipelines, and automated deployment workflows — managed end-to-end so you ship faster"
- Tech: AWS, GCP, Docker, Kubernetes, Terraform

### Projects Section

**Project 1: Vault AI Systems** (live: vault-ai-frontend.vercel.app)
- Description: "Real-time analytics platform with LLM-powered insights and natural language queries"
- Tech: Ubuntu, Nvidia Container Toolkit, Harbor, Ansible, Docker, Prometheus, Grafana, Vector DB, vLLM, CUDA

**Project 2: Enterprise RAG System**
- Description: "Document intelligence system enabling semantic search across company knowledge base"
- Tech: LangGraph, vLLM, LiteLLM, LlamaIndex, Milvus, FastAPI, React, Celery, Redis, PostgreSQL, Neo4j, MinIO

**Project 3: Boston Scientific - Compass** (live: compass.bsci.com)
- Description: "Custom FP&A workflow platform connecting enterprise SaaS systems through unified API integration"
- Tech: Nest.js, Nx, Angular 20, AWS

**Project 4: NEXUS** (GitHub: jcarlin/NEXUS)
- Description: "Multimodal RAG investigation platform for legal document intelligence — ingests, analyzes, and queries 50,000+ pages of mixed-format legal documents"
- Tech: FastAPI, LangGraph, Claude AI, Qdrant, Neo4j, React, Celery, PostgreSQL, Docling

**Project 5: Wine Shelf Scanner** (live + GitHub: jcarlin/wine-shelf-scanner)
- Description: "AI-powered wine identification app that scans store shelves and overlays ratings from 191K+ wines instantly"
- Tech: Next.js, SwiftUI, FastAPI, Google Cloud Vision, Claude AI, SQLite

### Contact Form
- Sends to: info@codedelivered.com
- Fields: Name, Email, Message
- Success message: "Thanks! I'll get back to you within 24 hours."

### Footer
- LinkedIn: [Your LinkedIn URL]
- GitHub: [Your GitHub URL]
- Copyright: "© CodeDelivered LLC 2025"

---

## File Structure

```
codedelivered.com/
├── app/
│   ├── layout.tsx              # Root layout, metadata, JSON-LD structured data
│   ├── page.tsx                # Main landing page orchestrator
│   ├── globals.css             # Tailwind + custom styles & animations
│   ├── robots.ts               # SEO robots configuration (AI crawlers allowed)
│   └── sitemap.ts              # Sitemap generation
├── components/
│   ├── Hero.tsx                # Hero section with CTA
│   ├── Services.tsx            # Services grid container
│   ├── ServiceCard.tsx         # Service card with Intersection Observer fade-in
│   ├── Projects.tsx            # Featured projects grid
│   ├── ProjectCard.tsx         # Project card with image modal & external links
│   ├── Contact.tsx             # Contact section wrapper
│   ├── ContactForm.tsx         # Web3Forms form with honeypot spam protection
│   ├── EditorStack.tsx         # Terminal-style package display (Python/JS tabs)
│   ├── GitHubHeatmap.tsx       # GitHub contributions section
│   ├── GitHubCalendarCard.tsx  # Individual heatmap card with ResizeObserver
│   ├── DesktopOS.tsx           # macOS menu bar (clock, date, temperature)
│   ├── BackgroundImage.tsx     # Fixed background with mobile/desktop variants
│   ├── ImageModal.tsx          # Full-screen image viewer with Escape key
│   └── Footer.tsx              # Fixed footer with social links
├── lib/
│   └── constants.ts            # All content: services, projects, packages, social links
├── public/
│   └── projects/               # Project screenshots, backgrounds, social icons
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── ARCHITECTURE.md             # System architecture documentation
├── ROADMAP.md                  # Maturity plan and future direction
├── CLAUDE.md                   # This file
└── README.md
```

---

## Component Architecture

### Hero.tsx
- Full viewport height with centered content
- Dark gradient background overlay
- Headline, subheadline, CTA button
- CTA scrolls smoothly to contact section

### ServiceCard.tsx
**Props:** title, description, techStack[]
- Glass card with gold border glow on hover
- Intersection Observer for scroll-triggered fade-in
- Tech badges at bottom

### ProjectCard.tsx
**Props:** name, description, techStack[], image?, url?, github?
- Project screenshot with click-to-enlarge (ImageModal)
- Optional live demo link and GitHub link
- Hover lift effect with tech badges

### EditorStack.tsx
- Terminal-style component with Python/JS package tabs
- Auto-rotates between requirements.txt and package.json views
- Displays tech stack with versions and descriptions
- Data driven from PYTHON_PACKAGES and JAVASCRIPT_PACKAGES constants

### GitHubHeatmap.tsx / GitHubCalendarCard.tsx
- Live GitHub contribution heatmaps via react-github-calendar
- Dual profiles (personal + work)
- ResizeObserver for mobile auto-scroll to most recent activity
- Clickable cards linking to GitHub profiles

### DesktopOS.tsx
- macOS-style menu bar fixed to top of page
- Live clock and current date display
- IP-based geolocation temperature (cached in localStorage)

### BackgroundImage.tsx
- Fixed-position background images
- Separate mobile and desktop image variants
- Handles viewport sizing without CSS background-image quirks

### ImageModal.tsx
- Full-screen image viewer for project screenshots
- Escape key and click-outside to close
- Scroll lock when modal is open

### ContactForm.tsx
- Web3Forms integration with honeypot spam protection
- Form validation (email format, required fields)
- Loading state, success/error messages
- Gold submit button

### Footer.tsx
- Fixed sticky footer with social links (LinkedIn, GitHub)
- Copyright notice
- Dark background

---

## Implementation Steps

### Phase 1: Project Setup
1. Initialize Next.js with TypeScript and Tailwind
   ```bash
   npx create-next-app@latest codedelivered --typescript --tailwind --app
   ```
2. Install dependencies (if any)
3. Configure Tailwind with custom colors
4. Set up globals.css with base styles

### Phase 2: Design System
1. Add Inter font from Google Fonts
2. Define color variables in Tailwind config
3. Create reusable CSS classes for cards, buttons, gradients
4. Set up responsive breakpoints

### Phase 3: Components (Build Order)
1. Create `lib/constants.ts` with all content
2. Build `Footer.tsx` (simplest)
3. Build `Hero.tsx` (most important)
4. Build `ServiceCard.tsx` and `Services.tsx`
5. Build `ProjectCard.tsx` and `Projects.tsx`
6. Build `ContactForm.tsx` and `Contact.tsx`

### Phase 4: Main Page
1. Import all components into `app/page.tsx`
2. Arrange sections in order
3. Add section IDs for smooth scrolling
4. Test layout flow

### Phase 5: Animations & Interactions
1. Implement Intersection Observer for scroll animations
2. Add hover effects to cards
3. Add smooth scroll behavior
4. Test all interactive elements

### Phase 6: Responsive Design
1. Test on mobile (375px width)
2. Test on tablet (768px width)
3. Test on desktop (1280px+ width)
4. Adjust spacing, font sizes, grid columns
5. Ensure touch targets are 44px minimum

### Phase 7: Polish & Performance
1. Add SEO metadata in `layout.tsx`
2. Optimize images (if any)
3. Test loading performance
4. Accessibility check (keyboard navigation, ARIA labels)
5. Cross-browser testing

### Phase 8: Deployment
1. Push to GitHub
2. Connect to Vercel
3. Configure domain (codedelivered.com)
4. Test production build
5. Set up analytics (optional)

---

## SEO Metadata

```typescript
// app/layout.tsx
export const metadata = {
  title: 'CodeDelivered LLC | AI Engineering & Full-Stack Development',
  description: 'Expert AI engineering, full-stack development, and cloud architecture services. Building intelligent applications with modern technologies.',
  keywords: 'AI engineering, LLM development, RAG systems, full-stack development, Next.js, cloud architecture, AWS, consulting',
  authors: [{ name: 'CodeDelivered LLC' }],
  openGraph: {
    title: 'CodeDelivered LLC | AI Engineering & Full-Stack Development',
    description: 'Expert AI engineering and full-stack development services',
    url: 'https://codedelivered.com',
    siteName: 'CodeDelivered LLC',
    locale: 'en_US',
    type: 'website',
  },
}
```

---

## Form Integration (Formspree)

### Setup:
1. Sign up at formspree.io (free tier)
2. Create new form, get form ID
3. Use in ContactForm.tsx:

```typescript
<form action="https://formspree.io/f/{YOUR_FORM_ID}" method="POST">
  <input type="email" name="email" required />
  <input type="text" name="name" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

### Alternative: Web3Forms
- Even simpler: just need access key
- No signup required
- https://web3forms.com/

---

## Performance Targets

- **Lighthouse Score:** 95+ (all categories)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Bundle Size:** < 200KB (JS)
- **Mobile Performance:** 90+

### Optimization Strategies:
- Minimal dependencies (no heavy libraries)
- CSS animations only (no JS animation libraries)
- Lazy load below-fold content
- Optimize fonts (preload, font-display: swap)
- Minify CSS/JS (automatic in Next.js production)

---

## Post-Launch Checklist

- [x] Test on Chrome, Firefox, Safari
- [x] Test on iOS and Android devices
- [x] Verify contact form sends emails to info@codedelivered.com
- [x] Check all links work (LinkedIn, GitHub)
- [x] Verify smooth scrolling on all browsers
- [x] Test keyboard navigation
- [x] Run Lighthouse audit
- [x] Check mobile responsiveness on various screen sizes
- [x] Verify domain is correctly configured
- [x] Test loading speed on slow 3G connection
- [x] Proofread all content for typos

---

## Future Enhancements

**Completed since v1.0:**
- ~~More detailed project case studies~~ → Live project cards with screenshots, demo links, and GitHub links
- Interactive tech stack visualization (EditorStack)
- Live GitHub contribution heatmaps
- DesktopOS menu bar with weather integration
- Team/nearshore positioning rebrand

**Priority 2 (Optional):**
- Add blog/articles section for thought leadership
- Client testimonials (when available)
- Dark/light mode toggle (currently dark only)

**Priority 3 (Nice to Have):**
- Analytics dashboard integration
- A/B testing for CTA buttons
- Newsletter signup
- Downloadable resume/portfolio PDF

---

## Success Metrics

**Immediate (Technical):**
- Site loads in under 2 seconds
- Lighthouse score > 95
- 100% mobile responsive
- Contact form works reliably

**Short-term (1-3 months):**
- Professional appearance drives trust
- Contact form submissions from potential clients
- Positive feedback on design

**Long-term (6+ months):**
- Converts leads to clients
- Establishes credibility in AI engineering space
- Serves as portfolio for showcasing work

---

## Notes & Decisions

**Why single-page?**
- Simple consultancy doesn't need multi-page complexity
- Better UX for quick overview
- Easier to maintain
- Faster load times

**Why dark theme?**
- Modern, tech-forward aesthetic
- Less common than light themes (stands out)
- Gold accents pop more on dark backgrounds
- Aligns with AI/tech industry trends

**Why no fancy animations?**
- Faster development
- Better performance
- Fewer dependencies
- Less risk of looking gimmicky

**Why Formspree?**
- No backend needed
- Free tier sufficient
- Reliable email delivery
- Easy to set up

---

## Contact & Support

**Project Owner:** CodeDelivered LLC
**Email:** info@codedelivered.com
**Timeline:** Single-session execution (~2.5-3 hours)
**Deployment:** Vercel (vercel.com)

---

**Last Updated:** March 15, 2026
**Version:** 2.0
**Status:** Production — live at codedelivered.com
