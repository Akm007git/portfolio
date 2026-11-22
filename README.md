# Anup Kumar Mahata — Personal Portfolio

Production-quality, accessible, and high-performance personal portfolio website for **Anup Kumar Mahata**, AI & Software Systems Engineer.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Tech Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS variables for dark/light themes
* **Animation & Motion**: [Framer Motion](https://www.framer.com/motion/) with spring physics and reduced-motion support
* **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) (Obsidian dark / clean light)
* **Command Menu**: [cmdk](https://cmdk.paco.me/) (triggered via `⌘K`)
* **Icons**: [Lucide React](https://lucide.dev/)
* **SEO & Metadata**: JSON-LD Structured Data, Open Graph, dynamic `sitemap.xml`, and `robots.txt`

---

## 🚀 Quick Start & Development

### 1. Install Dependencies
```bash
bun install
# or
npm install
```

### 2. Start Development Server
```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
bun run build
# or
npm run build
```

---

## 📁 How to Add a New Project (Zero Code Changes)

Adding a new project requires **editing only one typed file** — no component or router modifications are needed.

1. Open [`src/data/projects.ts`](src/data/projects.ts).
2. Append a new project object matching the `Project` interface:

```typescript
{
  slug: 'my-new-ai-project',
  title: 'My New AI Project',
  subtitle: 'Autonomous Multi-Agent Workflow Engine',
  tagline: 'High-throughput agent orchestration with local LLMs',
  description: 'Detailed description of what the project achieves...',
  category: 'ai-agents', // 'ai-agents' | 'video-media' | 'web' | 'automation'
  categoryLabel: 'AI / Agents',
  tags: ['Python', 'LangGraph', 'Gemini API', 'Docker'],
  featured: true,
  status: 'Completed', // 'Completed' | 'In Progress' | 'Beta'
  githubUrl: 'https://github.com/Akm007git/my-new-ai-project',
  liveUrl: 'https://myproject.demo.com', // optional
  image: '/images/projects/my-new-ai-project/thumbnail.svg',
  metrics: [
    { label: 'Throughput', value: '450 req/s' },
    { label: 'Latency', value: '< 60ms' }
  ],
  problem: 'The engineering challenge addressed...',
  approach: [
    'Engineered custom state machine in LangGraph',
    'Hardened tool calling with circuit breakers'
  ],
  architecture: 'Client → API Gateway → Agent Coordinator → Tool Sandbox → Response Generator',
  techStack: [
    {
      category: 'Core AI',
      technologies: ['LangGraph', 'Gemini Flash', 'MCP']
    }
  ],
  outcomes: [
    'Reduced operational latency by 4x',
    'Deployed to production enterprise tier'
  ]
}
```

3. Place a preview image or SVG in `public/images/projects/[slug]/thumbnail.svg` (or `.png`/`.webp`).
4. That's it! The home page filterable grid and dedicated `/projects/[slug]` case study page will be automatically generated statically at build time.

---

## 🌐 Deploy to Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com):

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: initial production portfolio build"
   git push origin main
   ```
2. Navigate to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Keep default settings (Framework preset: Next.js).
4. Click **Deploy**. Vercel will build the static pages, sitemap, and dynamic assets automatically.

---

## ♿ Accessibility & Performance Checklist

* **WCAG 2.2 AA Conformance**: High-contrast color scales, visible focus rings (`focus-visible:ring-2`), semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), ARIA attributes on interactive elements.
* **Prefers-Reduced-Motion**: Animations adapt gracefully to user OS preferences.
* **Image Optimization**: Powered by `next/image` with AVIF/WebP automatic conversion and responsive `sizes`.
* **Keyboard Navigation**: Full Tab navigation across all links and buttons, plus global `⌘K` command palette.
