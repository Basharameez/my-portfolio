import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { workExperience } from '../../data/portfolioData';
import type { WorkExperience } from '../../types';

export const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="py-24 px-6 sm:px-12 lg:px-20 bg-[#070709] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10 text-left">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2">
            <span>06 // PROFESSIONAL ENGAGEMENT HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Software Engineering &amp; Client Engagements
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-2 font-sans">
            Paid software engineering tasks, real-world industrial SaaS development, automated testing, and technical evaluation.
          </p>
        </div>

        {/* Timeline Route Map */}
        <div className="relative w-full">
          
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-white/10" />
          
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-[#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {workExperience.map((exp: WorkExperience, index: number) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                
                {/* Year / Period Column */}
                <div className="md:w-32 md:text-right shrink-0">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold block pt-1">
                    {exp.period}
                  </span>
                  {exp.isClientEngagement && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-[9px] font-mono font-bold bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded">
                      CLIENT WORK
                    </span>
                  )}
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-[13px] md:left-[134px] top-2.5 w-3.5 h-3.5 rounded-full bg-[#070709] border-2 border-[#D4AF37] z-10" />

                {/* Engagement Details Card */}
                <div className="flex-1 bg-[#0E0E12] border border-white/10 p-6 rounded-xl relative group hover:border-white/30 transition-all">
                  <h3 className="text-lg font-bold text-white font-display">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-mono text-neutral-400 mb-4">
                    {exp.company}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 text-xs text-neutral-300 font-sans leading-relaxed">
                    {exp.bullets.map((bullet: string, bIdx: number) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <span className="text-[#D4AF37] font-bold font-mono text-[10px] mt-0.5">&gt;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;
