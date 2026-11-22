'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '@/data/experience';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

export function Timeline() {
  return (
    <section id="experience" className="py-20 border-t border-border/60">
      <div className="mx-auto w-full max-w-4xl space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            03 // Background
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Experience &amp; Education
          </h2>
          <p className="text-sm text-muted-foreground">
            Professional track record in Generative AI systems and formal education.
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Briefcase className="h-4 w-4 text-primary" />
            <span>Professional Work Experience</span>
          </div>

          <div className="space-y-6">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl border border-border bg-card/60 p-6 sm:p-8"
              >
                {/* Header row */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-foreground">{item.role}</h3>
                      {item.current && (
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-500 border border-emerald-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="font-medium text-primary text-sm mt-0.5">{item.company}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech pills */}
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border/50 pt-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span>Academic Education</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl border border-border bg-card/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-foreground">{edu.institution}</h4>
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary border border-primary/20 shrink-0">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-foreground/90">
                    {edu.degree}
                  </p>
                  {edu.details && (
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-3 text-[11px] font-mono text-muted-foreground">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
