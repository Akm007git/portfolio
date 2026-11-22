import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Generative AI & Agentic Systems',
    description: 'Production LLM orchestration, autonomous workflows, and retrieval architectures',
    skills: [
      { name: 'LLM Orchestration', highlight: true },
      { name: 'Multi-Agent Workflows', highlight: true },
      { name: 'LangGraph', highlight: true },
      { name: 'Google ADK', highlight: true },
      { name: 'Model Context Protocol (MCP)', highlight: true },
      { name: 'Enterprise RAG Pipelines', highlight: true },
      { name: 'Knowledge Graphs', highlight: true },
      { name: 'LangChain' },
      { name: 'FAISS' },
      { name: 'Elasticsearch' },
      { name: 'Prompt Engineering' },
      { name: 'Vector Embeddings' },
    ],
  },
  {
    title: 'Enterprise & Backend Systems',
    description: 'Robust APIs, enterprise tool integrations, and operational pipelines',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js' },
      { name: 'ServiceNow Integration', highlight: true },
      { name: 'Dynatrace Observability', highlight: true },
      { name: 'REST APIs', highlight: true },
      { name: 'Microservices' },
      { name: 'System Design' },
    ],
  },
  {
    title: 'Frontend & Modern Web',
    description: 'Fast, responsive, accessible web interfaces and media rendering',
    skills: [
      { name: 'Next.js (App Router)', highlight: true },
      { name: 'React', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Framer Motion' },
      { name: 'Remotion (Programmatic Video)' },
      { name: 'HTML5 / CSS3' },
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Relational data modeling, vector stores, and enterprise schemas',
    skills: [
      { name: 'Oracle / PL-SQL', highlight: true },
      { name: 'PostgreSQL', highlight: true },
      { name: 'MongoDB' },
      { name: 'SQL Query Optimization' },
      { name: 'Vector Databases' },
    ],
  },
  {
    title: 'Languages & Developer Tools',
    description: 'Core programming languages, DevOps automation, and developer toolchains',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'JavaScript / TypeScript', highlight: true },
      { name: 'C++', highlight: true },
      { name: 'SQL / PL-SQL' },
      { name: 'Git & GitHub Actions', highlight: true },
      { name: 'Postman' },
      { name: 'Linux / Shell' },
      { name: 'LaTeX' },
      { name: 'AWS (Fundamentals)' },
    ],
  },
];
