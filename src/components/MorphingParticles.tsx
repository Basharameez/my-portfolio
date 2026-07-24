import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ----------------------------------------------------
// WebGL Detector Helper
// ----------------------------------------------------
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

// ----------------------------------------------------
// Target Coordinate Generators
// ----------------------------------------------------
const generateSphere = () => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 2.0 + Math.random() * 0.4;
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
    const radius = ring === 0 ? 1.2 : ring === 1 ? 2.0 : 2.8;
    const theta = Math.random() * Math.PI * 2;
    arr[i * 3] = radius * Math.cos(theta);
    arr[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
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
    const x = (branchIndex - (branchCount - 1) / 2) * (3.5 / branchCount) + (Math.random() - 0.5) * 0.15;
    const z = (Math.random() - 0.5) * 0.3;
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
      arr[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.05;
    } else {
      const theta = Math.random() * Math.PI * 2;
      const r = 1.2;
      const y = (Math.random() - 0.5) * 2.8;
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
    const y = (conduit - 1) * 0.8;
    const x = (Math.random() - 0.5) * 4.5;
    const z = (Math.random() - 0.5) * 0.3;
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
    const x = (layerIdx - (layers - 1) / 2) * 1.6;
    const nodesInLayer = layerIdx === 0 ? 8 : layerIdx === 1 ? 12 : layerIdx === 2 ? 8 : 4;
    const nodeIdx = i % nodesInLayer;
    const y = (nodeIdx - (nodesInLayer - 1) / 2) * (3.2 / nodesInLayer) + (Math.random() - 0.5) * 0.1;
    const z = (Math.random() - 0.5) * 0.2;
    arr[i * 3] = x;
    arr[i * 3 + 1] = y;
    arr[i * 3 + 2] = z;
  }
  return arr;
};

const generateGrid = () => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 6.0;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 6.0;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 4.0;
  }
  return arr;
};

// Compile shapes mapping
const targets = [
  generateSphere(),         // 0. Hero
  generateRings(),          // 1. Identity / Core
  generateTree(),           // 2. CodeOrigin
  generateCylinder(),       // 3. RotorDyn
  generatePipeline(),       // 4. Compiler
  generateNeuralLayers(),   // 5. Explainable AI
  generateGrid()            // 6. Contact
];

// ----------------------------------------------------
// 3D Particles R3F Renderer
// ----------------------------------------------------
interface ParticlesRendererProps {
  activeSection: number;
}

const ParticlesRenderer = ({ activeSection }: ParticlesRendererProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);

  // Initialize particles positions as Layout 0
  const [initialPositions] = useState(() => new Float32Array(targets[0]));

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const array = pointsRef.current.geometry.attributes.position.array as Float32Array;

    timeRef.current += delta;
    const time = timeRef.current;

    // Slow organic drift rotation
    pointsRef.current.rotation.y = time * 0.04;
    pointsRef.current.rotation.x = time * 0.02;

    const targetCoords = targets[activeSection] || targets[0];
    let needsUpdate = false;

    // Lerp current array values to target layout
    for (let i = 0; i < count * 3; i++) {
      const diff = targetCoords[i] - array[i];
      if (Math.abs(diff) > 0.001) {
        array[i] += diff * delta * 3.5; // Lerp speed coefficient
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
        color="#00F0FF"
        size={0.065}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// ----------------------------------------------------
// 2D HTML Canvas Fallback Renderer
// ----------------------------------------------------
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

    // Initial random positions
    const particles = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      originX: Math.random() * width,
      originY: Math.random() * height
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Define visual behaviors based on active section in 2D space
      particles.forEach((p, idx) => {
        let targetX = p.originX;
        let targetY = p.originY;

        if (activeSection === 0) {
          // Circular orbit
          const angle = (idx / particles.length) * Math.PI * 2 + Date.now() * 0.0001;
          const radius = Math.min(width, height) * 0.25;
          targetX = width / 2 + radius * Math.cos(angle);
          targetY = height / 2 + radius * Math.sin(angle);
        } else if (activeSection === 1) {
          // Flattened rings
          const angle = (idx / particles.length) * Math.PI * 2 + Date.now() * 0.0002;
          const rx = Math.min(width, height) * 0.35;
          const ry = 40;
          targetX = width / 2 + rx * Math.cos(angle);
          targetY = height / 2 + ry * Math.sin(angle);
        } else if (activeSection === 2) {
          // Vertical columns tree shape
          const col = idx % 5;
          targetX = (width / 6) * (col + 1);
          targetY = height * 0.2 + (idx % 8) * (height * 0.08);
        } else if (activeSection === 3) {
          // Tight rapid cluster (Rotor)
          const angle = idx * 0.5 + Date.now() * 0.001;
          const r = 30 + (idx % 4) * 15;
          targetX = width / 2 + r * Math.cos(angle);
          targetY = height / 2 + r * Math.sin(angle);
        } else if (activeSection === 4) {
          // Linear pipeline tubes
          const row = idx % 3;
          targetX = ((idx % 12) / 11) * width;
          targetY = height / 3 + row * (height / 6);
        } else if (activeSection === 5) {
          // Layered neural map
          const layer = idx % 4;
          targetX = width * 0.2 + layer * (width * 0.2);
          const nodes = layer === 1 ? 8 : 4;
          const nodeIdx = idx % nodes;
          targetY = height * 0.25 + nodeIdx * (height * 0.1);
        }

        // Smooth transition lerp
        p.x += (targetX - p.x) * 0.08;
        p.y += (targetY - p.y) * 0.08;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
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

  return <canvas ref={containerRef} className="absolute inset-0 w-full h-full opacity-35" />;
};

// ----------------------------------------------------
// Combined Layout Container
// ----------------------------------------------------
interface MorphingParticlesProps {
  activeSection: number;
}

export const MorphingParticles = ({ activeSection }: MorphingParticlesProps) => {
  const [useWebGL, setUseWebGL] = useState(false);

  useEffect(() => {
    setUseWebGL(checkWebGL());
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#050507]">
      {useWebGL ? (
        <Canvas camera={{ position: [0, 0, 5], fdx: 60 } as any}>
          <ambientLight intensity={0.5} />
          <ParticlesRenderer activeSection={activeSection} />
        </Canvas>
      ) : (
        <CanvasFallback activeSection={activeSection} />
      )}
      {/* Immersive radial layout vignetting shadow overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,rgba(5,5,7,0.9)_90%] pointer-events-none" />
    </div>
  );
};
