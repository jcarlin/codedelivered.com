import type { Metadata, Viewport } from 'next'
import BackgroundImage from '@/components/BackgroundImage'
import { SERVICES, PROJECTS, SOCIAL_LINKS } from '@/lib/constants'
import './globals.css'

const SITE_URL = 'https://codedelivered.com'
const SITE_NAME = 'CodeDelivered LLC'
const SITE_TITLE = 'CodeDelivered LLC | AI Engineering & Full-Stack Development'
const SITE_DESCRIPTION =
  'US-led AI engineering, RAG systems, and full-stack development with top nearshore talent. We build intelligent, scalable applications — flexible teams that scale with your project, in your time zone.'

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: '%s | CodeDelivered LLC',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'AI engineering',
    'LLM development',
    'RAG systems',
    'retrieval augmented generation',
    'agentic AI',
    'AI consulting',
    'full-stack development',
    'nearshore development',
    'nearshore software team',
    'staff augmentation',
    'Next.js consulting',
    'React development',
    'FastAPI',
    'LangChain',
    'LangGraph',
    'Claude AI',
    'OpenAI',
    'vLLM',
    'cloud architecture',
    'AWS consulting',
    'GCP consulting',
    'DevOps',
    'software consultancy',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    types: {
      'text/plain': [
        { url: '/llms.txt', title: 'llms.txt' },
        { url: '/llms-full.txt', title: 'llms-full.txt' },
      ],
    },
  },
  category: 'Technology',
  classification: 'Software Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'CodeDelivered LLC — AI Engineering & Full-Stack Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  verification: {
    // google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE', // Add when verifying with Google Search Console
  },
}

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'What does CodeDelivered LLC do?',
    answer:
      'CodeDelivered LLC is a US-led software consultancy that builds AI applications, full-stack web platforms, and cloud infrastructure. We specialize in production LLM systems including RAG (retrieval-augmented generation), agentic workflows, and document intelligence, combined with modern full-stack development on React, Next.js, Node.js, and FastAPI.',
  },
  {
    question: 'Where is CodeDelivered LLC based?',
    answer:
      'CodeDelivered LLC is a US-based company with US technical leadership. Our delivery teams include vetted nearshore engineers based in Latin America, which provides full overlap with US business hours.',
  },
  {
    question: 'How does the nearshore engagement model work?',
    answer:
      'US-based engineering leads handle architecture, project management, and client communication. Nearshore engineers — pre-vetted and English-fluent — provide implementation capacity. Clients get the quality and accountability of a US firm with the cost efficiency of nearshore talent, and team size flexes up or down with project demand.',
  },
  {
    question: 'What AI technologies does CodeDelivered specialize in?',
    answer:
      'We build production systems using OpenAI, Anthropic Claude, Google Gemini, Perplexity, and open-source models served via vLLM. Our framework expertise includes LangChain, LangGraph, and LlamaIndex. We work with vector databases including Qdrant, Pinecone, Milvus, and pgvector, and we have deep experience with RAG, agentic workflows, fine-tuning, and self-hosted GPU inference.',
  },
  {
    question: 'Can CodeDelivered build a RAG (retrieval-augmented generation) system?',
    answer:
      'Yes. RAG is one of our core specialties. We have shipped production RAG systems including Deagle Labs Nexus, which queries 1.4+ million pages of mixed-format legal documents using FastAPI, LangGraph, Claude, Qdrant, and Neo4j. We design ingestion pipelines, chunking strategies, retrieval, reranking, and answer-grounding for production workloads.',
  },
  {
    question: 'Does CodeDelivered offer staff augmentation or only project-based work?',
    answer:
      'Both. We offer fixed-scope project delivery, ongoing staff augmentation where our engineers embed into client teams, and fractional engineering team relationships where a dedicated team scales with the client roadmap.',
  },
  {
    question: 'What tech stacks does CodeDelivered work with most often?',
    answer:
      'For AI: Python, FastAPI, LangChain, LangGraph, Claude, OpenAI, vLLM, Qdrant. For web: Next.js, React, TypeScript, Node.js, NestJS, Angular, PostgreSQL. For infrastructure: AWS, GCP, Docker, Kubernetes, Terraform, Ansible, GitHub Actions.',
  },
  {
    question: 'How do I contact CodeDelivered LLC?',
    answer:
      'Email info@codedelivered.com or use the contact form at https://codedelivered.com/#contact. We respond within 24 hours.',
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: 'CodeDelivered',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon.svg`,
      width: 64,
      height: 64,
    },
    image: `${SITE_URL}/opengraph-image`,
    email: SOCIAL_LINKS.email,
    description: SITE_DESCRIPTION,
    foundingDate: '2023',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
    knowsAbout: [
      'Artificial Intelligence',
      'Large Language Models',
      'Retrieval Augmented Generation',
      'Agentic AI',
      'LangChain',
      'LangGraph',
      'Claude',
      'OpenAI',
      'vLLM',
      'Next.js',
      'React',
      'Node.js',
      'NestJS',
      'Angular',
      'FastAPI',
      'TypeScript',
      'Python',
      'PostgreSQL',
      'AWS',
      'GCP',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Cloud Architecture',
      'DevOps',
    ],
  }

  const professionalService = {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/icon.svg`,
    email: SOCIAL_LINKS.email,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    priceRange: '$$',
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    serviceType: [
      'AI Engineering',
      'LLM Development',
      'RAG Systems',
      'Agentic AI Development',
      'Full-Stack Development',
      'Cloud Architecture',
      'DevOps Consulting',
      'Nearshore Software Development',
      'Staff Augmentation',
    ],
  }

  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#julian-carlin`,
    name: 'Julian Carlin',
    jobTitle: 'Founder & Principal Engineer',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    url: SOCIAL_LINKS.linkedin,
    sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  }

  const webpage = {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: SITE_TITLE,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: `${SITE_URL}/opengraph-image`,
    description: SITE_DESCRIPTION,
    inLanguage: 'en-US',
    breadcrumb: { '@id': `${SITE_URL}/#breadcrumb` },
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
      { '@type': 'ListItem', position: 3, name: 'Projects', item: `${SITE_URL}/#projects` },
      { '@type': 'ListItem', position: 4, name: 'Contact', item: `${SITE_URL}/#contact` },
    ],
  }

  const services = SERVICES.map((s, idx) => ({
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-${idx}`,
    name: s.title,
    description: s.description,
    serviceType: s.title,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    category: s.techStack.join(', '),
  }))

  const itemList = {
    '@type': 'ItemList',
    '@id': `${SITE_URL}/#projects-list`,
    name: 'Featured Projects',
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'CreativeWork',
        name: p.name,
        description: p.description,
        keywords: p.techStack.join(', '),
        ...(p.url ? { url: p.url } : {}),
      },
    })),
  }

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      professionalService,
      person,
      website,
      webpage,
      breadcrumb,
      ...services,
      itemList,
      faqPage,
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="color-scheme" content="dark" />
        {/* Discoverability hints for LLM crawlers (llmstxt.org) */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="llms-full.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <BackgroundImage />
        {children}
      </body>
    </html>
  )
}
