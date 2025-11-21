export interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  details?: string;
}

export interface Project {
  name: string;
  period: string;
  description: string;
  role?: string; // e.g. Project Manager, Backend
  whatDidIDo: string[];
  techStack: string[];
  links?: { label: string; url: string }[];
  imageGradient?: string; // CSS gradient for the card background
}

export interface SkillMetric {
  name: string;
  level: number; // 1-100
}

export interface ResumeData {
  fullName: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  summary: string; // The long about me text
  skills: { category: string; items: string[] }[];
  skillMetrics: SkillMetric[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
}
