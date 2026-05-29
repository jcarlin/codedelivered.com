export const METRICS = [
  { n: '5', l: 'production platforms shipped' },
  { n: '1.4M+', l: 'pages indexed & queried' },
  { n: '4', l: 'frontier models orchestrated' },
  { n: '100%', l: 'in your time zone' },
]

export const SERVICES = [
  {
    n: '01',
    title: 'AI Engineering',
    tagline: 'LLM apps, RAG & agents',
    description:
      'Custom LLM applications, retrieval pipelines, and agentic automation — architected, evaluated, and shipped by engineers who build with frontier models every day.',
    points: ['RAG & vector search', 'Agent orchestration', 'Evals & guardrails'],
    techStack: ['vLLM', 'OpenAI', 'Anthropic', 'LangChain', 'Vector DBs', 'Python'],
  },
  {
    n: '02',
    title: 'Full-Stack Development',
    tagline: 'Web apps that scale',
    description:
      'Modern, type-safe web applications built by senior US and nearshore engineers — spin the team up or down as your roadmap demands, without the agency overhead.',
    points: ['Type-safe end to end', 'Design-led front ends', 'Flexible team scaling'],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    n: '03',
    title: 'Cloud & DevOps',
    tagline: 'Ship faster, sleep better',
    description:
      'Resilient cloud infrastructure, CI/CD, and automated deployment workflows — managed end to end so releases are boring and your team ships on Fridays.',
    points: ['Infra as code', 'CI/CD pipelines', 'Observability built in'],
    techStack: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  },
]

export const PROJECTS = [
  {
    name: 'Ovation AI — AEO Platform',
    tag: 'AI Platform',
    description:
      'Agentic Engine Optimization platform that audits SMB websites for AI-search visibility, simulates real LLM queries across ChatGPT, Claude, Perplexity & Gemini, and generates remediation assets with before/after PDF reports.',
    techStack: ['Python', 'LangGraph', 'Crawl4AI', 'Pydantic', 'SQLAlchemy', 'Claude', 'GPT-5', 'Perplexity', 'Gemini', 'WeasyPrint'],
    comingSoon: true,
  },
  {
    name: 'Vault AI Systems',
    tag: 'Analytics',
    description:
      'Real-time analytics platform with LLM-powered insights and natural-language queries over live operational data.',
    techStack: ['Ubuntu', 'Nvidia Container Toolkit', 'Harbor', 'Ansible', 'Docker', 'Prometheus', 'Grafana', 'Vector DB', 'vLLM', 'CUDA'],
    image: '/projects/vault-ai-1.png',
    url: 'https://vault-ai-frontend.vercel.app/',
    website: 'https://vaultaisystems.com',
  },
  {
    name: 'Deagle Labs',
    tag: 'Legal RAG',
    description:
      'Multimodal RAG investigation platform for legal document intelligence — ingests, analyzes, and queries 1.4M+ pages of mixed-format legal documents.',
    techStack: ['FastAPI', 'LangGraph', 'Claude AI', 'Qdrant', 'Neo4j', 'React', 'Celery', 'PostgreSQL', 'Docling'],
    image: '/projects/deagle-labs.png',
    url: 'https://nexus-alpha-swart.vercel.app/',
    website: 'https://www.deaglelabs.com/',
    github: 'https://github.com/jcarlin/NEXUS',
  },
  {
    name: 'Wine Shelf Scanner',
    tag: 'Mobile + CV',
    description:
      'AI-powered wine identification app that scans store shelves and overlays ratings from 191K+ wines instantly.',
    techStack: ['Next.js', 'SwiftUI', 'FastAPI', 'Google Cloud Vision', 'Claude AI', 'SQLite'],
    image: '/projects/wine-scanner-app.png',
    url: 'https://wine-shelf-scanner.vercel.app/',
    github: 'https://github.com/jcarlin/wine-shelf-scanner',
  },
  {
    name: 'Boston Scientific — Compass',
    tag: 'Enterprise',
    description: 'Custom FP&A workflow platform connecting enterprise SaaS systems through unified API integration.',
    techStack: ['Nest.js', 'Nx', 'Angular 20', 'AWS'],
    image: '/projects/bsci-compass.png',
    url: 'https://compass.bsci.com',
    website: 'https://www.bostonscientific.com',
  },
]

