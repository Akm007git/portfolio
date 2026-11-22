import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/footer';
import { CommandMenuWrapper } from '@/components/command-menu-wrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anupmahata.dev'),
  title: {
    default: 'Anup Kumar Mahata — AI & Software Systems Engineer',
    template: '%s | Anup Kumar Mahata',
  },
  description:
    'AI Engineer specializing in autonomous multi-agent workflows, enterprise RAG pipelines, Google ADK, LangGraph, and full-stack software architectures.',
  keywords: [
    'Anup Kumar Mahata',
    'AI Engineer',
    'Generative AI',
    'LangGraph',
    'Google ADK',
    'Model Context Protocol',
    'MCP',
    'RAG',
    'Full Stack Engineer',
    'Bangalore',
    'Infosys',
  ],
  authors: [{ name: 'Anup Kumar Mahata', url: 'https://github.com/Akm007git' }],
  creator: 'Anup Kumar Mahata',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anupmahata.dev',
    title: 'Anup Kumar Mahata — AI & Software Systems Engineer',
    description:
      'AI Engineer specializing in autonomous multi-agent workflows, enterprise RAG pipelines, and full-stack software architectures.',
    siteName: 'Anup Kumar Mahata Portfolio',
    images: [
      {
        url: '/images/projects/ai-job-search/thumbnail.svg',
        width: 1200,
        height: 675,
        alt: 'Anup Kumar Mahata Portfolio Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anup Kumar Mahata — AI & Software Systems Engineer',
    description:
      'AI Engineer specializing in autonomous multi-agent workflows, enterprise RAG pipelines, and full-stack software architectures.',
    images: ['/images/projects/ai-job-search/thumbnail.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anup Kumar Mahata',
    jobTitle: 'Specialist Programmer — Generative AI',
    worksFor: {
      '@type': 'Organization',
      name: 'Infosys',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Ideal Institute of Engineering',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Birla Institute of Technology',
      },
    ],
    url: 'https://anupmahata.dev',
    sameAs: [
      'https://github.com/Akm007git',
      'https://www.linkedin.com/in/anup-kumar-mahata-76952b246/',
    ],
    knowsAbout: [
      'Generative AI',
      'Multi-Agent Systems',
      'LangGraph',
      'Google ADK',
      'Model Context Protocol',
      'Retrieval Augmented Generation',
      'Full Stack Software Development',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CommandMenuWrapper>
            <div className="relative flex min-h-screen flex-col">
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CommandMenuWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
