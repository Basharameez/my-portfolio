import type { Project, Milestone, TechCategory, ArchitectureLayer, SdlcStep } from '../types';

export const projects: Project[] = [
  {
    id: 'rotordyn',
    title: 'RotorDyn',
    category: 'Industrial Analytics Platform',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Supabase', 'Plotly.js', 'D3.js'],
    description: 'A production-oriented industrial vibration analysis platform involving data ingestion, visualization, diagnostics, and desktop application architecture.',
    overview: 'RotorDyn monitors and diagnoses rotating machinery in industrial environments. By analyzing high-frequency accelerometer vibration telemetry, the system detects anomalies, performs spectral analyses (FFT), and flags machinery faults before catastrophic failures occur.',
    architecture: 'Implements a decoupled microservices design: high-throughput sensor telemetry ingestion workers stream raw data to a PostgreSQL buffer, while a FastAPI server exposes REST and WebSocket endpoints for real-time waterfall charts. Desktop components utilize PySide6.',
    engineering: 'Engineered custom Fast Fourier Transform (FFT) post-processing workers in Python. Designed custom React SVG widgets and Plotly dashboards capable of rendering 100,000+ data coordinates concurrently without UI stutter.',
    challenges: 'Optimizing real-time rendering performance for raw high-frequency waveforms. Resolved by building lightweight canvas wrappers that render static frame buffers, offloading FFT calculations to background Python worker threads.',
    outcome: 'Enabled predictive maintenance schedules across multiple industrial installations, reducing diagnostic review times from hours to minutes.',
    pipelineSteps: [
      { label: 'DATA', info: 'Raw accelerometer sensors capture machinery vibration telemetry.' },
      { label: 'UPLOAD', info: 'Streams raw data packets to high-throughput ingestion endpoints.' },
      { label: 'PARSING', info: 'Ingestion workers deserialize binary streams, compute FFT, and log records.' },
      { label: 'ANALYSIS', info: 'Diagnostic engines evaluate spectral faults and generate anomaly scores.' },
      { label: 'VISUALIZATION', info: 'React canvas charts render high-frequency spectrums and waterfalls.' },
      { label: 'REPORTING', info: 'Automated PDF reports compile structural logs for engineering leads.' }
    ]
  },
  {
    id: 'modelforge',
    title: 'ModelForge',
    category: 'MLOps / AI Infrastructure',
    technologies: ['PyTorch', 'FastAPI', 'React', 'Docker', 'MongoDB', 'Redis'],
    description: 'An advanced MLOps platform focused on machine learning workflow management, model evaluation, lifecycle tracking, and production AI deployment infrastructure.',
    overview: 'ModelForge provides a unified control plane for tracking machine learning experiment configurations, managing model assets, and serving prediction pipelines with built-in telemetry.',
    architecture: 'Built on microservice layers including FastAPI gateways, Redis task queues, Docker containers for sandboxed evaluations, and MongoDB for experiment metadata storage.',
    engineering: 'Created a modular SDK for developers to log training hyperparameters, model weights, and performance metrics. Designed a real-time dashboard to compare training runs side-by-side.',
    challenges: 'Handling concurrent large-file weights uploads (5GB+) without exhausting server memory. Solved by writing a chunked, direct-to-storage upload parser with validation hashes.',
    outcome: 'Standardized model registration, reducing model deployment friction from days to a single automated CI/CD pipeline stage.',
    pipelineSteps: [
      { label: 'DATA', info: 'Aggregates structured datasets and registers source metadata.' },
      { label: 'TRAINING', info: 'Tracks training configurations, parameters, and loss metrics.' },
      { label: 'EVALUATION', info: 'Benchmarks models against validation slices for regression checks.' },
      { label: 'MANAGEMENT', info: 'Registers verified weights in the storage vault with unique version tags.' },
      { label: 'DEPLOYMENT', info: 'Containers package model code and spin up low-latency REST endpoints.' }
    ]
  },
  {
    id: 'codeorigin',
    title: 'CodeOrigin',
    category: 'Technical Due Diligence Platform',
    technologies: ['FastAPI', 'Python AST', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    description: 'A codebase intelligence platform designed to analyze software repositories, engineering quality, structural architecture, and compliance risk.',
    overview: 'CodeOrigin scans software codebases to provide technical due diligence insights during company acquisitions. It audits licensing, identifies security vulnerabilities, and evaluates code complexity.',
    architecture: 'Uses a multi-process Python worker pool to parse Abstract Syntax Trees (AST) and run static analysis rules, storing analysis logs in PostgreSQL and rendering nodes in React.',
    engineering: 'Wrote an abstract syntax tree analyzer in Python to detect cyclical package dependencies and parse structural code quality. Built an interactive React-flow hierarchy visualizer.',
    challenges: 'Processing very large codebases (1M+ lines) efficiently without bottlenecking the main event loop. Solved by employing multiprocessing worker queues that process directories concurrently.',
    outcome: 'Streamlined due diligence engineering audits, shortening architectural assessment cycles from two weeks to under an hour.',
    pipelineSteps: [
      { label: 'REPOSITORY', info: 'Clones and reads source codebases into safe sandboxed workspaces.' },
      { label: 'ANALYSIS', info: 'Static parsers run AST scans to assess quality and complexity.' },
      { label: 'ARCHITECTURE', info: 'Maps import/export dependencies to build structural design charts.' },
      { label: 'RISK', info: 'Identifies software vulnerabilities, licenses, and technical debt.' },
      { label: 'INSIGHTS', info: 'Outputs interactive compliance, architectural, and financial audit files.' }
    ]
  },
  {
    id: 'infrasight',
    title: 'InfraSight AI',
    category: 'AI Infrastructure Audit Tool',
    technologies: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'Docker', 'OpenAI API'],
    description: 'A full-stack AI-oriented system for analyzing cloud infrastructure layouts, identifying security gaps, and recommending cost optimizations.',
    overview: 'InfraSight AI reads cloud configuration state files (e.g., Terraform, cloud provider configs) and applies natural language reasoning models to discover performance bottlenecks and cost leaks.',
    architecture: 'Features a Node.js backend to parse infrastructure blueprints, a Python FastAPI microservice for running embedding searches, and a React interface displaying visual maps.',
    engineering: 'Built a custom parser that reads infrastructure state files and generates structured vector descriptions. Integrated OpenAI model streams for conversational topology troubleshooting.',
    challenges: 'Ensuring absolute privacy for sensitive system configuration blueprints. Resolved by building an on-premise preprocessing filter that scrubs secrets, API keys, and IP ranges prior to model inspection.',
    outcome: 'Reduced average cloud spending by 25% and identified critical network firewall misconfigurations in minutes.',
    pipelineSteps: [
      { label: 'BLUEPRINTS', info: 'Ingests cloud configuration states (Terraform/JSON).' },
      { label: 'ANONYMIZER', info: 'Filters out secrets, credentials, and network IP addresses.' },
      { label: 'EMBEDDING', info: 'Encodes topological components into vector space representation.' },
      { label: 'REASONING', info: 'AI models query infrastructure nodes for security audits.' },
      { label: 'TOPOLOGY', info: 'Renders full interactive cloud map diagrams with recommendation cards.' }
    ]
  },
  {
    id: 'research',
    title: 'Explainable AI Research',
    category: 'Research / IEEE Publication',
    technologies: ['Python', 'PyTorch', 'Explainable AI', 'SHAP', 'LIME', 'Matplotlib'],
    description: 'Research work focused on explainable artificial intelligence (XAI), analyzing model interpretability layers, published in IEEE Xplore in 2026.',
    overview: 'This academic research investigates model interpretability frameworks, analyzing how deep neural networks arrive at specific classifications and mapping feature activation paths.',
    architecture: 'Employs SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) mathematical libraries combined with PyTorch activation hooks.',
    engineering: 'Authored neural activation hooks to extract intermediate hidden layer maps. Designed diagnostic visualizations showing pixel-level attribution mapping for convolutional models.',
    challenges: 'Explaining multi-dimensional feature interactions in a way that non-technical users can interpret. Solved by rendering simplified gradient-weighted class activation mapping (Grad-CAM) layers.',
    outcome: 'Research paper published in IEEE Xplore in 2026, offering new framework methodologies for validating safety-critical AI networks.',
    pipelineSteps: [
      { label: 'INPUT', info: 'Feeds high-dimensional data points through the active neural network.' },
      { label: 'HOOKS', info: 'Registers PyTorch callbacks to extract weights and gradients.' },
      { label: 'ATTRIBUTION', info: 'SHAP & LIME engines calculate mathematical feature importances.' },
      { label: 'GRAD-CAM', info: 'Generates visual maps indicating focus zones.' },
      { label: 'INTERPRET', info: 'Presents clear feature attribution charts for model validations.' }
    ]
  }
];