// Kept for future enablement — Governance section is commented out in app/page.tsx.
export const GOVERNANCE = {
  eyebrow: 'Built secure by default',
  title: 'Data governance & agentic security, automated',
  description: 'Every pipeline ships with governance baked in — not bolted on after the security review.',
  items: [
    {
      title: 'Automated data governance',
      description: 'Classification, PII detection & redaction, and lineage tracking wired into the pipeline from day one.',
    },
    {
      title: 'Agentic security best practices',
      description: 'Scoped tool permissions, sandboxed execution, and full audit trails on every agent action.',
    },
    {
      title: 'Compliance-ready',
      description: 'SOC 2–aligned controls, least-privilege access, and encryption in transit and at rest.',
    },
  ],
}

// Kept for future enablement — Testimonials section is commented out in app/page.tsx.
export const TESTIMONIALS = [
  {
    quote:
      'CodeDelivered shipped our RAG pipeline in six weeks — faster than our internal team scoped it for six months. The quality held up under real load.',
    name: 'VP of Engineering',
    role: 'Series B fintech',
    init: 'VP',
  },
  {
    quote:
      'The nearshore model just works. Senior engineers, same time zone, zero hand-holding. It felt like an extension of our own team from week one.',
    name: 'Founder & CTO',
    role: 'Healthtech startup',
    init: 'CT',
  },
  {
    quote:
      'They treated data governance as a first-class requirement, not an afterthought. We passed our security review on the first pass.',
    name: 'Head of Platform',
    role: 'Legal-tech scale-up',
    init: 'HP',
  },
]

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/julian-c-2a088326',
  github: 'https://github.com/jcarlin',
  email: 'info@codedelivered.com',
}

export const PYTHON_PACKAGES = [
  { name: 'fastapi', version: '==0.120', description: 'Core API framework' },
  { name: 'llama-index', version: '>=0.14', description: 'RAG orchestration engine' },
  { name: 'pymilvus', version: '==2.6', description: 'Vector database client' },
  { name: 'openai', version: '==2.23', description: 'OpenAI LLM provider' },
  { name: 'unstructured', version: '==0.18', description: 'Document processing (30+ formats)' },
  { name: 'sqlalchemy', version: '==2.0', description: 'Database ORM' },
  { name: 'asyncpg', version: '==0.30', description: 'Async PostgreSQL driver' },
  { name: 'celery', version: '==5.5', description: 'Async task queue' },
  { name: 'redis', version: '==7.0', description: 'Cache & message broker' },
  { name: 'opensearch-py', version: '==3.0.0', description: 'Full-text search engine' },
  { name: 'uvicorn[standard]', version: '==0.38', description: 'ASGI server' },
  { name: 'opentelemetry-sdk', version: '==1.38', description: 'Observability & tracing' },
  { name: 'litellm', version: '==1.78', description: 'Multi-LLM provider proxy' },
  { name: 'google-genai', version: '==0.1', description: 'Google Gemini SDK' },
  { name: 'torch', version: '==2.10', description: 'PyTorch deep learning framework' },
  { name: 'tensorflow', version: '==2.20', description: 'ML framework for training & inference' },
  { name: 'vllm', version: '==0.15', description: 'High-throughput LLM serving engine' },
  { name: 'cuda-toolkit', version: '==13.1', description: 'NVIDIA GPU compute platform' },
  { name: 'stripe', version: '==14.3', description: 'Payment processing platform' },
  { name: 'twilio', version: '==9.10', description: 'Communications API (SMS, voice)' },
]

export const JAVASCRIPT_PACKAGES = [
  { name: 'next', version: '^16.0', description: 'React framework for production' },
  { name: 'react', version: '^19.2', description: 'UI component library' },
  { name: 'typescript', version: '^5.9', description: 'Type-safe JavaScript' },
  { name: '@angular/core', version: '^19.2', description: 'Enterprise web framework' },
  { name: '@angular/material', version: '^20.2', description: 'Material Design components' },
  { name: '@nestjs/core', version: '^11.1', description: 'Node.js framework' },
  { name: '@nx/workspace', version: '^21.5', description: 'Monorepo management' },
  { name: 'ag-grid-angular', version: '^34.3', description: 'Enterprise data grid' },
  { name: 'graphql', version: '^16.11', description: 'Query language for APIs' },
  { name: 'typeorm', version: '^0.3.27', description: 'TypeScript ORM' },
  { name: 'pg', version: '^8.16', description: 'PostgreSQL client for Node.js' },
  { name: 'passport-jwt', version: '^4.0', description: 'JWT authentication strategy' },
  { name: '@playwright/test', version: '^1.56', description: 'End-to-end testing' },
]
