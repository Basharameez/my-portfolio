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

**Aptivue** is an AI-powered recruitment platform designed around resume intelligence, candidate evaluation, semantic matching, hiring workflows, and analytics.

```text
RESUME
   │
   ▼
┌──────────────────┐
│  RESUME PARSER   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ REDIS / BULLMQ   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   GEMINI / LLM   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ HIRING EVALUATION│
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ MATCHING + DATA  │
└──────────────────┘
```

### Engineering

`Next.js 15` · `React` · `TypeScript` · `Gemini` · `PostgreSQL` · `Supabase` · `Drizzle` · `Redis` · `BullMQ` · `Vitest`

### Verified

| Signal                |                           Result |
| --------------------- | -------------------------------: |
| Vitest tests          |             **170 / 170 passed** |
| Test files            |                           **38** |
| Evaluation throughput |                  **2,400 / min** |
| Architecture          | **Async queue-based processing** |

**Repository**

[github.com/2049basharam/AptiHire-AI](https://github.com/2049basharam/AptiHire-AI)

---

# 02 — ROTORDYN

### INDUSTRIAL VIBRATION INTELLIGENCE

A production-oriented SaaS system for analyzing machine vibration telemetry and transforming raw sensor data into actionable bearing diagnostics.

```text
RAW SENSOR DATA
       │
       ▼
┌──────────────────┐
│   FASTAPI API    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ SIGNAL PROCESSING│
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  FFT ANALYSIS    │
│   4096 LINES     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ BPFO / BPFI      │
│ DEFECT MARKERS   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ MACHINE HEALTH   │
│     REPORT       │
└──────────────────┘
```

### Engineering

`Python` · `FastAPI` · `React` · `PostgreSQL` · `Pandas` · `Plotly.js` · `FFT` · `ISO 10816`

### Capabilities

* CSV / Excel telemetry ingestion
* RMS vibration velocity calculation
* FFT spectral analysis
* Bearing defect frequency detection
* Machine health severity classification
* Interactive diagnostic visualization
* AI-assisted report generation

---

# 03 — BIOROBUST

### ML ROBUSTNESS & COMPUTER VISION

A benchmarking framework for evaluating how computer vision models behave under controlled image degradation.

```text
                    PATHMNIST
                       │
                       ▼
                 RESNET-18
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
        BLUR       RESOLUTION     NOISE
          │            │            │
          └────────────┼────────────┘
                       ▼
                ROBUSTNESS
                EVALUATION
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      ACCURACY        F1          ECE
```

### Benchmark

| Metric         |             Result |
| -------------- | -----------------: |
| Test images    |          **7,180** |
| Perturbations  |  **35 conditions** |
| Clean accuracy |         **73.66%** |
| Weighted F1    |         **72.31%** |
| Macro F1       |         **69.90%** |
| Clean ECE      |         **0.0782** |
| PyTest         | **39 / 39 passed** |

### Worst-case observation

**Blur S4 → 11.80% accuracy**

A **61.87 percentage-point degradation** from the clean baseline.

### Stack

`PyTorch` · `ResNet-18` · `OpenCV` · `Grad-CAM` · `ECE Calibration` · `PyTest`

**Repository**

[github.com/Basharameez/BioVision-Path](https://github.com/Basharameez/BioVision-Path)

**Hugging Face**

[BioVision-Path](https://huggingface.co/spaces/BASHARAMEEZ/BioVision-Path)

---

# 04 — BIOVISION-PATH

### BIOMEDICAL COMPUTER VISION PIPELINE

A multi-model computer vision pipeline covering classification, segmentation, object detection, interpretability, and interactive inference.

```text
PATHOLOGY DATA
      │
      ├──────────────► CLASSIFICATION
      │                  ResNet-18
      │
      ├──────────────► SEGMENTATION
      │                  U-Net
      │
      ├──────────────► DETECTION
      │                  YOLOv8
      │                  Faster R-CNN
      │
      └──────────────► INTERPRETABILITY
                         Grad-CAM
```

### Detection Benchmark

**YOLOv8:** `90.54% mAP@0.50`

**Faster R-CNN:** `49.52% mAP@0.50`

### Stack

`Python` · `PyTorch` · `YOLOv8` · `U-Net` · `Faster R-CNN` · `OpenCV` · `Grad-CAM` · `Gradio`

---

# RESEARCH

## EXPLAINABLE AI FOR SUICIDE IDEATION DETECTION

**IEEE Xplore Publication**

Research exploring explainable NLP approaches for suicide ideation detection in social media text.

### Methods

`BERTimbau` · `DistilBERT` · `XLM-R` · `CNN-BiLSTM` · `Integrated Gradients` · `SHAP`

**DOI**

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

### TESTING

`Vitest` · `PyTest` · `Unit Testing` · `Integration Testing` · `API Testing`

</div>

---

# OTHER BUILDS

<table>
<tr>
<td width="50%">

### CODEORIGIN

**Codebase Intelligence**

Python AST analysis, SBOM generation, dependency intelligence, and MinHash similarity analysis.

`Python` `AST` `CycloneDX` `MinHash`

</td>

<td width="50%">

### CAMPUSBUDDY

**Campus Intelligence**

Campus service platform incorporating face detection and recognition through ONNX Runtime.

`YuNet` `SFace` `ONNX`

</td>
</tr>

<tr>
<td width="50%">

### SIH NATIONAL PLATFORM

**Evaluation Infrastructure**

FastAPI-based evaluation platform with role-based workflows, state machines, and export engines.

**11 / 11 API tests passed**

</td>

<td width="50%">

### CONTEST HOSTER

**Code Execution Infrastructure**

Competitive programming platform using isolated Docker execution environments.

`Docker` `Python` `Sandboxing`

</td>
</tr>

<tr>
<td width="50%">

### REMOTE TREATMENT MONITORING

**Clinical Workflow**

Asynchronous clinician-support workflow with computer vision interpretability.

`PyTorch` `Grad-CAM`

</td>

<td width="50%">

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

```text
       RESEARCH
           │
           ▼
    ┌──────────────┐
    │ EXPERIMENT   │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │   ENGINEER   │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │   VALIDATE   │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │   DEPLOY     │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │   MEASURE    │
    └──────────────┘
```

I focus on the layer between **AI research and usable software**:

**Models → APIs → Data → Infrastructure → Interfaces → Testing → Production**

---

<div align="center">

## CURRENTLY BUILDING

### AI SYSTEMS THAT FEEL LIKE SOFTWARE — NOT JUST MODELS.

<br>

<a href="https://rameezbasha.freedev.app/">
<img src="https://img.shields.io/badge/EXPLORE_MY_WORK-D4AF37?style=for-the-badge&logoColor=000000" />
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

</div>
