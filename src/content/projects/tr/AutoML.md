---
title: Nahıl AutoML
summary: Göreve özel veri ön işleme, ağırlık başlatma, mimari, aktivasyon & kayıp fonksiyonu ve hiperparametreleri otomatik tasarlayan uçtan uca AutoML çerçevesi.
outcome: Çerçeveden doğan iki makale SCI/E indeksli dergilerde (Q2, Q3) revizyon aşamasında; sonuç metrikleri yayın süreci nedeniyle paylaşılmıyor.
status: research
category: research
context: ERÜ Yapay Zekâ ve Büyük Veri Uygulama ve Araştırma Merkezi
role: Araştırmacı
badges: [Teorik çerçeve & prototip]
tags: [PyTorch, CUDA, NAS, GP / ABCP]
stack: [Python, PyTorch, CUDA, NAS, Activation Design, Loss Design, Init Strategies, HParam Opt, GP / EA / ABCP]
facts:
  - { label: "Kategori", value: "AutoML & Meta-Öğrenme" }
  - { label: "Kapsam", value: "Ön işleme, mimari arama, aktivasyon & kayıp fonksiyonu tasarımı, ağırlık başlatma, hiperparametre optimizasyonu" }
  - { label: "Durum", value: "Teorik çerçeve ve prototip bileşenler" }
cover: ../../../assets/images/projects/automl-cover.jpg
coverAlt: Nahıl AutoML — siyah zemin üzerinde altın renkli arı amblemi
gallery:
  - { src: ../../../assets/images/projects/automl-framework.png, alt: Nahıl AutoML çerçevesinin bileşenlerini gösteren diyagram, caption: Nahıl AutoML çerçevesinin bileşenleri. }
note: Bilimsel çalışmalar ve araştırma makalesine dönüştürme süreçleri devam ettiği için bu sayfada kasıtlı olarak çıktı/sonuç metrikleri paylaşılmamaktadır. İçerik yalnızca teorik mimari ve yaklaşımı özetler.
featured: true
order: 4
---

## Teorik çerçeve

Nahıl AutoML, farklı görev ve veri koşullarında *insan müdahalesi olmadan* görev-özel makine öğrenmesi/derin öğrenme sistemlerini tasarlamayı hedefleyen üst seviye bir otomasyon mimarisidir. Yaklaşım; veri ön işlemeyi, mimari aramayı (NAS), aktivasyon ve kayıp fonksiyonu tasarımını, ağırlık başlatma stratejisi seçimini ve eğitim hiperparametrelerinin optimizasyonunu uçtan uca birleştirir. Bileşenler eşzamanlı ve etkileşimleri dikkate alınarak optimize edilir.

## 1. Veri odaklı tasarım kararları

Giriş veri istatistikleri ve görev tipine göre ölçekleme, normalizasyon, sınıf dengesizliği giderme, veri artırma ve özellik seçimi adımları otomatikleştirilir. Bu veri odaklı kararlar sonraki aşamalara kısıt/öncelik olarak aktarılır.

## 2. Mimari arama (NAS)

Arama uzayı; katman türleri, kanal sayıları, çekirdek boyutları, bağlantı örüntüleri ve düzenlileştirme seçenekleri gibi mimari bileşenleri kapsar. Gereksinime göre düşük maliyet, yüksek performans veya hibrit uygunluk fonksiyonları tanımlanır. Aday mimariler erken durdurmalı denemelerle değerlendirilir ve doğrulama setinde en başarılı olanlar seçilir.

## 3. Aktivasyon & kayıp tasarımı

Aktivasyon ve kayıp fonksiyonları, semantik farkındalıklı arama operatörleriyle keşfedilir veya mevcut fonksiyonlar parametreleştirilerek görev metriklerine uyarlanır. Seçimler; uç değer dayanıklılığı, gradyan istikrarı ve genellenebilirlik ölçütleriyle yönlendirilir.

## 4. Ağırlık başlatma & eğitim hiperparametreleri

Başlatma stratejileri (He/Xavier varyantları, ölçek uyarlamaları) ve eğitim hiperparametreleri (epoch, learning rate, batch size vb.) ortak bir arama alanında optimize edilir. Amaç; hızlı yakınsama ve daha düşük kayıp yüzeylerinin keşfidir.

## 5. Birleşik arama & çok amaçlı optimizasyon

Bileşenler tek tek değil, etkileşimleriyle değerlendirilir. Doğruluk/F1, parametre sayısı, FLOPs, gecikme ve bellek gibi hedefler altında dağıtım kısıtlarına uygun adaylar seçilir; Pareto-optimal çözümler raporlanır.
