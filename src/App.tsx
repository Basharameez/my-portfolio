import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BootScreen } from './components/BootScreen';
import { MorphingParticles } from './components/MorphingParticles';
import { ShieldCheck, Copy, Check, ExternalLink } from 'lucide-react';

export default function App() {
  const [booting, setBooting] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  // Email clipboard utility
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('shaikbashah20@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Section observer hook to trigger 3D morphing coordinates
  const sectionRefs = [
    useRef<HTMLDivElement>(null), // 0. Hero
    useRef<HTMLDivElement>(null), // 1. Identity
    useRef<HTMLDivElement>(null), // 2. Core
    useRef<HTMLDivElement>(null), // 3. CodeOrigin
    useRef<HTMLDivElement>(null), // 4. RotorDyn
    useRef<HTMLDivElement>(null), // 5. Compiler
    useRef<HTMLDivElement>(null)  // 6. AI / Contact
  ];

  useEffect(() => {
    if (booting) return;

    const observers = sectionRefs.map((ref, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(idx);
          }
        },
        { threshold: 0.35 } // Trigger when 35% of the section is visible
      );

      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [booting]);

  return (
    <div className="min-h-screen bg-[#050507] text-[#E2E8F0] selection:bg-[#00F0FF]/30 selection:text-white relative">
      <AnimatePresence>
        {booting && (
          <BootScreen onComplete={() => setBooting(false)} />
        )}
      </AnimatePresence>

      {!booting && (
        <div className="relative w-full">
          {/* Morphing Particles Fixed Background */}
          <MorphingParticles activeSection={activeSection} />

          {/* Sticky Navigation Overlay */}
          <header className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
            <nav className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto select-none">
              <span className="font-mono text-xs font-bold tracking-widest text-[#E2E8F0]">
                SRB // <span className="text-[#00F0FF]">SYSTEMS</span>
              </span>
              <div className="flex gap-6 font-mono text-[10px] tracking-wider text-gray-500 uppercase">
                <button
                  onClick={() => sectionRefs[0].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#00F0FF] transition-colors ${activeSection === 0 ? 'text-[#00F0FF] font-bold' : ''}`}
                >
                  Start
                </button>
                <button
                  onClick={() => sectionRefs[1].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#00F0FF] transition-colors ${activeSection === 1 ? 'text-[#00F0FF] font-bold' : ''}`}
                >
                  Identity
                </button>
                <button
                  onClick={() => sectionRefs[2].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#00F0FF] transition-colors ${activeSection === 2 ? 'text-[#00F0FF] font-bold' : ''}`}
                >
                  Core
                </button>
                <button
                  onClick={() => sectionRefs[3].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#00F0FF] transition-colors ${activeSection >= 3 && activeSection <= 5 ? 'text-[#00F0FF] font-bold' : ''}`}
                >
                  Systems
                </button>
                <button
                  onClick={() => sectionRefs[6].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#00F0FF] transition-colors ${activeSection === 6 ? 'text-[#00F0FF] font-bold' : ''}`}
                >
                  Contact
                </button>
              </div>
            </nav>
          </header>

          {/* Linear Scroll container */}
          <main className="relative z-10 w-full flex flex-col">
            
            {/* 0. HERO SCREEN */}
            <div
              ref={sectionRefs[0]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 select-none relative z-10 w-full"
            >
              <div className="max-w-4xl flex flex-col gap-6">
                <span className="mono-tag text-[#7000FF] font-bold">SYSTEM CORE INITIALIZED</span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-[#E2E8F0] uppercase leading-none">
                  I BUILD SYSTEMS<br />
                  THAT TURN COMPLEX<br />
                  PROBLEMS INTO<br />
                  WORKING SOFTWARE.
                </h1>
                <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed max-w-xl">
                  Software Engineer focused on full-stack systems, AI/ML models, developer tooling, high-frequency data telemetry, and engineering platforms.
                </p>
                <div className="flex gap-4 font-mono text-[10px] mt-4">
                  <button
                    onClick={() => sectionRefs[1].current?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-5 py-2.5 bg-[#00F0FF]/10 border border-[#00F0FF] hover:bg-[#00F0FF]/25 text-[#00F0FF] font-bold uppercase tracking-wider rounded transition-all"
                  >
                    Initiate Journey &darr;
                  </button>
                </div>
              </div>
            </div>

            {/* 1. IDENTITY SCREEN */}
            <div
              ref={sectionRefs[1]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Visual Identity / Credentials card */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="border border-[#1E202B] bg-[#121319]/70 rounded-xl p-6 shadow-2xl font-mono relative overflow-hidden select-none">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F0FF]/5 rounded-bl-full pointer-events-none" />
                    
                    <div className="flex items-center justify-between border-b border-[#1E202B] pb-4 text-[10px] text-gray-500 uppercase">
                      <span className="flex items-center gap-1.5 text-green-400 font-bold">
                        <ShieldCheck size={14} /> ACTIVE NODE
                      </span>
                      <span>SRB-0x2026</span>
                    </div>

                    <div className="flex gap-4 items-center mt-5">
                      <img
                        src="/avatar.jpg"
                        alt="Shaik Rameez Basha"
                        className="w-20 h-20 rounded-lg border border-[#00F0FF]/30 object-cover bg-[#0A0A0C] shadow-lg shadow-[#00F0FF]/5"
                      />
                      <div className="flex flex-col gap-1 text-[11px] text-gray-400 leading-snug">
                        <div><strong>IDENTITY:</strong> Shaik Rameez Basha</div>
                        <div><strong>COHORT:</strong> 2026 B.Tech CSE (AI)</div>
                        <div><strong>METRIC:</strong> CGPA 7.79 / 10.00</div>
                        <div><strong>LOCATION:</strong> India &bull; Open Reloc</div>
                      </div>
                    </div>

                    <div className="border-t border-[#1E202B] pt-4 mt-5 flex flex-col gap-1 text-[9px] text-gray-500 uppercase">
                      <div><strong>ACADEMICS:</strong> Narasaraopeta Engineering College</div>
                      <div><strong>RESEARCH:</strong> Explainable AI (IEEE Xplore, 2026)</div>
                    </div>
                  </div>
                </div>

                {/* Narrative Profile */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <span className="mono-tag">SECTION 01 // IDENTITY</span>
                  <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-200 uppercase">
                    SYSTEM ARCHITECT & GRADUATE ENGINEER
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
                    I design software structures and logic that prioritize core computing fundamentals, code audibility, and reliable integration. From engineering proprietary vibration diagnostics telemetry to researching neural models interpretation in published IEEE works, I seek problems requiring rigorous logical solutions.
                  </p>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">
                    Clear documentation, performance profiling, and modular structure guide my development process.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. ENGINEERING CORE */}
            <div
              ref={sectionRefs[2]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="flex flex-col gap-12">
                <div className="max-w-2xl">
                  <span className="mono-tag">SECTION 02 // ENGINEERING CORE</span>
                  <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-200 uppercase mt-2">
                    CORE OPERATIONAL MATRIX
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: 'Software Engineering', desc: 'Implementing clean algorithms, data encapsulation, modular logic, and strict test scopes.' },
                    { title: 'AI / ML', desc: 'Developing explainable deep architectures, weights mapping, and adaptive evaluation matrices.' },
                    { title: 'Full-Stack Systems', desc: 'Building reliable decoupled web services, persistent SQL data structures, and optimized UI flows.' },
                    { title: 'Developer Tools', desc: 'Engineering code evaluation tools using Abstract Syntax Tree (AST) visitors and security scans.' },
                    { title: 'Data Processing', desc: 'Ingesting high-frequency datasets and mapping binary spreadsheets inside client-side browser threads.' },
                    { title: 'Engineering Software', desc: 'Creating robust, cross-platform diagnostic software clients utilizing local WebSocket routing and Plotly.' }
                  ].map((core, i) => (
                    <div
                      key={i}
                      className="p-5 border border-transparent hover:border-[#1E202B] hover:bg-[#121319]/20 rounded-lg transition-all flex flex-col gap-3 font-mono"
                    >
                      <span className="text-[10px] text-[#00F0FF]">0{i + 1} //</span>
                      <h3 className="text-sm font-sans font-bold text-gray-200 uppercase">{core.title}</h3>
                      <p className="text-xs text-gray-500 font-sans leading-relaxed">{core.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. CODEORIGIN (SYSTEM 1) */}
            <div
              ref={sectionRefs[3]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Copy details */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="mono-tag">SYSTEM 01 // DEVTOOLS</span>
                    <a
                      href="https://github.com/Basharameez/codeorigin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-gray-500 hover:text-[#00F0FF]"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-200 uppercase leading-none">
                    CODEORIGIN // AST AUDIT INTELLIGENCE
                  </h2>
                  
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-mono">Target Problem</span>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      Evaluating code repositories for structural license violations, nested technical debt, and security vectors without compiling or running untrusted modules.
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-mono">Engineering Decision</span>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed">
                      We used Python AST traversal patterns (`ast.NodeVisitor`) to perform static analysis directly on syntax trees. While regular expressions are faster to parse, trees guarantee avoiding false positives nested inside commented blocks or string literals.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'AST Parsing'].map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 border border-[#1E202B] rounded bg-[#121319]/40 font-mono text-gray-400">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: Interactive AST flow widget */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md p-6 border border-[#1E202B] bg-[#121319]/40 rounded-xl flex flex-col gap-4 font-mono">
                    <span className="text-[9px] text-[#00F0FF] uppercase tracking-wider block border-b border-[#1E202B] pb-2">AST PARSE FLOW TELEMETRY</span>
                    <CodeOriginWidget />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. ROTORDYN (SYSTEM 2) */}
            <div
              ref={sectionRefs[4]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Interactive mechanical / orbit widget */}
                <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                  <div className="w-full max-w-md p-6 border border-[#1E202B] bg-[#121319]/40 rounded-xl flex flex-col gap-4 font-mono">
                    <span className="text-[9px] text-red-400 uppercase tracking-wider block border-b border-[#1E202B] pb-2">
                      SANITIZED DIAGNOSTIC TELEMETRY DEMO
                    </span>
                    <RotorDynWidget />
                  </div>
                </div>

                {/* Right: Copy details */}
                <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6">
                  <span className="mono-tag">SYSTEM 02 // INDUSTRIAL ANALYTICS</span>
                  <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-200 uppercase leading-none">
                    ROTORDYN // VIBRATION DIAGNOSTICS
                  </h2>
                  
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-mono">Target Problem</span>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      Processing high-frequency rotor shaft bearing waveforms, plotting spectral orbits, and diagnosing mechanical anomalies in real-time.
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-mono">Engineering Decision</span>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed">
                      To prevent GUI locking during high-frequency WebSocket data ingestion, we isolated the calculation loops on local worker threads and pushed simplified Plotly orbit coordinates to a PySide client, ensuring a smooth 60 FPS visual telemetry update.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Python', 'FastAPI', 'PySide6', 'PostgreSQL', 'Qt WebEngine', 'Plotly.js'].map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 border border-[#1E202B] rounded bg-[#121319]/40 font-mono text-gray-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. PYTHON WEB COMPILER (SYSTEM 3) */}
            <div
              ref={sectionRefs[5]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Copy details */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="mono-tag">SYSTEM 03 // RUNTIMES</span>
                    <a
                      href="https://github.com/Basharameez/python_web_compiler"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-gray-500 hover:text-[#00F0FF]"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-200 uppercase leading-none">
                    COMPILER // PYTHON PLAYGROUND
                  </h2>
                  
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-mono">Target Problem</span>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      Executing client-submitted Python code logs inside web sandboxes, capturing stdout variables streams, and converting plotting structures into browser visual objects.
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-red-400 uppercase tracking-widest block mb-2 font-mono">System Limitations & Warning</span>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed">
                      <strong>Security Isolation:</strong> This system runs using direct local `exec()` evaluation triggers. It does NOT implement kernel-level sandboxing, and must be hosted exclusively inside trusted local network environments.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Python', 'Flask', 'Matplotlib', 'Pandas', 'HTML5', 'JavaScript'].map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 border border-[#1E202B] rounded bg-[#121319]/40 font-mono text-gray-400">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: Code compiler widget */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md p-6 border border-[#1E202B] bg-[#121319]/40 rounded-xl flex flex-col gap-4 font-mono">
                    <span className="text-[9px] text-[#00F0FF] uppercase tracking-wider block border-b border-[#1E202B] pb-2">PLAYGROUND TELEMETRY BUFFER</span>
                    <CompilerWidget />
                  </div>
                </div>
              </div>
            </div>

            {/* 6. AI RESEARCH & CONTACT SCREEN */}
            <div
              ref={sectionRefs[6]}
              className="min-h-screen flex flex-col justify-between max-w-7xl mx-auto px-6 pt-24 pb-12 z-10 w-full"
            >
              {/* Research Showcase section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
                {/* Left: Copy details */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <span className="mono-tag">SYSTEM 04 // AI RESEARCH</span>
                  <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-200 uppercase leading-none">
                    EXPLAINABLE AI RESEARCH
                  </h2>
                  <p className="text-xs font-mono text-[#00F0FF]">
                    Published in IEEE Xplore, 2026
                  </p>
                  
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-mono">Target Problem</span>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      Demystifying "black box" deep learning decisions by mapping activations and features weight pathways to explain output results visually.
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-mono">Engineering Contribution</span>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed">
                      We developed local attention layer mapping loops that hook into active weight tensors, exporting gradient activation maps that explain output distributions.
                    </p>
                  </div>
                </div>

                {/* Right: Neural connections map */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md p-6 border border-[#1E202B] bg-[#121319]/40 rounded-xl flex flex-col gap-4 font-mono">
                    <span className="text-[9px] text-[#00F0FF] uppercase tracking-wider block border-b border-[#1E202B] pb-2">NEURAL WEIGHTS ATTRACTION MATRICES</span>
                    <XaiWidget />
                  </div>
                </div>
              </div>

              {/* Minimal Contact Deck at the absolute bottom */}
              <div className="border-t border-[#1E202B] pt-12 mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-xs select-none">
                <div className="flex gap-6 items-center">
                  <a
                    href="https://github.com/Basharameez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00F0FF] transition-colors"
                  >
                    GitHub Registry
                  </a>
                  <a
                    href="https://linkedin.com/in/shaik-rameez-basha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00F0FF] transition-colors"
                  >
                    LinkedIn Node
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-gray-500">shaikbashah20@gmail.com</span>
                  <div className="flex gap-2">
                    <a
                      href="mailto:shaikbashah20@gmail.com"
                      className="px-3 py-1.5 border border-[#1E202B] bg-[#121319]/50 hover:border-[#00F0FF] text-gray-300 rounded transition-all"
                    >
                      Signal &rarr;
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-1.5 border border-[#1E202B] hover:text-[#00F0FF] rounded transition-all"
                    >
                      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </main>

          {/* Cinematic subtle footer bar */}
          <footer className="w-full border-t border-[#1E202B]/30 py-6 text-center text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-[#050507] relative z-10 select-none">
            <span>&copy; {new Date().getFullYear()} Shaik Rameez Basha &bull; Systems Active</span>
          </footer>
        </div>
      )}
    </div>
  );
}

// ====================================================
// modular inline widgets
// ====================================================

// 1. CodeOrigin Ingestion Flow
const CodeOriginWidget = () => {
  const steps = [
    { title: 'Repository Ingestion', desc: 'Scans files, directories, and branch structures.' },
    { title: 'Parsing & AST traversal', desc: 'Parses modules using ast.NodeVisitor patterns.' },
    { title: 'Structural Analysis', desc: 'Maps class inheritances and coupling metrics.' },
    { title: 'Evidence Graph Storage', desc: 'Indexes findings into persistent relational schemas.' }
  ];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded text-left border text-xs transition-all flex justify-between items-center ${
              activeStep === idx
                ? 'border-[#00F0FF] bg-[#121319]/80 text-[#00F0FF]'
                : 'border-[#1E202B] bg-[#050507]/40 text-gray-400'
            }`}
          >
            <span>{idx + 1}. {s.title}</span>
            <span className="text-[9px] uppercase tracking-wider opacity-60">
              {activeStep === idx ? 'ACTIVE' : 'STANDBY'}
            </span>
          </button>
        ))}
      </div>
      <div className="p-3 bg-[#121319]/80 border border-[#1E202B] rounded text-[11px] text-gray-400 leading-relaxed min-h-[60px]">
        <strong>Telemetry:</strong> {steps[activeStep].desc}
      </div>
    </div>
  );
};

// 2. RotorDyn Orbit Waveforms
const RotorDynWidget = () => {
  const [freq, setFreq] = useState(1);
  const [amp, setAmp] = useState(55);
  const [phase, setPhase] = useState(0);

  const points: string[] = [];
  const cx = 100;
  const cy = 100;
  for (let t = 0; t <= Math.PI * 2; t += 0.05) {
    const x = cx + amp * Math.cos(freq * t);
    const y = cy + amp * Math.sin(t + phase);
    points.push(`${x},${y}`);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-[180px] h-[180px] border border-[#1E202B] rounded-lg bg-[#050507]/60 relative mx-auto flex items-center justify-center overflow-hidden">
        <svg className="w-full h-full">
          <line x1="0" y1="90" x2="180" y2="90" stroke="#1E202B" strokeWidth="1" />
          <line x1="90" y1="0" x2="90" y2="180" stroke="#1E202B" strokeWidth="1" />
          <circle cx="90" cy="90" r="25" stroke="#1E202B" fill="none" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="90" cy="90" r="50" stroke="#1E202B" fill="none" strokeWidth="1" strokeDasharray="3,3" />
          <polyline points={points.map(p => p.split(',').map(n => Number(n)*0.9).join(',')).join(' ')} fill="none" stroke="#00F0FF" strokeWidth="2" />
        </svg>
        <span className="absolute bottom-2 left-2 text-[8px] text-gray-500 tracking-wider">SPECTRUM ORBIT TRACK</span>
      </div>

      <div className="flex flex-col gap-2 text-xs">
        <div className="flex justify-between items-center text-gray-400">
          <span>Speed Factor</span>
          <input
            type="range" min="1" max="4" step="1"
            value={freq} onChange={(e) => setFreq(Number(e.target.value))}
            className="w-24 accent-[#00F0FF]"
          />
        </div>
        <div className="flex justify-between items-center text-gray-400">
          <span>Wave Amplitude</span>
          <input
            type="range" min="20" max="75"
            value={amp} onChange={(e) => setAmp(Number(e.target.value))}
            className="w-24 accent-[#00F0FF]"
          />
        </div>
        <div className="flex justify-between items-center text-gray-400">
          <span>Phase Displacement</span>
          <input
            type="range" min="0" max="3" step="0.1"
            value={phase} onChange={(e) => setPhase(Number(e.target.value))}
            className="w-24 accent-[#00F0FF]"
          />
        </div>
      </div>
    </div>
  );
};

// 3. Compiler Execution flow
const CompilerWidget = () => {
  const [running, setRunning] = useState(false);
  const [outputs, setOutputs] = useState<string[]>(['System standby.', 'Submit runtime request.']);

  const runCodeSimulation = () => {
    if (running) return;
    setRunning(true);
    setOutputs(['Instantiating local execution workspace...', 'Capturing system stdout streams...']);
    
    setTimeout(() => {
      setOutputs((prev) => [...prev, '> exec(user_payload, {"np": numpy, "plt": matplotlib})']);
    }, 450);

    setTimeout(() => {
      setOutputs((prev) => [
        ...prev,
        'STDOUT: "Performing dataset matrix multiplications..."',
        'Intercepting matplotlib figure buffers... Figure found.'
      ]);
    }, 950);

    setTimeout(() => {
      setOutputs((prev) => [
        ...prev,
        'COMPLETED: Decoded matplotlib plot to base64 payload block.',
        'RUN FINISHED.'
      ]);
      setRunning(false);
    }, 1450);
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={runCodeSimulation}
        disabled={running}
        className="w-full py-2 bg-[#121319]/80 border border-[#1E202B] text-xs hover:border-[#00F0FF] text-gray-300 font-bold uppercase rounded active:bg-[#050507]/80 transition-all"
      >
        {running ? 'Executing Code...' : 'Simulate Web Compiler'}
      </button>

      <div className="h-40 border border-[#1E202B] bg-[#050507]/60 rounded p-3 font-mono text-[10px] text-gray-400 overflow-y-auto flex flex-col gap-1.5 leading-relaxed">
        {outputs.map((line, idx) => (
          <div key={idx} className="flex gap-1.5 items-start">
            <span className="text-[#00F0FF]">&gt;</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. Neural interpretation activation matrix
const XaiWidget = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodeConnections = [
    { label: 'Input Node [0,0]', weights: [0.88, 0.10, 0.02] },
    { label: 'Input Node [1,0]', weights: [0.30, 0.55, 0.15] },
    { label: 'Input Node [0,1]', weights: [0.08, 0.32, 0.60] },
    { label: 'Input Node [1,1]', weights: [0.03, 0.12, 0.85] }
  ];

  return (
    <div className="flex flex-col gap-4 text-xs">
      <div className="grid grid-cols-2 gap-2">
        {nodeConnections.map((node, idx) => (
          <button
            key={idx}
            onMouseEnter={() => setActiveNode(idx)}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-2.5 rounded border text-[11px] text-left transition-all ${
              activeNode === idx
                ? 'border-[#00F0FF] bg-[#121319]/80 text-[#00F0FF]'
                : 'border-[#1E202B] bg-[#050507]/40 text-gray-400'
            }`}
          >
            {node.label}
          </button>
        ))}
      </div>

      <div className="p-3 border border-[#1E202B] bg-[#121319]/80 rounded flex flex-col gap-2 min-h-[90px] text-[11px]">
        {activeNode !== null ? (
          <>
            <span className="text-[9px] text-[#7000FF] font-bold uppercase tracking-wider">Estimated Attention Tensors</span>
            <div className="flex flex-col gap-1 mt-1 text-gray-400">
              <div>Output Layer Channel 1: {nodeConnections[activeNode].weights[0]}</div>
              <div>Output Layer Channel 2: {nodeConnections[activeNode].weights[1]}</div>
              <div>Output Layer Channel 3: {nodeConnections[activeNode].weights[2]}</div>
            </div>
          </>
        ) : (
          <div className="text-gray-500 flex items-center justify-center h-full min-h-[60px] text-center">
            Hover over an input node above to trace active neural decision pathways.
          </div>
        )}
      </div>
    </div>
  );
};
