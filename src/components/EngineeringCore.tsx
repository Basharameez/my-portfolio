import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, LayoutGrid, Terminal, BarChart2 } from 'lucide-react';
import { SkeletonLoader } from './SkeletonLoader';

interface DomainData {
  id: string;
  title: string;
  icon: any;
  description: string;
  technologies: string[];
  projects: string[];
}

interface EngineeringCoreProps {
  onSelectProject: (name: string) => void;
}

export const EngineeringCore = ({ onSelectProject }: EngineeringCoreProps) => {
  const domains: DomainData[] = [
    {
      id: 'full_stack',
      title: 'Full-Stack Systems',
      icon: LayoutGrid,
      description: 'Designing decoupled web platforms integrating persistent SQL databases, RESTful gateway controllers, and interactive components.',
      technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
      projects: ['CodeOrigin', 'student-info-portal', 'RotorDyn']
    },
    {
      id: 'ai_ml',
      title: 'AI & Machine Learning',
      icon: Cpu,
      description: 'Developing explainable artificial intelligence networks, processing high-frequency datasets, and implementing adaptive rule path algorithms.',
      technologies: ['Machine Learning', 'Explainable AI', 'Pandas', 'NumPy', 'Jupyter'],
      projects: ['Explainable AI Research', 'INTEL_3']
    },
    {
      id: 'devtools',
      title: 'Developer Tools',
      icon: Terminal,
      description: 'Building custom code parsing engines using Python Abstract Syntax Trees (ASTs), source metrics engines, and developer automation suites.',
      technologies: ['AST Parsing', 'CLI Automation', 'Python Compiler', 'Oxlint'],
      projects: ['CodeOrigin', 'python_web_compiler']
    },
    {
      id: 'data_processing',
      title: 'Data & Telemetry',
      icon: BarChart2,
      description: 'Ingesting industrial telemetry datasets, parsing binary spreadsheet arrays in client threads, and animating waveforms.',
      technologies: ['SheetJS', 'Matplotlib', 'Pandas', 'Plotly.js', 'PySide6'],
      projects: ['RotorDyn', 'student-info-portal', 'python_web_compiler']
    }
  ];

  const [activeDomain, setActiveDomain] = useState<DomainData>(domains[0]);
  const [loading, setLoading] = useState(false);

  // Trigger loading skeleton simulation when active domain switches
  const handleDomainChange = (domain: DomainData) => {
    if (domain.id === activeDomain.id) return;
    setLoading(true);
    setActiveDomain(domain);
    setTimeout(() => {
      setLoading(false);
    }, 450);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-6 select-none font-mono">
      {/* Interactive Control Deck */}
      <div className="lg:col-span-2 flex flex-col gap-3 justify-center">
        <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 px-1">Select Core Module</h4>
        {domains.map((domain) => {
          const Icon = domain.icon;
          const isActive = activeDomain.id === domain.id;
          return (
            <button
              key={domain.id}
              onClick={() => handleDomainChange(domain)}
              className={`flex items-center gap-4 p-4 rounded-lg text-left transition-all ${
                isActive
                  ? 'border border-[#00F0FF] bg-[#121319] text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                  : 'border border-[#1E202B] bg-[#0A0A0C] hover:border-gray-700 text-gray-400'
              }`}
            >
              <div className={`p-2 rounded ${isActive ? 'bg-[#00F0FF]/10' : 'bg-[#121319]'}`}>
                <Icon size={20} className={isActive ? 'text-[#00F0FF]' : 'text-gray-500'} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide font-sans">{domain.title}</span>
                <span className="text-[9px] text-gray-500 uppercase tracking-wider">{domain.projects.length} System Nodes Linked</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Visual Connection Diagram & Details Panel */}
      <div className="lg:col-span-3 border border-[#1E202B] bg-[#121319] rounded-xl p-6 relative flex flex-col justify-between overflow-hidden shadow-xl min-h-[350px]">
        {/* Subtle background nodes overlay */}
        <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <Terminal size={240} className="text-[#00F0FF]" />
        </div>

        {loading ? (
          <div className="flex-grow flex items-center justify-center">
            <SkeletonLoader />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-6 relative z-10 w-full"
            >
              {/* Header info */}
              <div>
                <span className="text-[10px] text-[#7000FF] font-bold uppercase tracking-wider">Module Telemetry</span>
                <h3 className="text-xl font-bold font-sans text-[#E2E8F0] mt-1">{activeDomain.title}</h3>
                <p className="text-sm text-gray-400 font-sans mt-3 leading-relaxed">{activeDomain.description}</p>
              </div>

              {/* Target Technologies */}
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Active Tooling Stack</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {activeDomain.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded bg-[#0A0A0C] border border-[#1E202B] text-gray-300 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Linked Projects */}
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Linked Project Node Targets</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeDomain.projects.map((proj) => (
                    <button
                      key={proj}
                      onClick={() => onSelectProject(proj)}
                      className="flex items-center justify-between p-3 rounded bg-[#0A0A0C] border border-[#1E202B] hover:border-[#00F0FF] text-left text-xs transition-colors"
                    >
                      <span className="text-gray-300 font-sans font-semibold">{proj}</span>
                      <span className="text-[9px] text-[#00F0FF] uppercase tracking-widest">Open Schema &rarr;</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Console status footer */}
        <div className="border-t border-[#1E202B] pt-4 mt-6 flex items-center justify-between text-[9px] text-gray-500 uppercase tracking-wider relative z-10">
          <span>Targeting Address: 0x{activeDomain.id.toUpperCase()}</span>
          <span>Security Protocol Check: OK</span>
        </div>
      </div>
    </div>
  );
};
