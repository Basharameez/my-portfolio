import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Connection3DProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  speed?: number;
}

export const Connection3D: React.FC<Connection3DProps> = ({
  start,
  end,
  color = '#8C6D4F',
  speed = 1.0,
}) => {
  const pulseRef = useRef<THREE.Mesh>(null);
  const progressRef = useRef<number>(Math.random());

  const lineMesh = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
    ]);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.25,
    });
    return new THREE.Line(geometry, material);
  }, [start, end, color]);

  // Animate pulse along the vector path
  useFrame((_, delta) => {
    if (!pulseRef.current) return;
    progressRef.current = (progressRef.current + delta * 0.4 * speed) % 1.0;
    
    const p = progressRef.current;
    pulseRef.current.position.x = start[0] + (end[0] - start[0]) * p;
    pulseRef.current.position.y = start[1] + (end[1] - start[1]) * p;
    pulseRef.current.position.z = start[2] + (end[2] - start[2]) * p;
  });

  return (
    <group>
      {/* 3D Line Primitive */}
      <primitive object={lineMesh} />

      {/* Traveling Data Pulse Particle */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color="#F7E7C4" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

export default Connection3D;
