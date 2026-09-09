import type { Project, Milestone, TechCategory, ArchitectureLayer, SdlcStep, WorkExperience, Publication } from '../types';

export const projects: Project[] = [
  {
    id: 'aptivue',
    title: 'Aptivue (AptiHire AI / TalentOS)',
    category: 'AI-Native Hiring Intelligence Platform',
    tagline: 'Production-oriented AI recruitment platform with async worker queues & Gemini evaluation',
    classification: 'engineering',
    featuredRank: 1,
    isFlagship: true,
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Gemini AI', 'Supabase', 'PostgreSQL', 'Drizzle ORM', 'BullMQ', 'Redis'],
    description: 'Built Aptivue (AptiHire AI / TalentOS), an AI-native recruitment and technical assessment platform. Features automated resume parsing (PDF/DOCX), AI-powered candidate screening using Gemini API, background worker queues with BullMQ & Redis, and Drizzle/Supabase relational data persistence.',
    overview: 'Aptivue transforms candidate hiring workflows by parsing resume files, running automated technical skill evaluation rubrics via Gemini AI models, queuing background scoring tasks with BullMQ & Redis, and storing candidate telemetry in Supabase/PostgreSQL.',
    architecture: 'Next.js 15 App Router architecture communicating with Supabase PostgreSQL via Drizzle ORM, asynchronous BullMQ background workers on Redis, and Google Gemini LLM API integration for automated scoring.',
    engineering: 'Implemented custom resume extraction with pdf-parse and mammoth, built async scoring queues using BullMQ, and designed end-to-end Vitest unit tests and Playwright E2E test suites.',
    challenges: 'Processing high volumes of resume uploads and AI evaluation prompts without blocking user UI sessions. Solved by decoupling parsing and LLM inference into isolated background BullMQ queue workers.',
    outcome: 'Delivered a production-oriented hiring intelligence platform with automated candidate screening, background evaluation queues, and real-time dashboard analytics.',
    problem: 'Hiring teams waste hundreds of hours manually screening resumes and scoring technical candidates across unstandardized rubrics.',
    approach: 'Built an AI-native recruitment intelligence platform combining resume document parsing (PDF/DOCX), Gemini LLM rubric evaluation, asynchronous BullMQ/Redis worker queues, and Drizzle/Supabase relational data persistence.',
    result: 'Delivered an automated candidate screening workflow with async background processing queues and 170/170 Vitest unit & integration tests passing across 38 test files.',
    metrics: [
      { label: 'TEST EVIDENCE', value: '170/170', context: 'Vitest unit & integration tests passed across 38 test files' },
      { label: 'STACK', value: 'Next.js 15 + React 19', context: 'App Router architecture with Drizzle ORM & PostgreSQL' },
      { label: 'ASYNC ENGINE', value: 'BullMQ + Redis', context: 'Decoupled background worker queue architecture' }
    ],
    architectureFlow: [
      { label: 'Candidate Resume', description: 'Ingests PDF/DOCX resume files via pdf-parse & mammoth' },
      { label: 'Document Processing', description: 'Extracts raw text, structured metrics & candidate history' },
      { label: 'AI Extraction', description: 'Runs Gemini LLM evaluation against technical job rubrics' },
      { label: 'Embeddings / Intelligence', description: 'Generates skill vector representations & scoring matrices' },
      { label: 'Candidate Evaluation', description: 'Queues background scoring tasks via BullMQ & Redis' },
      { label: 'Hiring Workflow', description: 'Renders ranked candidates & analytics in Next.js dashboard' }
    ],
    pipelineSteps: [
      { label: 'RESUME INGEST', info: 'Ingests PDF/DOCX resumes via pdf-parse and mammoth.' },
      { label: 'EXTRACTION', info: 'Parses candidate experience, skills, and technical metrics.' },
      { label: 'AI SCORING', info: 'Runs Gemini LLM evaluation against technical job rubrics.' },
      { label: 'QUEUE WORKER', info: 'Executes async scoring tasks via BullMQ and Redis queues.' },
      { label: 'ANALYTICS', info: 'Renders candidate rankings and diagnostic reports in dashboard.' }
    ],
    pipelineNodes3D: [
      { id: 'resume', label: 'RESUME INGEST', sublabel: 'pdf-parse / mammoth', description: 'Parses raw PDF/DOCX candidate resume files into clean text streams', type: 'input', position: [-4, 1.2, 0] },
      { id: 'extraction', label: 'AI EXTRACTION', sublabel: 'Gemini LLM API', description: 'Extracts technical skills, experience metrics & candidate rubrics via Gemini API', type: 'ai', position: [-2, -0.8, 0.5] },
      { id: 'queue', label: 'ASYNC QUEUE', sublabel: 'BullMQ + Redis', description: 'Queues non-blocking evaluation tasks in Redis background worker processes', type: 'process', position: [0, 1.5, 0] },
      { id: 'persistence', label: 'RELATIONAL DB', sublabel: 'Drizzle + Supabase', description: 'Stores candidate telemetry, scoring vectors & evaluations in Supabase PostgreSQL', type: 'data', position: [2, -0.8, 0.5] },
      { id: 'dashboard', label: 'HIRING DASHBOARD', sublabel: 'Next.js 15 App Router', description: 'Renders ranked candidates, score breakdowns & analytics in Next.js 15 dashboard', type: 'product', position: [4, 1.2, 0] }
    ],
    githubUrl: 'https://github.com/2049basharam/AptiHire-AI'
  },
  {
    id: 'rotordyn',
    title: 'RotorDyn Telemetry SaaS',
    category: 'Industrial Telemetry & Vibration Analysis SaaS',
    tagline: 'Vibration telemetry platform for bearing diagnostics & automated AI reporting',
    classification: 'client',
    featuredRank: 2,
    isClientWork: true,
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Supabase', 'Pandas', 'Plotly.js', 'FFT Spectral Analysis'],
    description: 'Contributed to a real-world vibration-analysis SaaS platform for processing CSV/Excel bearing telemetry and generating diagnostic visualizations and analytical insights.',
    overview: 'RotorDyn processes high-frequency machinery vibration data to diagnose bearing defects and generate automated technical reports. Features FFT spectral analysis, interactive Plotly.js frequency-domain plots, and PostgreSQL/Supabase database pipelines.',
    architecture: 'Python/FastAPI microservice backend handling telemetry file parsing and FFT algorithms, delivering spectrum data to a React frontend with Plotly.js visualizations.',
    engineering: 'Built high-throughput telemetry ingestion workflows using Pandas, implemented FFT frequency spectrum calculations, and integrated automated AI report generation.',
    challenges: 'Rendering multi-thousand point vibration frequency spectrums in the browser without UI lag. Solved by implementing client-side caching, IndexedDB storage, and data point downsampling.',
    outcome: 'Delivered industrial telemetry processing pipelines, frequency-domain diagnostic visualizations, and automated AI report generation workflows.',
    problem: 'Maintenance engineers needed real-time frequency-domain diagnostics and automated reporting for CSV/Excel bearing telemetry datasets.',
    approach: 'Developed a FastAPI data-processing backend for parsing telemetry files, running Fast Fourier Transform (FFT) vibration spectrum diagnostics, rendering Plotly.js charts, and auto-generating structured AI diagnostic reports.',
    result: 'Processed high-frequency machinery telemetry streams, rendered interactive frequency spectrums with IndexedDB caching, and automated diagnostic report generation.',
    metrics: [
      { label: 'ENGINE', value: 'FFT Spectrum', context: 'Fast Fourier Transform frequency-domain diagnostic calculations' },
      { label: 'BACKEND', value: 'FastAPI + Pandas', context: 'High-throughput CSV/Excel telemetry parsing pipeline' },
      { label: 'FRONTEND', value: 'Plotly.js + React', context: 'Interactive spectral dashboards with browser caching' }
    ],
    architectureFlow: [
      { label: 'Raw Telemetry', description: 'Ingests high-frequency CSV/Excel bearing vibration data' },
      { label: 'Data Parsing', description: 'Parses time-series telemetry streams using Python & Pandas' },
      { label: 'Preprocessing', description: 'Normalizes sensor signals and aligns sampling intervals' },
      { label: 'FFT Analysis', description: 'Computes Fast Fourier Transform frequency-domain spectrums' },
      { label: 'Visualization', description: 'Renders interactive Plotly.js spectrum charts with caching' },
      { label: 'Engineering Interpretation', description: 'Evaluates fault frequencies against bearing diagnostic rubrics' },
      { label: 'AI Report', description: 'Generates structured technical diagnostic reports automatically' }
    ],
    pipelineSteps: [
      { label: 'TELEMETRY INGEST', info: 'Ingests raw CSV/Excel sensor data from bearing sensors.' },
      { label: 'PARSING', info: 'Normalizes and filters time-series signal arrays in Pandas.' },
      { label: 'FFT CALCULATION', info: 'Computes frequency-domain spectrums to identify bearing fault peaks.' },
      { label: 'PLOTLY VISUALS', info: 'Renders interactive frequency plots with zoom & spectrum markers.' },
      { label: 'AI REPORTING', info: 'Transforms analytical spectrum data into structured executive reports.' }
    ],
    pipelineNodes3D: [
      { id: 'telemetry', label: 'RAW TELEMETRY', sublabel: 'CSV / Excel Sensors', description: 'Ingests high-frequency bearing vibration sensor data feeds', type: 'input', position: [-4, 1.2, 0] },
      { id: 'pandas', label: 'DATA PARSING', sublabel: 'Python + Pandas', description: 'Parses and normalizes time-series signal streams in high-throughput Pandas pipelines', type: 'process', position: [-2, -0.8, 0.5] },
      { id: 'fft', label: 'FFT ANALYSIS', sublabel: 'Fast Fourier Transform', description: 'Calculates frequency-domain spectrums to identify bearing defect frequencies', type: 'ai', position: [0, 1.5, 0] },
      { id: 'cache', label: 'SPECTRUM STORAGE', sublabel: 'PostgreSQL + IndexedDB', description: 'Caches frequency spectrum arrays client-side with IndexedDB for 60fps rendering', type: 'data', position: [2, -0.8, 0.5] },
      { id: 'report', label: 'AI REPORT & PLOTLY', sublabel: 'FastAPI + Plotly.js', description: 'Renders interactive frequency plots & auto-generates AI diagnostic reports', type: 'product', position: [4, 1.2, 0] }
    ]
  },
  {
    id: 'biorobust',
    title: 'BioRobust / BioVision-Path',
    category: 'Biomedical Computer Vision & Robustness Framework',
    tagline: 'Experimental PyTorch framework evaluating biomedical vision robustness under distribution shifts',
    classification: 'research',
    featuredRank: 3,
    isResearch: true,
    technologies: ['PyTorch', 'ResNet-18', 'PathMNIST', 'Computer Vision', 'Grad-CAM', 'ONNX Runtime', 'Python'],
    description: 'Built a PyTorch computer vision evaluation framework analyzing model robustness and calibration across 35 perturbation conditions on PathMNIST biomedical tissue datasets.',
    overview: 'BioRobust evaluates neural network resilience under distribution shifts, image corruptions, and lighting degradation. It measures accuracy drops, Expected Calibration Error (ECE), and visual gradient attributions using Grad-CAM.',
    architecture: 'PyTorch model backbone with ResNet-18 architectures, perturbation generation pipelines, ONNX Runtime inference, and Grad-CAM backpropagation hooks.',
    engineering: 'Implemented custom perturbation generators for blur, noise, and contrast drops across 7,180 test samples. Built ECE calibration scoring modules and Grad-CAM focus visualizers.',
    challenges: 'Detecting model overconfidence during severe image degradation. Solved by measuring ECE metrics alongside Grad-CAM gradient maps.',
    outcome: 'Established rigorous baseline robustness benchmarks with 39/39 validation tests passing.',
    problem: 'Neural vision models in biomedical settings suffer severe performance degradation under real-world image perturbations and lighting shifts.',
    approach: 'Built a PyTorch computer vision evaluation suite applying 35 controlled perturbation conditions across 7,180 test samples on PathMNIST, extracting Grad-CAM visual gradient maps and calibration metrics (ECE).',
    result: 'Established baseline robustness benchmarks demonstrating clean baseline accuracy of 73.66% and 39/39 validation tests passing.',
    metrics: [
      { label: 'CLEAN ACCURACY', value: '73.66%', context: 'Baseline accuracy (72.31% weighted F1, 69.90% macro F1)' },
      { label: 'ECE CALIBRATION', value: '0.0782', context: 'Expected Calibration Error on clean test dataset' },
      { label: 'TEST SCOPE', value: '7,180 Samples', context: 'Evaluated across 35 controlled perturbation conditions' },
      { label: 'TEST SUITE', value: '39/39 Passed', context: '100% test suite validation score' }
    ],
    architectureFlow: [
      { label: 'Clean Image', description: 'Ingests high-resolution PathMNIST cellular image tissue slices' },
      { label: 'Controlled Perturbation', description: 'Applies 35 noise, blur, and contrast degradation conditions' },
      { label: 'ResNet-18 Model', description: 'Executes PyTorch model inference and extracts activations' },
      { label: 'Prediction & Grad-CAM', description: 'Generates classification scores & gradient activation maps' },
      { label: 'Robustness Metric', description: 'Computes accuracy drop, ECE calibration & degradation curve' }
    ],
    pipelineSteps: [
      { label: 'DATASET', info: 'Ingests 7,180 test images from the PathMNIST biomedical benchmark.' },
      { label: 'PERTURBATION', info: 'Applies 35 synthetic image corruption and noise levels.' },
      { label: 'INFERENCE', info: 'Runs PyTorch ResNet-18 model backpropagation loops.' },
      { label: 'GRAD-CAM', info: 'Generates visual heatmaps of neural network focus regions.' },
      { label: 'CALIBRATION', info: 'Computes Expected Calibration Error (ECE) and accuracy degradation.' }
    ],
    pipelineNodes3D: [
      { id: 'dataset', label: 'PATHMNIST DATA', sublabel: '7,180 Test Samples', description: 'Ingests cellular tissue images from the PathMNIST biomedical benchmark dataset', type: 'input', position: [-4, 1.2, 0] },
      { id: 'perturbation', label: 'PERTURBATION', sublabel: '35 Degradation Conditions', description: 'Applies 7 synthetic corruption types across 5 severity levels (blur, noise, contrast)', type: 'process', position: [-2, -0.8, 0.5] },
      { id: 'resnet', label: 'RESNET-18 MODEL', sublabel: 'PyTorch Backbone', description: 'Executes neural model inference loops & extracts backpropagation activation maps', type: 'ai', position: [0, 1.5, 0] },
      { id: 'gradcam', label: 'GRAD-CAM OVERLAYS', sublabel: 'Visual Explainability', description: 'Projects visual gradient activation heatmaps highlighting model focal regions', type: 'data', position: [2, -0.8, 0.5] },
      { id: 'metrics', label: 'ROBUSTNESS EVAL', sublabel: 'ECE Calibration & Accuracy', description: 'Measures clean baseline accuracy (73.66%) and Expected Calibration Error (0.0782)', type: 'product', position: [4, 1.2, 0] }
    ],
    githubUrl: 'https://github.com/Basharameez/BioVision-Path',
    liveUrl: 'https://huggingface.co/spaces/BASHARAMEEZ/BioVision-Path'
  },
  {
    id: 'codeorigin',
    title: 'CodeOrigin',
    category: 'Technical Due Diligence & Codebase Intelligence',
    tagline: 'AST static analysis, CycloneDX SBOM generation & acquisition risk scoring',
    classification: 'engineering',
    featuredRank: 4,
    technologies: ['Python AST', 'CycloneDX SBOM', 'MinHash Similarity', 'TypeScript', 'Static Analysis', 'PostgreSQL'],
    description: 'Built a software repository intelligence platform for technical due diligence during company acquisitions. Implemented SBOM generation, code similarity analysis, technical debt detection, and acquisition risk scoring.',
    overview: 'CodeOrigin scans software codebases to audit third-party licensing, identify security vulnerabilities, and evaluate code complexity using Python AST static parsers.',
    architecture: 'Multi-process Python AST parsing engine communicating with a PostgreSQL storage layer and React dependency visualization node maps.',
    engineering: 'Built Python AST scanners to detect cyclical package dependencies and parse structural code quality. Implemented MinHash algorithms for codebase similarity matching.',
    challenges: 'Parsing large codebases without bottlenecking the main process. Solved by building concurrent worker queues that scan file trees in parallel.',
    outcome: 'Automated architectural due diligence audits, shortening technical evaluation cycles from weeks to minutes.',
    problem: 'Technical due diligence audits during software acquisitions require manual inspections for licensing, technical debt, and code similarity.',
    approach: 'Built a Python AST static analyzer, CycloneDX SBOM generator, and MinHash similarity scoring system for repository intelligence.',
    result: 'Automated architectural due diligence and structural code quality scans across multi-thousand line codebases.',
    metrics: [
      { label: 'PARSER', value: 'Python AST Scanner', context: 'Abstract Syntax Tree code structure analysis engine' },
      { label: 'SIMILARITY', value: 'MinHash Algorithm', context: 'Locality-sensitive hashing for codebase duplication detection' },
      { label: 'COMPLIANCE', value: 'CycloneDX SBOM', context: 'Standardized Software Bill of Materials export format' }
    ],
    architectureFlow: [
      { label: 'Repository', description: 'Clones and reads source codebases into sandboxed workspace' },
      { label: 'AST Analysis', description: 'Python AST static parsers scan syntax trees & import cycles' },
      { label: 'Similarity Analysis', description: 'MinHash algorithms compute structural similarity scores' },
      { label: 'SBOM Generation', description: 'Exports standardized CycloneDX Software Bill of Materials' },
      { label: 'Risk Analysis', description: 'Computes technical debt, security vulnerability & license risk' }
    ],
    pipelineSteps: [
      { label: 'CLONE', info: 'Clones repository into isolated analysis environment.' },
      { label: 'AST SCAN', info: 'Parses Abstract Syntax Trees to map import dependencies.' },
      { label: 'MINHASH', info: 'Computes structural code similarity across files.' },
      { label: 'SBOM', info: 'Generates CycloneDX Software Bill of Materials.' },
      { label: 'RISK SCORE', info: 'Outputs overall engineering risk and technical debt score.' }
    ],
    pipelineNodes3D: [
      { id: 'repo', label: 'SOURCE CODEBASE', sublabel: 'Git Clone Workspace', description: 'Clones and parses repository files into isolated analysis environments', type: 'input', position: [-4, 1.2, 0] },
      { id: 'ast', label: 'AST SCANNER', sublabel: 'Python AST Parser', description: 'Scans Abstract Syntax Trees to map import cycles and structural code complexity', type: 'process', position: [-2, -0.8, 0.5] },
      { id: 'minhash', label: 'MINHASH ENGINE', sublabel: 'Similarity Algorithm', description: 'Computes structural code similarity scores across files using MinHash algorithms', type: 'ai', position: [0, 1.5, 0] },
      { id: 'sbom', label: 'SBOM GENERATOR', sublabel: 'CycloneDX Standard', description: 'Exports standardized CycloneDX Software Bill of Materials compliance records', type: 'data', position: [2, -0.8, 0.5] },
      { id: 'risk', label: 'RISK REPORT', sublabel: 'Acquisition Score', description: 'Outputs overall technical debt, security vulnerability, and license risk scores', type: 'product', position: [4, 1.2, 0] }
    ],
    githubUrl: 'https://github.com/Basharameez/codeorigin'
  },
  {
    id: 'campusbuddy',
    title: 'CampusBuddy — Student Info & Biometrics Platform',
    category: 'Student Info & Biometric Recognition',
    tagline: 'Hybrid web/Android student portal with YuNet face detection & SFace recognition ONNX models',
    classification: 'engineering',
    featuredRank: 5,
    technologies: ['React', 'FastAPI', 'CapacitorJS', 'MongoDB Atlas', 'ONNX Runtime', 'YuNet', 'SFace'],
    description: 'Built a student/faculty information portal and face recognition system combining React, Vite, CapacitorJS, FastAPI, Python, and MongoDB Atlas. Integrated YuNet face detection and SFace recognition models via ONNX runtimes.',
    overview: 'CampusBuddy integrates biometric computer vision workflows into an administrative portal, supporting facial verification for student/faculty access across web and Android native workflows.',
    architecture: 'CapacitorJS native Android wrapper communicating with a FastAPI backend service and MongoDB Atlas data layer.',
    engineering: 'Implemented YuNet face detection and SFace 128-dimensional embedding generation models, exporting model runtimes to lightweight ONNX formats.',
    challenges: 'Securing biometric facial embeddings in database records. Solved by hashing face embeddings and implementing secure session tokens.',
    outcome: 'Completed a multi-platform biometric authentication system and student information portal.',
    problem: 'Student and faculty portals required lightweight biometric authentication across web and Android devices.',
    approach: 'Integrated YuNet (face detection) and SFace (face recognition) ONNX models with a FastAPI microservice backend and React/CapacitorJS frontend.',
    result: 'Enabled real-time client-side face detection and embedding matching linked to MongoDB Atlas records.',
    metrics: [
      { label: 'DETECTION', value: 'YuNet Model', context: 'Real-time face detection bounding box model' },
      { label: 'RECOGNITION', value: 'SFace Model', context: '128-dimensional facial embedding feature vector matcher' },
      { label: 'DEPLOYMENT', value: 'ONNX + CapacitorJS', context: 'Low-latency CPU model inference packaged for Android & Web' }
    ],
    architectureFlow: [
      { label: 'Camera Input', description: 'Captures video frame tensor streams on mobile & web' },
      { label: 'YuNet Detection', description: 'Detects facial boundary coordinates in real-time' },
      { label: 'SFace Embeddings', description: 'Extracts 128-dimensional facial feature vectors' },
      { label: 'Vector Matcher', description: 'Compares embeddings against MongoDB Atlas templates' },
      { label: 'Student Portal', description: 'Launches authenticated student dashboard routes' }
    ],
    pipelineSteps: [
      { label: 'CAPTURE', info: 'Captures frame input from web or Android camera.' },
      { label: 'YUNET', info: 'Detects face bounding box coordinates.' },
      { label: 'SFACE', info: 'Extracts 128-D embedding vector.' },
      { label: 'MATCH', info: 'Matches vector against database templates.' },
      { label: 'LOGIN', info: 'Grants access to student portal.' }
    ],
    githubUrl: 'https://github.com/Basharameez/student-info-portal'
  },
  {
    id: 'sih',
    title: 'Internal SIH College Management & Intelligence Platform',
    category: 'Internal College Management',
    tagline: 'Hackathon platform with state-machine workflow enforcement & Gemini AI advisory',
    classification: 'engineering',
    featuredRank: 6,
    technologies: ['FastAPI', 'React', 'TypeScript', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'Docker', 'Gemini AI'],
    description: 'Built an internal college management platform supporting Student, Coordinator, Judge, and SPOC workflows with event lifecycle state-machine enforcement.',
    overview: 'Coordinates hackathon registrations, team submissions, judge scoring locking, score corrections, and announcement streams, enforcing workflow state transitions.',
    architecture: 'React dashboard communicating with FastAPI endpoints, PostgreSQL/SQLite databases, and SQLAlchemy database layers.',
    engineering: 'Designed provisioning workflows, CSV export modules, coordinator activation tokens, and auditable score lock checkpoints.',
    challenges: 'Handling concurrent judge scoring inputs while enforcing state constraints. Solved by creating auditable, transactional database locks.',
    outcome: 'Deployed internal management system with 11/11 passing backend test validation.',
    problem: 'College hackathons needed multi-role submission locking, judge evaluation scoring, and problem assignment without race conditions.',
    approach: 'Built a FastAPI and SQLAlchemy state-machine workflow system with multi-tenant role controls and Gemini AI advisory modules.',
    result: 'Automated hackathon operations with 11/11 passing backend test validation.',
    metrics: [
      { label: 'TEST VALIDATION', value: '11/11 Passed', context: '100% backend automated test suite validation' },
      { label: 'STATE ENGINE', value: 'State Machine', context: 'Auditable evaluation locking & phase transition gates' },
      { label: 'AI ADVISORY', value: 'Gemini AI API', context: 'Problem statement matching & announcement generation' }
    ],
    pipelineSteps: [
      { label: 'SPOC', info: 'Registers college details and provisions coordinator tokens.' },
      { label: 'SUBMISSION', info: 'Accepts project files and maps structural metadata.' },
      { label: 'JUDGING', info: 'Assigns judges to review files using evaluation rubric.' },
      { label: 'STATE-MACHINE', info: 'Tracks and locks evaluation phases at each gate.' },
      { label: 'RESULTS', info: 'Generates printable CSV exports for team announcements.' }
    ],
    githubUrl: 'https://github.com/2049basharam/SIH'
  },
  {
    id: 'rtm',
    title: 'Remote Treatment Monitoring Intelligence Layer',
    category: 'Applied AI / Healthcare Workflow Intelligence',
    tagline: 'Clinician support workflow layer with Grad-CAM visual gradient overlays',
    classification: 'research',
    featuredRank: 7,
    technologies: ['Python', 'FastAPI', 'React', 'Computer Vision', 'Grad-CAM', 'Explainable AI'],
    description: 'Designed and built an applied AI intelligence layer for asynchronous remote treatment monitoring workflows. The system combines image-quality validation, preprocessing, explainable signals, priority triage concepts, and human-in-the-loop review support.',
    overview: 'This clinician-support workflow layer reads patient image inputs, filters out low-resolution captures, normalizes pixels, and overlays explainable attributions for clinician audit.',
    architecture: 'Python processing core evaluating image inputs and projecting Grad-CAM visual layers to a React dashboard via FastAPI REST interfaces.',
    engineering: 'Built secure preprocessing wrappers and integrated human-in-the-loop triage dashboards, ensuring clear model explainability.',
    challenges: 'Preventing diagnostic errors due to neural network focus errors. Solved by rendering visual Grad-CAM layers for clinician validation.',
    outcome: 'Completed a functional experimental prototype demonstrating explainable AI triage support without clinical claims.',
    problem: 'Asynchronous medical image monitoring requires verifying image lighting/resolution before clinician triage.',
    approach: 'Built a Python preprocessing pipeline that filters bad captures and projects Grad-CAM visual gradient overlays to clinician dashboards via FastAPI.',
    result: 'Created a safety-conscious clinician support tool demonstrating explainable AI triage support.',
    metrics: [
      { label: 'WORKFLOW', value: 'Human-in-the-Loop', context: 'Clinician audit support without autonomous diagnostic claims' },
      { label: 'EXPLAINABILITY', value: 'Grad-CAM Overlays', context: 'Visual gradient activation maps highlighting focal regions' },
      { label: 'API CORE', value: 'FastAPI + React', context: 'REST interfaces connecting vision pipelines to UI' }
    ],
    pipelineSteps: [
      { label: 'INPUT', info: 'Ingests patient video or image streams in clinical dashboard.' },
      { label: 'VALIDATION', info: 'Checks image resolution, lighting metrics, and formatting values.' },
      { label: 'PREPROCESSING', info: 'Normalizes pixels and aligns region-of-interest coordinates.' },
      { label: 'AI ATTRIBUTION', info: 'Projects Grad-CAM visual gradient maps highlighting focal areas.' },
      { label: 'AUDIT DASHBOARD', info: 'Presents explainable visual overlays for clinician verification.' }
    ],
    githubUrl: 'https://github.com/Basharameez/remote-treatment-monitoring'
  }
];