export const skills: TechCategory[] = [
  {
    name: 'Application Development',
    skills: ['React', 'Vite', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    name: 'Backend Engineering',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'WebSockets', 'JWT Authentication']
  },
  {
    name: 'AI / Data Science',
    skills: ['Machine Learning', 'Explainable AI', 'Data Processing', 'SHAP / LIME', 'Data Visualization']
  },
  {
    name: 'Databases & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Docker', 'Redis', 'Cloud Deployment']
  }
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'frontend',
    title: 'FRONTEND / PRESENTATION',
    description: 'Declarative UI interfaces, responsive layouts, data visualization dashboards, and active client-side parsing engines.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Plotly.js / D3.js']
  },
  {
    id: 'backend',
    title: 'API / BUSINESS SERVICES',
    description: 'RESTful API endpoints, low-latency WebSockets pipelines, async background queue coordination, and authentication gateways.',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'Redis Task Queues', 'JWT Keys']
  },
  {
    id: 'data',
    title: 'DATA / STORAGE ENGINE',
    description: 'Relational data structures, document-store aggregations, caching nodes, and structured dataset preprocessing pipelines.',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Redis Cache', 'SQL Schemas']
  },
  {
    id: 'ai',
    title: 'AI / ANALYTICS CORE',
    description: 'Explainable AI models, PyTorch neural networks, SHAP features attribution pipelines, and machinery vibration FFT parsers.',
    skills: ['Explainable AI', 'SHAP / LIME', 'PyTorch Models', 'Spectral FFT Analytics']
  },
  {
    id: 'deployment',
    title: 'DEPLOYMENT / SYSTEM OPS',
    description: 'Containerized build packaging, secure isolated sandbox execution clusters, and cloud platform setups.',
    skills: ['Docker Containers', 'CI/CD Pipelines', 'Supabase Edge', 'Cloud Deployment']
  }
];

