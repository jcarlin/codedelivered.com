import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'PerplexityBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://codedelivered.com/sitemap.xml',
  }
}
