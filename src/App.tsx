import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
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

  const activeProject = projects.find(p => p.id === activeProjectId);

  return (
    <div className="min-h-screen bg-[#070709] text-[#F1ECE6] selection:bg-[#D4AF37]/30 selection:text-white relative">

      {/* Custom Cursor reticle */}
      <CustomCursor />

      {/* Navigation bar */}
      <Navbar onQuickViewOpen={() => setQuickViewOpen(true)} />

      {/* Main content flow */}
      <main className="relative z-10">
        {/* 01 // Home Hero Landing */}
        <Hero onQuickViewOpen={() => setQuickViewOpen(true)} />

        {/* 02 // Featured Engineering Work (Aptivue, RotorDyn, BioRobust) */}
        <ProjectExplorer />

        {/* 03 // Architecture & SDLC Stack Canvas */}
        <ArchitectureCanvas />

        {/* 04 // Secondary Engineering Work (Problem -> Approach -> Result) */}
        <SecondaryWork />

        {/* 05 // Research Credibility & IEEE Publication */}
        <Research />

        {/* 06 // Production Engineering Maturity & Test Suite Evidence */}
        <ProductionCredibility />

        {/* 07 // Categorized Skills & Tech Matrix */}
        <ExpertiseMap />

        {/* 08 // Professional Experience & Timeline */}
        <Timeline />

        {/* 09 // Direct Engineering Contact Portal */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Drawer Modal */}
      <QuickView
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />

      {/* Detailed Project Deep Dive Modal */}
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
