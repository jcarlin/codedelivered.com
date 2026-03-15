# CodeDelivered.com Redesign - Project Plan

## Project Overview

**Objective:** Replace the current codedelivered.com website with a modern, professional, dark-themed single-page landing site that showcases AI engineering and full-stack development expertise.

**Timeline:** Single-session execution (~2.5-3 hours)

**Current Site Issues:**
- Dated design (copyright 2023)
- Generic stock imagery
- Lacks focus on AI/modern tech capabilities
- Orange accent feels Web 2.0

**New Site Goals:**
- Modern, clean aesthetic
- Dark theme with gold accents
- Showcase AI engineering expertise
- Include project portfolio
- Professional contact form
- Mobile responsive
- Fast loading performance

---

## Tech Stack

### Core Technologies
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

### Third-Party Services
- **Contact Form:** Formspree or Web3Forms (free tier, no backend needed)

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

**Subheadline:** "Building intelligent applications with cutting-edge AI, modern web technologies, and scalable cloud architecture"

**CTA:** "Get in Touch" (smooth scrolls to contact form)

### Services Section

**1. AI Engineering**
- Title: "AI Engineering"
- Description: "Custom LLM applications, RAG systems, and intelligent automation that transform how businesses operate"
- Tech: OpenAI, Anthropic, LangChain, Vector DBs, Python

**2. Full-Stack Development**
- Title: "Full-Stack Development"
- Description: "Modern, scalable web applications built with cutting-edge frameworks and best practices"
- Tech: React, Next.js, Node.js, TypeScript, PostgreSQL

**3. Cloud & DevOps**
- Title: "Cloud & DevOps"
- Description: "Robust cloud infrastructure, CI/CD pipelines, and automated deployment workflows"
- Tech: AWS, GCP, Docker, Kubernetes, Terraform

### Projects Section

**Example Projects (can be updated with real ones):**

**Project 1: AI-Powered Analytics Dashboard**
- Description: "Real-time analytics platform with LLM-powered insights and natural language queries"
- Tech: Next.js, OpenAI, PostgreSQL, AWS

**Project 2: Enterprise RAG System**
- Description: "Document intelligence system enabling semantic search across company knowledge base"
- Tech: LangChain, Pinecone, FastAPI, React

**Project 3: Automated CI/CD Platform**
- Description: "Custom deployment pipeline with automated testing and multi-environment management"
- Tech: GitHub Actions, Docker, AWS ECS, Terraform

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
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   ├── globals.css          # Tailwind + custom styles
│   └── favicon.ico
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services section
│   ├── ServiceCard.tsx      # Individual service card
│   ├── Projects.tsx         # Projects section
│   ├── ProjectCard.tsx      # Individual project card
│   ├── Contact.tsx          # Contact section
│   ├── ContactForm.tsx      # Contact form component
│   └── Footer.tsx           # Footer component
├── lib/
│   └── constants.ts         # Content, colors, config
├── public/
│   └── favicon.ico
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── CLAUDE.md               # This file
└── README.md
```

---

## Component Architecture

### Hero.tsx
- Full viewport height (`h-screen`)
- Centered content with max-width container
- Dark gradient background (black to dark gray)
- Headline, subheadline, CTA button
- CTA scrolls smoothly to contact section

### ServiceCard.tsx
**Props:**
- title: string
- description: string
- techStack: string[]

**Features:**
- Dark card background (#1A1A1A)
- Hover: Gold border glow + slight lift
- Tech badges at bottom
- Fade-in animation on scroll

### ProjectCard.tsx
**Props:**
- name: string
- description: string
- techStack: string[]

**Features:**
- Similar to ServiceCard but distinct layout
- Hover effects
- Tech badges

### ContactForm.tsx
**Features:**
- Form validation (email format, required fields)
- Formspree integration
- Loading state on submit
- Success/error messages
- Gold submit button

### Footer.tsx
- Social links (LinkedIn, GitHub)
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

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on iOS and Android devices
- [ ] Verify contact form sends emails to info@codedelivered.com
- [ ] Check all links work (LinkedIn, GitHub)
- [ ] Verify smooth scrolling on all browsers
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit
- [ ] Check mobile responsiveness on various screen sizes
- [ ] Verify domain is correctly configured
- [ ] Test loading speed on slow 3G connection
- [ ] Proofread all content for typos

---

## Future Enhancements (Post-Launch)

**Priority 2 (Optional):**
- Add blog/articles section for thought leadership
- Client testimonials (when available)
- More detailed project case studies
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

**Last Updated:** October 14, 2025
**Version:** 1.0
**Status:** Ready for implementation
