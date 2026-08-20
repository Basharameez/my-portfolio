import React from 'react';
import { BookOpen, Award, ExternalLink } from 'lucide-react';
import { publication } from '../../data/portfolioData';

export const Research: React.FC = () => {
  return (
    <section 
      id="research" 
      className="relative w-full bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden border-b border-[#8C6D4F]/15"
    >
      {/* Editorial Dot Pattern */}
      <div className="absolute inset-0 editorial-dot-pattern opacity-[0.08] pointer-events-none" />

      {/* Eyebrow Header */}
      <div className="max-w-7xl mx-auto w-full relative z-10 text-left mb-16">
        <div className="flex items-center space-x-4 mb-5">
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            07 / SCHOLARLY INDEX
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </div>
        
        <h2 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            RESEARCH &amp;
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
            EXPLAINABILITY.
          </span>
        </h2>
      </div>

      {/* Publication Layout Grid */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Left column: Academic dockets */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="w-9 h-9 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            </div>
            
            <h3 
              className="text-lg text-[#EAD8C7] tracking-wider uppercase font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              REPRINT DOSSIER
            </h3>
            
            <p className="text-xs text-[#A8988B] leading-relaxed font-sans font-light">
              Academic research centered on natural language processing, CNN-BiLSTM architectures, and transformer attention explainability frameworks to detect safety-critical patterns in text streams.
            </p>
          </div>

          <div className="text-[9px] font-mono text-[#8C6D4F] border-t border-[#8C6D4F]/20 pt-4 flex flex-col gap-1.5">
            <span>INDEXER: IEEE XPLORE</span>
            <span>PUBLISHED DATE: FEB 23, 2026</span>
            <span>CONFERENCE DATE: NOV 28–29, 2025</span>
          </div>
        </div>

        {/* Right column: Document Body */}
        <div className="lg:col-span-8 bg-[#0E0C0A] border border-[#8C6D4F]/25 rounded-sm p-6 md:p-8 flex flex-col gap-6 relative">
          
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/50" />

          {/* Header title */}
          <div>
            <span className="text-[9px] font-mono font-bold text-[#D4AF37] tracking-widest uppercase flex items-center gap-1.5 mb-2">
              <Award className="w-3.5 h-3.5" /> EXPLAINABLE TEXT CLASSIFICATION NODE
            </span>
            <h3 
              className="text-xl sm:text-2xl text-white leading-tight uppercase font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {publication.title}
            </h3>
            <p className="text-[10px] text-[#A8988B] font-mono mt-3 uppercase tracking-wider leading-relaxed">
              Conference: {publication.conference}
            </p>
          </div>

          {/* Abstract */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[9px] font-mono font-bold text-[#8C6D4F] tracking-widest uppercase">
              ABSTRACT SUMMARY
            </h4>
            <p className="text-xs text-[#B3A497] leading-relaxed font-sans font-light">
              {publication.description}
            </p>
          </div>

          {/* Metadata rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#8C6D4F]/15 pt-6">
            <div>
              <h4 className="text-[9px] font-mono font-bold text-[#8C6D4F] tracking-widest uppercase mb-2">
                AUTHORS list
              </h4>
              <p className="text-xs text-[#A8988B] leading-relaxed font-sans font-light">
                {publication.authors.join(', ')}
              </p>
            </div>
            <div>
              <h4 className="text-[9px] font-mono font-bold text-[#8C6D4F] tracking-widest uppercase mb-2">
                DIGITAL INDEX / DOI
              </h4>
              <a 
                href={publication.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-[#D4AF37] font-mono hover:underline break-all"
              >
                DOI: {publication.doi}
              </a>
            </div>
          </div>

          {/* Keywords */}
          <div className="border-t border-[#8C6D4F]/15 pt-6 flex flex-col gap-3">
            <h4 className="text-[9px] font-mono font-bold text-[#8C6D4F] tracking-widest uppercase">
              Linguistic &amp; Model Tags
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {publication.highlights.map((keyword) => (
                <span 
                  key={keyword}
                  className="text-[9px] font-mono bg-black text-[#A8988B] border border-[#8C6D4F]/25 px-2 py-0.5 rounded-sm"
                >
                  #{keyword.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Link action */}
          <div className="flex justify-end mt-4 border-t border-[#8C6D4F]/15 pt-4">
            <a 
              href={publication.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-mono tracking-widest px-4 py-2.5 bg-[#14100D] border border-[#8C6D4F]/40 hover:border-[#D4AF37] hover:bg-[#1C1612] text-[#EAD8C7] hover:text-[#FFF5EB] rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              READ ON IEEE XPLORE <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
export default Research;
