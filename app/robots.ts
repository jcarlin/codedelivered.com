import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow major AI training & answer-engine crawlers
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'GoogleOther',
          'Applebot',
          'Applebot-Extended',
          'CCBot',
          'cohere-ai',
          'cohere-training-data-crawler',
          'Diffbot',
          'FacebookBot',
          'Meta-ExternalAgent',
          'Meta-ExternalFetcher',
          'Bytespider',
          'Amazonbot',
          'YouBot',
          'DuckAssistBot',
          'MistralAI-User',
          'PanguBot',
          'Timpibot',
          'omgili',
          'Webzio-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://codedelivered.com/sitemap.xml',
    host: 'https://codedelivered.com',
  }
}
