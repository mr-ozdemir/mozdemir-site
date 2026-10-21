import type { Lang } from './ui';

// Sayfa anahtarı → dile göre yol. Dosya adları eski siteyle aynı tutulur (SEO, dış bağlantılar).
export type PageKey = 'home' | 'projects' | 'publications' | 'cv' | 'about' | 'club' | 'notfound';

const files: Record<Exclude<PageKey, 'home'>, string> = {
  projects: 'portfolio.html',
  publications: 'publications.html',
  cv: 'resume.html',
  about: 'about.html',
  club: 'culup.html',
  notfound: '404.html',
};

const prefix = (lang: Lang) => (lang === 'tr' ? '/' : '/en/');

export function pagePath(lang: Lang, page: PageKey): string {
  return page === 'home' ? prefix(lang) : prefix(lang) + files[page];
}

export function projectPath(lang: Lang, slug: string): string {
  return `${prefix(lang)}project-${slug}.html`;
}

/** Bir sayfanın diğer dildeki eşdeğeri (R24: dil düğmesi eşdeğer sayfaya gider). */
export function alternatePath(path: string, target: Lang): string {
  const bare = path.replace(/^\/en(\/|$)/, '/');
  return target === 'tr' ? bare : bare === '/' ? '/en/' : '/en' + bare;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'tr' ? 'en' : 'tr';
}
