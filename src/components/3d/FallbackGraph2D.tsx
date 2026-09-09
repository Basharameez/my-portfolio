import React from 'react';
import type { PipelineNode3D } from '../../types';

interface FallbackGraph2DProps {
  nodes?: PipelineNode3D[];
  activeNodeId?: string;
  onSelectNode?: (id: string) => void;
  title?: string;
}

const defaultSystemNodes: PipelineNode3D[] = [
  { id: 'input', label: 'INPUT', sublabel: 'Document / Telemetry', description: 'Raw candidate PDF/DOCX resumes & machinery sensor feeds', type: 'input', position: [-4, 2, 0] },
  { id: 'process', label: 'PROCESSING', sublabel: 'FastAPI / Parser', description: 'Asynchronous document extraction & FFT spectrum algorithms', type: 'process', position: [-2, 0, 0] },
  { id: 'ai', label: 'INTELLIGENCE', sublabel: 'Gemini / PyTorch', description: 'LLM evaluation rubrics & neural vision embeddings', type: 'ai', position: [0, 2, 0] },
  { id: 'data', label: 'DATA PERSISTENCE', sublabel: 'Supabase / Drizzle', description: 'Relational candidate scoring matrices & time-series storage', type: 'data', position: [2, 0, 0] },
  { id: 'api', label: 'API LAYER', sublabel: 'REST / Worker Queues', description: 'BullMQ & Redis background worker queues', type: 'api', position: [4, 2, 0] },
  { id: 'product', label: 'PRODUCT UI', sublabel: 'Next.js 15 / React', description: 'Recruitment intelligence dashboard & diagnostic SaaS portal', type: 'product', position: [6, 0, 0] },
];

export const FallbackGraph2D: React.FC<FallbackGraph2DProps> = ({
  nodes = defaultSystemNodes,
  activeNodeId,
  onSelectNode,
  title = 'ENGINEERING PIPELINE TOPOLOGY (2D ACCESSIBLE MODE)',
}) => {
  return (
    <div className="w-full bg-[#0E0C0A] border border-[#8C6D4F]/30 rounded-xl p-6 relative overflow-hidden text-left shadow-2xl">
      {/* Eyebrow badge */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <span className="text-[10px] font-mono font-bold text-[#D4AF37] tracking-widest uppercase">
          {title}
        </span>
        <span className="text-[9px] font-mono text-[#8C6D4F] uppercase border border-[#8C6D4F]/30 px-2 py-0.5 rounded">
          ACCESSIBLE FALLBACK
        </span>
      </div>

      {/* SVG Pipeline Graph */}
      <div className="relative w-full overflow-x-auto py-4">
        <div className="min-w-[650px] flex items-center justify-between relative gap-4">
          {/* SVG Connection Lines Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#D4AF37]/30" strokeWidth="2" strokeDasharray="4 4">
            <line x1="10%" y1="50%" x2="90%" y2="50%" />
          </svg>

          {nodes.map((node, index) => {
            const isActive = activeNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => onSelectNode && onSelectNode(node.id)}
                className={`relative z-10 flex-1 p-3.5 rounded-lg border text-left transition-all cursor-pointer group ${
                  isActive
                    ? 'bg-[#181410] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                    : 'bg-black/80 border-[#8C6D4F]/30 hover:border-[#D4AF37]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-mono text-[#8C6D4F] group-hover:text-[#D4AF37]">
                    0{index + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]/60 animate-pulse" />
                </div>
                <h4 className="text-xs font-mono font-bold text-white uppercase group-hover:text-[#F7E7C4]">
                  {node.label}
                </h4>
                {node.sublabel && (
                  <p className="text-[9px] font-mono text-neutral-400 mt-0.5 truncate">
                    {node.sublabel}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Box */}
      {activeNodeId && (
        <div className="mt-6 p-4 rounded-lg bg-black/60 border border-[#8C6D4F]/25 text-left">
          {(() => {
            const selected = nodes.find(n => n.id === activeNodeId);
            if (!selected) return null;
            return (
              <div>
                <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
                  STAGE SPECIFICATION // {selected.label}
                </span>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {selected.description}
                </p>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default FallbackGraph2D;
