import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { ProjectExplorer } from './components/projects/ProjectExplorer';
import { ProjectFocus } from './components/projects/ProjectFocus';
import { ExpertiseMap } from './components/expertise/ExpertiseMap';
import { ArchitectureCanvas } from './components/architecture/ArchitectureCanvas';
import { Timeline } from './components/timeline/Timeline';
import { Contact } from './components/contact/Contact';
import { QuickView } from './components/quickview/QuickView';
import { projects } from './data/portfolioData';
import { CustomCursor } from './components/ui/CustomCursor';

export const App: React.FC = () => {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = projects.find(p => p.id === activeProjectId);

  return (
    <div className="min-h-screen bg-[#F4F4F2] selection:bg-red-200 selection:text-red-900">
      
      {/* Custom Inertial Cursor reticle */}
      <CustomCursor />

      {/* Navigation bar */}
      <Navbar onQuickViewOpen={() => setQuickViewOpen(true)} />

      {/* Main content grid */}
      <main>
        {/* Home hero landing */}
        <Hero onQuickViewOpen={() => setQuickViewOpen(true)} />

        {/* 01 // About system */}
        <About />

        {/* 02 // Interactive project explorer */}
        <ProjectExplorer onProjectSelect={(id) => setActiveProjectId(id)} />

        {/* 03 // Skills relationship map */}
        <ExpertiseMap />

        {/* 04 // Architecture Stack layers */}
        <ArchitectureCanvas />

        {/* 05 // SDLC build cycle and timeline milestones */}
        <Timeline />

        {/* 06 // Contact signals portal */}
        <Contact />
      </main>

      {/* Global footer */}
      <Footer />

      {/* Recruiter Summary mode modal overlay */}
      <QuickView 
        isOpen={quickViewOpen} 
        onClose={() => setQuickViewOpen(false)} 
      />

      {/* Deeper Case-study focused workspace modal overlay */}
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
