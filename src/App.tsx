import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Copy, Check, Terminal, Shield, Award, Mail } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  // Email Copy Clipboard Utility
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('shaikbashah20@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Nav Deck tabs metadata
  const tabs = [
    { label: '01 // ARCHIVE', title: 'IDENTITY & SUMMARY' },
    { label: '02 // ARSENAL', title: 'SKILLS & STATS MATRIX' },
    { label: '03 // MISSIONS', title: 'PROJECT MISSIONS' },
    { label: '04 // RESEARCH', title: 'AI RESEARCH CERTIFICATE' },
    { label: '05 // SIGNAL', title: 'ESTABLISH DATA SIGNAL' }
  ];

  // Stats / Skills dataset
  const skillArsenal = [
    { category: 'FULL-STACK SYSTEMS', level: 90, techs: 'React, TypeScript, FastAPI, Tailwind, Postgres, SQLite' },
    { category: 'DEVELOPER TOOLS & AST', level: 85, techs: 'Python AST, Compiler Runtimes, Scanners, Token Parsers' },
    { category: 'AI / MACHINE LEARNING', level: 80, techs: 'PyTorch, Explainable AI, NumPy, Attention Tensors' },
    { category: 'DATA PIPELINES & TABLES', level: 85, techs: 'Pandas, Excel Ingestion, Matplotlib, Relational DBs' },
    { category: 'ENGINEERING DIAGNOSTICS', level: 75, techs: 'PySide6, Plotly.js, Waveforms telemetry, Qt WebEngine' }
  ];

  // Project database
  const projects = [
    {
      id: 'M-01',
      name: 'CODEORIGIN // AST SECURITY AUDITOR',
      role: 'DEVELOPER TOOLS',
      desc: 'Static compliance analyzer scanning repositories for structural violations, license checks, and code coupling matrices without compilation requirements.',
      techs: ['Python AST', 'FastAPI', 'React', 'TypeScript', 'SQLite'],
      link: 'https://github.com/Basharameez/codeorigin'
    },
    {
      id: 'M-02',
      name: 'ROTORDYN // WAVE TELEMETRY',
      role: 'TELEMETRY VISUALS',
      desc: 'Conceptual bearing diagnostics dashboard processing radial shaft speeds and displaying high-frequency diagnostic orbits waveforms.',
      techs: ['PySide6', 'FastAPI', 'Plotly.js', 'Qt WebEngine', 'WebSockets'],
      link: null
    },
    {
      id: 'M-03',
      name: 'PYTHON WEB COMPILER Runtime',
      role: 'RUNTIMES SANDBOX',
      desc: 'Web runtime interface executing user Python code inside safe threads, capturing stdout blocks, and mapping matplotlib plots to base64 images.',
      techs: ['Python', 'Flask Runtimes', 'Matplotlib', 'HTML5 Console'],
      link: 'https://github.com/Basharameez/python_web_compiler'
    },
    {
      id: 'M-04',
      name: 'STUDENT INFO INGEST PORTAL',
      role: 'DATA MANAGEMENT',
      desc: 'Database processing pipeline built to parse large spreadsheets, index columns, and execute multi-criteria queries inside relational schemas.',
      techs: ['Python', 'SQLite', 'Pandas Ingestion', 'Excel Readers'],
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9FB] text-[#101014] selection:bg-[#D31212]/15 selection:text-[#D31212] relative overflow-x-hidden manga-dot-pattern flex flex-col justify-between">
      
      {/* Header editorial grid */}
      <header className="w-full border-b-3 border-black bg-white py-6 px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D31212] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-[#D31212] font-bold">RELEASE_NODE // SRB-v2026</span>
            </div>
            <h1 className="text-3xl font-black tracking-tighter uppercase leading-none mt-1">
              SHAIK RAMEEZ BASHA
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://github.com/Basharameez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black hover:bg-[#D31212] hover:text-white transition-all bg-white shadow-[2px_2px_0px_#000000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000] flex items-center justify-center"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/shaik-rameez-basha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black hover:bg-[#D31212] hover:text-white transition-all bg-white shadow-[2px_2px_0px_#000000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000] flex items-center justify-center"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main play grid */}
      <main className="max-w-7xl w-full mx-auto px-6 py-12 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Side: Playable vertical slanted folder tabs */}
        <div className="lg:col-span-4 flex flex-col gap-3.5">
          <div className="flex items-center gap-2 px-2">
            <span className="w-2.5 h-2.5 bg-[#D31212] border border-black transform rotate-45" />
            <span className="font-mono text-xs font-bold tracking-wider text-gray-500 uppercase">System Nav Directory</span>
          </div>

          <div className="flex flex-col gap-3">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 text-left border-2.5 border-black transition-all relative select-none slanted-tab ${
                    isActive
                      ? 'bg-[#D31212] text-white shadow-[4px_4px_0px_#000000] translate-x-2'
                      : 'bg-white text-[#101014] hover:bg-[#F4F4F6] shadow-[4px_4px_0px_#000000]'
                  }`}
                >
                  <div className="unslanted-text flex items-center justify-between font-bold">
                    <span className="text-xs font-mono">{tab.label}</span>
                    <span className="text-[9px] uppercase tracking-wider opacity-85">
                      {isActive ? 'ACTIVE' : 'OPEN'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Styled portrait frame at bottom of navbar */}
          <div className="hidden lg:block mt-8 relative pr-2 pb-2">
            <div className="absolute inset-0 bg-[#D31212] border-2.5 border-black translate-x-2 translate-y-2 slanted-tab" />
            <div className="relative border-2.5 border-black bg-white slanted-tab overflow-hidden shadow-[2px_2px_0px_#000000]">
              <div className="w-full h-44 overflow-hidden relative">
                <img
                  src="avatar.jpg"
                  alt="Shaik Rameez Basha"
                  className="w-full h-full object-cover scale-110 -translate-x-1"
                />
              </div>
              <div className="border-t-2 border-black bg-[#F4F4F6] p-2 flex justify-between items-center font-mono text-[9px] text-gray-600 font-bold uppercase tracking-wider unslanted-text">
                <span>COHORT: 2026</span>
                <span className="bg-black text-[#FFD600] px-1.5 py-0.5 border border-black">CGPA: 7.79</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Active screen contents card */}
        <div className="lg:col-span-8 flex flex-col">
          <div className="w-full h-full p-6 sm:p-8 border-2.5 border-black bg-white shadow-[6px_6px_0px_#000000] flex flex-col justify-between min-h-[460px] relative">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.18 }}
                className="flex flex-col gap-6"
              >
                {/* Active Tab Header Title */}
                <div className="border-b-2 border-black pb-4 flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="mono-tag">{tabs[activeTab].label}</span>
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none">
                      {tabs[activeTab].title}
                    </h2>
                  </div>
                  <span className="font-mono text-[10px] text-gray-400 font-bold uppercase hidden sm:block">STATUS // ACTIVE_NODE</span>
                </div>

                {/* 01 // ARCHIVE */}
                {activeTab === 0 && (
                  <div className="flex flex-col gap-4 text-sm sm:text-base font-semibold leading-relaxed text-gray-700">
                    <p>
                      I am a Software Engineer and full-stack developer specializing in core systems runtime compilations, AST static analysis structures, industrial wave telemetry visualization, and Explainable AI (ML).
                    </p>
                    <p>
                      Currently pursuing a B.Tech in Computer Science and Engineering (Artificial Intelligence) at Narasaraopeta Engineering College (JNTUK cohort 2026), maintaining a CGPA of 7.79 / 10.00.
                    </p>
                    <div className="manga-divider my-2" />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono uppercase font-bold pt-2">
                      <div className="p-3 border-2 border-black bg-[#F4F4F6] flex gap-2.5 items-center">
                        <Award size={16} className="text-[#D31212]" />
                        <div>
                          <span className="text-gray-400 block text-[9px]">CERTIFICATION</span>
                          Explainable AI Published in IEEE
                        </div>
                      </div>
                      <div className="p-3 border-2 border-black bg-[#F4F4F6] flex gap-2.5 items-center">
                        <Terminal size={16} className="text-[#D31212]" />
                        <div>
                          <span className="text-gray-400 block text-[9px]">ENGINEERING DEPLOYMENT</span>
                          Full-Stack node at AfterQuery
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 02 // ARSENAL */}
                {activeTab === 1 && (
                  <div className="flex flex-col gap-4">
                    <p className="text-xs text-gray-500 font-bold uppercase">Dynamic component skill stats and technologies matrix:</p>
                    <div className="flex flex-col gap-4">
                      {skillArsenal.map((skill, idx) => (
                        <div key={idx} className="flex flex-col gap-1.5">
                          <div className="flex justify-between items-center text-xs font-bold font-mono">
                            <span className="text-[#101014]">{skill.category}</span>
                            <span className="text-[#D31212]">{skill.level}% power</span>
                          </div>
                          {/* Stat Bar */}
                          <div className="w-full h-3 border-2 border-black bg-[#F4F4F6] rounded-none overflow-hidden relative">
                            <div
                              className="h-full bg-[#D31212] border-r-2 border-black transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-gray-500 font-mono font-bold leading-tight uppercase">
                            STACK: {skill.techs}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 03 // MISSIONS */}
                {activeTab === 2 && (
                  <div className="flex flex-col gap-4">
                    <p className="text-xs text-gray-500 font-bold uppercase">Operational Systems Databases:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {projects.map((proj, idx) => (
                        <div key={idx} className="p-4 border-2.5 border-black bg-white shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#D31212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all relative flex flex-col justify-between gap-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-start text-[10px] font-mono font-bold">
                              <span className="text-[#D31212]">{proj.id}</span>
                              <span className="text-gray-400">{proj.role}</span>
                            </div>
                            <h4 className="text-sm font-black uppercase tracking-tight mt-1 text-[#101014]">
                              {proj.name}
                            </h4>
                            <p className="text-[11px] text-gray-600 font-medium leading-relaxed mt-1">
                              {proj.desc}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1 items-center justify-between border-t border-black/10 pt-2 font-mono text-[9px] font-bold">
                            <div className="flex flex-wrap gap-1">
                              {proj.techs.slice(0, 3).map((t, i) => (
                                <span key={i} className="px-1.5 py-0.5 bg-[#F4F4F6] border border-black/10 text-gray-500">{t}</span>
                              ))}
                            </div>
                            {proj.link && (
                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#D31212] hover:underline flex items-center gap-1.5"
                              >
                                Source <ExternalLink size={10} />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 04 // RESEARCH */}
                {activeTab === 3 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 border-2 border-black bg-[#F4F4F6] p-3.5 font-mono text-xs font-bold text-gray-600">
                      <Shield size={16} className="text-[#D31212]" />
                      <div>
                        <span>QA COMPLIANCE CODE: IEEE XPLORE // 2026</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-black uppercase text-[#101014] mt-2">
                      Explainable Artificial Intelligence (XAI)
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-semibold">
                      Academic paper contribution researching neural activation interpretability hooks, feature extraction weights parameters mapping, and tracing gradient activation overlays dynamically.
                    </p>
                    
                    <div className="bg-[#F4F4F6] border border-black/10 p-4 text-xs leading-relaxed text-gray-600 font-bold border-l-4 border-[#D31212]">
                      Contribution Details: Designed weight parameter extraction scripts tracking convolution attention vectors, proving that feature attractions map directly to output predictions distributions.
                    </div>
                  </div>
                )}

                {/* 05 // SIGNAL */}
                {activeTab === 4 && (
                  <div className="flex flex-col gap-5">
                    <p className="text-sm text-gray-700 font-semibold leading-relaxed">
                      Model-SRB is open for permanent full-time engineering deployments, collaborative projects contracts, or onsite relocation positions. Establish contact below:
                    </p>
                    
                    <div className="p-5 border-2.5 border-black bg-[#F4F4F6] flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 shadow-[4px_4px_0px_#000000] mt-4">
                      <div className="flex flex-col gap-1 font-mono text-xs font-bold">
                        <span className="text-gray-400 uppercase text-[9px]">DIRECT COGNITIVE CORRESPONDENCE</span>
                        <span className="text-[#101014] text-sm tracking-tight select-all">shaikbashah20@gmail.com</span>
                      </div>
                      <div className="flex gap-2.5">
                        <a
                          href="mailto:shaikbashah20@gmail.com"
                          className="px-5 py-3 border-2.5 border-black bg-[#D31212] text-white hover:bg-black font-black uppercase text-xs tracking-wider transition-all shadow-[3px_3px_0px_#000000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000] flex items-center gap-2 justify-center"
                        >
                          Email Signal <Mail size={12} />
                        </a>
                        <button
                          onClick={copyEmail}
                          className="p-3 border-2.5 border-black bg-white text-[#101014] hover:bg-[#F4F4F6] transition-all shadow-[3px_3px_0px_#000000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000] flex items-center justify-center"
                        >
                          {copied ? <Check size={14} className="text-green-600 font-bold" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Corner decorator scopes */}
            <div className="absolute top-2 left-2 text-[8px] text-gray-300 font-mono select-none font-bold">[ + ]</div>
            <div className="absolute top-2 right-2 text-[8px] text-gray-300 font-mono select-none font-bold">[ + ]</div>
            <div className="absolute bottom-2 left-2 text-[8px] text-gray-300 font-mono select-none font-bold">[ + ]</div>
            <div className="absolute bottom-2 right-2 text-[8px] text-gray-300 font-mono select-none font-bold">[ + ]</div>
          </div>
        </div>
      </main>

      {/* Footer editorial block */}
      <footer className="w-full border-t-3 border-black bg-white py-6 px-6 relative z-20 text-center text-xs font-mono font-bold tracking-wider">
        <span>&copy; {new Date().getFullYear()} Shaik Rameez Basha &bull; systems node active</span>
      </footer>
    </div>
  );
}
