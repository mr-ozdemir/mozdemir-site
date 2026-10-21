---
title: Erken Dönem Meme Kanseri Teşhisi — Bilgisayarlı Görü
summary: 4.000+ mamografi üzerinde hibrit CNN mimarileriyle kitle ve kalsifikasyon tespiti ile BI-RADS sınıflandırması yapan, yoğunluğa özel modellerden oluşan karar destek sistemi.
short: "Mamografilerde kitle, kalsifikasyon ve BI-RADS tespiti."
outcome: Kitle, kalsifikasyon ve BI-RADS 1-2-4-5 sınıflandırmasında F1 makro > %90 · 5 bin proje içinde ilk 50'de ulusal finalist (Antalya'da sunuldu).
status: research
category: research
context: T.C. Sağlık Bakanlığı & TÜSEB desteği · ERÜ Yapay Zekâ Kulübü
role: Proje lideri ve araştırmacı
period: "2024"
badges: [TÜSEB destekli, Ulusal finalist]
tags: [PyTorch, YOLOv10, EfficientNet, Faster R-CNN]
stack: [Python, PyTorch, YOLOv10, Faster R-CNN, OpenCV / CLAHE, CUDA, RTX 4090, ABC (Hiperparametre), DenseNet / ResNet / EfficientNet]
facts:
  - { label: "Kategori", value: "Sağlıkta Yapay Zekâ — Bilgisayarlı Görü" }
  - { label: "Görevler", value: "Kitle & Kalsifikasyon Tespiti, BI-RADS (Görüntü) Sınıflandırma" }
  - { label: "Destek", value: "T.C. Sağlık Bakanlığı & TÜSEB" }
  - { label: "Veri", value: "4.000+ mamografi" }
  - { label: "Başarı", value: "5 bin proje içinde ilk 50'de ulusal finalist — Antalya'da sunuldu" }
metrics:
  - { label: "Kitle tespiti F1 makro", value: "> %90" }
  - { label: "Kalsifikasyon F1 makro", value: "> %90" }
  - { label: "BI-RADS 1,2,4,5 F1 makro", value: "> %90" }
cover: ../../../assets/images/projects/breast-cover.png
coverAlt: Mamografilerde tespit edilen bölgeleri gösteren dört görüntü
gallery:
  - { src: ../../../assets/images/projects/breast-detection.png, alt: Mamografide tespit ve sınıflandırma görseli, caption: Mamografide kitle/kalsifikasyon tespiti ve sınıflandırma çıktısı. }
  - { src: ../../../assets/images/projects/breast-training.jpg, alt: Model eğitimi ve izleme temsili, caption: Model eğitimi ve izleme. }
note: Bulgular makale olarak hazırlanmaktadır.
featured: true
order: 2
---

## Problem

Meme kanserinin erken dönem teşhisine yönelik bir karar destek sistemi geliştirildi. Çözüm, hekimlerce kullanılan **BI-RADS** risk sınıflandırmasını ve şüpheli **kitle** ile **kalsifikasyon** tespitini kapsıyor; her iki görevde de %90'ın üzerinde başarı elde ediliyor.

## Yaklaşım ve özgünlük

Tespit görevlerinde **YOLO** ile **ABC tabanlı hiperparametre optimizasyonu** kullanıldı. Sınıflandırma görevlerinde ise **negatif tabanlı kolektif öğrenme** yaklaşımı **EfficientNet-B1** üzerinde uygulandı. Bu yaklaşımın, literatürde standart sınıflandırma düzeneklerine kıyasla üstün performans gösterdiği gözlemlendi; bulgular makale olarak hazırlanıyor.

## Mimari bileşenler

- **ROI kırpıcı:** Faster R-CNN ile yalnızca ilgi bölgelerinin (ROI) modele dâhil edilmesi; gereksiz alanların elenmesi.
- **Ön işleme:** DICOM (DCM) → PNG dönüşümü; yeniden boyutlandırma (sınıflandırma: 256 px, tespit: 640 px); lezyon tespiti başarımını artırmak için CLAHE; veri artırma (90° rotasyonlar).
- **Yoğunluk sınıflandırıcı:** Mamografilerin A/B/C/D yoğunluklarına ayrılması; tespit ve sınıflandırma modellerinin yoğunluğa özel eğitilmesi.
- **Tespit:** A/B/C/D için ayrı YOLO modelleri ve ABC tabanlı hiperparametre optimizasyonu ile kitle ve kalsifikasyon tespiti.
- **BI-RADS (görüntü) sınıflandırma:** VGG16, InceptionV3, ResNet, EfficientNet ve DenseNet varyantları üzerinde değerlendirmeler; farklı yoğunlukların model başarısına olumsuz etkisinin nötrlenmesi; EfficientNet-B1 üzerinde eğitilmiş Negatif Tabanlı Kolektif Öğrenme mimarisiyle özgün BI-RADS sınıflandırması.
- **Optimizasyon:** Tespitte YOLO hiperparametrelerinin ABC ile ayarlanması; BI-RADS ve yoğunluk sınıflandırmada geniş arama uzayı + Random Search.

## Kullanılan veri setleri

- **BI-RADS, kitle, kalsifikasyon:** Sağlık Bakanlığı 1000 hasta mamografi verisi (BI-RADS 1-2-4-5).
- **ROI kırpma:** RSNA Breast Cancer Detection'dan türetilmiş ROI seti.
- **Yoğunluk & BI-RADS:** RSNA halka açık veri (~25 bin yoğunluk etiketli, ~26 bin BI-RADS 1–2).
