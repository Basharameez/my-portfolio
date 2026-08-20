import React, { useState } from 'react';
import { Info, ShieldCheck, Activity, Brain, CheckCircle } from 'lucide-react';
import type { PipelineStep } from '../../types';

interface VisualizationsProps {
  projectId: string;
  steps: PipelineStep[];
}

export const Visualizations: React.FC<VisualizationsProps> = ({ projectId, steps }) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);



  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Node diagram header */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono font-bold text-[#8a8a93] tracking-widest uppercase">
          SYSTEM DATAFLOW MONITOR
        </span>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#8a8a93]">
          <Info className="w-3.5 h-3.5" /> Hover nodes to inspect
        </div>
      </div>

      {/* Process Nodes Stack */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 bg-[#0a0a0c]/60 border border-[#27272a]/40 rounded-xl relative overflow-hidden">
        {steps.map((step, idx) => {
          const isHovered = hoveredStep === idx;

          return (
            <React.Fragment key={step.label}>
              {/* Flow Node Block */}
              <div
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`p-3 rounded-lg border transition-all duration-300 cursor-crosshair text-left select-none relative ${
                  isHovered 
                    ? `bg-[#121214] border-[#00f0ff] glow-accent transform -translate-y-0.5`
                    : 'bg-[#050505]/40 border-[#27272a]/20'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-[8px] font-mono tracking-wider ${isHovered ? 'text-[#00f0ff]' : 'text-[#8a8a93]'}`}>
                    0{idx + 1} //
                  </span>
                  {/* Ping light indicator */}
                  <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-[#00f0ff] animate-ping' : 'bg-[#27272a]'}`} />
                </div>
                
                <span className={`block text-xs font-display font-semibold tracking-wider uppercase mt-3 ${isHovered ? 'text-[#fafafa]' : 'text-[#fafafa]/80'}`}>
                  {step.label}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Node spec details readout */}
      <div className="bg-[#0a0a0c]/40 border border-[#27272a]/30 rounded-xl p-4 min-h-[85px] flex items-center transition-all duration-300 text-left">
        {hoveredStep !== null ? (
          <div className="flex items-start gap-4">
            <span className="text-[10px] font-mono font-bold text-[#00f0ff] px-2 py-0.5 bg-[#00f0ff]/10 rounded border border-[#00f0ff]/20">
              STAGE 0{hoveredStep + 1}
            </span>
            <div>
              <h4 className="text-[10px] font-mono font-bold text-[#fafafa] tracking-widest uppercase">
                {steps[hoveredStep].label} STACK SPECIFICATION
              </h4>
              <p className="text-xs text-[#8a8a93] leading-relaxed mt-1">
                {steps[hoveredStep].info}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-[#8a8a93] italic text-center w-full font-mono">
            Hover over any process node above to trace dataflow transitions.
          </p>
        )}
      </div>

      {/* Custom Project telemetry panels */}
      
      {/* RTM Clinical Support details */}
      {projectId === 'rtm' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-[#0a0a0c]/40 p-4 rounded-xl border border-[#27272a]/30 flex flex-col justify-center text-left">
            <span className="text-[9px] font-mono text-[#8a8a93] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00f0ff]" /> PREPROCESSING
            </span>
            <span className="text-xs font-mono font-bold text-[#fafafa] mt-1.5">RESOLUTION PASSED</span>
          </div>
          <div className="bg-[#0a0a0c]/40 p-4 rounded-xl border border-[#27272a]/30 flex flex-col justify-center text-left">
            <span className="text-[9px] font-mono text-[#8a8a93] uppercase tracking-wider flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-[#00f0ff]" /> EXPLAINABILITY
            </span>
            <span className="text-xs font-mono font-bold text-[#fafafa] mt-1.5">GRAD-CAM RENDERED</span>
          </div>
          <div className="bg-[#0a0a0c]/40 p-4 rounded-xl border border-[#27272a]/30 flex flex-col justify-center text-left">
            <span className="text-[9px] font-mono text-[#8a8a93] uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#00f0ff]" /> CLINICIAN ACTION
            </span>
            <span className="text-xs font-mono font-bold text-[#00f0ff] mt-1.5">HUMAN AUDIT REQUIRED</span>
          </div>
        </div>
      )}

      {/* BioVision-Path Metrics */}
      {projectId === 'biovision' && (
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-[#0a0a0c]/40 border border-[#27272a]/30 p-3 rounded-xl flex flex-col justify-center">
            <span className="text-[8px] font-mono text-[#8a8a93]">SEGMENTATION IoU</span>
            <span className="text-sm font-mono font-bold text-[#00f0ff] mt-0.5">89.24%</span>
          </div>
          <div className="bg-[#0a0a0c]/40 border border-[#27272a]/30 p-3 rounded-xl flex flex-col justify-center">
            <span className="text-[8px] font-mono text-[#8a8a93]">ONNX INFERENCE</span>
            <span className="text-sm font-mono font-bold text-[#fafafa] mt-0.5">18.4 ms (CPU)</span>
          </div>
          <div className="bg-[#0a0a0c]/40 border border-[#27272a]/30 p-3 rounded-xl flex flex-col justify-center">
            <span className="text-[8px] font-mono text-[#8a8a93]">CLASSIFICATION F1</span>
            <span className="text-sm font-mono font-bold text-[#00f0ff] mt-0.5">0.941</span>
          </div>
        </div>
      )}

      {/* CodeOrigin AST static checks compiler output */}
      {projectId === 'codeorigin' && (
        <div className="bg-[#050505] p-4 rounded-xl font-mono text-[9px] text-[#00f0ff] border border-[#27272a]/40 flex flex-col gap-1 text-left shadow-lg">
          <div>$ codeorigin --audit-repo .</div>
          <div className="text-[#8a8a93]">[INFO] AST tree parsing initialized for 142 module files...</div>
          <div className="text-[#8a8a93]">[INFO] Circular dependency checks complete: 0 cycles flagged.</div>
          <div className="text-amber-500">[WARN] Outdated open-source licensing dependency found in package.json</div>
          <div className="text-[#fafafa]">[SUCCESS] CycloneDX SBOM schema successfully logged to compliance buffer.</div>
        </div>
      )}

      {/* CampusBuddy thresholds */}
      {projectId === 'campusbuddy' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#0a0a0c]/40 p-3 rounded-xl border border-[#27272a]/30 flex justify-between items-center text-left">
            <div>
              <span className="text-[9px] font-mono text-[#8a8a93] uppercase">YuNet Face Detection</span>
              <span className="block text-xs font-mono font-bold text-[#fafafa] mt-0.5">CONFIDENCE THRESHOLD</span>
            </div>
            <span className="text-xs font-mono font-bold text-[#00f0ff]">0.94 / 1.0</span>
          </div>
          <div className="bg-[#0a0a0c]/40 p-3 rounded-xl border border-[#27272a]/30 flex justify-between items-center text-left">
            <div>
              <span className="text-[9px] font-mono text-[#8a8a93] uppercase">SFace Embedding Match</span>
              <span className="block text-xs font-mono font-bold text-[#fafafa] mt-0.5">EUCLIDEAN DISTANCE</span>
            </div>
            <span className="text-xs font-mono font-bold text-[#00f0ff]">0.12 (PASSED)</span>
          </div>
        </div>
      )}

      {/* SIH state-machine state logs */}
      {projectId === 'sih' && (
        <div className="bg-[#0a0a0c]/40 p-4 rounded-xl border border-[#27272a]/30 flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#00f0ff] animate-pulse" />
            <div>
              <span className="text-[9px] font-mono text-[#8a8a93] uppercase block">State Machine Sync</span>
              <span className="text-xs font-mono font-bold text-[#fafafa]">Evaluation Results Compile</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-[9px] font-mono bg-[#121214] text-[#8a8a93] px-2 py-0.5 rounded border border-[#27272a]/50">
              SQL_ORMACTIVE
            </span>
            <span className="text-[9px] font-mono bg-[#00f0ff]/10 text-[#00f0ff] px-2 py-0.5 rounded border border-[#00f0ff]/20">
              RESULTS_LOCKED
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
export default Visualizations;
