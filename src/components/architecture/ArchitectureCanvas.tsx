import React, { useState } from 'react';
import { ArrowRight, Server, Terminal, Database, ShieldAlert, Cpu } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { architectureLayers } from '../../data/portfolioData';

export const ArchitectureCanvas: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState('frontend');
  const activeLayer = architectureLayers.find(layer => layer.id === activeLayerId) || architectureLayers[0];

  const getLayerIcon = (id: string) => {
    switch (id) {
      case 'frontend': return <Terminal className="w-5 h-5 text-red-600" />;
      case 'backend': return <Server className="w-5 h-5 text-red-600" />;
      case 'data': return <Database className="w-5 h-5 text-red-600" />;
      case 'ai': return <Cpu className="w-5 h-5 text-red-600" />;
      case 'deployment': return <ShieldAlert className="w-5 h-5 text-red-600" />;
      default: return <Server className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="experience" className="py-24 px-6 relative bg-[#F4F4F2]">
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-7xl sm:text-8xl font-black text-neutral-300/80 block leading-none select-none">
          04
        </span>
        <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-widest mt-2 border-l-4 border-red-600 pl-4">
          SYSTEM ARCHITECTURES
        </h2>
        <p className="text-xs font-mono font-bold text-neutral-400 mt-2 tracking-widest uppercase">
          HOW I ARCHITECT &bull; SYSTEM LAYERS
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Clickable Stack of Layers */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          {architectureLayers.map((layer) => {
            const isActive = activeLayerId === layer.id;
            return (
              <NeumorphicCard
                key={layer.id}
                inset={isActive}
                onClick={() => setActiveLayerId(layer.id)}
                className={`!p-4 text-left transition-all duration-300 ${
                  isActive 
                    ? 'border-red-600 bg-neutral-50/50' 
                    : 'bg-white hover:bg-neutral-50/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg neumorphic-inset flex items-center justify-center bg-neutral-50 border border-neutral-100">
                      {getLayerIcon(layer.id)}
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-neutral-950 tracking-wider">
                        {layer.title}
                      </h3>
                      <p className="text-[10px] text-neutral-400 mt-0.5 uppercase tracking-widest font-mono">
                        LAYER: {layer.id}
                      </p>
                    </div>
                  </div>
                  {!isActive && (
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  )}
                </div>
              </NeumorphicCard>
            );
          })}
        </div>

        {/* Right Side: Active layer specifications */}
        <div className="lg:col-span-6 h-full">
          <NeumorphicCard className="bg-white min-h-[360px] h-full flex flex-col justify-between">
            
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono font-black text-red-600 tracking-widest uppercase">
                ACTIVE COMPLIANCE REPORT // LAYER_SPEC
              </span>
              
              <h3 className="text-xl font-black text-neutral-950 tracking-tight">
                {activeLayer.title}
              </h3>
              
              <p className="text-sm text-neutral-500 leading-relaxed">
                {activeLayer.description}
              </p>

              {/* Technologies mapped inside the layer */}
              <div className="mt-4">
                <h4 className="text-[10px] font-mono font-black text-neutral-400 tracking-wider uppercase mb-3">
                  INTEGRATED TOOLSETS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeLayer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold bg-neutral-50 border border-neutral-200 text-neutral-700 px-3 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[9px] font-mono text-neutral-400 border-t border-neutral-100 pt-6 mt-6 flex justify-between">
              <span>MODULE ID: Layer-{activeLayer.id.toUpperCase()}</span>
              <span>STANDARDS CODE: POSIX_COMPLIANT</span>
            </div>

          </NeumorphicCard>
        </div>

      </div>

    </section>
  );
};
export default ArchitectureCanvas;
