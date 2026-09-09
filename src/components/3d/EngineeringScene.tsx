import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { useDeviceQualityTier } from '../ui/WebGLDetector';
import SystemGraph from './SystemGraph';
import FallbackGraph2D from './FallbackGraph2D';
import type { PipelineNode3D } from '../../types';

interface EngineeringSceneProps {
  nodes?: PipelineNode3D[];
  activeNodeId?: string;
  onSelectNode?: (id: string) => void;
  className?: string;
  title?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<{ children: React.ReactNode; fallback: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('WebGL Rendering Error caught by boundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const EngineeringScene: React.FC<EngineeringSceneProps> = ({
  nodes,
  activeNodeId,
  onSelectNode,
  className = 'w-full h-[360px] sm:h-[440px]',
  title,
}) => {
  const { quality, webGLAvailable, reducedMotion } = useDeviceQualityTier();

  // If WebGL is unsupported or reduced motion is active, render 2D fallback
  if (!webGLAvailable || reducedMotion || quality === 'fallback') {
    return (
      <div className={className}>
        <FallbackGraph2D
          nodes={nodes}
          activeNodeId={activeNodeId}
          onSelectNode={onSelectNode}
          title={title}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl bg-black/60 border border-[#8C6D4F]/25 ${className}`}>
      {/* Corner metadata badge */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
        <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest">
          3D R3F SYSTEM GRAPH [{quality.toUpperCase()} QUALITY]
        </span>
      </div>

      <WebGLErrorBoundary
        fallback={
          <FallbackGraph2D
            nodes={nodes}
            activeNodeId={activeNodeId}
            onSelectNode={onSelectNode}
            title={title}
          />
        }
      >
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 50 }}
          gl={{ alpha: true, antialias: quality !== 'low', powerPreference: 'high-performance' }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#D4AF37" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8C6D4F" />

          <SystemGraph
            nodes={nodes}
            activeNodeId={activeNodeId}
            onSelectNode={onSelectNode}
            quality={quality}
          />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
};

export default EngineeringScene;
