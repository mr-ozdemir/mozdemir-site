// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Statik çıktı; GitHub Pages'e GitHub Actions ile yüklenir (.github/workflows/deploy.yml).
export default defineConfig({
  site: 'https://mozdemir.com',
  trailingSlash: 'ignore',
  // 'preserve': about.astro → about.html, en/index.astro → en/index.html.
  // Eski URL'ler korunur: /about.html, /en/, /en/about.html, /project-kyc.html ...
  build: { format: 'preserve' },
  // Astro 7 varsayılanı 'jsx' satır içi öğeler arasındaki boşlukları siler.
  compressHTML: true,
  integrations: [
    sitemap({
      // Yönlendirme kabukları ve 404 sitemap'e girmez.
      filter: (page) => !/\/(en\/)?(services|project-AutoG|404)(\.html)?$/.test(page),
      // Sitemap URL'leri canonical ile aynı olsun: /about → /about.html, /en → /en/.
      serialize: (item) => {
        const url = new URL(item.url);
        if (url.pathname === '/en') url.pathname = '/en/';
        else if (!url.pathname.endsWith('/') && !/\.[a-z]+$/i.test(url.pathname)) url.pathname += '.html';
        return { ...item, url: url.href };
      },
    }),
  ],
});
