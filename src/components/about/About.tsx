import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const About: React.FC = () => {
  const stackLayers = [
    { name: 'USER', role: 'Human interaction & decision loop', step: '05' },
    { name: 'UI', role: 'React & Vite presentation layer', step: '04' },
    { name: 'DATA', role: 'PostgreSQL schemas & preprocessing', step: '03' },
    { name: 'API', role: 'FastAPI service endpoints', step: '02' },
    { name: 'MODEL', role: 'PyTorch & ONNX neural runtimes', step: '01' }
  ];

  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center border-b border-[#8C6D4F]/15"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-[32rem] h-[32rem] bg-[#D4AF37]/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-[#8C6D4F]/[0.03] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span 
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / CORE PHILOSOPHY
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88] font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]">
                  I DON'T JUST WRITE CODE.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.3)]">
                  I BUILD WHAT'S NEXT.
                </span>
              </h2>
            </motion.div>

            {/* Paragraph Bio */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#B3A497] leading-[1.85] tracking-wide mb-10 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I'm <span className="text-[#F3DBB3] font-medium">Shaik Rameez Basha</span>, an AI/ML &amp; GenAI Engineer | Full-Stack Engineer. My work sits at the intersection of AI models and robust software engineering. I build end-to-end intelligent systems, focusing on explainable predictions, structured API services, and clean presentation layers.
            </motion.p>

            {/* Achievement Stats Grid */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-[#8C6D4F]/25"
            >
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#F4EBE2] tracking-tight font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  7.79
                </span>
                <span className="text-[9px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5 font-mono">
                  B.Tech CGPA
                </span>
              </div>

              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#D4AF37] tracking-tight font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  CS-AI
                </span>
                <span className="text-[9px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5 font-mono">
                  Specialization
                </span>
              </div>

              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#F4EBE2] tracking-tight font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  IEEE
                </span>
                <span className="text-[9px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5 font-mono">
                  Research Author
                </span>
              </div>

              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#D4AF37] tracking-tight font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  LEETCODE
                </span>
                <span className="text-[9px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5 font-mono">
                  Algorithm Solver
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Stack Infographic */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full max-w-[420px] flex flex-col gap-3.5 relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-[#8C6D4F]/20 z-0" />

              {stackLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-4 pl-12 rounded-sm border border-[#8C6D4F]/25 bg-[#0E0C0A] hover:border-[#D4AF37]/60 transition-all duration-300 group z-10 text-left cursor-crosshair"
                >
                  {/* Corner minimal pins */}
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#8C6D4F]/40 group-hover:border-[#D4AF37]" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#8C6D4F]/40 group-hover:border-[#D4AF37]" />

                  {/* Flow dot identifier */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-sm border border-[#8C6D4F]/30 bg-[#120F0C] flex items-center justify-center text-[7px] font-mono text-[#A8988B]">
                    {layer.step}
                  </div>

                  <div className="flex flex-col">
                    <span 
                      className="text-xs font-semibold text-white tracking-widest uppercase group-hover:text-[#F7E7C4] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {layer.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#A8988B] block mt-0.5">
                      {layer.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
