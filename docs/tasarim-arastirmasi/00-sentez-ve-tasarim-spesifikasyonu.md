# mozdemir.com — Tasarım Araştırması: Sentez ve Tasarım Spesifikasyonu

Tarih: 2026-10-21 · Durum: Taslak v1 (uygulama öncesi) · Hazırlayan: Claude (AI destekli araştırma, bkz. §11)

Bu belge beş ayrı araştırma kolunun sentezidir. Ayrıntılı kanıtlar, site kartları ve tüm ziyaret edilen URL'ler `kaynak-raporlar/` klasöründedir:

| # | Rapor | Kapsam |
|---|---|---|
| 01 | `01-ai-researcher-sites.md` | 29 AI/ML araştırmacı ve mühendis sitesi (Karpathy, Lilian Weng, Chip Huyen, Jon Barron şablonu + 4 kullanıcısı, Shreya Shankar, Lj Miranda, Eugene Yan, Hamel Husain, al-folio…) |
| 02 | `02-developer-portfolios.md` | 32 geliştirici / tasarım-mühendisi portföyü (Brittany Chiang, Lee Robinson, Josh Comeau, Paco, Rauno, Hamish Williams, Shu Ding, Anthony Fu…) |
| 03 | `03-templates.md` | ~25 akademik ve portföy şablonu (al-folio, Academic Pages, HugoBlox, Jon Barron, PaperMod, Astro/Next.js şablonları) — veri modelleri, bileşen anatomileri |
| 04 | `04-design-trends.md` | Tasarım galerileri (Awwwards, godly, siteinspire, minimal.gallery, One Page Love…), 24 öne çıkan site, 7 AI şirketinin görsel dili, Türkçe font kapsam testi (83 aile), 3 görsel yön önerisi |
| 05 | `05-ux-evidence.md` | ~85 kanıt bulgusu (Ladders, NN/g, WCAG 2.2, Core Web Vitals, Google arama dokümantasyonu, Stanford güvenilirlik araştırması…), 46 test edilebilir gereksinim (R1–R46), 68 kaynak |

Kanıt etiketleri kaynak raporlardaki gibidir: **SOURCE** (sitenin kaynak kodundan okundu), **OBSERVED** (sayfadan gözlendi), **UNKNOWN** (doğrulanamadı). Bu belgedeki "R" numaraları `05-ux-evidence.md` içindeki gereksinimlere atıftır.

---

## 1. Araştırma sorusu ve yöntem

**Soru:** Akademik (AutoML yayınları) ve endüstriyel (üretimdeki bilgisayarlı görü / KYC sistemleri, serbest danışmanlık) profili olan, iki dilli (TR/EN) bir AI mühendisinin sitesinde üç ziyaretçi tipi — **işe alımcı**, **akademisyen**, **iş birliği/müşteri** — aradığını en hızlı nasıl bulur? Bunu en iyi yapan sitelerin hangi desenleri mozdemir.com'a uyar?

**Yöntem:** Beş paralel araştırma kolu. Siteler doğrudan çekildi; açık kaynak olanlarda (GitHub) CSS / Tailwind config / şablon dosyaları okunarak gerçek font, renk, genişlik ve animasyon değerleri çıkarıldı. Trend kolu Türkçe karakter desteğini font dosyalarının `cmap` tablosunu okuyarak test etti. UX kolu birincil kaynakları açarak sayıları doğruladı; doğrulanamayan popüler istatistikleri UNVERIFIED olarak eledi.

---

## 2. Mevcut sitenin sorunları (başlangıç noktası)

Kod incelemesinden (2026-10-21):

1. **Projelere ulaşmak zor.** Ana sayfa yalnızca 3 kart gösteriyor. Yayınların hepsi aynı yer tutucu sayfaya (`project-AutoG.html`) gidiyor. İki proje sayfası "içerik paylaşılamıyor" diyor.
2. **Etiket tutarsızlığı.** Nav'da "Yetkinlikler" yazıyor, sayfa başlığı "Hizmetler"; EN'de "Skills" / "Services". Hakkımda sayfasında da ayrıca "Yetkinlikler" bölümü var. (R8 ihlali)
3. **Görsel dil.** Hazır şablon görünümü: bej `#e9e8e6` zemin, üç farklı mavi (`#4154f1`, `#0d6efd`, `#34b7a7` kalıntısı), Poppins + Roboto, yüklenmeyen Raleway. Kart ve rozet stilleri ana sayfada çalışmıyor çünkü CSS'te yalnızca `.mx-portfolio` kapsamında tanımlılar.
4. **Performans.** Preloader ve AOS animasyonları içeriği JS çalışana kadar gizliyor (R34 ihlali). Yaklaşık 10 MB Bootstrap/vendor kodu yükleniyor. Repoda kullanılmayan ~18 MB görsel var.
5. **SEO.** FAQ şeması ve SearchAction kullanılıyor; Google bunları Mayıs 2026 ve Kasım 2024'te kaldırdı. TR `about.html` ve `resume.html` sayfalarında `lang="en"` yazıyor. Boş meta açıklamaları var. JSON-LD'de yanlış dilin URL'leri var.
6. **Bakım.** Her sayfa header, nav ve footer'ı ayrı ayrı içeriyor (26 dosya). Bu yüzden tutarsızlıklar birikti.
7. **Geçersiz HTML.** İç içe `<main>`, birden fazla `<h1>`, fazladan `</section>` / `</div>`.

