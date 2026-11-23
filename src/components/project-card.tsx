'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const isCompleted = project.status === 'Completed';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 transition-all duration-300 hover:border-zinc-500/60 hover:bg-card hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40"
    >
      {/* Top Media Preview Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/40 border-b border-border/60">
        <Image
          src={project.image}
          alt={`Preview thumbnail for ${project.title}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Status Badge overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-border/80 bg-background/90 px-2.5 py-1 backdrop-blur-md">
          <span
            className={`h-2 w-2 rounded-full ${
              isCompleted ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
            }`}
          />
          <span className="font-mono text-[10px] font-medium text-foreground">
            {project.status}
          </span>
        </div>

        {/* Category Label */}
        <div className="absolute top-3 right-3 rounded-full border border-border/80 bg-background/90 px-2.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] text-muted-foreground">
            {project.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Title & Detail link */}
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/projects/${project.slug}`}
              className="group/title inline-flex items-center gap-1 text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:text-primary" />
            </Link>
          </div>

          <p className="mt-1 font-mono text-xs text-primary/90 font-medium">
            {project.subtitle}
          </p>

          <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm line-clamp-3">
            {project.description}
          </p>

          {/* Metrics snippet if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/50 pt-3">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="rounded-lg bg-secondary/50 px-2.5 py-1.5">
                  <div className="font-mono text-[10px] text-muted-foreground uppercase">
                    {m.label}
                  </div>
                  <div className="font-mono text-xs font-semibold text-foreground">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Tags and CTAs */}
        <div className="mt-6 space-y-4">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="font-mono text-[10px] text-muted-foreground self-center">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between border-t border-border/50 pt-3">
            <Link
              href={`/projects/${project.slug}`}
              className="text-xs font-medium text-primary hover:underline underline-offset-4"
            >
              Case Study &amp; Architecture →
            </Link>

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-primary transition-colors hover:underline"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Live</span>
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Code</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