export const publication: Publication = {
  title: 'Explainable AI for Suicide Ideation Detection in Social Media Text',
  publisher: 'IEEE',
  conference: 'International Conference on Data Intelligence, AI & Healthcare Innovation (IDICAIHEI 2025)',
  date: '2025',
  addedDate: '2025-02-15',
  authors: ['Shaik Rameez Basha', 'Co-Authors'],
  doi: '10.1109/IDICAIHEI65991.2025.11377560',
  url: 'https://doi.org/10.1109/IDICAIHEI65991.2025.11377560',
  description: 'Scholarly research paper focusing on explainable natural language processing (NLP) architectures for detecting mental health crisis signals in social media text datasets using transformer-based models and attribution methods.',
  highlights: [
    'Evaluated transformer architectures (BERTimbau, DistilBERT, XLM-R) & hybrid neural networks (CNN-BiLSTM).',
    'Integrated integrated-gradients explainability maps to pinpoint linguistic indicators in text streams.',
    'Published in official IEEE Xplore digital library (DOI: 10.1109/IDICAIHEI65991.2025.11377560).'
  ],
  methodology: [
    'BERTimbau / DistilBERT / XLM-R Transformers',
    'CNN-BiLSTM Hybrid Neural Architecture',
    'Integrated Gradients & SHAP Feature Attributions',
    'Text Preprocessing & Tokenization Pipelines'
  ]
};

