export interface PipelineStep {
  label: string;
  info: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  overview: string;
  architecture: string;
  engineering: string;
  challenges: string;
  outcome: string;
  pipelineSteps: PipelineStep[];
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  projects: string[];
  technologies: string[];
}

export interface TechCategory {
  name: string;
  skills: string[];
}

export interface ArchitectureLayer {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface SdlcStep {
  id: string;
  title: string;
  description: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Publication {
  title: string;
  publisher: string;
  conference: string;
  date: string;
  addedDate: string;
  authors: string[];
  doi: string;
  url: string;
  description: string;
  highlights: string[];
}