---

## 3. Sentez: ana bulgular

### 3.1 Ziyaretçi davranışı (kanıt — rapor 05)

- **İşe alımcılar tarıyor, okumuyor.** Ladders 2012 göz izleme çalışmasında (N=30) ilk uygun/uygun değil kararı ~6 saniyede veriliyor. Bu sürenin ~%80'i 6 veri noktasına gidiyor: isim, güncel ve önceki unvan/şirket, bunların tarihleri, eğitim. Kaynak ticari çıkar sahibi olduğu için bu sayıyı kesin bir süre olarak değil, "taranabilirlik zorunlu" kanıtı olarak kullanıyoruz. → **R1, R15**
- **Görüntüleme süresinin %57'si ilk ekranda, %74'ü ilk iki ekranda geçiyor (NN/g).** Projeler ilk ekranda başlamalı. → **R3**
- **Masaüstünde gizli (hamburger) menü kötü.** Kullanım %27'ye karşı %48, bulunabilirlik >%20 düşük, görevler ≥%39 yavaş. → **R7**
- **NN/g (204 işe alım yöneticisi) 3–5 derin vaka çalışması öneriyor.** Çok sayıda yüzeysel kart yerine az sayıda derin içerik. → **R6, R16**
- **Güvenilirlik (Stanford-Makovsky 2002, N=1.481).** Kırık link (−1,42) ve yazım hatası (−1,26) güveni düşürüyor; "güncellendi" sinyali (+1,65) ve listelenmiş kimlik bilgileri (+1,31) artırıyor. Yer tutucu sayfalar kaldırılmalı, "son güncelleme" tarihi gösterilmeli. → **R17, R43, R44**

### 3.2 Benzer profillerin siteleri (rapor 01, 02)

| Desen | Ne kadar yaygın | Bizim için anlamı |
|---|---|---|
| İsim + rol + tek paragraf bio + **link satırı** (E-posta / CV / Scholar / GitHub / LinkedIn) | 11/29 AI sitesi | Hero'nun çekirdeği |
| Yayınlarda **kendi adın kalın**, venue rozeti, Paper/Code/BibTeX butonları | ≥8/29 | Yayın satırı anatomisi (§6.4) |
| Yayın başına **tek cümlelik özet (TL;DR)** | 7/29 | Akademik olmayan ziyaretçi için çeviri katmanı |
| **CV hem HTML hem PDF**, "son güncelleme" tarihli | HTML: 6/29, PDF: 8/29 | Özgeçmiş sayfası |
| Masaüstünde yapışkan sol sütun + bölüm takipli menü | Brittany Chiang, Shreya Shankar, Shu Ding | Ana sayfa düzeni (§5.2) |
| Deneyim satırı: `tarih │ Rol · Kurum │ açıklama │ teknoloji rozetleri` | Brittany Chiang | Ana sayfa + CV |
| Projeleri **problem → yaklaşım → sonuç** vaka çalışması olarak anlatmak | **0/29 AI sitesi** | **Pazardaki boşluk = fırsat** |
| **Gerçek ikinci dil** | **1/29** (Chip Huyen `/vn/`) | TR/EN bir ayırt edici, iyi yapılırsa |
| Ziyaretçiyi tipine göre yönlendirmek ("Akademisyenseniz → Yayınlar") | 2/29 (Raschka, Lambert) | Hero'da 3 yönlendirme |
| Koyu tema | 13/29 AI, 22/28 geliştirici | Sistem tercihine göre + elle değiştirme |
| İçerik sütunu genişliği | 600–800px (çoğunluk) | Okuma metni ölçüsü ~68ch |

**En uygun 5 referans (birleşik sıralama):**

1. **Brittany Chiang** (brittanychiang.com) — düzen. Yapışkan sol sütun; deneyim ve proje satırları; `/archive` tablosu. "Projelere ulaşılamıyor" sorununu doğrudan çözüyor.
2. **Shreya Shankar** (sh-reya.com) — "ML mühendisi + araştırmacı" kimliği. Profil kartı, haberler, yayın mikro-tipografisi, krem zemin + serif başlık.
3. **Lj Miranda** (ljvmiranda921.github.io) — bilgi mimarisi. About · CV · Research · Projects ayrı ve tek tıkla erişilebilir; HTML CV + PDF + son güncelleme.
4. **Jon Barron şablonu** (+ Ben Mildenhall varyantı) — akademisyenlerin beklediği yayın formatı: küçük görsel, başlık, kalın kendi adın, venue, linkler, tek satırlık özet.
5. **Hamish Williams** (hamishw.com) — vaka çalışması şablonu: Problem → Sistem → Süreç → Sonuç. Ayrıca animasyon zamanlama token'ları ve reduced-motion disiplini.

