import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';

export const SecondaryWork: React.FC = () => {
  // Secondary projects (featuredRank > 3)
  const secondaryProjects = projects
    .filter(p => !p.featuredRank || p.featuredRank > 3)
    .sort((a, b) => (a.featuredRank || 99) - (b.featuredRank || 99));

  return (
    <section id="secondary-work" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#070709] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-white/10 pb-6 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2">
            <span>02 // ADDITIONAL ENGINEERING WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Secondary Projects &amp; Microservices
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-2 font-sans">
            Specialized engineering tools, biometric computer vision integrations, static analyzers, and workflow automation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#0E0E12] border border-white/10 hover:border-white/20 rounded-xl p-6 flex flex-col justify-between transition-all duration-200 text-left"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-neutral-400">
                    0{idx + 4} // {proj.category}
                  </span>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <span className="text-xs font-mono text-[#D4AF37]">REPO ↗</span>
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs text-neutral-400 mb-6 font-sans">
                  {proj.tagline || proj.description}
                </p>

                {/* Problem -> Approach -> Result */}
                <div className="space-y-4 text-left border-t border-white/10 pt-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold block mb-1">
                      PROBLEM
                    </span>
                    <p className="text-xs text-neutral-300">
                      {proj.problem}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold block mb-1">
                      ENGINEERING APPROACH
                    </span>
                    <p className="text-xs text-neutral-300">
                      {proj.approach}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">
                      RESULT
                    </span>
                    <p className="text-xs text-neutral-300">
                      {proj.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                {proj.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 text-neutral-400 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SecondaryWork;
