import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-4xl px-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-[11px]">
          © {new Date().getFullYear()} Anup Kumar Mahata. Designed with Next.js &amp; Tailwind.
        </p>

        <div className="flex items-center gap-6 font-mono text-[11px]">
          <Link
            href="https://github.com/Akm007git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/anup-kumar-mahata-76952b246/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="/Anup_Kumar_Mahata_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
