import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onQuickViewOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuickViewOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'ENGINEERING', href: '#work', id: 'work' },
    { label: 'ARCHITECTURE', href: '#architecture', id: 'architecture' },
    { label: 'SECONDARY', href: '#secondary-work', id: 'secondary-work' },
    { label: 'RESEARCH', href: '#research', id: 'research' },
    { label: 'EXPERTISE', href: '#skills', id: 'skills' },
    { label: 'TIMELINE', href: '#timeline', id: 'timeline' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'work', 'architecture', 'secondary-work', 'research', 'skills', 'timeline', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
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
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#070709]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
        
        {/* Left Side: Brand Identity */}
        <a 
          href="#" 
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white hover:text-[#D4AF37] transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          RAMEEZ<span className="text-[#D4AF37]">.ENGINEERING</span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5 text-xs font-medium tracking-wider text-neutral-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-[#D4AF37] font-semibold border-b border-[#D4AF37]' : 'hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Recruiter QuickView CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <button 
            onClick={onQuickViewOpen}
            className="px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] text-xs font-mono font-bold tracking-wider uppercase rounded transition-all cursor-pointer flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RECRUITER QUICKVIEW</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0E0E12] border-b border-white/10 shadow-2xl px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium tracking-wider text-neutral-300 hover:text-[#D4AF37] py-1"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-white/10" />
          <button
            onClick={() => {
              setIsOpen(false);
              onQuickViewOpen();
            }}
            className="w-full text-center text-xs font-mono font-bold tracking-wider uppercase py-3 bg-[#D4AF37] text-black rounded flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>RECRUITER QUICKVIEW</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
