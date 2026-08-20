import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { projects } from '../../data/portfolioData';

interface ProjectExplorerProps {
  onProjectSelect: (projectId: string) => void;
}

export const ProjectExplorer: React.FC<ProjectExplorerProps> = ({ onProjectSelect }) => {

  const getGithubLink = (id: string) => {
    switch (id) {
      case 'rtm': return 'https://github.com/Basharameez/snazzy';
      case 'biovision': return 'https://github.com/Basharameez/BioVision-Path';
      case 'codeorigin': return 'https://github.com/Basharameez/codeorigin';
      case 'campusbuddy': return 'https://github.com/Basharameez/student-info-portal';
      case 'sih': return 'https://github.com/Basharameez/NEC_AI';
      default: return '#';
    }
  };

  const getDemoLink = (id: string) => {
    if (id === 'biovision') return 'https://huggingface.co/spaces/BASHARAMEEZ/BioVision-Path';
    return null;
  };

  // Helper to map unique categories and metrics for each project
  const getProjectDetails = (id: string) => {
    switch (id) {
      case 'rtm':
        return {
          category: 'APPLIED AI / HEALTHCARE WORKFLOW INTELLIGENCE',
          number: '01',
          metrics: [
            { label: 'SYSTEM', value: 'Triage Workflow' },
            { label: 'EXPLAINABILITY', value: 'Grad-CAM Hooks' },
            { label: 'STATUS', value: 'Prototype System' }
          ],
          visualizer: (
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#8C6D4F]/30">
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
              {/* Highlight focus area */}
              <circle cx="45" cy="40" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.75" />
              <line x1="45" y1="20" x2="45" y2="60" stroke="#D4AF37" strokeWidth="0.25" strokeDasharray="2 2" />
              <line x1="25" y1="40" x2="65" y2="40" stroke="#D4AF37" strokeWidth="0.25" strokeDasharray="2 2" />
              <text x="15" y="85" className="font-mono text-[6px] fill-[#A8988B]/60">// CLINICIAN_SUPPORT_LAYER</text>
            </svg>
          )
        };
      case 'biovision':
        return {
          category: 'COMPUTER VISION / EXPLAINABLE AI',
          number: '02',
          metrics: [
            { label: 'ENGINE', value: 'PyTorch + ONNX' },
            { label: 'ACCURACY', value: 'High Precision' },
            { label: 'INTERFACE', value: 'Hugging Face Space' }
          ],
          visualizer: (
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#8C6D4F]/30">
              {/* Concentric segmentation visualizer */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="4 2" />
              <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.25" strokeDasharray="3 3" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.25" strokeDasharray="3 3" />
              <text x="15" y="85" className="font-mono text-[6px] fill-[#A8988B]/60">// CELL_SEGMENTATION_PIPELINE</text>
            </svg>
          )
        };
      case 'codeorigin':
        return {
          category: 'DEVELOPER TOOLS / SOFTWARE INTELLIGENCE',
          number: '03',
          metrics: [
            { label: 'PARSER', value: 'Python AST scanner' },
            { label: 'DILIGENCE', value: 'MinHash Similarity' },
            { label: 'ANALYSIS', value: 'Cyclic loops score' }
          ],
          visualizer: (
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#8C6D4F]/30">
              {/* Dependency network node visualization */}
              <circle cx="30" cy="30" r="4" fill="#D4AF37" />
              <circle cx="70" cy="30" r="4" fill="currentColor" />
              <circle cx="50" cy="70" r="4" fill="#D4AF37" />
              <circle cx="30" cy="70" r="4" fill="currentColor" />
              
              <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="0.5" />
              <line x1="70" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="50" y1="70" x2="30" y2="70" stroke="#D4AF37" strokeWidth="0.5" />
              <line x1="30" y1="70" x2="30" y2="30" stroke="currentColor" strokeWidth="0.5" />
              <line x1="30" y1="30" x2="50" y2="70" stroke="#D4AF37" strokeWidth="0.5" />
              <text x="15" y="88" className="font-mono text-[6px] fill-[#A8988B]/60">// AST_CYCLE_PARSER</text>
            </svg>
          )
        };
      case 'campusbuddy':
        return {
          category: 'COMPUTER VISION / MOBILE / FULL-STACK',
          number: '04',
          metrics: [
            { label: 'RECOGNITION', value: 'YuNet + SFace' },
            { label: 'MOBILE VIEW', value: 'CapacitorJS Wrapper' },
            { label: 'PERSISTENCE', value: 'MongoDB Atlas' }
          ],
          visualizer: (
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#8C6D4F]/30">
              {/* Concentric square biometric scanner box */}
              <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <rect x="30" y="30" width="40" height="40" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="3 3" />
              {/* Focus markers */}
              <line x1="20" y1="25" x2="80" y2="25" stroke="currentColor" strokeWidth="0.25" />
              <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.25" strokeDasharray="4 4" />
              <circle cx="50" cy="45" r="8" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <text x="15" y="88" className="font-mono text-[6px] fill-[#A8988B]/60">// BIOMETRIC_VERIFICATION</text>
            </svg>
          )
        };
      case 'sih':
      default:
        return {
          category: 'FULL-STACK / WORKFLOW INTELLIGENCE',
          number: '05',
          metrics: [
            { label: 'ENGINE', value: 'FastAPI + SQLAlchemy' },
            { label: 'SECURITY', value: 'Role-Based Access' },
            { label: 'STATE MACHINE', value: 'Transactional locks' }
          ],
          visualizer: (
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#8C6D4F]/30">
              {/* Workflow state step blocks */}
              <rect x="15" y="40" width="20" height="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <rect x="45" y="40" width="20" height="15" fill="none" stroke="#D4AF37" strokeWidth="0.75" />
              <rect x="75" y="40" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
              
              <line x1="35" y1="47.5" x2="45" y2="47.5" stroke="#D4AF37" strokeWidth="0.5" />
              <line x1="65" y1="47.5" x2="75" y2="47.5" stroke="currentColor" strokeWidth="0.5" />
              
              <text x="15" y="88" className="font-mono text-[6px] fill-[#A8988B]/60">// REGISTRATION_STATE_LOCKS</text>
            </svg>
          )
        };
    }
  };

  return (
    <section 
      id="work" 
      className="relative w-full bg-black text-[#E8DFD8] pt-20 pb-32 px-6 sm:px-12 lg:px-20 border-b border-[#8C6D4F]/15"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/[0.02] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/[0.02] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / SELECTED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* Stacking Card Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => {
            const githubLink = getGithubLink(project.id);
            const demoLink = getDemoLink(project.id);
            const details = getProjectDetails(project.id);

            return (
              <ScrollStackItem key={project.title}>
                <div className="relative w-full rounded-2xl border border-[#8C6D4F]/40 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                  
                  {/* Top Gold Border Light Flare */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                  {/* Corner Minimal L-Brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                  {/* Big Background Watermark Number */}
                  <span
                    className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {details.number}
                  </span>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    
                    {/* Left Column (7 Cols): Content Info */}
                    <div className="lg:col-span-7 flex flex-col justify-between text-left">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-xs font-mono font-bold text-[#D4AF37]">
                            {details.number} //
                          </span>
                          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                            {details.category}
                          </span>
                        </div>

                        {project.id === 'rtm' && (
                          <span className="text-[9px] font-mono bg-[#1c1917]/80 text-[#f59e0b] border border-[#f59e0b]/20 px-2.5 py-0.5 rounded-sm mb-3.5 inline-block uppercase">
                            PROTOTYPE / EXPERIMENTAL SYSTEM
                          </span>
                        )}

                        <h3
                          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[1.0]"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {project.title}
                        </h3>

                        <p
                          className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/20">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column (5 Cols): Metrics & Graphic Visualizer */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25 text-left">
                      
                      {/* Technical visual area */}
                      <div className="w-full aspect-video rounded-sm border border-[#8C6D4F]/20 bg-[#050403] p-4 flex items-center justify-center relative overflow-hidden group-hover:border-[#D4AF37]/45 transition-colors">
                        {details.visualizer}
                      </div>

                      {/* Architecture Metrics */}
                      <div className="space-y-3">
                        <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                          // ARCHITECTURE METRICS
                        </span>
                        {details.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3 rounded-sm border border-[#8C6D4F]/20 bg-[#050403] flex items-center justify-between"
                          >
                            <span className="text-[10px] font-mono text-[#A8988B]">
                              {m.label}
                            </span>
                            <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-4 pt-2">
                        <button
                          onClick={() => onProjectSelect(project.id)}
                          className="flex-1 py-3 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 text-center cursor-pointer font-semibold"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          CASE STUDY
                        </button>

                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 border border-[#8C6D4F]/40 bg-[#0A0806] hover:border-[#D4AF37] text-[#BFA895] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-1.5"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          REPO ↗
                        </a>

                        {demoLink && (
                          <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 border border-[#8C6D4F]/40 bg-[#0A0806] hover:border-[#D4AF37] text-[#BFA895] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-1.5"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            LIVE ↗
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectExplorer;