export const milestones: Milestone[] = [
  {
    id: 'm1',
    year: '2025 - Present',
    title: 'Aptivue & Production Systems Development',
    description: 'Designed Aptivue (AptiHire AI / TalentOS) recruitment platform with Next.js 15, Gemini LLM evaluation, and BullMQ worker queues. Built 170/170 passing Vitest unit/integration test suite across 38 files.',
    projects: ['Aptivue (AptiHire AI / TalentOS)'],
    technologies: ['Next.js 15', 'TypeScript', 'Gemini AI', 'BullMQ', 'Supabase', 'Drizzle ORM', 'Vitest']
  },
  {
    id: 'm2',
    year: '2025',
    title: 'IEEE Publication & Explainable AI Research',
    description: 'Published peer-reviewed research on explainable NLP for suicide ideation detection in social media text (IEEE Xplore DOI: 10.1109/IDICAIHEI65991.2025.11377560).',
    projects: ['IEEE Research Paper'],
    technologies: ['PyTorch', 'BERTimbau', 'DistilBERT', 'XLM-R', 'Explainable AI', 'NLP']
  },
  {
    id: 'm3',
    year: '2024 - 2025',
    title: 'RotorDyn Telemetry & Industrial SaaS',
    description: 'Developed backend processing services for RotorDyn industrial vibration SaaS. Built FastAPI endpoints for telemetry parsing and Fast Fourier Transform (FFT) signal analysis.',
    projects: ['RotorDyn Telemetry SaaS'],
    technologies: ['Python', 'FastAPI', 'Pandas', 'Plotly.js', 'FFT Spectral Analysis', 'PostgreSQL']
  },
  {
    id: 'm4',
    year: '2024',
    title: 'BioRobust Research & Computer Vision',
    description: 'Developed PyTorch robustness evaluation suite for biomedical vision models. Benchmarked 35 perturbation conditions on PathMNIST dataset (39/39 tests passed).',
    projects: ['BioRobust / BioVision-Path'],
    technologies: ['PyTorch', 'ResNet-18', 'PathMNIST', 'Grad-CAM', 'ONNX Runtime', 'Python']
  }
];

