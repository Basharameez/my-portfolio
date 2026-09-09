<div align="center">

<br>

# SHAIK RAMEEZ BASHA

### AI SYSTEMS ENGINEER
**AI/ML · FULL-STACK · PRODUCTION SOFTWARE**

<br>

<img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&weight=600&size=20&pause=1400&color=D4AF37&center=true&vCenter=true&width=720&height=45&lines=Building+AI-powered+products;Engineering+production-ready+systems;Turning+research+into+software" alt="Typing SVG" />

<br><br>

<p>
  <a href="https://rameezbasha.freedev.app/">
    <img src="https://img.shields.io/badge/PORTFOLIO-0A0A0F?style=for-the-badge&logo=googlechrome&logoColor=D4AF37" />
  </a>
  <a href="https://github.com/Basharameez">
    <img src="https://img.shields.io/badge/GITHUB-0A0A0F?style=for-the-badge&logo=github&logoColor=FFFFFF" />
  </a>
  <a href="https://www.linkedin.com/in/shaik-rameez-basha-151740286/">
    <img src="https://img.shields.io/badge/LINKEDIN-0A0A0F?style=for-the-badge&logo=linkedin&logoColor=0A66C2" />
  </a>
  <a href="https://doi.org/10.1109/IDICAIHEI65991.2025.11377560">
    <img src="https://img.shields.io/badge/IEEE-0A0A0F?style=for-the-badge&logo=ieee&logoColor=00629B" />
  </a>
</p>

<br>

> **I build intelligent software systems — from models and data pipelines to APIs, interfaces, infrastructure, and production workflows.**

<br>

</div>

---

<div align="center">

## ENGINEERING SIGNAL

<table>
<tr>
<td align="center" width="33%">

### AI / ML

PyTorch  
Computer Vision  
NLP  
LLM Applications  
Explainable AI  
Model Evaluation

</td>

<td align="center" width="33%">

### SOFTWARE

Python  
TypeScript  
Next.js  
React  
FastAPI  
Node.js

</td>

<td align="center" width="33%">

### SYSTEMS

PostgreSQL  
Redis  
BullMQ  
Docker  
REST APIs  
Testing & CI

</td>
</tr>
</table>

</div>

---

# SELECTED BUILDS

## 01 — APTIVUE

### AI-NATIVE RECRUITMENT INFRASTRUCTURE

**Aptivue** (AptiHire AI / TalentOS) is an AI-powered recruitment platform designed around resume intelligence, candidate evaluation, semantic matching, hiring workflows, and analytics.

```mermaid
flowchart TD
    subgraph Ingestion ["Ingestion Layer"]
      A[Candidate Resume PDF] --> B[Resume AST Extractor]
    end
    subgraph Data ["Data & Queue Engine"]
      B --> C[(PostgreSQL Candidate Data)]
      B --> D[Redis Message Cache]
      D --> E[BullMQ Async Queue Worker]
    end
    subgraph AI ["AI Intelligence"]
      E --> F[Gemini LLM Scoring Engine]
      F --> G[Hiring Evaluation & Audit]
    end
    subgraph Workflow ["Matching & Workflow"]
      G --> H[Semantic Matching Engine]
      H --> I[Hiring Workflow & Analytics]
    end
```

### Engineering

`Next.js 15` · `React` · `TypeScript` · `Gemini` · `PostgreSQL` · `Supabase` · `Drizzle ORM` · `Redis` · `BullMQ` · `Vitest`

### Verified Evidence

| Signal | Result |
| :--- | ---: |
| Vitest tests | **170 / 170 passed** |
| Test files | **38** |
| Evaluation throughput | **2,400 / min** |
| Architecture | **Async queue-based processing** |

