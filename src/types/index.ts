export type ProjectClassification = 'engineering' | 'client' | 'research';

export interface PipelineStep {
  label: string;
  info: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  context?: string;
}

export interface ArchitectureStep {
  label: string;
  description?: string;
}

export interface PipelineNode3D {
  id: string;
  label: string;
  sublabel?: string;
  description: string;
  type: 'input' | 'process' | 'ai' | 'data' | 'api' | 'product';
  position: [number, number, number];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline?: string;
  technologies: string[];
  description: string;
  overview: string;
  architecture: string;
  engineering: string;
  challenges: string;
  outcome: string;
  problem: string;
  approach: string;
  result: string;
  classification: ProjectClassification;
  featuredRank?: number;
  isFlagship?: boolean;
  isClientWork?: boolean;
  isResearch?: boolean;
  metrics?: ProjectMetric[];
  pipelineSteps: PipelineStep[];
  architectureFlow?: ArchitectureStep[];
  pipelineNodes3D?: PipelineNode3D[];
  githubUrl?: string;
  liveUrl?: string;
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
  isClientEngagement?: boolean;
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
  methodology?: string[];
}
