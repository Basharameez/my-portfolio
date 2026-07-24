import { useState } from 'react';

interface TechCategory {
  title: string;
  items: string[];
}

interface TechMapProps {
  onHighlightProject: (name: string) => void;
}

export const TechMap = ({ onHighlightProject }: TechMapProps) => {
  const categories: TechCategory[] = [
    {
      title: 'Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Frontend Frameworks',
      items: ['React', 'Vite', 'Tailwind CSS', 'Plotly.js', 'D3.js']
    },
    {
      title: 'Backend Services',
      items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets']
    },
    {
      title: 'Databases & Storage',
      items: ['PostgreSQL', 'Supabase', 'MongoDB', 'SQLite']
    },
    {
      title: 'Engineering Tools',
      items: ['Git', 'GitHub', 'Docker', 'PySide6', 'Qt WebEngine']
    }
  ];

  const projectTechMapping: Record<string, string[]> = {
    'RotorDyn': ['Python', 'FastAPI', 'PySide6', 'PostgreSQL', 'Qt WebEngine', 'Plotly.js'],
    'CodeOrigin': ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'SQL'],
    'python_web_compiler': ['Python', 'Flask', 'Matplotlib', 'Pandas', 'HTML5', 'JavaScript'],
    'student-info-portal': ['HTML5', 'CSS3', 'JavaScript', 'SheetJS'],
    'INTEL_3': ['Python', 'SQLite', 'Jupyter', 'Ipywidgets', 'Hashlib'],
    'Explainable AI Research': ['Python', 'Neural Networks', 'Explainable AI', 'NumPy', 'Matplotlib']
  };

  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Determine which projects use the selected tech
  const getLinkedProjects = (tech: string) => {
    return Object.keys(projectTechMapping).filter((proj) =>
      projectTechMapping[proj].some(
        (t) => t.toLowerCase() === tech.toLowerCase()
      )
    );
  };

  const activeProjects = selectedTech ? getLinkedProjects(selectedTech) : [];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-6 select-none font-mono">
      {/* Category Matrices List */}
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div key={cat.title} className="p-4 border border-[#1E202B] bg-[#121319] rounded-lg">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">{cat.title}</span>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((tech) => {
                const isSelected = selectedTech === tech;
                return (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(isSelected ? null : tech)}
                    className={`text-xs px-2.5 py-1 rounded transition-colors ${
                      isSelected
                        ? 'border border-[#00F0FF] bg-[#00F0FF]/10 text-[#00F0FF]'
                        : 'border border-[#1E202B] bg-[#0A0A0C] hover:border-gray-600 text-gray-300'
                    }`}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Telemetry Panel */}
      <div className="lg:col-span-2 border border-[#1E202B] bg-[#121319] rounded-xl p-6 flex flex-col justify-between overflow-hidden shadow-xl min-h-[300px]">
        <div>
          <span className="text-[10px] text-[#7000FF] font-bold uppercase tracking-wider block">Connection telemetry</span>
          {selectedTech ? (
            <div className="mt-4">
              <h3 className="text-xl font-bold font-sans text-gray-200">
                {selectedTech} <span className="text-xs text-gray-500 font-mono">SELECTED</span>
              </h3>
              <p className="text-xs text-gray-400 font-sans mt-3 leading-relaxed">
                Evaluating system node routing targets using this tech specification...
              </p>

              <div className="mt-6">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest block mb-2">Linked Project Node Schemas</span>
                {activeProjects.length > 0 ? (
                  <div className="flex flex-col gap-1.5">
                    {activeProjects.map((proj) => (
                      <button
                        key={proj}
                        onClick={() => onHighlightProject(proj)}
                        className="w-full p-3 rounded bg-[#0A0A0C] border border-[#1E202B] hover:border-[#00F0FF] text-left text-xs transition-colors flex justify-between items-center"
                      >
                        <span className="text-gray-300 font-sans font-semibold">{proj}</span>
                        <span className="text-[9px] text-[#00F0FF] uppercase tracking-widest">Open Details &rarr;</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-[11px] text-gray-500 leading-snug">
                    Used across proprietary workflows, academic telemetry layers, or sandbox scripts.
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-gray-500 flex flex-col justify-center items-center h-full min-h-[160px] text-center px-4 font-sans text-sm mt-8">
              <span className="text-2xl mb-2">💡</span>
              Click any tech tag in the left matrices categories to query connections across projects.
            </div>
          )}
        </div>

        {/* Footer log */}
        <div className="border-t border-[#1E202B] pt-4 mt-6 flex items-center justify-between text-[9px] text-gray-500 uppercase tracking-wider">
          <span>Query Registry: 0x{selectedTech ? selectedTech.toUpperCase().substring(0, 8) : 'NULL'}</span>
          <span>Matrix Status: IDLE</span>
        </div>
      </div>
    </div>
  );
};
