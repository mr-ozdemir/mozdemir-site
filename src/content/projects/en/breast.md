---
title: Early-Stage Breast Cancer Diagnosis — Computer Vision
summary: A decision-support system of density-specific hybrid CNN models for mass and calcification detection and BI-RADS classification, built on 4,000+ mammograms.
outcome: Macro F1 > 90% for mass, calcification and BI-RADS 1-2-4-5 classification · national finalist, top 50 among 5,000 projects (presented in Antalya).
status: research
category: research
context: Supported by the Ministry of Health & TÜSEB · ERÜ AI Club
role: Project lead and researcher
period: "2024"
badges: [TÜSEB funded, National finalist]
tags: [PyTorch, YOLOv10, EfficientNet, Faster R-CNN]
stack: [Python, PyTorch, YOLOv10, Faster R-CNN, OpenCV / CLAHE, CUDA, RTX 4090, ABC (Hyperparameter), DenseNet / ResNet / EfficientNet]
facts:
  - { label: "Category", value: "AI in Healthcare — Computer Vision" }
  - { label: "Tasks", value: "Mass & Calcification Detection, BI-RADS (Image) Classification" }
  - { label: "Support", value: "Republic of Türkiye Ministry of Health & TÜSEB" }
  - { label: "Data", value: "4,000+ mammograms" }
  - { label: "Recognition", value: "National finalist — top 50 among 5,000 projects, presented in Antalya" }
metrics:
  - { label: "Mass detection macro F1", value: "> 90%" }
  - { label: "Calcification macro F1", value: "> 90%" }
  - { label: "BI-RADS 1,2,4,5 macro F1", value: "> 90%" }
cover: ../../../assets/images/projects/breast-cover.png
coverAlt: Four mammograms with detected regions highlighted
gallery:
  - { src: ../../../assets/images/projects/breast-detection.png, alt: Detection and classification output on a mammogram, caption: Mass/calcification detection and classification output on a mammogram. }
  - { src: ../../../assets/images/projects/breast-training.jpg, alt: Model training and monitoring, caption: Model training and monitoring. }
note: The findings are being prepared as a paper.
featured: true
order: 2
---

## Problem

A decision-support system was developed for the early-stage diagnosis of breast cancer. The solution covers the **BI-RADS** risk classification used by physicians as well as the detection of suspicious **masses** and **calcifications**; in both tasks, success rates above 90% are achieved.

## Approach & originality

For the detection tasks, **YOLO** was used with **ABC-based hyperparameter optimization**. For the classification tasks, a **negative-based collective learning** approach was applied on **EfficientNet-B1**. This approach was observed to outperform standard classification setups in the literature, and the findings are being prepared as a paper.

## Architectural components

- **ROI cropper:** Using Faster R-CNN to feed only the regions of interest (ROI) to the model; eliminating unnecessary areas.
- **Preprocessing:** DICOM (DCM) → PNG conversion; resizing (classification: 256 px, detection: 640 px); CLAHE to improve lesion-detection performance; data augmentation (90° rotations).
- **Density classifier:** Separating mammograms into A/B/C/D densities; training the detection and classification models specifically per density.
- **Detection:** Detection of masses and calcifications using separate YOLO models for A/B/C/D and ABC-based hyperparameter optimization.
- **BI-RADS (image) classification:** Evaluations across VGG16, InceptionV3, ResNet, EfficientNet and DenseNet variants; neutralizing the adverse effect of different densities on model performance; original BI-RADS classification with a Negative-Based Collective Learning architecture trained on EfficientNet-B1.
- **Optimization:** Tuning YOLO hyperparameters with ABC for detection; a broad search space + Random Search for BI-RADS and density classification.

## Datasets used

- **BI-RADS, mass, calcification:** Ministry of Health 1,000-patient mammography data (BI-RADS 1-2-4-5).
- **ROI cropping:** ROI-derived set from RSNA Breast Cancer Detection.
- **Density & BI-RADS:** RSNA public data (~25k density-labeled, ~26k BI-RADS 1–2).
