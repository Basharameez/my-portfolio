import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Shield } from 'lucide-react';

interface CandidateProfile {
  id: string;
  name: string;
  targetRole: string;
  skills: string[];
  score: number;
  vitestPass: string;
  tokensUsed: number;
  latencyMs: number;
  aiBreakdown: {
    systemDesign: number;
    aiEngineering: number;
    testReliability: number;
    backendArch: number;
  };
  keyEvidence: string;
}

const candidates: CandidateProfile[] = [
  {
    id: 'cand_1',
    name: 'Shaik Rameez Basha',
    targetRole: 'AI/ML + Full-Stack Software Engineer',
    skills: ['Python', 'PyTorch', 'Next.js 15', 'TypeScript', 'FastAPI', 'Redis', 'BullMQ', 'Vitest'],
    score: 96.8,
    vitestPass: '170 / 170 (38 Files Passed)',
    tokensUsed: 4280,
    latencyMs: 340,
    aiBreakdown: {
      systemDesign: 98,
      aiEngineering: 96,
      testReliability: 100,
      backendArch: 95,
    },
    keyEvidence: 'Verified 170 Vitest unit/integration tests passed; built production BullMQ worker queue & IEEE published ML framework.',
  },
  {
    id: 'cand_2',
    name: 'Alex Rivera',
    targetRole: 'Senior Full-Stack Developer',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL'],
    score: 84.2,
    vitestPass: '42 / 45 (4 Files Passed)',
    tokensUsed: 3120,
    latencyMs: 410,
    aiBreakdown: {
      systemDesign: 85,
      aiEngineering: 72,
      testReliability: 82,
      backendArch: 88,
    },
    keyEvidence: 'Strong web frontend & API skills; limited deep ML model calibration & test evidence.',
  },
  {
    id: 'cand_3',
    name: 'Priya Sharma',
    targetRole: 'AI Research Engineer',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'CUDA', 'OpenCV'],
    score: 88.5,
    vitestPass: '28 / 30 (3 Files Passed)',
    tokensUsed: 5100,
    latencyMs: 520,
    aiBreakdown: {
      systemDesign: 78,
      aiEngineering: 97,
      testReliability: 85,
      backendArch: 80,
    },
    keyEvidence: 'Excellence in deep vision architectures; lower full-stack distributed queue & production web deployment experience.',
  },
];

