---
title: Campus Entry/Exit AI Control
summary: Real-time person/vehicle counting, ID tracking and reporting from multiple camera streams at Erciyes University gates and tram stops.
short: "Real-time people and vehicle counting at campus gates."
outcome: Used by the Erciyes University Rectorate; real-time monitoring and counting across 10+ camera streams.
status: production
category: industry
context: Erciyes University — Department of Information Technology
role: AI Intern — end-to-end development
period: 2024 — Internship project
badges: [Used by the Rectorate]
tags: [PyTorch, YOLO, OpenCV, Django]
stack: [Python, PyTorch, YOLO, OpenCV, CUDA, Django, SQLite, Linux]
facts:
  - { label: "Institution", value: "Erciyes University — Department of Information Technology" }
  - { label: "Scope", value: "Gates & tram stops; counting of people, bicycles, motorcycles" }
  - { label: "Features", value: "Real-time counting, ID tracking, multi-camera support, reporting" }
  - { label: "Status", value: "Live usage (in production)" }
  - { label: "Duration", value: "1 month (internship period)" }
metrics:
  - { label: "Camera streams", value: "10+" }
  - { label: "Gates covered", value: "6" }
cover: ../../../assets/images/projects/campus-cover.png
coverAlt: Camera view of a campus road with pedestrians marked by real-time detection boxes
featured: true
order: 3
---

## Problem

Measure entry and exit traffic at campus gates and tram stops in real time, using **live streams** from the university's existing camera infrastructure.

## Solution

The system detects entities such as **people, bicycles and motorcycles**, assigns an **ID** to each, and reports entry-exit statistics in real time. By combining **YOLO-based detection** with an extensive computer-vision system, an end-to-end solution focused on speed and efficiency was designed. The system is already in use by the **Erciyes University Rectorate**.

## Architecture & components

- **Data ingestion:** Pulling video streams from the existing camera infrastructure.
- **Preprocessing:** Frame normalization, noise reduction, ROI enhancement, lighting/contrast adjustments (OpenCV).
- **Detection:** Person/bicycle/motorcycle detection with the YOLO family; optimizations suited to real-time operation.
- **ID tracking:** Identification of entities in a multi-camera scenario and tracking them within the stream (ID continuity).
- **Counting & logic:** Virtual line/zone-based entry counts, density analysis, timestamped logging.
- **Reporting:** Real-time dashboard, historical statistics, hourly/daily/weekly summaries; data export.

## Deployment & operations

- **End-to-end setup:** In addition to the feasibility, data access, model development, testing and go-live stages, the procurement and installation of high-compute GPU/server resources were also included in the project scope.
- **Scaling:** Real-time monitoring & counting across 10+ camera streams.
- **Privacy:** Statistics containing no personal data; logging only at the counting and ID level.
