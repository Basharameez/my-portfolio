import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, FileSpreadsheet, Orbit, GitFork, Play, Brain, GraduationCap } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: string;
  icon: any;
  problem: string;
  technologies: string[];
  features: string[];
  decisions: string;
  limitations: string;
  github?: string;
  visualizationType: string;
}

interface ProjectExplorerProps {
  activeProjectName: string | null;
  onCloseName: () => void;
}

export const ProjectExplorer = ({ activeProjectName, onCloseName }: ProjectExplorerProps) => {
  const projects: Project[] = [
    {
      id: 'RotorDyn',
      name: 'RotorDyn',
      category: 'Proprietary Industrial Analytics',
      icon: Orbit,
      problem: 'Processing, logging, and visualizing high-frequency rotor bearing telemetry waveforms to identify structural vibration anomalies.',
      technologies: ['Python', 'FastAPI', 'PySide6', 'PostgreSQL', 'Qt WebEngine', 'Plotly.js'],
      features: [
        'Ingestion pipelines mapping microsecond vibration time-series data',
        'Interactive orbit curves and spectral plot visualizers',
        'Cross-platform validation suite executing with Qt/PySide frameworks'
      ],
      decisions: 'We separated the data ingestion engine from the visual client using local WebSocket routing. This prevented high-frequency visual updates from blocking the data processing worker threads, maintaining a stable UI frame rate.',
      limitations: 'Limited to local industrial sensors telemetry. This is a proprietary system; the simulation below demonstrates conceptual waveform harmonics.',
      visualizationType: 'rotordyn'
    },
    {
      id: 'CodeOrigin',
      name: 'CodeOrigin',
      category: 'Developer Audit Intelligence',
      icon: GitFork,
      problem: 'Evaluating repository profiles for license violations, code quality technical debt, and security vectors.',
      technologies: ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'AST Parsing'],
      features: [
        'Syntactic structures mapping using Python ast.NodeVisitor patterns',
        'Automatic third-party package security checks',
        'Evidence Graph schemas indexing database compliance records'
      ],
      decisions: 'We opted for AST traversal instead of regular expression search parameters to determine code complexity. While regex scans are faster, compiling the true Abstract Syntax Tree avoids false-positives in comments or text variables.',
      limitations: 'AST analysis is optimized for Python modules. JavaScript and TypeScript tree-sitter mappings are scheduled for future sprints.',
      github: 'https://github.com/Basharameez/codeorigin',
      visualizationType: 'codeorigin'
    },
    {
      id: 'python_web_compiler',
      name: 'python_web_compiler',
      category: 'Developer Code Sandboxes',
      icon: Play,
      problem: 'Executing user-submitted Python code blocks inside web playgrounds, capturing standard stdout console streams and visual plot canvases.',
      technologies: ['Python', 'Flask', 'Matplotlib', 'Pandas', 'HTML5', 'JavaScript'],
      features: [
        'Console output redirection using contextlib.redirect_stdout buffers',
        'Matplotlib figure scanning, rendering plots into base64 image strings',
        'Flexible client uploads supporting custom CSV spreadsheet parameters'
      ],
      decisions: 'To capture matplotlib outputs without writing static images to disk for every request, we extract figures directly from memory using binary buffers, preventing file system overhead and read/write access collisions.',
      limitations: 'No Security Sandbox: The system runs exec() commands on the host parent environment. It is restricted to local sandbox tools or trusted environments.',
      github: 'https://github.com/Basharameez/python_web_compiler',
      visualizationType: 'compiler'
    },
    {
      id: 'student-info-portal',
      name: 'student-info-portal',
      category: 'Client Spreadsheet dashboards',
      icon: FileSpreadsheet,
      problem: 'Building database query dashboards for institutional student cohorts without backend database servers or hosting costs.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SheetJS'],
      features: [
        'Local binary Excel data decompressions inside the browser space',
        'Regex query indexes filtering roster cards dynamically',
        'Robust path fallbacks resolving missing portrait attachments'
      ],
      decisions: 'We used SheetJS to parse spreadsheet arrays directly client-side. For cohorts under 1,000 students, local decompressions perform faster than remote backend server API requests, keeping infrastructure requirements at zero.',
      limitations: 'Read-only static workflow. Cannot write, update, or remove spreadsheet records from the client viewport.',
      github: 'https://github.com/Basharameez/student-info-portal',
      visualizationType: 'student'
    },
    {
      id: 'INTEL_3',
      name: 'INTEL_3',
      category: 'Relational Tutors',
      icon: GraduationCap,
      problem: 'Prototyping database schemas and rules matrices to adapt resource suggestions to user evaluation metrics.',
      technologies: ['Python', 'SQLite', 'Jupyter', 'Ipywidgets', 'Hashlib'],
      features: [
        'Persistent score updates in local SQLite relational schemas',
        'Adaptive routing heuristics branching students to math paths',
        'Interactive console views inside Jupyter using IPython controls'
      ],
      decisions: 'SQLite and Ipywidgets were chosen to rapidly prototype database states and adaptive parameters in a single document before dedicating resources to a full web system.',
      limitations: 'Highly notebook-centric. The UI relies entirely on active Jupyter cell runtimes.',
      github: 'https://github.com/Basharameez/INTEL_3',
      visualizationType: 'tutor'
    },
    {
      id: 'Explainable AI Research',
      name: 'Explainable AI Research',
      category: 'Neural Models Interpretation',
      icon: Brain,
      problem: 'Providing transparent explanations for deep learning model predictions by highlighting active weights and neural pathways.',
      technologies: ['Python', 'Neural Networks', 'Explainable AI', 'NumPy', 'Matplotlib'],
      features: [
        'Neural weights activation mapping tracing node connections',
        'Visual layer heatmaps identifying active input features',
        'IEEE Xplore published paper metrics representing weight distributions'
      ],
      decisions: 'We engineered custom visualization layers to display neural attention grids, helping researchers trace exactly how internal nodes weights affect decision classification routes.',
      limitations: 'Visual maps are structured for feedforward and convolutional neural layers.',
      github: 'https://github.com/Basharameez',
      visualizationType: 'xai'
    }
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync state if selection is triggered from parent EngineeringCore
  useEffect(() => {
    if (activeProjectName) {
      const match = projects.find(p => p.id === activeProjectName || p.name === activeProjectName);
      if (match) setSelectedProject(match);
    }
  }, [activeProjectName]);

  const handleClose = () => {
    setSelectedProject(null);
    onCloseName();
  };

  return (
    <div className="w-full select-none font-mono">
      {/* Overview Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => {
          const Icon = proj.icon;
          return (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="tactile-card border border-[#1E202B] bg-[#121319] hover:border-[#00F0FF] p-6 cursor-pointer flex flex-col justify-between h-[220px]"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] text-[#7000FF] font-bold uppercase tracking-wider">{proj.category}</span>
                  <Icon size={18} className="text-gray-500" />
                </div>
                <h3 className="text-lg font-bold font-sans text-gray-200 mt-2">{proj.name}</h3>
                <p className="text-xs text-gray-400 font-sans line-clamp-3 mt-1 leading-relaxed">{proj.problem}</p>
              </div>
              <span className="text-[10px] text-[#00F0FF] uppercase tracking-widest font-semibold mt-4">Inspect Architecture &rarr;</span>
            </div>
          );
        })}
      </div>

      {/* Immersive Modular Project Focus View Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0C]/95 z-40 overflow-y-auto p-4 md:p-8 flex items-center justify-center font-mono scanline"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-5xl bg-[#121319] border border-[#1E202B] rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[550px]"
            >
              {/* Left Column: Tech Details & Specifications */}
              <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1E202B]">
                <div className="flex flex-col gap-6">
                  {/* Title Bar */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-[#7000FF] font-bold uppercase tracking-wider">{selectedProject.category}</span>
                      <h2 className="text-2xl font-bold font-sans text-[#E2E8F0] mt-1">{selectedProject.name}</h2>
                    </div>
                    <div className="flex gap-2">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded bg-[#0A0A0C] border border-[#1E202B] hover:border-[#00F0FF] text-gray-400 hover:text-[#00F0FF] transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      <button
                        onClick={handleClose}
                        className="p-2 rounded bg-[#0A0A0C] border border-[#1E202B] hover:border-red-500 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Copy */}
                  <div>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest block mb-2">Target Problem</span>
                    <p className="text-sm text-gray-300 font-sans leading-relaxed">{selectedProject.problem}</p>
                  </div>

                  {/* Architecture & Decisions */}
                  <div>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest block mb-2">Engineering Decision</span>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">{selectedProject.decisions}</p>
                  </div>

                  {/* Limitations */}
                  <div>
                    <span className="text-[9px] text-red-500/80 uppercase tracking-widest block mb-2">System Limitations</span>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">{selectedProject.limitations}</p>
                  </div>
                </div>

                {/* Tech Badges List */}
                <div className="mt-8 pt-6 border-t border-[#1E202B]">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest block mb-3">Tooling Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded bg-[#0A0A0C] border border-[#1E202B] text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Sanitized Interactive Technical Visualizer */}
              <div className="lg:w-1/2 bg-[#0A0A0C] p-6 md:p-8 flex flex-col justify-between min-h-[300px]">
                <div>
                  <span className="text-[9px] text-[#00F0FF] font-bold uppercase tracking-widest">Interactive Telemetry</span>
                  <h3 className="text-sm text-gray-400 mt-1 font-sans">Visualizing system pipeline logic and data flows.</h3>
                </div>

                {/* Interactive Visualizer Canvas Wrapper */}
                <div className="flex-grow flex items-center justify-center my-6 w-full">
                  {selectedProject.visualizationType === 'rotordyn' && <RotorDynWidget />}
                  {selectedProject.visualizationType === 'codeorigin' && <CodeOriginWidget />}
                  {selectedProject.visualizationType === 'compiler' && <CompilerWidget />}
                  {selectedProject.visualizationType === 'student' && <StudentWidget />}
                  {selectedProject.visualizationType === 'tutor' && <TutorWidget />}
                  {selectedProject.visualizationType === 'xai' && <XaiWidget />}
                </div>

                {/* Conceptual label */}
                <div className="border-t border-[#1E202B] pt-4 flex items-center justify-between text-[9px] text-gray-600 uppercase tracking-wider">
                  <span>Visual Class: Conceptual model schema</span>
                  <span>Validation check: PASS</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ====================================================
// SANITIZED CONCEPTUAL WIDGETS
// ====================================================

// 1. RotorDyn Bearing Orbit Simulator
const RotorDynWidget = () => {
  const [freq, setFreq] = useState(1);
  const [amp, setAmp] = useState(60);
  const [phase, setPhase] = useState(0);

  // Generate lissajous ellipse track matching vibration metrics
  const points: string[] = [];
  const cx = 100;
  const cy = 100;
  for (let t = 0; t <= Math.PI * 2; t += 0.05) {
    const x = cx + amp * Math.cos(freq * t);
    const y = cy + amp * Math.sin(t + phase);
    points.push(`${x},${y}`);
  }

  return (
    <div className="w-full max-w-[280px] flex flex-col gap-4">
      <div className="w-[200px] h-[200px] border border-[#1E202B] rounded-lg bg-[#121319] relative mx-auto flex items-center justify-center overflow-hidden">
        <svg className="w-full h-full">
          <line x1="0" y1="100" x2="200" y2="100" stroke="#1E202B" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="#1E202B" strokeWidth="1" />
          <circle cx="100" cy="100" r="30" stroke="#1E202B" fill="none" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="100" cy="100" r="60" stroke="#1E202B" fill="none" strokeWidth="1" strokeDasharray="3,3" />
          <polyline points={points.join(' ')} fill="none" stroke="#00F0FF" strokeWidth="2" />
        </svg>
        <span className="absolute bottom-2 left-2 text-[8px] text-gray-500 tracking-wider">SANITIZED HARMONIC ORBIT</span>
      </div>

      <div className="flex flex-col gap-2 text-xs">
        <div className="flex justify-between items-center text-gray-400">
          <span>Speed Harmonics</span>
          <input
            type="range" min="1" max="4" step="1"
            value={freq} onChange={(e) => setFreq(Number(e.target.value))}
            className="w-24 accent-[#00F0FF]"
          />
        </div>
        <div className="flex justify-between items-center text-gray-400">
          <span>Vibration Amplitude</span>
          <input
            type="range" min="20" max="80"
            value={amp} onChange={(e) => setAmp(Number(e.target.value))}
            className="w-24 accent-[#00F0FF]"
          />
        </div>
        <div className="flex justify-between items-center text-gray-400">
          <span>Shaft Phase Shift</span>
          <input
            type="range" min="0" max="3" step="0.1"
            value={phase} onChange={(e) => setPhase(Number(e.target.value))}
            className="w-24 accent-[#00F0FF]"
          />
        </div>
      </div>
    </div>
  );
};

// 2. CodeOrigin AST Ingestion Flow Tracer
const CodeOriginWidget = () => {
  const steps = [
    { title: 'Zip Ingest', desc: 'Reads repository directory structure.' },
    { title: 'AST Visitor', desc: 'Parses code branches into nodes.' },
    { title: 'Sec Scanner', desc: 'Profiles imports & detects secrets.' },
    { title: 'Evidence Db', desc: 'Stores metrics index in PostgreSQL.' }
  ];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full flex flex-col gap-4 max-w-sm">
      <div className="flex flex-col gap-2">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded text-left border text-xs transition-all flex justify-between items-center ${
              activeStep === idx
                ? 'border-[#00F0FF] bg-[#121319] text-[#00F0FF]'
                : 'border-[#1E202B] bg-[#0A0A0C] text-gray-400'
            }`}
          >
            <span>{idx + 1}. {s.title}</span>
            <span className="text-[9px] uppercase tracking-wider opacity-60">
              {activeStep === idx ? 'ACTIVE' : 'STANDBY'}
            </span>
          </button>
        ))}
      </div>
      <div className="p-3 bg-[#121319] border border-[#1E202B] rounded text-[11px] text-gray-400 leading-relaxed min-h-[60px]">
        <strong>Telemetry:</strong> {steps[activeStep].desc}
      </div>
    </div>
  );
};

// 3. python_web_compiler Run Flow Simulator
const CompilerWidget = () => {
  const [running, setRunning] = useState(false);
  const [outputs, setOutputs] = useState<string[]>(['System idle.', 'Awaiting execution request.']);

  const runCodeSimulation = () => {
    if (running) return;
    setRunning(true);
    setOutputs(['Initializing Python runtime context...', 'Redirecting console stdout to buffer...']);
    
    setTimeout(() => {
      setOutputs((prev) => [...prev, '> exec(code_block, {"pd": pandas, "plt": matplotlib})']);
    }, 400);

    setTimeout(() => {
      setOutputs((prev) => [
        ...prev,
        'STDOUT CAPTURE: "Generating mathematical signal vectors..."',
        'Scanning matplotlib.pyplot.get_fignums()... Found Figure 1.'
      ]);
    }, 900);

    setTimeout(() => {
      setOutputs((prev) => [
        ...prev,
        'SUCCESS: Saved plot as temporary base64 image block.',
        'RUN COMPLETED.'
      ]);
      setRunning(false);
    }, 1400);
  };

  return (
    <div className="w-full flex flex-col gap-3 max-w-sm">
      <button
        onClick={runCodeSimulation}
        disabled={running}
        className="w-full py-2.5 bg-[#121319] border border-[#1E202B] text-xs hover:border-[#00F0FF] text-gray-300 font-bold tracking-wider rounded uppercase active:bg-[#0A0A0C] transition-all"
      >
        {running ? 'Processing...' : 'Simulate Code Execution'}
      </button>

      <div className="h-44 border border-[#1E202B] bg-[#0A0A0C] rounded p-3 font-mono text-[10px] text-gray-400 overflow-y-auto flex flex-col gap-1.5 leading-relaxed">
        {outputs.map((line, idx) => (
          <div key={idx} className="flex gap-1.5 items-start">
            <span className="text-[#7000FF]">&gt;</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. student-info-portal client SheetJS decompressor simulator
const StudentWidget = () => {
  const [stage, setStage] = useState(0);
  const stages = [
    'Awaiting cohort Excel spreadsheet upload request...',
    '1. Asynchronous fetch() reads batch: "2022_batch_ai.xlsx"',
    '2. Loading sheet data array buffer in JS memory space...',
    '3. Calling SheetJS (xlsx.full.min.js) decode logic...',
    '4. Transforming decoded table rows into clean JSON structures...',
    '5. Matching profile cards to roll keys. Render completed.'
  ];

  return (
    <div className="w-full flex flex-col gap-4 max-w-sm text-xs">
      <div className="flex gap-2">
        <button
          onClick={() => setStage((prev) => Math.min(prev + 1, stages.length - 1))}
          disabled={stage === stages.length - 1}
          className="flex-1 py-2 bg-[#121319] border border-[#1E202B] hover:border-[#00F0FF] text-center rounded text-gray-300"
        >
          Next Decoding Step
        </button>
        <button
          onClick={() => setStage(0)}
          className="px-3 py-2 bg-[#121319] border border-[#1E202B] hover:border-red-500 rounded text-gray-400"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        {stages.slice(0, stage + 1).map((s, idx) => (
          <div key={idx} className="p-2 border border-[#1E202B] bg-[#121319]/40 rounded text-[11px] text-gray-400 leading-snug">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};

// 5. INTEL_3 Tutor adaptive path selector simulator
const TutorWidget = () => {
  const [score, setScore] = useState(45);

  const getRecommendedPath = (val: number) => {
    if (val < 30) return { path: 'Beginner Math', topics: 'Addition, Subtraction' };
    if (val < 70) return { path: 'Intermediate Algebra', topics: 'Equations, Graphs' };
    return { path: 'Advanced Calculus', topics: 'Derivatives, Integrals' };
  };

  const path = getRecommendedPath(score);

  return (
    <div className="w-full flex flex-col gap-4 max-w-sm text-xs">
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center text-gray-400 font-sans font-semibold">
          <span>Set Simulated Score</span>
          <span>{score}%</span>
        </div>
        <input
          type="range" min="0" max="100"
          value={score} onChange={(e) => setScore(Number(e.target.value))}
          className="w-full accent-[#00F0FF]"
        />
      </div>

      <div className="p-4 border border-[#1E202B] bg-[#121319] rounded flex flex-col gap-2 mt-2 text-xs">
        <div>
          <span className="text-[9px] text-[#7000FF] font-bold uppercase tracking-wider block">Recommended Path</span>
          <span className="text-gray-200 font-bold mt-1 text-sm font-sans">{path.path}</span>
        </div>
        <div>
          <span className="text-[9px] text-gray-500 uppercase tracking-widest block">Linked Module Topics</span>
          <span className="text-gray-400 mt-1">{path.topics}</span>
        </div>
      </div>
    </div>
  );
};

// 6. Explainable AI Research visual weight connection mapper
const XaiWidget = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodeConnections = [
    { label: 'Pixel [0,0] Intensity', weights: [0.85, 0.12, 0.05] },
    { label: 'Pixel [1,0] Intensity', weights: [0.35, 0.50, 0.15] },
    { label: 'Pixel [0,1] Intensity', weights: [0.10, 0.40, 0.50] },
    { label: 'Pixel [1,1] Intensity', weights: [0.05, 0.15, 0.80] }
  ];

  return (
    <div className="w-full flex flex-col gap-4 max-w-sm text-xs">
      <span className="text-[9px] text-gray-500 uppercase tracking-widest mb-1 block">Inspect Model Input Neurons</span>
      <div className="grid grid-cols-2 gap-2">
        {nodeConnections.map((node, idx) => (
          <button
            key={idx}
            onMouseEnter={() => setActiveNode(idx)}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-2.5 rounded border text-[11px] text-left transition-all ${
              activeNode === idx
                ? 'border-[#00F0FF] bg-[#121319] text-[#00F0FF]'
                : 'border-[#1E202B] bg-[#0A0A0C] text-gray-400'
            }`}
          >
            {node.label}
          </button>
        ))}
      </div>

      <div className="p-3 border border-[#1E202B] bg-[#121319] rounded flex flex-col gap-2 min-h-[90px] text-[11px]">
        {activeNode !== null ? (
          <>
            <span className="text-[9px] text-[#7000FF] font-bold uppercase tracking-wider">Estimated Feature Weights</span>
            <div className="flex flex-col gap-1 mt-1 text-gray-400">
              <div>Output 1: {nodeConnections[activeNode].weights[0]}</div>
              <div>Output 2: {nodeConnections[activeNode].weights[1]}</div>
              <div>Output 3: {nodeConnections[activeNode].weights[2]}</div>
            </div>
          </>
        ) : (
          <div className="text-gray-500 flex items-center justify-center h-full min-h-[60px]">
            Hover over an input neuron node above to trace attention weights.
          </div>
        )}
      </div>
    </div>
  );
};
