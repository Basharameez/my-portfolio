import React, { useState } from 'react';
import { Info, Terminal } from 'lucide-react';
import type { PipelineStep } from '../../types';

interface VisualizationsProps {
  projectId: string;
  steps: PipelineStep[];
}

export const Visualizations: React.FC<VisualizationsProps> = ({ projectId, steps }) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Node Diagram Header */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono font-bold text-[#D4AF37] tracking-widest uppercase">
          SYSTEM ARCHITECTURE DATAFLOW
        </span>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
          <Info className="w-3.5 h-3.5 text-[#D4AF37]" /> Hover nodes to inspect pipeline stages
        </div>
      </div>

      {/* Process Nodes Stack */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 bg-[#0E0E12] border border-white/10 rounded-xl relative overflow-hidden">
        {steps.map((step, idx) => {
          const isHovered = hoveredStep === idx;

          return (
            <div
              key={step.label}
              onMouseEnter={() => setHoveredStep(idx)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer text-left select-none relative ${
                isHovered 
                  ? 'bg-[#14141A] border-[#D4AF37] shadow-lg transform -translate-y-0.5'
                  : 'bg-[#070709] border-white/10'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className={`text-[9px] font-mono tracking-wider ${isHovered ? 'text-[#D4AF37]' : 'text-neutral-500'}`}>
                  0{idx + 1}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-[#D4AF37] animate-ping' : 'bg-neutral-700'}`} />
              </div>
              
              <span className={`block text-xs font-display font-semibold tracking-wider uppercase mt-2.5 ${isHovered ? 'text-white' : 'text-neutral-300'}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Node Spec Readout */}
      <div className="bg-[#0E0E12] border border-white/10 rounded-xl p-4 min-h-[75px] flex items-center text-left">
        {hoveredStep !== null ? (
          <div className="flex items-start gap-3">
            <span className="text-[10px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/30 shrink-0">
              STAGE 0{hoveredStep + 1}
            </span>
            <div>
              <h4 className="text-[10px] font-mono font-bold text-white tracking-widest uppercase">
                {steps[hoveredStep].label} SPECIFICATION
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed mt-1 font-sans">
                {steps[hoveredStep].info}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-neutral-400 italic text-center w-full font-mono">
            Hover over any process node above to trace architecture dataflow transitions.
          </p>
        )}
      </div>

      {/* Project-Specific Telemetry Panels */}
      
      {/* Aptivue Telemetry */}
      {projectId === 'aptivue' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-[#0E0E12] p-3.5 rounded-xl border border-white/10 text-left">
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">QUEUE WORKER ENGINE</span>
            <span className="text-xs font-mono font-bold text-[#D4AF37] mt-1 block">BullMQ + Redis Async Queue</span>
            <span className="text-[10px] text-neutral-400 mt-1 block">Decoupled parsing &amp; LLM inference</span>
          </div>
          <div className="bg-[#0E0E12] p-3.5 rounded-xl border border-white/10 text-left">
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">TEST SUITE EVIDENCE</span>
            <span className="text-xs font-mono font-bold text-emerald-400 mt-1 block">170 / 170 Vitest Passed</span>
            <span className="text-[10px] text-neutral-400 mt-1 block">Across 38 test files</span>
          </div>
          <div className="bg-[#0E0E12] p-3.5 rounded-xl border border-white/10 text-left">
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">DATA ACCESS LAYER</span>
            <span className="text-xs font-mono font-bold text-sky-400 mt-1 block">Drizzle ORM + Supabase</span>
            <span className="text-[10px] text-neutral-400 mt-1 block">PostgreSQL relational persistence</span>
          </div>
        </div>
      )}

      {/* RotorDyn Telemetry */}
      {projectId === 'rotordyn' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-[#0E0E12] p-3.5 rounded-xl border border-white/10 text-left">
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">FREQUENCY DIAGNOSTICS</span>
            <span className="text-xs font-mono font-bold text-[#D4AF37] mt-1 block">FFT Spectrum Analysis</span>
            <span className="text-[10px] text-neutral-400 mt-1 block">Fast Fourier Transform algorithm</span>
          </div>
          <div className="bg-[#0E0E12] p-3.5 rounded-xl border border-white/10 text-left">
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">TELEMETRY INGEST</span>
            <span className="text-xs font-mono font-bold text-white mt-1 block">FastAPI + Pandas Engine</span>
            <span className="text-[10px] text-neutral-400 mt-1 block">CSV / Excel bearing telemetry</span>
          </div>
          <div className="bg-[#0E0E12] p-3.5 rounded-xl border border-white/10 text-left">
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">DASHBOARD STORAGE</span>
            <span className="text-xs font-mono font-bold text-sky-400 mt-1 block">Plotly.js + IndexedDB</span>
            <span className="text-[10px] text-neutral-400 mt-1 block">Client-side caching &amp; spectrum plots</span>
          </div>
        </div>
      )}

      {/* BioRobust Metrics */}
      {projectId === 'biorobust' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-[#0E0E12] border border-white/10 p-3 rounded-xl">
            <span className="text-[9px] font-mono text-neutral-400 block">CLEAN ACCURACY</span>
            <span className="text-sm font-mono font-bold text-emerald-400 mt-1 block">73.66%</span>
          </div>
          <div className="bg-[#0E0E12] border border-white/10 p-3 rounded-xl">
            <span className="text-[9px] font-mono text-neutral-400 block">WEIGHTED F1</span>
            <span className="text-sm font-mono font-bold text-[#D4AF37] mt-1 block">72.31%</span>
          </div>
          <div className="bg-[#0E0E12] border border-white/10 p-3 rounded-xl">
            <span className="text-[9px] font-mono text-neutral-400 block">ECE CALIBRATION</span>
            <span className="text-sm font-mono font-bold text-sky-400 mt-1 block">0.0782</span>
          </div>
          <div className="bg-[#0E0E12] border border-white/10 p-3 rounded-xl">
            <span className="text-[9px] font-mono text-neutral-400 block">TEST SUITE</span>
            <span className="text-sm font-mono font-bold text-white mt-1 block">39 / 39 Passed</span>
          </div>
        </div>
      )}

      {/* CodeOrigin Terminal */}
      {projectId === 'codeorigin' && (
        <div className="bg-[#070709] p-4 rounded-xl font-mono text-xs border border-white/10 text-left flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-neutral-400">
            <Terminal className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>$ codeorigin --audit-repo .</span>
          </div>
          <div className="text-neutral-400 pl-5">[INFO] AST tree parsing initialized...</div>
          <div className="text-emerald-400 pl-5">[SUCCESS] CycloneDX SBOM generated.</div>
          <div className="text-[#D4AF37] pl-5">[SCORE] Technical Debt &amp; Acquisition Risk Evaluated.</div>
        </div>
      )}

    </div>
  );
};

export default Visualizations;
