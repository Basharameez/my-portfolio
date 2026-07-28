import React, { useState, useEffect } from 'react';
import { ArrowLeft, HardDrive, Cpu, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { NeumorphicButton } from '../ui/NeumorphicButton';
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
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black text-neutral-900 tracking-wide uppercase">PROJECT SCOPE OVERVIEW</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">{project.overview}</p>
          </div>
        );
      case 'architecture':
        return (
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black text-neutral-900 tracking-wide uppercase">SYSTEM ARCHITECTURE STRUCTURE</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">{project.architecture}</p>
          </div>
        );
      case 'engineering':
        return (
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black text-neutral-900 tracking-wide uppercase">ENGINEERING WORK DESCRIPTION</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">{project.engineering}</p>
          </div>
        );
      case 'challenges':
        return (
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black text-neutral-900 tracking-wide uppercase">TECHNICAL CHALLENGES SOLVED</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">{project.challenges}</p>
          </div>
        );
      case 'outcome':
        return (
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black text-neutral-900 tracking-wide uppercase">VERIFIABLE OUTCOMES &amp; PERFORMANCE</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">{project.outcome}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/10 backdrop-blur-md flex items-center justify-center p-4">
      {/* Container */}
      <div className="bg-[#F4F4F2] rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl relative border border-neutral-100 overflow-hidden">
        
        {/* Top sticky controls */}
        <div className="bg-white/80 backdrop-blur-md px-6 py-4 border-b border-neutral-200/50 flex items-center justify-between z-10">
          <button
            onClick={onClose}
            className="text-xs font-bold flex items-center gap-2 text-neutral-500 hover:text-red-600 transition-colors py-2 px-3 hover:bg-neutral-50 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO PORTFOLIO
          </button>
          <span className="text-[10px] font-mono font-black text-neutral-400 tracking-widest uppercase">
            CASE STUDY ANALYSIS NODE // {project.id.toUpperCase()}
          </span>
        </div>

        {/* Content body */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 flex flex-col gap-8">
          
          {/* Metadata banner */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold text-red-600 tracking-widest uppercase">
                SYSTEM MODULE
              </span>
              <h2 className="text-3xl font-black text-neutral-950 mt-1 tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-neutral-500 font-semibold mt-1">
                {project.category}
              </p>
            </div>
            
            {/* Tech tag highlights */}
            <div className="flex flex-wrap gap-1.5 md:max-w-md">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[9px] font-mono font-bold bg-white text-neutral-600 border border-neutral-200 px-2.5 py-1 rounded-md"
                >
                  {tech.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Interactive Tab list */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <NeumorphicButton
                    key={tab.id}
                    variant={isActive ? 'active' : 'standard'}
                    onClick={() => setActiveTab(tab.id)}
                    className="!justify-start text-left w-full"
                  >
                    <span className={isActive ? 'text-red-600' : 'text-neutral-500'}>
                      {tab.icon}
                    </span>
                    <span className={`text-xs font-bold tracking-widest ${isActive ? 'text-neutral-950' : 'text-neutral-500'}`}>
                      {tab.label}
                    </span>
                  </NeumorphicButton>
                );
              })}
            </div>

            {/* Right side: Active Tab content panel */}
            <div className="lg:col-span-8 h-full">
              <NeumorphicCard className="bg-white min-h-[300px] h-full flex flex-col justify-between">
                {getTabContent()}
                
                {/* Secondary Technical Indicator */}
                <div className="border-t border-neutral-100 pt-6 mt-8 flex justify-between items-center text-[10px] font-mono text-neutral-400">
                  <span>METADATA: COMPILED_TRUE</span>
                  <span>VERIFICATION: SECURE_SYNC</span>
                </div>
              </NeumorphicCard>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
export default ProjectFocus;