Tek tek ödünç alınacak desenler: Karpathy (logo zaman çizelgesi, 4,3 KB CSS — hafiflik modeli), Eugene Yan ("Şu an…" satırı), Hamel Husain (projelerde "Rol" sütunu, "birlikte çalışalım" yolu), Olaolu Olawuyi (HTML CV + İndir butonu), Delba de Oliveira (ilk ekranda müsaitlik + "Konuşalım"), Tania Rascia (Makale/Demo/Kod linkleri).

### 3.3 Şablonlar ve teknik altyapı (rapor 03)

- **Hiçbir büyük şablon kısıtlarımızın hepsini karşılamıyor:** derleme adımı yok, GitHub Pages, TR/EN, karma akademik+endüstri profili, frontend uzmanı olmayan bir bakımcı.
- **al-folio** en iyi yayın davranışına sahip (venue rozeti, özet/BibTeX aç-kapa, seçilmiş yayınlar), ama Ruby + Actions gerektiriyor ve TR/EN desteği yok.
- **Jon Barron** derleme gerektirmeyen tek üst düzey akademik şablon.
- **Next.js tabanlı popüler şablonlar** (dillionverma, Vercel starter) değiştirilmeden GitHub Pages'e kurulamıyor. **Magic Portfolio**'nun lisansı (CC BY-NC) ticari kullanımı yasaklıyor; danışmanlık yapan biri için risk.
- **Hugo** (PaperMod / Blowfish) yalnızca tek bir binary gerektiriyor ve Türkçe çeviri dosyaları hazır geliyor. Derleme adımı kabul edilirse en kısa yol bu.

### 3.4 Görsel dil (rapor 04)

