import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import type { PipelineNode3D } from '../../types';

interface Node3DProps {
  node: PipelineNode3D;
  isActive?: boolean;
  onSelect?: (id: string) => void;
  quality?: 'high' | 'medium' | 'low' | 'fallback';
}

export const Node3D: React.FC<Node3DProps> = ({
  node,
  isActive = false,
  onSelect,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Gentle float & rotation animation
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.4;
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.position.y = node.position[1] + Math.sin(state.clock.elapsedTime * 2 + node.position[0]) * 0.12;
  });

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'input': return '#D4AF37';
      case 'process': return '#EAD8C7';
      case 'ai': return '#F7E7C4';
      case 'data': return '#C99E5D';
      case 'api': return '#8C6D4F';
      case 'product': return '#D4AF37';
      default: return '#D4AF37';
    }
  };

  const color = getNodeColor(node.type);

  return (
    <group position={node.position}>
      {/* 3D Wireframe Polyhedron Mesh */}
      <mesh
        ref={meshRef}
        onClick={() => onSelect && onSelect(node.id)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered || isActive ? 1.3 : 1.0}
      >
        <octahedronGeometry args={[0.45, 0]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={isActive ? 0.95 : hovered ? 0.8 : 0.4}
        />
      </mesh>

      {/* Vertex Glow Points */}
      <points scale={hovered || isActive ? 1.35 : 1.05}>
        <octahedronGeometry args={[0.46, 0]} />
        <pointsMaterial color="#FFFFFF" size={0.05} transparent opacity={0.7} />
      </points>

      {/* HTML Crisp Label Overlay */}
      <Html distanceFactor={12} position={[0, -0.65, 0]} center>
        <div
          onClick={() => onSelect && onSelect(node.id)}
          className={`px-2.5 py-1 rounded border font-mono transition-all cursor-pointer select-none whitespace-nowrap text-left ${
            isActive
              ? 'bg-[#181410] border-[#D4AF37] text-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]'
              : hovered
              ? 'bg-black/90 border-[#D4AF37]/60 text-white'
              : 'bg-black/70 border-[#8C6D4F]/30 text-neutral-400'
          }`}
        >
          <span className="text-[10px] font-bold tracking-wider uppercase block">
            {node.label}
          </span>
          {node.sublabel && (
            <span className="text-[8px] opacity-70 block">
              {node.sublabel}
            </span>
          )}
        </div>
      </Html>
    </group>
  );
};

export default Node3D;
