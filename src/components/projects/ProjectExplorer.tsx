import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { NeumorphicButton } from '../ui/NeumorphicButton';
import { Visualizations } from './Visualizations';
import { projects } from '../../data/portfolioData';

interface ProjectExplorerProps {
  onProjectSelect: (projectId: string) => void;
}

export const ProjectExplorer: React.FC<ProjectExplorerProps> = ({ onProjectSelect }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProject = projects[activeIdx];

  return (
    <section id="work" className="py-24 px-6 relative bg-[#F4F4F2]">
      
      {/* Visual Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-7xl sm:text-8xl font-black text-neutral-300/60 block leading-none select-none">
            02
          </span>
          <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-widest mt-2 border-l-4 border-red-600 pl-4">
            SELECTED WORK
          </h2>
          <p className="text-xs font-mono font-bold text-neutral-400 mt-2 tracking-widest uppercase">
            OPERATIONAL SYSTEMS &bull; REPOS
          </p>
        </div>
        <div className="text-right max-w-sm hidden md:block">
          <p className="text-xs text-neutral-500 font-medium">
            Click on the folders below to inspect system architectures, data flows, and technical parameters for each build.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Asymmetric Vertical Selector Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {projects.map((project, idx) => {
            const isActive = activeIdx === idx;
            return (
              <NeumorphicCard
                key={project.id}
                inset={isActive}
                onClick={() => setActiveIdx(idx)}
                className={`!p-5 text-left transition-all duration-300 ${
                  isActive 
                    ? 'border-red-600 bg-neutral-50/50' 
                    : 'bg-white hover:bg-neutral-50/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-[9px] font-mono font-bold tracking-widest uppercase ${isActive ? 'text-red-600' : 'text-neutral-400'}`}>
                      {project.category}
                    </span>
                    <h3 className="text-base font-extrabold text-neutral-950 mt-1">
                      {project.title}
                    </h3>
                  </div>
                  {!isActive && (
                    <ArrowRight className="w-4 h-4 text-neutral-400 hover:text-neutral-600" />
                  )}
                </div>
              </NeumorphicCard>
            );
          })}
        </div>

        {/* Right Side: Active Project details and visualizer monitor */}
        <div className="lg:col-span-8">
          <NeumorphicCard className="bg-white flex flex-col gap-6 h-full min-h-[500px]">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-neutral-100">
              <div>
                <span className="text-[10px] font-mono font-bold text-red-600 tracking-widest uppercase">
                  M-0{activeIdx + 1} // ACTIVE SYSTEM DOSSIER
                </span>
                <h3 className="text-2xl font-black text-neutral-950 mt-1.5 tracking-tight">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-neutral-500 font-semibold mt-1">
                  Category Scope: {activeProject.category}
                </p>
              </div>

              <NeumorphicButton
                variant="red"
                onClick={() => onProjectSelect(activeProject.id)}
                className="!px-5 !py-2.5 text-xs self-start"
              >
                VIEW CASE STUDY <ArrowRight className="w-3.5 h-3.5" />
              </NeumorphicButton>
            </div>

            {/* Description & Tech tags */}
            <div className="flex flex-col gap-4">
              <p className="text-sm text-neutral-600 leading-relaxed">
                {activeProject.description}
              </p>
              
              {/* Tech Tags matrix */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono font-bold bg-neutral-50 text-neutral-600 border border-neutral-150 px-2 py-0.5 rounded-md"
                  >
                    #{tech.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Dataflow Diagram */}
            <Visualizations 
              projectId={activeProject.id} 
              steps={activeProject.pipelineSteps} 
            />

          </NeumorphicCard>
        </div>

      </div>

    </section>
  );
};
export default ProjectExplorer;
