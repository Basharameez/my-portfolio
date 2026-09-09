import React from 'react';
import { FileText, Terminal } from 'lucide-react';

interface NavbarProps {
  onQuickViewOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuickViewOpen }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#080B12]/90 backdrop-blur-md border-b border-[#263247] py-3.5 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
        
        {/* Left: System Identity */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white hover:text-[#6366F1] transition-colors"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <div className="w-7 h-7 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/40 flex items-center justify-center text-[#6366F1]">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-extrabold text-white">RAMEEZ OS</span>
            <span className="hidden sm:inline-block text-[#94A3B8] font-mono text-[11px] ml-2">v2.5 // AI SYSTEMS</span>
          </div>
        </a>

        {/* Right: Recruiter QuickView Button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onQuickViewOpen}
            className="px-3.5 py-1.5 bg-[#6366F1]/10 hover:bg-[#6366F1]/20 border border-[#6366F1]/40 hover:border-[#6366F1] text-[#6366F1] text-xs font-mono font-bold tracking-wider uppercase rounded-full transition-all cursor-pointer flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RECRUITER QUICKVIEW</span>
            <span className="sm:hidden">QUICKVIEW</span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
