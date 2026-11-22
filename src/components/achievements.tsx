'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '@/data/achievements';
import { Trophy, Code2 } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="py-20 border-t border-border/60">
      <div className="mx-auto w-full max-w-4xl space-y-10">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            04 // Milestones
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Achievements &amp; Problem Solving
          </h2>
          <p className="text-sm text-muted-foreground">
            Algorithmic mastery and hackathon honors.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 sm:p-8 hover:border-zinc-500/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {idx === 0 ? <Code2 className="h-5 w-5" /> : <Trophy className="h-5 w-5" />}
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <div className="font-mono text-xs text-primary font-medium">{item.highlight}</div>
                </div>
              </div>

              {/* Big Metric Callout */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {item.metric}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {idx === 0 ? 'Problems Solved' : 'Hackathon Placement'}
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
