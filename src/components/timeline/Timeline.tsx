import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Info } from 'lucide-react';
import { experiences } from '../../data/portfolioData';

export const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Wave Simulator state for RotorDyn
  const [freq, setFreq] = useState(2.5);
  const [amp, setAmp] = useState(12);

  const generateWavePath = () => {
    let path = 'M 0 20';
    for (let x = 0; x <= 800; x += 5) {
      const y = 20 + Math.sin((x / 800) * Math.PI * 2 * freq * 5) * amp;
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden border-b border-[#8C6D4F]/15"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            06 / EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-left"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full text-left">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />
          
          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isRotorDyn = exp.company.toLowerCase() === 'rotordyn';

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: idx * 0.08 }}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Desktop Year (Left side of track) */}
                  <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                      {exp.period}
                    </span>
                  </div>

                  {/* Route Node */}
                  <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                    <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                  </div>

                  {/* Content (Right side of track) */}
                  <div className="ml-14 md:ml-12 pl-2 flex-1">
                    {/* Mobile Year */}
                    <div className="md:hidden mb-1.5">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                        {exp.period}
                      </span>
                    </div>

                    <h3
                      className="text-2xl sm:text-3xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-1 leading-none uppercase font-semibold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {exp.role}
                    </h3>
                    
                    <span 
                      className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-3"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {exp.company}
                    </span>

                    <div className="bg-[#0E0C0A] border border-[#8C6D4F]/25 rounded-sm p-6 flex flex-col gap-4 relative">
                      {/* Corner pins inside description block */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8C6D4F]/25" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8C6D4F]/25" />

                      <span className="text-[9px] font-mono text-[#8C6D4F] uppercase tracking-widest block border-b border-[#8C6D4F]/15 pb-2.5">
                        // TECHNICAL IMPACT SPECIFICATION
                      </span>
                      
                      <ul className="list-disc list-outside ml-4 text-xs text-[#A8988B] flex flex-col gap-2.5 leading-relaxed font-sans font-light">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Embedded RotorDyn Diagnostics simulator */}
                      {isRotorDyn && (
                        <div className="mt-4 border-t border-[#8C6D4F]/15 pt-4 flex flex-col gap-4">
                          
                          <div className="flex justify-between items-center text-[9px] font-mono text-[#A8988B]">
                            <span className="font-bold text-[#D4AF37] uppercase flex items-center gap-1.5 animate-pulse">
                              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Live Diagnostics Telemetry
                            </span>
                            <span className="flex items-center gap-1"><Info className="w-3 h-3 text-[#8C6D4F]" /> Adjust dials</span>
                          </div>

                          {/* Wave screen */}
                          <div className="h-16 w-full bg-black rounded-sm overflow-hidden relative border border-[#8C6D4F]/25 flex items-center justify-center">
                            <div className="absolute top-1.5 left-2.5 text-[8px] font-mono text-[#D4AF37] tracking-widest uppercase opacity-80">
                              TELEMETRY_WAVE_DASHBOARD
                            </div>
                            <svg className="w-full h-10 stroke-[#D4AF37] fill-none" viewBox="0 0 800 40">
                              <path 
                                strokeWidth="1.5"
                                d={generateWavePath()}
                                style={{
                                  strokeDasharray: '1000',
                                  strokeDashoffset: '0',
                                  animation: 'wave-flow 4s infinite linear'
                                }}
                              />
                            </svg>
                          </div>

                          {/* Controls row */}
                          <div className="grid grid-cols-2 gap-4 p-3 bg-black border border-[#8C6D4F]/20 rounded-sm">
                            <div className="flex flex-col gap-1">
                              <div className="flex justify-between text-[8px] font-mono text-[#A8988B]">
                                <span>FREQUENCY</span>
                                <span className="text-[#D4AF37]">{freq.toFixed(1)} HZ</span>
                              </div>
                              <input 
                                type="range" 
                                min="0.5" 
                                max="4" 
                                step="0.1" 
                                value={freq} 
                                onChange={(e) => setFreq(parseFloat(e.target.value))}
                                className="w-full accent-[#D4AF37] cursor-crosshair h-[1.5px] bg-[#8C6D4F]/20 appearance-none"
                              />
                            </div>

                            <div className="flex flex-col gap-1">
                              <div className="flex justify-between text-[8px] font-mono text-[#A8988B]">
                                <span>AMPLITUDE</span>
                                <span className="text-[#D4AF37]">{(amp / 5).toFixed(1)} G</span>
                              </div>
                              <input 
                                type="range" 
                                min="4" 
                                max="20" 
                                step="0.5" 
                                value={amp} 
                                onChange={(e) => setAmp(parseFloat(e.target.value))}
                                className="w-full accent-[#D4AF37] cursor-crosshair h-[1.5px] bg-[#8C6D4F]/20 appearance-none"
                              />
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes wave-flow {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
