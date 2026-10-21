import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projeler: src/content/projects/<dil>/<slug>.md — her proje için TR ve EN dosyası.
// Dosya gövdesi (Markdown) vaka çalışması metnidir; ön bilgi (frontmatter) kart ve özet kutusunu besler.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // proje sayfasının giriş cümlesi
      short: z.string(), // listelerde gösterilen tek kısa cümle
      outcome: z.string().optional(), // tek satırlık somut sonuç (yalnızca doğrulanmış bilgi)
      status: z.enum(['production', 'research', 'completed', 'prototype', 'confidential']),
      category: z.enum(['industry', 'research', 'robotics']),
      context: z.string(), // kurum / müşteri / program
      role: z.string().optional(),
      period: z.string().optional(),
      badges: z.array(z.string()).default([]), // ör. "TÜSEB destekli"
      tags: z.array(z.string()).max(5), // kartta gösterilen teknolojiler
      stack: z.array(z.string()).default([]), // vaka sayfasındaki tam liste
      facts: z.array(z.strictObject({ label: z.string(), value: z.string() })).default([]),
      metrics: z.array(z.strictObject({ label: z.string(), value: z.string() })).default([]),
      links: z.array(z.strictObject({ label: z.string(), href: z.url() })).default([]),
      cover: image(),
      coverAlt: z.string(),
      // strictObject: YAML'da tırnaksız virgül fazladan anahtar üretirse derleme hata verir.
      gallery: z.array(z.strictObject({ src: image(), alt: z.string(), caption: z.string().optional() })).default([]),
      note: z.string().optional(), // gizlilik / yayın süreci notu
      featured: z.boolean().default(false),
      order: z.number(),
    }),
});

// Yayınlar: tek dosyada iki dil. Yazar/dergi/DOI bilgisi verilmedikçe boş kalır (uydurma yok).
const publications = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.object({ tr: z.string(), en: z.string() }),
    status: z.enum(['published', 'revision-submitted', 'under-review', 'drafting', 'in-development']),
    tldr: z.object({ tr: z.string(), en: z.string() }),
    authors: z.array(z.object({ name: z.string(), self: z.boolean().default(false) })).default([]),
    venue: z.object({ tr: z.string(), en: z.string() }).optional(),
    year: z.number().optional(),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    project: z.string().optional(), // ilgili proje slug'ı
    selected: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { projects, publications };
