import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// WebGL Detector Helper
const checkWebGL = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

const count = 500;

// Coordinate generators
const generateSphere = () => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 2.0 + Math.random() * 0.3;
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
};

const generateRings = () => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const ring = i % 3;
    const radius = ring === 0 ? 1.3 : ring === 1 ? 2.1 : 2.9;
    const theta = Math.random() * Math.PI * 2;
    arr[i * 3] = radius * Math.cos(theta);
    arr[i * 3 + 1] = (Math.random() - 0.5) * 0.15;
    arr[i * 3 + 2] = radius * Math.sin(theta);
  }
  return arr;
};

const generateTree = () => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const level = i % 4;
    const y = 2.0 - level * 1.2;
    const branchCount = Math.pow(2, level);
    const branchIndex = i % branchCount;
    const x = (branchIndex - (branchCount - 1) / 2) * (3.2 / branchCount) + (Math.random() - 0.5) * 0.15;
    const z = (Math.random() - 0.5) * 0.25;
    arr[i * 3] = x;
    arr[i * 3 + 1] = y;
    arr[i * 3 + 2] = z;
  }
  return arr;
};

const generateCylinder = () => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const isShaft = i % 5 === 0;
    if (isShaft) {
      arr[i * 3] = (Math.random() - 0.5) * 0.05;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 3.2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.05;
    } else {
      const theta = Math.random() * Math.PI * 2;
      const r = 1.3;
      const y = (Math.random() - 0.5) * 2.6;
      arr[i * 3] = r * Math.cos(theta);
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = r * Math.sin(theta);
    }
  }
  return arr;
};

const generatePipeline = () => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const conduit = i % 3;
    const y = (conduit - 1) * 0.7;
    const x = (Math.random() - 0.5) * 4.2;
    const z = (Math.random() - 0.5) * 0.25;
    arr[i * 3] = x;
    arr[i * 3 + 1] = y;
    arr[i * 3 + 2] = z;
  }
  return arr;
};

const generateNeuralLayers = () => {
  const arr = new Float32Array(count * 3);
  const layers = 4;
  for (let i = 0; i < count; i++) {
    const layerIdx = i % layers;
    const x = (layerIdx - (layers - 1) / 2) * 1.5;
    const nodesInLayer = layerIdx === 0 ? 8 : layerIdx === 1 ? 12 : layerIdx === 2 ? 8 : 4;
    const nodeIdx = i % nodesInLayer;
    const y = (nodeIdx - (nodesInLayer - 1) / 2) * (3.0 / nodesInLayer) + (Math.random() - 0.5) * 0.1;
    const z = (Math.random() - 0.5) * 0.15;
    arr[i * 3] = x;
    arr[i * 3 + 1] = y;
    arr[i * 3 + 2] = z;
  }
  return arr;
};

const generateGrid = () => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 6.5;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 6.5;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 4.5;
  }
  return arr;
};

const targets = [
  generateSphere(),         // 0. Hero
  generateRings(),          // 1. Identity / Core
  generateTree(),           // 2. CodeOrigin
  generateCylinder(),       // 3. RotorDyn
  generatePipeline(),       // 4. Compiler
  generateNeuralLayers(),   // 5. Explainable AI
  generateGrid()            // 6. Contact
];

// Scroll-linked camera target coordinates
const cameraTargets = [
  new THREE.Vector3(0, 0, 5),       // 0. Hero
  new THREE.Vector3(0, -1, 4.2),    // 1. Identity / Core
  new THREE.Vector3(-1.8, 0.8, 3.2),// 2. CodeOrigin
  new THREE.Vector3(1.8, -1.0, 3.0),// 3. RotorDyn
  new THREE.Vector3(-1.5, -1.8, 3.2),// 4. Compiler
  new THREE.Vector3(1.6, 1.8, 3.0),  // 5. Explainable AI
  new THREE.Vector3(0, 0, 5.8)      // 6. Contact
];

// R3F Points Renderer
interface ParticlesRendererProps {
  activeSection: number;
}

