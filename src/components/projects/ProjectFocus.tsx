import React, { useState, useEffect } from 'react';
import { ArrowLeft, HardDrive, Cpu, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectFocusProps {
  project: Project;
  onClose: () => void;
}

type TabType = 'overview' | 'architecture' | 'engineering' | 'challenges' | 'outcome';

export const ProjectFocus: React.FC<ProjectFocusProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // Prevent background scroll when focus mode is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'OVERVIEW', icon: <HardDrive className="w-3.5 h-3.5" /> },
    { id: 'architecture', label: 'ARCHITECTURE', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'engineering', label: 'ENGINEERING', icon: <Activity className="w-3.5 h-3.5" /> },
    { id: 'challenges', label: 'CHALLENGES', icon: <AlertTriangle className="w-3.5 h-3.5" /> },
    { id: 'outcome', label: 'OUTCOME', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-sm font-semibold text-[#FFF5EB] tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>// PROJECT OVERVIEW</h4>
            <p className="text-sm text-[#B3A497] leading-relaxed font-sans font-light">{project.overview}</p>
          </div>
        );
      case 'architecture':
        return (
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-sm font-semibold text-[#FFF5EB] tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>// SYSTEM ARCHITECTURE</h4>
            <p className="text-sm text-[#B3A497] leading-relaxed font-sans font-light">{project.architecture}</p>
          </div>
        );
      case 'engineering':
        return (
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-sm font-semibold text-[#FFF5EB] tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>// ENGINEERING DETAILS</h4>
            <p className="text-sm text-[#B3A497] leading-relaxed font-sans font-light">{project.engineering}</p>
          </div>
        );
      case 'challenges':
        return (
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-sm font-semibold text-[#FFF5EB] tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>// TECHNICAL CHALLENGES</h4>
            <p className="text-sm text-[#B3A497] leading-relaxed font-sans font-light">{project.challenges}</p>
          </div>
        );
      case 'outcome':
        return (
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-sm font-semibold text-[#FFF5EB] tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>// RUNTIME OUTCOMES</h4>
            <p className="text-sm text-[#B3A497] leading-relaxed font-sans font-light">{project.outcome}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
      {/* Container */}
      <div className="bg-[#0E0C0A] rounded-xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl relative border border-[#8C6D4F]/35 overflow-hidden">
        
        {/* Top Gold Horizon Edge */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

        {/* Corner Pins */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/50" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/50" />

        {/* Top Sticky Header */}
        <div className="bg-black/90 px-6 py-4 border-b border-[#8C6D4F]/20 flex items-center justify-between z-10">
          <button
            onClick={onClose}
            className="text-[10px] font-mono tracking-widest flex items-center gap-2 text-[#C4B5A5] hover:text-[#FFF5EB] transition-colors py-2 px-3 border border-[#8C6D4F]/40 rounded-sm cursor-pointer bg-[#0A0806]"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO WORK
          </button>
          
          <span className="text-[9px] font-mono text-[#8C6D4F] tracking-[0.25em] uppercase">
            ANALYSIS NODE // {project.id.toUpperCase()}
          </span>
        </div>

        {/* Content body */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 flex flex-col gap-8">
          
          {/* Metadata Banner */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 text-left">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                // SYSTEM BLOCK
              </span>
              
              <h2 
                className="text-2xl sm:text-3xl text-white mt-1 tracking-tight uppercase font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {project.title}
              </h2>
              
              <p className="text-[10px] text-[#A8988B] font-mono mt-1 uppercase tracking-widest">
                {project.category}
              </p>
            </div>
            
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 md:max-w-md">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[9px] font-mono bg-[#16120E] text-[#E8D7C5] border border-[#8C6D4F]/30 px-2.5 py-1 rounded-sm uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Interactive Tab list */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-sm border transition-all text-left font-mono tracking-wider cursor-pointer ${
                      isActive 
                        ? 'bg-[#120F0C] border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.12)] font-bold' 
                        : 'bg-[#0A0806] border-[#8C6D4F]/35 text-[#A8988B] hover:border-[#8C6D4F]'
                    }`}
                  >
                    <span className={isActive ? 'text-[#D4AF37]' : 'text-[#8C6D4F]'}>
                      {tab.icon}
                    </span>
                    <span className="text-[10px] uppercase">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right side: Active Tab content panel */}
            <div className="lg:col-span-8 h-full">
              <div className="bg-[#0A0806] border border-[#8C6D4F]/25 rounded-sm p-6 min-h-[300px] h-full flex flex-col justify-between relative group">
                
                {/* Micro corner brackets inside content block */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8C6D4F]/25" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8C6D4F]/25" />

                {getTabContent()}
                
                {/* Secondary Technical Indicator */}
                <div className="border-t border-[#8C6D4F]/15 pt-6 mt-8 flex justify-between items-center text-[8px] font-mono text-[#8C6D4F]">
                  <span>NODE_COMPILED_TRUE</span>
                  <span>SYNC_SESSION_SECURE</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectFocus;
