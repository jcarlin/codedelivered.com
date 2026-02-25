export const SERVICES = [
  {
    title: 'AI Engineering',
    description: 'Custom LLM applications, RAG systems, and intelligent automation — built by engineers who live and breathe AI, every day',
    techStack: ['vLLM', 'OpenAI', 'Anthropic', 'LangChain', 'Vector DBs', 'Python'],
  },
  {
    title: 'Full-Stack Development',
    description: 'Modern, scalable web applications built by our US and nearshore engineers — scale the team up or down as your project demands',
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Robust cloud infrastructure, CI/CD pipelines, and automated deployment workflows — managed end-to-end so you ship faster',
    techStack: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  },
]

export const PROJECTS = [
  {
    name: 'AI-Powered Analytics Dashboard',
    description: 'Real-time analytics platform with LLM-powered insights and natural language queries',
    techStack: ['Ubuntu', 'Nvidia Container Toolkit', 'Harbor', 'Ansible', 'Docker', 'Prometheus', 'Grafana', 'Vector DB', 'vLLM', 'CUDA'],
    image: '/projects/vault-ai.png',
  },
  {
    name: 'Enterprise RAG System',
    description: 'Document intelligence system enabling semantic search across company knowledge base',
    techStack: ['LangGraph', 'vLLM', 'LiteLLM', 'LlamaIndex', 'Milvus', 'FastAPI', 'React', 'Celery', 'Redis', 'PostgreSQL', 'Neo4j', 'MinIO'],
    image: '/projects/deagle-ai.png',
  },
  {
    name: 'Boston Scientific - Compass',
    description: 'Custom FP&A workflow platform connecting enterprise SaaS systems through unified API integration',
    techStack: ['Nest.js', 'Nx', 'Angular 20', 'AWS'],
    image: '/projects/bsci-compass.png',
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
