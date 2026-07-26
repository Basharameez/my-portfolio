import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BootScreen } from './components/BootScreen';
import { MorphingParticles } from './components/MorphingParticles';
import { Copy, Check, ExternalLink, Cpu, BookOpen } from 'lucide-react';

export default function App() {
  const [booting, setBooting] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  // Attributes console selection
  const [selectedAttribute, setSelectedAttribute] = useState(0);

  // Selected mission expansion
  const [activeMission, setActiveMission] = useState(0);

  // Email copy utility
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('shaikbashah20@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Section Refs for scroll spying
  const sectionRefs = [
    useRef<HTMLDivElement>(null), // 0. Intro
    useRef<HTMLDivElement>(null), // 1. Attributes
    useRef<HTMLDivElement>(null), // 2. Missions
    useRef<HTMLDivElement>(null), // 3. Architecture
    useRef<HTMLDivElement>(null), // 4. Research
    useRef<HTMLDivElement>(null), // 5. Experience
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
        { threshold: 0.3 }
      );

      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [booting]);

  // Skill domains metadata
  const attributes = [
    {
      name: 'SOFTWARE ENGINEERING',
      short: 'Core code quality, clean design patterns, and stable pipeline integrations.',
      projects: ['RotorDyn', 'CodeOrigin'],
      techs: ['Python', 'FastAPI', 'PostgreSQL', 'Design Patterns']
    },
    {
      name: 'AI / MACHINE LEARNING',
      short: 'Deep model interpretation, explainable activation mapping, and parameter tuning.',
      projects: ['Explainable AI Research'],
      techs: ['PyTorch', 'NumPy', 'Tensor Analysis', 'Attention Layers']
    },
    {
      name: 'FULL-STACK SYSTEMS',
      short: 'Dynamic UI components, low-latency REST backends, and modular database structures.',
      projects: ['CodeOrigin', 'Student Info Portal'],
      techs: ['React', 'TypeScript', 'FastAPI', 'TailwindCSS', 'SQLite']
    },
    {
      name: 'DEVELOPER TOOLS',
      short: 'Static AST tree audits, runtime redirection hooks, and custom compile terminals.',
      projects: ['CodeOrigin', 'Python Web Compiler'],
      techs: ['Python AST', 'Compiler Runtimes', 'Token Parsers', 'Flask']
    },
    {
      name: 'DATA PROCESSING',
      short: 'Large spreadsheet parsing, relational DB schemas, and interactive prototyping notebooks.',
      projects: ['Student Info Portal', 'INTEL_3'],
      techs: ['Pandas', 'Matplotlib', 'Jupyter', 'ipywidgets', 'SQLite']
    },
    {
      name: 'ENGINEERING SOFTWARE',
      short: 'Sanitized mechanical rotation analysis, spectral orbit wave charts, and asynchronous UI workers.',
      projects: ['RotorDyn'],
      techs: ['PySide6', 'Qt WebEngine', 'Plotly.js', 'WebSocket Telemetry']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0C0C0E] text-[#F4F4F6] selection:bg-[#E60012]/30 selection:text-white relative overflow-x-hidden">
      <AnimatePresence>
        {booting && (
          <BootScreen onComplete={() => setBooting(false)} />
        )}
      </AnimatePresence>

      {!booting && (
        <div className="relative w-full">
          {/* Morphing Particles Background */}
          <MorphingParticles activeSection={activeSection} />

          {/* Sticky Navigation Overlay */}
          <header className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
            <nav className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto select-none">
              <span className="font-mono text-xs font-bold tracking-widest text-[#F4F4F6] hover:text-[#E60012] bg-[#141417] px-3.5 py-2 border-2 border-black shadow-[4px_4px_8px_#060608]">
                SRB // <span className="text-[#E60012] font-black">TACTICAL</span>
              </span>
              <div className="flex gap-4 font-mono text-[9px] tracking-wider text-[#F4F4F6] bg-[#141417] p-2.5 border-2 border-black shadow-[4px_4px_8px_#060608] uppercase font-bold">
                <button
                  onClick={() => sectionRefs[0].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#E60012] transition-colors ${activeSection === 0 ? 'text-[#E60012]' : ''}`}
                >
                  Intro
                </button>
                <button
                  onClick={() => sectionRefs[1].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#E60012] transition-colors ${activeSection === 1 ? 'text-[#E60012]' : ''}`}
                >
                  Attributes
                </button>
                <button
                  onClick={() => sectionRefs[2].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#E60012] transition-colors ${activeSection === 2 ? 'text-[#E60012]' : ''}`}
                >
                  Missions
                </button>
                <button
                  onClick={() => sectionRefs[3].current?.scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-[#E60012] transition-colors ${activeSection === 3 ? 'text-[#E60012]' : ''}`}
                >
                  Architecture
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

          {/* Main Visual container */}
          <main className="relative z-10 w-full flex flex-col">
            
            {/* SCENE 01 — CHARACTER INTRODUCTION */}
            <div
              ref={sectionRefs[0]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 select-none relative z-10 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col gap-6 items-start">
                  <div className="flex gap-2">
                    <span className="mono-tag bg-[#E60012] text-white px-2.5 py-0.5 border-2 border-black inline-block shadow-[3px_3px_6px_#060608]">
                      ENGINE_ACTIVE // ID_0x1
                    </span>
                    <span className="mono-tag bg-black text-[#FFD600] px-2.5 py-0.5 border-2 border-black inline-block shadow-[3px_3px_6px_#060608]">
                      SYS_SECURE // NO_MALWARE
                    </span>
                  </div>

                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-sans font-black tracking-tighter text-[#F4F4F6] uppercase leading-none">
                    SHAIK<br />
                    RAMEEZ<br />
                    <span className="bg-[#E60012] text-white px-4 py-1.5 border-4 border-black inline-block shadow-[8px_8px_16px_#060608] rotate-[-1deg] translate-x-1">
                      BASHA
                    </span>
                  </h1>

                  <div className="flex flex-col border-l-4 border-[#E60012] pl-4 leading-snug">
                    <span className="text-xs text-gray-400 font-mono tracking-wider font-bold">SOFTWARE ENGINEER</span>
                    <span className="text-sm font-semibold tracking-tight text-gray-200">I BUILD SYSTEMS FOR COMPLEX PROBLEMS.</span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-400 max-w-xl font-medium leading-relaxed">
                    Specialized in structural codebase AST analytics, high-frequency industrial telemetry visuals, code execution sandboxing tools, and explainable neural activations research.
                  </p>

                  <div className="flex flex-wrap gap-4 font-mono text-[10px] mt-2">
                    <button
                      onClick={() => sectionRefs[1].current?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-6 py-3.5 bg-[#E60012] text-white border-3 border-black font-black uppercase tracking-wider rounded-none shadow-[5px_5px_10px_#060608] hover:translate-y-[-2px] hover:shadow-[7px_7px_12px_#060608] transition-all active:scale-[0.98]"
                    >
                      Enter System &darr;
                    </button>
                    <a
                      href="https://github.com/Basharameez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-[#141417] text-[#F4F4F6] border-3 border-black font-black uppercase tracking-wider rounded-none shadow-[5px_5px_10px_#060608] hover:bg-black hover:text-[#E60012] transition-all flex items-center gap-2"
                    >
                      View GitHub <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Styled Professional Portrait composition */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-64 h-80 outline outline-3 outline-offset-8 outline-[#E60012] rotate-[-1deg] shadow-[12px_12px_24px_#060608]">
                    {/* Layered sheets backdrop */}
                    <div className="absolute inset-0 border-3 border-black bg-black translate-x-3 translate-y-3" />
                    <img
                      src="/avatar.jpg"
                      alt="Shaik Rameez Basha"
                      className="absolute inset-0 w-full h-full object-cover border-3 border-black bg-[#141417] z-10"
                    />
                    
                    {/* Character Tag Overlay */}
                    <div className="absolute bottom-4 left-4 z-20 bg-black text-[#FFD600] border-2 border-black px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider shadow-[3px_3px_0px_#E60012]">
                      COHORT: 2026 // B.TECH CSE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SCENE 02 — ENGINEERING ATTRIBUTES */}
            <div
              ref={sectionRefs[1]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="flex flex-col gap-3 mb-10 items-start">
                <span className="mono-tag">SCENE 02 // CHARACTER ATTRIBUTES</span>
                <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#F4F4F6] uppercase leading-none">
                  SYSTEM CORE ATTRIBUTES
                </h2>
                <div className="hazard-stripes-yellow w-40" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left: Attribute Select list */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  {attributes.map((attr, idx) => {
                    const isSelected = selectedAttribute === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedAttribute(idx)}
                        className={`p-4 rounded-none text-left text-xs font-bold border-2 transition-all flex items-center justify-between group ${
                          isSelected
                            ? 'bg-[#E60012] border-black text-white shadow-[4px_4px_8px_#060608] translate-x-1.5'
                            : 'bg-[#141417] border-black/40 text-gray-400 hover:text-[#F4F4F6] hover:bg-[#1C1C22] shadow-[4px_4px_8px_#060608]'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <Cpu size={14} className={isSelected ? 'text-[#FFD600]' : 'text-gray-500'} />
                          {attr.name}
                        </span>
                        <span className="text-[8px] font-mono opacity-80 group-hover:translate-x-1 transition-transform">
                          {isSelected ? 'ACTIVE' : 'SELECT'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Right: Soft details console */}
                <div className="lg:col-span-7 flex">
                  <div className="w-full p-6 bg-[#141417] border-3 border-black shadow-[8px_8px_16px_#060608] flex flex-col gap-6 justify-between relative overflow-hidden">
                    {/* Corners HUD crosshairs */}
                    <div className="absolute top-2 left-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute top-2 right-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute bottom-2 left-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute bottom-2 right-2 text-[8px] text-gray-600 font-mono">[ + ]</div>

                    <div className="flex flex-col gap-4">
                      <span className="text-[9px] text-[#E60012] font-black uppercase tracking-wider block font-mono">
                        TACTICAL PARAMETER DETAILS // ATTRIBUTE_{selectedAttribute}
                      </span>
                      
                      <h3 className="text-2xl font-black text-[#F4F4F6] uppercase tracking-tight">
                        {attributes[selectedAttribute].name}
                      </h3>
                      
                      <div className="neumorphic-sunken-dark p-4 rounded-none text-xs leading-relaxed text-gray-400 font-medium border-l-4 border-[#FFD600]">
                        {attributes[selectedAttribute].short}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-black pt-4">
                      <div>
                        <span className="text-[9px] text-gray-500 block uppercase font-mono mb-2">Connected systems:</span>
                        <div className="flex flex-wrap gap-2">
                          {attributes[selectedAttribute].projects.map((p, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 border border-black bg-black text-[#FFD600] font-mono font-bold">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[9px] text-gray-500 block uppercase font-mono mb-2">Primary tech stack:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {attributes[selectedAttribute].techs.map((t, i) => (
                            <span key={i} className="text-[9px] px-2.5 py-0.5 bg-white/5 border border-white/5 text-gray-400 font-mono">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SCENE 03 — PROJECT MISSIONS */}
            <div
              ref={sectionRefs[2]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="flex flex-col gap-3 mb-10 items-start">
                <span className="mono-tag">SCENE 03 // SYSTEMS MISSIONS</span>
                <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#F4F4F6] uppercase leading-none">
                  OPERATIONAL MISSIONS
                </h2>
                <div className="hazard-stripes-yellow w-40" />
              </div>

              {/* Selector Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-black pb-4 mb-8">
                {['CodeOrigin', 'RotorDyn', 'Web Compiler', 'Info Portal', 'INTEL_3'].map((n, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMission(i)}
                    className={`px-4 py-2 border-2 border-black text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
                      activeMission === i
                        ? 'bg-[#E60012] text-white shadow-[3px_3px_6px_#060608]'
                        : 'bg-[#141417] text-gray-400 hover:text-[#F4F4F6] shadow-[3px_3px_6px_#060608]'
                    }`}
                  >
                    M-0{i+1} // {n}
                  </button>
                ))}
              </div>

              {/* Active Mission Display */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visual Widgets Console */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md p-6 bg-[#141417] border-3 border-black shadow-[8px_8px_16px_#060608] relative">
                    <div className="absolute top-2 left-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute top-2 right-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute bottom-2 left-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute bottom-2 right-2 text-[8px] text-gray-600 font-mono">[ + ]</div>

                    <div className="unslanted-content">
                      <span className="text-[9px] text-[#E60012] font-black uppercase tracking-wider block border-b-2 border-black pb-2 font-mono">
                        MISSION TELEMETRY SIMULATOR
                      </span>
                      {activeMission === 0 && <CodeOriginWidget />}
                      {activeMission === 1 && <RotorDynWidget />}
                      {activeMission === 2 && <CompilerWidget />}
                      {activeMission === 3 && <StudentPortalWidget />}
                      {activeMission === 4 && <Intel3Widget />}
                    </div>
                  </div>
                </div>

                {/* Mission Details Panel */}
                <div className="lg:col-span-6 flex flex-col gap-6 items-start">
                  {activeMission === 0 && (
                    <>
                      <div className="flex gap-2">
                        <span className="mono-tag bg-[#E60012] text-white px-2 py-0.5 border border-black">DEVTOOLS</span>
                        <a href="https://github.com/Basharameez/codeorigin" target="_blank" rel="noopener noreferrer" className="p-1 text-gray-400 hover:text-[#E60012]">
                          <ExternalLink size={14} />
                        </a>
                      </div>
                      <h3 className="text-3xl font-black text-[#F4F4F6] uppercase tracking-tight">
                        CODEORIGIN // REPOSITORY INTELLIGENCE
                      </h3>
                      <p className="text-sm text-gray-400 font-sans leading-relaxed font-medium">
                        A backend static analyzer designed to evaluate repositories across architecture, license compliance, code coupling, and security sectors without execution dependencies.
                      </p>
                      
                      <div className="neumorphic-sunken-dark p-4 rounded-none text-xs leading-relaxed text-gray-400">
                        <strong>Engineering decision:</strong> Traversed code files using standard Python abstract syntax trees (`ast.NodeVisitor`) to inspect structural blocks directly. This guarantees preventing comment-nesting escape vectors and false regex matches.
                      </div>

                      <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
                        {['FastAPI', 'Python AST', 'React', 'TypeScript', 'SQLite'].map((t) => (
                          <span key={t} className="px-2 py-0.5 border border-black bg-black text-[#FFD600] font-bold">{t}</span>
                        ))}
                      </div>
                    </>
                  )}

                  {activeMission === 1 && (
                    <>
                      <div className="flex gap-2">
                        <span className="mono-tag bg-[#E60012] text-white px-2 py-0.5 border border-black">TELEMETRY</span>
                      </div>
                      <h3 className="text-3xl font-black text-[#F4F4F6] uppercase tracking-tight">
                        ROTORDYN // SIGNAL DIAGNOSTICS
                      </h3>
                      <p className="text-sm text-gray-400 font-sans leading-relaxed font-medium">
                        Sanitized conceptual telemetry dashboard designed to plot bearing diagnostics telemetry and high-frequency orbit waveforms.
                      </p>

                      <div className="neumorphic-sunken-dark p-4 rounded-none text-xs leading-relaxed text-red-400 font-bold border-l-4 border-[#E60012]">
                        CONFIDENTIALITY DISCLAIMER: This is a conceptual telemetry display simulation demonstrating waveform loading capabilities, built using safe and sanitized signals. No proprietary modules or customer assets are exposed.
                      </div>

                      <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
                        {['PySide6', 'Qt WebEngine', 'Plotly.js', 'FastAPI', 'WebSockets'].map((t) => (
                          <span key={t} className="px-2 py-0.5 border border-black bg-black text-[#FFD600] font-bold">{t}</span>
                        ))}
                      </div>
                    </>
                  )}

                  {activeMission === 2 && (
                    <>
                      <div className="flex gap-2">
                        <span className="mono-tag bg-[#E60012] text-white px-2 py-0.5 border border-black">RUNTIMES</span>
                        <a href="https://github.com/Basharameez/python_web_compiler" target="_blank" rel="noopener noreferrer" className="p-1 text-gray-400 hover:text-[#E60012]">
                          <ExternalLink size={14} />
                        </a>
                      </div>
                      <h3 className="text-3xl font-black text-[#F4F4F6] uppercase tracking-tight">
                        PYTHON WEB COMPILER
                      </h3>
                      <p className="text-sm text-gray-400 font-sans leading-relaxed font-medium">
                        A web runtime console that executes Python payloads and captures standard stdout/stderr streams to render matplotlib visuals in the browser.
                      </p>

                      <div className="neumorphic-sunken-dark p-4 rounded-none text-xs leading-relaxed text-red-500 font-bold border-l-4 border-[#E60012]">
                        SECURITY WARNING: This platform operates using local `exec()` evaluations in a thread context. It is designed only for local sandbox testing and contains no kernel-level virtualization blocks.
                      </div>

                      <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
                        {['Python', 'Flask Runtimes', 'Matplotlib', 'HTML5 Console'].map((t) => (
                          <span key={t} className="px-2 py-0.5 border border-black bg-black text-[#FFD600] font-bold">{t}</span>
                        ))}
                      </div>
                    </>
                  )}

                  {activeMission === 3 && (
                    <>
                      <div className="flex gap-2">
                        <span className="mono-tag bg-[#E60012] text-white px-2 py-0.5 border border-black">DATA SYSTEMS</span>
                      </div>
                      <h3 className="text-3xl font-black text-[#F4F4F6] uppercase tracking-tight">
                        STUDENT INFO PORTAL
                      </h3>
                      <p className="text-sm text-gray-400 font-sans leading-relaxed font-medium">
                        A student database processing system containing data ingestion tools to parse spreadsheets, index records, and run custom queries.
                      </p>

                      <div className="neumorphic-sunken-dark p-4 rounded-none text-xs leading-relaxed text-gray-400">
                        <strong>Implemented logic:</strong> Loaded records inside structured relational SQL schemas, implementing multi-column sorting to optimize lookup speeds.
                      </div>

                      <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
                        {['Python', 'SQLite', 'Pandas Parsing', 'Excel Readers'].map((t) => (
                          <span key={t} className="px-2 py-0.5 border border-black bg-black text-[#FFD600] font-bold">{t}</span>
                        ))}
                      </div>
                    </>
                  )}

                  {activeMission === 4 && (
                    <>
                      <div className="flex gap-2">
                        <span className="mono-tag bg-[#E60012] text-white px-2 py-0.5 border border-black">PROTOTYPES</span>
                      </div>
                      <h3 className="text-3xl font-black text-[#F4F4F6] uppercase tracking-tight">
                        INTEL_3 DATA LAB
                      </h3>
                      <p className="text-sm text-gray-400 font-sans leading-relaxed font-medium">
                        Interactive academic dataset explorer and notebook modeling prototype showcasing core query pipelines and analysis modules.
                      </p>

                      <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
                        {['SQLite', 'Jupyter Notebooks', 'ipywidgets'].map((t) => (
                          <span key={t} className="px-2 py-0.5 border border-black bg-black text-[#FFD600] font-bold">{t}</span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

              </div>
            </div>

            {/* SCENE 04 — SYSTEM ARCHITECTURE */}
            <div
              ref={sectionRefs[3]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="flex flex-col gap-3 mb-10 items-start">
                <span className="mono-tag">SCENE 04 // SYSTEM INTEGRATIONS</span>
                <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#F4F4F6] uppercase leading-none">
                  SYSTEM ARCHITECTURE
                </h2>
                <div className="hazard-stripes-yellow w-40" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Description */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <p className="text-sm text-gray-400 leading-relaxed font-semibold">
                    This schematic maps out how my software systems relate conceptually, showcasing a continuous pipeline from codebase ingestion to diagnostic output.
                  </p>
                  
                  <div className="flex flex-col gap-3 font-mono text-xs font-bold text-gray-400">
                    <div className="flex gap-2.5 items-center">
                      <span className="w-2.5 h-2.5 bg-[#E60012] border border-black" />
                      <span>CodeOrigin Auditor AST</span>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <span className="w-2.5 h-2.5 bg-[#FFD600] border border-black" />
                      <span>Compiler Runtime Stream</span>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <span className="w-2.5 h-2.5 bg-white border border-black" />
                      <span>RotorDyn Telemetry Output</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive SVG Map inside neumorphic raised container */}
                <div className="lg:col-span-7 flex justify-center">
                  <div className="w-full max-w-lg p-6 bg-[#141417] border-3 border-black shadow-[8px_8px_16px_#060608]">
                    <span className="text-[9px] text-[#E60012] font-black uppercase tracking-wider block border-b-2 border-black pb-2 font-mono mb-4">
                      CONCEPTUAL INTERFLOW PIPELINE
                    </span>
                    <ArchitectureWidget />
                  </div>
                </div>
              </div>
            </div>

            {/* SCENE 05 — RESEARCH */}
            <div
              ref={sectionRefs[4]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col gap-6 items-start">
                  <span className="mono-tag">SCENE 05 // RESEARCH LAB</span>
                  
                  <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#F4F4F6] uppercase leading-none">
                    EXPLAINABLE AI<br />
                    <span className="text-[#E60012]">RESEARCH</span>
                  </h2>

                  <div className="flex gap-2 items-center bg-black border border-black text-[#FFD600] px-3 py-1 font-mono text-[9px] font-bold tracking-wider uppercase">
                    <BookOpen size={12} /> IEEE XPLORE // PUBLISHED 2026
                  </div>

                  <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed font-semibold">
                    Demystifying neural activations by mapping convolutional features weights pathways to explain outputs dynamically.
                  </p>

                  <div className="neumorphic-sunken-dark p-4 rounded-none text-xs leading-relaxed text-gray-400">
                    <strong>Technical Contribution:</strong> Built hooks that capture gradient activation parameters inside active network nodes, exporting attraction tensors that show exactly why a model made specific prediction decisions.
                  </div>
                </div>

                {/* Interactive XAI neural trace widget */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-md p-6 bg-[#141417] border-3 border-black shadow-[8px_8px_16px_#060608] relative">
                    <div className="absolute top-2 left-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute top-2 right-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute bottom-2 left-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute bottom-2 right-2 text-[8px] text-gray-600 font-mono">[ + ]</div>

                    <div className="unslanted-content">
                      <span className="text-[9px] text-[#E60012] uppercase tracking-wider block border-b-2 border-black pb-2 font-mono">
                        NEURAL TRACE VISUALIZER
                      </span>
                      <XaiWidget />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SCENE 06 — EXPERIENCE LOGS */}
            <div
              ref={sectionRefs[5]}
              className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-24 z-10 w-full"
            >
              <div className="flex flex-col gap-3 mb-10 items-start">
                <span className="mono-tag">SCENE 06 // MISSION HISTORY</span>
                <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#F4F4F6] uppercase leading-none">
                  EXPERIENCE CHRONOLOGY
                </h2>
                <div className="hazard-stripes-yellow w-40" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* 1. AfterQuery */}
                <div className="lg:col-span-6 flex">
                  <div className="w-full p-6 bg-[#141417] border-3 border-black shadow-[8px_8px_16px_#060608] flex flex-col justify-between rounded-none relative">
                    {/* Corner decorators */}
                    <div className="absolute top-2 left-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute top-2 right-2 text-[8px] text-gray-600 font-mono">[ + ]</div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between border-b border-black pb-3">
                        <span className="text-xs font-mono font-bold text-[#E60012]">ROLE_01 // SOFTWARE ENGINEER</span>
                        <span className="text-[9px] bg-black text-[#FFD600] px-2 py-0.5 font-mono font-bold">2024 - PRESENT</span>
                      </div>
                      
                      <h3 className="text-2xl font-black text-[#F4F4F6] uppercase">AFTERQUERY</h3>
                      <p className="text-xs text-gray-400 font-sans leading-relaxed font-semibold">
                        Engineering full-stack codebase audit systems, static AST analyzers, and reactive datagrid utilities. Evolving ingest pipelines to handle structural license checks asynchronously.
                      </p>
                    </div>

                    <div className="border-t border-black pt-4 mt-6 text-[9px] text-gray-500 font-mono uppercase font-bold">
                      SYSTEMS: FastAPI &bull; React &bull; AST Audits &bull; SQL DBs
                    </div>
                  </div>
                </div>

                {/* 2. B.Tech Credentials */}
                <div className="lg:col-span-6 flex">
                  <div className="w-full p-6 bg-[#141417] border-3 border-black shadow-[8px_8px_16px_#060608] flex flex-col justify-between rounded-none relative">
                    <div className="absolute top-2 left-2 text-[8px] text-gray-600 font-mono">[ + ]</div>
                    <div className="absolute top-2 right-2 text-[8px] text-gray-600 font-mono">[ + ]</div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between border-b border-black pb-3">
                        <span className="text-xs font-mono font-bold text-[#E60012]">ROLE_02 // B.TECH COHORT</span>
                        <span className="text-[9px] bg-black text-[#FFD600] px-2 py-0.5 font-mono font-bold">2022 - 2026</span>
                      </div>
                      
                      <h3 className="text-2xl font-black text-[#F4F4F6] uppercase leading-tight">
                        NARASARAOPETA ENG COLLEGE
                      </h3>
                      <p className="text-xs text-gray-400 font-sans leading-relaxed font-semibold">
                        B.Tech Computer Science and Engineering (Artificial Intelligence) under JNTUK.
                        Academic core focused on statistical analysis, model activations, neural weights, and structural compilation.
                      </p>
                    </div>

                    <div className="border-t border-black pt-4 mt-6 text-[9px] text-[#FFD600] font-mono uppercase font-bold">
                      ACADEMIC PERFORMANCE SCORE: CGPA 7.79 / 10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SCENE 07 — CONTACT / NEXT MISSION */}
            <div
              ref={sectionRefs[6]}
              className="min-h-[80vh] flex flex-col justify-between max-w-7xl mx-auto px-6 pt-24 pb-12 z-10 w-full"
            >
              <div className="max-w-2xl my-auto flex flex-col gap-6 items-start">
                <span className="mono-tag">SECTION 07 // TRANSMISSION SIGNAL</span>
                <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#F4F4F6] uppercase leading-none">
                  ESTABLISH DATA SIGNAL
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed font-sans font-semibold max-w-lg">
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
                    className="text-[#F4F4F6] hover:text-[#E60012] transition-colors"
                  >
                    GitHub Registry
                  </a>
                  <a
                    href="https://linkedin.com/in/shaik-rameez-basha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4F4F6] hover:text-[#E60012] transition-colors"
                  >
                    LinkedIn Node
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#F4F4F6] font-bold">shaikbashah20@gmail.com</span>
                  <div className="flex gap-2">
                    <a
                      href="mailto:shaikbashah20@gmail.com"
                      className="px-4 py-2 border-2 border-black hover:bg-[#E60012] hover:text-white font-black bg-[#FFD600] text-black rounded-none shadow-[4px_4px_8px_#060608] transition-all"
                    >
                      Signal &rarr;
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-2.5 border-2 border-black hover:bg-black hover:text-[#E60012] bg-[#141417] text-white rounded-none shadow-[4px_4px_8px_#060608] transition-all active:scale-[0.96]"
                    >
                      {copied ? <Check size={14} className="text-green-500 font-bold" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </main>

          {/* Cinematic subtle footer bar */}
          <footer className="w-full border-t border-black py-8 text-center text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-[#0C0C0E] relative z-10 select-none font-bold">
            <span>&copy; {new Date().getFullYear()} Shaik Rameez Basha &bull; Systems Active</span>
          </footer>
        </div>
      )}
    </div>
  );
}

// ====================================================
// modular helper widgets
// ====================================================

// 3.1 CodeOrigin Ingestion Flow (SVG AST Tree)
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
      {/* Dynamic SVG tree visualization inside a neumorphic inset frame */}
      <div className="w-[200px] h-[150px] bg-black mx-auto relative border border-black neumorphic-sunken-dark">
        <svg className="w-full h-full" viewBox="0 0 200 150">
          {/* Branch Lines */}
          <line x1="100" y1="25" x2="50" y2="75" stroke="#33333C" strokeWidth="2" />
          <line x1="100" y1="25" x2="150" y2="75" stroke="#33333C" strokeWidth="2" />
          <line x1="50" y1="75" x2="25" y2="125" stroke="#33333C" strokeWidth="2" />
          <line x1="50" y1="75" x2="75" y2="125" stroke="#33333C" strokeWidth="2" />
          <line x1="150" y1="75" x2="125" y2="125" stroke="#33333C" strokeWidth="2" />
          <line x1="150" y1="75" x2="175" y2="125" stroke="#33333C" strokeWidth="2" />

          {/* Nodes */}
          {nodes.map((n) => {
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
                  fill={isActive ? '#E60012' : '#141417'}
                  stroke={isActive ? '#FFD600' : '#000000'}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                <text
                  x={n.cx}
                  y={n.cy + 3}
                  textAnchor="middle"
                  fontSize="7"
                  fontWeight="bold"
                  fill={isActive ? '#FFFFFF' : '#888894'}
                  className="font-mono select-none"
                >
                  {n.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Raised and pressed mechanical steps buttons */}
      <div className="grid grid-cols-2 gap-2">
        {steps.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-none text-left text-xs font-bold border-2 transition-all ${
                isActive
                  ? 'neumorphic-sunken-dark text-[#FFD600] border-black font-black'
                  : 'bg-[#141417] border-black text-gray-400 hover:text-white shadow-[3px_3px_6px_#060608]'
              }`}
            >
              <span>{idx + 1}. {s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Metadata telemetry report box inside deep sunken overlay */}
      <div className="p-3 rounded-none text-[10px] text-gray-400 leading-relaxed flex flex-col gap-1 neumorphic-sunken-dark font-bold">
        <div><strong>Active Node:</strong> <span className="text-[#E60012] font-black font-mono">{steps[activeStep].type}</span></div>
        <div><strong>Line Number:</strong> <span className="font-mono">{steps[activeStep].lineno}</span></div>
        <div><strong>Telemetry:</strong> {steps[activeStep].detail}</div>
      </div>
    </div>
  );
};

// 3.2 RotorDyn Orbit Waveforms
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
      {/* Tactical warning bar on widget */}
      <div className="hazard-stripes-yellow h-4 rotate-[-1deg]" />

      <div className="w-[180px] h-[180px] rounded-none relative mx-auto flex items-center justify-center overflow-hidden neumorphic-sunken-dark border border-black">
        <svg className="w-full h-full">
          {/* Diagnostic coordinate ticks */}
          <line x1="0" y1="90" x2="180" y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="90" y1="0" x2="90" y2="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="90" y1="40" x2="95" y2="40" stroke="#E60012" strokeWidth="1.5" />
          <line x1="90" y1="140" x2="95" y2="140" stroke="#E60012" strokeWidth="1.5" />
          <line x1="40" y1="90" x2="40" y2="95" stroke="#E60012" strokeWidth="1.5" />
          <line x1="140" y1="90" x2="140" y2="95" stroke="#E60012" strokeWidth="1.5" />
          
          <circle cx="90" cy="90" r="25" stroke="rgba(255,255,255,0.04)" fill="none" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="90" cy="90" r="50" stroke="rgba(255,255,255,0.04)" fill="none" strokeWidth="1" strokeDasharray="3,3" />
          <polyline points={points.map(p => p.split(',').map(n => Number(n)*0.9).join(',')).join(' ')} fill="none" stroke="#E60012" strokeWidth="2.5" />
        </svg>
        <span className="absolute bottom-2 left-2 text-[8px] text-gray-500 font-black tracking-wider font-mono">SPECTRUM ORBIT TRACK</span>
      </div>

      {/* Real-time telemetry values with Free Fire accent colors inside inset slots */}
      <div className="grid grid-cols-2 gap-2 text-[9px] uppercase border-y-2 border-black py-2 my-1 font-bold">
        <div><strong>Speed:</strong> 3000 RPM</div>
        <div><strong>Radial Amp:</strong> <span className="bg-[#FFD600] text-black px-1 border border-black">{amp} &mu;m</span></div>
        <div><strong>Harmonic:</strong> 1x Vector</div>
        <div><strong>Status:</strong> <span className="text-[#E60012]">Nominal</span></div>
      </div>

      <div className="flex flex-col gap-2 text-xs font-bold text-gray-400">
        <div className="flex justify-between items-center">
          <span>Speed Factor</span>
          <input
            type="range" min="1" max="4" step="1"
            value={freq} onChange={(e) => setFreq(Number(e.target.value))}
            className="w-24 accent-[#FFD600]"
          />
        </div>
        <div className="flex justify-between items-center">
          <span>Wave Amplitude</span>
          <input
            type="range" min="20" max="75"
            value={amp} onChange={(e) => setAmp(Number(e.target.value))}
            className="w-24 accent-[#FFD600]"
          />
        </div>
        <div className="flex justify-between items-center">
          <span>Phase Displacement</span>
          <input
            type="range" min="0" max="3" step="0.1"
            value={phase} onChange={(e) => setPhase(Number(e.target.value))}
            className="w-24 accent-[#FFD600]"
          />
        </div>
      </div>
    </div>
  );
};

// 3.3 Compiler Execution flow with IDE Code Editor
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
        <div className="flex justify-between items-center border-b border-white/10 pb-1.5 mb-1.5 text-[#FFD600] uppercase text-[7px] tracking-wider font-bold">
          <span>main.py</span>
          <span>python 3.12</span>
        </div>
        <div className="flex gap-3">
          <div className="text-gray-600 select-none text-right">
            01<br />02<br />03<br />04
          </div>
          <div className="text-gray-300">
            <span className="text-[#FF1744]">import</span> ast, os<br />
            <span className="text-[#FF1744]">def</span> <span className="text-[#FFD600]">audit_repo</span>(path):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;tree = ast.parse(open(path).read())<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FF1744]">return</span> tree
          </div>
        </div>
      </div>

      <button
        onClick={runCodeSimulation}
        disabled={running}
        className="w-full py-2.5 bg-[#E60012] text-white border-2 border-black text-xs font-black uppercase rounded-none shadow-[4px_4px_8px_#060608] hover:bg-red-700 transition-all active:scale-[0.98]"
      >
        {running ? 'Executing Code...' : 'Simulate Web Compiler'}
      </button>

      <div className="h-40 p-3 font-mono text-[10px] text-gray-300 overflow-y-auto flex flex-col gap-1.5 leading-relaxed neumorphic-sunken-dark font-semibold">
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

// 3.4 Student Info Portal Widget
const StudentPortalWidget = () => {
  const records = [
    { id: '101', name: 'Shaik Basha', cgp: '7.79', status: 'COMPLETED' },
    { id: '102', name: 'Rameez', cgp: '8.12', status: 'ACTIVE' },
    { id: '103', name: 'Ameer', cgp: '7.45', status: 'PENDING' }
  ];

  return (
    <div className="flex flex-col gap-3 mt-3 font-mono text-xs">
      <div className="neumorphic-sunken-dark p-3 rounded-none flex flex-col gap-2 font-bold text-gray-400">
        <div className="flex justify-between border-b border-black pb-1.5 text-[10px] text-gray-500">
          <span>UID</span>
          <span>STUDENT NAME</span>
          <span>CGPA</span>
        </div>
        {records.map((r, i) => (
          <div key={i} className="flex justify-between items-center text-[10px]">
            <span className="text-[#E60012]">{r.id}</span>
            <span className="text-[#F4F4F6]">{r.name}</span>
            <span className="bg-black text-[#FFD600] px-1 border border-black">{r.cgp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 3.5 Intel_3 Data Prototype Widget
const Intel3Widget = () => {
  const [dataPoints, setDataPoints] = useState([45, 62, 51, 80]);

  const randomizePoints = () => {
    setDataPoints(dataPoints.map(() => Math.floor(20 + Math.random() * 70)));
  };

  return (
    <div className="flex flex-col gap-4 mt-3 font-mono text-xs">
      <button
        onClick={randomizePoints}
        className="py-2 px-4 bg-[#141417] hover:bg-black text-[#FFD600] border-2 border-black font-bold uppercase shadow-[3px_3px_6px_#060608]"
      >
        Update Simulation Data
      </button>
      <div className="neumorphic-sunken-dark p-4 rounded-none h-32 flex items-end gap-3 justify-center">
        {dataPoints.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1.5 w-8">
            <div
              className="w-full bg-[#E60012] border border-black transition-all duration-300"
              style={{ height: `${val}px` }}
            />
            <span className="text-[8px] text-gray-500">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. Explainable AI Activation Matrix (SVG layers)
const XaiWidget = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const activations = [
    { name: 'Input Pixel [0,0]', weights: [0.85, 0.12, 0.03] },
    { name: 'Input Pixel [1,0]', weights: [0.35, 0.50, 0.15] },
    { name: 'Input Pixel [0,1]', weights: [0.10, 0.40, 0.50] },
    { name: 'Input Pixel [1,1]', weights: [0.05, 0.15, 0.80] }
  ];

  return (
    <div className="flex flex-col gap-4 text-xs font-mono mt-3">
      {/* SVG Neural Layer Attention Network inside deep inset panel */}
      <div className="w-[200px] h-[140px] relative neumorphic-sunken-dark border border-black">
        <svg className="w-full h-full" viewBox="0 0 200 140">
          {/* Layer 1 Nodes */}
          <circle cx="30" cy="25" r="7" fill={hoveredNode === 0 ? '#E60012' : '#141417'} stroke="#000000" strokeWidth="2" onMouseEnter={() => setHoveredNode(0)} onMouseLeave={() => setHoveredNode(null)} />
          <circle cx="30" cy="55" r="7" fill={hoveredNode === 1 ? '#E60012' : '#141417'} stroke="#000000" strokeWidth="2" onMouseEnter={() => setHoveredNode(1)} onMouseLeave={() => setHoveredNode(null)} />
          <circle cx="30" cy="85" r="7" fill={hoveredNode === 2 ? '#E60012' : '#141417'} stroke="#000000" strokeWidth="2" onMouseEnter={() => setHoveredNode(2)} onMouseLeave={() => setHoveredNode(null)} />
          <circle cx="30" cy="115" r="7" fill={hoveredNode === 3 ? '#E60012' : '#141417'} stroke="#000000" strokeWidth="2" onMouseEnter={() => setHoveredNode(3)} onMouseLeave={() => setHoveredNode(null)} />

          {/* Layer 2 Nodes (Hidden) */}
          <circle cx="100" cy="40" r="7" fill="#141417" stroke="#000000" strokeWidth="2" />
          <circle cx="100" cy="70" r="7" fill="#141417" stroke="#000000" strokeWidth="2" />
          <circle cx="100" cy="100" r="7" fill="#141417" stroke="#000000" strokeWidth="2" />

          {/* Layer 3 Nodes (Output) */}
          <circle cx="170" cy="55" r="7" fill="#141417" stroke="#000000" strokeWidth="2" />
          <circle cx="170" cy="85" r="7" fill="#141417" stroke="#000000" strokeWidth="2" />

          {hoveredNode !== null && (
            <g>
              <line x1="30" y1={25 + hoveredNode * 30} x2="100" y2="40" stroke="#FFD600" strokeWidth="1.5" strokeDasharray="3,3" />
              <line x1="30" y1={25 + hoveredNode * 30} x2="100" y2="70" stroke="#FFD600" strokeWidth="1.5" strokeDasharray="3,3" />
              <line x1="30" y1={25 + hoveredNode * 30} x2="100" y2="100" stroke="#FFD600" strokeWidth="1.5" strokeDasharray="3,3" />
              
              <line x1="100" y1="70" x2="170" y2="55" stroke="#E60012" strokeWidth="1" />
              <line x1="100" y1="70" x2="170" y2="85" stroke="#E60012" strokeWidth="1" />
            </g>
          )}
        </svg>
      </div>

      <div className="p-3 flex flex-col gap-2 min-h-[90px] text-[10px] neumorphic-sunken-dark font-bold text-gray-400">
        {hoveredNode !== null ? (
          <>
            <span className="text-[8px] text-[#E60012] font-black uppercase tracking-wider">Estimated Attention Tensors</span>
            <div className="flex flex-col gap-0.5 text-[#F4F4F6] font-bold">
              <div>Source Unit: {activations[hoveredNode].name}</div>
              <div>Output Channel 1: {activations[hoveredNode].weights[0]}</div>
              <div>Output Channel 2: {activations[hoveredNode].weights[1]}</div>
              <div>Output Channel 3: {activations[hoveredNode].weights[2]}</div>
            </div>
          </>
        ) : (
          <div className="text-gray-500 font-semibold flex items-center justify-center h-full min-h-[60px] text-center uppercase tracking-wide text-[9px] leading-relaxed">
            Hover over an input node inside the SVG diagram to trace active neural decision pathways.
          </div>
        )}
      </div>
    </div>
  );
};

// 4. System Architecture SVG Flowchart
const ArchitectureWidget = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    { id: 'repos', label: 'CODE REPOS', cx: 70, cy: 30, desc: 'CodeOrigin scans repositories directly to fetch raw code structures.' },
    { id: 'ast', label: 'AST PARSER', cx: 70, cy: 80, desc: 'Parses modules static syntax blocks via NodeVisitor class instances.' },
    { id: 'db', label: 'RELATIONAL DB', cx: 180, cy: 80, desc: 'Stores coupling metrics and license audit results into relational schemas.' },
    { id: 'runtime', label: 'COMPILER RUNTIME', cx: 180, cy: 140, desc: 'Captures and compiles code logs on the terminal playground.' },
    { id: 'telemetry', label: 'ROTORDYN SIGNAL', cx: 70, cy: 140, desc: 'Diagnostic telemetry waveforms plot mechanical rotation speeds.' }
  ];

  return (
    <div className="flex flex-col gap-4 font-mono text-xs text-gray-400">
      <div className="w-full h-44 bg-black relative neumorphic-sunken-dark border border-black">
        <svg className="w-full h-full" viewBox="0 0 250 180">
          {/* Connector Paths */}
          <path d="M 70 30 L 70 80" stroke="#E60012" strokeWidth="2" strokeDasharray="3,3" />
          <path d="M 70 80 L 180 80" stroke="#FFD600" strokeWidth="2" />
          <path d="M 180 80 L 180 140" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M 180 140 L 70 140" stroke="#E60012" strokeWidth="2" strokeDasharray="3,3" />

          {/* Interactive Node Boxes */}
          {nodes.map((node) => {
            const isHovered = activeNode === node.id;
            return (
              <g
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className="cursor-pointer"
              >
                <rect
                  x={node.cx - 45}
                  y={node.cy - 12}
                  width="90"
                  height="24"
                  fill={isHovered ? '#E60012' : '#141417'}
                  stroke={isHovered ? '#FFD600' : '#000000'}
                  strokeWidth="2"
                  className="transition-colors duration-200"
                />
                <text
                  x={node.cx}
                  y={node.cy + 4}
                  textAnchor="middle"
                  fontSize="7"
                  fontWeight="bold"
                  fill={isHovered ? '#FFFFFF' : '#888894'}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="p-3 bg-[#141417] border border-black rounded-none min-h-[60px] text-[10px] leading-relaxed shadow-[3px_3px_6px_#060608] text-gray-400 font-bold border-l-4 border-[#FFD600]">
        {activeNode ? (
          <div>
            <strong className="text-[#F4F4F6] block mb-1 uppercase text-[9px]">{activeNode} telemetry:</strong>
            {nodes.find(n => n.id === activeNode)?.desc}
          </div>
        ) : (
          <div className="text-gray-500 text-center uppercase tracking-wide text-[9px] py-2">
            Hover over pipeline nodes inside the SVG map to check code/telemetry integrations.
          </div>
        )}
      </div>
    </div>
  );
};
