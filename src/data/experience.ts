import { EducationItem, ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    company: 'Infosys',
    role: 'Specialist Programmer — Generative AI',
    period: 'Sept 2024 — Present',
    location: 'Bangalore, India',
    current: true,
    bullets: [
      'Building multi-agent systems with Google ADK and LangGraph (branching, looping, human-in-the-loop approvals) to automate the ticket lifecycle end to end: triage, enrichment, routing and closure.',
      'Developed Model Context Protocol (MCP) servers and custom tools exposing ServiceNow and Dynatrace operations (ticket CRUD, incident, problem and alert data) to LLM agents for tool-calling and orchestration.',
      'Built a knowledge graph linking services, incidents and runbooks, and fed Dynatrace observability data into agents to ground root-cause suggestions beyond plain vector retrieval.',
      'Architected enterprise RAG pipelines with LangChain, FAISS and Elasticsearch for low-latency retrieval over large document sets.',
      'Contributed Node.js REST APIs and Oracle/PL-SQL logic (procedures, functions, triggers) for enterprise insurance systems, integrating AI services with legacy back ends.',
    ],
    technologies: [
      'Generative AI',
      'LangGraph',
      'Google ADK',
      'MCP',
      'ServiceNow',
      'Dynatrace',
      'RAG',
      'FAISS',
      'Elasticsearch',
      'Node.js',
      'Oracle / PL-SQL',
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: 'Ideal Institute of Engineering',
    degree: 'B.Tech in Electronics and Communication Engineering',
    period: 'Aug 2021 — Jul 2024',
    location: 'Kalyani, West Bengal',
    grade: 'CGPA: 8.1',
    details: 'Graduated with Distinction in Core Electronics & Computational Engineering.',
  },
  {
    institution: 'Birla Institute of Technology',
    degree: 'Diploma in Electronics and Telecommunication Engineering',
    period: 'Jul 2018 — Jul 2021',
    location: 'Kolkata, West Bengal',
    grade: 'CGPA: 8.8',
    details: 'Solid foundation in hardware architectures, digital circuits, and system programming.',
  },
];
