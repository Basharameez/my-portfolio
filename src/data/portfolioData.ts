import type { Project, Milestone, TechCategory, ArchitectureLayer, SdlcStep, WorkExperience, Publication } from '../types';

export const projects: Project[] = [
  {
    id: 'rtm',
    title: 'Remote Treatment Monitoring Intelligence Layer',
    category: 'Applied AI / Computer Vision',
    technologies: ['Applied AI', 'Computer Vision', 'Explainable AI', 'Healthcare', 'Human-in-the-Loop'],
    description: 'Designed and built an applied AI intelligence layer for asynchronous remote treatment monitoring workflows. The system combines public dataset ingestion, image-quality validation, preprocessing, explainable signals, priority triage concepts, and human-in-the-loop review support.',
    overview: 'This clinician-support workflow intelligence layer reads patient image inputs, filters out low-resolution or badly lit captures, normalizes pixels, and overlays explainable attributions for clinician audit. It is built as clinician-support tool rather than an autonomous diagnostic system.',
    architecture: 'Features a Python processing core that evaluates incoming image data, validates format limits, and projects Grad-CAM visual layers to a React dashboard via FastAPI REST interfaces.',
    engineering: 'Built secure preprocessing wrappers and integrated human-in-the-loop triage dashboards, ensuring safety-conscious execution bounds and clear model explainability.',
    challenges: 'Preventing diagnostic errors due to neural network focus errors. Solved by rendering visual gradient-weighted class activation mapping (Grad-CAM) layers for clinician validation.',
    outcome: 'Completed a functional experimental prototype demonstrating explainable AI triage support without clinical claims or autonomous diagnostics.',
    pipelineSteps: [
      { label: 'INPUT', info: 'Ingests patient video or image streams in clinical dashboard.' },
      { label: 'VALIDATION', info: 'Checks image resolution, lighting metrics, and formatting values.' },
      { label: 'PREPROCESSING', info: 'Normalizes pixels and aligns region-of-interest coordinates.' },
      { label: 'GRAD-CAM', info: 'Computes pixel-level gradients to map model focus overlays.' },
      { label: 'TRIAGE', info: 'Renders priority flags and highlight zones for clinician review.' }
    ]
  },
  {
    id: 'biovision',
    title: 'BioVision-Path',
    category: 'Biomedical Computer Vision',
    technologies: ['Computer Vision', 'PyTorch', 'Explainable AI', 'Biomedical AI', 'Machine Learning'],
    description: 'Built a production-oriented, explainable multi-task biomedical computer vision pipeline covering image classification, cell segmentation, object detection, visual search, model evaluation, and Grad-CAM explainability.',
    overview: 'BioVision-Path is an end-to-end biomedical computer vision workflow designed to evaluate cellular images. The focus is on the complete system workflow — combining detection, segmentation, and visual search under one runtime — rather than an isolated model.',
    architecture: 'Employs a PyTorch model backend, ONNX runtime exports for low-latency CPU operations, and Grad-CAM hooks for debugging and verification.',
    engineering: 'Wrote pipeline scripts that handle multiple vision tasks in parallel. Implemented Grad-CAM backpropagation loops to extract focus grids.',
    challenges: 'Reducing inference latency across multiple sequential models. Solved by exporting model weights to ONNX format and downsampling intermediate tensors.',
    outcome: 'Developed a robust multi-task AI verification platform displaying cellular segmentations and gradient paths, without clinical validation.',
    pipelineSteps: [
      { label: 'IMAGING', info: 'Ingests high-resolution biomedical image slices.' },
      { label: 'DETECTION', info: 'Detects cellular boundaries and indexes regions of interest.' },
      { label: 'SEGMENTATION', info: 'Performs semantic segmentation to isolate tissue components.' },
      { label: 'GRAD-CAM', info: 'Runs backpropagation to extract gradient activation maps.' },
      { label: 'SEARCH', info: 'Matches visual patterns against index databases for research.' }
    ]
  },
  {
    id: 'codeorigin',
    title: 'CodeOrigin',
    category: 'Technical Due Diligence Platform',
    technologies: ['Developer Tools', 'Code Intelligence', 'SBOM', 'Algorithms', 'Software Engineering'],
    description: 'Built a technical due diligence and repository intelligence platform for analyzing software codebases. Implemented CycloneDX SBOM generation, codebase similarity analysis, technical debt analysis, and acquisition risk scoring.',
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
    id: 'campusbuddy',
    title: 'CampusBuddy — Student Information & Face Recognition System',
    category: 'Student Info & Biometrics',
    technologies: ['Computer Vision', 'FastAPI', 'React', 'Mobile', 'ONNX'],
    description: 'Built a student/faculty information portal and face recognition system combining React, Vite, CapacitorJS, FastAPI, Python, and MongoDB Atlas. Integrated YuNet face detection, SFace recognition, and ONNX-based inference.',
    overview: 'This project integrates biometric computer vision workflows into an administrative portal. It supports real-time facial verification for student and faculty portal logins across mobile and web platforms.',
    architecture: 'CapacitorJS and React mobile views communicate with a FastAPI microservice backend and a MongoDB Atlas data layer.',
    engineering: 'Implemented YuNet face detection and SFace recognition models, exporting model runtimes to ONNX format to ensure lightweight, secure client-side execution.',
    challenges: 'Securing biometric facial templates in database records. Solved by hashing face embeddings and implementing secure session tokens.',
    outcome: 'Completed a functional experimental prototype for multi-platform biometric authentication and student portal workflows.',
    pipelineSteps: [
      { label: 'CAMERA', info: 'Captures incoming video frame vectors on mobile/web.' },
      { label: 'YUNET', info: 'Detects coordinates of facial boundary boxes in real-time.' },
      { label: 'SFACE', info: 'Extracts 128-dimensional face embedding vectors from inputs.' },
      { label: 'VERIFICATION', info: 'Matches embeddings against MongoDB Atlas templates.' },
      { label: 'DASHBOARD', info: 'Launches student portal routes upon verification.' }
    ]
  },
  {
    id: 'sih',
    title: 'SIH College Management & Intelligence Platform',
    category: 'Internal College Management',
    technologies: ['FastAPI', 'React', 'TypeScript', 'Workflow Automation', 'PostgreSQL'],
    description: 'Built an internal Smart India Hackathon college management platform using FastAPI, Python, SQLAlchemy, React, and TypeScript. Implemented coordinator dashboards, shortlisting workflows, and judge provisioning.',
    overview: 'This internal management system coordinates Hackathon registrations, judge evaluations, coordinator provisioning, and announcement streams, enforcing workflow state transitions.',
    architecture: 'A React dashboard communicating with FastAPI endpoints, PostgreSQL databases, and SQLAlchemy database layers, guided by state-machine constraints.',
    engineering: 'Designed provisioning workflows, spreadsheet generation modules, coordinator activation tokens, and evaluation auditing checkpoints.',
    challenges: 'Handling concurrent judge scoring inputs while enforcing state constraints. Solved by creating auditable, transactional database locks.',
    outcome: 'Deployed internal system resolving hackathon coordinator logistics and project evaluations.',
    pipelineSteps: [
      { label: 'SPOC', info: 'Registers college details and provisions coordinator tokens.' },
      { label: 'SUBMISSION', info: 'Accepts project files and maps structural metadata.' },
      { label: 'JUDGING', info: 'Assigns judges to review files using a custom evaluation rubric.' },
      { label: 'STATE-MACHINE', info: 'Tracks and locks evaluation phases at each gate.' },
      { label: 'RESULTS', info: 'Generates printable CSV exports for team announcements.' }
    ]
  }
];

