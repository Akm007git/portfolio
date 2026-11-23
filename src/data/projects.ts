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
    slug: 'ai-youtube-shorts-cutter',
    title: 'AI YouTube Shorts Cutter',
    subtitle: 'Autonomous Generative & Agentic Video Synthesis Pipeline',
    tagline: 'Autonomous multi-agent system combining Gen AI viral peak detection, ASR speech alignment, and headless Remotion video compilation',
    description:
      'An autonomous agentic video generation pipeline that transforms raw long-form videos into high-retention 1080x1920 vertical shorts. Powered by Generative AI for semantic content understanding, narrative arc analysis, and ASR word-level token synchronization, orchestrated by an autonomous agent loop with self-healing failure recovery and headless Remotion rendering.',
    category: 'ai-agents',
    categoryLabel: 'AI & Media Agents',
    tags: [
      'Agentic AI',
      'Generative AI',
      'Remotion 4',
      'ASR Speech Sync',
      'Multi-Tool DAG',
      'yt-dlp',
      'FFmpeg',
      'Self-Healing Loops',
      'TypeScript',
      'React 19',
    ],
    featured: true,
    status: 'Completed',
    githubUrl: 'https://github.com/Akm007git/ai-youtube-shorts-cutter',
    liveUrl: undefined,
    image: '/images/projects/ai-youtube-shorts-cutter/thumbnail.svg',
    metrics: [
      { label: 'Viral Hook Retention', value: '< 40s Curve' },
      { label: 'ASR Token Precision', value: 'Word-Level' },
      { label: 'Tool Orchestration', value: 'Multi-Tool DAG' },
      { label: 'Synthesis Engine', value: 'Remotion 4' },
    ],
    problem:
      'Manually producing viral short-form video from long-form content is tedious, subjective, and slow: scrubbing hours of footage to identify retention peaks, calculating the 3-second hook window, painstakingly keyframing subtitles word-by-word, and re-exporting in video editing suites. Traditional video tools only crop canvas aspect ratios without understanding narrative tension or speech pacing.',
    approach: [
      'Semantic Content Understanding & Viral Peak Detection: Generative AI analyzes raw timestamped video transcripts to detect narrative tension, conversational pacing, and emotional peaks, isolating high-retention segments (e.g., LeBron James novelty hook, Hardik Pandya curiosity hook, Gordon Ramsay culinary climax) respecting the strict sub-40-second retention curve.',
      'Word-Level Temporal Speech-to-Text (ASR) Alignment: Spoken audio is tokenized into discrete word units with microsecond timestamps and mapped to video frames (Frame = Timestamp × FPS), enabling dynamic karaoke-highlighted captions synchronized to speaker vocal cadence.',
      'Autonomous Agentic Tool Orchestration: Plans and executes a multi-tool DAG across Python, yt-dlp, FFmpeg stream filtering, autonomous React/Remotion code synthesis, and headless Chromium rendering.',
      'Autonomous Reflection & Self-Correction (Self-Healing Loop): Detects and resolves network/stream failures (pivoting from stalled IPv6 to IPv4 byte-range downloads), repairs directory symlink drift, and autonomously debugs runtime hook execution.',
      'Programmatic Media Synthesis: React 19 and Remotion are treated not as a browser UI, but as a headless video compiler that converts AI decisions into 1080x1920 MP4 video pixels.',
    ],
    architecture:
      'User Prompt / Target Video → Agentic Planner & Multi-Tool DAG → yt-dlp Byte-Range Stream Ingestion → Transcript Extraction & ASR Alignment → Gen AI Semantic Analysis & Viral Segment Selection → Autonomous TypeScript Composition Synthesis → Remotion Headless Chromium Render → Self-Healing Error Recovery → Hardware-Accelerated FFmpeg 1080x1920 MP4 Export.',
    techStack: [
      {
        category: 'Generative & Agentic AI',
        technologies: [
          'LLM Semantic Analysis & Narrative Arc Detection',
          'Autonomous Multi-Tool Calling DAG',
          'Self-Healing Error Recovery Loops',
          'Cognitive Guardrails & Fact-Forcing Gates',
          'Prompt Engineering',
        ],
      },
      {
        category: 'Speech & Media Processing',
        technologies: [
          'ASR Word-Level Token Alignment',
          'FFmpeg Hardware Acceleration',
          'yt-dlp Stream Filtering & Byte-Range Slicing',
          'Microsecond-to-Frame Sync (Frame = Timestamp × FPS)',
        ],
      },
      {
        category: 'Programmatic Video Synthesis',
        technologies: [
          'Remotion 4 (Headless Video Compiler)',
          'React 19',
          'TypeScript',
          '@remotion/captions',
        ],
      },
      {
        category: 'Runtime & Developer Tooling',
        technologies: ['Bun Runtime', 'Node.js', 'Headless Chromium', 'Linux / macOS Shell'],
      },
    ],
    outcomes: [
      'Eliminated 100% of manual video cutting, aspect ratio re-formatting, and subtitle keyframing.',
      'Automated viral peak identification with sub-second hook alignment and retention psychology.',
      'Delivered fully frame-accurate word-by-word synchronized subtitles.',
      'Achieved robust headless video generation with autonomous self-healing on network and tool errors.',
    ],
    aiHighlights: [
      {
        title: 'Generative AI Concepts Implemented',
        badge: 'Creative Director',
        description:
          'Gen AI acts as the creative intelligence layer — analyzing conversational pacing, tension curves, and tokenized speech timing.',
        points: [
          {
            title: 'Semantic Content Understanding & Viral Peak Detection',
            detail:
              'The AI digests raw timestamped transcripts, evaluates conversational pacing and emotional peaks, and isolates high-retention segments respecting the 3-second hook rule and sub-40-second short-form attention curves.',
          },
          {
            title: 'Word-Level Temporal Speech-to-Text (ASR) Alignment',
            detail:
              'Speech audio is tokenized into discrete word units with microsecond timestamps (startSec, endSec), mathematically mapped to video frame numbers (Frame = Timestamp × FPS) for dynamic word-level highlight captions.',
          },
          {
            title: 'Programmatic Media Generation',
            detail:
              'High-level natural language intent is compiled into deterministic, reproducible media code, bypassing manual Premiere Pro or CapCut dragging.',
          },
        ],
      },
      {
        title: 'Agentic AI Systems & Architecture',
        badge: 'Autonomous Engineer',
        description:
          'Agentic AI provides autonomous execution — formulating plans, calling external tools, inspecting outputs, and self-correcting on failure.',
        points: [
          {
            title: 'Autonomous Goal Decomposition & Multi-Tool DAG',
            detail:
              'Executes multi-step tool calls: Tool 1 (Python transcript extraction), Tool 2 (yt-dlp/FFmpeg stream slicing), Tool 3 (Remotion TS code synthesis), and Tool 4 (Chromium headless render).',
          },
          {
            title: 'Autonomous Reflection & Self-Healing Loop',
            detail:
              'When IPv6 streams stall, the agent pivots to IPv4 byte-range downloading; when environment drift occurs, it diagnoses paths and repairs symlinks; when hook scripts throw ENOENT, it inspects stack traces and patches bridges.',
          },
          {
            title: 'Cognitive Guardrails & Fact-Forcing Gates',
            detail:
              'Employs Fact-Forcing Gates (GateGuard) demanding explicit user intent and verification before executing commands, preventing rogue actions and ensuring deterministic safety.',
          },
        ],
      },
    ],
    comparison: {
      traditionalTitle: 'Traditional React Application',
      thisSystemTitle: 'This Agentic AI System',
      rows: [
        {
          dimension: 'Primary Role',
          traditional: 'Interactive UI rendered in a browser for human viewing.',
          thisSystem: 'Headless Video Synthesis Compiler treating React as code-defined video tracks.',
        },
        {
          dimension: 'Decision Making',
          traditional: 'Human decides what to click, cut, crop, and write.',
          thisSystem: 'AI Agent determines viral moments, transcript cuts, and frame sync.',
        },
        {
          dimension: 'Execution',
          traditional: 'Waits passively for user mouse and keyboard input.',
          thisSystem: 'Autonomous multi-step execution spanning CLI tools, FFmpeg, Bun, and browser engines.',
        },
        {
          dimension: 'Error Handling',
          traditional: 'Throws an error modal or crashes the application.',
          thisSystem: 'Reflective self-healing (diagnoses stream stalls, repairs symlinks, patches runtime hooks).',
        },
        {
          dimension: 'Output',
          traditional: 'DOM elements on a screen.',
          thisSystem: 'Fully rendered, ready-to-upload 1080x1920 MP4 vertical video files.',
        },
      ],
    },
  },
  {
    slug: 'youtube-clone',
    title: 'YouTube Clone',
    subtitle: 'Modern Video Streaming Web Application',
    tagline: 'Full-stack responsive video streaming platform featuring dynamic category feeds, search, and channel analytics',
    description:
      'A responsive video streaming web application built with React, Axios, and RapidAPI YouTube v3 endpoints. Features customizable category feeds (Coding, Next.js, Music, Gaming), instant keyword search, custom video player with view/like analytics, and channel profile pages.',
    category: 'web',
    categoryLabel: 'Web',
    tags: [
      'React',
      'RapidAPI (YouTube v3)',
      'Axios',
      'React Router',
      'ReactPlayer',
      'Responsive Web',
      'REST APIs',
    ],
    featured: false,
    status: 'Completed',
    githubUrl: 'https://github.com/Akm007git/React-2023/tree/main/',
    liveUrl: 'https://akm-videostreaming-projects.netlify.app/',
    image: '/images/projects/youtube-clone/thumbnail.svg',
    metrics: [
      { label: 'Video Feed', value: 'Category Chips' },
      { label: 'API Layer', value: 'RapidAPI v3' },
      { label: 'Player Engine', value: 'ReactPlayer' },
      { label: 'Layout', value: 'Responsive Grid' },
    ],
    problem:
      'Replicating the YouTube web experience requires managing asynchronous API payloads, seamless category filtering without page reloads, responsive video playback layouts, and rendering dynamic channel statistics across devices.',
    approach: [
      'Engineered modular React architecture with reusable components: Feed, Navbar, SearchBar, VideoCard, ChannelCard, and VideoDetail.',
      'Integrated RapidAPI YouTube v3 endpoints using Axios with centralized error handling and data caching.',
      'Built category filtering bar supporting instant exploration across programming, entertainment, and educational channels.',
      'Implemented interactive video playback page featuring channel subscriber counts, view statistics, and related video recommendations.',
    ],
    architecture:
      'React Component Hierarchy → SearchBar & Category Navigation → Axios API Layer → RapidAPI YouTube v3 API → VideoDetail (ReactPlayer) & Channel Analytics Display.',
    techStack: [
      {
        category: 'Frontend & UI Core',
        technologies: ['React', 'React Router DOM', 'JavaScript (ES6+)', 'HTML5 / CSS3'],
      },
      {
        category: 'Services & APIs',
        technologies: ['RapidAPI (YouTube v3)', 'Axios', 'REST API Endpoints'],
      },
      {
        category: 'Media & Components',
        technologies: ['ReactPlayer', 'Material UI Icons / Components', 'Responsive Flex/Grid Layouts'],
      },
    ],
    outcomes: [
      'Delivered fully functional video streaming interface with feed discovery and keyword search.',
      'Implemented clean client-side routing with sub-second page transitions.',
      'Engineered responsive layouts adapting seamlessly from mobile to desktop screens.',
    ],
  },
  {
    slug: 'linkedin-automatic-job-apply-bot',
    title: 'LinkedIn Auto Job Applier Bot',
    subtitle: 'Stealth Browser Automation & AI Form-Filling Engine',
    tagline: 'Automated job search and Easy Apply engine with stealth ChromeDriver, AI answer assistance, and resume management',
    description:
      'A Python-based stealth automation bot engineered to streamline LinkedIn job searching and automate the Easy Apply application process. Features undetected-chromedriver for anti-bot evasion, automated form filling, resume uploads, modular search filters, and AI assistance for complex questionnaire responses.',
    category: 'automation',
    categoryLabel: 'Automation',
    tags: [
      'Python 3.10+',
      'Undetected ChromeDriver',
      'Selenium',
      'PyAutoGUI',
      'Flask',
      'Browser Automation',
      'Stealth Mode',
    ],
    featured: false,
    status: 'Completed',
    githubUrl: 'https://github.com/Akm007git/Linkedin_automatic_job_apply_bot/tree/experiments',
    liveUrl: undefined,
    image: '/images/projects/linkedin-automatic-job-apply-bot/thumbnail.svg',
    metrics: [
      { label: 'Browser Engine', value: 'Undetected Chrome' },
      { label: 'Application Flow', value: 'Easy Apply' },
      { label: 'Evasion Layer', value: 'Stealth Mode' },
      { label: 'AI Assistance', value: 'Q&A Helper' },
    ],
    problem:
      'Applying to hundreds of job openings on LinkedIn requires repetitive manual clicking, form filling, uploading resumes, and answering the same screening questionnaires repeatedly. Standard browser automation (e.g., vanilla Selenium) gets flagged and blocked by anti-bot verification systems.',
    approach: [
      'Deployed undetected-chromedriver and stealth mode configuration to bypass bot detection mechanisms and simulate human browsing behavior.',
      'Architected a modular configuration system (personals.py, questions.py, search.py, settings.py) allowing fine-grained control over search parameters, locations, and personal answers.',
      'Implemented automated form-traversal logic capable of handling multi-step Easy Apply dialogs, radio buttons, dropdowns, and file upload triggers.',
      'Added AI-assisted response generation for handling open-ended screening questions.',
    ],
    architecture:
      'Config Loader (settings.py, questions.py) → Stealth Browser Initializer (undetected-chromedriver) → LinkedIn Auth & Session Manager → Job Search Query Executor → Easy Apply Modal Scanner & Form Filler → AI Question Helper → Application Submission & Log Auditor.',
    techStack: [
      {
        category: 'Automation & Web Drivers',
        technologies: ['Python 3.10+', 'Undetected ChromeDriver', 'Selenium', 'PyAutoGUI'],
      },
      {
        category: 'Backend & Control Server',
        technologies: ['Flask', 'Flask-CORS', 'Certifi'],
      },
      {
        category: 'Configuration & Logic',
        technologies: ['Modular Python Configs', 'Error Logging & Validation', 'Session State Manager'],
      },
    ],
    outcomes: [
      'Automated full multi-step Easy Apply workflow including resume attachment and screening questions.',
      'Reduced application submission cycle to hands-free background execution.',
      'Configurable stealth parameters (click gaps, background mode) to minimize detection risk.',
    ],
  },
];
