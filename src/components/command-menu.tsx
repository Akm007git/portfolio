'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Laptop,
  Briefcase,
  Code2,
  FolderGit2,
  Trophy,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { projects } from '@/data/projects';

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useRouter();
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  const runCommand = (command: () => void) => {
    onOpenChange(false);
    command();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-20 backdrop-blur-sm sm:pt-32"
      onClick={() => onOpenChange(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command Menu"
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="flex flex-col bg-transparent">
          <div className="flex items-center border-b border-border px-3">
            <Command.Input
              placeholder="Type a command or search projects..."
              className="h-12 w-full bg-transparent px-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              autoFocus
            />
            <kbd className="hidden rounded bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-block">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-xs text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
              <Command.Item
                onSelect={() => runCommand(() => router.push('#about'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <Code2 className="h-4 w-4 text-muted-foreground" />
                <span>About &amp; Skills</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push('#projects'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <FolderGit2 className="h-4 w-4 text-muted-foreground" />
                <span>Projects Showcase</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push('#experience'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>Experience &amp; Timeline</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push('#achievements'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <Trophy className="h-4 w-4 text-muted-foreground" />
                <span>Achievements &amp; DSA</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push('#contact'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>Contact Form</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Projects" className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
              {projects.map((project) => (
                <Command.Item
                  key={project.slug}
                  onSelect={() => runCommand(() => router.push(`/projects/${project.slug}`))}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
                >
                  <div className="flex items-center gap-2.5">
                    <Laptop className="h-4 w-4 text-primary" />
                    <span>{project.title}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">{project.categoryLabel}</span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Actions & Links" className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
              <Command.Item
                onSelect={() => runCommand(() => window.open('/Anup_Kumar_Mahata_Resume.pdf', '_blank'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span>Download Resume (PDF)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open('https://github.com/Akm007git', '_blank'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <Github className="h-4 w-4 text-muted-foreground" />
                <span>GitHub Profile (@Akm007git)</span>
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  runCommand(() =>
                    window.open('https://www.linkedin.com/in/anup-kumar-mahata-76952b246/', '_blank'),
                  )
                }
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <span>LinkedIn Profile</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Theme" className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
              <Command.Item
                onSelect={() => runCommand(() => setTheme('light'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <Sun className="h-4 w-4 text-muted-foreground" />
                <span>Switch to Light Theme</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => setTheme('dark'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <Moon className="h-4 w-4 text-muted-foreground" />
                <span>Switch to Dark Theme</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
