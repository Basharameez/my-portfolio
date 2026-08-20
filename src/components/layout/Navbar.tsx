import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onQuickViewOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuickViewOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROJECTS', href: '#work', id: 'work' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'RESEARCH', href: '#research', id: 'research' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = ['home', 'about', 'work', 'experience', 'research'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-[#8C6D4F]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
        
        {/* Left Side: Brand Name */}
        <a 
          href="#" 
          className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          RAMEEZ.
        </a>

        {/* Center: Desktop Navigation links */}
        <nav 
          className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative group py-1 transition-colors duration-300 ${
                  isActive ? 'text-[#FFF5EB]' : 'hover:text-[#FFF5EB]'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </a>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={onQuickViewOpen}
            className="text-[10px] font-mono tracking-widest text-[#BFA895] hover:text-[#EAD8C7] transition-colors uppercase cursor-pointer"
          >
            SUMMARY
          </button>
          <a 
            href="#contact" 
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#A8988B] hover:text-[#E8DFD8] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-[#8C6D4F]/25 shadow-2xl px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs tracking-[0.2em] text-[#C4B5A5] hover:text-[#FFF5EB] py-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <hr className="border-[#8C6D4F]/15" />
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onQuickViewOpen();
              }}
              className="w-full text-center text-xs tracking-[0.2em] py-3 border border-[#8C6D4F]/30 text-[#C4B5A5] hover:text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              RECRUITER QUICK VIEW
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs tracking-[0.2em] py-3 bg-[#0A0806] text-[#EAD8C7] rounded-sm border border-[#8C6D4F]/40 hover:border-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              LET&apos;S TALK
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