const ParticlesRenderer = ({ activeSection }: ParticlesRendererProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);

  const [initialPositions] = useState(() => new Float32Array(targets[0]));

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const array = pointsRef.current.geometry.attributes.position.array as Float32Array;

    timeRef.current += delta;
    const time = timeRef.current;

    // Organic drift rotation
    pointsRef.current.rotation.y = time * 0.035;
    pointsRef.current.rotation.x = time * 0.015;

    // Smoothly interpolate camera position
    const targetCam = cameraTargets[activeSection] || cameraTargets[0];
    state.camera.position.lerp(targetCam, delta * 2.0);
    state.camera.lookAt(0, 0, 0);

    const targetCoords = targets[activeSection] || targets[0];
    let needsUpdate = false;

    // Morph coordinates with a fluid wave displacement
    for (let i = 0; i < count * 3; i += 3) {
      const targetX = targetCoords[i];
      const targetY = targetCoords[i + 1];
      const targetZ = targetCoords[i + 2];

      const waveX = Math.sin(time * 0.4 + targetY) * 0.08;
      const waveY = Math.cos(time * 0.4 + targetX) * 0.08;

      const dx = (targetX + waveX - array[i]) * delta * 3.2;
      const dy = (targetY + waveY - array[i + 1]) * delta * 3.2;
      const dz = (targetZ - array[i + 2]) * delta * 3.2;

      if (Math.abs(dx) > 0.0005 || Math.abs(dy) > 0.0005 || Math.abs(dz) > 0.0005) {
        array[i] += dx;
        array[i + 1] += dy;
        array[i + 2] += dz;
        needsUpdate = true;
      }
    }

    if (needsUpdate) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[initialPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#E60012"
        size={0.065}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.65}
        blending={THREE.NormalBlending}
      />
    </points>
  );
};

// 2D HTML Canvas Fallback Renderer
const CanvasFallback = ({ activeSection }: ParticlesRendererProps) => {
  const containerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = containerRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      originX: Math.random() * width,
      originY: Math.random() * height
    }));

    const animate = () => {
      ctx.fillStyle = '#F4F4F6';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        let targetX = p.originX;
        let targetY = p.originY;

        if (activeSection === 0) {
          const angle = (idx / particles.length) * Math.PI * 2 + Date.now() * 0.00008;
          const radius = Math.min(width, height) * 0.28;
          targetX = width / 2 + radius * Math.cos(angle);
          targetY = height / 2 + radius * Math.sin(angle);
        } else if (activeSection === 1) {
          const angle = (idx / particles.length) * Math.PI * 2 + Date.now() * 0.00015;
          const rx = Math.min(width, height) * 0.38;
          const ry = 50;
          targetX = width / 2 + rx * Math.cos(angle);
          targetY = height / 2 + ry * Math.sin(angle);
        } else if (activeSection === 2) {
          const col = idx % 5;
          targetX = (width / 6) * (col + 1);
          targetY = height * 0.22 + (idx % 8) * (height * 0.08);
        } else if (activeSection === 3) {
          const angle = idx * 0.45 + Date.now() * 0.0008;
          const r = 25 + (idx % 4) * 18;
          targetX = width / 2 + r * Math.cos(angle);
          targetY = height / 2 + r * Math.sin(angle);
        } else if (activeSection === 4) {
          const row = idx % 3;
          targetX = ((idx % 12) / 11) * width;
          targetY = height / 3.2 + row * (height / 6.5);
        } else if (activeSection === 5) {
          const layer = idx % 4;
          targetX = width * 0.22 + layer * (width * 0.18);
          const nodes = layer === 1 ? 8 : 4;
          const nodeIdx = idx % nodes;
          targetY = height * 0.22 + nodeIdx * (height * 0.11);
        }

        p.x += (targetX - p.x) * 0.06;
        p.y += (targetY - p.y) * 0.06;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(230, 0, 18, 0.45)';
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeSection]);

  return <canvas ref={containerRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-auto" />;
};

export const MorphingParticles = ({ activeSection }: ParticlesRendererProps) => {
  const [useWebGL, setUseWebGL] = useState(false);

  useEffect(() => {
    setUseWebGL(checkWebGL());
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#F4F4F6]">
      {useWebGL ? (
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: '#F4F4F6' }}>
          <ambientLight intensity={0.8} />
          <ParticlesRenderer activeSection={activeSection} />
        </Canvas>
      ) : (
        <CanvasFallback activeSection={activeSection} />
      )}
      {/* Light vignetting overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_55%,rgba(244,244,246,0.75)_95%] pointer-events-none" />
    </div>
  );
};
