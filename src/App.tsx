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

  // Section observer hook to trigger 3D morphing and camera coordinates
  const sectionRefs = [
    useRef<HTMLDivElement>(null), // 0. Hero
    useRef<HTMLDivElement>(null), // 1. Identity / Core
    useRef<HTMLDivElement>(null), // 2. CodeOrigin
    useRef<HTMLDivElement>(null), // 3. RotorDyn
    useRef<HTMLDivElement>(null), // 4. Compiler
    useRef<HTMLDivElement>(null), // 5. AI Research
    useRef<HTMLDivElement>(null)  // 6. Contact
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
        { threshold: 0.35 }
      );

      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [booting]);

  return (
    <div className="min-h-screen bg-[#030304] text-[#E2E8F0] selection:bg-[#00F0FF]/30 selection:text-white relative overflow-x-hidden">
      <AnimatePresence>
        {booting && (
          <BootScreen onComplete={() => setBooting(false)} />
        )}
      </AnimatePresence>

      {!booting && (
        <div className="relative w-full">
          {/* Morphing Particles Fixed Background */}
          <MorphingParticles activeSection={activeSection} />

          {/* Slow drifting atmospheric ambient gradient fields */}
          <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vh] rounded-full glow-spot-ambient" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vh] rounded-full glow-purple-ambient" />
          </div>

          {/* Sticky Navigation Overlay */}
          <header className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
            <nav className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto select-none">
              <span className="font-mono text-xs font-bold tracking-widest text-[#E2E8F0] hover:text-[#00F0FF] transition-colors">
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
                  className={`hover:text-[#00F0FF] transition-colors ${activeSection >= 2 && activeSection <= 5 ? 'text-[#00F0FF] font-bold' : ''}`}
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
                <span className="mono-tag text-[#7000FF] font-bold">SYSTEM ENGINE ACTIVE</span>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-bold tracking-tight text-[#E2E8F0] uppercase leading-none">
                  I BUILD SYSTEMS<br />
                  FOR COMPLEX<br />
                  PROBLEMS.
                </h1>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-4">
                  <div className="flex flex-col leading-snug border-l border-[#00F0FF]/30 pl-4">
                    <span className="text-sm font-bold text-gray-200">SHAIK RAMEEZ BASHA</span>
                    <span className="text-[11px] text-gray-500 font-mono tracking-wide uppercase">Software Engineer &bull; Full-Stack &bull; AI/ML &bull; DevTools</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed max-w-xl mt-2">
                  Focused on core systems development, compiler runtimes, AST compliance auditors, industrial diagnostic telemetry, and explainable neural model pipelines.
                </p>
                
                <div className="flex gap-4 font-mono text-[10px] mt-6">
                  <button
                    onClick={() => sectionRefs[1].current?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 bg-[#00F0FF]/5 hover:bg-[#00F0FF]/15 border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#00F0FF] font-bold uppercase tracking-wider rounded transition-all active:scale-[0.98]"
                  >
                    Enter Narrative &darr;
                  </button>
                </div>
              </div>
            </div>

            {/* 1. IDENTITY & CORE MATRIX */}
            <div
              ref={sectionRefs[1]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Credentials / Status */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="translucent-surface rounded-xl p-6 shadow-2xl font-mono relative overflow-hidden select-none">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 text-[10px] text-gray-500 uppercase">
                      <span className="flex items-center gap-1.5 text-green-400 font-bold">
                        <ShieldCheck size={14} /> ACTIVE NODE
                      </span>
                      <span>SRB-0x2026</span>
                    </div>

                    <div className="flex gap-4 items-center mt-5">
                      <img
                        src="/avatar.jpg"
                        alt="Shaik Rameez Basha"
                        className="w-20 h-20 rounded-lg border border-white/10 object-cover bg-[#030304]"
                      />
                      <div className="flex flex-col gap-1 text-[11px] text-gray-400 leading-snug">
                        <div><strong>IDENTITY:</strong> Shaik Rameez Basha</div>
                        <div><strong>COHORT:</strong> B.Tech CSE (AI) &bull; 2026</div>
                        <div><strong>CGPA:</strong> 7.79 / 10.00</div>
                        <div><strong>LOCATION:</strong> India (Open Reloc)</div>
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-4 mt-5 flex flex-col gap-1 text-[9px] text-gray-500 uppercase">
                      <div><strong>ACADEMICS:</strong> Narasaraopeta Engineering College</div>
                      <div><strong>RESEARCH:</strong> Explainable AI (IEEE Xplore, 2026)</div>
                    </div>
                  </div>
                </div>

                {/* Editorial content */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <span className="mono-tag">SECTION 01 // IDENTITY</span>
                  <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-gray-200 uppercase leading-tight">
                    SYSTEM ARCHITECT & GRADUATE ENGINEER
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
                    I design software structures and logic that prioritize core computing fundamentals, code audibility, and reliable integration. From engineering proprietary vibration diagnostics telemetry to researching neural models interpretation in published IEEE works, I seek problems requiring rigorous logical solutions.
                  </p>
                  <div className="tech-divider my-2" />
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-500 uppercase">
                    <div>
                      <span className="text-[#00F0FF] block mb-1">01 / Full-Stack</span>
                      React, TS, FastAPI, Postgres
                    </div>
                    <div>
                      <span className="text-[#00F0FF] block mb-1">02 / AI & ML</span>
                      PyTorch, NumPy, Explainable AI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. CODEORIGIN (SYSTEM 1) */}
            <div
              ref={sectionRefs[2]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Visual Description */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="mono-tag">SYSTEM 01 // DEVTOOLS</span>
                    <a
                      href="https://github.com/Basharameez/codeorigin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-gray-500 hover:text-[#00F0FF] transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-gray-200 uppercase leading-none">
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
                      <span key={t} className="text-[10px] px-2 py-0.5 border border-white/5 rounded bg-white/5 font-mono text-gray-400">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Spatial telemetry widget */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md p-6 translucent-surface rounded-xl flex flex-col gap-4 font-mono">
                    <span className="text-[9px] text-[#00F0FF] uppercase tracking-wider block border-b border-white/5 pb-2">AST PARSE FLOW TELEMETRY</span>
                    <CodeOriginWidget />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. ROTORDYN (SYSTEM 2) */}
            <div
              ref={sectionRefs[3]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Visual telemetry widget */}
                <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                  <div className="w-full max-w-md p-6 translucent-surface rounded-xl flex flex-col gap-4 font-mono">
                    <span className="text-[9px] text-red-400 uppercase tracking-wider block border-b border-white/5 pb-2">
                      SANITIZED DIAGNOSTIC TELEMETRY DEMO
                    </span>
                    <RotorDynWidget />
                  </div>
                </div>

                {/* Visual Description */}
                <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6">
                  <span className="mono-tag">SYSTEM 02 // INDUSTRIAL TELEMETRY</span>
                  <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-gray-200 uppercase leading-none">
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
                      <span key={t} className="text-[10px] px-2 py-0.5 border border-white/5 rounded bg-white/5 font-mono text-gray-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. PYTHON WEB COMPILER (SYSTEM 3) */}
            <div
              ref={sectionRefs[4]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Visual Description */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="mono-tag">SYSTEM 03 // RUNTIMES</span>
                    <a
                      href="https://github.com/Basharameez/python_web_compiler"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-gray-500 hover:text-[#00F0FF] transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-gray-200 uppercase leading-none">
                    COMPILER // RUNTIME INTERFACE
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
                      <span key={t} className="text-[10px] px-2 py-0.5 border border-white/5 rounded bg-white/5 font-mono text-gray-400">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Spatial telemetry widget */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md p-6 translucent-surface rounded-xl flex flex-col gap-4 font-mono">
                    <span className="text-[9px] text-[#00F0FF] uppercase tracking-wider block border-b border-white/5 pb-2">COMPILATION STAGE TELEMETRY</span>
                    <CompilerWidget />
                  </div>
                </div>
              </div>
            </div>

            {/* 5. AI RESEARCH & CONTACT SCREEN */}
            <div
              ref={sectionRefs[5]}
              className="min-h-screen flex flex-col justify-between max-w-7xl mx-auto px-6 pt-24 pb-12 z-10 w-full"
            >
              {/* Research section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <span className="mono-tag">SYSTEM 04 // AI RESEARCH</span>
                  <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-gray-200 uppercase leading-none">
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

                {/* Neural connection map widget */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md p-6 translucent-surface rounded-xl flex flex-col gap-4 font-mono">
                    <span className="text-[9px] text-[#00F0FF] uppercase tracking-wider block border-b border-white/5 pb-2">NEURAL ATTENTION MATRIX</span>
                    <XaiWidget />
                  </div>
                </div>
              </div>
            </div>

            {/* 6. CONTACT & COMMUNICATION SIGNALS */}
            <div
              ref={sectionRefs[6]}
              className="min-h-[80vh] flex flex-col justify-between max-w-7xl mx-auto px-6 pt-24 pb-12 z-10 w-full"
            >
              <div className="max-w-2xl my-auto flex flex-col gap-6">
                <span className="mono-tag">SECTION 04 // TRANSMISSION</span>
                <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-gray-200 uppercase leading-none">
                  ESTABLISH DATA SIGNAL
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed font-sans max-w-lg">
                  Initiate full-time software engineering communications or review telemetry schemas. Currently open to relocation and onsite roles.
                </p>
              </div>

              {/* Minimalist contact links bar */}
              <div className="border-t border-white/5 pt-12 flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-xs select-none">
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
                      className="px-4 py-2 border border-white/10 hover:border-[#00F0FF] hover:text-[#00F0FF] bg-white/5 rounded transition-all"
                    >
                      Signal &rarr;
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-2 border border-white/10 hover:text-[#00F0FF] rounded transition-all"
                    >
                      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </main>

          {/* Cinematic subtle footer bar */}
          <footer className="w-full border-t border-white/5 py-8 text-center text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-[#030304] relative z-10 select-none">
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
                ? 'border-[#00F0FF] bg-white/5 text-[#00F0FF]'
                : 'border-white/5 bg-[#030304]/40 text-gray-400'
            }`}
          >
            <span>{idx + 1}. {s.title}</span>
            <span className="text-[9px] uppercase tracking-wider opacity-60">
              {activeStep === idx ? 'ACTIVE' : 'STANDBY'}
            </span>
          </button>
        ))}
      </div>
      <div className="p-3 bg-white/5 border border-white/5 rounded text-[11px] text-gray-400 leading-relaxed min-h-[60px]">
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
      <div className="w-[180px] h-[180px] border border-white/5 rounded-lg bg-[#030304]/60 relative mx-auto flex items-center justify-center overflow-hidden">
        <svg className="w-full h-full">
          <line x1="0" y1="90" x2="180" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="90" y1="0" x2="90" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <circle cx="90" cy="90" r="25" stroke="rgba(255,255,255,0.03)" fill="none" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="90" cy="90" r="50" stroke="rgba(255,255,255,0.03)" fill="none" strokeWidth="1" strokeDasharray="3,3" />
          <polyline points={points.map(p => p.split(',').map(n => Number(n)*0.9).join(',')).join(' ')} fill="none" stroke="#00F0FF" strokeWidth="2" />
        </svg>
        <span className="absolute bottom-2 left-2 text-[8px] text-gray-500 tracking-wider">SPECTRUM ORBIT TRACK</span>
      </div>

      <div className="flex flex-col gap-2 text-xs font-mono">
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
        className="w-full py-2 bg-white/5 border border-white/10 text-xs hover:border-[#00F0FF] text-gray-300 font-bold uppercase rounded active:bg-[#030304]/80 transition-all"
      >
        {running ? 'Executing Code...' : 'Simulate Web Compiler'}
      </button>

      <div className="h-40 border border-white/5 bg-[#030304]/60 rounded p-3 font-mono text-[10px] text-gray-400 overflow-y-auto flex flex-col gap-1.5 leading-relaxed">
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
    <div className="flex flex-col gap-4 text-xs font-mono">
      <div className="grid grid-cols-2 gap-2">
        {nodeConnections.map((node, idx) => (
          <button
            key={idx}
            onMouseEnter={() => setActiveNode(idx)}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-2.5 rounded border text-[11px] text-left transition-all ${
              activeNode === idx
                ? 'border-[#00F0FF] bg-white/5 text-[#00F0FF]'
                : 'border-white/5 bg-[#030304]/40 text-gray-400'
            }`}
          >
            {node.label}
          </button>
        ))}
      </div>

      <div className="p-3 border border-white/5 bg-white/5 rounded flex flex-col gap-2 min-h-[90px] text-[11px]">
        {activeNode !== null ? (
          <>
            <span className="text-[9px] text-[#7000FF] font-bold uppercase tracking-wider">Estimated Attention Tensors</span>
            <div className="flex flex-col gap-1 mt-1 text-gray-400 font-mono">
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
