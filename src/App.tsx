import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BootScreen } from './components/BootScreen';
import { HeroScene } from './components/HeroScene';
import { EngineeringCore } from './components/EngineeringCore';
import { ProjectExplorer } from './components/ProjectExplorer';
import { TechMap } from './components/TechMap';
import { Timelines } from './components/Timelines';
import { ContactDeck } from './components/ContactDeck';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [booting, setBooting] = useState(true);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleSelectProject = (name: string) => {
    setActiveProject(name);
    // Scroll to project section if selection is made from core hub
    const target = document.getElementById('project-explorer-node');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E2E8F0] selection:bg-[#00F0FF]/30 selection:text-white">
      <AnimatePresence>
        {booting && (
          <BootScreen onComplete={() => setBooting(false)} />
        )}
      </AnimatePresence>

      {!booting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen flex flex-col justify-between"
        >
          {/* Floating Navigation Header */}
          <header className="sticky top-4 z-30 mx-auto w-full max-w-7xl px-4 pointer-events-none">
            <nav className="glass-panel w-full flex items-center justify-between px-6 py-4 rounded-xl pointer-events-auto">
              <span className="font-mono text-sm font-bold tracking-widest text-gray-200">
                SRB // <span className="text-[#00F0FF]">SYSTEMS</span>
              </span>
              <div className="flex gap-4 text-xs font-mono text-gray-400">
                <a href="#engineering-matrix" className="hover:text-[#00F0FF] transition-colors">Matrix</a>
                <a href="#project-explorer-node" className="hover:text-[#00F0FF] transition-colors">Projects</a>
                <a href="#stack-matrix" className="hover:text-[#00F0FF] transition-colors">Tooling</a>
                <a href="#logs-timeline" className="hover:text-[#00F0FF] transition-colors">Logs</a>
              </div>
            </nav>
          </header>

          {/* Interactive Background Canvas Node Network */}
          <div className="absolute inset-0 z-0 h-[80vh] overflow-hidden pointer-events-none">
            <HeroScene />
          </div>

          {/* Main Dashboard Panel Layout */}
          <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-12 pb-24 flex flex-col gap-24">
            
            {/* HERO SECTION */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[50vh]">
              {/* Profile Copy Summary block */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="font-mono text-xs text-[#7000FF] font-bold uppercase tracking-widest bg-[#7000FF]/10 border border-[#7000FF]/25 px-2.5 py-1 rounded">
                    Engineered Systems Dashboard
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold font-sans tracking-tight text-[#E2E8F0] mt-4 leading-none">
                    SHAIK RAMEEZ BASHA
                  </h1>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-400 font-mono tracking-wide mt-2">
                    SOFTWARE ENGINEER &bull; FULL-STACK &bull; AI/ML
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed max-w-2xl">
                  2026 Computer Science and Engineering (Artificial Intelligence) graduate focused on building reliable web services, developer tools, telemetry data visualizers, and explainable neural network frameworks.
                </p>
                <div className="flex gap-4 font-mono text-xs">
                  <a
                    href="#engineering-matrix"
                    className="px-5 py-2.5 bg-[#00F0FF]/10 border border-[#00F0FF] hover:bg-[#00F0FF]/20 text-[#00F0FF] font-bold tracking-wider rounded transition-all active:scale-[0.98]"
                  >
                    Explore Matrix
                  </a>
                  <a
                    href="#contact-deck"
                    className="px-5 py-2.5 bg-[#121319] border border-[#1E202B] hover:border-gray-500 text-gray-300 font-bold tracking-wider rounded transition-all active:scale-[0.98]"
                  >
                    Transmit Signal
                  </a>
                </div>
              </div>

              {/* Profile Technical Identity Module */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm border border-[#1E202B] bg-[#121319] rounded-xl p-5 shadow-2xl relative overflow-hidden flex flex-col gap-4 font-mono select-none">
                  {/* Glowing header check */}
                  <div className="flex items-center justify-between border-b border-[#1E202B] pb-3 text-xs text-gray-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5 text-green-500 font-bold">
                      <ShieldCheck size={14} /> Active Node
                    </span>
                    <span>SRB-0x2026</span>
                  </div>

                  {/* Profile Picture */}
                  <div className="flex gap-4 items-center">
                    <img
                      src="/avatar.jpg"
                      alt="Shaik Rameez Basha"
                      className="w-20 h-20 rounded-lg border-2 border-[#00F0FF] object-cover bg-[#0A0A0C] shadow-lg shadow-[#00F0FF]/10"
                    />
                    <div className="flex flex-col gap-1 text-[11px] text-gray-400 leading-snug">
                      <div><strong>Location:</strong> India &bull; Open Reloc</div>
                      <div><strong>Education:</strong> B.Tech CSE (AI) </div>
                      <div><strong>CGPA Metric:</strong> 7.79 / 10.00</div>
                    </div>
                  </div>

                  {/* Operational parameters */}
                  <div className="flex flex-col gap-1 border-t border-[#1E202B] pt-3 text-[10px] text-gray-500 uppercase tracking-wider">
                    <div><strong>Registry status:</strong> Ready for full-time role</div>
                    <div><strong>Security clearance:</strong> Sanitized client telemetry</div>
                  </div>
                </div>
              </div>
            </section>

            {/* INTERACTIVE ENGINEERING CORE HUB */}
            <section id="engineering-matrix" className="flex flex-col gap-6 scroll-mt-24">
              <div>
                <span className="font-mono text-[9px] text-[#7000FF] font-bold uppercase tracking-widest">Architecture Mapping</span>
                <h2 className="text-2xl font-bold font-sans text-gray-200 mt-1">Core Engineering Matrices</h2>
              </div>
              <EngineeringCore onSelectProject={handleSelectProject} />
            </section>

            {/* PROJECTS EXPLORER */}
            <section id="project-explorer-node" className="flex flex-col gap-6 scroll-mt-24">
              <div>
                <span className="font-mono text-[9px] text-[#7000FF] font-bold uppercase tracking-widest">System Implementations</span>
                <h2 className="text-2xl font-bold font-sans text-gray-200 mt-1">Sanitized Project Explorer</h2>
              </div>
              <ProjectExplorer activeProjectName={activeProject} onCloseName={handleCloseProject} />
            </section>

            {/* TECHNOLOGY MAP */}
            <section id="stack-matrix" className="flex flex-col gap-6 scroll-mt-24">
              <div>
                <span className="font-mono text-[9px] text-[#7000FF] font-bold uppercase tracking-widest">System Specifications</span>
                <h2 className="text-2xl font-bold font-sans text-gray-200 mt-1">Active Tooling Registry</h2>
              </div>
              <TechMap onHighlightProject={handleSelectProject} />
            </section>

            {/* EXPERIENCE & EDUCATION TIMELINES */}
            <section id="logs-timeline" className="flex flex-col gap-6 scroll-mt-24">
              <div>
                <span className="font-mono text-[9px] text-[#7000FF] font-bold uppercase tracking-widest">Activity Records</span>
                <h2 className="text-2xl font-bold font-sans text-gray-200 mt-1">Professional Logs</h2>
              </div>
              <Timelines />
            </section>

            {/* CONTACT & COMMUNICATIONS */}
            <section id="contact-deck" className="flex flex-col gap-6 scroll-mt-24">
              <div>
                <span className="font-mono text-[9px] text-[#7000FF] font-bold uppercase tracking-widest">Signal Transmission</span>
                <h2 className="text-2xl font-bold font-sans text-gray-200 mt-1">Communications Node</h2>
              </div>
              <ContactDeck />
            </section>

          </main>

          {/* Footer panel */}
          <footer className="w-full border-t border-[#1E202B] py-8 text-center text-xs font-mono text-gray-500 uppercase tracking-widest bg-[#0A0A0C] relative z-10">
            <span>&copy; {new Date().getFullYear()} Shaik Rameez Basha &bull; System Ready</span>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
