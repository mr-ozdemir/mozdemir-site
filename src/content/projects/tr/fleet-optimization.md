---
title: ABC ile Ayarlanan ACO — Filo Optimizasyonu
summary: Talep tahmini, Yapay Arı Kolonisi (ABC) ile hiperparametre ayarı ve Karınca Kolonisi Optimizasyonu'nu (ACO) birleştiren, maliyet odaklı sevkiyat planlaması için hibrit filo optimizasyon sistemi.
short: "Arı ve karınca kolonisi algoritmalarıyla sevkiyat planlama."
outcome: Geliştirme sürüyor; sonuçlar tamamlandığında paylaşılacak.
status: research
category: research
context: Optimizasyon & talep tahmini
period: 03/2026 — Güncel
tags: [Demand Forecasting, ABC, ACO]
stack: [Demand Forecasting, Artificial Bee Colony (ABC), Ant Colony Optimization (ACO)]
facts:
  - { label: "Problem", value: "Maliyet odaklı sevkiyat planlaması" }
  - { label: "Yöntem", value: "Talep tahmini + ABC hiperparametre ayarı + ACO" }
  - { label: "Durum", value: "Geliştirme sürüyor (03/2026 — Güncel)" }
cover: ../../../assets/images/projects/fleet-cover.png
coverAlt: Depo, teslimat noktaları ve karınca kolonisi rotalarını gösteren temsili illüstrasyon
note: Proje geliştirme aşamasında; sonuç metrikleri tamamlandığında eklenecek.
featured: false
order: 5
---

## Problem

Bir filonun sevkiyatlarını **maliyet odaklı** planlamak: hangi aracın hangi teslimat noktalarına hangi sırayla gideceğine, beklenen talebi de hesaba katarak karar vermek.

## Yaklaşım

Üç bileşeni birleştiren hibrit bir sistem geliştiriliyor:

- **Talep tahmini:** Planlamaya girdi olacak talebin önceden kestirilmesi.
- **Karınca Kolonisi Optimizasyonu (ACO):** Rota ve sevkiyat planının aranması.
- **Yapay Arı Kolonisi (ABC):** ACO'nun hiperparametrelerinin otomatik ayarlanması. Bu, AutoML çalışmalarımdaki ABC tabanlı optimizasyon deneyiminin bir optimizasyon problemine aktarılması.
