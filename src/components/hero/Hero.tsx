import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface HeroProps {
  onQuickViewOpen: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ onQuickViewOpen }) => {
  return (
    <section id="home" className="relative w-full min-h-screen bg-black text-[#E8DFD8] overflow-hidden flex items-center pt-24 pb-16 px-6 sm:px-12 lg:px-20 border-b border-[#8C6D4F]/15">
      
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.12] pointer-events-none" />

      {/* Content Layout Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Headline and CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left pointer-events-auto"
        >
          {/* Eyebrow Label */}
          <motion.div variants={fadeUpVariants} className="flex items-center space-x-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] glow-accent animate-pulse" />
            <span 
              className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] text-[#C4B29E] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              AI/ML &bull; GENAI &bull; FULL-STACK
            </span>
          </motion.div>

          {/* Huge Display Heading */}
          <motion.div variants={fadeUpVariants} className="relative mb-5 select-none">
            <h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] tracking-tight uppercase leading-[0.85] font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                I BUILD
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                INTELLIGENT
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                SYSTEMS.
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={fadeUpVariants}
            className="text-xs sm:text-sm md:text-[14px] font-light text-[#A8988B] leading-[1.85] tracking-wide max-w-xl mb-10"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p>
              AI/ML &amp; GenAI Engineer building production-oriented intelligent applications across LLM workflows, computer vision, explainable AI, backend engineering, and full-stack systems.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <a
              href="#work"
              className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
              <span>EXPLORE MY WORK</span>
              <span className="text-xs">↗</span>
            </a>

            <button
              onClick={onQuickViewOpen}
              className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 cursor-pointer"
            >
              <span>DOWNLOAD RESUME</span>
              <span className="text-xs">↓</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center space-x-6 mt-12 text-[10px] font-mono tracking-widest text-[#8C6D4F]"
          >
            <a
              href="https://github.com/Basharameez"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors flex items-center space-x-1.5"
            >
              <span>GITHUB</span>
            </a>
            <span className="opacity-30">/</span>
            <a
              href="https://www.linkedin.com/in/shaik-rameezbasha-151740286/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors flex items-center space-x-1.5"
            >
              <span>LINKEDIN</span>
            </a>
          </motion.div>

        </motion.div>

        {/* Right Column: Tasteful SVG Gradient Technical Graphic */}
        <div className="lg:col-span-5 w-full flex justify-center items-center relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[320px] sm:max-w-[400px] aspect-square relative flex items-center justify-center"
          >
            {/* Concentric Rotating Technical Graphic Rings */}
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#8C6D4F]/30 animate-[spin_100s_linear_infinite]">
              {/* Outer Ring */}
              <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
              {/* Middle Ring */}
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 4" />
              {/* Inner Ring */}
              <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              {/* Connection Axes */}
              <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.25" strokeDasharray="5 5" />
              <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.25" strokeDasharray="5 5" />
            </svg>

            {/* Inner Glowing Nodes (SVG Layer 2) */}
            <div className="absolute w-[220px] h-[220px] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]/80">
                {/* Data node */}
                <circle cx="50" cy="15" r="3" fill="#D4AF37" className="animate-pulse" />
                {/* Model node */}
                <circle cx="15" cy="50" r="3.5" fill="#8C6D4F" />
                {/* Intelligence node */}
                <circle cx="50" cy="85" r="3" fill="#D4AF37" className="animate-pulse" />
                {/* Human node */}
                <circle cx="85" cy="50" r="3.5" fill="#8C6D4F" />
                
                {/* Connector loop */}
                <path d="M 50 15 L 85 50 L 50 85 L 15 50 Z" fill="none" stroke="currentColor" strokeWidth="0.25" className="flow-connector" />
              </svg>
            </div>

            {/* Micro readouts in center */}
            <div className="absolute flex flex-col items-center justify-center font-mono text-[8px] text-[#A8988B]/60 tracking-wider">
              <span>// SYSTEM CONFIG</span>
              <span className="text-[#D4AF37] font-semibold mt-1">AI_CORE_ACTIVE</span>
            </div>

          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
