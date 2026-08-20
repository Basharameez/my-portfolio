import React, { useState } from 'react';
import { ArrowRight, Sparkles, Search, Cpu, CheckSquare, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const GenAI: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const pipelineStages = [
    { 
      label: 'USER', 
      icon: <User className="w-4 h-4" />, 
      tech: 'LLM Applications / AI Assistants', 
      desc: 'Users trigger tasks through custom chat, voice, or telemetry interfaces. The client acts as a high-fidelity wrapper translating intents.' 
    },
    { 
      label: 'CONTEXT', 
      icon: <Sparkles className="w-4 h-4" />, 
      tech: 'Prompt Engineering / Templates', 
      desc: 'Dynamic prompt templates structure query inputs, safety constraints, and role guidelines before model inference occurs.' 
    },
    { 
      label: 'RETRIEVAL', 
      icon: <Search className="w-4 h-4" />, 
      tech: 'RAG / Vector Embeddings', 
      desc: 'Connects queries to vector databases (such as Pgvector or MongoDB Atlas) to retrieve relevant reference documents and reduce model hallucinations.' 
    },
    { 
      label: 'MODEL', 
      icon: <Cpu className="w-4 h-4" />, 
      tech: 'LLM Inference API Hooks', 
      desc: 'Leverages API gateways or local ONNX/Transformer models to run inference on context-enriched instruction sets.' 
    },
    { 
      label: 'EVALUATION', 
      icon: <CheckSquare className="w-4 h-4" />, 
      tech: 'AI Evaluation / Guardrails', 
      desc: 'Checks outputs for format conformance, bias markers, and hallucination scores before passing data downstream.' 
    },
    { 
      label: 'WORKFLOW', 
      icon: <Settings className="w-4 h-4" />, 
      tech: 'Report Generation / Actions', 
      desc: 'Saves synthesized summaries as formal PDF reports, schedules database writes, or triggers external API calls.' 
    },
    { 
      label: 'HUMAN', 
      icon: <CheckSquare className="w-4 h-4" />, 
      tech: 'Human-in-the-Loop Audit', 
      desc: 'Places coordinator, clinician, or engineer checks in the pipeline to authorize safety-critical operations.' 
    }
  ];

  return (
    <section 
      id="genai" 
      className="relative w-full bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden border-b border-[#8C6D4F]/15"
    >
      {/* Visual background decorations */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/[0.015] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / INTELLIGENCE SYSTEM
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-start text-left mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              BEYOND THE MODEL.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              SYSTEM LEVEL AI.
            </span>
          </h2>
          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-2xl mt-6 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Integrating models into useful, verifiable software architectures. I design the pipeline around models, handling retrieval, validation guardrails, and secure workflows.
          </p>
        </motion.div>

        {/* Interactive Pipeline Monitor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Horizontal Pipeline Blocks (8 Cols) */}
          <div className="lg:col-span-8 w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-4 bg-[#0E0C0A] border border-[#8C6D4F]/25 rounded-sm relative">
            {/* Minimal pins on pipeline block */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8C6D4F]/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8C6D4F]/30" />

            {pipelineStages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <React.Fragment key={stage.label}>
                  <div
                    onClick={() => setActiveStage(idx)}
                    className={`flex-1 flex flex-col items-center justify-center p-3.5 rounded-sm border transition-all duration-300 cursor-pointer text-center select-none relative group ${
                      isActive 
                        ? 'bg-[#120F0C] border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.12)]' 
                        : 'bg-black/40 border-[#8C6D4F]/25 text-[#A8988B] hover:border-[#8C6D4F]'
                    }`}
                  >
                    <div className={`mb-2 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-[#D4AF37]' : 'text-[#8C6D4F]'}`}>
                      {stage.icon}
                    </div>
                    <span className="text-[9.5px] font-mono tracking-widest font-semibold block">
                      {stage.label}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 transition-all duration-300 ${isActive ? 'bg-[#D4AF37] scale-125' : 'bg-[#8C6D4F]/40'}`} />
                  </div>

                  {idx < pipelineStages.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-[#8C6D4F]/30">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Readout panel for selected node (4 Cols) */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-[#0E0C0A] border border-[#8C6D4F]/25 rounded-sm p-6 h-full flex flex-col justify-between text-left relative">
              
              {/* Corner pins */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#D4AF37]/50" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#D4AF37]/50" />

              <div>
                <div className="flex justify-between items-center text-[9px] font-mono text-[#8C6D4F] border-b border-[#8C6D4F]/20 pb-2.5">
                  <span>PIPELINE INDEX // 0{activeStage + 1}</span>
                  <span className="text-[#D4AF37]">SYSTEM_OK</span>
                </div>
                
                <h3 
                  className="text-lg text-white tracking-wider uppercase mt-4 font-semibold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {pipelineStages[activeStage].label} SPEC
                </h3>
                
                <p className="text-[11px] font-mono text-[#D4AF37] block mt-1 tracking-wider">
                  {pipelineStages[activeStage].tech}
                </p>

                <p className="text-xs text-[#B3A497] leading-relaxed mt-3 font-light font-sans">
                  {pipelineStages[activeStage].desc}
                </p>
              </div>
              
              <div className="text-[8px] font-mono text-[#8C6D4F]/60 border-t border-[#8C6D4F]/15 pt-3 mt-4 text-right">
                EXCLUDES DEEP PRETRAINING CLAIMS
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GenAI;
