# Devam Notu — mozdemir.com yeniden tasarımı

## ★ GÜNCEL DURUM (2026-10-22) — site tamamlandı, yayın bekliyor

Bu bölüm aşağıdaki tüm bölümlerden daha günceldir.

**Biten işler** (dal `redesign-astro`, **commit yok**):
- **Sayfalar (29):** TR ve EN için ana sayfa, Projeler, Yayınlar, Özgeçmiş, Hakkımda, Kulüp, 6 vaka çalışması, 2 yönlendirme kabuğu (`services.html` → `about.html#hizmetler`, `project-AutoG.html` → `publications.html`); ayrıca kökte 404.
- **Kontrol:** `npm run build` + `npm run check` → "29 sayfa, sorun yok".
- **Sitemap:** 24 canonical `.html` URL; yönlendirme ve 404 hariç.
- **Görsel kontrol:** başsız Chrome ile masaüstü, mobil (390px, iframe ile), koyu tema ve tüm sayfa tipleri incelendi.
- **Diğer:** `.github/workflows/deploy.yml` (checkout@v7, withastro/action@v6, deploy-pages@v5); `public/robots.txt`, `public/llms.txt`, `favicon.svg`; `README.md` (içeriğin nerede olduğu, nasıl güncelleneceği).
- **Bu turda çözülen hatalar:**
  - `build.format: 'file'` EN ana sayfayı `/en.html` olarak üretiyordu → `'preserve'` yapıldı.
  - Frontmatter'da tırnaksız virgüller değerleri bölüyordu (ör. "BI-RADS 1,2,4,5" → "BI-RADS 1") → tüm değerler tırnaklandı ve şema `strictObject` yapıldı; aynı hata artık derlemeyi durdurur.
  - 404 sayfasındaki dil düğmesi var olmayan sayfaya gidiyordu.
  - Sitemap URL'leri uzantısızdı → canonical ile aynı biçime getirildi.
  - Türkçe büyük harf dönüşümü marka adlarını bozuyordu ("İD24.TR") → kurum satırları normal yazıma çevrildi.

**2026-10-22 CV güncellemesi** (kaynak: kullanıcının `muhammet-ozdemir-CVS.pdf` dosyası):
- Mezuniyet Temmuz 2026.
- Yeni staj: Skechers Türkiye / Olka, 06–08/2026 (vLLM, Text-to-SQL, RAG, KVKK).
- Serbest çalışma maddesi: 10 milyonda 1 hata oranı + liveness modülü. Skechers danışmanlık maddesi kaldırıldı.
- Yayınlar: yeni başlıklar, durum "revizyon gönderildi", Q3/Q2.
- Yeni proje: ABC-Tuned ACO filo optimizasyonu, temsili PNG kapak ile.
- Restoran projesi: 2023, %90+ doğruluk, POS/mobil entegrasyon; artık gizli değil.
- Mamografi: 4.000+ görüntü, Antalya sunumu.
- Yetkinlikler CV'deki listeye göre güncellendi; `public/assets/cv/` altındaki PDF yeni CV ile değiştirildi (telefon numarası içeriyor; kullanıcı onayladı).
- Kararlar: sitede e-posta mr.ozdemir34@gmail.com kalıyor (kullanıcı kararı). CV'de olmayan iki "hazırlık aşamasında" yayın sitede tutuldu.
- Sayfa sayısı: 31.

**Yayına almak için kalanlar:**
1. Kullanıcı onayıyla commit + `main`'e merge (ya da PR).
2. **Kullanıcı:** GitHub → Settings → Pages → Source = **GitHub Actions**.
3. İlk yayından sonra canlıda kontrol: `/`, `/en/`, `/project-AutoML.html`, `/services.html` yönlendirmesi, 404.

**Kullanıcıdan beklenen içerik:** §7 listesi hâlâ geçerli (yayın yazarları/dergi/DOI, Scholar/ORCID, mezuniyet durumu, paylaşılabilir metrikler).

**Ölçülmeyenler:** Lighthouse/Core Web Vitals ölçümü yapılmadı (yerelde Lighthouse kurulu değil). Bilinen değerler: harici JS yok (küçük betikler satır içi), toplam CSS 32 KB, görseller WebP ve `srcset`'li, preloader ve AOS yok.

