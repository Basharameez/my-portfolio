import React, { useEffect } from 'react';
import { X, Mail, Printer } from 'lucide-react';
import { NeumorphicButton } from '../ui/NeumorphicButton';
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/40 backdrop-blur-md flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-neutral-100 flex flex-col print:max-h-none print:shadow-none print:border-none print:p-0">
        
        {/* Header Actions bar (Hidden in print) */}
        <div className="sticky top-0 bg-white/90 backdrop-blur px-6 py-4 border-b border-neutral-200/50 flex items-center justify-between z-10 print:hidden">
          <span className="text-xs font-bold tracking-widest text-neutral-400">
            RECRUITER ENGINE // SUMMARY VERIFICATION
          </span>
          <div className="flex items-center gap-2">
            <NeumorphicButton 
              variant="standard" 
              onClick={handlePrint}
              className="!px-3 !py-1.5 text-xs text-neutral-600"
            >
              <Printer className="w-3.5 h-3.5" /> PRINT / SAVE PDF
            </NeumorphicButton>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Close Summary view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-8 md:p-12 overflow-y-auto flex-1 font-sans text-neutral-800 print:p-0">
          
          {/* Main Info */}
          <div className="border-b-2 border-neutral-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
                SHAIK RAMEEZ BASHA
              </h1>
              <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mt-1">
                Full-Stack Developer &bull; AI Engineer &bull; Software Builder
              </p>
            </div>
            <div className="text-xs text-neutral-500 flex flex-col gap-1 md:items-end">
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-neutral-600" /> shaikbashah20@gmail.com</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current text-neutral-600" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                linkedin.com/in/shaik-rameez-basha-151740286/
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current text-neutral-600" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                github.com/Basharameez
              </span>
              <span>Guntur, Andhra Pradesh, India</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Left side: Skills & Education */}
            <div className="md:col-span-1 flex flex-col gap-6">
              
              {/* Education */}
              <div>
                <h2 className="text-xs font-black tracking-widest text-neutral-900 border-b border-neutral-300 pb-2 uppercase">
                  Education
                </h2>
                <div className="mt-3">
                  <p className="text-sm font-bold text-neutral-950">B.Tech Computer Science (AI)</p>
                  <p className="text-xs text-neutral-600">Narasaraopeta Engineering College</p>
                  <p className="text-xs text-neutral-500">JNTUK &bull; 2022 &ndash; 2026</p>
                  <p className="text-xs font-semibold text-red-600 mt-1">CGPA: 7.79 / 10.0</p>
                </div>
              </div>

              {/* Research */}
              <div>
                <h2 className="text-xs font-black tracking-widest text-neutral-900 border-b border-neutral-300 pb-2 uppercase">
                  Research
                </h2>
                <div className="mt-3">
                  <p className="text-xs font-bold text-neutral-950">Explainable Artificial Intelligence (XAI)</p>
                  <p className="text-xs text-neutral-600">Interpretability models and gradient hooks.</p>
                  <p className="text-xs text-neutral-500 font-medium mt-1">Published in IEEE Xplore, 2026</p>
                </div>
              </div>

              {/* Skills checklist */}
              <div>
                <h2 className="text-xs font-black tracking-widest text-neutral-900 border-b border-neutral-300 pb-2 uppercase">
                  Skills Matrix
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {skills.map((category) => (
                    <div key={category.name}>
                      <p className="text-[11px] font-black text-neutral-900 uppercase tracking-wider">{category.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {category.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="text-[10px] font-semibold bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded border border-neutral-200"
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
                <h2 className="text-xs font-black tracking-widest text-neutral-900 border-b border-neutral-300 pb-2 uppercase">
                  Professional Experience
                </h2>
                
                <div className="mt-3 flex flex-col gap-4">
                  <div>
                    <div className="flex justify-between items-start text-sm">
                      <p className="font-bold text-neutral-900">Software Engineer Intern</p>
                      <span className="text-xs text-neutral-500 font-semibold">2025 &ndash; 2026</span>
                    </div>
                    <p className="text-xs text-red-600 font-semibold">AfterQuery</p>
                    <ul className="list-disc list-outside ml-4 mt-1.5 text-xs text-neutral-600 flex flex-col gap-1">
                      <li>Authored automation scripts and quality tests verifying package parameters.</li>
                      <li>Built structural dependency graph parsers and API routes inside FastAPI microservices.</li>
                      <li>Conducted compliance assessments mapping abstract syntax trees.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start text-sm">
                      <p className="font-bold text-neutral-900">Data Analytics Integrations</p>
                      <span className="text-xs text-neutral-500 font-semibold">2026</span>
                    </div>
                    <p className="text-xs text-red-600 font-semibold">RotorDyn Platform</p>
                    <ul className="list-disc list-outside ml-4 mt-1.5 text-xs text-neutral-600 flex flex-col gap-1">
                      <li>Engineered data ingestion pipelines handling machinery accelerometer logs.</li>
                      <li>Developed modular plotting widgets and diagnostic telemetry tools using PySide6.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Top Projects */}
              <div>
                <h2 className="text-xs font-black tracking-widest text-neutral-900 border-b border-neutral-300 pb-2 uppercase">
                  Selected Production Systems
                </h2>
                
                <div className="mt-3 flex flex-col gap-4">
                  <div>
                    <p className="text-sm font-bold text-neutral-900">
                      RotorDyn &bull; <span className="text-xs text-neutral-500 font-normal">Industrial Diagnostics</span>
                    </p>
                    <p className="text-xs text-neutral-600 mt-1">
                      A real-time machinery vibration telemetry platform. Ingests high-frequency accelerometer logs, computes Fast Fourier Transforms (FFT), and charts diagnostic waterfall maps.
                    </p>
                    <p className="text-[10px] text-red-600 font-semibold mt-1">
                      Python, FastAPI, React, PostgreSQL, Plotly.js, D3.js
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-neutral-900">
                      ModelForge &bull; <span className="text-xs text-neutral-500 font-normal">MLOps Control Plane</span>
                    </p>
                    <p className="text-xs text-neutral-600 mt-1">
                      An infrastructure engine mapping hyperparameter logging, model lifecycle tracking, container sandbox evaluations, and low-latency API deployment stages.
                    </p>
                    <p className="text-[10px] text-red-600 font-semibold mt-1">
                      PyTorch, Docker, FastAPI, MongoDB, Redis, React
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-neutral-900">
                      CodeOrigin &bull; <span className="text-xs text-neutral-500 font-normal">Repository Auditor</span>
                    </p>
                    <p className="text-xs text-neutral-600 mt-1">
                      Technical due diligence platform conducting static analysis on codebase repositories. Audits dependencies configurations and licensing compliant nodes.
                    </p>
                    <p className="text-[10px] text-red-600 font-semibold mt-1">
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
