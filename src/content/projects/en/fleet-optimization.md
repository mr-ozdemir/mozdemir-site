---
title: ABC-Tuned ACO Fleet Optimization
summary: A hybrid fleet-optimization system that combines demand forecasting, Artificial Bee Colony (ABC) hyperparameter tuning and Ant Colony Optimization (ACO) for cost-aware shipment planning.
outcome: In development; results will be shared once complete.
status: research
category: research
context: Optimization & demand forecasting
period: 03/2026 — Present
tags: [Demand Forecasting, ABC, ACO]
stack: [Demand Forecasting, Artificial Bee Colony (ABC), Ant Colony Optimization (ACO)]
facts:
  - { label: "Problem", value: "Cost-aware shipment planning" }
  - { label: "Method", value: "Demand forecasting + ABC hyperparameter tuning + ACO" }
  - { label: "Status", value: "In development (03/2026 — present)" }
cover: ../../../assets/images/projects/fleet-cover.png
coverAlt: Illustration of a depot, delivery points and ant-colony routes
note: The project is in development; result metrics will be added when it is complete.
featured: false
order: 5
---

## Problem

Plan a fleet's shipments in a **cost-aware** way: decide which vehicle visits which delivery points, and in what order, while accounting for expected demand.

## Approach

A hybrid system that combines three components is being developed:

- **Demand forecasting:** Estimating the demand that feeds into planning.
- **Ant Colony Optimization (ACO):** Searching for the route and shipment plan.
- **Artificial Bee Colony (ABC):** Automatically tuning ACO's hyperparameters, carrying the ABC-based optimization experience from my AutoML work over to an operations problem.
