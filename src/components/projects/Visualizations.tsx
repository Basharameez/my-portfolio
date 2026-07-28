import React, { useState } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import type { PipelineStep } from '../../types';

interface VisualizationsProps {
  projectId: string;
  steps: PipelineStep[];
}

export const Visualizations: React.FC<VisualizationsProps> = ({ projectId, steps }) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const [freq, setFreq] = useState(2);
  const [amp, setAmp] = useState(12);

  const generateWavePath = () => {
    let path = 'M 0 20';
    for (let x = 0; x <= 800; x += 5) {
      const y = 20 + Math.sin((x / 800) * Math.PI * 2 * freq * 5) * amp;
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  // Helper colors for project themes
  const getProjectAccent = (id: string) => {
    switch (id) {
      case 'rotordyn': return 'text-red-600 bg-red-500';
      case 'modelforge': return 'text-red-600 bg-red-600';
      case 'codeorigin': return 'text-neutral-900 bg-neutral-900';
      case 'infrasight': return 'text-red-700 bg-red-700';
      default: return 'text-red-600 bg-red-600';
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 mt-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono font-black text-neutral-400 tracking-wider uppercase">
          SYSTEM DATAFLOW MONITOR
        </span>
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-semibold">
          <Info className="w-3.5 h-3.5" /> Hover nodes to audit
        </div>
      </div>

      {/* Horizontal / Stacked Pipeline Layout */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 neumorphic-inset">
        {steps.map((step, idx) => {
          const isHovered = hoveredStep === idx;
          const isNextHovered = hoveredStep === idx + 1;
          const accentColor = getProjectAccent(projectId).split(' ')[0];
          const bgAccent = getProjectAccent(projectId).split(' ')[1];

          return (
            <React.Fragment key={step.label}>
              {/* Flow Node Block */}
              <div
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`flex-1 min-w-[120px] text-center p-3 rounded-xl border transition-all duration-300 cursor-help select-none ${
                  isHovered 
                    ? `bg-white border-red-600 shadow-md transform -translate-y-0.5`
                    : 'bg-white border-neutral-200 shadow-sm'
                }`}
              >
                <span className={`block text-[10px] font-mono font-black tracking-widest ${isHovered ? accentColor : 'text-neutral-400'}`}>
                  STAGE 0{idx + 1}
                </span>
                <span className={`block text-xs font-black tracking-wide uppercase mt-1 ${isHovered ? 'text-neutral-900' : 'text-neutral-700'}`}>
                  {step.label}
                </span>
                {/* Active light */}
                <div className="mt-2 flex justify-center">
                  <div className={`w-2 h-2 rounded-full ${isHovered ? bgAccent + ' animate-ping' : 'bg-neutral-200'}`} />
                </div>
              </div>

              {/* Connecting line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-neutral-300">
                  <ArrowRight 
                    className={`w-4 h-4 transition-all duration-300 ${
                      isHovered || isNextHovered ? `${accentColor} scale-110` : ''
                    }`} 
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Node explanation Panel */}
      <NeumorphicCard className="!p-4 bg-white/70 backdrop-blur-sm min-h-[90px] flex items-center transition-all duration-300">
        {hoveredStep !== null ? (
          <div className="flex items-start gap-4">
            <span className="text-sm font-black text-red-600 px-2 py-0.5 bg-red-50 rounded font-mono">
              STAGE 0{hoveredStep + 1}
            </span>
            <div>
              <h4 className="text-xs font-black text-neutral-900 tracking-wide uppercase">
                {steps[hoveredStep].label} SPECIFICATIONS
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed mt-1">
                {steps[hoveredStep].info}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-neutral-400 italic text-center w-full">
            Hover over any process node above to view technical step explanations and system specifications.
          </p>
        )}
      </NeumorphicCard>

      {/* Simple Dynamic SVG Waveform panel for RotorDyn machinery simulation */}
      {projectId === 'rotordyn' && (
        <div className="flex flex-col gap-4">
          <div className="h-16 w-full bg-neutral-900 rounded-xl overflow-hidden relative border border-neutral-800 flex items-center justify-center">
            <div className="absolute top-2 left-3 text-[8px] font-mono text-red-500 tracking-widest uppercase">
              LIVE_WAVEFORM_TELEMETRY // SIMULATED
            </div>
            {/* Animated SVG wave */}
            <svg className="w-full h-10 stroke-red-600 fill-none" viewBox="0 0 800 40">
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
            <style>{`
              @keyframes wave-flow {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
          </div>

          {/* Interactive sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100 neumorphic-inset">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500">
                <span className="font-bold">TELEMETRY FREQUENCY (HZ)</span>
                <span className="text-red-600 font-bold">{freq.toFixed(1)} Hz</span>
              </div>
              <input 
                type="range" 
                min="0.5" 
                max="4" 
                step="0.1" 
                value={freq} 
                onChange={(e) => setFreq(parseFloat(e.target.value))}
                className="w-full accent-red-600 cursor-pointer h-1 bg-neutral-200 rounded-lg appearance-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500">
                <span className="font-bold">ACCELEROMETER AMPLITUDE (G-FORCE)</span>
                <span className="text-red-600 font-bold">{(amp / 5).toFixed(1)} G</span>
              </div>
              <input 
                type="range" 
                min="4" 
                max="20" 
                step="0.5" 
                value={amp} 
                onChange={(e) => setAmp(parseFloat(e.target.value))}
                className="w-full accent-red-600 cursor-pointer h-1 bg-neutral-200 rounded-lg appearance-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Dummy Model evaluation chart for ModelForge */}
      {projectId === 'modelforge' && (
        <div className="grid grid-cols-3 gap-2 h-14 w-full text-center">
          <div className="bg-neutral-50 border border-neutral-100 rounded-lg flex flex-col justify-center">
            <span className="text-[8px] font-mono text-neutral-400">VAL ACCURACY</span>
            <span className="text-xs font-black text-red-600 mt-0.5">98.42%</span>
          </div>
          <div className="bg-neutral-50 border border-neutral-100 rounded-lg flex flex-col justify-center">
            <span className="text-[8px] font-mono text-neutral-400">LATENCY (P99)</span>
            <span className="text-xs font-black text-neutral-900 mt-0.5">14.2 ms</span>
          </div>
          <div className="bg-neutral-50 border border-neutral-100 rounded-lg flex flex-col justify-center">
            <span className="text-[8px] font-mono text-neutral-400">DRIFT METRIC</span>
            <span className="text-xs font-black text-red-600 mt-0.5">0.024</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Visualizations;
