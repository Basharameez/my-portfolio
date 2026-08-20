import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-[#8C6D4F]/15 py-10 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Signature */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span 
            className="text-xs font-semibold tracking-[0.2em] text-[#EAD8C7] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            SHAIK RAMEEZ BASHA
          </span>
          <span className="text-[9px] font-mono text-[#A8988B] uppercase tracking-widest">
            // AI/ML • GenAI • Full-Stack
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 text-[10px] font-mono tracking-widest text-[#A8988B]">
          <a
            href="https://github.com/Basharameez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-rameezbasha-151740286/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:shaikbashah20@gmail.com"
            className="hover:text-[#D4AF37] transition-colors"
          >
            EMAIL
          </a>
        </div>

        {/* Scroll Back to Top / Date */}
        <div className="flex items-center space-x-6">
          <span className="text-[10px] font-mono text-[#A8988B]">
            &copy; 2026 • EDITION
          </span>
          <button
            onClick={scrollToTop}
            className="text-[9px] font-mono text-[#A8988B] hover:text-[#D4AF37] tracking-widest transition-colors cursor-pointer uppercase"
          >
            BACK TO TOP ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
