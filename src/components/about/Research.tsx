import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { publication } from '../../data/portfolioData';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#070709] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2">
            <span>03 // SCHOLARLY RESEARCH &amp; EXPLAINABLE AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            IEEE Publication &amp; Model Interpretability
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-2 font-sans">
            Peer-reviewed research published in IEEE Xplore focusing on Explainable AI (XAI) and Transformer text classification architectures.
          </p>
        </div>

        {/* Main Publication Card */}
        <div className="bg-[#0E0E12] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#D4AF37] uppercase font-bold block">
                  {publication.publisher} &bull; INDEXED PAPER
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  Presented: {publication.date} | Published: {publication.addedDate}
                </span>
              </div>
            </div>

            {/* IEEE Link Action */}
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#D4AF37] hover:bg-[#c29f2e] text-black text-xs font-bold uppercase rounded transition-colors"
            >
              <span>View IEEE Publication</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Publication Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
            {publication.title}
          </h3>

          <p className="text-xs font-mono text-[#D4AF37] mb-6">
            DOI: <a href={publication.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{publication.doi}</a>
          </p>

          {/* Description / Abstract */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
              RESEARCH ABSTRACT &amp; OBJECTIVE
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-4xl">
              {publication.description}
            </p>
          </div>

          {/* Methodology Blocks */}
          {publication.methodology && (
            <div className="mb-8 border-t border-white/10 pt-6">
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                METHODOLOGY &amp; MODEL ARCHITECTURES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {publication.methodology.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#070709] border border-white/10 text-xs text-neutral-300 font-mono flex items-center space-x-2">
                    <span className="text-[#D4AF37] font-bold">0{idx + 1}.</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights & Keywords */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 mr-2">TECH TAGS:</span>
            {publication.highlights.map((h) => (
              <span key={h} className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/10 text-neutral-300 rounded">
                #{h}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Research;