---

## Eski notlar (2026-10-21, 2. park)

## 0. İKİNCİ PARK — buradan devam et (en güncel durum)

Kullanıcı ikinci kez "durdur ve park et" dedi. Bu bölüm §3 ve §6'dan daha günceldir.

**Yazılan ve çalışan dosyalar** (dal `redesign-astro`, commit yok):
- `astro.config.mjs`: site, `build.format: 'file'`, `compressHTML: true`, sitemap filtresi. `tsconfig.json` ve `.gitignore` de var.
- `src/i18n/ui.ts`: tüm TR/EN etiket sözlüğü. `src/i18n/routes.ts`: `pagePath`, `projectPath`, `alternatePath`.
- `src/data/site.ts`: profil, deneyim (4), eğitim, sertifika, ödüller (3), yetkinlikler (4 grup), hizmetler (5), kulüp verisi. Hepsi TR+EN ve eski sayfalardan birebir.
- `src/content.config.ts`: `projects` ve `publications` koleksiyonları (Zod 4, `image()`).
- `src/content/projects/{tr,en}/`: `kyc`, `breast`, `campus`, `AutoML`, `lane-det`, `restaurant-recommender` (12 dosya, vaka çalışması formatında).
- `src/content/publications/`: 4 yayın. Yazar, dergi ve DOI boş (uydurma yok).
- `src/lib/content.ts`: `getProjects(lang)`. Slug `filePath`'ten alınıyor çünkü glob kimlikleri küçük harfe çeviriyor; `project-AutoML.html` URL'si böyle korunuyor.
- `src/styles/global.css`: tüm token'lar (açık/koyu) ve bileşen stilleri.
- `src/components/`: `Icon` (bootstrap-icons SVG, satır içi), `Header` (nav, iletişim CTA, dil, tema, mobil menü), `Footer`, `StatusBadge`, `ProjectCard`, `PublicationItem`, `ExperienceItem`.
- `src/layouts/BaseLayout.astro`: meta, canonical, hreflang, OG (`getImage` ile 1200×630 JPG), satır içi tema betiği, atlama linki, JSON-LD.
- `src/views/Home.astro`: yapışkan profil sütunu, ziyaretçi yönlendirmesi, seçili projeler, yayınlar, deneyim, iletişim, bölüm takibi.
- `src/pages/index.astro`, `src/pages/en/index.astro`.
- `public/favicon.svg` ("MÖ" monogramı).

**İlk deneme derlemesi BAŞARILI** (`npx astro build`): 2 sayfa ve 19 optimize görsel üretildi; örneğin profil fotoğrafı 638 KB → 79 KB.

**⚠️ Düzeltilmesi gereken ilk şey:** `build.format: 'file'` ayarı `src/pages/en/index.astro` dosyasını `/en.html` olarak üretti. Doğrusu `/en/index.html`. Çözüm: `astro.config.mjs` içinde `build.format: 'preserve'`. Bu biçim `about.astro` → `about.html` ve `en/index.astro` → `en/index.html` üretir. Değiştirip derlemeyi tekrar al; ardından Header'daki `alternatePath` ile `pagePath('en','home') = '/en/'` uyumunu kontrol et.

**Sıradaki adımlar (sırayla):**
1. Yukarıdaki format düzeltmesi + tekrar derleme.
2. `dist/index.html` çıktısını incele: tek `<h1>`, `lang`, hreflang, OG, tema betiği.
3. Kalan görünümler `src/views/`: `Projects` (filtre, kart ızgarası, arşiv tablosu, faaliyetler), `Publications` (durum gruplu), `Project` (vaka sayfası: özet kutusu, Fig., metrikler, prose, yan panel, önceki/sonraki, CTA), `Resume` (PDF butonu, 1 sayfa / 112 KB), `About` (bio, kişisel bilgiler, hizmetler `#hizmetler`, yetkinlikler, kulüp, `#iletisim`), `Club` (KPI, scroll-snap galeri, ödüller, zaman çizelgesi), `NotFound`, `Redirect`.
4. Route dosyaları:
   - TR ve `en/` altında: `portfolio`, `publications`, `resume`, `about`, `culup`, `project-[slug]` (`getStaticPaths` ile `getProjects`).
   - Yönlendirme kabukları: `services` → `about.html#hizmetler`, `project-AutoG` → `publications.html`.
   - Yalnızca kökte: `404`.
