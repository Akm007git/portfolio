'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { Cpu, Database, Layout, Terminal, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Generative AI & Agentic Systems': <Cpu className="h-4 w-4 text-primary" />,
  'Enterprise & Backend Systems': <Terminal className="h-4 w-4 text-emerald-500" />,
  'Frontend & Modern Web': <Layout className="h-4 w-4 text-cyan-500" />,
  'Databases & Storage': <Database className="h-4 w-4 text-amber-500" />,
  'Languages & Developer Tools': <Wrench className="h-4 w-4 text-violet-500" />,
};

export function About() {
  return (
    <section id="about" className="py-20 border-t border-border/60">
      <div className="mx-auto w-full max-w-4xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            01 // About &amp; Skills
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Technical Background &amp; Domain Expertise
          </h2>
        </div>

        {/* Bio Text */}
        <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            I am an <strong className="text-foreground">AI / Software Engineer</strong> with over 2 years of
            hands-on experience building enterprise-grade Generative AI systems. At{' '}
            <strong className="text-foreground">Infosys</strong>, I design and deploy multi-agent
            workflows utilizing <strong className="text-foreground">Google ADK</strong> and{' '}
            <strong className="text-foreground">LangGraph</strong>, automating end-to-end IT ticket
            lifecycles across ServiceNow and Dynatrace observability platforms.
          </p>
          <p>
            My engineering philosophy centers on rigorous agent architecture: grounding LLM decisions
            in deterministic knowledge graphs, building robust Model Context Protocol (MCP) servers,
            and hardening tool calling with retries, validation, and human-in-the-loop checkpoints.
            Complementing my AI focus, I have solved <strong className="text-foreground">800+ DSA problems</strong> and
            hold a strong foundation in backend APIs, Oracle/PL-SQL logic, and modern TypeScript frontends.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-4 pt-4">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Skills Taxonomy
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="group relative rounded-2xl border border-border bg-card/60 p-5 transition-all duration-200 hover:border-zinc-500/50 hover:bg-card"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-foreground">
                    {categoryIcons[cat.title] || <Terminal className="h-4 w-4" />}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold tracking-tight text-foreground">
                      {cat.title}
                    </h4>
                    <p className="text-[11px] text-muted-foreground">{cat.description}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center rounded-md px-2 py-0.5 font-mono text-[11px] transition-colors ${
                        skill.highlight
                          ? 'border border-primary/30 bg-primary/10 text-primary font-medium'
                          : 'border border-border/80 bg-secondary/70 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
