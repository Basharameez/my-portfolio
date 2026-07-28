import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NeumorphicButton } from '../ui/NeumorphicButton';

interface NavbarProps {
  onQuickViewOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuickViewOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EXPERTISE', href: '#expertise', id: 'expertise' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = ['home', 'work', 'about', 'expertise', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-neutral-50/90 backdrop-blur-md border-b border-neutral-200/40 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name */}
        <a 
          href="#home" 
          className="font-extrabold text-lg tracking-tight hover:text-red-600 transition-colors flex items-center gap-2"
        >
          RAMEEZ BASHA <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-bold tracking-widest relative py-1 transition-colors hover:text-neutral-900 ${
                  isActive ? 'text-neutral-900' : 'text-neutral-500'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 rounded" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <NeumorphicButton 
            variant="standard" 
            onClick={onQuickViewOpen}
            className="!px-4 !py-2 text-xs"
          >
            QUICK VIEW <ArrowUpRight className="w-3.5 h-3.5" />
          </NeumorphicButton>
          <a 
            href="#contact" 
            className="text-xs font-bold px-4 py-2 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-all shadow-sm flex items-center gap-1.5"
          >
            GET IN TOUCH ↗
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-50 border-b border-neutral-200/60 shadow-lg px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold tracking-wider text-neutral-600 hover:text-neutral-900 py-1"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-neutral-200" />
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onQuickViewOpen();
              }}
              className="w-full text-center text-xs font-bold py-3 border border-neutral-200 rounded-xl bg-white hover:bg-neutral-50"
            >
              RECRUITER QUICK VIEW
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs font-bold py-3 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
