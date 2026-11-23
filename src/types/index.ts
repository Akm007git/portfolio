export type ProjectCategory = 'all' | 'ai-agents' | 'video-media' | 'web' | 'automation';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface TechGroup {
  category: string;
  technologies: string[];
}

export interface ProjectHighlightPoint {
  title: string;
  detail: string;
}

export interface ProjectHighlightSection {
  title: string;
  badge?: string;
  description: string;
  points: ProjectHighlightPoint[];
}

export interface ComparisonRow {
  dimension: string;
  traditional: string;
  thisSystem: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  tags: string[];
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Beta';
  githubUrl: string;
  liveUrl?: string;
  image: string;
  metrics: ProjectMetric[];
  problem: string;
  approach: string[];
  architecture: string;
  techStack: TechGroup[];
  outcomes: string[];
  aiHighlights?: ProjectHighlightSection[];
  comparison?: {
    traditionalTitle: string;
    thisSystemTitle: string;
    rows: ComparisonRow[];
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
  current?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface AchievementItem {
  title: string;
  description: string;
  metric: string;
  highlight: string;
}
