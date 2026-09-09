import React, { useState } from 'react';
import EngineeringScene from '../3d/EngineeringScene';
import FallbackGraph2D from '../3d/FallbackGraph2D';
import type { PipelineNode3D } from '../../types';

interface PipelineVisualizerProps {
  nodes?: PipelineNode3D[];
  title?: string;
  projectTitle?: string;
}

export const PipelineVisualizer: React.FC<PipelineVisualizerProps> = ({
  nodes,
  title = 'PIPELINE ARCHITECTURE TOPOLOGY',
  projectTitle = 'SYSTEM WORKFLOW',
}) => {
  const [activeNodeId, setActiveNodeId] = useState<string>(nodes?.[0]?.id || 'input');
  const [is3DMode, setIs3DMode] = useState<boolean>(true);

  const selectedNode = nodes?.find(n => n.id === activeNodeId) || nodes?.[0];

  return (
    <div className="w-full bg-[#0E0E12] border border-white/10 rounded-2xl p-6 sm:p-8 relative text-left shadow-2xl overflow-hidden">
      
      {/* Header controls bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
            {title} // {projectTitle}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white font-display">
            Interactive Architecture &amp; Data Pipeline
          </h3>
        </div>

        {/* 3D vs 2D Mode Switcher */}
        <div className="inline-flex items-center p-1 rounded-lg bg-black border border-white/10">
          <button
            onClick={() => setIs3DMode(true)}
            className={`px-3 py-1 text-[10px] font-mono font-bold rounded transition-colors cursor-pointer ${
              is3DMode ? 'bg-[#D4AF37] text-black' : 'text-neutral-400 hover:text-white'
            }`}
          >
            3D SCENE
          </button>
          <button
            onClick={() => setIs3DMode(false)}
            className={`px-3 py-1 text-[10px] font-mono font-bold rounded transition-colors cursor-pointer ${
              !is3DMode ? 'bg-[#D4AF37] text-black' : 'text-neutral-400 hover:text-white'
            }`}
          >
            2D FLAT
          </button>
        </div>
      </div>

      {/* Main Canvas View */}
      {is3DMode ? (
        <EngineeringScene
          nodes={nodes}
          activeNodeId={activeNodeId}
          onSelectNode={(id) => setActiveNodeId(id)}
          className="w-full h-[320px] sm:h-[380px]"
          title={title}
        />
      ) : (
        <FallbackGraph2D
          nodes={nodes}
          activeNodeId={activeNodeId}
          onSelectNode={(id) => setActiveNodeId(id)}
          title={title}
        />
      )}

      {/* Selected Node Spec Panel */}
      {selectedNode && (
        <div className="mt-6 p-4 rounded-xl bg-black/70 border border-[#8C6D4F]/30 flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
                ACTIVE STAGE: {selectedNode.label}
              </span>
            </div>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              {selectedNode.description}
            </p>
          </div>
          {selectedNode.sublabel && (
            <div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
              {selectedNode.sublabel}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default PipelineVisualizer;
