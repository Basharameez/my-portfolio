import React, { useState } from 'react';
import { Award, Layers, Sparkles } from 'lucide-react';
import { projects } from '../../data/portfolioData';

// Restructured skills list
const skillCategories = [
  {
    name: 'AI / ML',
    skills: ['Python', 'PyTorch', 'Machine Learning', 'Computer Vision', 'NLP', 'Transformers', 'Explainable AI', 'ONNX', 'Grad-CAM']
  },
  {
    name: 'GENAI',
    skills: ['Generative AI', 'LLM Applications', 'Prompt Engineering', 'RAG', 'Embeddings', 'AI Evaluation', 'AI Assistants']
  },
  {
    name: 'FULL-STACK',
    skills: ['FastAPI', 'React', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets']
  },
  {
    name: 'DATA',
    skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Pandas']
  },
  {
    name: 'ENGINEERING',
    skills: ['Docker', 'Testing', 'Authentication', 'JWT', 'Production Hardening', 'Performance Optimization']
  }
];

export const ExpertiseMap: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Check if a project uses the hovered skill
  const isProjectRelated = (projectTechs: string[], skill: string | null) => {
    if (!skill) return false;
    
    // Normalize comparison values to map tags securely
    const normalizedSkill = skill.toLowerCase();
    
    // Explicit mapping overrides for prompt requirements
    if (normalizedSkill === 'nlp' && projectTechs.includes('Explainable AI')) {
      return true; // Link NLP skills to RTM/BioVision since they are explainable AI nodes
    }
    
    return projectTechs.some(tech => {
      const normalizedTech = tech.toLowerCase();
      // Handle approximate matches
      return normalizedTech === normalizedSkill || 
             normalizedTech.includes(normalizedSkill) || 
             normalizedSkill.includes(normalizedTech);
    });
  };

  return (
    <section id="expertise" className="relative w-full bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden border-b border-[#8C6D4F]/15">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.08] pointer-events-none" />

      {/* Eyebrow Header */}
      <div className="max-w-7xl mx-auto w-full relative z-10 text-left mb-16">
        <div className="flex items-center space-x-4 mb-5">
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / TECH MATRIX
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </div>
        
        <h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            ARCHITECTURAL MASTERY.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
            PRECISION APPLIED.
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Skills Catalog Categories */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {skillCategories.map((category) => (
            <div 
              key={category.name} 
              className="bg-[#0E0C0A] border border-[#8C6D4F]/25 rounded-sm p-6 flex flex-col gap-4 relative group"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#8C6D4F]/30" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#8C6D4F]/30" />

              <h3 
                className="text-xs font-semibold tracking-widest text-[#EAD8C7] uppercase border-b border-[#8C6D4F]/20 pb-2.5 flex items-center gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <Layers className="w-3.5 h-3.5 text-[#D4AF37]" /> {category.name}
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
                      className={`text-[10px] font-mono px-3 py-1.5 rounded-sm border transition-all duration-200 cursor-crosshair ${
                        isHovered
                          ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.15)] font-bold'
                          : 'bg-black/40 border-[#8C6D4F]/35 text-[#A8988B] hover:border-[#8C6D4F] hover:text-white'
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Dynamic Project Linkage Dashboard */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 text-left">
          <div className="bg-[#0E0C0A] border border-[#8C6D4F]/25 rounded-sm p-6 flex flex-col gap-6 relative">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#D4AF37]/50" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#D4AF37]/50" />

            <div>
              <h3 
                className="text-xs font-semibold tracking-widest text-[#EAD8C7] uppercase pb-2.5 border-b border-[#8C6D4F]/20 flex items-center gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" /> RELATIONSHIP LINKAGE
              </h3>
              <p className="text-[11px] text-[#A8988B] leading-relaxed mt-3 font-light font-sans">
                Hover over a technology badge on the left. The project slots below will dynamically highlight to reveal where that specific asset was deployed.
              </p>
            </div>

            {/* List of projects to highlight */}
            <div className="flex flex-col gap-3">
              {projects.map((project) => {
                const isRelated = isProjectRelated(project.technologies, hoveredSkill);
                
                return (
                  <div
                    key={project.id}
                    className={`p-3 rounded-sm border transition-all duration-300 ${
                      hoveredSkill
                        ? isRelated
                          ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-white'
                          : 'border-[#8C6D4F]/10 bg-transparent opacity-20'
                        : 'border-[#8C6D4F]/25 bg-[#050403]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider">{project.title}</span>
                      {isRelated && (
                        <span className="text-[8px] font-mono font-bold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-1.5 py-0.5 rounded uppercase animate-pulse">
                          LINKED
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trace status indicators */}
            <div className="text-[9.5px] font-mono text-[#8C6D4F] flex items-center gap-2 border-t border-[#8C6D4F]/15 pt-4">
              <Sparkles className={`w-3.5 h-3.5 text-[#D4AF37] ${hoveredSkill ? 'animate-spin' : ''}`} />
              <span>
                {hoveredSkill 
                  ? `TRACING: "${hoveredSkill.toUpperCase()}"...` 
                  : 'STATUS: WAITING FOR HOVER'}
              </span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default ExpertiseMap;
