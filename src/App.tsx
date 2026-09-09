import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { FloatingDock } from './components/layout/FloatingDock';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { ProjectExplorer } from './components/projects/ProjectExplorer';
import { SecondaryWork } from './components/projects/SecondaryWork';
import { Research } from './components/about/Research';
import { ProductionCredibility } from './components/about/ProductionCredibility';
import { ExpertiseMap } from './components/expertise/ExpertiseMap';
import { ArchitectureCanvas } from './components/architecture/ArchitectureCanvas';
import { Timeline } from './components/timeline/Timeline';
import { Contact } from './components/contact/Contact';
import { QuickView } from './components/quickview/QuickView';
import { ProjectFocus } from './components/projects/ProjectFocus';
import { projects } from './data/portfolioData';
import { CustomCursor } from './components/ui/CustomCursor';

export const App: React.FC = () => {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const activeProject = projects.find(p => p.id === activeProjectId);

  // Active section scroll tracking
  useEffect(() => {
    const sectionIds = ['home', 'work', 'research', 'skills', 'metrics', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const el = document.getElementById(sectionId === 'metrics' ? 'production-credibility' : sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetId = sectionId === 'metrics' ? 'production-credibility' : sectionId;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] selection:bg-[#6366F1]/30 selection:text-white relative font-sans">

      {/* Reticle Cursor */}
      <CustomCursor />

      {/* Top Header Navbar */}
      <Navbar onQuickViewOpen={() => setQuickViewOpen(true)} />

      {/* Main Content Flow */}
      <main className="relative z-10 pb-24">
        {/* 01 // Home Screen Landing & System Status Dashboard */}
        <Hero onQuickViewOpen={() => setQuickViewOpen(true)} />

        {/* 02 // Builds Screen: Aptivue, RotorDyn, BioRobust, BioVision-Path */}
        <ProjectExplorer />

        {/* 03 // Architecture Canvas */}
        <ArchitectureCanvas />

        {/* 04 // Installed & Secondary Work */}
        <SecondaryWork />

        {/* 05 // Research Screen: IEEE Publication & Explainable AI */}
        <Research />

        {/* 06 // Metrics Screen: Verified Test Evidence Dashboard */}
        <div id="metrics">
          <ProductionCredibility />
        </div>

        {/* 07 // Stack Screen: Categorized Engineering Stack */}
        <ExpertiseMap />

        {/* 08 // Timeline & Milestones */}
        <Timeline />

        {/* 09 // Contact Screen: Direct Engineering Communication Portal */}
        <Contact />
      </main>

      {/* Signature Floating Bottom Navigation Dock */}
      <FloatingDock activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Footer */}
      <Footer />

      {/* Recruiter QuickView Modal */}
      <QuickView
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />

      {/* Project Deep Dive Focus Modal */}
      {activeProject && (
        <ProjectFocus
          project={activeProject}
          onClose={() => setActiveProjectId(null)}
        />
      )}

    </div>
  );
};

export default App;
