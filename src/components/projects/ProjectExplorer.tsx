import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import PipelineVisualizer from './PipelineVisualizer';
import BioRobustSim from './BioRobustSim';
import AptivueSim from './AptivueSim';
import RotorDynSim from './RotorDynSim';
import Tilt3D from '../ui/Tilt3D';
import { projects } from '../../data/portfolioData';

export const ProjectExplorer: React.FC = () => {
  // Filter top 3 featured projects
  const featuredProjects = projects
    .filter(p => p.featuredRank && p.featuredRank <= 3)
    .sort((a, b) => (a.featuredRank || 0) - (b.featuredRank || 0));

  const [activeTab, setActiveTab] = useState<string>(featuredProjects[0]?.id || 'aptivue');

  const selectedProject = projects.find(p => p.id === activeTab) || featuredProjects[0];

  return (
    <section id="work" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#070709] border-b border-white/10 relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6 text-left">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2">
              <span>01 // FEATURED ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Production-Oriented Systems &amp; AI Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-4 md:mt-0 font-sans">
            Detailed engineering breakdowns of flagship AI platforms, industrial telemetry SaaS, and computer vision research.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {featuredProjects.map((proj) => {
            const isActive = proj.id === activeTab;
            return (
              <Tilt3D key={proj.id} maxTilt={8} scale={1.02}>
                <button
                  onClick={() => setActiveTab(proj.id)}
                  className={`w-full h-full p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'glass-card border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]'
                      : 'bg-[#0E0E14]/60 border-white/10 hover:border-white/25 backdrop-blur-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#D4AF37]' : 'text-neutral-500'}`}>
                      0{proj.featuredRank} // {proj.classification === 'engineering' ? 'PRODUCTION' : proj.classification === 'client' ? 'CLIENT SAAS' : 'RESEARCH'}
                    </span>
                    {proj.isFlagship && (
                      <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 rounded-full">
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {proj.tagline || proj.description}
                  </p>
                </button>
              </Tilt3D>
            );
          })}
        </div>

        {/* Selected Featured Project Case Study Card */}
        {selectedProject && (
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 relative text-left"
          >
            {/* Header Badge & Title */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase">
                    0{selectedProject.featuredRank} // CLASSIFICATION: {selectedProject.classification.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-neutral-300 mt-1 max-w-3xl">
                  {selectedProject.tagline || selectedProject.description}
                </p>
              </div>

              {/* External Links */}
              <div className="flex items-center gap-3 shrink-0">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-[#12121A] hover:bg-neutral-800 border border-white/15 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-[#D4AF37] hover:bg-[#c29f2e] text-black text-xs font-bold rounded-lg transition-colors shadow-lg"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Bespoke Interactive Preview Component */}
            <div className="mb-10">
              {selectedProject.id === 'aptivue' ? (
                <AptivueSim />
              ) : selectedProject.id === 'rotordyn' ? (
                <RotorDynSim />
              ) : selectedProject.id === 'biorobust' ? (
                <BioRobustSim />
              ) : (
                <PipelineVisualizer
                  nodes={selectedProject.pipelineNodes3D}
                  projectTitle={selectedProject.title}
                  title="PROJECT PIPELINE ARCHITECTURE"
                />
              )}
            </div>

            {/* Problem → Engineering Approach → Result Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 border-t border-b border-white/10 py-8">
              {/* Problem */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block font-bold">
                  01 // THE PROBLEM
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block font-bold">
                  02 // ENGINEERING APPROACH
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  {selectedProject.approach}
                </p>
              </div>

              {/* Result */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-bold">
                  03 // VERIFIED RESULT
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            {/* Verified Metrics Cards */}
            {selectedProject.metrics && selectedProject.metrics.length > 0 && (
              <div className="mb-8">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-3 font-bold">
                  VERIFIED METRIC EVIDENCE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black/60 border border-white/10 text-left">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase">{m.label}</div>
                      <div className="text-lg font-bold text-white font-mono my-1">{m.value}</div>
                      {m.context && <div className="text-[10px] text-neutral-400 font-sans">{m.context}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Tags */}
            <div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                INTEGRATED TECHNOLOGIES
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-200 text-xs font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
};

export default ProjectExplorer;
