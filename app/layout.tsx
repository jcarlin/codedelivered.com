import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CodeDelivered LLC | AI Engineering & Full-Stack Development',
  description: 'Expert AI engineering, full-stack development, and cloud architecture services. Building intelligent applications with cutting-edge AI, modern web technologies, and scalable cloud infrastructure.',
  keywords: 'AI engineering, LLM development, RAG systems, full-stack development, Next.js, cloud architecture, AWS, consulting',
  authors: [{ name: 'CodeDelivered LLC' }],
  creator: 'CodeDelivered LLC',
  publisher: 'CodeDelivered LLC',
  metadataBase: new URL('https://codedelivered.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CodeDelivered LLC | AI Engineering & Full-Stack Development',
    description: 'Expert AI engineering and full-stack development services. Building intelligent applications with modern technologies.',
    url: 'https://codedelivered.com',
    siteName: 'CodeDelivered LLC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CodeDelivered LLC - AI Engineering & Full-Stack Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeDelivered LLC | AI Engineering & Full-Stack Development',
    description: 'Expert AI engineering and full-stack development services.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE', // Add when you verify with Google
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD structured data for AI crawlers and search engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CodeDelivered LLC',
    description: 'Expert AI engineering, full-stack development, and cloud architecture services.',
    url: 'https://codedelivered.com',
    logo: 'https://codedelivered.com/icon.svg',
    image: 'https://codedelivered.com/og-image.png',
    email: 'info@codedelivered.com',
    telephone: '', // Add if you want
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/in/julian-c-2a088326',
      'https://github.com/jcarlin',
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: [
      'AI Engineering',
      'LLM Development',
      'RAG Systems',
      'Full-Stack Development',
      'Cloud Architecture',
      'Software Consulting',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Large Language Models',
      'Retrieval Augmented Generation',
      'Next.js',
      'React',
      'Node.js',
      'AWS',
      'Cloud Computing',
      'DevOps',
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD for AI crawlers and search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
