import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Node3D from './Node3D';
import Connection3D from './Connection3D';
import type { PipelineNode3D } from '../../types';

interface SystemGraphProps {
  nodes?: PipelineNode3D[];
  activeNodeId?: string;
  onSelectNode?: (id: string) => void;
  quality?: 'high' | 'medium' | 'low' | 'fallback';
}

const defaultNodes: PipelineNode3D[] = [
  { id: 'input', label: 'INPUT', sublabel: 'Document / Telemetry', description: 'Raw candidate PDF/DOCX resumes & bearing vibration sensor data', type: 'input', position: [-4, 1.2, 0] },
  { id: 'process', label: 'PROCESSING', sublabel: 'FastAPI / Parser', description: 'Asynchronous document parsing with pdf-parse/mammoth & FFT signal analysis', type: 'process', position: [-2.2, -1, 0.5] },
  { id: 'ai', label: 'INTELLIGENCE', sublabel: 'Gemini / PyTorch', description: 'LLM evaluation rubrics & neural vision embeddings (ResNet-18 / ONNX)', type: 'ai', position: [0, 1.6, 0] },
  { id: 'data', label: 'DATA PERSISTENCE', sublabel: 'Supabase / Drizzle', description: 'Relational candidate scoring matrices & PostgreSQL time-series records', type: 'data', position: [2.2, -1, 0.5] },
  { id: 'api', label: 'API / QUEUE', sublabel: 'BullMQ / Redis', description: 'Decoupled background worker queues & FastAPI microservice routes', type: 'api', position: [4.2, 1.2, 0] },
  { id: 'product', label: 'PRODUCT UI', sublabel: 'Next.js 15 / React', description: 'Recruitment intelligence dashboard & diagnostic telemetry SaaS', type: 'product', position: [6.2, -0.2, 0] },
];

export const SystemGraph: React.FC<SystemGraphProps> = ({
  nodes = defaultNodes,
  activeNodeId,
  onSelectNode,
  quality = 'high',
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  // Mouse parallax camera tilt
  useFrame(() => {
    if (!groupRef.current) return;
    const factor = quality === 'high' ? 0.4 : 0.2;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * factor, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * factor, 0.05);
  });

  return (
    <group ref={groupRef} position={[-1, 0, 0]}>
      {/* 3D Nodes */}
      {nodes.map((node) => (
        <Node3D
          key={node.id}
          node={node}
          isActive={activeNodeId === node.id}
          onSelect={onSelectNode}
          quality={quality}
        />
      ))}

      {/* 3D Node Connections */}
      {nodes.map((node, index) => {
        if (index === nodes.length - 1) return null;
        const nextNode = nodes[index + 1];
        return (
          <Connection3D
            key={`conn-${node.id}-${nextNode.id}`}
            start={node.position}
            end={nextNode.position}
            speed={quality === 'high' ? 1.2 : 0.7}
          />
        );
      })}
    </group>
  );
};

export default SystemGraph;
