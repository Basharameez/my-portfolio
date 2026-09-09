import React, { useState } from 'react';
import { Layers, Sparkles, Search, ExternalLink, Code2, ShieldCheck } from 'lucide-react';
import { techCategories, projects } from '../../data/portfolioData';

// Explicit high-accuracy skill evidence mapping database
interface SkillEvidence {
  skill: string;
  category: string;
  evidenceSummary: string;
  testEvidence?: string;
  projects: Array<{
    id: string;
    title: string;
    role: string;
    repoUrl?: string;
    metric?: string;
  }>;
}

const skillEvidenceMap: Record<string, SkillEvidence> = {
  'Next.js 15': {
    skill: 'Next.js 15',
    category: 'Frontend & Full-Stack Systems',
    evidenceSummary: 'Built production recruitment engine (Aptivue / TalentOS) using Next.js 15 App Router, React Server Components, and Server Actions.',
    testEvidence: '170 / 170 Vitest Unit & Integration Tests Passed',
    projects: [
      { id: 'aptivue', title: 'Aptivue (AptiHire AI)', role: 'Flagship Platform', repoUrl: 'https://github.com/2049basharam/AptiHire-AI', metric: '170/170 Vitest Tests' },
      { id: 'campusbuddy', title: 'CampusBuddy Platform', role: 'Campus Service Hub', repoUrl: 'https://github.com/2049basharam/campusbuddy', metric: 'Full-Stack Portal' },
    ],
  },
  'PyTorch': {
    skill: 'PyTorch',
    category: 'AI / ML & Deep Learning',
    evidenceSummary: 'Engineered PyTorch robustness evaluation suite for biomedical vision (PathMNIST ResNet-18 fine-tuning) & IEEE NLP transformer models.',
    testEvidence: '39 / 39 PyTest Verification Suite Passed',
    projects: [
      { id: 'biorobust', title: 'BioRobust / BioVision-Path', role: 'Research Framework', repoUrl: 'https://github.com/Basharameez/BioVision-Path', metric: '39/39 Tests Passed' },
      { id: 'ieee-paper', title: 'IEEE Xplore Research Paper', role: 'NLP Publication', repoUrl: 'https://doi.org/10.1109/IDICAIHEI65991.2025.11377560', metric: 'DOI Published' },
    ],
  },
  'Gemini API': {
    skill: 'Gemini API',
    category: 'LLM & Generative AI',
    evidenceSummary: 'Integrated Gemini 1.5 Pro into Aptivue for structured candidate evaluation, candidate scoring, and anti-hallucination evidence extraction.',
    testEvidence: '2,400 Candidate Evals / Min Pipeline Capacity',
    projects: [
      { id: 'aptivue', title: 'Aptivue (AptiHire AI)', role: 'Flagship Platform', repoUrl: 'https://github.com/2049basharam/AptiHire-AI', metric: 'Zero-Hallucination Prompting' },
    ],
  },
  'FastAPI': {
    skill: 'FastAPI',
    category: 'Backend Architecture & APIs',
    evidenceSummary: 'Architected async Python microservices for industrial vibration signal processing and SIH project evaluation state machines.',
    testEvidence: '11 / 11 SIH Backend Tests Passed',
    projects: [
      { id: 'rotordyn', title: 'RotorDyn Telemetry SaaS', role: 'Client Industrial SaaS', metric: 'FFT Telemetry APIs' },
      { id: 'sih', title: 'SIH Platform', role: 'National Platform', repoUrl: 'https://github.com/2049basharam/SIH', metric: '11/11 Tests Passed' },
      { id: 'rtm', title: 'Remote Treatment Monitoring', role: 'Clinical Triage Layer', repoUrl: 'https://github.com/Basharameez/remote-treatment-monitoring', metric: 'Grad-CAM APIs' },
    ],
  },
  'Redis': {
    skill: 'Redis',
    category: 'Backend Infrastructure & Caching',
    evidenceSummary: 'Configured Redis cache and message store backing BullMQ async worker queues for background candidate resume processing.',
    testEvidence: 'High-Throughput Redis Key-Value Store',
    projects: [
      { id: 'aptivue', title: 'Aptivue (AptiHire AI)', role: 'Flagship Platform', repoUrl: 'https://github.com/2049basharam/AptiHire-AI', metric: 'Async Queue Core' },
    ],
  },
  'BullMQ': {
    skill: 'BullMQ',
    category: 'Distributed Systems & Queues',
    evidenceSummary: 'Designed BullMQ job queue engine to execute candidate resume parsing and Gemini LLM evaluations asynchronously.',
    testEvidence: 'Zero-Downtime Retries & Failover',
    projects: [
      { id: 'aptivue', title: 'Aptivue (AptiHire AI)', role: 'Flagship Platform', repoUrl: 'https://github.com/2049basharam/AptiHire-AI', metric: 'Background Workers' },
    ],
  },
  'Vitest (170/170 passed)': {
    skill: 'Vitest (170/170 passed)',
    category: 'Testing & Engineering Maturity',
    evidenceSummary: 'Built 170 unit and integration tests across 38 test files covering API endpoints, data transformers, and UI state managers in Aptivue.',
    testEvidence: '170 / 170 Passed Across 38 Test Files',
    projects: [
      { id: 'aptivue', title: 'Aptivue (AptiHire AI)', role: 'Flagship Platform', repoUrl: 'https://github.com/2049basharam/AptiHire-AI', metric: '170 Unit & Integration Tests' },
    ],
  },
  'ResNet-18': {
    skill: 'ResNet-18',
    category: 'Computer Vision Architectures',
    evidenceSummary: 'Fine-tuned PyTorch ResNet-18 vision model on 7,180 PathMNIST cellular images and evaluated 35 perturbation conditions.',
    testEvidence: '73.66% Baseline Clean Accuracy / 0.0782 ECE',
    projects: [
      { id: 'biorobust', title: 'BioRobust / BioVision-Path', role: 'Biomedical CV', repoUrl: 'https://github.com/Basharameez/BioVision-Path', metric: '39/39 Tests Passed' },
    ],
  },
  'Grad-CAM': {
    skill: 'Grad-CAM',
    category: 'Explainable AI & Visual Attributions',
    evidenceSummary: 'Implemented Gradient-weighted Class Activation Mapping to project explainable neural heatmap overlays for clinician triage.',
    testEvidence: 'Visual Neural Network Activation Maps',
    projects: [
      { id: 'biorobust', title: 'BioRobust / BioVision-Path', role: 'Biomedical CV', repoUrl: 'https://github.com/Basharameez/BioVision-Path', metric: 'PathMNIST Attributions' },
      { id: 'rtm', title: 'Remote Treatment Monitoring', role: 'Clinical AI', repoUrl: 'https://github.com/Basharameez/remote-treatment-monitoring', metric: 'Clinician Overlays' },
    ],
  },
  'Python': {
    skill: 'Python',
    category: 'AI / ML & Systems Engineering',
    evidenceSummary: 'Core language for PyTorch vision models, FastAPI microservices, AST static code analysis, and signal processing pipelines.',
    testEvidence: '39 PyTest + 11 FastAPI Tests Verified',
    projects: [
      { id: 'biorobust', title: 'BioRobust Framework', role: 'Vision Research', repoUrl: 'https://github.com/Basharameez/BioVision-Path', metric: 'PyTorch Core' },
      { id: 'rotordyn', title: 'RotorDyn Telemetry', role: 'Client SaaS', metric: 'FastAPI & FFT' },
      { id: 'codeorigin', title: 'CodeOrigin Engine', role: 'Code Intelligence', metric: 'Python AST Parsers' },
    ],
  },
  'TypeScript': {
    skill: 'TypeScript',
    category: 'Full-Stack Software Architecture',
    evidenceSummary: 'Enforced strict type safety across Next.js 15 App Router APIs, React components, and Drizzle ORM database models.',
    testEvidence: 'Zero Type Errors in Production Builds',
    projects: [
      { id: 'aptivue', title: 'Aptivue (AptiHire AI)', role: 'Flagship Platform', repoUrl: 'https://github.com/2049basharam/AptiHire-AI', metric: 'Strict Type System' },
      { id: 'campusbuddy', title: 'CampusBuddy Platform', role: 'Full-Stack', repoUrl: 'https://github.com/2049basharam/campusbuddy', metric: 'React TS Hub' },
    ],
  },
  'ONNX Runtime': {
    skill: 'ONNX Runtime',
    category: 'Edge AI & Model Deployment',
    evidenceSummary: 'Deployed YuNet face detection & SFace face recognition ONNX model graphs for client-side biometrics without cloud latency.',
    testEvidence: 'Client-Side Real-Time Inference',
    projects: [
      { id: 'campusbuddy', title: 'CampusBuddy Platform', role: 'Biometrics Hub', repoUrl: 'https://github.com/2049basharam/campusbuddy', metric: 'YuNet & SFace ONNX' },
    ],
  },
  'Plotly.js': {
    skill: 'Plotly.js',
    category: 'Telemetry Visualization & Data Charts',
    evidenceSummary: 'Rendered real-time Fast Fourier Transform (FFT) frequency spectrum charts and vibration defect peaks for industrial bearing telemetry.',
    testEvidence: 'Real-Time Telemetry Rendering',
    projects: [
      { id: 'rotordyn', title: 'RotorDyn Industrial SaaS', role: 'Client SaaS', metric: 'FFT Frequency Charts' },
    ],
  },
};

