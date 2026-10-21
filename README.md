# mozdemir.com

Muhammet Özdemir'in kişisel sitesi — [Astro](https://astro.build) ile üretilen statik site, GitHub Pages'te yayınlanır. Türkçe kökte (`/`), İngilizce `/en/` altında.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ üretir
npm run check    # dist/ üzerinde link, h1, hreflang, meta kontrolü
npm run preview  # dist/ çıktısını yerelde sunar
```

Node 22.12+ gerekir.

## İçerik nerede?

| Ne | Dosya |
|---|---|
| Projeler (vaka çalışmaları) | `src/content/projects/tr/*.md`, `src/content/projects/en/*.md` — dosya adı URL'dir (`kyc.md` → `/project-kyc.html`) |
| Yayınlar | `src/content/publications/*.md` (iki dil tek dosyada) |
| Profil, deneyim, eğitim, ödüller, yetkinlikler, hizmetler, kulüp | `src/data/site.ts` |
| Arayüz metinleri (menü, buton, başlık) | `src/i18n/ui.ts` |
| Görseller | `src/assets/images/` (derlemede otomatik WebP'ye dönüştürülür) |
| CV PDF | `public/assets/cv/Muhammet Ozdemir_CV.pdf` |

Yeni proje eklemek: `src/content/projects/tr/<ad>.md` ve `src/content/projects/en/<ad>.md` dosyalarını mevcut bir projeyi örnek alarak oluşturun. Ön bilgi alanları `src/content.config.ts` içinde tanımlıdır; eksik veya hatalı alan derlemeyi durdurur.

İçerik değişince `src/data/site.ts` içindeki `lastUpdated` tarihini güncelleyin.

## Yayın

`main` dalına her push'ta `.github/workflows/deploy.yml` siteyi derleyip GitHub Pages'e yükler.
Tek seferlik ayar: GitHub → Settings → Pages → Source = **GitHub Actions**.

## Tasarım

Araştırma ve tasarım kararları: `docs/tasarim-arastirmasi/00-sentez-ve-tasarim-spesifikasyonu.md`.
