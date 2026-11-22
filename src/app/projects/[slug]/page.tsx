import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, ExternalLink, Github, Layers, Wrench } from 'lucide-react';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} — Case Study & Architecture`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | Anup Kumar Mahata`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      {/* Back to Home Navigation */}
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Header */}
      <header className="space-y-4 border-b border-border/60 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 font-mono text-xs font-semibold text-primary">
            {project.categoryLabel}
          </span>
          <span
            className={`rounded-full px-3 py-1 font-mono text-xs font-semibold ${
              project.status === 'Completed'
                ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
            }`}
          >
            {project.status}
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="font-mono text-sm text-primary font-medium">{project.subtitle}</p>
        <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-xs sm:text-sm font-semibold text-background hover:opacity-90 transition-all"
            >
              <Github className="h-4 w-4" />
              <span>View Source Code</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary transition-all"
            >
              <ExternalLink className="h-4 w-4 text-primary" />
              <span>Live Deployment</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </header>

      {/* Hero Visual Showcase */}
      <div className="my-10 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={project.image}
            alt={`Detailed preview of ${project.title}`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="border-t border-border/60 bg-secondary/30 px-4 py-2.5 text-center font-mono text-[11px] text-muted-foreground">
          Architecture overview &amp; interface snapshot for {project.title}
        </div>
      </div>

      {/* Metrics Row */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            System Key Performance Indicators (KPIs)
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card/60 p-4 text-center sm:text-left"
              >
                <div className="font-mono text-[11px] text-muted-foreground uppercase">{m.label}</div>
                <div className="mt-1 font-mono text-lg font-bold text-foreground sm:text-xl">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Case Study Content Sections */}
      <div className="space-y-12">
        {/* Problem Statement */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
            <Layers className="h-4 w-4" />
            <span>01 // The Problem</span>
          </div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Challenges &amp; Engineering Constraints
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.problem}
          </p>
        </section>

        {/* Engineering Approach */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
            <Code2 className="h-4 w-4" />
            <span>02 // The Approach &amp; Solution</span>
          </div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Architectural Design &amp; Implementation
          </h2>
          <ul className="space-y-3">
            {project.approach.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4 text-xs sm:text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* System Architecture Diagram / Flow */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
            <Wrench className="h-4 w-4" />
            <span>03 // System Pipeline Flow</span>
          </div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Pipeline Architecture
          </h2>
          <div className="rounded-xl border border-border bg-card p-5 font-mono text-xs leading-relaxed text-foreground">
            {project.architecture}
          </div>
        </section>

        {/* Detailed Tech Stack Breakdown */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
            <Layers className="h-4 w-4" />
            <span>04 // Technologies &amp; Libraries</span>
          </div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Technology Stack Breakdown
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.techStack.map((group, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card/60 p-5 space-y-3">
                <h3 className="font-semibold text-sm text-foreground">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Measurable Outcomes */}
        <section className="space-y-3 border-t border-border/60 pt-8">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Outcomes &amp; Impact</h2>
          <ul className="space-y-2">
            {project.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Bottom CTA to explore other projects */}
      <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline underline-offset-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Projects</span>
        </Link>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90"
        >
          <span>Discuss This Project</span>
        </Link>
      </div>
    </div>
  );
}
