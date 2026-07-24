import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
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

// ----------------------------------------------------
// 3D Particles & Node Graph Component (R3F)
// ----------------------------------------------------
const ThreeNodeNetwork: React.FC = () => {
  const count = 40;
  const meshRef = useRef<THREE.Points>(null);
  const lineMeshRef = useRef<THREE.LineSegments>(null);
  const { mouse, viewport } = useThree();
  const timeRef = useRef(0);

  // Create initial random node positions
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 6;
      arr[i + 1] = (Math.random() - 0.5) * 6;
      arr[i + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  });

  // Keep track of velocities for dynamic orbit drifting
  const [velocities] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 0.005;
      arr[i + 1] = (Math.random() - 0.5) * 0.005;
      arr[i + 2] = (Math.random() - 0.5) * 0.005;
    }
    return arr;
  });

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    timeRef.current += delta;
    const time = timeRef.current;
    const points = meshRef.current.geometry.attributes.position.array as Float32Array;

    // 1. Move nodes according to velocity and slow rotation
    meshRef.current.rotation.y = time * 0.03;
    meshRef.current.rotation.x = time * 0.01;

    // Apply interactive cursor gravity pull
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < count * 3; i += 3) {
      // Basic drift movement
      points[i] += velocities[i];
      points[i + 1] += velocities[i + 1];
      points[i + 2] += velocities[i + 2];

      // Boundary bouncing check
      if (Math.abs(points[i]) > 3) velocities[i] *= -1;
      if (Math.abs(points[i + 1]) > 3) velocities[i + 1] *= -1;
      if (Math.abs(points[i + 2]) > 3) velocities[i + 2] *= -1;

      // Mouse local influence gravity pull (in camera view coordinates)
      const dx = mouseX - points[i];
      const dy = mouseY - points[i + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 2.5) {
        points[i] += dx * 0.005;
        points[i + 1] += dy * 0.005;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;

    // 2. Re-calculate connecting lines for nodes within threshold proximity
    if (lineMeshRef.current) {
      const linePositions: number[] = [];
      const threshold = 1.6;

      for (let i = 0; i < count; i++) {
        const x1 = points[i * 3];
        const y1 = points[i * 3 + 1];
        const z1 = points[i * 3 + 2];

        for (let j = i + 1; j < count; j++) {
          const x2 = points[j * 3];
          const y2 = points[j * 3 + 1];
          const z2 = points[j * 3 + 2];

          const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
          if (d < threshold) {
            linePositions.push(x1, y1, z1, x2, y2, z2);
          }
        }
      }

      lineMeshRef.current.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      lineMeshRef.current.rotation.y = time * 0.03;
      lineMeshRef.current.rotation.x = time * 0.01;
    }
  });

  return (
    <group>
      {/* Node Vertices */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00F0FF"
          size={0.08}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
        />
      </points>

      {/* Connection Edge Lines */}
      <lineSegments ref={lineMeshRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color="#7000FF"
          transparent={true}
          opacity={0.25}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
};

// ----------------------------------------------------
// 2D HTML Canvas Node Fallback Component
// ----------------------------------------------------
const CanvasFallback: React.FC = () => {
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

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }> = [];

    const particleCount = Math.min(width < 768 ? 20 : 40, 50);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: 3
      });
    }

    // Mouse movement influence
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Move & render particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bouncing
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Magnet attraction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = '#00F0FF';
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(112, 0, 255, ${0.35 * (1 - dist / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={containerRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-auto" />;
};

// ----------------------------------------------------
// Main Hero Scene Container
// ----------------------------------------------------
export const HeroScene: React.FC = () => {
  const [useWebGL, setUseWebGL] = useState(false);

  useEffect(() => {
    setUseWebGL(checkWebGL());
  }, []);

  return (
    <div className="absolute inset-0 z-0 select-none overflow-hidden pointer-events-none">
      {useWebGL ? (
        <div className="w-full h-full opacity-75 pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <ThreeNodeNetwork />
          </Canvas>
        </div>
      ) : (
        <CanvasFallback />
      )}
      {/* Decorative Bottom Shadow Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0C] to-transparent pointer-events-none" />
    </div>
  );
};
