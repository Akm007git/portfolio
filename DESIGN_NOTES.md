# Portfolio Design & Architecture Notes

Research and design decisions synthesized from modern elite developer and AI engineer portfolios (e.g., Paco Coursey, Rauno Freiberg, Emil Kowalski, Lee Robinson, Shu Ding, Brian Lovin, and Linear/Vercel design systems), cross-referenced with the reference HTML (`index.html`) and updated resume (`resume.tex`).

---

## 1. Portfolio Research Findings (5–8 Top Portfolios Analyzed)

### A. Layout & Grid Structure
* **Container Discipline**: 
  * Prose / narrative columns are constrained to **640px–680px** (`max-w-2xl`) for optimal line length (60–75 characters per line).
  * Flagship showcases and project grids expand to **1024px–1152px** (`max-w-5xl` to `max-w-6xl`) to display rich cards and bento grids without horizontal crampedness.
* **Vertical Spacing Cadence**:
  * Sections breathe with `py-16 md:py-24` and `space-y-16 md:space-y-24`.
  * Generous whitespace signals confidence and clarity; avoid packed, suffocating boxes.

### B. Typography & Hierarchy
* **Font Stack**:
  * Primary: `Geist Sans` or `Inter` with optical sizing and tight negative tracking (`tracking-tight` / `-0.025em`) for modern technical authority.
  * Monospace: `Geist Mono` or `JetBrains Mono` for badges, tags, code snippets, dates, and metrics.
* **Understated Headings**:
  * Hero title avoids screaming 72px fonts; instead uses modest `28px–36px` (`text-2xl md:text-3xl`) with high font weight (`font-semibold`) and crisp contrast.
  * Section titles are marked with small, uppercase, tracked labels (`text-xs font-mono uppercase tracking-wider text-zinc-500`).

### C. Project Cards & Showcase
* **Card Anatomy**:
  * Live status pill (e.g. `🟢 Production`, `🟡 In Progress`).
  * Project title with subtle hover transform diagonal arrow (`↗`).
  * Concise technical description emphasizing system impact and complexity.
  * Monospace tag pills (`bg-zinc-900/80 text-zinc-300 border border-zinc-800`).
  * Action buttons for live links and GitHub repository.
* **Micro-Interactions**:
  * Subtle 1px border glow (`border-zinc-800` $\rightarrow$ `border-zinc-700` on hover).
  * Subtle hover lift (`translate-y-[-2px]`) with smooth cubic bezier.

### D. Motion & Micro-Interactions (Framer Motion)
* **Philosophy**: *"Felt, not seen."* Immediate responsiveness, natural spring damping, zero lag.
* **Physics**:
  * Hover / layout transitions: `type: "spring", stiffness: 350, damping: 30`.
  * Section scroll reveal: gentle staggered fade-up (`opacity: 0, y: 12` $\rightarrow$ `opacity: 1, y: 0`).
  * Fully respects `prefers-reduced-motion` for accessibility.

### E. Navigation & Theme
* **Form Factor**: Floating frosted glass dock (`backdrop-blur-md bg-zinc-950/80 border border-zinc-800/80 rounded-full`) with active section indicator pill and keyboard shortcut (`Cmd+K`).
* **Theme Switching**: Clean dark/light toggle using `next-themes` with zero hydration flash or color jumping.

---

## 2. Reference HTML Review & Extraction

### What We Are Keeping (Valuable Concepts):
1. **Experience & Education Timeline**: Dual timeline structure showcasing professional engineering experience (Specialist Programmer - Generative AI at Infosys) alongside academic background (B.Tech in ECE).
2. **Competitive Programming & Problem Solving**: Highlighting concrete metrics from your resume: **800+ DSA problems solved** on LeetCode/GFG and **2nd Prize in Infosys GitHub Copilot Hackathon**.
3. **Direct Contact Integration**: Clear communication channels (email, phone/location, LinkedIn, GitHub).

### What We Are Discarding (Archaic / Anti-Patterns):
1. ❌ **Archaic PagePiling.js**: Full-screen locked-scroll slides that break natural browser scrolling, keyboard navigation, and mobile UX.
2. ❌ **Arbitrary Percentage Bars**: Fake skill percentage bars (e.g., "C++ 75%", "Python 55%") — modern engineering hiring managers reject these as arbitrary; we replace them with categorized skill taxonomy cards (AI/ML, Backend, Databases, Tools).
3. ❌ **Generic Template Styling**: Outdated heavy bootstrap classes, flash loaders, and bloated iconify CDN scripts.

---

## 3. Design Direction & Palette

* **Theme**: **Minimal Dark with Deep Obsidian Canvas & Electric Indigo Accent** (with an equally refined clean Light Mode).
* **Color Palette (Dark Mode)**:
  * Background: `#09090b` (`zinc-950`)
  * Elevated Card Surface: `#121215` (`zinc-900/60` with 1px border `#27272a`)
  * Border Default: `#27272a` (`zinc-800`) / Hover: `#3f3f46` (`zinc-700`)
  * Primary Text: `#f4f4f5` (`zinc-100`)
  * Secondary Text: `#a1a1aa` (`zinc-400`)
  * Accent: `#6366f1` / `#818cf8` (Electric Indigo)
  * Success / Live indicator: `#10b981` (Emerald)
* **Color Palette (Light Mode)**:
  * Background: `#fafafa` (`zinc-50`)
  * Card Surface: `#ffffff` (`border border-zinc-200`)
  * Primary Text: `#09090b` (`zinc-950`)
  * Secondary Text: `#52525b` (`zinc-600`)

---

## 4. Accessibility & SEO Targets
* **WCAG 2.2 AA Compliance**: Full keyboard navigation, visible focus rings (`focus-visible:ring-2 focus-visible:ring-indigo-500`), semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`), ARIA labels for icon-only buttons, color contrast ratio $\ge 4.5:1$.
* **Performance & SEO**:
  * Native Next.js image optimization (`next/image`).
  * Automated JSON-LD structured data (`Person`, `WebSite`).
  * Dynamic `sitemap.xml` and `robots.txt`.
  * Open Graph metadata tags for rich social sharing on LinkedIn and X/Twitter.
  * Target: **Lighthouse 90+ on Performance, Accessibility, Best Practices, and SEO**.
