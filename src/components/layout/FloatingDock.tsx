import React from 'react';
import { Home, Layers, FlaskConical, Code2, Activity, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingDockProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'HOME', icon: Home, color: '#6366F1' },
    { id: 'work', label: 'BUILDS', icon: Layers, color: '#06B6D4' },
    { id: 'research', label: 'RESEARCH', icon: FlaskConical, color: '#8B5CF6' },
    { id: 'skills', label: 'STACK', icon: Code2, color: '#3B82F6' },
    { id: 'metrics', label: 'METRICS', icon: Activity, color: '#F59E0B' },
    { id: 'contact', label: 'CONTACT', icon: Mail, color: '#10B981' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <nav 
        className="flex items-center gap-1 sm:gap-1.5 px-3 py-2 rounded-full bg-[#111827]/90 backdrop-blur-xl border border-[#263247] shadow-2xl shadow-black/80"
        aria-label="Mobile Bottom OS Dock"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                isActive ? 'text-white' : 'text-[#94A3B8] hover:text-white'
              }`}
              aria-label={`Navigate to ${item.label}`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDockPill"
                  className="absolute inset-0 rounded-full z-0"
                  style={{
                    backgroundColor: `${item.color}25`,
                    border: `1px solid ${item.color}80`,
                    boxShadow: `0 0 16px ${item.color}40`,
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <Icon
                className="w-4 h-4 z-10 transition-transform duration-200"
                style={{ color: isActive ? item.color : 'currentColor' }}
              />
              <span
                className={`z-10 tracking-wider text-[11px] transition-all duration-300 ${
                  isActive ? 'inline-block' : 'hidden md:inline-block'
                }`}
                style={{ color: isActive ? item.color : undefined }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default FloatingDock;
