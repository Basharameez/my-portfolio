import React from 'react';
import { Sparkles, Terminal, Activity, Code } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';

export const About: React.FC = () => {
  const focusCategories = [
    {
      title: 'Full-Stack Development',
      description: 'Building responsive React widgets, FastAPI microservice logic, database relational models, and Websockets streaming.',
      icon: <Code className="w-5 h-5 text-red-600" />
    },
    {
      title: 'AI / Data Engineering',
      description: 'Implementing explainable AI interpretability modules, attributions, PyTorch networks, and telemetry diagnostics plots.',
      icon: <Sparkles className="w-5 h-5 text-red-600" />
    },
    {
      title: 'Developer Compilers',
      description: 'Auditing code quality metrics, parsing compiler AST nodes, and analyzing repository architectures.',
      icon: <Terminal className="w-5 h-5 text-red-600" />
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-white/40 border-y border-neutral-200/40">
      
      {/* Background patterns */}
      <div className="absolute inset-0 editorial-dot-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left column: Oversized editorial segment indicator */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="sticky top-28">
            <span className="text-7xl sm:text-8xl font-black text-neutral-200/80 block leading-none select-none">
              01
            </span>
            <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-widest mt-2 border-l-4 border-red-600 pl-4">
              ABOUT SYSTEM
            </h2>
            <p className="text-xs font-mono font-bold text-neutral-400 mt-2 tracking-widest uppercase">
              ENGINEERING LOGS // SRB
            </p>
          </div>
        </div>

        {/* Right column: Narrative and focus categories */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Main Narrative */}
          <div className="flex flex-col gap-4">
            <p className="text-xl sm:text-2xl font-black text-neutral-900 leading-snug">
              I am a Computer Science and Artificial Intelligence engineer focused on building complete, production-ready software systems.
            </p>
            <p className="text-neutral-500 leading-relaxed">
              I enjoy working across the full development lifecycle — from understanding a complex system problem and designing relational architectures to implementing, testing, deploying, and continually improving live applications. I prioritize code transparency, static types compilation security, and modular scaling.
            </p>
          </div>

          {/* Focus Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {focusCategories.map((category) => (
              <NeumorphicCard 
                key={category.title} 
                hoverable 
                className="flex flex-col gap-4 bg-white"
              >
                <div className="w-10 h-10 rounded-xl neumorphic-inset flex items-center justify-center bg-neutral-50 border border-neutral-100">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-2">
                    {category.description}
                  </p>
                </div>
              </NeumorphicCard>
            ))}
          </div>

          {/* Current Interests List */}
          <div className="mt-4 border-t border-neutral-200/60 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold text-red-600 tracking-widest uppercase flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" /> CURRENT FOCUS INTERESTS
              </h4>
              <ul className="mt-4 flex flex-col gap-3 text-xs text-neutral-500 font-semibold">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span> AI-powered developer tools &amp; AST parsers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span> Large-scale vibration telemetry visualizations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span> Low-latency MLOps control engines
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-red-600 tracking-widest uppercase">
                ENGINEERING PRAGMATICS
              </h4>
              <p className="text-xs text-neutral-500 mt-4 leading-relaxed font-medium">
                My approach values building concrete, stable architectures over complex, hard-to-maintain abstractions. Every diagram, route structure, and dashboard module is built to address functional requirements.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
export default About;
