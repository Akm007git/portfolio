import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { ProjectsGrid } from '@/components/projects-grid';
import { Timeline } from '@/components/timeline';
import { Achievements } from '@/components/achievements';
import { ContactForm } from '@/components/contact-form';

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <ProjectsGrid />
      <Timeline />
      <Achievements />
      <ContactForm />
    </div>
  );
}
