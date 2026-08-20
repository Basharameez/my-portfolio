import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // 1. Motion Values for 3D Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // 2. Springs for Tilting Physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), { damping: 18, stiffness: 220 });

  // 3. Spotlight Background gradient
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,255,255,0.35), rgba(212,175,55,0.18), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsCardHovered(true);

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

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
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.08] pointer-events-none" />

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
          
          {/* Left Column: Content (7 Cols) */}
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
              className="text-xs sm:text-sm md:text-[14px] font-light text-[#B3A497] leading-[1.85] tracking-wide mb-8 max-w-xl font-sans"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I'm <span className="text-[#F3DBB3] font-medium font-mono">Shaik Rameez Basha</span>, an AI/ML &amp; GenAI Engineer | Full-Stack Engineer. My work sits at the intersection of AI models and robust software engineering. I build end-to-end intelligent systems, focusing on explainable predictions, structured API services, and clean presentation layers.
            </motion.p>

            {/* Stats Matrix */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-6 border-t border-[#8C6D4F]/25"
            >
              <div className="flex flex-col">
                <span 
                  className="text-2xl sm:text-3xl font-light text-[#F4EBE2] tracking-tight font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  7.79
                </span>
                <span className="text-[8.5px] font-medium tracking-[0.2em] uppercase text-[#A8988B] mt-0.5 font-mono">
                  B.Tech CGPA
                </span>
              </div>

              <div className="flex flex-col">
                <span 
                  className="text-2xl sm:text-3xl font-light text-[#D4AF37] tracking-tight font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  CS-AI
                </span>
                <span className="text-[8.5px] font-medium tracking-[0.2em] uppercase text-[#A8988B] mt-0.5 font-mono">
                  Specialization
                </span>
              </div>

              <div className="flex flex-col">
                <span 
                  className="text-2xl sm:text-3xl font-light text-[#F4EBE2] tracking-tight font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  IEEE
                </span>
                <span className="text-[8.5px] font-medium tracking-[0.2em] uppercase text-[#A8988B] mt-0.5 font-mono">
                  Research Author
                </span>
              </div>

              <div className="flex flex-col">
                <span 
                  className="text-2xl sm:text-3xl font-light text-[#D4AF37] tracking-tight font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  LEETCODE
                </span>
                <span className="text-[8.5px] font-medium tracking-[0.2em] uppercase text-[#A8988B] mt-0.5 font-mono">
                  Algo Solver
                </span>
              </div>
            </motion.div>

            {/* Inline horizontal/compact flow for stack infographic */}
            <motion.div 
              variants={fadeUpVariants}
              className="flex flex-col gap-2 pt-6 border-t border-[#8C6D4F]/25 w-full"
            >
              <span className="text-[9.5px] font-mono tracking-[0.2em] text-[#8C6D4F] uppercase mb-1 block">// PIPELINE ARCHITECTURE FLOW</span>
              <div className="flex flex-wrap gap-2">
                {stackLayers.map((layer) => (
                  <span 
                    key={layer.name}
                    className="px-2.5 py-1 text-[9px] font-mono border border-[#8C6D4F]/20 bg-[#0E0C0A] text-[#A8988B] rounded-sm hover:border-[#D4AF37]/50 transition-colors uppercase tracking-widest"
                  >
                    {layer.step} {layer.name}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Portrait Frame (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: isCardHovered ? rotateX : 0,
                rotateY: isCardHovered ? rotateY : 0,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[320px] aspect-[3/4] rounded-sm border border-[#8C6D4F]/40 bg-[#0E0C0A] p-2.5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#D4AF37] group cursor-none"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-[#8C6D4F]/50 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-[#8C6D4F]/50 group-hover:border-[#D4AF37] transition-colors" />

              {/* 3D Inner Content Container */}
              <div 
                className="w-full h-full overflow-hidden relative rounded-sm bg-black"
                style={{ transform: 'translateZ(30px)' }}
              >
                <img 
                  src="/mypic.png" 
                  alt="Shaik Rameez Basha Portrait" 
                  className="w-full h-full object-cover grayscale contrast-110 brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                
                {/* Dynamic Spotlight mix-blend color-dodge overlay */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-0 transition-opacity duration-300"
                  style={{ 
                    background: spotlightBg,
                    opacity: isCardHovered ? 1 : 0 
                  }}
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
