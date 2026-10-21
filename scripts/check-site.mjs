// dist/ üzerinde yayın öncesi kalite kontrolü (bağımlılıksız).
// Kullanım: npm run build && npm run check
// Kontroller: kırık iç link ve çapa (R17, R45), tek <h1> (R30), lang (R25), karşılıklı hreflang (R26),
// boş/tekrarlı title ve description (R40), alt'sız görsel, yer tutucu metin.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const SITE = 'https://mozdemir.com';
const PLACEHOLDERS = [/lorem ipsum/i, /coming soon/i, /çok yakında/i, /TODO/, /içeriği paylaşılamamaktadır\.\s*<\/p>\s*<a/i];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(DIST).filter((f) => f.endsWith('.html'));
const pages = new Map(); // url path → { file, html }
for (const file of files) {
  const rel = relative(DIST, file).split('\\').join('/');
  const url = '/' + rel.replace(/(^|\/)index\.html$/, '$1');
  pages.set(url, { file: rel, html: readFileSync(file, 'utf8') });
}

const errors = [];
const warn = (page, msg) => errors.push(`${page}: ${msg}`);
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const titles = new Map();
const descriptions = new Map();

function resolveTarget(fromUrl, href) {
  const [pathPart, hash] = href.split('#');
  const base = new URL(fromUrl, SITE);
  const target = new URL(pathPart || fromUrl, base);
  let path = decodeURIComponent(target.pathname);
  return { path, hash };
}

function existsInDist(path) {
  if (pages.has(path)) return true;
  const fsPath = join(DIST, path.replace(/^\//, ''));
  return existsSync(fsPath) && statSync(fsPath).isFile();
}

for (const [url, { html }] of pages) {
  const isRedirect = /http-equiv="refresh"/.test(html);
  const htmlTag = html.match(/<html[^>]*>/)?.[0] ?? '';
  if (!attr(htmlTag, 'lang')) warn(url, '<html> lang eksik');

  if (isRedirect) {
    const to = html.match(/url=([^"]+)"/)?.[1];
    if (!to || !existsInDist(resolveTarget(url, to).path)) warn(url, `yönlendirme hedefi yok: ${to}`);
    continue;
  }

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) warn(url, `${h1} adet <h1> (1 olmalı)`);

  // Tekillik dil içinde aranır: özel isimler (ör. "Nahıl AutoML") iki dilde aynı olabilir.
  const lang = attr(htmlTag, 'lang');
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
  if (!title) warn(url, 'title boş');
  else titles.set(`${lang}|${title}`, [...(titles.get(`${lang}|${title}`) ?? []), url]);

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim();
  if (!desc) warn(url, 'meta description boş');
  else descriptions.set(`${lang}|${desc}`, [...(descriptions.get(`${lang}|${desc}`) ?? []), url]);

  for (const re of PLACEHOLDERS) if (re.test(html)) warn(url, `yer tutucu metin: ${re}`);

  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    // Değersiz `alt` = alt="" (dekoratif görsel, HTML standardına göre geçerli).
    if (!/\salt(=|\s|>)/.test(img)) warn(url, `alt'sız görsel: ${img.slice(0, 80)}`);
    if (!/\swidth="/.test(img) || !/\sheight="/.test(img)) warn(url, `width/height eksik: ${img.slice(0, 80)}`);
  }

  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, '&');
    if (/^(https?:|mailto:|tel:)/.test(href) && !href.startsWith(SITE)) continue;
    const { path, hash } = resolveTarget(url, href.replace(SITE, ''));
    if (!existsInDist(path)) {
      warn(url, `kırık iç link: ${href}`);
      continue;
    }
    if (hash) {
      const targetHtml = pages.get(path)?.html ?? '';
      const targetIds = path === url ? ids : new Set([...targetHtml.matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]));
      if (!targetIds.has(decodeURIComponent(hash))) warn(url, `olmayan çapa: ${href}`);
    }
  }

  // hreflang: mutlak URL, hedef var ve karşılıklı.
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  if (alts.length && alts.length !== 3) warn(url, `hreflang sayısı ${alts.length} (3 olmalı)`);
  for (const [, code, href] of alts) {
    if (!href.startsWith(SITE)) {
      warn(url, `hreflang mutlak değil: ${href}`);
      continue;
    }
    const path = new URL(href).pathname;
    const target = pages.get(path);
    if (!target) {
      warn(url, `hreflang hedefi yok: ${href}`);
      continue;
    }
    const self = SITE + url;
    if (code !== 'x-default' && !target.html.includes(`href="${self}"`)) warn(url, `hreflang karşılıklı değil: ${href}`);
  }
}

for (const [title, urls] of titles) if (urls.length > 1) errors.push(`tekrarlı title "${title}": ${urls.join(', ')}`);
for (const [desc, urls] of descriptions)
  if (urls.length > 1) errors.push(`tekrarlı description: ${urls.join(', ')} — "${desc.slice(0, 60)}…"`);

const checked = pages.size;
if (errors.length) {
  console.error(`✗ ${errors.length} sorun (${checked} sayfa):\n` + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log(`✓ ${checked} sayfa kontrol edildi, sorun yok.`);