export const skills: TechCategory[] = [
  {
    name: 'AI / ML',
    skills: [
      'Python',
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Transformers',
      'Explainable AI',
      'PyTorch',
      'ONNX',
      'Grad-CAM'
    ]
  },
  {
    name: 'GENERATIVE AI',
    skills: [
      'Generative AI',
      'LLM Applications',
      'Prompt Engineering',
      'Retrieval-Augmented Generation',
      'Embeddings',
      'AI Evaluation',
      'AI Assistants',
      'Human-in-the-Loop AI',
      'Intelligent Workflow Systems'
    ]
  },
  {
    name: 'ENGINEERING',
    skills: [
      'FastAPI',
      'React',
      'TypeScript',
      'Full-Stack Development',
      'Backend Development',
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSockets',
      'PostgreSQL',
      'Supabase',
      'MongoDB',
      'Docker',
      'Authentication',
      'Testing'
    ]
  },
  {
    name: 'DATA / ANALYTICS',
    skills: [
      'Pandas',
      'Plotly.js',
      'D3.js',
      'CSV/Excel Processing',
      'Data Processing',
      'Telemetry Processing',
      'FFT Analysis',
      'Performance Optimization'
    ]
  }
];

export const experiences: WorkExperience[] = [
  {
    company: 'AfterQuery',
    role: 'Full Stack Engineer',
    period: 'May 2026 – Present',
    bullets: [
      'Work on full-stack engineering, debugging, testing, and software evaluation tasks across real-world software projects.',
      'Review and validate implementations against technical requirements, expected behavior, and application/business logic.',
      'Debug existing production-oriented codebases involving frontend, backend, APIs, databases, authentication, and workflow logic.',
      'Investigate software defects, implement fixes, and verify behavior through focused technical testing.',
      'Work with established codebases where correctness, maintainability, and production behavior matter.'
    ]
  },
  {
    company: 'RotorDyn',
    role: 'Full Stack Engineer',
    period: 'June 2026 – July 2026',
    bullets: [
      'Built a SaaS-based rotor and bearing vibration analysis platform using React, Vite, Python, FastAPI, Supabase, PostgreSQL, Pandas, and Plotly.js.',
      'Developed frontend dashboards, authentication workflows, data-analysis interfaces, REST APIs, and backend services.',
      'Built CSV/Excel telemetry processing workflows using Python and Pandas, including FFT-based vibration analysis.',
      'Created interactive diagnostic plots with Plotly.js and improved large-dataset visualization using caching, browser storage, and downsampling.',
      'Integrated AI-powered automated engineering report generation and in-app AI assistant capabilities.',
      'Worked on production hardening, database security, Row-Level Security, exception handling, and automated testing.'
    ]
  }
];