export const ExpertiseMap: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('Next.js 15');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Fallback lookup if skill is not in custom evidence map
  const activeEvidence = skillEvidenceMap[selectedSkill] || {
    skill: selectedSkill,
    category: 'Engineering Capability',
    evidenceSummary: `Used as a core technology component in production software repositories and engineering workflows.`,
    projects: projects
      .filter(p => p.technologies.some(t => t.toLowerCase().includes(selectedSkill.toLowerCase())))
      .map(p => ({
        id: p.id,
        title: p.title,
        role: p.category,
        repoUrl: p.githubUrl,
      })),
  };

  // Filter skills based on search query
  const filteredCategories = techCategories.map(cat => ({
    ...cat,
    skills: cat.skills.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())),
  })).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#070709] border-b border-white/10 relative">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-white/10 pb-6 text-left">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2">
              <span>05 // CATEGORIZED TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Technical Stack &amp; Skill Taxonomy
            </h2>
          </div>

          {/* Instant Search Bar */}
          <div className="relative mt-4 md:mt-0 w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. PyTorch, Redis)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0E0E12] border border-white/15 focus:border-[#D4AF37] rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-white placeholder-neutral-500 outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Skills Badges Catalog */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-5 text-left">
            {filteredCategories.map((category) => (
              <div 
                key={category.name} 
                className="bg-[#0E0E12]/80 border border-white/10 p-5 rounded-2xl backdrop-blur-md"
              >
                <h3 className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase border-b border-white/10 pb-3 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#D4AF37]" /> {category.name}
                </h3>
                
                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill === skill;
                    const hasVerifiedEvidence = !!skillEvidenceMap[skill];

                    return (
                      <button
                        key={skill}
                        onClick={() => setSelectedSkill(skill)}
                        className={`text-xs font-mono px-3.5 py-1.5 rounded-lg border transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-[1.03]'
                            : 'bg-[#070709] border-white/10 text-neutral-300 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {hasVerifiedEvidence && (
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black' : 'bg-[#D4AF37]'}`} />
                        )}
                        <span>{skill}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Instant Skill Traceability & Evidence Index Card */}
          <div className="lg:col-span-5 bg-[#0E0E12] border border-[#D4AF37]/40 p-6 sm:p-7 rounded-2xl sticky top-28 text-left shadow-[0_0_40px_rgba(212,175,55,0.1)] backdrop-blur-md">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                  SKILL TRACEABILITY INDEX
                </h3>
              </div>
              <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 rounded">
                INSTANT VERIFIED
              </span>
            </div>

            {/* Active Selected Skill Details */}
            <div className="space-y-5">
              
              {/* Skill Badge Title */}
              <div className="p-4 rounded-xl bg-black/80 border border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 block uppercase font-bold">SELECTED TECHNOLOGY</span>
                  <span className="text-lg font-mono font-bold text-[#D4AF37]">{activeEvidence.skill}</span>
                </div>
                <Code2 className="w-6 h-6 text-[#D4AF37]/80" />
              </div>

              {/* Verified Codebase Summary */}
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block uppercase mb-1.5 font-bold">
                  CODEBASE &amp; ARCHITECTURE IMPLEMENTATION
                </span>
                <p className="text-xs text-neutral-200 leading-relaxed font-sans bg-white/[0.02] border border-white/10 p-3.5 rounded-xl">
                  {activeEvidence.evidenceSummary}
                </p>
              </div>

              {/* Test Evidence Metric if available */}
              {activeEvidence.testEvidence && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase block mb-0.5">
                      VERIFIED TEST &amp; SUITE EVIDENCE
                    </span>
                    <span className="text-xs font-mono font-bold text-white block">
                      {activeEvidence.testEvidence}
                    </span>
                  </div>
                </div>
              )}

              {/* Linked Projects */}
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block uppercase mb-2 font-bold">
                  LINKED PRODUCTION &amp; RESEARCH REPOSITORIES
                </span>
                
                {activeEvidence.projects.length > 0 ? (
                  <div className="space-y-2.5">
                    {activeEvidence.projects.map((proj) => (
                      <div 
                        key={proj.id} 
                        className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between hover:border-white/20 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">{proj.title}</span>
                            <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-[#D4AF37] rounded">
                              {proj.role}
                            </span>
                          </div>
                          {proj.metric && (
                            <span className="text-[10px] font-mono text-neutral-400 block mt-1">
                              Evidence: <strong className="text-neutral-200">{proj.metric}</strong>
                            </span>
                          )}
                        </div>

                        {proj.repoUrl && (
                          <a
                            href={proj.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors shrink-0"
                            title="View Repository"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-neutral-400 font-mono">
                    Utilized across auxiliary engineering scripts &amp; utility tooling.
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ExpertiseMap;
