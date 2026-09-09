import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { publication } from '../../data/portfolioData';

interface QuickViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickView: React.FC<QuickViewProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#0E0E12] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-left p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              RECRUITER QUICK VIEW
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Candidate Profile Summary */}
        <div className="border-b border-white/10 pb-6 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Shaik Rameez Basha
          </h2>
          <p className="text-sm font-mono text-[#D4AF37] font-semibold mt-1">
            AI/ML + Full-Stack Software Engineer
          </p>
          <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mt-3 max-w-3xl">
            I build production-oriented AI systems and full-stack software, combining AI engineering, backend architecture, frontend systems, data processing, testing, and deployment.
          </p>
        </div>

        {/* Dual Resume Download Actions */}
        <div className="mb-8 p-5 bg-[#070709] border border-white/10 rounded-xl">
          <h3 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider mb-3">
            VERIFIED RESUME DOWNLOADS (PDF)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* ATS Resume */}
            <a
              href="/resumes/Shaik_Rameez_Basha_AI_ML_ATS_Resume.pdf"
              download="Shaik_Rameez_Basha_AI_ML_ATS_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-[#0E0E12] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-left transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-white block">AI/ML + Full-Stack ATS Resume</span>
                <span className="text-[10px] text-neutral-400 block mt-0.5">Optimized for AI, ML &amp; Full-Stack roles</span>
              </div>
              <Download className="w-4 h-4 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform shrink-0 ml-2" />
            </a>

            {/* Python Backend Resume */}
            <a
              href="/resumes/Shaik_Rameez_Basha_Python_Backend_Resume.pdf"
              download="Shaik_Rameez_Basha_Python_Backend_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-[#0E0E12] border border-white/10 hover:border-white/30 text-left transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-white block">Python / Backend Engineer Resume</span>
                <span className="text-[10px] text-neutral-400 block mt-0.5">Optimized for Python, FastAPI &amp; API roles</span>
              </div>
              <Download className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-y-0.5 transition-transform shrink-0 ml-2" />
            </a>
          </div>
        </div>

        {/* Core Strengths & Featured Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Core Strengths */}
          <div className="p-5 rounded-xl bg-[#070709] border border-white/10">
            <h3 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
              CORE STRENGTHS
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300 font-sans">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>AI-Native Systems &amp; LLM Workflows (Gemini API, RAG, BullMQ)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Python Backend Architecture (FastAPI, PostgreSQL, Redis)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Full-Stack Web Applications (Next.js 15, React 19, TypeScript)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Computer Vision &amp; Biometrics (PyTorch, ONNX, YuNet, SFace)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Industrial Telemetry &amp; FFT Frequency Diagnostics</span>
              </li>
            </ul>
          </div>

          {/* Featured Projects Summary */}
          <div className="p-5 rounded-xl bg-[#070709] border border-white/10">
            <h3 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
              FEATURED ENGINEERING WORK
            </h3>
            <div className="space-y-3 text-xs font-sans">
              <div>
                <span className="font-bold text-white block">01 // Aptivue (AptiHire AI / TalentOS)</span>
                <span className="text-neutral-400 text-[11px]">Flagship AI recruitment platform. 170/170 Vitest tests passed across 38 files.</span>
              </div>
              <div>
                <span className="font-bold text-white block">02 // RotorDyn Telemetry SaaS</span>
                <span className="text-neutral-400 text-[11px]">Real-world client SaaS for bearing vibration analysis &amp; FFT diagnostics.</span>
              </div>
              <div>
                <span className="font-bold text-white block">03 // BioRobust / BioVision-Path</span>
                <span className="text-neutral-400 text-[11px]">PyTorch CV robustness framework. 73.66% clean accuracy, 39/39 tests passed.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Links Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs font-mono">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Basharameez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white flex items-center space-x-1.5"
            >
              <span>GitHub ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shaik-rameezbasha-151740286/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white flex items-center space-x-1.5"
            >
              <span>LinkedIn ↗</span>
            </a>
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline flex items-center space-x-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>IEEE DOI</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded transition-colors"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
};

export default QuickView;
