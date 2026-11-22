'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -z-10 h-72 w-full max-w-2xl -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/15"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-3xl">
        {/* Availability / Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] sm:text-xs">
            Specialist Programmer @ Infosys · Generative AI
          </span>
        </motion.div>

        {/* Heading & Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-6 space-y-3"
        >
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl sm:leading-[1.15]">
            Anup Kumar Mahata
          </h1>
          <p className="font-mono text-sm font-medium tracking-wide text-primary sm:text-base">
            AI &amp; Software Systems Engineer
          </p>
        </motion.div>

        {/* Value Proposition Statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed"
        >
          Building autonomous multi-agent systems, enterprise RAG pipelines, and programmatic
          media engines. Specialized in Google ADK, LangGraph, Model Context Protocol (MCP), and
          high-performance backend architectures.
        </motion.p>

        {/* Location & Quick Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Bangalore, India
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            800+ DSA Problems Solved
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-95 hover:shadow-indigo-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </Link>

          <Link
            href="/Anup_Kumar_Mahata_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground transition-all hover:border-zinc-500 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98]"
          >
            <FileText className="h-3.5 w-3.5 text-primary" />
            <span>Download Resume</span>
            <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2.5 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span>Contact Me</span>
          </Link>
        </motion.div>

        {/* Social Link Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex items-center gap-4 border-t border-border/60 pt-6 text-muted-foreground"
        >
          <span className="font-mono text-xs text-muted-foreground/80">Connect:</span>
          <Link
            href="https://github.com/Akm007git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors hover:text-foreground"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/anup-kumar-mahata-76952b246/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors hover:text-foreground"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4 text-[#0077b5]" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>
          <Link
            href="mailto:anupkumarmahata2022@outlook.com"
            className="flex items-center gap-1.5 text-xs transition-colors hover:text-foreground"
            aria-label="Send Email"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">anupkumarmahata2022@outlook.com</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
