import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, CheckCircle2, ArrowRight, FileText } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
  </svg>
);

interface HeroProps {
  onQuickViewOpen: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickViewOpen }) => {
  const [activeTab, setActiveTab] = useState<'ingest' | 'eval' | 'queue' | 'tests'>('eval');

  return (
    <section id="home" className="relative w-full min-h-[92vh] bg-[#070709] text-[#F1ECE6] overflow-hidden flex items-center pt-28 pb-20 px-6 sm:px-12 lg:px-20 border-b border-white/10">
      
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      {/* Ambient Glowing Background Lights */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none glow-pulse" />
      <div className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] bg-[#6366F1]/10 rounded-full blur-[160px] pointer-events-none glow-pulse" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
        
        {/* Left Column: Headline, Positioning Statement & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Pill Badge */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#12121A]/80 border border-white/15 backdrop-blur-md mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              AI/ML &bull; FULL-STACK &bull; BACKEND ARCHITECTURE
            </span>
          </div>

          {/* Primary Identity Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6 font-display">
            AI/ML + Full-Stack<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F7E7C4] to-[#D4AF37]">
              Software Engineer
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-sm sm:text-base md:text-lg font-normal text-neutral-300 leading-relaxed max-w-2xl mb-10 font-sans">
            I build production-oriented AI systems and full-stack software, combining AI engineering, backend architecture, frontend systems, data processing, testing, and deployment.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary CTA */}
            <a
              href="#work"
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#c29f2e] text-black text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] rounded-lg"
            >
              <span>View Engineering Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary CTA: GitHub */}
            <a
              href="https://github.com/Basharameez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all rounded-lg backdrop-blur-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {/* Secondary CTA: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shaik-rameezbasha-151740286/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all rounded-lg backdrop-blur-md"
            >
              <LinkedinIcon className="w-4 h-4 text-[#D4AF37]" />
              <span>LinkedIn</span>
            </a>

            {/* Recruiter Download CTA */}
            <button
              onClick={onQuickViewOpen}
              className="inline-flex items-center space-x-2 px-4 py-3.5 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all cursor-pointer rounded-lg backdrop-blur-md"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Rich Glassmorphic Interactive Product Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 w-full flex flex-col justify-center items-center relative select-none"
        >
          {/* Glass Card Container */}
          <div className="w-full max-w-[440px] glass-card rounded-2xl p-6 sm:p-7 text-left relative overflow-hidden">
            
            {/* Top ambient glow bar */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            {/* Header Status Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  APTIVUE AI DEMO HUD
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2 py-0.5 rounded">
                FLAGSHIP #1
              </span>
            </div>

            {/* Interactive Showcase Navigation Tabs */}
            <div className="grid grid-cols-4 gap-1.5 p-1 rounded-lg bg-black/60 border border-white/10 mb-5 text-[9px] font-mono">
              <button
                onClick={() => setActiveTab('ingest')}
                className={`py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === 'ingest' ? 'bg-[#D4AF37] text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                INGEST
              </button>
              <button
                onClick={() => setActiveTab('eval')}
                className={`py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === 'eval' ? 'bg-[#D4AF37] text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                AI EVAL
              </button>
              <button
                onClick={() => setActiveTab('queue')}
                className={`py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === 'queue' ? 'bg-[#D4AF37] text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                BULLMQ
              </button>
              <button
                onClick={() => setActiveTab('tests')}
                className={`py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === 'tests' ? 'bg-[#D4AF37] text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                TESTS
              </button>
            </div>

            {/* Tab View Content */}
            <div className="min-h-[165px] flex flex-col justify-between p-4 rounded-xl bg-black/70 border border-white/10 font-mono text-xs mb-5">
              {activeTab === 'ingest' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span className="font-bold uppercase text-[10px]">DOCUMENT PARSER // RESUME EXTRACTION</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 font-sans leading-relaxed">
                    Extracts unstructured PDF/DOCX candidate resume streams using <code className="text-[#D4AF37]">pdf-parse</code> and <code className="text-[#D4AF37]">mammoth</code> into structured JSON experience blocks.
                  </p>
                  <div className="text-[9px] text-neutral-400 pt-2 border-t border-white/10 flex justify-between">
                    <span>FORMAT: PDF / DOCX</span>
                    <span>LATENCY: &lt;140ms</span>
                  </div>
                </div>
              )}

              {activeTab === 'eval' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <Cpu className="w-3.5 h-3.5" />
                    <span className="font-bold uppercase text-[10px]">AI EVALUATION // GEMINI LLM API</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 font-sans leading-relaxed">
                    Evaluates candidate skill vectors against standardized job rubrics using Gemini LLM models and generates structured scoring signals.
                  </p>
                  <div className="text-[9px] text-neutral-400 pt-2 border-t border-white/10 flex justify-between">
                    <span>MODEL: Gemini API</span>
                    <span>OUTPUT: Relational Scores</span>
                  </div>
                </div>
              )}

              {activeTab === 'queue' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Database className="w-3.5 h-3.5" />
                    <span className="font-bold uppercase text-[10px]">ASYNC ENGINE // BULLMQ + REDIS</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 font-sans leading-relaxed">
                    Decouples document parsing and AI evaluation prompts into background worker queues running on BullMQ and Redis to maintain fluid 60fps UI sessions.
                  </p>
                  <div className="text-[9px] text-neutral-400 pt-2 border-t border-white/10 flex justify-between">
                    <span>QUEUE: Redis Worker</span>
                    <span>WORKERS: Decoupled</span>
                  </div>
                </div>
              )}

              {activeTab === 'tests' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="font-bold uppercase text-[10px]">VERIFIED TEST EVIDENCE // VITEST</span>
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">
                    170/170 <span className="text-xs font-normal text-emerald-400">PASSED</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 font-sans leading-relaxed">
                    Comprehensive Vitest unit &amp; integration test suite covering candidate evaluation, database persistence, and API routes across 38 test files.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 text-center font-mono">
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10">
                <div className="text-[9px] text-neutral-400 uppercase">VITEST SUITE</div>
                <div className="text-xs font-bold text-emerald-400 mt-0.5">170/170 Passed</div>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10">
                <div className="text-[9px] text-neutral-400 uppercase">FRAMEWORK</div>
                <div className="text-xs font-bold text-[#D4AF37] mt-0.5">Next.js 15</div>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10">
                <div className="text-[9px] text-neutral-400 uppercase">WORKER QUEUE</div>
                <div className="text-xs font-bold text-sky-400 mt-0.5">BullMQ Redis</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
