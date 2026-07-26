import { useEffect, useState } from 'react';

export const CursorHUD = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
      {/* Vertical coordinate line */}
      <div
        className="absolute top-0 bottom-0 border-l border-dashed border-[#FF3D00]/25 transition-all duration-75"
        style={{ left: `${mousePos.x}px` }}
      />
      {/* Horizontal coordinate line */}
      <div
        className="absolute left-0 right-0 border-t border-dashed border-[#FF3D00]/25 transition-all duration-75"
        style={{ top: `${mousePos.y}px` }}
      />

      {/* Floating coordinates tag (Light panel) */}
      <div
        className="absolute bg-[#FFFFFF] text-[8px] font-mono text-[#1A1A24] border border-[#1A1A24] px-2 py-1.5 font-bold shadow-[3px_3px_0px_#EAEDF0] flex flex-col gap-0.5"
        style={{
          left: `${mousePos.x + 14}px`,
          top: `${mousePos.y + 14}px`,
        }}
      >
        <div>LOC_X: <span className="text-[#FF3D00]">{mousePos.x}MM</span></div>
        <div>LOC_Y: <span className="text-[#FF3D00]">{mousePos.y}MM</span></div>
      </div>
    </div>
  );
};
export default CursorHUD;