export const AptivueSim: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('cand_1');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evalStep, setEvalStep] = useState<number>(0);

  const activeCand = candidates.find(c => c.id === selectedId) || candidates[0];

  const handleRunEval = () => {
    setIsEvaluating(true);
    setEvalStep(1);

    setTimeout(() => setEvalStep(2), 400);
    setTimeout(() => setEvalStep(3), 900);
    setTimeout(() => {
      setEvalStep(4);
      setIsEvaluating(false);
    }, 1400);
  };

  return (
    <div className="w-full bg-[#0B0B10] border border-white/15 rounded-2xl p-6 sm:p-8 relative text-left shadow-2xl overflow-hidden backdrop-blur-md">
      
      {/* Simulator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
              FLAGSHIP DEMO // APTIVUE AI-NATIVE HIRING EVALUATION ENGINE
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white font-display">
            Gemini 1.5 Pro Candidate Assessment &amp; BullMQ Queue Simulator
          </h3>
        </div>

        <button
          onClick={handleRunEval}
          disabled={isEvaluating}
          className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#D4AF37] hover:bg-[#c29f2e] text-black font-mono font-bold text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50 cursor-pointer"
        >
          <Play className={`w-3.5 h-3.5 fill-black ${isEvaluating ? 'animate-spin' : ''}`} />
          <span>{isEvaluating ? 'RUNNING EVALUATION...' : 'RUN GEMINI 1.5 EVAL'}</span>
        </button>
      </div>

      {/* Candidate Selector */}
      <div className="mb-6">
        <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-2 font-bold">
          SELECT CANDIDATE DOSSIER TO EVALUATE:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {candidates.map((cand) => {
            const isSelected = cand.id === selectedId;
            return (
              <button
                key={cand.id}
                onClick={() => {
                  setSelectedId(cand.id);
                  setEvalStep(0);
                }}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold font-display text-white">{cand.name}</span>
                  {cand.id === 'cand_1' && (
                    <span className="px-2 py-0.5 text-[8px] font-mono font-bold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 rounded">
                      CANDIDATE
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-mono text-neutral-400 block truncate">
                  {cand.targetRole}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Pipeline Processing Pipeline */}
      {isEvaluating && (
        <div className="mb-6 p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-[#D4AF37]">
            <span>STAGES: {evalStep}/4 EXECUTING...</span>
            <span>GEMINI 1.5 PRO LATENCY: {activeCand.latencyMs}ms</span>
          </div>
          <div className="w-full bg-black/60 h-2 rounded-full overflow-hidden border border-white/10">
            <motion.div
              className="bg-[#D4AF37] h-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(evalStep / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-[10px] font-mono text-neutral-300">
            {evalStep === 1 && 'Step 1: Extracting resume AST & skill vector embeddings...'}
            {evalStep === 2 && 'Step 2: Dispatching async BullMQ queue job to Redis...'}
            {evalStep === 3 && 'Step 3: Querying Gemini 1.5 Pro with anti-hallucination prompts...'}
            {evalStep === 4 && 'Step 4: Verification complete! Score computed with 0 hallucination.'}
          </div>
        </div>
      )}

      {/* Evaluation Results Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Overall Score Meter */}
        <div className="p-5 rounded-xl bg-black/70 border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1 font-bold">
              AI MATCH EVALUATION SCORE
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black font-mono text-[#D4AF37]">
                {activeCand.score}%
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">MATCH FIT</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-neutral-400">
              <span>Vitest Suite Evidence:</span>
              <span className="text-emerald-400 font-bold">{activeCand.vitestPass}</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Token Latency:</span>
              <span className="text-white font-bold">{activeCand.latencyMs} ms</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Tokens Consumed:</span>
              <span className="text-white font-bold">{activeCand.tokensUsed.toLocaleString()} tokens</span>
            </div>
          </div>
        </div>

        {/* Skill Breakdown Radar Matrix */}
        <div className="p-5 rounded-xl bg-black/70 border border-white/10 lg:col-span-2 flex flex-col justify-between">
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-3 font-bold">
            GEMINI 1.5 PRO MULTI-DIMENSIONAL COMPETENCY MATRIX
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            {[
              { label: 'System Design', score: activeCand.aiBreakdown.systemDesign },
              { label: 'AI Engineering', score: activeCand.aiBreakdown.aiEngineering },
              { label: 'Test Reliability', score: activeCand.aiBreakdown.testReliability },
              { label: 'Backend Arch', score: activeCand.aiBreakdown.backendArch },
            ].map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <span className="text-[9px] font-mono text-neutral-400 block mb-1">{m.label}</span>
                <div className="flex items-center justify-between">
                  <span className="text-base font-mono font-bold text-white">{m.score}%</span>
                  <div className="w-12 bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#D4AF37] h-full" style={{ width: `${m.score}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Evidence Highlight */}
          <div className="p-3.5 rounded-lg bg-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-start gap-2 text-xs font-mono">
            <Shield className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#D4AF37] uppercase block text-[9px] mb-0.5">
                VERIFIED EMPIRICAL EVIDENCE
              </span>
              <p className="text-neutral-300 font-sans text-[11px] leading-tight">
                {activeCand.keyEvidence}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Tech Stack Chips */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider self-center mr-2">
          VERIFIED TECH STACK:
        </span>
        {activeCand.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 text-[10px] font-mono font-semibold bg-white/5 border border-white/10 rounded-md text-neutral-300"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
};

export default AptivueSim;
