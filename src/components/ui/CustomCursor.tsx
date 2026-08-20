import React, { useState, useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isClickable, setIsClickable] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const requestRef = useRef<number | null>(null);

  // Keep references to values for the animation loop
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch/mobile devices
    const touchQuery = window.matchMedia('(pointer: coarse)');
    setIsTouchDevice(touchQuery.matches);
    
    if (touchQuery.matches) return;

    // Hide native cursor globally
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if hovering clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = 
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('.cursor-pointer') ||
          target.getAttribute('onClick') !== null;

        setIsClickable(!!isInteractive);
      }
    };

    // Keep coordinates hidden if mouse leaves screen
    const handleMouseLeave = () => {
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    };

    const handleMouseEnter = () => {
      document.documentElement.style.cursor = 'none';
      document.body.style.cursor = 'none';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Spring/Damping loop
    const updateCursor = () => {
      const target = mouseRef.current;
      const current = cursorRef.current;

      // Inertia coefficient: 0.15 is smooth spring damping
      const damping = 0.16;
      const nextX = current.x + (target.x - current.x) * damping;
      const nextY = current.y + (target.y - current.y) * damping;

      cursorRef.current = { x: nextX, y: nextY };
      setCursorPos({ x: nextX, y: nextY });

      requestRef.current = requestAnimationFrame(updateCursor);
    };

    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      
      {/* 1. Tight target dot directly under mouse coordinates */}
      <div 
        className="absolute w-1.5 h-1.5 bg-[#D4AF37] rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      {/* 2. Inertial ring trailing with spring motion */}
      <div 
        className={`absolute rounded-full border border-[#D4AF37]/60 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          isClickable 
            ? 'w-10 h-10 bg-[#D4AF37]/10 border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.3)]' 
            : 'w-6 h-6'
        }`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      />

      {/* 3. Small telemetry readout labels next to the reticle */}
      <div 
        className="absolute font-mono text-[8px] text-[#D4AF37] font-bold select-none whitespace-nowrap pl-4 pt-1 transition-opacity duration-300 pointer-events-none"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: isClickable ? 0.9 : 0.4
        }}
      >
        [{Math.round(cursorPos.x)}, {Math.round(cursorPos.y)}] {isClickable ? 'SELECT' : 'AUDIT'}
      </div>

    </div>
  );
};

export default CustomCursor;
