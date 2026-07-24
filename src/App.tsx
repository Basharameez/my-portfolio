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
    <div className="min-h-screen bg-[#F4F4F6] text-[#0C0C0E] selection:bg-[#E60012]/30 selection:text-black relative overflow-x-hidden">
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
              <span className="font-mono text-xs font-bold tracking-widest text-[#0C0C0E] hover:text-[#E60012] transition-colors bg-white px-3 py-1.5 border-3 border-black shadow-[3px_3px_0px_#000000]">
                SRB // <span className="text-[#E60012]">SYSTEMS</span>
              </span>
              <div className="flex gap-4 font-mono text-[9px] tracking-wider text-black bg-white p-2 border-3 border-black shadow-[3px_3px_0px_#E60012] uppercase font-bold">
                <button
                  onClick={() => sectionRefs[0].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#E60012] transition-colors ${activeSection === 0 ? 'text-[#E60012]' : ''}`}
                >
                  Start
                </button>
                <button
                  onClick={() => sectionRefs[1].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#E60012] transition-colors ${activeSection === 1 ? 'text-[#E60012]' : ''}`}
                >
                  Identity
                </button>
                <button
                  onClick={() => sectionRefs[2].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#E60012] transition-colors ${activeSection >= 2 && activeSection <= 5 ? 'text-[#E60012]' : ''}`}
                >
                  Systems
                </button>
                <button
                  onClick={() => sectionRefs[6].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#E60012] transition-colors ${activeSection === 6 ? 'text-[#E60012]' : ''}`}
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
              <div className="max-w-4xl flex flex-col gap-6 items-start">
                <span className="mono-tag bg-[#E60012] text-white px-2.5 py-0.5 border-2 border-black inline-block shadow-[2px_2px_0px_#000000]">
                  SYSTEM ENGINE ACTIVE // NODE-0x0
                </span>
                
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-black tracking-tighter text-[#0C0C0E] uppercase leading-none">
                  I BUILD SYSTEMS<br />
                  <span className="bg-[#E60012] text-white px-4 py-1.5 border-4 border-black inline-block shadow-[8px_8px_0px_#000000] rotate-[-1deg]">
                    FOR COMPLEX
                  </span><br />
                  PROBLEMS.
                </h1>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-4">
                  <div className="flex flex-col leading-snug border-l-4 border-[#E60012] pl-4">
                    <span className="text-sm font-black text-[#0C0C0E] tracking-tight uppercase">SHAIK RAMEEZ BASHA</span>
                    <span className="text-[11px] text-gray-500 font-mono tracking-wide uppercase font-bold">Software Engineer &bull; Full-Stack &bull; AI/ML &bull; DevTools</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed max-w-xl mt-2 font-medium">
                  Focused on core systems development, compiler runtimes, AST compliance auditors, industrial diagnostic telemetry, and explainable neural model pipelines.
                </p>
                
                <div className="flex gap-4 font-mono text-[10px] mt-6">
                  <button
                    onClick={() => sectionRefs[1].current?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 bg-[#E60012] text-white border-3 border-black font-black uppercase tracking-wider rounded-none shadow-[4px_4px_0px_#000000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all active:scale-[0.98]"
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
                {/* Credentials / Status Card */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="slanted-panel-white p-6 rounded-none relative">
                    {/* Corner coordinates */}
                    <div className="absolute top-2 left-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute top-2 right-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute bottom-2 left-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute bottom-2 right-2 text-[8px] text-black/30 font-mono select-none">+</div>

                    <div className="unslanted-content">
                      <div className="flex items-center justify-between border-b border-black pb-4 text-[10px] text-black font-bold uppercase">
                        <span className="flex items-center gap-1.5 text-[#E60012] font-black">
                          <ShieldCheck size={14} /> ACTIVE NODE
                        </span>
                        <span>SRB-0x2026</span>
                      </div>

                      <div className="flex gap-4 items-center mt-5">
                        <img
                          src="/avatar.jpg"
                          alt="Shaik Rameez Basha"
                          className="w-20 h-20 rounded-none border-2 border-black object-cover bg-white"
                        />
                        <div className="flex flex-col gap-1 text-[11px] text-black leading-snug font-bold">
                          <div><strong>IDENTITY:</strong> Shaik Rameez Basha</div>
                          <div><strong>COHORT:</strong> B.Tech CSE (AI) &bull; 2026</div>
                          <div><strong>CGPA:</strong> 7.79 / 10.00</div>
                          <div><strong>LOCATION:</strong> India (Open Reloc)</div>
                        </div>
                      </div>

                      <div className="border-t border-black pt-4 mt-5 flex flex-col gap-1 text-[9px] text-gray-600 uppercase font-bold">
                        <div><strong>ACADEMICS:</strong> Narasaraopeta Engineering College</div>
                        <div><strong>RESEARCH:</strong> Explainable AI (IEEE Xplore, 2026)</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial content */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <span className="mono-tag">SECTION 01 // IDENTITY</span>
                  <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#0C0C0E] uppercase leading-tight">
                    SYSTEM ARCHITECT & GRADUATE ENGINEER
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed font-semibold">
                    I design software structures and logic that prioritize core computing fundamentals, code audibility, and reliable integration. From engineering proprietary vibration diagnostics telemetry to researching neural models interpretation in published IEEE works, I seek problems requiring rigorous logical solutions.
                  </p>
                  <div className="tech-divider my-2 border-b-2 border-black" />
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono text-black uppercase font-bold">
                    <div>
                      <span className="text-[#E60012] block mb-1">01 / Full-Stack</span>
                      React, TS, FastAPI, Postgres
                    </div>
                    <div>
                      <span className="text-[#E60012] block mb-1">02 / AI & ML</span>
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
                <div className="lg:col-span-6 flex flex-col gap-6 items-start">
                  <div className="flex items-center gap-3">
                    <span className="mono-tag">SYSTEM 01 // DEVTOOLS</span>
                    <a
                      href="https://github.com/Basharameez/codeorigin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-black hover:text-[#E60012] transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#0C0C0E] uppercase leading-none">
                    CODEORIGIN // AST AUDIT INTELLIGENCE
                  </h2>
                  
                  <div>
                    <span className="text-[10px] text-[#E60012] uppercase tracking-widest block mb-2 font-mono font-bold">Target Problem</span>
                    <p className="text-sm text-gray-700 font-sans leading-relaxed font-semibold">
                      Evaluating code repositories for structural license violations, nested technical debt, and security vectors without compiling or running untrusted modules.
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#E60012] uppercase tracking-widest block mb-2 font-mono font-bold">Engineering Decision</span>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed font-medium">
                      We used Python AST traversal patterns (`ast.NodeVisitor`) to perform static analysis directly on syntax trees. While regular expressions are faster to parse, trees guarantee avoiding false positives nested inside commented blocks or string literals.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'AST Parsing'].map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 border-2 border-black rounded-none bg-white font-mono text-black font-bold shadow-[2px_2px_0px_#000000]">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Spatial telemetry widget */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md p-6 slanted-panel-white rounded-none relative">
                    <div className="absolute top-2 left-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute top-2 right-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute bottom-2 left-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute bottom-2 right-2 text-[8px] text-black/30 font-mono select-none">+</div>

                    <div className="unslanted-content">
                      <span className="text-[9px] text-[#E60012] uppercase tracking-wider block border-b-2 border-black pb-2 font-bold">AST PARSE FLOW TELEMETRY</span>
                      <CodeOriginWidget />
                    </div>
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
                  <div className="w-full max-w-md p-6 slanted-panel-white rounded-none relative">
                    <div className="absolute top-2 left-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute top-2 right-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute bottom-2 left-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute bottom-2 right-2 text-[8px] text-black/30 font-mono select-none">+</div>

                    <div className="unslanted-content">
                      <span className="text-[9px] text-red-500 uppercase tracking-wider block border-b-2 border-black pb-2 font-bold">
                        SANITIZED DIAGNOSTIC TELEMETRY DEMO
                      </span>
                      <RotorDynWidget />
                    </div>
                  </div>
                </div>

                {/* Visual Description */}
                <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6 items-start">
                  <span className="mono-tag">SYSTEM 02 // INDUSTRIAL TELEMETRY</span>
                  <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#0C0C0E] uppercase leading-none">
                    ROTORDYN // VIBRATION DIAGNOSTICS
                  </h2>
                  
                  <div>
                    <span className="text-[10px] text-[#E60012] uppercase tracking-widest block mb-2 font-mono font-bold">Target Problem</span>
                    <p className="text-sm text-gray-700 font-sans leading-relaxed font-semibold">
                      Processing high-frequency rotor shaft bearing waveforms, plotting spectral orbits, and diagnosing mechanical anomalies in real-time.
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#E60012] uppercase tracking-widest block mb-2 font-mono font-bold">Engineering Decision</span>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed font-medium">
                      To prevent GUI locking during high-frequency WebSocket data ingestion, we isolated the calculation loops on local worker threads and pushed simplified Plotly orbit coordinates to a PySide client, ensuring a dynamic 60 FPS visual telemetry update.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Python', 'FastAPI', 'PySide6', 'PostgreSQL', 'Qt WebEngine', 'Plotly.js'].map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 border-2 border-black rounded-none bg-white font-mono text-black font-bold shadow-[2px_2px_0px_#000000]">{t}</span>
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
                <div className="lg:col-span-6 flex flex-col gap-6 items-start">
                  <div className="flex items-center gap-3">
                    <span className="mono-tag">SYSTEM 03 // RUNTIMES</span>
                    <a
                      href="https://github.com/Basharameez/python_web_compiler"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-black hover:text-[#E60012] transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#0C0C0E] uppercase leading-none">
                    COMPILER // RUNTIME INTERFACE
                  </h2>
                  
                  <div>
                    <span className="text-[10px] text-[#E60012] uppercase tracking-widest block mb-2 font-mono font-bold">Target Problem</span>
                    <p className="text-sm text-gray-700 font-sans leading-relaxed font-semibold">
                      Executing client-submitted Python code logs inside web sandboxes, capturing stdout variables streams, and converting plotting structures into browser visual objects.
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#E60012] uppercase tracking-widest block mb-2 font-mono font-bold">System Limitations & Warning</span>
                    <p className="text-xs text-red-500 font-sans leading-relaxed font-bold">
                      <strong>Security Isolation:</strong> This system runs using direct local `exec()` evaluation triggers. It does NOT implement kernel-level sandboxing, and must be hosted exclusively inside trusted local network environments.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Python', 'Flask', 'Matplotlib', 'Pandas', 'HTML5', 'JavaScript'].map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 border-2 border-black rounded-none bg-white font-mono text-black font-bold shadow-[2px_2px_0px_#000000]">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Spatial telemetry widget */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md p-6 slanted-panel-white rounded-none relative">
                    <div className="absolute top-2 left-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute top-2 right-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute bottom-2 left-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute bottom-2 right-2 text-[8px] text-black/30 font-mono select-none">+</div>

                    <div className="unslanted-content">
                      <span className="text-[9px] text-[#E60012] uppercase tracking-wider block border-b-2 border-black pb-2 font-bold">COMPILATION STAGE TELEMETRY</span>
                      <CompilerWidget />
                    </div>
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
                <div className="lg:col-span-6 flex flex-col gap-6 items-start">
                  <span className="mono-tag">SYSTEM 04 // AI RESEARCH</span>
                  <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#0C0C0E] uppercase leading-none">
                    EXPLAINABLE AI RESEARCH
                  </h2>
                  <p className="text-xs font-mono text-[#E60012] font-bold">
                    Published in IEEE Xplore, 2026
                  </p>
                  
                  <div>
                    <span className="text-[10px] text-[#E60012] uppercase tracking-widest block mb-2 font-mono font-bold">Target Problem</span>
                    <p className="text-sm text-gray-700 font-sans leading-relaxed font-semibold">
                      Demystifying "black box" deep learning decisions by mapping activations and features weight pathways to explain output results visually.
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#E60012] uppercase tracking-widest block mb-2 font-mono font-bold">Engineering Contribution</span>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed font-medium">
                      We developed local attention layer mapping loops that hook into active weight tensors, exporting gradient activation maps that explain output distributions.
                    </p>
                  </div>
                </div>

                {/* Neural connection map widget */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md p-6 slanted-panel-white rounded-none relative">
                    <div className="absolute top-2 left-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute top-2 right-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute bottom-2 left-2 text-[8px] text-black/30 font-mono select-none">+</div>
                    <div className="absolute bottom-2 right-2 text-[8px] text-black/30 font-mono select-none">+</div>

                    <div className="unslanted-content">
                      <span className="text-[9px] text-[#E60012] uppercase tracking-wider block border-b-2 border-black pb-2 font-bold">NEURAL ATTENTION MATRIX</span>
                      <XaiWidget />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. CONTACT & COMMUNICATION SIGNALS */}
            <div
              ref={sectionRefs[6]}
              className="min-h-[80vh] flex flex-col justify-between max-w-7xl mx-auto px-6 pt-24 pb-12 z-10 w-full"
            >
              <div className="max-w-2xl my-auto flex flex-col gap-6 items-start">
                <span className="mono-tag">SECTION 04 // TRANSMISSION</span>
                <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#0C0C0E] uppercase leading-none">
                  ESTABLISH DATA SIGNAL
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed font-sans font-semibold max-w-lg">
                  Initiate full-time software engineering communications or review telemetry schemas. Currently open to relocation and onsite roles.
                </p>
              </div>

              {/* Minimalist contact links bar */}
              <div className="border-t border-black pt-12 flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-xs select-none">
                <div className="flex gap-6 items-center font-bold">
                  <a
                    href="https://github.com/Basharameez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#E60012] transition-colors"
                  >
                    GitHub Registry
                  </a>
                  <a
                    href="https://linkedin.com/in/shaik-rameez-basha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#E60012] transition-colors"
                  >
                    LinkedIn Node
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-black font-bold">shaikbashah20@gmail.com</span>
                  <div className="flex gap-2">
                    <a
                      href="mailto:shaikbashah20@gmail.com"
                      className="px-4 py-2 border-2 border-black hover:bg-[#E60012] hover:text-white font-black bg-white rounded-none shadow-[3px_3px_0px_#000000] transition-all"
                    >
                      Signal &rarr;
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-2 border-2 border-black hover:bg-black hover:text-white bg-white rounded-none shadow-[3px_3px_0px_#000000] transition-all"
                    >
                      {copied ? <Check size={14} className="text-green-500 font-bold" /> : <Copy size={14} className="text-black" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </main>

          {/* Cinematic subtle footer bar */}
          <footer className="w-full border-t border-black py-8 text-center text-[10px] font-mono text-black uppercase tracking-widest bg-white relative z-10 select-none font-bold">
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

// 1. CodeOrigin Ingestion Flow (SVG AST Tree)
const CodeOriginWidget = () => {
  const steps = [
    { title: 'Repository Ingestion', type: 'ast.Module', lineno: '0', detail: 'Ingesting directories structure.' },
    { title: 'Parsing & AST Visitor', type: 'ast.FunctionDef', lineno: '12', detail: 'ast.parse() reads function nodes.' },
    { title: 'Structural Analysis', type: 'ast.ClassDef', lineno: '34', detail: 'Traversing class inheritance matrices.' },
    { title: 'Evidence Graph Storage', type: 'ast.Return', lineno: '72', detail: 'Exporting audit records to SQLite.' }
  ];
  const [activeStep, setActiveStep] = useState(0);

  // SVG AST Node coordinates
  const nodes = [
    { id: 1, cx: 100, cy: 25, label: 'Root' },
    { id: 2, cx: 50, cy: 75, label: 'Visitor' },
    { id: 3, cx: 150, cy: 75, label: 'Scanner' },
    { id: 4, cx: 25, cy: 125, label: 'Func' },
    { id: 5, cx: 75, cy: 125, label: 'Class' },
    { id: 6, cx: 125, cy: 125, label: 'Import' },
    { id: 7, cx: 175, cy: 125, label: 'Deco' }
  ];

  return (
    <div className="flex flex-col gap-4 mt-3">
      {/* Dynamic SVG tree visualization */}
      <div className="w-[200px] h-[150px] border-2 border-black bg-white mx-auto relative shadow-[3px_3px_0px_#000000]">
        <svg className="w-full h-full" viewBox="0 0 200 150">
          {/* Branch Lines */}
          <line x1="100" y1="25" x2="50" y2="75" stroke="#000000" strokeWidth="2" />
          <line x1="100" y1="25" x2="150" y2="75" stroke="#000000" strokeWidth="2" />
          <line x1="50" y1="75" x2="25" y2="125" stroke="#000000" strokeWidth="2" />
          <line x1="50" y1="75" x2="75" y2="125" stroke="#000000" strokeWidth="2" />
          <line x1="150" y1="75" x2="125" y2="125" stroke="#000000" strokeWidth="2" />
          <line x1="150" y1="75" x2="175" y2="125" stroke="#000000" strokeWidth="2" />

          {/* Nodes */}
          {nodes.map((n) => {
            // Determine active highlight based on step
            let isActive = false;
            if (activeStep === 0 && n.id === 1) isActive = true;
            if (activeStep === 1 && (n.id === 2 || n.id === 3)) isActive = true;
            if (activeStep === 2 && (n.id === 4 || n.id === 5)) isActive = true;
            if (activeStep === 3 && (n.id === 6 || n.id === 7)) isActive = true;

            return (
              <g key={n.id}>
                <circle
                  cx={n.cx}
                  cy={n.cy}
                  r="12"
                  fill={isActive ? '#E60012' : '#FFFFFF'}
                  stroke="#000000"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                <text
                  x={n.cx}
                  y={n.cy + 3}
                  textAnchor="middle"
                  fontSize="7"
                  fontWeight="bold"
                  fill={isActive ? '#FFFFFF' : '#000000'}
                  className="font-mono select-none"
                >
                  {n.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-none text-left border-2 border-black text-xs font-bold transition-all flex justify-between items-center ${
              activeStep === idx
                ? 'bg-[#E60012] text-white shadow-[3px_3px_0px_#000000]'
                : 'bg-white text-black hover:bg-gray-100 shadow-[3px_3px_0px_#000000]'
            }`}
          >
            <span>{idx + 1}. {s.title}</span>
          </button>
        ))}
      </div>

      {/* Metadata telemetry report box */}
      <div className="p-3 bg-white border-2 border-black rounded-none text-[10px] text-black leading-relaxed flex flex-col gap-1 shadow-[3px_3px_0px_#000000]">
        <div><strong>Active Node:</strong> <span className="text-[#E60012] font-bold">{steps[activeStep].type}</span></div>
        <div><strong>Line Number:</strong> <span className="font-bold">{steps[activeStep].lineno}</span></div>
        <div><strong>Telemetry:</strong> {steps[activeStep].detail}</div>
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
    <div className="flex flex-col gap-4 mt-3">
      <div className="w-[180px] h-[180px] border-2 border-black rounded-none bg-white relative mx-auto flex items-center justify-center overflow-hidden shadow-[4px_4px_0px_#000000]">
        <svg className="w-full h-full">
          {/* Diagnostic coordinate ticks */}
          <line x1="0" y1="90" x2="180" y2="90" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
          <line x1="90" y1="0" x2="90" y2="180" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
          <line x1="90" y1="40" x2="95" y2="40" stroke="#000000" strokeWidth="1.5" />
          <line x1="90" y1="140" x2="95" y2="140" stroke="#000000" strokeWidth="1.5" />
          <line x1="40" y1="90" x2="40" y2="95" stroke="#000000" strokeWidth="1.5" />
          <line x1="140" y1="90" x2="140" y2="95" stroke="#000000" strokeWidth="1.5" />
          
          <circle cx="90" cy="90" r="25" stroke="rgba(0,0,0,0.1)" fill="none" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="90" cy="90" r="50" stroke="rgba(0,0,0,0.1)" fill="none" strokeWidth="1" strokeDasharray="3,3" />
          <polyline points={points.map(p => p.split(',').map(n => Number(n)*0.9).join(',')).join(' ')} fill="none" stroke="#E60012" strokeWidth="2.5" />
        </svg>
        <span className="absolute bottom-2 left-2 text-[8px] text-black font-black tracking-wider">SPECTRUM ORBIT TRACK</span>
      </div>

      {/* Real-time telemetry values */}
      <div className="grid grid-cols-2 gap-2 text-[9px] uppercase border-y border-black py-2 my-1">
        <div><strong>Speed:</strong> 3000 RPM</div>
        <div><strong>Radial Amp:</strong> {amp} &mu;m</div>
        <div><strong>Harmonic:</strong> 1x Vector</div>
        <div><strong>Status:</strong> Nominal</div>
      </div>

      <div className="flex flex-col gap-2 text-xs font-bold">
        <div className="flex justify-between items-center text-black">
          <span>Speed Factor</span>
          <input
            type="range" min="1" max="4" step="1"
            value={freq} onChange={(e) => setFreq(Number(e.target.value))}
            className="w-24 accent-[#E60012]"
          />
        </div>
        <div className="flex justify-between items-center text-black">
          <span>Wave Amplitude</span>
          <input
            type="range" min="20" max="75"
            value={amp} onChange={(e) => setAmp(Number(e.target.value))}
            className="w-24 accent-[#E60012]"
          />
        </div>
        <div className="flex justify-between items-center text-black">
          <span>Phase Displacement</span>
          <input
            type="range" min="0" max="3" step="0.1"
            value={phase} onChange={(e) => setPhase(Number(e.target.value))}
            className="w-24 accent-[#E60012]"
          />
        </div>
      </div>
    </div>
  );
};

// 3. Compiler Execution flow with IDE Code Editor
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
    <div className="flex flex-col gap-3 mt-3">
      {/* Mock IDE Code Editor container */}
      <div className="border-2 border-black bg-[#0c0c0e] text-white p-3 font-mono text-[9px] leading-relaxed shadow-[3px_3px_0px_#000000]">
        <div className="flex justify-between items-center border-b border-white/10 pb-1.5 mb-1.5 text-gray-500 uppercase text-[7px] tracking-wider">
          <span>main.py</span>
          <span>python 3.12</span>
        </div>
        <div className="flex gap-3">
          <div className="text-gray-600 select-none text-right">
            01<br />02<br />03<br />04
          </div>
          <div className="text-gray-300">
            <span className="text-[#FF1744]">import</span> ast, os<br />
            <span className="text-[#FF1744]">def</span> <span className="text-[#00F0FF]">audit_repo</span>(path):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;tree = ast.parse(open(path).read())<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FF1744]">return</span> tree
          </div>
        </div>
      </div>

      <button
        onClick={runCodeSimulation}
        disabled={running}
        className="w-full py-2.5 bg-[#E60012] text-white border-2 border-black text-xs font-black uppercase rounded-none shadow-[3px_3px_0px_#000000] hover:bg-red-700 transition-all active:scale-[0.98]"
      >
        {running ? 'Executing Code...' : 'Simulate Web Compiler'}
      </button>

      <div className="h-40 border-2 border-black bg-white rounded-none p-3 font-mono text-[10px] text-black overflow-y-auto flex flex-col gap-1.5 leading-relaxed shadow-[3px_3px_0px_#000000] font-semibold">
        {outputs.map((line, idx) => (
          <div key={idx} className="flex gap-1.5 items-start">
            <span className="text-[#E60012] font-black">&gt;</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. Neural interpretation activation matrix (SVG layered matrix)
const XaiWidget = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Activation metrics
  const activations = [
    { name: 'Input Pixel [0,0]', weights: [0.85, 0.12, 0.03] },
    { name: 'Input Pixel [1,0]', weights: [0.35, 0.50, 0.15] },
    { name: 'Input Pixel [0,1]', weights: [0.10, 0.40, 0.50] },
    { name: 'Input Pixel [1,1]', weights: [0.05, 0.15, 0.80] }
  ];

  return (
    <div className="flex flex-col gap-4 text-xs font-mono mt-3">
      {/* SVG Neural Layer Attraction network */}
      <div className="w-[200px] h-[140px] border-2 border-black bg-white mx-auto relative shadow-[3px_3px_0px_#000000]">
        <svg className="w-full h-full" viewBox="0 0 200 140">
          {/* Layer 1 Nodes (Inputs) */}
          <circle cx="30" cy="25" r="7" fill={hoveredNode === 0 ? '#E60012' : '#FFFFFF'} stroke="#000000" strokeWidth="2" onMouseEnter={() => setHoveredNode(0)} onMouseLeave={() => setHoveredNode(null)} />
          <circle cx="30" cy="55" r="7" fill={hoveredNode === 1 ? '#E60012' : '#FFFFFF'} stroke="#000000" strokeWidth="2" onMouseEnter={() => setHoveredNode(1)} onMouseLeave={() => setHoveredNode(null)} />
          <circle cx="30" cy="85" r="7" fill={hoveredNode === 2 ? '#E60012' : '#FFFFFF'} stroke="#000000" strokeWidth="2" onMouseEnter={() => setHoveredNode(2)} onMouseLeave={() => setHoveredNode(null)} />
          <circle cx="30" cy="115" r="7" fill={hoveredNode === 3 ? '#E60012' : '#FFFFFF'} stroke="#000000" strokeWidth="2" onMouseEnter={() => setHoveredNode(3)} onMouseLeave={() => setHoveredNode(null)} />

          {/* Layer 2 Nodes (Hidden) */}
          <circle cx="100" cy="40" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <circle cx="100" cy="70" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <circle cx="100" cy="100" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />

          {/* Layer 3 Nodes (Output) */}
          <circle cx="170" cy="55" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <circle cx="170" cy="85" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />

          {/* Pulsing connection lines on input node hover */}
          {hoveredNode !== null && (
            <g>
              <line x1="30" y1={25 + hoveredNode * 30} x2="100" y2="40" stroke="#E60012" strokeWidth="1.5" strokeDasharray="3,3" />
              <line x1="30" y1={25 + hoveredNode * 30} x2="100" y2="70" stroke="#E60012" strokeWidth="1.5" strokeDasharray="3,3" />
              <line x1="30" y1={25 + hoveredNode * 30} x2="100" y2="100" stroke="#E60012" strokeWidth="1.5" strokeDasharray="3,3" />
              
              <line x1="100" y1="70" x2="170" y2="55" stroke="#E60012" strokeWidth="1" />
              <line x1="100" y1="70" x2="170" y2="85" stroke="#E60012" strokeWidth="1" />
            </g>
          )}
        </svg>
      </div>

      {/* Dynamic Telemetry report panel */}
      <div className="p-3 border-2 border-black bg-white rounded-none flex flex-col gap-2 min-h-[90px] text-[10px] shadow-[3px_3px_0px_#000000]">
        {hoveredNode !== null ? (
          <>
            <span className="text-[8px] text-[#E60012] font-black uppercase tracking-wider">Estimated Attention Tensors</span>
            <div className="flex flex-col gap-0.5 text-black font-bold">
              <div>Source Unit: {activations[hoveredNode].name}</div>
              <div>Output Layer Channel 1: {activations[hoveredNode].weights[0]}</div>
              <div>Output Layer Channel 2: {activations[hoveredNode].weights[1]}</div>
              <div>Output Layer Channel 3: {activations[hoveredNode].weights[2]}</div>
            </div>
          </>
        ) : (
          <div className="text-black font-semibold flex items-center justify-center h-full min-h-[60px] text-center uppercase tracking-wide text-[9px]">
            Hover over an input node inside the SVG diagram to trace active neural decision pathways.
          </div>
        )}
      </div>
    </div>
  );
};
