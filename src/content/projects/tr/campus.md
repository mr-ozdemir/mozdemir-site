---
title: Kampüs Giriş/Çıkış AI Kontrolü
summary: Erciyes Üniversitesi kapıları ve tramvay duraklarında çoklu kamera akışlarından gerçek zamanlı kişi/araç sayımı, ID takibi ve raporlama.
outcome: Erciyes Üniversitesi Rektörlüğü kullanımında; 10+ kamera akışında gerçek zamanlı izleme ve sayım.
status: production
category: industry
context: Erciyes Üniversitesi — Bilgi İşlem Daire Başkanlığı
role: AI Stajyeri — uçtan uca geliştirme
period: 2024 — Staj projesi
badges: [Rektörlük kullanımında]
tags: [PyTorch, YOLO, OpenCV, Django]
stack: [Python, PyTorch, YOLO, OpenCV, CUDA, Django, SQLite, Linux]
facts:
  - { label: "Kurum", value: "Erciyes Üniversitesi — Bilgi İşlem Daire Başkanlığı" }
  - { label: "Kapsam", value: "Kapılar & tramvay durakları; kişi, bisiklet, motosiklet sayımı" }
  - { label: "Özellikler", value: "Anlık sayım, ID takibi, çoklu kamera desteği, raporlama" }
  - { label: "Durum", value: "Canlı kullanım (Üretimde)" }
  - { label: "Süre", value: "1 ay (staj dönemi)" }
metrics:
  - { label: "Kamera akışı", value: "10+" }
  - { label: "Kapsanan kapı", value: "6" }
cover: ../../../assets/images/projects/campus-cover.png
coverAlt: Kampüs yolunda yürüyen kişilerin gerçek zamanlı tespit kutularıyla işaretlendiği kamera görüntüsü
featured: true
order: 3
---

## Problem

Üniversitenin mevcut kamera altyapısından gelen **anlık akışları** kullanarak kampüs kapıları ve tramvay duraklarındaki giriş-çıkış hareketini gerçek zamanlı ölçmek.

## Çözüm

Sistem; **kişi, bisiklet ve motosiklet** gibi varlıkları tespit eder, her birine **ID** atar ve giriş-çıkış istatistiklerini gerçek zamanlı olarak raporlar. **YOLO tabanlı tespit** ile geniş bir görüntü işleme sistemini birleştirerek hız ve verimlilik odaklı uçtan uca bir çözüm tasarlandı. Sistem hâlihazırda **Erciyes Üniversitesi Rektörlüğü** tarafından kullanılıyor.

## Mimari & bileşenler

- **Veri alma:** Mevcut kamera altyapısından görüntü akışlarının çekilmesi.
- **Ön işleme:** Kare normalizasyonu, gürültü azaltma, ROI iyileştirme, ışık/kontrast düzenlemeleri (OpenCV).
- **Tespit:** YOLO ailesi ile kişi/bisiklet/motosiklet tespiti; gerçek zamanlı çalışmaya uygun optimizasyonlar.
- **ID takibi:** Çoklu kamera senaryosunda varlıkların kimliklendirilmesi ve akış içinde takibi (ID sürekliliği).
- **Sayım & mantık:** Sanal hat/alan bazlı giriş sayımları, yoğunluk analizi, zaman damgalı kayıt.
- **Raporlama:** Anlık pano, tarihsel istatistikler, saatlik/günlük/haftalık özetler; dışa aktarma.

## Dağıtım & operasyon

- **Uçtan uca kurulum:** Fizibilite, veri erişimi, model geliştirme, test ve canlıya alma aşamalarına ek olarak yüksek hesaplama kapasiteli GPU/sunucu tedarik ve kurulumları da proje kapsamına alındı.
- **Ölçekleme:** 10+ kamera akışında gerçek zamanlı izleme & sayım.
- **Gizlilik:** Kişisel veri içermeyen istatistik üretimi; yalnızca sayım ve ID seviyesinde kayıt.
