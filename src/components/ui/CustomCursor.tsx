import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect mobile/touch devices
    const touchQuery = window.matchMedia('(pointer: coarse)');
    setIsTouchDevice(touchQuery.matches);
    
    if (touchQuery.matches) return;

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

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

        setIsHovered(!!isInteractive);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice || cursorPos.x < 0) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-[0.5px]"
      animate={{
        x: cursorPos.x - (isHovered ? 20 : 5),
        y: cursorPos.y - (isHovered ? 20 : 5),
        width: isHovered ? 40 : 10,
        height: isHovered ? 40 : 10,
        backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(232, 223, 216, 0.95)',
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.4 }}
    />
  );
};

export default CustomCursor;
