import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'> & { slug: string; lang: Lang };

// glob() kimlikleri küçük harfe çevirir; eski URL'ler (project-AutoML.html) büyük/küçük harfe
// duyarlı olduğu için slug dosya adından alınır.
function fromPath(entry: CollectionEntry<'projects'>) {
  const path = (entry.filePath ?? entry.id).replace(/\\/g, '/');
  const [lang, file] = path.split('/').slice(-2);
  return { lang: lang as Lang, slug: file.replace(/\.md$/, '') };
}

export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects');
  return all
    .map((entry) => ({ ...entry, ...fromPath(entry) }))
    .filter((p) => p.lang === lang)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getPublications() {
  const all = await getCollection('publications');
  return all.sort((a, b) => a.data.order - b.data.order);
}