export const publication: Publication = {
  title: 'Explainable AI for Suicide Ideation Detection in Social Media Text',
  publisher: 'IEEE',
  conference: '2025 3rd DMIHER International Conference on Artificial Intelligence in Healthcare, Education and Industry (IDICAIHEI)',
  date: '28–29 November 2025',
  addedDate: '23 February 2026',
  authors: ['G. Nagendram', 'Shaik Hussain Vali', 'Shaik Rameez Basha', 'Y. Venkatesh', 'Y. Ramesh', 'M. Shamila'],
  doi: '10.1109/IDICAIHEI65991.2025.11377560',
  url: 'https://ieeexplore.ieee.org/document/11377560/',
  description: 'Research publication on explainable AI for detecting suicidal ideation in Brazilian Portuguese social media text using the Boamente dataset. The study evaluates traditional machine learning, CNN-BiLSTM architectures, and transformer-based models including BERTimbau, DistilBERT, and XLM-R, combining linguistic preprocessing with embedding-based text representations. The work explores AI-driven decision support for early identification and intervention in digital mental health contexts.',
  highlights: [
    'NLP',
    'Transformers',
    'BERT',
    'BERTimbau',
    'DistilBERT',
    'XLM-R',
    'CNN-BiLSTM',
    'Attention',
    'Random Forest',
    'Embeddings',
    'Explainable AI',
    'Text Classification'
  ]
};

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
