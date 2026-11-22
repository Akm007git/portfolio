'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';
import { ProjectCategory } from '@/types';

const filterTabs: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI & Agents', value: 'ai-agents' },
  { label: 'Video & Media', value: 'video-media' },
  { label: 'Web', value: 'web' },
  { label: 'Automation', value: 'automation' },
];

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>('all');

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 border-t border-border/60">
      <div className="mx-auto w-full max-w-4xl space-y-10">
        {/* Header and Filter Controls */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              02 // Portfolio Works
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Featured Projects &amp; Systems
            </h2>
            <p className="text-sm text-muted-foreground">
              Autonomous agents, generative AI pipelines, and full-stack software.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 rounded-full border border-border/80 bg-card/60 p-1 backdrop-blur-sm">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveCategory(tab.value)}
                  className={`relative rounded-full px-3 py-1.5 font-mono text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={index < 2}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
