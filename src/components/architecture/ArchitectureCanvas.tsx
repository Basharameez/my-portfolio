import React, { useState } from 'react';
import { ArrowRight, Server, Terminal, Database, ShieldAlert, Cpu } from 'lucide-react';
import { architectureLayers } from '../../data/portfolioData';

export const ArchitectureCanvas: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState('frontend');
  const activeLayer = architectureLayers.find(layer => layer.id === activeLayerId) || architectureLayers[0];

  const getLayerIcon = (id: string) => {
    switch (id) {
      case 'frontend': return <Terminal className="w-4 h-4 text-[#D4AF37]" />;
      case 'backend': return <Server className="w-4 h-4 text-[#D4AF37]" />;
      case 'data': return <Database className="w-4 h-4 text-[#D4AF37]" />;
      case 'ai': return <Cpu className="w-4 h-4 text-[#D4AF37]" />;
      case 'deployment': return <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />;
      default: return <Server className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="architecture" className="relative w-full bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden border-b border-[#8C6D4F]/15">
      
      {/* Background patterns */}
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.08] pointer-events-none" />

      {/* Eyebrow Header */}
      <div className="max-w-7xl mx-auto w-full relative z-10 text-left mb-16">
        <div className="flex items-center space-x-4 mb-5">
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / SYSTEM ARCHITECTURES
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </div>
        
        <h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            SYSTEM ARCHITECTURES.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
            HOW I CONSTRUCT.
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Clickable Stack of Layers */}
        <div className="lg:col-span-6 flex flex-col gap-3 text-left">
          {architectureLayers.map((layer) => {
            const isActive = activeLayerId === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayerId(layer.id)}
                className={`p-4 text-left transition-all duration-300 rounded-sm border flex items-center justify-between cursor-pointer relative group ${
                  isActive 
                    ? 'border-[#D4AF37] bg-[#120F0C] shadow-[0_0_15px_rgba(212,175,55,0.12)]' 
                    : 'bg-[#0E0C0A] border-[#8C6D4F]/25 hover:border-[#8C6D4F]'
                }`}
              >
                {/* Micro pins */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8C6D4F]/30" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8C6D4F]/30" />

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-black border border-[#8C6D4F]/30">
                    {getLayerIcon(layer.id)}
                  </div>
                  <div>
                    <h3 
                      className="text-xs font-semibold tracking-widest text-white uppercase group-hover:text-[#F7E7C4] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {layer.title}
                    </h3>
                    <p className="text-[9px] text-[#A8988B] mt-0.5 uppercase tracking-widest font-mono">
                      LAYER: {layer.id}
                    </p>
                  </div>
                </div>
                {!isActive && (
                  <ArrowRight className="w-4 h-4 text-[#8C6D4F]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Side: Active layer specifications */}
        <div className="lg:col-span-6 h-full text-left">
          <div className="bg-[#0E0C0A] border border-[#8C6D4F]/25 rounded-sm p-6 min-h-[340px] h-full flex flex-col justify-between relative">
            
            {/* Corner pins */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#D4AF37]/50" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#D4AF37]/50" />

            <div className="flex flex-col gap-4">
              <span className="text-[9px] font-mono font-bold text-[#D4AF37] tracking-widest uppercase border-b border-[#8C6D4F]/20 pb-2.5">
                ACTIVE COMPLIANCE REPORT // LAYER_SPEC
              </span>
              
              <h3 
                className="text-lg text-white tracking-wider uppercase font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {activeLayer.title}
              </h3>
              
              <p className="text-xs text-[#B3A497] leading-relaxed font-sans font-light">
                {activeLayer.description}
              </p>

              {/* Technologies mapped inside the layer */}
              <div className="mt-4">
                <h4 className="text-[9px] font-mono font-bold text-[#8C6D4F] tracking-widest uppercase mb-3">
                  INTEGRATED TOOLSETS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeLayer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono bg-black border border-[#8C6D4F]/25 text-[#EAD8C7] px-2.5 py-1 rounded-sm uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[8px] font-mono text-[#8C6D4F]/60 border-t border-[#8C6D4F]/15 pt-4 mt-6 flex justify-between">
              <span>MODULE ID: Layer-{activeLayer.id.toUpperCase()}</span>
              <span>STANDARDS CODE: POSIX_COMPLIANT</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default ArchitectureCanvas;