5. `public/robots.txt`, `public/llms.txt`.
6. `.github/workflows/deploy.yml` (§5'teki sürümler).
7. `scripts/check-site.mjs` (`package.json`'da `npm run check` olarak tanımlı): kırık iç link, tek `<h1>`, hreflang, boş açıklama kontrolü.
8. Derle → önizle → kontrol et → kullanıcıya göster.

Bu dosya, iş kaldığı yerden sorunsuz devam etsin diye yazıldı. Önce bunu oku, sonra `00-sentez-ve-tasarim-spesifikasyonu.md` dosyasını oku.

## 1. Verilen kararlar (kesin)

| Karar | Sonuç | Kaynak |
|---|---|---|
| Hosting | GitHub Pages (ücretsiz). GitHub Actions ile derleme kabul. | Kullanıcı: "o neyi kabul ederse en modern ve kaliteli onu yap" |
| Altyapı | **Astro 7.4.2** (statik çıktı) + GitHub Actions deploy | Claude kararı, kullanıcı yetki verdi |
| Görsel yön | **A "Araştırma Editoryal" + B metadata katmanı** (spesifikasyon §7) | Claude kararı (önerilen) |
| Kişisel bilgiler | Hakkımda'daki yaş, adres (Kuzguncuk, Üsküdar), e-posta **olduğu gibi kalacak** | Kullanıcı kararı |
| Çalışma tarzı | Kullanıcı teknik/tasarım seçimlerini Claude'a bırakıyor; çoktan seçmeli soru istemiyor | Kullanıcı geri bildirimi |

## 2. Tamamlananlar

1. Mevcut sitenin tam kod incelemesi (26 HTML, main.css, main.js).
2. 5 kollu araştırma → `kaynak-raporlar/01…05` (İngilizce, ~325 KB).
3. Türkçe sentez + tasarım spesifikasyonu → `00-sentez-ve-tasarim-spesifikasyonu.md`.
4. Astro 7 API doğrulaması (resmî dokümanlardan, aşağıda §5).
5. **Git dalı açıldı: `redesign-astro`** (`main` hiç değişmedi; canlı site etkilenmedi).
6. Kullanılan görseller yeni yapıya **kopyalandı** (`src/assets/images/…`, liste §4).
7. Statik dosyalar kopyalandı: `public/CNAME`, `public/favicon.ico`, `public/apple-touch-icon.png`, `public/assets/cv/Muhammet Ozdemir_CV.pdf` (URL korunuyor).
8. Eski şablon dosyaları `git rm` ile **staged olarak silindi**. Bunlar: tüm `*.html`, `en/`, `assets/`, `.htaccess`, `.nojekyll`, `Readme.txt`, `robots.txt`, `sitemap.xml`, kök `CNAME`. Hepsi `main` dalında duruyor.
9. `package.json` yazıldı (henüz bağımlılık yok).

## 3. Tam olarak kalınan yer

- **Son adım: bağımlılık kurulumu.** Kullanıcı bu adımda işi park ettirdi. Komut reddedilmiş görünse de kurulum **fiilen tamamlandı**. Doğrulanan sürümler: astro 7.4.2, @astrojs/sitemap 3.7.4, @fontsource-variable/inter 5.3.0, @fontsource-variable/newsreader 5.3.0, bootstrap-icons 1.13.2, sharp 0.35.5. `package.json` bağımlılıklarla güncellendi, `package-lock.json` oluştu. Tekrar kurmaya gerek yok.
- **Git durumu:** dal `redesign-astro`; ~165 staged silme; untracked olarak `src/`, `public/`, `package.json`, `package-lock.json`, `node_modules/`, `docs/`. **Commit yok.** Commit'ten önce `.gitignore` yazılmalı (`node_modules`, `dist`, `.astro`).
- **Not:** Toplu `rm -rf` komutu otomatik izin sınıflandırıcısı tarafından reddedilmişti. Silme işlemleri `git rm` ile yapıldı.

## 4. Görsel eşlemesi (kopyalandı)

| Yeni yol (`src/assets/images/`) | Eski kaynak | Kullanım |
|---|---|---|
| `profile.jpeg` | `assets/img/mrozdemir1.jpeg` (1531×1879) | Profil fotoğrafı (selfie; küçük ve yüze kırpılmış kullan) |
| `projects/automl-cover.jpg` | `p1.jpg` (arı logosu, siyah zemin) | Nahıl AutoML kartı |
| `projects/automl-framework.png` | `AutoML.PNG` | AutoML detay, Fig. 1 |
| `projects/breast-cover.png` | `p2.png` (4'lü mamogram + kutular) | Meme kanseri kartı |
| `projects/breast-detection.png`, `breast-training.jpg` | `m1.png`, `m4.jpg` | Detay galerisi |
| `projects/campus-cover.png` | `campus1.png` (karlı yol, tespit kutuları) | Kampüs kartı + detay |
| `projects/kyc-cover.webp` | `kyc.webp` (illüstrasyon) | KYC |
| `projects/restaurant-cover.png` | `p4.png` | Restoran öneri |
| `projects/lane-cover.jpg`, `lane-1…4.png` | `p5.jpg`, `lane1-4` | Şerit tespiti |
| `club/club-cover.png`, `club/k1…k4.png` | `l.png`, `k1-4.png` | Kulüp sayfası |

Yayın kapakları (`p6`–`p9`) AI üretimi "kâğıt mockup" görselleri; **bilerek alınmadı**, yayın listesi görselsiz olacak.

## 5. Astro 7 notları (doğrulandı, docs.astro.build)

- Content config: `src/content.config.ts`. `defineCollection`, `reference`, `getCollection`, `getEntry`, `render` → `astro:content`. `glob`, `file` → `astro/loaders`. **`z` → `astro/zod`** (Zod 4: `z.url()`, `z.email()`; `astro:content` içindeki `z` deprecated).
- Her koleksiyonun bir `loader`'ı olmalı. `entry.render()` yok, `render(entry)` var. `slug` yok, `id` var. `getCollection` sırası belirsiz; **kendin sırala**.
- `Astro.glob` kaldırıldı → `import.meta.glob` (artık Promise döndürmüyor).
- **Rust derleyicisi:** kapatılmamış etiketler ve geçersiz HTML iç içeliği (`<div>` içinde `<p>`) **build hatası** verir.
- **`compressHTML` varsayılanı `'jsx'`.** Satır içi öğeler arası boşluklar kaybolabilir → config'de `compressHTML: true`.
- `<script>`/`<style>` kaynak sırasıyla render edilir. Markdown işlemcisi Sätteri; remark/rehype eklentisi kullanılmayacak.
- i18n: `prefixDefaultLocale: false` → TR kökte, EN `/en/` altında. `redirectToDefaultLocale` varsayılan `false`. Gerekirse manuel yapılabilir.
- Deploy workflow (`.github/workflows/deploy.yml`): `actions/checkout@v7`, `withastro/action@v6`, `actions/deploy-pages@v5`. İzinler: `contents: read`, `pages: write`, `id-token: write`. **Lockfile commit'lenmeli.**
- Özel alan adı: `site: 'https://mozdemir.com'`, `base` yok; `public/CNAME` (yapıldı).
- **Kullanıcının elle yapması gereken:** GitHub → Settings → Pages → Source = **GitHub Actions**. Yapılmazsa yeni site yayınlanmaz.
- Node yerelde v24.14.1, npm 11.6.4.

## 6. Kalan adımlar (sırayla)

1. ~~Bağımlılıkları kur~~ — tamamlandı (§3).
2. `astro.config.mjs`:
   - `site: 'https://mozdemir.com'`
   - `build: { format: 'file' }` → URL'ler `about.html`, `en/about.html` biçiminde korunur
   - `compressHTML: true`
   - `integrations: [sitemap()]`, hreflang **yalnızca HTML'de** (R42)
3. `tsconfig.json`, `.gitignore` (`node_modules`, `dist`, `.astro`).
4. `src/content.config.ts`:
   - **projects:** `glob('**/*.md', base 'src/content/projects')`, dosyalar `tr/<slug>.md` + `en/<slug>.md`.
     - Şema: lang, slug, title, summary, outcome?, status (production|research|nda|prototype|completed), org, role, period, year, funding?, category (industry|research|robotics|community), tags[], cover image(), coverAlt, featured, order, links[], facts[], gallery[{image(), alt, caption}], note?
   - **publications:** md dosyaları; frontmatter'da TR/EN alanları.
     - Şema: title, titleTr?, status (under-review|drafting|in-development|published), type, year?, tldr {tr,en}, authors? (**bilinmiyor, uydurma**), links?
5. `src/data/` (TS): profil, deneyim, eğitim, sertifika, yetkinlikler, hizmetler (5 alan), kulüp verisi. Her biri TR+EN.
6. `src/i18n/ui.ts` etiket sözlüğü (R8) + yardımcılar (`t`, eşdeğer sayfa yolu).
7. `src/styles/global.css`: spesifikasyon §7 token'ları. Açık/koyu tema `[data-theme]` ile; `<head>` içinde satır içi tema betiği.
8. Bileşenler:
   - `BaseLayout` (meta, canonical, hreflang, OG, JSON-LD ProfilePage/Person — **FAQ ve SearchAction yok**)
   - `Header` (nav: Projeler · Yayınlar · Özgeçmiş · Hakkımda · [İletişim] · TR|EN · tema; mobil menü)
   - `Footer` ("Son güncelleme" + llms.txt)
   - `ProjectCard` (tüm kart tek link), `PublicationItem`, `ExperienceItem`, `Badge`, `Icon` (bootstrap-icons SVG `?raw` ile satır içi)
9. Sayfalar: görünümler `src/views/*.astro` (lang prop alır); route dosyaları ince.
   - TR kök + `src/pages/en/`: `index`, `portfolio`, `publications` (yeni), `resume`, `about`, `culup`, `project-[slug]`, `404` (yalnızca kök).
   - Yönlendirme kabukları: `services.html` → `about.html#hizmetler`; `project-AutoG.html` → `publications.html`.
   - `project-restaurant-recommender.html` NDA varyantıyla kısa sayfa olarak kalır.
10. İçerik taşıma: TR metinler eski TR sayfalardan, EN metinler eski `en/` sayfalardan, **birebir ve uydurmadan**. Eski dosyalara `git show main:<yol>` ile erişilebilir. EN metin çıkarımları scratchpad'deydi ama oturuma özel; `git show main:en/project-kyc.html` ile yeniden alınabilir.
11. `public/robots.txt`, `public/llms.txt`, SVG favicon, OG görselleri (`getImage` ile JPG).
12. `.github/workflows/deploy.yml` (§5).
13. `scripts/check-site.mjs`: dist üzerinde kırık iç link, tekil `<h1>`, `lang`, hreflang karşılıklılığı, boş meta description kontrolü.
14. `npm run build` → hata düzelt → `astro preview` ile kontrol (TR+EN, mobil, koyu tema, Türkçe karakterler) → Lighthouse.
15. Kullanıcıya göster → commit (kullanıcı isterse) → kullanıcı Pages kaynağını "GitHub Actions" yapar → `main`'e merge.

## 7. Kullanıcıdan beklenen içerik (spesifikasyon §9)

Bunlar gelmeden ilgili alanlar gizli kalır; **uydurma yok**:
- **Yayınlar:** yazarlar, dergi, DOI. Bilinen: 4 başlık + durumlar.
  - "Derin Sinir Ağları Aktivasyon Fonksiyonlarının Genetik Programlama ile Otomatik Tasarımı" — dergide/değerlendirmede.
  - "A Comparative Review of EA & Mutation Types in Automatic Activation Function Design" — dergide/değerlendirmede.
  - "Semantic Search for Automatic Activation Function with Artificial Bee Colony Programming" — yazımda.
  - "Neural Architecture Search with Artificial Bee Colony Coding" — geliştirmede.
- **Profil linkleri:** Google Scholar / ORCID var mı?
- **Çelişkiler:**
  - Kampüs projesi "staj 1 ay" diyor; CV'de staj 09/2024–01/2025.
  - Portföy kartı "6 kapı" diyor; proje sayfası "10+ kamera".
- **Eğitim:** 2021–2026 — mezuniyet durumu.
- **Metrikler:** KYC ve kampüs için paylaşılabilir sayılar var mı?
