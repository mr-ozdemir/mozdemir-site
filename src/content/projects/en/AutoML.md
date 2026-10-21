---
title: Nahıl AutoML
summary: An end-to-end AutoML framework that automatically designs task-specific preprocessing, weight initialization, architecture, activation & loss functions, and hyperparameters.
outcome: Two papers from the framework are at the revision stage in SCI/E-indexed journals (Q2, Q3); result metrics are withheld while the publication process continues.
status: research
category: research
context: ERÜ AI and Big Data Application and Research Center
role: Researcher
badges: [Theoretical framework & prototype]
tags: [PyTorch, CUDA, NAS, GP / ABCP]
stack: [Python, PyTorch, CUDA, NAS, Activation Design, Loss Design, Init Strategies, HParam Opt, GP / EA / ABCP]
facts:
  - { label: "Category", value: "AutoML & Meta-learning" }
  - { label: "Scope", value: "Data prep, architecture search, activation & loss design, weight init, hyperparameter optimization" }
  - { label: "Status", value: "Theoretical framework and prototype components" }
cover: ../../../assets/images/projects/automl-cover.jpg
coverAlt: Nahıl AutoML — golden bee emblem on a black background
gallery:
  - { src: ../../../assets/images/projects/automl-framework.png, alt: Diagram of the Nahıl AutoML framework components, caption: Components of the Nahıl AutoML framework. }
note: Research and paper drafting are ongoing, so metrics are intentionally withheld. This page summarizes the theoretical architecture only.
featured: true
order: 4
---

## Theoretical framework

Nahıl AutoML is a high-level automation architecture that designs task-specific ML/DL systems *without human intervention*. It unifies data preparation, architecture search (NAS), activation and loss design, weight initialization strategies, and training hyperparameter optimization. Components are optimized together with their interactions in mind.

## 1. Data-driven decisions

Scaling, normalization, class imbalance handling, augmentation, and feature selection are automated from dataset statistics and task type. These constraints guide the downstream searches.

## 2. Architecture search (NAS)

The search space covers layer types, channels, kernel sizes, connectivity, and regularization choices. Fitness can target low cost, high performance, or a hybrid. Candidates are evaluated with early-stopped trials and chosen on the validation split.

## 3. Activation & loss design

Activation and loss functions are discovered with semantic-aware operators or adapted by parameterizing known functions. Decisions emphasize outlier robustness, gradient stability, and generalization.

## 4. Weight init & training hyperparameters

Initialization strategies (He/Xavier variants, scaling tweaks) and training hyperparameters (epochs, learning rate, batch size, etc.) are optimized in a shared search space for faster convergence and smoother loss surfaces.

## 5. Joint search & multi-objective optimization

Components are evaluated together. Accuracy/F1, parameter count, FLOPs, latency, and memory guide selections that respect deployment constraints, reporting Pareto-optimal solutions.
