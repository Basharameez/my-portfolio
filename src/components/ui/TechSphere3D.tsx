import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface TechSphere3DProps {
  className?: string;
}

export const TechSphere3D: React.FC<TechSphere3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for rotation
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    // 1. Outer Wireframe Geodesic Sphere
    const outerGeo = new THREE.IcosahedronGeometry(2.2, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#D4AF37'),
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    sphereGroup.add(outerMesh);

    // 2. Vertex Glow Points
    const pointsGeo = new THREE.IcosahedronGeometry(2.22, 2);
    const pointsMat = new THREE.PointsMaterial({
      color: new THREE.Color('#F7E7C4'),
      size: 0.06,
      transparent: true,
      opacity: 0.8,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    sphereGroup.add(pointsMesh);

    // 3. Inner Core Polyhedron
    const innerGeo = new THREE.DodecahedronGeometry(1.3, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#8C6D4F'),
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    sphereGroup.add(innerMesh);

    // 4. Floating Neural Particles Matrix
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.5 + Math.random() * 0.8;

      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color('#D4AF37'),
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    sphereGroup.add(particleCloud);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotationY = mouseX * 0.5;
      targetRotationX = mouseY * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Continuous rotation
      sphereGroup.rotation.y += 0.003;
      sphereGroup.rotation.x += 0.001;
      innerMesh.rotation.y -= 0.005;
      particleCloud.rotation.z += 0.002;

      // Mouse inertia damping
      sphereGroup.rotation.y += (targetRotationY - sphereGroup.rotation.y) * 0.05;
      sphereGroup.rotation.x += (targetRotationX - sphereGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 300;
      const newHeight = container.clientHeight || 300;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      outerGeo.dispose();
      outerMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div ref={containerRef} className="w-full h-full min-h-[280px] max-w-[420px] mx-auto cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#D4AF37]/60 uppercase tracking-widest pointer-events-none">
        3D SYSTEM TOPOLOGY MATRIX
      </div>
    </div>
  );
};

export default TechSphere3D;
