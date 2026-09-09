import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Database, Server, Terminal, Lock } from 'lucide-react';

export const ProductionCredibility: React.FC = () => {
  const capabilities = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      title: 'Automated Testing & QA',
      evidence: '170/170 Vitest unit & integration tests passed across 38 test files in TalentOS/Aptivue, 39/39 validation tests in BioRobust, and 11/11 backend tests in SIH.',
      details: 'Test-driven validation, API edge-case assertions, and automated integration gates.'
    },
    {
      icon: <Server className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Typed Backend Microservices',
      evidence: 'FastAPI & Next.js 15 App Router architecture with strongly typed TypeScript and Python schemas.',
      details: 'Modular service boundaries, Pydantic validation, Zod request contracts, and structured exception handlers.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: 'Async Queue Processing',
      evidence: 'BullMQ + Redis worker queues decoupling heavy parsing & LLM inference from main UI threads.',
      details: 'Asynchronous task queues, background workers, event retry strategies, and rate limiting.'
    },
    {
      icon: <Database className="w-5 h-5 text-purple-400" />,
      title: 'Relational Schemas & Data Layers',
      evidence: 'PostgreSQL, Supabase, Drizzle ORM, SQLAlchemy, and MongoDB Atlas database pipelines.',
      details: 'Relational data modeling, transactional safety, indexing, and FFT signal arrays handling.'
    },
    {
      icon: <Lock className="w-5 h-5 text-amber-400" />,
      title: 'Security & State Machine Controls',
      evidence: 'Auditable state-machine workflow enforcement with multi-tenant role access controls & JWT keys.',
      details: 'Row-Level Security (RLS), locked phase transitions, and encrypted session tokens.'
    },
    {
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      title: 'Containerized Cloud Deployment',
      evidence: 'Docker multi-stage builds, Vercel, Render, and automated CI/CD deployment workflows.',
      details: 'Isolated execution sandboxes, environment management, and production build optimization.'
    }
  ];

  return (
    <section id="engineering-maturity" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#070709] border-b border-white/10 relative">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2">
            <span>04 // PRODUCTION ENGINEERING &amp; RELIABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Engineering Maturity &amp; Verified Evidence
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-2 font-sans">
            Demonstrable software engineering practices backed by automated testing, typed contracts, async queues, and relational data architecture.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  {cap.icon}
                </div>
                <h3 className="text-base font-bold text-white font-display mb-2">
                  {cap.title}
                </h3>
                <div className="text-xs font-mono text-[#D4AF37] mb-3 p-2.5 rounded bg-black/50 border border-[#D4AF37]/20">
                  {cap.evidence}
                </div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {cap.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductionCredibility;