**Repository**  
[github.com/2049basharam/AptiHire-AI](https://github.com/2049basharam/AptiHire-AI)

---

## 02 — ROTORDYN

### INDUSTRIAL VIBRATION INTELLIGENCE

A production-oriented SaaS system for analyzing machine vibration telemetry and transforming raw sensor data into actionable bearing diagnostics.

```mermaid
flowchart TD
    A[Raw Sensor Telemetry / CSV / Excel] --> B[FastAPI Ingestion Endpoint]
    B --> C[Signal Preprocessing]
    C --> D[FFT Spectral Analysis 4096 Lines]
    D --> E[BPFO / BPFI Defect Detection]
    E --> F[RMS Velocity & ISO 10816 Severity]
    F --> G[Interactive Diagnostic Report & AI Summary]
```

### Engineering

`Python` · `FastAPI` · `React` · `PostgreSQL` · `Pandas` · `Plotly.js` · `FFT` · `ISO 10816`

### Capabilities

* CSV / Excel telemetry ingestion
* Signal preprocessing & Fourier transform
* FFT spectral analysis (4,096 lines)
* RMS vibration velocity calculation
* Bearing defect frequency detection (BPFO / BPFI)
* Machine-health severity classification
* Interactive diagnostic visualization
* AI-assisted report generation

---

## 03 — BIOROBUST

### ML ROBUSTNESS & COMPUTER VISION

A benchmarking framework for evaluating how computer vision models behave under controlled synthetic image degradation and noise perturbations.

```mermaid
flowchart TD
    A[PathMNIST Dataset 7,180 Images] --> B[ResNet-18 PyTorch Backbone]
    B --> C{Controlled Perturbations 35 Conditions}
    C --> D[Blur Degradation S4: 11.80% Acc]
    C --> E[Resolution S5: 0.8520 ECE]
    C --> F[Noise & Contrast Degradations]
    D & E & F --> G[Robustness & ECE Evaluation]
    G --> H[Grad-CAM Heatmap Overlays & Failure Analysis]
    H --> I[39 / 39 PyTest Verified Suite]
```

### Benchmark Evidence

| Metric | Result |
| :--- | ---: |
| Test images | **7,180** |
| Perturbations | **35 conditions** |
| Clean accuracy | **73.66%** |
| Weighted F1 | **72.31%** |
| Macro F1 | **69.90%** |
| Clean ECE | **0.0782** |
| PyTest | **39 / 39 passed** |

### Worst-Case Observation

**Blur S4 → 11.80% accuracy**  
*A **61.87 percentage-point degradation** from the clean baseline.*

### Calibration Error

**Resolution degradation S5 → ECE 0.8520**

### Stack

`PyTorch` · `ResNet-18` · `OpenCV` · `Grad-CAM` · `ECE Calibration` · `PyTest`

**Repository**  
[github.com/Basharameez/BioVision-Path](https://github.com/Basharameez/BioVision-Path)

**Hugging Face Space**  
[BioVision-Path](https://huggingface.co/spaces/BASHARAMEEZ/BioVision-Path)

---

## 04 — BIOVISION-PATH

### BIOMEDICAL COMPUTER VISION PIPELINE

A multi-model biomedical computer vision pipeline covering pathology classification, cellular segmentation, object detection, interpretability, and interactive inference.

```mermaid
flowchart LR
    A[Biomedical Data] --> B[Classification: ResNet-18]
    A --> C[Segmentation: U-Net]
    A --> D[Detection: YOLOv8 90.54% mAP]
    A --> E[Detection: Faster R-CNN 49.52% mAP]
    B & C & D & E --> F[Grad-CAM Interpretability]
    F --> G[Interactive Inference Dashboard]
```

### Detection Benchmark

* **YOLOv8 Standard Detector**: **90.54% mAP@0.50**
* **Faster R-CNN Baseline**: **49.52% mAP@0.50**

### Stack

`Python` · `PyTorch` · `YOLOv8` · `U-Net` · `Faster R-CNN` · `OpenCV` · `Grad-CAM` · `Gradio`

---

# RESEARCH

## EXPLAINABLE AI FOR SUICIDE IDEATION DETECTION

**IEEE Xplore Publication**

Research exploring explainable NLP approaches for suicide ideation detection in social media text using deep learning architectures and feature attribution methods.

### Methods

`BERTimbau` · `DistilBERT` · `XLM-R` · `CNN-BiLSTM` · `Integrated Gradients` · `SHAP`

**DOI Link**  
[10.1109/IDICAIHEI65991.2025.11377560](https://doi.org/10.1109/IDICAIHEI65991.2025.11377560)

---

# ENGINEERING STACK

<div align="center">

### AI / MACHINE LEARNING

<img src="https://skillicons.dev/icons?i=python,pytorch,opencv" />

<br>

`Gemini API` · `NLP` · `Computer Vision` · `Explainable AI` · `Model Evaluation`

<br><br>

### SOFTWARE ENGINEERING

<img src="https://skillicons.dev/icons?i=ts,js,react,nextjs,nodejs,fastapi" />

<br>

`REST APIs` · `Async Processing` · `WebSockets` · `Full-Stack Architecture`

<br><br>

### DATA & INFRASTRUCTURE

<img src="https://skillicons.dev/icons?i=postgres,redis,docker,supabase,git,linux" />

<br>

`PostgreSQL` · `Redis` · `BullMQ` · `Docker` · `Supabase` · `Linux`

<br><br>

### TESTING & QUALITY

`Vitest` · `PyTest` · `Unit Testing` · `Integration Testing` · `API Testing`

</div>

---

# OTHER ENGINEERING SYSTEMS

<table>
<tr>
<td width="50%" valign="top">

### CODEORIGIN

**Codebase Intelligence**

Python AST analysis, CycloneDX SBOM generation, dependency intelligence, and MinHash similarity analysis.

`Python` `AST` `CycloneDX` `MinHash`

</td>

<td width="50%" valign="top">

### CAMPUSBUDDY

**Campus Intelligence**

Campus service platform incorporating face detection and recognition through ONNX Runtime.

`YuNet` `SFace` `ONNX Runtime`

</td>
</tr>

<tr>
<td width="50%" valign="top">

### SIH NATIONAL PLATFORM

**Evaluation Infrastructure**

FastAPI-based evaluation platform with role-based workflows, state machines, and export engines.

**11 / 11 API tests passed**

</td>

<td width="50%" valign="top">

### CONTEST HOSTER

**Code Execution Infrastructure**

Competitive programming platform using isolated Docker execution environments.

`Docker` `Python` `Sandboxing`

</td>
</tr>

<tr>
<td width="50%" valign="top">

### REMOTE TREATMENT MONITORING

**Clinical Workflow Infrastructure**

Asynchronous clinician-support workflow layer with computer vision interpretability.

`PyTorch` `Grad-CAM` `FastAPI`

</td>

<td width="50%" valign="top">

### IMAGE SHARPENING SYSTEM

**Digital Signal Processing**

Image enhancement pipeline based on Laplacian and high-pass spatial filtering.

`Python` `OpenCV` `DSP`

</td>
</tr>
</table>

---

# VERIFIED ENGINEERING

<div align="center">

<table>
<tr>
<td align="center" width="25%">

### 170 / 170

**VITEST**

38 test files

</td>

<td align="center" width="25%">

### 39 / 39

**PYTEST**

BioRobust

</td>

<td align="center" width="25%">

### 11 / 11

**API TESTS**

SIH Platform

</td>

<td align="center" width="25%">

### 01

**IEEE PAPER**

Published Research

</td>
</tr>
</table>

</div>

---

# HOW I BUILD

```mermaid
flowchart LR
    A[Research] --> B[Experiment] --> C[Engineer] --> D[Validate] --> E[Deploy] --> F[Measure] --> G[Iterate]
    G -.-> A
```

> **I focus on the engineering layer between AI research and usable software:**  
> **Models → Data → APIs → Backend → Infrastructure → Interfaces → Testing → Production**

---

# ENGINEERING PRINCIPLES

### 01 — BUILD BEYOND THE MODEL
A model is only one component of an AI product. The surrounding data, APIs, queues, databases, interfaces, and infrastructure determine whether it becomes useful software.

### 02 — MEASURE EVERYTHING
Accuracy. F1. Calibration. Throughput. Latency. Failure modes. Test suites.

### 03 — DESIGN FOR REAL SOFTWARE
AI capabilities should become reliable systems people can actually use.

---

# CURRENT FOCUS

```mermaid
flowchart TD
    subgraph AI ["AI Systems"]
      A1[LLM Applications]
      A2[Computer Vision]
    end
    subgraph Software ["Production Software"]
      B1[APIs & Microservices]
      B2[Data & Queues]
      B3[Infrastructure]
    end
    subgraph Products ["User-Facing Products"]
      C1[Hiring Infrastructure]
      C2[Industrial Telemetry]
      C3[Biomedical Tools]
    end
    AI --> Software --> Products
```

---

<div align="center">

## BUILDING SOMETHING INTERESTING?

### EXPLORE MY WORK

<br>

<a href="https://rameezbasha.freedev.app/">
  <img src="https://img.shields.io/badge/PORTFOLIO-Live_Site-D4AF37?style=for-the-badge&logoColor=000000" />
</a>

<br><br>

<a href="https://github.com/Basharameez">
  <img src="https://img.shields.io/github/followers/Basharameez?label=FOLLOW&style=flat-square" />
</a>

<br><br>

`AI/ML` · `FULL-STACK` · `SYSTEM DESIGN` · `COMPUTER VISION` · `LLMs`

<br><br>

**SHAIK RAMEEZ BASHA**

<sub>AI SYSTEMS ENGINEER · SOFTWARE BUILDER · RESEARCHER</sub>

*Turning research into intelligent software systems.*

</div>
