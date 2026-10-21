---
title: Identity Verification (KYC) — OCR & Face Match
summary: Two production AI services that power ID-card OCR, document-authenticity detection and biometric face matching for banking and finance customer onboarding.
short: "ID OCR and biometric face verification for banking."
outcome: Face verification with a 1-in-10M error rate; live in banking customer-verification flows with TSE certification completed.
status: production
category: industry
context: Identify-Turkey — id24.tr KYC platform
role: Developer — IDOCR & IDBM (AI/CV modules)
period: 09/2025 — Present
badges: [REST API · JWT, TSE Documentation & Certification]
tags: [Python, Flask, YOLO, DeepFace, OpenCV]
stack: [Python, Flask, YOLO (Ultralytics), Tesseract OCR, OpenCV, PyTorch, DeepFace, TensorFlow, dlib, MediaPipe, ONNX, JWT, Docker, Kubernetes, PostgreSQL, Gunicorn]
facts:
  - { label: "Client", value: "Identify-Turkey — id24.tr KYC platform" }
  - { label: "Role", value: "Developer — IDOCR & IDBM (AI/CV modules)" }
  - { label: "Scope", value: "ID OCR + MRZ, authenticity detection, biometric face match" }
  - { label: "Integration", value: "Flask REST API (JWT), Docker/Kubernetes microservices" }
  - { label: "Status", value: "Live (in production)" }
metrics:
  - { label: "Face-verification error rate", value: "1 in 10M" }
cover: ../../../assets/images/projects/kyc-cover.webp
coverAlt: Identity verification — ID-card OCR and biometric face-match illustration
featured: true
order: 1
---

## Context

I built two independent microservices that form the AI core of a KYC (Know Your Customer) identity-verification platform. **IDOCR** reads the front and back of a national ID card and extracts its fields (ID number, name/surname, date of birth, validity, serial number, MRZ); detects whether an image is an ID and its orientation; and verifies **document authenticity** through security features. **IDBM** is a **biometric face-matching** service that compares a selfie against the ID photo, and additionally provides face analysis and landmark extraction.

## IDOCR — ID OCR & authenticity detection

- **ID detection & orientation:** YOLO-based detection of whether an image is an ID and whether it is the front or back side.
- **Field OCR:** Extraction of ID number, name/surname, date of birth, validity, gender and serial number from the front (YOLO region detection + Tesseract OCR).
- **MRZ reading:** Back-side MRZ parsing and cross-validation against the front-side fields.
- **Authenticity / security features:** Hologram and MLI detection on the front, guilloche detection on the back.

## IDBM — Biometric face matching

- **Face match (1:1):** Selfie ↔ ID-photo comparison; distance- and threshold-based match decision.
- **Multiple models & metrics:** ArcFace, Facenet512, VGG-Face, SFace, etc.; cosine / euclidean_l2 metrics with per-model tuned thresholds.
- **Face detection & landmarks:** Face detection and landmark extraction via RetinaFace, MTCNN and MediaPipe.
- **Liveness modules:** Modules that check the verification is performed by a live person.
- **Face analysis:** Age, gender and emotion estimation; ONNX conversion for performance.

## Deployment & operations

- **Serving:** Gunicorn + Flask; Docker images, scalable Kubernetes deployment.
- **Security:** JWT-based authentication and end-to-end encryption.
- **Compliance:** TSE documentation and certification for banking/KYC requirements.

## Outcome

Beyond model development and service delivery, I also managed the **TSE documentation and certification** process. The face-verification system operates with a **1-in-10M error rate**. Both services run in production as encrypted, JWT-protected REST APIs on Docker/Kubernetes and are used in banking customer-verification flows.