export const sdlcSteps: SdlcStep[] = [
  {
    id: 'understand',
    title: 'UNDERSTAND',
    description: 'Investigate system requirements, identify client limitations, document edge cases, and define architectural scope.'
  },
  {
    id: 'architect',
    title: 'ARCHITECT',
    description: 'Map data streams, layout modular API boundaries, structure database relations, and pick matching tech stacks.'
  },
  {
    id: 'build',
    title: 'BUILD',
    description: 'Develop clean, statically typed React components, microservice endpoints, and optimize data pathways.'
  },
  {
    id: 'test',
    title: 'TEST',
    description: 'Validate edge-case parameters, audit schema bounds, and verify UI rendering consistency across viewports.'
  },
  {
    id: 'deploy',
    title: 'DEPLOY',
    description: 'Package dependencies into Docker layers, configure server setups, and initialize database instances.'
  },
  {
    id: 'improve',
    title: 'IMPROVE',
    description: 'Audit logs performance, refactor codebase metrics, optimize query buffers, and iterate features.'
  }
];

export const milestones: Milestone[] = [
  {
    id: 'ms-2025-intern',
    year: '2025',
    title: 'Internships & Technical Systems Design',
    description: 'Worked on full-stack application development, API design, and automation testing systems at AfterQuery, verifying code performance benchmarks.',
    projects: ['codeorigin'],
    technologies: ['FastAPI', 'React', 'Python AST']
  },
  {
    id: 'ms-2025-research',
    year: '2025 - 2026',
    title: 'Explainable AI Research & Optimization',
    description: 'Conducted academic research on deep learning safety and interpretability metrics, developing neural activation analysis scripts using SHAP and LIME.',
    projects: ['research'],
    technologies: ['Python', 'PyTorch', 'Explainable AI']
  },
  {
    id: 'ms-2026-rotordyn',
    year: '2026',
    title: 'Industrial Analytics & Vibration Diagnostics',
    description: 'Developed RotorDyn telemetry processing scripts, FFT calculations, and PySide6 interactive data plotting widgets for industrial machinery diagnostics.',
    projects: ['rotordyn'],
    technologies: ['Python', 'FastAPI', 'React', 'Supabase', 'Plotly.js']
  },
  {
    id: 'ms-2026-mlopps',
    year: '2026',
    title: 'MLOps & Code Intelligence Deployments',
    description: 'Built ModelForge registry pipelines and CodeOrigin AST repository analysis systems to automate due diligence audit speeds.',
    projects: ['modelforge', 'codeorigin'],
    technologies: ['Docker', 'FastAPI', 'MongoDB', 'PostgreSQL']
  }
];
