import React, { useState } from 'react';
import { Mail, FileText, Check, Copy, ExternalLink, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shaikbashah20@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#070709] border-t border-white/10 relative text-left">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-3">
            <span>07 // GET IN TOUCH & RESUME DOWNLOADS</span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-display mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let&apos;s build production software.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-2xl leading-relaxed">
            Actively open for AI/ML Software Engineer, Full-Stack Developer, and Python Backend Architecture roles. Connect directly or download targeted PDF resumes below.
          </p>
        </div>

        {/* Contact & Engineering Credential Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Email with Copy */}
          <div className="bg-[#0E0E12] border border-white/10 hover:border-[#D4AF37]/50 rounded-xl p-6 flex flex-col justify-between transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-tr-xl pointer-events-none" />
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                PRIMARY EMAIL
              </span>
              <h3 className="text-sm font-mono font-bold text-white mb-2 select-all">
                shaikbashah20@gmail.com
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Direct inbox access for interview requests, technical discussions, and project inquiries.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#D4AF37] hover:text-[#f3d36b] transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
              <a 
                href="mailto:shaikbashah20@gmail.com" 
                className="text-neutral-500 hover:text-white transition-colors"
                title="Open mail app"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: AI/ML Engineering Resume */}
          <div className="bg-[#0E0E12] border border-white/10 hover:border-[#D4AF37]/50 rounded-xl p-6 flex flex-col justify-between transition-all group relative overflow-hidden">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                TARGETED RESUME // AI & ML
              </span>
              <h3 className="text-sm font-bold text-white mb-2 font-display">
                AI/ML Engineer Resume
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                ATS-formatted PDF detailing LLM engineering, PyTorch/ONNX computer vision models, and 170+ unit test evidence.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href="/resumes/Shaik_Rameez_Basha_AI_ML_ATS_Resume.pdf"
                download="Shaik_Rameez_Basha_AI_ML_ATS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center py-2.5 px-4 bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/40 text-xs font-mono font-semibold text-white hover:text-[#D4AF37] rounded-lg transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>DOWNLOAD AI/ML RESUME (PDF)</span>
              </a>
            </div>
          </div>

          {/* Card 3: Python & Full-Stack Resume */}
          <div className="bg-[#0E0E12] border border-white/10 hover:border-[#D4AF37]/50 rounded-xl p-6 flex flex-col justify-between transition-all group relative overflow-hidden">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                TARGETED RESUME // BACKEND & FULL-STACK
              </span>
              <h3 className="text-sm font-bold text-white mb-2 font-display">
                Python / Backend Resume
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Highlighting FastAPI microservices, BullMQ/Redis worker queues, Drizzle/Supabase, and industrial telemetry SaaS architecture.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href="/resumes/Shaik_Rameez_Basha_Python_Backend_Resume.pdf"
                download="Shaik_Rameez_Basha_Python_Backend_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center py-2.5 px-4 bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/40 text-xs font-mono font-semibold text-white hover:text-[#D4AF37] rounded-lg transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>DOWNLOAD BACKEND RESUME (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Profiles & Location Strip */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* GitHub Link */}
          <a
            href="https://github.com/Basharameez"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#0E0E12] border border-white/10 hover:border-white/30 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-white/5 text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-[9px] font-mono text-neutral-400 uppercase">GITHUB REPOSITORIES</span>
                <span className="text-xs font-mono font-bold text-white group-hover:text-[#D4AF37] transition-colors">github.com/Basharameez</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/shaik-rameezbasha-151740286/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#0E0E12] border border-white/10 hover:border-white/30 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-white/5 text-[#D4AF37]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-[9px] font-mono text-neutral-400 uppercase">LINKEDIN NETWORK</span>
                <span className="text-xs font-mono font-bold text-white group-hover:text-[#D4AF37] transition-colors">shaik-rameezbasha</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
          </a>

          {/* Location & Relocation Status */}
          <div className="p-4 rounded-xl bg-[#0E0E12] border border-white/10 flex items-center gap-3">
            <div className="p-2 rounded bg-emerald-500/10 text-emerald-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="block text-[9px] font-mono text-neutral-400 uppercase">LOCATION & STATUS</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-xs font-mono font-bold text-white">Andhra Pradesh, India • Global Remote</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