export const techCategories: TechCategory[] = [
  {
    name: 'AI / ML & LLM Applications',
    skills: ['PyTorch', 'Gemini API', 'LLM Prompt Engineering', 'ResNet-18', 'Grad-CAM', 'YuNet', 'SFace', 'ONNX Runtime', 'Pandas', 'NumPy', 'Explainable AI', 'NLP']
  },
  {
    name: 'Backend Architecture',
    skills: ['Python', 'FastAPI', 'Node.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Redis', 'BullMQ', 'SQLAlchemy', 'RESTful APIs', 'Async Worker Queues']
  },
  {
    name: 'Frontend Systems',
    skills: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Plotly.js', 'CapacitorJS', 'Framer Motion', 'Three.js', 'React Three Fiber', 'HTML5/CSS3']
  },
  {
    name: 'Data & ML Engineering',
    skills: ['Pandas', 'FFT Spectral Processing', 'AST Static Parsers', 'MinHash Algorithms', 'CycloneDX SBOM', 'Vector Embeddings', 'ECE Calibration', 'Data Cleaning']
  },
  {
    name: 'Developer Infrastructure & Testing',
    skills: ['Vitest (170/170 passed)', 'Playwright', 'Docker', 'Git / GitHub', 'Vercel', 'Render', 'CI/CD Pipelines', 'Linux / Bash']
  }
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'frontend',
    title: 'Frontend Product Layer',
    description: 'Next.js 15 App Router and React 19 component interfaces rendering interactive dashboards, telemetry charts, and high-density technical layouts.',
    skills: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Plotly.js', 'Framer Motion', 'Three.js']
  },
  {
    id: 'backend',
    title: 'Backend API & Worker Queue Layer',
    description: 'FastAPI and Node.js microservices managing API routes, session tokens, and asynchronous BullMQ/Redis worker queues for heavy background tasks.',
    skills: ['FastAPI', 'Python', 'Node.js', 'BullMQ', 'Redis', 'REST APIs', 'Async Workers']
  },
  {
    id: 'data',
    title: 'Data Persistence & Relational Layer',
    description: 'Supabase PostgreSQL relational databases accessed via Drizzle ORM and SQLAlchemy schemas, featuring transactional score locks and IndexedDB client caching.',
    skills: ['PostgreSQL', 'Supabase', 'Drizzle ORM', 'SQLAlchemy', 'MongoDB Atlas', 'IndexedDB']
  },
  {
    id: 'ai',
    title: 'AI, LLM & Vision Intelligence Core',
    description: 'Google Gemini API evaluations, PyTorch ResNet-18 model backpropagation, Grad-CAM visual heatmaps, YuNet/SFace ONNX models, and FFT spectral diagnostic engines.',
    skills: ['Gemini AI API', 'PyTorch', 'ResNet-18', 'Grad-CAM', 'YuNet', 'SFace', 'ONNX Runtime', 'FFT Analysis']
  },
  {
    id: 'deployment',
    title: 'Testing, Security & Infrastructure',
    description: 'Comprehensive Vitest unit & integration test suites (170/170 passed), Docker containerization, AST static code analysis, and CycloneDX SBOM export formats.',
    skills: ['Vitest (170/170 Passed)', 'Docker', 'AST Parsing', 'CycloneDX SBOM', 'Git/GitHub', 'Vercel']
  }
];

