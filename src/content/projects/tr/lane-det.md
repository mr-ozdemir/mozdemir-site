---
title: ROS + OpenCV Şerit Tespiti
summary: USB kamera akışından gerçek zamanlı şerit algılama ve PID'e uygun yönlendirme sinyali üretimi — Teknofest Robotaksi prototipi.
outcome: Klasik OpenCV boru hattıyla gerçek zamanlı şerit maskeleme ve yönlendirme açısı; kaynak kodu GitHub'da açık.
status: prototype
category: robotics
context: Teknofest Robotaksi
badges: [Açık kaynak]
tags: [ROS, OpenCV, Python, C++]
stack: [ROS, OpenCV, Python, C++, Canny, Hough, PID]
facts:
  - { label: "Kategori", value: "Bilgisayarlı Görü / Otonom Sürüş" }
  - { label: "Bağlam", value: "Teknofest Robotaksi için gerçek zamanlı prototip" }
  - { label: "Girdi", value: "USB kamera veya ROS kamera sürücüsü" }
  - { label: "Çıktı", value: "Şerit maskeleme & yönlendirme açısı (PID'e uygun)" }
  - { label: "Platform", value: "ROS (Ubuntu), OpenCV" }
links:
  - { label: GitHub deposu, href: "https://github.com/mr-ozdemir/Lane-detection-with-Opencv-in-Ros" }
cover: ../../../assets/images/projects/lane-cover.jpg
coverAlt: ROS + OpenCV şerit tespiti kapak görseli
gallery:
  - { src: ../../../assets/images/projects/lane-1.png, alt: ROS + OpenCV şerit tespiti — genel görünüm, caption: Genel görünüm. }
  - { src: ../../../assets/images/projects/lane-2.png, alt: ROI ve Canny sonrası kenar görüntüsü, caption: ROI ve Canny sonrası kenar görüntüsü. }
  - { src: ../../../assets/images/projects/lane-3.png, alt: Hough çizgileri ve şerit merkez çizgisi, caption: Hough çizgileri ve şerit merkez çizgisi. }
  - { src: ../../../assets/images/projects/lane-4.png, alt: PID'e gönderilen yönlendirme açısı katmanı, caption: PID'e gönderilen yönlendirme açısı. }
featured: false
order: 6
---

## Algoritma boru hattı

Sistem, klasik OpenCV tabanlı bir şerit tespiti yaklaşımıyla *gerçek zaman* performans hedefler:

1. **ROI (Region of Interest):** Yolun ilgi bölgesinin maskelenmesi (alt üçgen/poligon).
2. **Ön işleme:** Gri tonlama, Gauss bulanıklaştırma, dinamik eşikleme.
3. **Kenar çıkarımı (Canny):** Aday çizgi kenarlarının çıkarımı.
4. **HoughLinesP:** Sağ/sol şerit adaylarının hat segmentleri olarak bulunması.
5. **Simetri & birleştirme:** Çizgilerin filtrelenmesi, eğim/süreklilik ile birleştirme.
6. **Yön açısı tahmini:** Şerit merkezine göre sapma ve `steering_angle` üretimi.
7. **İsteğe bağlı düzeltmeler:** Zaman penceresinde yumuşatma, jitter azaltma.

## Örnek ROS konuları

- `/camera/image_raw` — Giriş görüntüsü
- `/lane/overlay` — Tespit edilen şerit overlay'i (isteğe bağlı)
- `/lane/steering_angle` — Yönlendirme açısı (float)
- `/lane/pid` — PID kontrol girdisi (isteğe bağlı)

## Örnek parametreler

| Parametre | Açıklama | Örnek |
| --- | --- | --- |
| `canny_low` | Kenar alt eşiği | 50 |
| `canny_high` | Kenar üst eşiği | 150 |
| `hough_threshold` | Hough oy eşiği | 30 |
| `minLineLength` | Minimum çizgi uzunluğu | 25 |
| `maxLineGap` | Çizgi birleştirme boşluğu | 20 |
| `roi_vertices` | İlgi bölgesi çokgeni | alt üçgen |
| `smoothing_window` | Açı yumuşatma penceresi | 5 |

Konu adları, düğüm isimleri ve parametre dosyaları depo içinde tanımlıdır; burada verilenler genel şablondur.

## Kurulum ve çalıştırma (örnek)

```bash
# ROS & bağımlılıklar (örnek: Noetic / Ubuntu 20.04)
sudo apt update
sudo apt install ros-noetic-desktop-full python3-opencv

# Çalışma alanı ve depo
mkdir -p ~/catkin_ws/src && cd ~/catkin_ws/src
git clone https://github.com/mr-ozdemir/Lane-detection-with-Opencv-in-Ros.git
cd .. && catkin_make && source devel/setup.bash

# Kamera sürücüsü ve şerit tespiti
roslaunch usb_cam usb_cam-test.launch
roslaunch lane_detection lane_detection.launch
```

Komutlar depo yapısına göre değişebilir; depodaki README/launch dosyalarına göre uyarlayın.

## Notlar & olası geliştirmeler

- Farklı ışık/zemin koşulları için ROI ve kenar/çizgi eşikleri sahaya göre ayarlanmalıdır.
- FPS/gecikme hedefleri çözünürlüğe ve donanıma bağlıdır; 640×480 ile daha stabil gerçek zaman performansı alınır.
- Gelecekte segmentasyon tabanlı yaklaşımlar (örn. U-Net, ENet) ile klasik yöntem hibrit edilebilir.
- ROS2 portu ve donanım ivmelendirme (GPU/OpenCL) planlanabilir.