- Tasarım galerileri (Awwwards vb.) ağır animasyonlu ajans sitelerini ödüllendiriyor. **Mühendis/araştırmacı için doğru model galerilerin dışında.**
- AI laboratuvarlarının 2026 dili: **"arayüzde sans, fikirlerde serif, veride mono."** Anthropic serif fontu 165 kez kullanıyor; Linear bile serif başlık fontu taşıyor. Palet ya sıcak kâğıt (Anthropic `#faf9f5`, Mistral `#f5f4ef`) ya nötr monokrom (OpenAI, Vercel, Linear). **Parlak mor-mavi "AI gradyanı" laboratuvarlarda artık yok.**
- **Bento ızgaraları eskidi** (bento.me Şubat 2026'da kapandı). Read.cv kapandı.
- **Yükselen eğilim:** ajanlarca okunabilir portföy (`llms.txt`, sayfaların Markdown ikizleri). Bir AI mühendisi için ucuz ve markaya uygun bir ayırt edici.
- **Türkçe:** 83 font ailesi ğ ş ı İ ç ö ü testini geçti. Kendi sunucumuzda barındırırken `latin-ext` alt kümesi **zorunlu**; ğ, ş ve İ yalnızca orada.

---

## 4. İtiraz kontrolü (Devil's Advocate) — sonuçlar ve alınan önlemler

| # | İtiraz | Değerlendirme | Önlem |
|---|---|---|---|
| DA-1 | **Hayatta kalan yanlılığı.** İncelenen sitelerin çoğu ünlü kişilere ait. Karpathy'nin minimal sitesi çalışıyor çünkü zaten tanınıyor. Kariyerinin başındaki biri aynı minimalizmle kendini kanıtlayamaz. | **Geçerli, kritik.** | Minimalizmi değil, **yapıyı** ödünç alıyoruz. Kanıt katmanı ekliyoruz: vaka çalışmaları, ölçülebilir sonuçlar, fon/kurum bilgisi, durum rozetleri ("Üretimde", "TÜSEB destekli"). |
| DA-2 | **Klon riski.** Brittany Chiang düzeni çok kopyalanıyor ve v4 kodu atıf istiyor. | Geçerli. | Kod kopyalanmıyor; yalnızca düzen fikri (yapışkan profil sütunu) alınıyor. Kendi tipografi, renk ve bileşenlerimiz var. |
| DA-3 | **Editoryal serif görünüm "sadece akademik" okunabilir.** | Geçerli. | Proje kartlarına mono metadata katmanı (durum, rol, yıl, metrik), net CTA'lar ve iş birliği yolu ekleniyor. |
| DA-4 | **Font bütçesi çelişkisi.** Yön A üç web fontu öneriyor (Newsreader + Inter + JetBrains Mono); R36 en fazla 2 diyor. | Geçerli. | Mono için **sistem fontu yığını** (`ui-monospace, SFMono-Regular, Consolas…`). Web fontu yalnızca Newsreader + Inter. |
| DA-5 | **İşe alımcı kanıtı satıcı kaynaklı** (Ladders) ve eski (2012/2018). | Geçerli. | Kesin süre bütçesi olarak değil, yalnızca taranabilirlik ilkesi için kullanılıyor; NN/g bulgularıyla destekleniyor. |
| DA-6 | **Derleme betiği bakım yükü getirir.** | Kısmen geçerli. | Yalnızca Python standart kütüphanesi; üretilen HTML repoya commit'lenir, GitHub Pages değişmez. Alternatifler §8'de. |
| DA-7 | **İçerik boşlukları tasarımla kapanmaz.** Yayınların yazar/dergi/yıl/DOI bilgisi, proje metrikleri ve görseller eksik. | **Geçerli, engelleyici.** | §9'daki içerik listesi kullanıcıdan istenir. **Uydurma bilgi girilmez**; eksik alan yayınlanmaz (R17). |
| DA-8 | **Koyu tema varsayılan olmalı mı?** Geliştirici sitelerinin çoğunda var. | Kanıt açık temayı destekliyor (NN/g: normal görüşte açık tema daha okunaklı). | Sistem tercihine uy, tercih yoksa açık tema; elle değiştirme ve tercih hatırlanır (R38). |
| DA-9 | **Mevcut URL'ler değişirse SEO kaybı olur.** | Geçerli. GitHub Pages 301 yönlendirme yapamaz. | Mevcut dosya adları korunur (`portfolio.html`, `project-*.html` …). Kaldırılan sayfalar canonical + meta-refresh yönlendirme kabuğu olarak kalır. |

Kritik seviyede itiraz kalmadı. DA-1 ve DA-7 tasarımın ve içerik planının parçası yapıldı.

---

## 5. Bilgi mimarisi

### 5.1 Site haritası ve navigasyon

| TR | EN | Dosya (korunan URL) | Not |
|---|---|---|---|
| Ana Sayfa | Home | `index.html`, `en/index.html` | Logo/isim bağlantısı; nav'da ayrı öğe yok |
| **Projeler** | **Projects** | `portfolio.html` | Vaka çalışmaları + arşiv tablosu + faaliyetler |
| **Yayınlar** | **Publications** | `publications.html` *(yeni)* | `project-AutoG.html` buraya yönlenir |
| **Özgeçmiş** | **CV** | `resume.html` | HTML CV + PDF |
| **Hakkımda** | **About** | `about.html` | Uzun bio, yetkinlikler, hizmetler, kişisel bilgiler (kullanıcı kararı: olduğu gibi kalacak) |
| İletişim (buton) | Contact (button) | `about.html#iletisim` veya `mailto:` | Header'da tek birincil CTA |
| — | — | `services.html` | İçerik Hakkımda'ya taşınır; dosya yönlendirme kabuğu olur |
| — | — | `culup.html` | Projeler > Faaliyetler ve Hakkımda'dan bağlantılı alt sayfa |
| — | — | `project-*.html` | Vaka çalışması şablonuyla yeniden yazılır |

- **Header (tüm sayfalarda aynı sıra, R8):** `Muhammet Özdemir` · Projeler · Yayınlar · Özgeçmiş · Hakkımda · [İletişim] · `TR | EN` · tema düğmesi.
- **Mobilde:** isim + dil + menü düğmesi. Menü tam ekran açılır, sıra aynı. Kural R7'de: 4'ten fazla öğe varsa birleşik desen kullanılır.
- **Aktif sayfa:** `aria-current="page"` + alt çizgi; yalnızca renkle gösterilmez (R9).
- **Dil düğmesi:** **eşdeğer sayfaya** gider, bayrak kullanılmaz, otomatik yönlendirme yapılmaz (R24).
- **Footer:** nav tekrarı, sosyal linkler, "Son güncelleme: 2026-10", `llms.txt`.

### 5.2 Ana sayfa (tıklama derinliği: her proje/yayın ≤2, dizinler 1 tık — R4)

Masaüstü (≥1024px): **sol yapışkan profil sütunu** (Brittany/Shreya) + sağda akan içerik. Mobil: tek sütun.

**Sol sütun (yapışkan):**
- İsim.
- Rol satırı: *"Yapay Zekâ Araştırmacısı & Mühendisi"*.
- Tek cümlelik kanıt: *"AutoML üzerine araştırma yapıyor, üretimde çalışan bilgisayarlı görü ve kimlik doğrulama sistemleri geliştiriyorum."*
- **"Şu an:"** satırı: ERÜ AI ve Büyük Veri Merkezi'nde araştırmacı · serbest AI mühendisi.
- Bölüm takipli menü: Projeler / Yayınlar / Deneyim / İletişim.
- Link satırı: E-posta · CV (PDF) · GitHub · LinkedIn · (Scholar/ORCID varsa).
- Küçük profil fotoğrafı (R46).

**Sağ akış:**
1. **Kim için yönlendirme (3 satır)** — Raschka/Lambert deseni, kanıta dayalı (R2):
   - İşe alım → *Özgeçmiş*
   - Akademik → *Yayınlar*
   - İş birliği / danışmanlık → *İletişim*
2. **Seçili Projeler** — 4 vaka çalışması kartı (§6.3): KYC Kimlik Doğrulama, Erken Dönem Meme Kanseri AI, Kampüs Giriş/Çıkış AI, Nahıl AutoML. Altında "Tüm projeler →" (R3, R6).
3. **Yayınlar** — en fazla 3 yayın satırı (§6.4) + "Tüm yayınlar →".
4. **Deneyim** — 4 rol satırı (§6.5) + "Özgeçmişin tamamı →".
5. **İletişim bloğu** — müsaitlik cümlesi (Delba) + birincil CTA "E-posta gönder" (R12, R13).

### 5.3 Proje sayfası şablonu (vaka çalışması — R16)

Sıra:
1. Kırıntı yolu: `Projeler / <Başlık>`.
2. **Başlık** (serif) + durum rozetleri.
3. **Özet kutusu** (≤60 kelime): Problem · Rolüm · Ana sonuç · Yıl · Durum · Kurum/fon.
4. **Fig. 1** — kapak görseli veya diyagram, altında açıklama yazısı (Linear "Fig." deseni).
5. Problem / bağlam.
6. Yaklaşım (reddedilen alternatifler dahil).
7. Mimari / bileşenler.
8. Sonuçlar — metrikler; temel karşılaştırma, veri seti/ölçek ve birim ile.
9. Benim rolüm & ekip.
10. Teknolojiler.
11. Sınırlamalar / öğrendiklerim *(isteğe bağlı)*.
12. Bağlantılar: Kod / Makale / Demo / DOI.
13. Önceki / sonraki proje + CTA *"Benzer bir proje mi düşünüyorsunuz?"*

**Gizlilik sözleşmeli (NDA) / yayın sürecindeki işler (R18, R19):** alan, problem sınıfı, rol ve yöntem genel düzeyde verilir. Ölçek aralıkla verilir. Rozet: *"Gizlilik kapsamında — ayrıntılar talep üzerine"*. Nahıl AutoML için: *"Sonuçlar yayın süreci nedeniyle paylaşılmıyor."*

### 5.4 Projeler dizini (`portfolio.html`)

- **Filtre çipleri:** Tümü · Üretimde · Araştırma · Robotik · Topluluk. JS olmadan da çalışır; JS yalnızca filtreyi ekler.
- **Kart ızgarası:** 1 sütun mobil, 2 sütun ≥720px.
- **Arşiv tablosu** (Brittany `/archive`, R5 "birden fazla yol"): `Yıl │ Proje │ Kurum │ Teknolojiler │ Bağlantı`.
- **Faaliyetler bölümü:** ERÜ Yapay Zekâ Kulübü → `culup.html`.

### 5.5 Yayınlar sayfası (`publications.html`)

- **Gruplar:** Dergi makaleleri · Değerlendirmede · Hazırlık aşamasında. Her grupta ters kronolojik sıra.
- **Satır anatomisi:** §6.4.
- **Ayrı yayın sayfası** yalnızca yayımlanmış makaleler için açılır; görünür özet ve `citation_*` meta etiketleri içerir (Google Scholar indekslemesi, R23).
- **Değerlendirmedeki makaleler** dergi/konferans adı olmadan *"Değerlendirmede"* rozetiyle gösterilir. Dergi adı yalnızca o yerin politikası izin veriyorsa yazılır (R19).
- "Tümünü indir (.bib)" — BibTeX verisi sağlanırsa.

### 5.6 Özgeçmiş sayfası (`resume.html`) — R14, R15

- **Üst satır:** "PDF olarak indir (1 sayfa, 112 KB)" — gerçek değerlerle — + "Son güncelleme".
- **Deneyim:** rol, kurum, ay/yıl aralığı, 2–4 madde; tek sütun, tarihler sabit konumda.
- **Eğitim · Sertifikalar · Ödüller** (kulüp ödülleri, TÜSEB finalist) **· Yetkinlikler** (gruplu).

### 5.7 Hakkımda sayfası (`about.html`)

- Uzun bio + fotoğraf.
- Kişisel bilgiler (kullanıcı kararıyla korunur: yaş, adres, e-posta, serbest çalışma durumu, dil).
- **Neler yapıyorum** (eski Hizmetler sayfası, 5 alan): AutoML · Bilgisayarlı Görü · Veri Bilimi · NLP · Gömülü/Edge AI.
- Yetkinlik grupları · Kulüp özeti → `culup.html` · `#iletisim` bölümü.

---

## 6. Bileşen spesifikasyonları

### 6.1 Header
- Yükseklik 64px; `position: sticky`.
- Arka plan `--bg` %85 opak + `backdrop-filter: blur(8px)`; alt kenarda 1px `--rule` çizgisi.
- Odaklanan öğe header'ın altında kalmasın diye `scroll-padding-top: 80px` (R28).
- Nav linkleri 15px Inter 500; hedef alanı ≥44×44px mobilde, ≥24×24px masaüstünde (R29).
- İletişim butonu: `--accent` zemin, `--on-accent` yazı, 8px radius.

### 6.2 Atlama bağlantısı ve odak
- İlk odaklanabilir öğe: "İçeriğe geç / Skip to content".
- `:focus-visible` → 2px `--accent` çerçeve + 2px boşluk; kontrast her iki temada ≥3:1 (R28).

### 6.3 Proje kartı (rapor 03 §C2, uyarlanmış)

- **Tüm kart tek bağlantı** (vaka sayfasına); ikincil linkler (Kod/Demo) ayrıca odaklanabilir (R20).
- **Görsel:** 16:9, `object-fit: cover`, radius 6px.
- **Satır 1:** mono metadata 12.5px büyük harf — `ÜRETİMDE · 2025 · FREELANCE`.
- **Satır 2:** başlık — Newsreader 22px/1.25, ağırlık 500.
- **Satır 3:** özet 15px, `--text-muted`, en fazla 3 satır.
- **Satır 4 — sonuç satırı:** `→` ile başlayan tek bir somut sonuç, ör. *"→ Mamografide kitle ve kalsifikasyon tespitinde F1 makro > %90"*. Yalnızca doğrulanmış/izinli sayılar kullanılır.
- **Satır 5 (en altta sabit):** 2–4 teknoloji etiketi; çerçeveli, 12px, yükseklik 24px.
- **Hover:** çerçeve `--rule` → `--text-muted`, başlıkta alt çizgi; geçiş 150ms. Kayma/ölçek efekti yok.

### 6.4 Yayın satırı (rapor 03 §C1)

- **Izgara:** `120px 1fr` (≥720px); mobilde alt alta.
- **Sol:** venue rozeti, ör. `Dergi · 2025` (dolgulu); değerlendirmedekiler için çerçeveli nötr rozet *"Değerlendirmede"*. Küçük görsel isteğe bağlı.
- **Başlık:** Newsreader 19px/1.3, ağırlık 500.
- **Yazarlar:** 14.5px; **kendi adın kalın**. 5 yazardan sonra "+K yazar" düğmesi.
- **Venue satırı:** italik.
- **TL;DR:** tek cümle, `--text-muted`.
- **Buton satırı (sabit sıra):** `PDF · DOI · Kod · Özet ▾ · BibTeX ▾`. URL'si olmayan buton gösterilmez.
- **Özet ve BibTeX:** yerel `<details>` (JS gerekmez). BibTeX'te tek JS geliştirmesi olarak "Kopyala" düğmesi + `aria-live` "Kopyalandı" geri bildirimi.

### 6.5 Deneyim satırı (Brittany Chiang)
- **Izgara:** `140px 1fr`.
- **Sol:** mono tarih `09/2025 — GÜNCEL`.
- **Sağ:** `Rol · Kurum` (Inter 600), 1–3 madde, teknoloji etiketleri.
- Dekoratif görsel yok (R15).

### 6.6 Rozetler ve etiketler
- **Durum rozetleri:** `Üretimde` (accent-2 tonu) · `Araştırma` · `Değerlendirmede` (çerçeveli) · `Gizlilik kapsamında` · `TÜSEB / TÜBİTAK destekli`.
- Mono 11.5px büyük harf, harf aralığı +0.06em; radius 999px; yükseklik 22–24px.

### 6.7 Tema düğmesi
- Üç durum: Sistem → Açık → Koyu. Tercih `localStorage`'da tutulur (try/catch içinde).
- `<head>` içinde satır içi küçük bir betik temayı ilk çizimden önce uygular; yanlış tema yanıp sönmez.

### 6.8 Galeri
- Swiper kaldırılır.
- **Proje sayfalarında:** numaralı `<figure>` + `<figcaption>` ("Fig. 1, 2…").
- **Kulüp sayfasında:** CSS `scroll-snap` yatay şerit; otomatik oynatma yok (R32).

---

## 7. Tasarım token'ları — Yön A "Araştırma Editoryal" + Yön B metadata katmanı (önerilen)

Seçim gerekçesi (rapor 04 §6):
- Mevcut bej zemini atmak yerine rafine bir hale getirir.
- AI laboratuvarlarının "serif = fikir, sans = arayüz, mono = veri" diliyle aynı ailede.
- Üç kitleye de hitap eder: akademisyene kâğıt hissi, işe alımcıya taranabilir zaman çizelgesi, müşteriye metrik satırları.
- Alternatifler: Yön B "Laboratuvar Defteri" (Geist, koyu öncelikli, teal) ve Yön C "İsviçre Dizini" (Hanken Grotesk, kırmızı-turuncu). Tüm değerleriyle rapor 04 §6'da.

### 7.1 Renk

| Token | Açık | Koyu | Kullanım |
|---|---|---|---|
| `--bg` | `#F6F4EF` | `#141412` | Sayfa zemini (sıcak kâğıt; eski `#e9e8e6`'nın halefi) |
| `--surface` | `#FFFFFF` | `#1C1B19` | Kart, header |
| `--surface-2` | `#EEEBE3` | `#24231F` | Özet kutusu, kod, hover |
| `--text` | `#1B1A17` | `#ECE9E2` | Ana metin (≥15:1) |
| `--text-muted` | `#5C5A54` | `#A4A096` | İkincil metin (≥5,6:1) |
| `--rule` | `#DFDBD0` | `#2F2D29` | Ayırıcı çizgiler, kart kenarı |
| `--accent` | `#1F4FA3` | `#8EB0F0` | Linkler, CTA, odak (İznik kobaltı) |
| `--on-accent` | `#FFFFFF` | `#0F1A2E` | Accent üzerindeki yazı |
| `--accent-2` | `#A64A28` | `#E08A66` | Az kullanılır: "Üretimde", "Yeni" |
| `--selection` | `rgba(31,79,163,.18)` | `rgba(142,176,240,.25)` | Metin seçimi |

Kontrast değerleri rapor 04'te WCAG 2.x formülüyle makine kontrolünden geçti: metin ≥15:1, ikincil ≥5,6:1, accent açıkta ≥5:1, koyuda ≥6,7:1. `--on-accent` koyu değeri uygulama sırasında yeniden doğrulanacak.

### 7.2 Tipografi

| Rol | Font | Not |
|---|---|---|
| Başlık / yayın başlığı | **Newsreader** (değişken, opsz 6–72) | Kendi sunucumuzda woff2, latin + latin-ext |
| Arayüz / gövde | **Inter** (değişken) | Kendi sunucumuzda woff2, latin + latin-ext; `cv01`/`ss03` kullanılmaz (Türkçe ı/İ riski) |
| Metadata / sayılar | Sistem mono: `ui-monospace, "SF Mono", "Cascadia Code", Consolas, monospace` | DA-4 gereği web fontu değil |

| Ölçek | Değer |
|---|---|
| Gövde | `clamp(1rem, .95rem + .25vw, 1.125rem)` (16→18px), satır yüksekliği 1.6 |
| Okuma ölçüsü | `max-width: 68ch` (R37: 55–75ch) |
| h1 | Newsreader `clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)`, 500, `letter-spacing: -0.015em`, satır yüksekliği 1.1 |
| h2 | Newsreader `clamp(1.6rem, 1.3rem + 1.2vw, 2.1rem)`, 500 |
| h3 | Inter 1.125rem 600 |
| Meta | mono .78rem, büyük harf, `letter-spacing: .06em` |
| Küçük | .875rem |

Türkçe testi: `ğĞüÜşŞıİöÖçÇ` dizesi tamamen web fontuyla çizilmeli (R36). Büyük harf dönüşümünde `lang="tr"` doğru İ/ı üretir; `text-transform: uppercase` yalnızca `lang` doğru ayarlıyken kullanılır.

### 7.3 Boşluk, düzen, şekil, hareket

| Token | Değer |
|---|---|
| Boşluk ölçeği (4px tabanlı) | `--s-1: 4px` · `--s-2: 8px` · `--s-3: 12px` · `--s-4: 16px` · `--s-5: 24px` · `--s-6: 32px` · `--s-7: 48px` · `--s-8: 64px` · `--s-9: 96px` |
| Sayfa genişliği | `--w-page: 1120px`; kenar boşluğu `clamp(16px, 4vw, 32px)` |
| Okuma genişliği | `--w-prose: 68ch` |
| Ana sayfa ızgarası (≥1024px) | `grid-template-columns: minmax(280px, 0.8fr) 1.2fr`; sol sütun `position: sticky; top: 96px` |
| Kırılma noktaları | 640 · 720 · 1024px |
| Radius | 4px (küçük), 6px (kart/görsel), 8px (buton), 999px (etiket) |
| Gölge | Yok. Hover'da yalnızca kenar rengi değişir |
| Hareket | `--t-fast: 150ms` · `--t-base: 200ms`; easing `cubic-bezier(.2,0,0,1)`. Kaydırma tetikli animasyon yok, preloader yok. Tümü `prefers-reduced-motion: no-preference` altında (R32, R34) |

---

## 8. Teknik altyapı önerisi

| Seçenek | Artı | Eksi | Öneri |
|---|---|---|---|
| **1. Statik HTML + Python üretici** — `tools/build.py`, yalnızca standart kütüphane. İçerik `content/tr.json` ve `content/en.json` dosyalarında, şablonlar `templates/` altında. Üretilen HTML repoya commit'lenir. | Header/nav/footer **tek yerde**. Proje ve yayın verisi bir kez yazılır. hreflang, sitemap ve JSON-LD otomatik üretilir. Link kontrolü dahil. GitHub Pages hiç değişmez. Python bir AI mühendisinin ana dili. | İçerik değişince `python tools/build.py` çalıştırılmalı (GitHub Action ile otomatik yapılabilir). | **Önerilen** |
| 2. Elle yazılmış statik HTML | Sıfır araç. | 26 dosyada tekrar devam eder; bugünkü tutarsızlıkların kaynağı bu. | Önerilmez |
| 3. Hugo (PaperMod/Blowfish tabanlı) | Hazır i18n, olgun ekosistem. | Go şablon dili öğrenilmeli; tema özelleştirmesi zor; Actions zorunlu. | Uzun vadede seçenek |
| 4. Astro | Modern bileşen yapısı, içerik koleksiyonları. | Node/npm bağımlılığı; bakım için frontend bilgisi gerekir. | Önerilmez (bakım profili) |

Seçenek 1'de de:
- **CSS:** Bootstrap, AOS, Swiper, glightbox ve isotope kaldırılır. Yerine tek `assets/css/site.css` (hedef <20 KB).
- **JS:** tek `assets/js/site.js` (tema, menü, filtre, BibTeX kopyalama; hedef <5 KB).
- **İkonlar:** Bootstrap Icons fontu yerine satır içi SVG.

---

## 9. İçerik çalışması (kullanıcıdan gereken bilgiler — DA-7)

Tasarım içerik boşluklarını kapatmaz. **Uydurma bilgi girilmeyecek**; aşağıdakiler gelene kadar ilgili alanlar gizli kalacak:

1. **Yayınlar** (4 kayıt): tam başlık, yazarlar (sırasıyla), dergi/konferans, yıl, durum (yayımlandı / değerlendirmede / hazırlıkta), DOI/PDF/arXiv, varsa BibTeX ve özet.
2. **Profil linkleri:** Google Scholar, ORCID, ResearchGate (varsa).
3. **Proje metrikleri** — paylaşım izni olanlar: KYC (doğruluk, işlem hacmi), kampüs (kamera/kapı sayısı, FPS), lane detection.
4. **Çelişkilerin düzeltilmesi:**
   - Kampüs projesi "staj 1 ay" diyor, CV'de staj 09/2024–01/2025.
   - Portföy kartı "6 kapı" diyor, proje sayfası "10+ kamera".
5. **Yer tutucu sayfalar:**
   - Restoran öneri sistemi: kısa bir özet mi yazılsın, yoksa arşiv tablosunda yalnızca tek satır mı kalsın?
   - AutoG sayfası Yayınlar'a yönlendirilecek.
6. **Görseller:** profesyonel portre (mevcut `mrozdemir1.webp` kullanılabilir); proje başına bir diyagram veya ekran görüntüsü (NDA'ya uygun).
7. **Eğitim durumu:** 2021–2026 — mezun oldu mu, ne zaman?

---

## 10. Kabul kontrol listesi (uygulama sonrası test)

- [ ] **R1–R3:** 1366×768 ve 390×844'te ilk ekranda isim, rol, kanıt cümlesi ve projelere giriş noktası var.
- [ ] **R4:** Link grafiği taraması: her proje/yayın ≤2 tık, dizinler 1 tık.
- [ ] **R8:** Nav HTML'i tüm sayfalarda aynı (otomatik fark kontrolü); TR/EN etiket sözlüğü tek kaynaktan.
- [ ] **R17, R45:** Yer tutucu metin yok; 0 kırık dahili link (build betiği kontrol eder).
- [ ] **R24–R26:** Dil düğmesi eşdeğer sayfaya gidiyor; `lang` doğru; hreflang karşılıklı ve mutlak URL'li.
- [ ] **R27–R31:** Kontrast iki temada AA; görünür odak; atlama linki; tek `<h1>`; 320px genişlikte yatay kaydırma yok.
- [ ] **R32, R34:** Preloader ve kaydırma animasyonu yok; reduced-motion'a uyuluyor.
- [ ] **R33:** Lighthouse mobil: LCP ≤2,5 sn, TBT ≤200 ms, CLS ≤0,1.
- [ ] **R36:** `ğĞüÜşŞıİöÖçÇ` tamamen web fontuyla çiziliyor.
- [ ] **R40–R42:** Benzersiz başlık ve açıklamalar; FAQ/SearchAction yok; ProfilePage + Person; `lastmod`'lu sitemap.
- [ ] **R43:** "Son güncelleme" tarihi görünüyor.
- [ ] `llms.txt` ve Markdown ikizleri mevcut (rapor 04, yön 8).

---

## 11. Sınırlamalar ve AI kullanım beyanı

**Sınırlamalar:**
- Siteler ekran görüntüsüyle değil, HTML/CSS kaynağıyla incelendi. Görsel izlenimler kaynak koddan ve sayfa içeriğinden çıkarıldı.
- JS ağırlıklı bazı galeriler okunamadı: land-book ve lapa.ninja 403 verdi, bestfolios boş döndü.
- GitHub API hız sınırı nedeniyle bazı yıldız sayıları yuvarlak (shields.io).
- Gerçek ziyaretçilerle kullanılabilirlik testi yapılmadı. Gereksinimler literatürden türetildi.
- İşe alımcı kanıtları eski (2012–2018) ve kısmen satıcı kaynaklı. 2024–2026'dan büyük örneklemli bir işe alım anketi doğrulanamadı.
- NDA'lı projelerin sunumu yalnızca uygulayıcı bloglarıyla destekleniyor (Tier 3).
- Lighthouse ölçümleri yapılmadı; performans iddiaları şablon yazarlarına ait.

**AI kullanım beyanı:** Bu araştırma Claude (Anthropic) ile, AI destekli araştırma ajanları kullanılarak yürütüldü. Ajanlar siteleri ve kaynakları web üzerinden çekti, değerleri kaynak koddan çıkardı ve bulguları raporladı. Sentez, itiraz kontrolü ve spesifikasyon da AI tarafından yazıldı. Sayısal iddialar kaynak raporlarda URL'leriyle belgelenmiştir; doğrulanamayanlar UNVERIFIED/UNKNOWN olarak işaretlenmiş ve tasarım kararlarında kullanılmamıştır.