export const sdlcSteps: SdlcStep[] = [
  { id: 's1', title: '1. SPECS & SCHEMA DESIGN', description: 'Defining typed TypeScript interfaces, Drizzle database schemas, and API contracts before implementation.' },
  { id: 's2', title: '2. TEST-FIRST DEVELOPMENT', description: 'Writing Vitest unit & integration tests (170/170 passed) to lock expected behavior before shipping features.' },
  { id: 's3', title: '3. ASYNC DECOUPLING', description: 'Offloading LLM API prompts and file parsers into background BullMQ/Redis queues to keep UIs responsive.' },
  { id: 's4', title: '4. VERIFIED BENCHMARKING', description: 'Measuring baseline model metrics (ECE calibration, accuracy drops) with rigorous test validation (39/39 passed).' }
];

export const workExperience: WorkExperience[] = [
  {
    company: 'RotorDyn SaaS Engagement',
    role: 'Full-Stack & Telemetry Engineer',
    period: '2024 - 2025',
    isClientEngagement: true,
    bullets: [
      'Contributed to a real-world industrial telemetry SaaS platform for processing CSV/Excel bearing vibration data.',
      'Built FastAPI backend services to parse time-series sensor streams and execute Fast Fourier Transform (FFT) frequency spectrum calculations.',
      'Implemented Plotly.js interactive spectral charts with client-side IndexedDB caching for 60fps browser rendering.',
      'Integrated automated AI diagnostic report generation pipelines from telemetry spectrum calculations.'
    ]
  },
  {
    company: 'Independent AI & Software Systems Engineering',
    role: 'AI/ML + Full-Stack Engineer',
    period: '2023 - Present',
    bullets: [
      'Architected Aptivue (AptiHire AI / TalentOS), an AI-native hiring intelligence platform with Next.js 15, Gemini API evaluation, and BullMQ worker queues.',
      'Engineered comprehensive Vitest test suite achieving 170/170 passing unit & integration tests across 38 test files.',
      'Published IEEE peer-reviewed paper on explainable NLP for suicide ideation detection in social media text (DOI: 10.1109/IDICAIHEI65991.2025.11377560).',
      'Created BioRobust biomedical vision framework benchmarked across 35 perturbation conditions on PathMNIST dataset (39/39 tests passed).'
    ]
  }
];
