import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { NeumorphicButton } from '../ui/NeumorphicButton';
import { milestones, sdlcSteps } from '../../data/portfolioData';

export const Timeline: React.FC = () => {
  const [activeSdlcIdx, setActiveSdlcIdx] = useState(0);
  const activeSdlc = sdlcSteps[activeSdlcIdx];
  const [activeMilestoneId, setActiveMilestoneId] = useState<string | null>(milestones[0].id);

  return (
    <section className="py-24 px-6 relative bg-white/40 border-y border-neutral-200/40">
      
      {/* Background patterns */}
      <div className="absolute inset-0 editorial-dot-pattern opacity-60 pointer-events-none" />

      {/* Title */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <span className="text-7xl sm:text-8xl font-black text-neutral-200/80 block leading-none select-none">
          05
        </span>
        <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-widest mt-2 border-l-4 border-red-600 pl-4">
          BUILD PROCESS &amp; TIMELINE
        </h2>
        <p className="text-xs font-mono font-bold text-neutral-400 mt-2 tracking-widest uppercase">
          SDLC CONVENTIONS &bull; MILESTONES CHRONOLOGY
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Column: SDLC Process Blocks */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <h3 className="text-sm font-black text-neutral-950 tracking-wider uppercase mb-2">
              SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)
            </h3>
            <p className="text-[11px] text-neutral-500 font-semibold leading-relaxed">
              Click through the engineering stages below to review how I translate design specifications into final production deployments.
            </p>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-3 gap-2">
            {sdlcSteps.map((step, idx) => {
              const isActive = activeSdlcIdx === idx;
              return (
                <NeumorphicButton
                  key={step.id}
                  variant={isActive ? 'active' : 'standard'}
                  onClick={() => setActiveSdlcIdx(idx)}
                  className="!px-2 !py-2.5 text-center flex flex-col items-center justify-center gap-1.5"
                >
                  <span className={`text-[10px] font-bold ${isActive ? 'text-red-600' : 'text-neutral-400'}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-[9px] font-black tracking-widest uppercase">{step.title}</span>
                </NeumorphicButton>
              );
            })}
          </div>

          {/* Active SDLC details card */}
          <NeumorphicCard className="bg-white min-h-[140px] flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono font-black text-red-600 tracking-widest uppercase">
                SDLC LOGS // STAGE_0{activeSdlcIdx + 1}
              </span>
              <h4 className="text-sm font-black text-neutral-950 mt-1.5 uppercase">
                {activeSdlc.title}
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed mt-2">
                {activeSdlc.description}
              </p>
            </div>
            <div className="text-[9px] font-mono text-neutral-400 border-t border-neutral-100 pt-3 mt-4 text-right">
              PIPELINE STATE: FUNCTIONING
            </div>
          </NeumorphicCard>
        </div>

        {/* Right Column: Milestones Chronology Timeline */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h3 className="text-sm font-black text-neutral-950 tracking-wider uppercase mb-2">
              CHRONOLOGY LOGS (2025 - 2026)
            </h3>
            <p className="text-[11px] text-neutral-500 font-semibold leading-relaxed">
              Select milestones along your timeline to verify professional projects, research published nodes, and core technology calibration details.
            </p>
          </div>

          {/* Vertical Timeline Tree */}
          <div className="relative border-l-2 border-neutral-200/80 ml-4 pl-6 flex flex-col gap-6">
            {milestones.map((milestone) => {
              const isActive = activeMilestoneId === milestone.id;
              
              return (
                <div key={milestone.id} className="relative">
                  {/* Timeline indicator node */}
                  <button
                    onClick={() => setActiveMilestoneId(isActive ? null : milestone.id)}
                    className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      isActive 
                        ? 'bg-red-600 border-red-600 scale-125' 
                        : 'bg-white border-neutral-350 hover:border-red-600'
                    }`}
                    aria-label={`Expand Milestone ${milestone.year}`}
                  >
                    {isActive && <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />}
                  </button>

                  {/* Milestone Card */}
                  <NeumorphicCard
                    onClick={() => setActiveMilestoneId(isActive ? null : milestone.id)}
                    className={`!p-4 bg-white transition-all duration-300 cursor-pointer ${
                      isActive ? 'border-red-600' : 'hover:bg-neutral-50/40'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xs font-black text-red-600 font-mono tracking-widest uppercase">
                          {milestone.year}
                        </span>
                        <h4 className="text-sm font-black text-neutral-950 mt-0.5">{milestone.title}</h4>
                      </div>
                      <Calendar className="w-4 h-4 text-neutral-400" />
                    </div>

                    {/* Expandable Details */}
                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-3">
                        <p className="text-xs text-neutral-500 leading-relaxed">
                          {milestone.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.technologies.map(tech => (
                            <span 
                              key={tech}
                              className="text-[9px] font-mono font-bold bg-neutral-50 text-neutral-600 px-2 py-0.5 rounded border border-neutral-200"
                            >
                              {tech.toUpperCase()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </NeumorphicCard>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
};
export default Timeline;
