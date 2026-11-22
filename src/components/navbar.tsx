'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { Command, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar({ onOpenCommand }: { onOpenCommand?: () => void }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`flex w-full max-w-4xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'border border-border/80 bg-background/80 shadow-lg shadow-black/5 backdrop-blur-md dark:bg-card/75 dark:shadow-black/25'
            : 'border border-border/40 bg-background/50 backdrop-blur-sm dark:bg-card/40'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand / Name */}
        <Link
          href="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="group flex items-center gap-2.5 rounded-full text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="flex h-7 items-center justify-center rounded-full bg-primary/10 px-2 font-mono text-[11px] font-bold tracking-tight text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
            AKM
          </span>
          <span className="hidden font-mono text-xs font-medium text-muted-foreground sm:inline-block">
            anup.ai
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => {
            const href = isHome ? item.href : `/${item.href}`;
            return (
              <Link
                key={item.name}
                href={href}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right Actions: Command K, Theme Toggle, Resume */}
        <div className="flex items-center gap-2">
          {onOpenCommand && (
            <button
              onClick={onOpenCommand}
              className="hidden items-center gap-1.5 rounded-full border border-border bg-card/60 px-2.5 py-1 text-xs text-muted-foreground transition-all duration-200 hover:border-zinc-500 hover:text-foreground md:flex"
              title="Search and quick actions (Cmd+K)"
              aria-label="Open command palette"
            >
              <Command className="h-3 w-3" />
              <span className="font-mono text-[10px]">⌘K</span>
            </button>
          )}

          <Link
            href="/Anup_Kumar_Mahata_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:flex"
            aria-label="View Resume PDF"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-3 w-3" />
          </Link>

          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:bg-card sm:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-20 left-4 right-4 rounded-2xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur-lg sm:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const href = isHome ? item.href : `/${item.href}`;
              return (
                <Link
                  key={item.name}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {item.name}
                </Link>
              );
            })}
            <hr className="my-1 border-border" />
            <Link
              href="/Anup_Kumar_Mahata_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/10"
            >
              <span>Download Resume PDF</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
