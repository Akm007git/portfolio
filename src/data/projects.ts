import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ai-job-search-assistant',
    title: 'AI Job Search Assistant',
    subtitle: 'Autonomous Job Search & Application Agent Framework',
    tagline: 'Autonomous job search agent using Python, Gemini API, MCP, GitHub Actions and LaTeX',
    description:
      'An enterprise-grade, autonomous job application framework that scrapes job portals, aggregates daily opportunities, performs 5-dimension fit scoring, and generates tailored 2-page LaTeX CVs and cover letters with ATS verification.',
    category: 'ai-agents',
    categoryLabel: 'AI / Agents',
    tags: ['Python', 'Gemini API', 'MCP', 'GitHub Actions', 'LaTeX', 'Automation'],
    featured: true,
    status: 'Completed',
    githubUrl: 'https://github.com/Akm007git/ai-job-search',
    liveUrl: undefined,
    image: '/images/projects/ai-job-search/thumbnail.svg',
    metrics: [
      { label: 'Scraped Daily Postings', value: '170+' },
      { label: 'Automated Dispatch', value: '2x / Day' },
      { label: 'Fit Scoring Engine', value: '5-Dim ATS' },
      { label: 'Application Tailoring', value: '1-Command' },
    ],
    problem:
      'Manual job searching across disparate portals (LinkedIn, Instahyre, Naukri) is slow, repetitive, and inconsistent. Manually customizing resumes and cover letters for each JD leads to application fatigue, missed deadlines, and inconsistent ATS keyword matching.',
    approach: [
      'Engineered multi-portal scraping targeting last 24h tech postings in Bangalore & Kolkata.',
      'Designed an MCP tool architecture enabling LLM agents to evaluate jobs against a 5-dimension rubric.',
      'Built a one-command (`/apply`) tailoring engine generating compiled moderncv LaTeX resumes and cover letters with prompt-injection defense.',
      'Automated twice-daily execution (10:00 AM & 8:00 PM IST) via GitHub Actions and SMTP email delivery with multi-tab Excel workbooks.',
    ],
    architecture:
      'Multi-Portal Scraper (LinkedIn/Instahyre/Naukri) → Data Normalization & Excel Engine → MCP Tool Layer → Gemini API Fit Scorer → LaTeX (moderncv) Compiler → Automated Daily Gmail SMTP Dispatcher & GitHub Actions CI.',
    techStack: [
      {
        category: 'Core AI & Agentic Tooling',
        technologies: ['Gemini API', 'Model Context Protocol (MCP)', 'Prompt Engineering'],
      },
      {
        category: 'Backend & Automation',
        technologies: ['Python 3.11', 'GitHub Actions', 'SMTP Email Automation', 'OpenPyXL'],
      },
      {
        category: 'Document Engine',
        technologies: ['LaTeX (moderncv)', 'pdflatex', 'ATS Keyword Alignment'],
      },
    ],
    outcomes: [
      'Aggregates 170+ relevant postings daily into structured analytics workbooks.',
      'Reduced per-job custom application tailoring time from 45 minutes to under 30 seconds.',
      'Achieved 100% automated delivery with automated retries and zero human intervention.',
    ],
  },
  {
    slug: 'youtube-video-cutter',
    title: 'YouTube Video Cutter',
    subtitle: 'Programmatic Vertical Video Generator & Shorts Cutter',
    tagline: 'Programmatic video processing pipeline converting landscape video into shorts with animated captions',
    description:
      'A programmatic video generation pipeline built with Remotion, React 19, TypeScript, and FFmpeg that automates turning long-form videos into high-retention vertical shorts with animated word-level captions and engagement banners.',
    category: 'video-media',
    categoryLabel: 'Video & Media',
    tags: ['Remotion', 'React 19', 'TypeScript', 'FFmpeg', 'Bun', 'Video Processing'],
    featured: true,
    status: 'Completed',
    githubUrl: 'https://github.com/Akm007git/youtube-video-cutter',
    liveUrl: undefined,
    image: '/images/projects/youtube-video-cutter/thumbnail.svg',
    metrics: [
      { label: 'Video Output', value: '1080×1920 (9:16)' },
      { label: 'Caption Precision', value: 'Word-Level' },
      { label: 'Rendering Engine', value: 'Remotion 4' },
      { label: 'Pipeline Speed', value: 'Sub-minute' },
    ],
    problem:
      'Creating viral vertical shorts from long-form content manually requires tedious cropping, keyframing, adding blurred backgrounds, timing captions word-by-word, and re-exporting in video editing suites.',
    approach: [
      'Built a 1080x1920 vertical canvas component in Remotion with dual-layer rendering: blurred ambient background + framed foreground.',
      'Integrated dynamic animated captions overlay synced to millisecond timestamps with `@remotion/captions`.',
      'Added high-retention UI elements including hook badges and animated bottom progress bars.',
      'Orchestrated headless rendering via Bun and FFmpeg for rapid export.',
    ],
    architecture:
      'Video Ingestion → Audio Transcription & Alignment → Remotion Composition Engine (React 19) → Animated Captions & Overlays Layer → FFmpeg Hardware-Accelerated Output.',
    techStack: [
      {
        category: 'Video Framework',
        technologies: ['Remotion 4', 'React 19', 'TypeScript', '@remotion/captions'],
      },
      {
        category: 'Runtime & Tooling',
        technologies: ['Bun', 'FFmpeg', 'Node.js', 'ESLint'],
      },
    ],
    outcomes: [
      'Eliminated manual video editing steps for vertical clip reformatting.',
      'Produced dynamic captions with 100% frame synchronization.',
      'Enables batch programmatic rendering for content distribution.',
    ],
  },
  {
    slug: 'youtube-clone',
    title: 'YouTube Clone',
    subtitle: 'Full-Stack Video Streaming Application',
    tagline: 'Video streaming application with responsive video playback, search, and channel browsing',
    description:
      'A full-stack video streaming application featuring video feeds, search, responsive playback interface, and channel browsing. [TODO: add description]',
    category: 'web',
    categoryLabel: 'Web',
    tags: ['React', 'TypeScript', 'REST API', 'Tailwind CSS', '[TODO: tech tag]'],
    featured: false,
    status: 'Completed',
    githubUrl: 'https://github.com/Akm007git/youtube-clone',
    liveUrl: undefined,
    image: '/images/projects/youtube-clone/thumbnail.svg',
    metrics: [
      { label: 'Layout', value: 'Responsive' },
      { label: 'Video Player', value: 'Custom UI' },
      { label: 'Data Source', value: '[TODO: API]' },
    ],
    problem:
      'Building a modern video streaming interface requires handling responsive video players, dynamic feed updates, seamless video search, and clean media grid layouts across mobile and desktop.',
    approach: [
      'Developed responsive UI with modern card grids and sidebar navigation.',
      'Integrated video playback engine with playback controls and channel metadata.',
      'Implemented real-time search and category filtering.',
      '[TODO: add approach details]',
    ],
    architecture:
      '[TODO: add architecture overview: e.g. Frontend UI → API Gateway / Video Service → Storage / Streaming Backend]',
    techStack: [
      {
        category: 'Frontend & UI',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', '[TODO: add tech stack]'],
      },
      {
        category: 'Services & APIs',
        technologies: ['[TODO: add tech stack]'],
      },
    ],
    outcomes: [
      'Delivered responsive video streaming interface.',
      'Achieved sub-second search and category navigation.',
      '[TODO: add outcome metric]',
    ],
  },
  {
    slug: 'automation-bot',
    title: 'Automation Bot',
    subtitle: 'Autonomous Workflow & Task Automation Bot',
    tagline: 'Autonomous automation bot for streamlining repetitive enterprise workflows',
    description:
      'An autonomous automation bot built to eliminate manual, repetitive workflows and streamline data synchronization. [status: in progress; 1–2 lines on what it automates: [TODO: add 1-2 lines on what it automates]]',
    category: 'automation',
    categoryLabel: 'Automation',
    tags: ['Python', 'Automation', 'Bots', 'Workflow Orchestration', '[TODO: tech tag]'],
    featured: false,
    status: 'In Progress',
    githubUrl: 'https://github.com/Akm007git',
    liveUrl: undefined,
    image: '/images/projects/automation-bot/thumbnail.svg',
    metrics: [
      { label: 'Status', value: 'In Progress' },
      { label: 'Automation Target', value: '[TODO: Target]' },
      { label: 'Execution', value: 'Autonomous' },
    ],
    problem:
      'Repetitive operational tasks waste engineering hours and introduce human error into routine workflows. [TODO: add description of specific problem automated]',
    approach: [
      'Designed autonomous bot execution loop with state tracking.',
      'Implemented failure recovery, retry logic, and structured logging.',
      '[TODO: add 1-2 lines on what it automates]',
    ],
    architecture:
      'Trigger / Event Listener → Task Execution Engine → Validation & Error Handling → Destination System Sync. [TODO: add details]',
    techStack: [
      {
        category: 'Core Automation',
        technologies: ['Python', '[TODO: add tech stack]'],
      },
    ],
    outcomes: [
      'Currently in active development.',
      '[TODO: add outcome metric once completed]',
    ],
  },
];
