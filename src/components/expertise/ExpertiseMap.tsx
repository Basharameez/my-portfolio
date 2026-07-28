import React, { useState } from 'react';
import { Award, Layers, Sparkles } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { skills, projects } from '../../data/portfolioData';

export const ExpertiseMap: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Check if a project uses the hovered skill
  const isProjectRelated = (projectTechs: string[], skill: string | null) => {
    if (!skill) return false;
    return projectTechs.some(tech => tech.toLowerCase() === skill.toLowerCase());
  };

  return (
    <section id="expertise" className="py-24 px-6 relative bg-white/40 border-y border-neutral-200/40">
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-7xl sm:text-8xl font-black text-neutral-200/80 block leading-none select-none">
          03
        </span>
        <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-widest mt-2 border-l-4 border-red-600 pl-4">
          TECHNICAL EXPERTISE
        </h2>
        <p className="text-xs font-mono font-bold text-neutral-400 mt-2 tracking-widest uppercase">
          SKILLSETS MATRIX &bull; INTEGRATIONS MAP
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Skills Catalog Categories */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <NeumorphicCard key={category.name} className="bg-white flex flex-col gap-4">
              <h3 className="text-xs font-black tracking-widest text-neutral-950 uppercase border-b border-neutral-100 pb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-red-600" /> {category.name}
              </h3>
              
              {/* Badges Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill;
                  return (
                    <button
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                        isHovered
                          ? 'bg-red-600 border-red-600 text-white shadow-sm transform -translate-y-0.5'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-white hover:border-neutral-350'
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </NeumorphicCard>
          ))}
        </div>

        {/* Right Side: Dynamic Project Linkage Dashboard */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <NeumorphicCard className="bg-white flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-black tracking-widest text-neutral-950 uppercase pb-2 border-b border-neutral-100 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-red-600" /> RELATIONSHIP LINKAGE MAP
              </h3>
              <p className="text-[11px] text-neutral-500 font-medium leading-relaxed mt-3">
                Hover over a technology skill badge on the left. The project cards below will dynamically highlight to reveal where that specific asset was deployed.
              </p>
            </div>

            {/* List of projects to highlight */}
            <div className="flex flex-col gap-3">
              {projects.map((project) => {
                const isRelated = isProjectRelated(project.technologies, hoveredSkill);
                
                return (
                  <div
                    key={project.id}
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      hoveredSkill
                        ? isRelated
                          ? 'border-red-600 bg-red-50/20 shadow-sm'
                          : 'border-neutral-200/50 bg-neutral-50/20 opacity-30'
                        : 'border-neutral-200 bg-neutral-50/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black text-neutral-950">{project.title}</span>
                      {isRelated && (
                        <span className="text-[8px] font-mono font-bold text-red-600 bg-red-100/50 px-1.5 py-0.5 rounded uppercase animate-pulse">
                          CONNECTED
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-neutral-500 block mt-0.5">{project.category}</span>
                  </div>
                );
              })}
            </div>

            {/* Live trace status indicator */}
            <div className="text-[9px] font-mono text-neutral-400 flex items-center gap-2 border-t border-neutral-100 pt-4">
              <Sparkles className={`w-3 h-3 text-red-600 ${hoveredSkill ? 'animate-spin' : ''}`} />
              <span>
                {hoveredSkill 
                  ? `TRACING: "${hoveredSkill.toUpperCase()}" CONNECTIONS...` 
                  : 'STATUS: IDLE // WAITING FOR TRACE HOVER'}
              </span>
            </div>

          </NeumorphicCard>
        </div>

      </div>

    </section>
  );
};
export default ExpertiseMap;
