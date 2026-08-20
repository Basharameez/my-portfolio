import React, { useEffect } from 'react';
import { X, Mail, Printer } from 'lucide-react';
import { skills } from '../../data/portfolioData';

interface QuickViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickView: React.FC<QuickViewProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when open
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="bg-[#0E0C0A] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-[#8C6D4F]/35 flex flex-col print:bg-white print:text-black print:max-h-none print:shadow-none print:border-none print:p-0">
        
        {/* Top Gold Horizon Edge */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent print:hidden" />

        {/* Corner Pins */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/50 print:hidden" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/50 print:hidden" />

        {/* Header Actions bar (Hidden in print) */}
        <div className="sticky top-0 bg-black/90 backdrop-blur-md px-6 py-4 border-b border-[#8C6D4F]/20 flex items-center justify-between z-10 print:hidden">
          <span className="text-[9px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            RECRUITER INTERACTION DOSSIER
          </span>
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrint}
              className="text-[9px] font-mono tracking-widest px-3 py-1.5 bg-[#14100D] border border-[#8C6D4F]/40 hover:border-[#D4AF37] hover:bg-[#1C1612] text-[#EAD8C7] hover:text-[#FFF5EB] rounded-sm transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" /> PRINT / SAVE PDF
            </button>
            <button
              onClick={onClose}
              className="p-1 text-[#A8988B] hover:text-[#E8DFD8] transition-colors cursor-pointer"
              aria-label="Close Summary view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-8 md:p-12 overflow-y-auto flex-1 font-sans text-[#A8988B] print:text-black print:p-0 text-left">
          
          {/* Main Info */}
          <div className="border-b border-[#8C6D4F]/25 print:border-neutral-950 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 
                className="text-3xl md:text-4xl text-white print:text-black tracking-tight font-bold uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                SHAIK RAMEEZ BASHA
              </h1>
              <p className="text-sm font-mono text-[#D4AF37] print:text-neutral-800 uppercase tracking-widest mt-1">
                AI/ML &amp; GenAI Engineer &bull; Full-Stack Engineer
              </p>
            </div>
            <div className="text-[10px] font-mono text-[#A8988B] print:text-neutral-700 flex flex-col gap-1.5 md:items-end">
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#D4AF37] print:text-black" /> shaikbashah20@gmail.com</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current text-[#D4AF37] print:text-black" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                linkedin.com/in/shaik-rameezbasha-151740286/
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current text-[#D4AF37] print:text-black" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                github.com/Basharameez
              </span>
              <span>Piduguralla, Andhra Pradesh, India</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Left side: Skills & Education */}
            <div className="md:col-span-1 flex flex-col gap-6">
              
              {/* Education */}
              <div>
                <h2 className="text-[10px] font-mono font-bold tracking-widest text-[#EAD8C7] print:text-black border-b border-[#8C6D4F]/25 print:border-neutral-300 pb-2 uppercase">
                  Education
                </h2>
                <div className="mt-3">
                  <p className="text-sm font-bold text-white print:text-black">B.Tech Computer Science (AI)</p>
                  <p className="text-xs text-[#A8988B] print:text-neutral-700">Narasaraopeta Engineering College</p>
                  <p className="text-xs text-[#8C6D4F] print:text-neutral-500 font-mono">2022 &ndash; 2026</p>
                  <p className="text-xs font-mono font-bold text-[#D4AF37] print:text-black mt-1">CGPA: 7.79 / 10.0</p>
                </div>
              </div>

              {/* Research */}
              <div>
                <h2 className="text-[10px] font-mono font-bold tracking-widest text-[#EAD8C7] print:text-black border-b border-[#8C6D4F]/25 print:border-neutral-300 pb-2 uppercase">
                  Research
                </h2>
                <div className="mt-3">
                  <p className="text-xs font-bold text-white print:text-black">Explainable Artificial Intelligence</p>
                  <p className="text-xs text-[#A8988B] print:text-neutral-700 font-sans font-light">Text classification models and gradient hook interpretability.</p>
                  <p className="text-xs text-[#8C6D4F] font-medium font-mono mt-1">Published in IEEE Xplore, 2026</p>
                </div>
              </div>

              {/* Skills checklist */}
              <div>
                <h2 className="text-[10px] font-mono font-bold tracking-widest text-[#EAD8C7] print:text-black border-b border-[#8C6D4F]/25 print:border-neutral-300 pb-2 uppercase">
                  Skills Matrix
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {skills.map((category) => (
                    <div key={category.name}>
                      <p className="text-[9px] font-mono font-bold text-white print:text-neutral-800 uppercase tracking-wider">{category.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {category.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="text-[9px] font-mono bg-black print:bg-neutral-50 text-[#A8988B] print:text-neutral-800 px-2 py-0.5 rounded-sm border border-[#8C6D4F]/25 print:border-neutral-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right side: Experience & Projects */}
            <div className="md:col-span-2 flex flex-col gap-6">
              
              {/* Experience */}
              <div>
                <h2 className="text-[10px] font-mono font-bold tracking-widest text-[#EAD8C7] print:text-black border-b border-[#8C6D4F]/25 print:border-neutral-300 pb-2 uppercase">
                  Professional Experience
                </h2>
                
                <div className="mt-3 flex flex-col gap-4">
                  <div>
                    <div className="flex justify-between items-start text-sm">
                      <p className="font-bold text-white print:text-black">Full Stack Engineer</p>
                      <span className="text-xs text-[#8C6D4F] font-mono">May 2026 &ndash; Present</span>
                    </div>
                    <p className="text-xs text-[#D4AF37] print:text-black font-bold font-mono">AfterQuery</p>
                    <ul className="list-disc list-outside ml-4 mt-1.5 text-xs text-[#A8988B] print:text-neutral-700 flex flex-col gap-1 font-sans font-light">
                      <li>Work on full-stack engineering, debugging, testing, and software evaluation tasks across real-world software projects.</li>
                      <li>Review and validate implementations against technical requirements, expected behavior, and application/business logic.</li>
                      <li>Debug existing production-oriented codebases involving frontend, backend, APIs, databases, authentication, and workflow logic.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start text-sm">
                      <p className="font-bold text-white print:text-black">Full Stack Engineer</p>
                      <span className="text-xs text-[#8C6D4F] font-mono">June 2026 &ndash; July 2026</span>
                    </div>
                    <p className="text-xs text-[#D4AF37] print:text-black font-bold font-mono">RotorDyn</p>
                    <ul className="list-disc list-outside ml-4 mt-1.5 text-xs text-[#A8988B] print:text-neutral-700 flex flex-col gap-1 font-sans font-light">
                      <li>Built a SaaS-based rotor and bearing vibration analysis platform using React, Vite, Python, FastAPI, Supabase, PostgreSQL, Pandas, and Plotly.js.</li>
                      <li>Developed frontend dashboards, authentication workflows, data-analysis interfaces, REST APIs, and backend services.</li>
                      <li>Built CSV/Excel telemetry processing workflows using Python and Pandas, including FFT-based vibration analysis.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Top Projects */}
              <div>
                <h2 className="text-[10px] font-mono font-bold tracking-widest text-[#EAD8C7] print:text-black border-b border-[#8C6D4F]/25 print:border-neutral-300 pb-2 uppercase">
                  Selected Intelligent Systems
                </h2>
                
                <div className="mt-3 flex flex-col gap-4">
                  <div>
                    <p className="text-sm font-bold text-white print:text-black font-mono">
                      RTM Layer &bull; <span className="text-xs text-[#A8988B] font-normal font-sans">Remote Treatment Monitoring</span>
                    </p>
                    <p className="text-xs text-[#A8988B] print:text-neutral-700 mt-1 font-sans font-light">
                      Applied AI clinician-support layer verifying patient image telemetry, executing resolution checks, and displaying Grad-CAM focus overlays.
                    </p>
                    <p className="text-[10px] text-[#D4AF37] print:text-black font-mono font-bold mt-1">
                      Python, PyTorch, Explainable AI, Grad-CAM, FastAPI
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white print:text-black font-mono">
                      BioVision-Path &bull; <span className="text-xs text-[#A8988B] font-normal font-sans">Biomedical Computer Vision</span>
                    </p>
                    <p className="text-xs text-[#A8988B] print:text-neutral-700 mt-1 font-sans font-light">
                      End-to-end multi-task pipeline performing segmentation, object detection, and visual search indexed with ONNX and Grad-CAM layers.
                    </p>
                    <p className="text-[10px] text-[#D4AF37] print:text-black font-mono font-bold mt-1">
                      PyTorch, ONNX, Explainable AI, Python
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white print:text-black font-mono">
                      CodeOrigin &bull; <span className="text-xs text-[#A8988B] font-normal font-sans">Repository Intelligence</span>
                    </p>
                    <p className="text-xs text-[#A8988B] print:text-neutral-700 mt-1 font-sans font-light">
                      Technical due diligence platform conducting static analysis on codebase ASTs, tracking license SBOMs, and scoring circular dependency loops.
                    </p>
                    <p className="text-[10px] text-[#D4AF37] print:text-black font-mono font-bold mt-1">
                      FastAPI, Python AST, React, PostgreSQL, TypeScript
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
export default QuickView;
