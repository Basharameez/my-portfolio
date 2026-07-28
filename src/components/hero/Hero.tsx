import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText, Sparkles } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { NeumorphicButton } from '../ui/NeumorphicButton';

interface HeroProps {
  onQuickViewOpen: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickViewOpen }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 35;
      const y = (clientY - window.innerHeight / 2) / 35;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-[92vh] max-w-7xl mx-auto px-6 py-12 flex flex-col justify-center relative overflow-hidden"
    >
      
      {/* Decorative Editorial Watermark Text (Layered in Background) */}
      <div 
        className="absolute bottom-10 right-10 text-[12rem] font-black text-neutral-200/35 select-none pointer-events-none display-title tracking-tighter hidden lg:block"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
        }}
      >
        SYSTEMS
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Headline & Mission */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="mono-tag">SRB SYSTEM PROTOCOL v2.0</span>
            <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-900 leading-[0.9] select-text">
            I BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-900 to-red-600">
              DIGITAL SYSTEMS.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-500 max-w-xl leading-relaxed">
            Full-Stack Developer building intelligent applications, MLOps control planes, compliance static code compilers, and production-ready enterprise software.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <NeumorphicButton 
              variant="red" 
              onClick={() => {
                const workSec = document.getElementById('work');
                workSec?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="!px-6 !py-3.5"
            >
              EXPLORE MY WORK ↗
            </NeumorphicButton>

            <NeumorphicButton 
              variant="standard" 
              onClick={onQuickViewOpen}
              className="!px-6 !py-3.5 text-neutral-700"
            >
              <FileText className="w-4 h-4 text-red-600" /> VIEW RESUME
            </NeumorphicButton>
          </div>

          {/* Core Focus Metadata blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            <NeumorphicCard inset className="!p-4 text-center sm:text-left">
              <span className="block text-[10px] font-bold text-neutral-400 tracking-wider uppercase">INGESTION</span>
              <span className="text-sm font-extrabold text-neutral-800 mt-1 block">FULL-STACK CORE</span>
            </NeumorphicCard>
            
            <NeumorphicCard inset className="!p-4 text-center sm:text-left">
              <span className="block text-[10px] font-bold text-neutral-400 tracking-wider uppercase">INFERENCE</span>
              <span className="text-sm font-extrabold text-neutral-800 mt-1 block">AI / DATA MODELING</span>
            </NeumorphicCard>

            <NeumorphicCard inset className="!p-4 text-center sm:text-left col-span-2 sm:col-span-1">
              <span className="block text-[10px] font-bold text-neutral-400 tracking-wider uppercase">COMPILER</span>
              <span className="text-sm font-extrabold text-neutral-800 mt-1 block">AST CODE INTELLIGENCE</span>
            </NeumorphicCard>
          </div>
        </div>

        {/* Right Side: Portrait composition with subtle mouse parallax */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div 
            className="relative w-72 h-96 sm:w-80 sm:h-[26rem] transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            {/* Neumorphic Backdrop Shadow */}
            <div className="absolute inset-2 rounded-2xl bg-neutral-100 shadow-[8px_8px_16px_#d0d0ce,-8px_-8px_16px_#ffffff]" />
            
            {/* Offset Red Accent Frame */}
            <div 
              className="absolute inset-0 rounded-2xl border-2 border-red-600 transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`
              }}
            />

            {/* Portrait Image Container */}
            <div className="absolute inset-2 rounded-2xl overflow-hidden border border-neutral-200/50 bg-white">
              <img 
                src="mypic.png" 
                alt="Shaik Rameez Basha Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-102 hover:scale-105"
              />
              
              {/* Telemetry graphic overlays */}
              <div className="absolute top-4 left-4 bg-neutral-900/90 text-white font-mono text-[9px] px-2 py-0.5 rounded tracking-widest uppercase">
                NODE_PORTRAIT // LIVE
              </div>
              <div className="absolute bottom-4 right-4 bg-red-600 text-white font-mono text-[9px] px-2 py-0.5 rounded tracking-widest uppercase flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 animate-spin" /> SYSTEM SYNCED
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Down arrow marker */}
      <div className="absolute bottom-2 left-6 hidden md:flex items-center gap-2">
        <span className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">SCROLL FOR SYSTEMS</span>
        <ArrowDown className="w-3.5 h-3.5 text-red-600 animate-bounce" />
      </div>

    </section>
  );
};
export default Hero;
