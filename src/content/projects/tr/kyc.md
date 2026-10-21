---
title: Kimlik Doğrulama (KYC) — OCR & Yüz Eşleştirme
summary: Bankacılık müşteri onboarding süreçleri için kimlik kartı OCR'ı, sahtelik tespiti ve biyometrik yüz eşleştirme sağlayan, üretimde çalışan iki yapay zekâ servisi.
outcome: 10 milyonda 1 hata oranıyla yüz doğrulama; bankacılık müşteri doğrulama akışlarında canlı kullanımda, TSE sertifikasyonu tamamlandı.
status: production
category: industry
context: Identify-Turkey — id24.tr KYC platformu
role: Geliştirici — IDOCR & IDBM (AI/CV modülleri)
period: 09/2025 — Güncel
badges: [REST API · JWT, TSE Dokümantasyon & Sertifikasyon]
tags: [Python, Flask, YOLO, DeepFace, OpenCV]
stack: [Python, Flask, YOLO (Ultralytics), Tesseract OCR, OpenCV, PyTorch, DeepFace, TensorFlow, dlib, MediaPipe, ONNX, JWT, Docker, Kubernetes, PostgreSQL, Gunicorn]
facts:
  - { label: "Müşteri", value: "Identify-Turkey — id24.tr KYC platformu" }
  - { label: "Rol", value: "Geliştirici — IDOCR & IDBM (AI/CV modülleri)" }
  - { label: "Kapsam", value: "Kimlik OCR + MRZ, sahtelik tespiti, biyometrik yüz eşleştirme" }
  - { label: "Entegrasyon", value: "Flask REST API (JWT), Docker/Kubernetes mikroservis" }
  - { label: "Durum", value: "Canlı kullanım (Üretimde)" }
metrics:
  - { label: "Yüz doğrulama hata oranı", value: "10 milyonda 1" }
cover: ../../../assets/images/projects/kyc-cover.webp
coverAlt: Kimlik doğrulama — kimlik kartı OCR ve biyometrik yüz eşleştirme illüstrasyonu
featured: true
order: 1
---

## Bağlam

Bir KYC (Müşterini Tanı) kimlik doğrulama platformunun yapay zekâ çekirdeğini oluşturan iki bağımsız mikroservis geliştirdim. **IDOCR**, T.C. kimlik kartının ön ve arka yüzünü okuyup alanları (TCKN, ad-soyad, doğum tarihi, geçerlilik, seri no, MRZ) çıkarır; görselin kimlik olup olmadığını ve yönünü tespit eder; ayrıca **sahtelik kontrolü** için güvenlik öğelerini doğrular. **IDBM** ise selfie ile kimlik fotoğrafını karşılaştıran **biyometrik yüz eşleştirme** servisidir; ek olarak yüz analizi ve landmark çıkarımı sağlar.

## IDOCR — Kimlik OCR & sahtelik tespiti

- **Kimlik tespiti & yön:** Görselin kimlik olup olmadığının ve ön/arka yüz yönünün YOLO tabanlı tespiti.
- **Alan OCR:** Ön yüzden TCKN, ad-soyad, doğum tarihi, geçerlilik, cinsiyet ve seri no çıkarımı (YOLO bölge tespiti + Tesseract OCR).
- **MRZ okuma:** Arka yüz MRZ ayrıştırma ve ön yüz alanlarıyla çapraz doğrulama.
- **Sahtelik / güvenlik öğeleri:** Ön yüzde hologram ve MLI, arka yüzde guilloche (giyoş) tespiti.

## IDBM — Biyometrik yüz eşleştirme

- **Yüz eşleştirme (1:1):** Selfie ↔ kimlik fotoğrafı karşılaştırması; mesafe ve eşik tabanlı eşleşme kararı.
- **Çoklu model & metrik:** ArcFace, Facenet512, VGG-Face, SFace vb. modeller; cosine / euclidean_l2 metrikleri ve modele özel ayarlı eşikler.
- **Yüz tespiti & landmark:** RetinaFace, MTCNN, MediaPipe ile yüz tespiti ve landmark çıkarımı.
- **Canlılık (liveness) modülleri:** Doğrulamanın canlı bir kişiyle yapıldığını denetleyen modüller.
- **Yüz analizi:** Yaş, cinsiyet ve duygu tahmini; performans için ONNX'e dönüştürme.

## Dağıtım & operasyon

- **Servis:** Gunicorn + Flask; Docker imajları, Kubernetes ile ölçeklenebilir dağıtım.
- **Güvenlik:** JWT tabanlı kimlik doğrulama ve uçtan uca şifreleme.
- **Uyumluluk:** Bankacılık/KYC gereksinimleri için TSE dokümantasyon ve sertifikasyon.

## Sonuç

Model geliştirme ve servisleştirmenin yanı sıra **TSE dokümantasyon ve sertifikasyon** sürecini de yönettim. Yüz doğrulama sistemi **10 milyonda 1 hata oranıyla** çalışıyor. Her iki servis de JWT ile korunan, şifreli REST API'ler olarak Docker/Kubernetes üzerinde üretimde çalışıyor ve bankacılık müşteri doğrulama akışlarında kullanılıyor.
