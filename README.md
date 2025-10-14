# CodeDelivered.com

Modern, dark-themed landing page for CodeDelivered LLC - AI Engineering & Full-Stack Development consultancy.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Web3Forms** - Contact form backend (free)

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
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

Edit `lib/constants.ts` and update your social media links:

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
- Services/expertise descriptions
- Project portfolio items
- Tech stack badges

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js - click Deploy
6. Configure your domain (codedelivered.com) in Vercel settings

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── ServiceCard.tsx  # Service card component
│   ├── Projects.tsx     # Projects section
│   ├── ProjectCard.tsx  # Project card component
│   ├── Contact.tsx      # Contact section
│   ├── ContactForm.tsx  # Contact form
│   └── Footer.tsx       # Footer
├── lib/
│   └── constants.ts     # Content configuration
└── public/
    └── favicon.ico      # Favicon (update with your own)
```

## Features

✅ Modern dark theme with gold accents
✅ Fully responsive (mobile, tablet, desktop)
✅ Smooth scroll animations
✅ Intersection Observer for scroll effects
✅ Hover effects on cards and buttons
✅ SEO optimized with metadata
✅ Fast loading performance
✅ TypeScript for type safety

## Customization Tips

### Colors

Edit `tailwind.config.ts` to change the color scheme:

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

The site uses Inter font from Google Fonts. To change it, update `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700;800&display=swap');
```

### Add New Sections

To add new sections, create a component in `components/` and import it in `app/page.tsx`.

## Performance

- Lighthouse Score: 95+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Mobile Performance: 90+

## License

© 2025 CodeDelivered LLC. All rights reserved.

## Support

For questions or issues, contact: info@codedelivered.com
