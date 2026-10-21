# 03 — Academic & Developer Portfolio Templates: Evidence Record

Prepared for: mozdemir.com redesign (today: static Bootstrap "Kelly" template, GitHub Pages, no build step, TR at `/` and EN at `/en/`; repo observed to contain `index.html`, `about.html`, `portfolio.html`, `resume.html`, `services.html`, nine `project-*.html` pages, `en/`, and `CNAME`).
Research date: **2026-10-21**. All star counts were checked on this date.

## Evidence tags
- **SOURCE**: read directly from the template's own source file, config or README (path given).
- **OBSERVED**: seen on a live demo or rendered page, or measured (API star count, HTTP status).
- **COMPUTED**: derived arithmetically from a SOURCE value (method stated).
- **UNKNOWN**: not verified. No value is invented.

Star counts come from the GitHub REST API (exact, `stargazers_count`) where possible. After the unauthenticated API rate limit ran out, they come from shields.io JSON (rounded, e.g. "1.5k"). The method is noted for each.

---

## Key structural findings
1. **al-folio changed architecture in v1.x.** The repo is now "a thin starter, not a theme". Layouts, SCSS and includes moved into plugin gems (`al-folio-core`, `al-citations`, `al-search`, and others), and **al-folio-core now ships a Tailwind config** alongside Bootstrap-compat. Older tutorials pointing to `_layouts/bib.liquid` or `_sass/_themes.scss` in the main repo are out of date: those paths now return 404 (OBSERVED). The real files are in `al-org-dev/al-folio-core`.
2. **None of the popular academic templates has first-class TR+EN content switching** except the Hugo themes (PaperMod, Blowfish, Congo, HugoBlox), which use Hugo's multilingual mode. Jekyll needs `jekyll-polyglot` (the `multi-language-al-folio` fork). Astro has built-in i18n routing, but none of the Astro portfolio themes studied ships with it turned on.
3. **Only Jon Barron's template and the Academic Project Page template are true zero-build, plain-HTML sites**, which matches mozdemir.com's current constraint. Every other template needs Ruby/Jekyll + Actions, Hugo, Node or Next.js.
4. **Magic Portfolio is licensed CC BY-NC 4.0** (SOURCE: README "Commercial usage is not allowed"). This is a risk for a site that advertises freelance consulting. Use it as visual reference only.
5. **dillionverma/portfolio cannot be static-exported as-is.** Its `next.config.mjs` defines `async headers()` (SOURCE), and Next.js lists "Headers" as unsupported in `output: 'export'` (SOURCE: nextjs.org static-exports doc). It targets Vercel.

---

# PART A — Academic templates

## A1. al-folio (Jekyll)
- **URL / repo**: https://github.com/alshedivat/al-folio · demo https://alshedivat.github.io/al-folio/
- **Stars**: 16,267 · forks 13,058 · last push 2026-10-19 · MIT (OBSERVED, GitHub API)
- **Stack & build**: Jekyll + jekyll-scholar + a v1 plugin-gem ecosystem (`al_folio_core`, `al_folio_cv`, `al_search`, `al_citations`, `al_icons`, `al_math`, …) (SOURCE: README "Plugin Ecosystem"). **A build is required.**
- **GitHub Pages fit**: works, but only via GitHub Actions. INSTALL.md says to enable Actions, give "Read and write permissions", let the action build a `gh-pages` branch, then "set the branch to `gh-pages` (NOT to `main`)" (SOURCE: docs/INSTALL.md L198–202). jekyll-scholar is not a whitelisted Pages plugin, so the classic Pages build is not used.
- **i18n**: single language. `lang: en` in `_config.yml` (SOURCE). Multilingual needs the fork **george-gca/multi-language-al-folio** (166 stars, shields.io), which uses `jekyll-polyglot` with `languages: ["en-us","pt-br","fr-ca"]`, `default_lang`, `lang_from_path: true` (SOURCE: fork `_config.yml` L368–376).
- **Information architecture** (SOURCE: `_pages/*.md`): about (home, `permalink: /`) → publications (nav_order 2) → projects (nav_order 3) → CV (nav_order 5) → blog, repositories, teaching, people, news. Collections: `news`, `projects`, `books`, `teachings` (SOURCE: README).
- **Home (about) blocks** (SOURCE `_pages/about.md` front matter): `profile` (image right-aligned, optional circular crop, `more_info` address), `selected_papers: true` (lists BibTeX entries with `selected={true}`), `social: true`, `announcements` (enabled, `scrollable`, `limit: 5`), `latest_posts` (limit 3).
- **Publication data model** (SOURCE `_bibliography/papers.bib`, `_config.yml` `filtered_bibtex_keywords`): standard BibTeX plus custom keys: `abbr` (venue badge), `abstract`, `additional_info`, `altmetric`, `annotation` (popover), `arxiv`, `award`, `award_name`, `bibtex_show`, `blog`, `code`, `dimensions`, `doi`, `eprint`, `google_scholar_id`, `hal`, `html`, `inspirehep_id`, `pdf`, `pmid`, `poster`, `preview` (thumbnail image/video), `selected`, `slides`, `supp`, `video`, `website`. Author markers `*†‡§¶‖&^` in author names become `<sup>` (SOURCE bib.liquid regex).
- **Publication entry anatomy** (SOURCE `al-folio-core/_layouts/bib.liquid`):
  1. Left column `col-sm-2`: venue `abbr` badge (`badge rounded w-100`, colour from `_data/venues.yml` if defined, else theme colour) + optional `preview` thumbnail (`sizes=200px`, zoomable; video preview supported).
  2. Right column `col-sm-8` (or `col-sm-10` with thumbnails off): `.title` (bolder) → `.author` (self-author detected via `scholar.last_name`/`first_name` and rendered as `<em>` with `border-bottom: 1px solid`, `font-style: normal`; co-authors linked from `_data/coauthors.yml` with dashed underline; **truncated at `max_author_limit: 3`** with a clickable "N more authors" span that types out the names, animation delay 10 ms) → optional annotation info icon popover → `.periodical` (`<em>journal</em>` or `<em>In booktitle</em>`, location, month year) → `entry.note`.
  3. `.links` button row in this order: Award, **Abs** (toggle), DOI, arXiv, HAL, **Bib** (toggle), HTML, PDF, Supp, Video, Blog, Code, Poster, Slides, Website.
  4. Badges: Altmetric, Dimensions, Google Scholar (shields.io badge with count from `_data/citations`), InspireHEP.
  5. Hidden blocks: award, abstract, bibtex (syntax highlighted, custom keys stripped by `hideCustomBibtex`), embedded video.
- **Publication CSS** (SOURCE `_sass/_publications.scss`): list `margin-bottom: 1rem` per `li`; year heading `h2.bibliography` right-aligned, colour `--global-divider-color`, 1px top border; buttons `border: 1px solid var(--global-text-color)`, `padding: .25rem 1rem`, hover changes to theme colour; hidden panels `font-size: .875rem`, `max-height: 0 → 100em`, `transition: all .15s ease`; abstract open shows `dashed 1px` border.
- **Grouping**: `group_by: year`, `group_order: descending`, `style: apa` (SOURCE `_config.yml` scholar block). The live demo shows year headings 1967 → 1905 (OBSERVED).
- **Search**: `search_enabled: true` (ctrl-k full-text, `al_search`) and `bib_search: true` (a "Type to filter" input above the bibliography) (SOURCE). On the live publications page the filter box was not visible in fetched text, but "ctrl k" appears in the nav (OBSERVED; the input is probably JS-rendered, UNKNOWN).
- **Project card** (SOURCE `al-folio-core/_includes/projects.liquid`): whole card is a link (`project.redirect` or page URL) → `card h-100 hoverable` → `card-img-top` (`img`, `sizes=250px`) → `h2.card-title` → `p.card-text` (description) → optional GitHub icon + live star count (`github`, `github_stars`). Front matter fields: `title`, `description`, `img`, `importance` (sort), `category` (grouped headings, e.g. `work`, `fun`), `related_publications`, `github`, `github_stars`, `redirect` (SOURCE `_projects/1_project.md`). Grid is 3 columns (`row-cols-md-3`) or a 2-column horizontal variant; masonry is optional (`enable_masonry: true`).
- **News item** (SOURCE `_includes/news.liquid`): borderless table row: `th` date `%b %d, %Y` at 20% width + `td` inline content (`inline: true`) or a link to the news post. Scrollable (`max-height: 60vw`) when more than 3 items.
- **CV**: `layout: cv`, `cv_format: rendercv | jsonresume`, `cv_pdf` download button, left sidebar TOC (SOURCE `_pages/cv.md`). JSON Resume sections: basics, work, education, publications, projects, volunteer, awards, certificates, skills, languages, interests, references (SOURCE `_config.yml`).
- **Typography**: Google Fonts `Roboto:300,400,500,700 | Roboto Slab:100,300,400,500,700 | Material Icons` (SOURCE `_config.yml` third_party_libraries). Size scale: tables `1rem`, blockquote `1.2rem`, publications `h1 2rem`, `h2 span 1.5rem` (SOURCE). Body font-size: UNKNOWN (Bootstrap default, not verified).
- **Colors** (SOURCE `al-folio-core/_sass/_variables.scss`, `_themes.scss`):
  - Light: bg `#ffffff`, text `#000000`, text-light `#828282`, **theme/accent `#b509ac` (purple)**, divider `rgba(0,0,0,.1)`, card `#ffffff`, footer bg `#1c1c1d`, highlight `#b71c1c`, code bg `rgba(#b509ac,.05)`.
  - Dark (`html[data-theme="dark"]`): bg `#1c1c1d`, text = `$grey-color-light` (`#828282` lightened 40%, about `#e8e8e8`, COMPUTED), **theme `#2698ba` (cyan)**, divider `#424246`, card `#212529`, code bg `#2c3237`.
- **Dark mode**: system preference plus a 3-state toggle (system / light / dark, `#light-toggle-system|dark|light`), choice persisted (SOURCE README + `_themes.scss`). Tailwind `darkMode: ["selector", '[data-theme="dark"]']` (SOURCE `al-folio-core/tailwind.config.js`).
- **Layout width**: `max_width: 930px` (SOURCE `_config.yml` L106; `$max-content-width: 930px`). Fixed navbar (`navbar_fixed: true`), body `padding-top: 57px` (SOURCE `_layout.scss`).
- **Performance claim**: Lighthouse desktop **95 / 100 / 100 / 100** (Perf / A11y / BP / SEO); mobile **92 / 100 / 100 / 100** (SOURCE: `lighthouse_results/*/pagespeed.svg` in repo; date of the run UNKNOWN).
- **Notable UX**: Abs/Bib toggles, self-author underline, "N more authors" reveal, selected papers on home, news feed, venue badge colours, citation badges plus a scheduled Google Scholar citation-refresh workflow, ctrl-k search, scroll progress bar, medium-zoom, distill posts, GitHub repo cards.
- **Strengths**: the most complete academic publication component found; BibTeX as single source of truth; huge community (16k stars).
- **Weaknesses**: heavy (Ruby + many plugins + Actions); the v1 gem split makes local overrides harder ("run `bundle exec al-folio upgrade overrides audit`", SOURCE); no i18n in mainline; purple/cyan academic look is very recognisable ("another al-folio site").
- **Relevance to mozdemir.com: 4/5.** Best publication anatomy to copy. Adopting the whole stack conflicts with the no-build constraint and TR/EN.

## A2. Academic Pages (academicpages.github.io, Jekyll)
- **URL / repo**: https://github.com/academicpages/academicpages.github.io · https://academicpages.github.io/
- **Stars**: 17,737 · forks 9,277 · last push 2026-10-18 · MIT (OBSERVED, API). This is the most-starred academic template found.
- **Stack & build**: Jekyll, forked from Minimal Mistakes. Plugins: jekyll-feed, jekyll-gist, jekyll-paginate, jekyll-sitemap, jekyll-redirect-from (SOURCE `_config.yml` L309–314). These are all GitHub Pages–whitelisted plugins. The README says "Settings -> Pages -> Source: GitHub Actions" (SOURCE).
- **GitHub Pages fit**: very good. It was designed as a "Use this template → username.github.io" flow (SOURCE README).
- **i18n**: one site locale (`locale: "en-US"`). `_data/ui-text.yml` includes `tr` and `tr-TR` UI strings (SOURCE L146, L184), but there is **no multi-language content routing** (UNKNOWN whether any plugin exists; none is shipped).
- **IA** (SOURCE `_pages/`): about, publications, talks (+ talkmap), teaching, portfolio, blog posts, CV (`cv.md`, plus `archive-single-cv.html` include), year/category/tag archives.
- **Publication data model** (SOURCE `_publications/2024-02-17-paper-title-number-4.md`): **one Markdown file per paper** with front matter: `title`, `collection: publications`, `category` (`books` | `manuscripts` | `conferences`, headings defined in `_config.yml publication_category`), `permalink`, `excerpt`, `date`, `venue`, `paperurl`, `slidesurl`, `bibtexurl`, `citation` (pre-formatted HTML string). Body = detail page. Generators: `markdown_generator/` has `publications.py` (from TSV) and `pubsFromBib.py` / `PubsFromBib.ipynb` (from BibTeX) plus `OrcidToBib.ipynb` (SOURCE directory listing).
- **Publication entry anatomy** (SOURCE `_includes/archive-single.html`): `h2.archive__item-title` (link to detail page; if `link` is set, an external link plus a permalink icon) → "Published in *venue*, YYYY" → excerpt → "Recommended citation: {citation}" + `Download Paper | Download Slides | Download Bibtex` text links. **No abstract toggle, no author highlighting, no thumbnails in list mode** (teaser only in `grid` type).
- **Portfolio item**: `title`, `excerpt` (may embed `<img>`), `collection: portfolio` (SOURCE `_portfolio/portfolio-1.md`).
- **Typography** (SOURCE `_sass/_themes.scss`): system sans `-apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif`; captions Georgia serif; `$doc-font-size: 16`; modular scale 2.441 / 1.953 / 1.563 / 1.25 / 1 / .75 / .6875 / .625 em.
- **Colors** (SOURCE `_sass/theme/_default_light.scss`, `_default_dark.scss`): light primary `#2f7f93`, link `#52adc8`, bg `#fff`, footer `#f2f3f3`, text = mix(#000, #7a8288, 40%) (about `#494e52`, COMPUTED); dark primary/link `#0ea1c5`, bg `#474747`, text `#ffffff`. Six site themes: default, air, sunrise, mint, dirt, contrast, each with light and dark files (SOURCE `site_theme` + `_sass/theme/` listing).
- **Dark mode**: `html[data-theme="dark"]` variables (SOURCE). Toggle UI: UNKNOWN (not inspected).
- **Layout**: left author-profile sidebar (`author_profile: true`); `$large: 925px` container; `$sidebar-link-max-width: 250px`; `$masthead-height: 70px` (SOURCE).
- **Strengths**: easiest Pages path; Markdown-per-paper is friendly for non-developers; TSV/BibTeX generators; talks map.
- **Weaknesses**: dated visual language (2016 Minimal Mistakes lineage); weak publication UX; the `citation` string is hand-formatted HTML, so it is duplicated data.
- **Relevance: 3/5.** Useful for the per-paper detail page idea and its generators. Not for its visuals.

## A3. HugoBlox "Academic CV" (formerly Wowchemy / Hugo Academic)
- **URL / repo**: https://github.com/HugoBlox/hugo-theme-academic-cv (redirected from `HugoBlox/theme-academic-cv` and `wowchemy/starter-hugo-academic`) · framework https://github.com/HugoBlox/kit · demo https://academic-demo.netlify.app/
- **Stars**: template 5,079 (forks 6,424); HugoBlox kit 9,771 (OBSERVED, API). README claims "Trusted by 150,000+ researchers"; the homepage CTA says "250,000+" (SOURCE, marketing, inconsistent).
- **Stack & build**: Hugo modules (`github.com/HugoBlox/kit/modules/blox`, `/slides`, `/integrations/netlify`) + **Tailwind CSS v4 + Pagefind + Preact via pnpm** (SOURCE `package.json`: `"build": "hugo --minify && pnpm run pagefind"`). Needs Hugo extended + Go (modules) + Node/pnpm. **A build is required.**
- **GitHub Pages fit**: README says "Deploy to GitHub Pages, Netlify, Vercel, or Cloudflare" (SOURCE). The repo ships `netlify.toml` (SOURCE). The Pages workflow file was not inspected (UNKNOWN).
- **i18n**: Hugo multilingual. `config/_default/languages.yaml` has `en` with a commented second-language example (`contentDir: content/zh`) (SOURCE). Header and footer have `language_switcher: true` (SOURCE `params.yaml`). **Turkish is in the language list** (`'tr': 'Türkçe'`, SOURCE kit `data/languages.yaml`), but `i18n/tr.yaml` is **partly untranslated** (e.g. "Table of Contents", "On this page" remain English, OBSERVED).
- **IA** (SOURCE `content/` + `content/_index.md`): landing page built from blocks: `resume-biography-3` (avatar, name, role, "Download CV" button → `uploads/resume.pdf`, education, interests) → markdown "My Research" → collection "Featured Publications" (`view: article-grid`, 2 columns, `featured_only`) → collection "Recent Publications" (`view: citation`) → "Recent & Upcoming Talks" (`view: card`) → "Recent News" (`view: card`, count 10). Other content: `experience.md`, `projects/`, `courses/`, `events/`, `slides/`, `blog/`, `authors/`.
- **Publication data model** (SOURCE `content/publications/conference-paper/index.md`, a **page bundle** with `cite.bib`, `featured.jpg`, PDF): `title`, `authors` (list; `me` resolves to the profile), `author_notes` (e.g. "Equal contribution"), `date`, `publishDate`, `publication_types: ['paper-conference']` (CSL types), `publication.name`, `publication.short_name`, `peer_reviewed`, `open_access`, `license`, `awards[] {name, level, note}`, `funding[] {funder, grant}`, `abstract`, `summary`, `tags`, `featured`, `hugoblox.ids.doi`, `links[] {type: pdf|code|dataset|slides|source|video, url}`, `image {caption, focal_point, preview_only}`, `projects[]` (cross-links to project pages), `slides`. Link types also include `preprint`, `doi`, `model`, `poster`, `project` with i18n labels and Heroicons (SOURCE kit `data/link_types.yaml`).
- **Citation-view anatomy** (SOURCE kit `layouts/_partials/views/citation.html`): file icon → authors (`li-cite-author`) → (Year). → **Title** (underlined link) → venue short name → top award badge inline → flex row of link buttons. APA vs MLA order is switched by `citations.style: apa | mla | chicago | ieee`.
- **Demo** (OBSERVED): citation list buttons PDF, Preprint, Code, Dataset, Poster, Slides, Video, Source Document, Project, Custom Link, **Cite** (citation-export modal), DOI. Featured cards show thumbnail, topic tag, title, abstract, author avatar, date, read time, "Read more".
- **Typography** (SOURCE kit `data/fonts/academic.yaml`, pack "academic"): **heading Lora (500/600/700), body Source Serif 4 (400/600), code Source Code Pro**; leading heading 1.2 / body 1.7 / code 1.5. Other packs: developer, editorial, geometric, humanist, modern, system (OBSERVED directory listing).
- **Colors** (SOURCE kit `data/themes/default.yaml`): light primary Tailwind `indigo`, secondary `teal`, bg `#ffffff`, fg `#111827`, header bg `#f1f5f9`, footer `#f3f4f6`; dark primary `blue`, secondary `teal`, bg `#0f172a`, fg `#f8fafc`, footer `#111827`. The demo shows 11 named themes (Coffee, Contrast, Cupcake, Default, Dracula, Marine, Matcha, Minimal, Retro, Solar, Synthwave) (OBSERVED).
- **Dark mode**: `theme.mode: system`, `theme_toggle: true`, `theme_picker: true` (SOURCE `params.yaml`).
- **Search**: Pagefind; `header.search: true` (SOURCE). Demo has a search overlay with keyboard navigation (OBSERVED).
- **Layout**: `radius: md`, `spacing: spacious`, `avatar_shape: circle`; avatar sizes small 150 / medium 200 / large 320 / xl 400 / xxl 500 px (SOURCE `_index.md` comments). Max-width: UNKNOWN.
- **Strengths**: richest publication schema (awards, funding, peer_reviewed, open_access, CSL types, projects↔publications links); real i18n; Cite modal.
- **Weaknesses**: heaviest toolchain (Hugo + Go + pnpm + Tailwind + Pagefind); marketing-heavy README and product upsells (Hugo Chat, Ownable CMS); frequent breaking renames over the years (Academic → Wowchemy → Hugo Blox → HugoBlox kit, OBSERVED via repo redirects); the demo footer shows CC BY-NC-ND (OBSERVED, a content-license default to change).
- **Relevance: 3/5.** Copy the schema (status, awards, links typing, project↔paper cross-links). Avoid the toolchain.

## A4. Jon Barron template (plain HTML)
- **URL / repo**: https://github.com/jonbarron/jonbarron.github.io (redirect from `jonbarron/website`) · live https://jonbarron.info/
- **Stars**: 3,704 · forks 2,996 · last push 2026-10-16 · **no license file** (`license: None`, OBSERVED API). README: "Feel free to clone this code for your own personal use." Live footer: "Feel free to steal this website's source code. Do not scrape the HTML from this page itself" and points to Leonid Keselman's Jekyll fork **leonidk/new_website** (365 stars, shields.io) (OBSERVED).
- **Stack & build**: one `index.html` (237 KB) + `stylesheet.css` + images. **No build step.** Default branch is `master` (`main` returned 404, OBSERVED).
- **GitHub Pages fit**: native.
- **i18n**: none (`<html lang="en">`).
- **IA** (OBSERVED live): header (name, bio, link row "Email / CV / Bio / Scholar / Twitter / Github", circular photo at 37% width) → Research (intro + paper rows) → Miscellanea → Micropapers → Recorded Talks → Academic Service → Teaching.
- **Publication row anatomy** (SOURCE `index.html` L72–118): 2-column table row: left `td` 20% width holding a 160×160 `.one/.two` image stack (a before/after image or `<video muted autoplay loop>` that fades in on `onmouseover`, opacity transition `.2s ease-in-out`) → right `td` 80%: linked `<span class="papertitle">` (14px bold) → `<br>` author list, each linked, **self in `<strong>`** → `<em>venue</em>, year` (+ "(Oral Presentation)" / "(Highlight)" tags) → links joined with " / " (project page / arXiv / code / video) → one-sentence `<p>` TL;DR. "Highlighted" rows use `bgcolor="#ffffd0"` (SOURCE; `span.highlight {background-color:#ffffd0}`).
- **Typography** (SOURCE `stylesheet.css`): **Lato** 400/700 (+ italics, latin and latin-ext subsets, self-declared @font-face from gstatic); body/td/p/a **14px**; `h2` 22px normal weight; `.name` 32px; `.papertitle` 14px 700.
- **Colors** (SOURCE): link `#1772d0`, hover/focus `#f09228`, highlight `#ffffd0`. Background: browser default white (no rule).
- **Dark mode**: none in `stylesheet.css` (SOURCE) and none seen on the live site (OBSERVED).
- **Layout**: outer table `max-width: 800px`, centred; header cells padding 2.5%; paper rows `border-spacing: 0 10px`, padding 16px/8px (SOURCE inline styles).
- **Strengths**: the canonical "AI researcher" look; the hover-swap media thumbnail is iconic; zero dependencies; fastest possible; the one-line TL;DR per paper is very effective for skimming.
- **Weaknesses**: table layout, inline JS per row, no a11y semantics, no dark mode, no data separation (every paper is hand-written HTML), no license.
- **Relevance: 5/5** for visual and IA reference and for no-build compatibility. Re-implement it with semantic HTML/CSS rather than copying the markup (licence unclear).

## A5. Minimal Mistakes (Jekyll)
- **URL / repo**: https://github.com/mmistakes/minimal-mistakes · https://mmistakes.github.io/minimal-mistakes/
- **Stars**: 13,590 · forks 27,144 (most-forked Jekyll theme found) · last push 2026-10-09 · MIT (OBSERVED API)
- **Stack & build**: Jekyll gem or **`remote_theme: "mmistakes/minimal-mistakes@4.28.1"`**: "Remote themes … do not require Gemfile changes or whitelisting making them ideal for sites hosted with GitHub Pages" (SOURCE README).
- **GitHub Pages fit**: best of any Jekyll theme (classic Pages build, no Actions needed).
- **i18n**: UI strings localized in about 40 languages **including Turkish (Türkçe)** (SOURCE README). There is no multi-language content routing.
- **Components**: layouts single, archive, search, splash, paginated home; author sidebar; nine to eleven skins: air, contrast, dark, dirt, mint, sunrise, aqua, neon, plum, catppuccin_latte, catppuccin_mocha (SOURCE README). Search: Lunr (default) or Algolia. There is no publication component.
- **Typography** (SOURCE `_sass/minimal-mistakes/_variables.scss`): `$doc-font-size: 16px` (medium ×1.125, large ×1.25, x-large ×1.375); default sans `-apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif`; captions Georgia; same modular scale as academicpages (2.441 → .625 em); ships "modern font stack" variables (system-ui, humanist, neo-grotesque `Inter, Roboto…`, transitional `Charter…`, etc.).
- **Colors**: default primary `#6f777d`, bg `#fff`, code bg `#fafafa`; dark skin bg `#252a34`, text `#eaeaea`, primary `#00adb5` (SOURCE).
- **Widths**: breakpoints 600 / 768 / 900 / 1024 / 1280 px; `$max-width: $x-large` (1280px) (SOURCE).
- **Dark mode**: a skin choice (build-time), no runtime toggle in core (inferred from the skin architecture; toggle UNKNOWN).
- **Relevance: 2/5.** A generalist blog/docs theme. Its only lessons are the Turkish UI strings and the remote_theme Pages trick.

## A6. Hugo PaperMod (used by Lilian Weng)
- **URL / repo**: https://github.com/adityatelange/hugo-PaperMod · demo https://adityatelange.github.io/hugo-PaperMod/ · reference user https://lilianweng.github.io/ (OBSERVED: page HTML contains "PaperMod" and `generator="Hugo 0.163.3"`)
- **Stars**: 14,002 · forks 3,441 · last push 2026-10-18 · MIT (OBSERVED API). Min Hugo v0.158.0 (SOURCE README badge).
- **Stack & build**: Hugo only. "**Zero JS build dependencies** — No webpack, Node.js, or other tooling required" (SOURCE README). A single `hugo` binary build is required.
- **GitHub Pages fit**: good via the official Hugo GitHub Action (deploy workflow not inspected, UNKNOWN specifics).
- **i18n**: "Multilingual support — Includes a built-in language selector" (SOURCE). `i18n/tr.yaml` exists (508 bytes, OBSERVED HTTP 200).
- **Modes / IA**: Regular, Home-Info, **Profile** mode (avatar + title + subtitle + buttons) (SOURCE README); archives, taxonomies, search (Fuse.js), TOC, breadcrumbs, cover images, code copy buttons, multiple authors, share buttons.
- **Publication support**: none native (Lilian Weng's site is a blog).
- **Typography** (SOURCE `assets/css/core/reset.css`, `common/*.css`): system stack `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`; **body 18px / line-height 1.6**; headings line-height 1.2; post title 40px; entry title 24px (lh 1.3); entry content 14px (lh 1.6); meta 13–14px; logo 24px.
- **Colors** (SOURCE `assets/css/core/theme-vars.css`): light theme `rgb(255,255,255)`, entry `#fff`, primary `rgb(30,30,30)`, secondary `rgb(108,108,108)`, tertiary `rgb(214,214,214)`, content `rgb(31,31,31)`, border `rgb(238,238,238)`, code-block bg `rgb(28,29,33)`; dark theme `rgb(29,30,32)`, entry `rgb(46,46,51)`, primary `rgb(218,218,219)`, secondary `rgb(155,156,157)`, content `rgb(196,196,197)`, border `rgb(51,51,51)`.
- **Widths** (SOURCE): `--main-width: 720px`, `--nav-width: 1024px`, `--gap: 24px`, `--content-gap: 20px`, `--header-height: 60px`, `--radius: 8px`.
- **Dark mode**: automatic by browser preference plus manual toggle (SOURCE README).
- **Performance claim**: "consistently scores near-perfect results on Pagespeed Insights" (SOURCE README; image only, numbers not extractable, UNKNOWN exact values).
- **Relevance: 3/5.** An excellent neutral grayscale token set and a 720px reading column; a good model for a "Writing/Notes" section. There is no publications component.

## A7. Quarto websites
- **URL / repo**: https://quarto.org/docs/websites/ · https://github.com/quarto-dev/quarto-cli (6.1k stars, shields.io)
- **Stack & build**: Quarto CLI (Pandoc + Bootstrap 5 + optional R/Python/Julia execution). `quarto render` is required.
- **GitHub Pages fit** (SOURCE quarto.org/docs/publishing/github-pages.html): (1) `output-dir: docs` + `.nojekyll`, commit rendered output; (2) `quarto publish gh-pages`; (3) GitHub Action `quarto-dev/quarto-actions/publish@v2`, which needs one local `quarto publish gh-pages` first.
- **About-page templates** (SOURCE website-about.html): `jolla` (centered circular photo above the name, centered intro, divider, link buttons), `trestles` (headshot and links left, body right), `solana` (name/links/body left, rectangular headshot right), `marquee` (large image on top), `broadside` (image left). Options: `image`, `links[] {href,text,icon(Bootstrap Icons),aria-label}`, `image-width`, `image-shape: rectangle|round|rounded`.
- **Listings** (SOURCE website-listings.html): `type: default | table | grid`; fields `title, subtitle, author, description, date, image, image-alt, word-count, reading-time, categories, filename, file-modified`; typeahead `filter-ui`, `sort-ui`, `categories: numbered|unnumbered|cloud`, page sizes 25 / 30 / 18; **listings can be driven from a YAML data file** (a list of maps). This is a good pattern for publications and projects.
- **Theming** (SOURCE html-themes.html): 25 Bootswatch themes plus default; light/dark pair `theme: {light: flatly, dark: darkly}` with an auto toggle (stored in localStorage); `respect-user-color-scheme: true` (since 1.7, needs JS). Default fonts: not stated (UNKNOWN).
- **Widths** (SOURCE page-layout.html): `sidebar-width 250px`, **`body-width 800px`**, `margin-width 250px`, `gutter-width 1.5em` (maximums).
- **i18n**: `lang` per document. Multi-language site routing is not documented on the pages read (UNKNOWN).
- **Relevance: 2/5.** It fits people who write in notebooks. Its YAML-driven listing plus filter/sort is a pattern worth copying in vanilla JS.

## A8. Additional academic templates found
| Template | Repo | Stars (2026-10-21) | Build | Notes (tag) |
|---|---|---|---|---|
| **Academic Project Page Template** (Nerfies-derived) | github.com/eliahuhorwitz/Academic-project-page-template | 5.3k (shields) | **None** (HTML + Bulma, Inter font from Google Fonts) | Per-paper landing page: teaser video, image carousel, YouTube embed, video carousel, PDF poster viewer, BibTeX with **copy button**, "More Works" dropdown, SEO/Scholar meta tags, 1200×630 social image; "Works with GitHub Pages"; licence CC BY-SA 4.0 (SOURCE README, index.html). **Relevance 5/5** for AutoML paper pages. |
| **AcadHomepage** | github.com/RayeRen/acad-homepage.github.io | 3k (shields) | Jekyll (fork → username.github.io) + GitHub Action crawler | Single page: About → 🔥 News (`*2022.02*` date + text) → 📝 Publications `paper-box` (left image with venue badge "CVPR 2016", right: linked title, **bold self-author**, [Project] + live citation count span `show_paper_citations data='SCHOLAR_ID:PAPER_ID'`, bullet TL;DR) → compact one-line pubs → Honors → Education → Talks → Internships. Google Scholar citations auto-updated daily 08:00 UTC into the `google-scholar-stats` branch (SOURCE README, `_pages/about.md`). Popular with Chinese AI researchers. **Relevance 4/5.** |
| multi-language-al-folio | github.com/george-gca/multi-language-al-folio | 166 | Jekyll + polyglot + Actions | The only al-folio path to TR/EN (SOURCE). |
| sbryngelson/academic-website-template | github.com/sbryngelson/academic-website-template | 387 | Jekyll + jekyll-scholar | Copy-BibTeX button, site search (search-result summary only, UNKNOWN detail). |
| Astro "Scholarly" | github.com/jxpeng98/astro-theme-scholars | 10 | Astro | BibTeX pubs, YAML records, filters, light/dark, one TS config (SOURCE astro.build theme page). Low adoption. |
| Astro Scholar | github.com/shravanngoswamii/astro-scholar | 31 | Astro + Pagefind | BibTeX pubs, team page, **GitHub Pages workflow** (SOURCE theme page). |
| as-folio | github.com/dadangnh/as-folio | 30 | Astro 6 | al-folio port: author highlighting, abstract toggles, citation badges via OpenAlex on deploy, ⌘K Pagefind + ninja-keys, RenderCV/JSONResume CV (SOURCE theme page). |
| academic-project-astro-template | github.com/RomanHauksson/academic-project-astro-template | 554 | Astro | Astro version of the project-page idea; CC BY-SA 4.0 (search-result summary). |

Popularity signal: the Astro academic themes are all under 600 stars, so their communities are immature compared with the Jekyll and Hugo options.

---

# PART B — Developer / portfolio templates

## B1. Vercel "Portfolio Starter Kit" (Next.js)
- **URL / repo**: https://github.com/vercel/examples/tree/main/solutions/blog · demo https://portfolio-blog-starter.vercel.app · template page https://vercel.com/templates/next.js/portfolio-starter-kit
- **Stars**: lives in the monorepo `vercel/examples` (5,157 stars, API). No standalone count.
- **Stack**: Next.js ^16, React ^19.2, Tailwind `4.0.0-alpha.13`, next-mdx-remote, sugar-high syntax highlighting, Geist font, Vercel Analytics and Speed Insights (SOURCE `package.json`). Features: MDX, sitemap, robots, JSON-LD, RSS, dynamic OG images (SOURCE README).
- **GitHub Pages fit**: not designed for it (Vercel one-click). Static export feasibility is UNKNOWN (dynamic OG/route handlers would need `force-static`).
- **i18n**: none (`lang="en"`, `locale: 'en_US'`).
- **Layout** (SOURCE `app/layout.tsx`): `body.max-w-xl mx-4 mt-8 lg:mx-auto` → **max-w-xl = 36rem / 576px** (Tailwind default); text black on white, `dark:text-white dark:bg-black` (system-preference dark via Tailwind `dark:`); `html {min-width: 360px}`; selection `#47a3f3`.
- **Components**: nav (`home`, `blog`, `deploy` links, sticky on lg); post list row = date (`w-[100px] tabular-nums text-neutral-600/400`) + title (`tracking-tight`) (SOURCE `posts.tsx`); h1 `text-2xl font-semibold tracking-tighter`.
- **Relevance: 2/5.** An ultra-minimal reference for the date + title list typography only.

## B2. dillionverma/portfolio (shadcn/ui + Magic UI)
- **URL / repo**: https://github.com/dillionverma/portfolio (the API resolves to `magicuidesign/portfolio`) · live https://dillion.io/
- **Stars**: 1,517 · forks 432 · last push 2026-01-13 · MIT (OBSERVED API; shields shows 1.5k). The brief calls it "very popular"; measured stars are modest, and its popularity comes mostly from the Magic UI brand (OBSERVED).
- **Stack**: Next.js 16.1.1, React ^19.2.3, Tailwind ^4.1.18, motion ^12, content-collections, shadcn/ui, Magic UI (SOURCE `package.json`, README).
- **GitHub Pages fit**: **poor as shipped.** `next.config.mjs` sets `async headers()` (X-Frame-Options and similar) (SOURCE), and "Headers" is unsupported under `output: 'export'` (SOURCE Next.js docs). It needs Vercel or edits.
- **i18n**: none (`lang="en"`, `locale: "en_US"`).
- **Data model**: **one config file** `src/data/resume.tsx` (SOURCE README "editing the single config file"). Keys: `name, initials, url, location, locationLink, description, summary, avatarUrl, skills, navbar[], contact {email, tel, social{GitHub, LinkedIn, X, Youtube…: {name,url,icon,navbar}}}, work[] {company, href, badges, location, title, logoUrl, start, end, description}, education[] {school, href, degree, logoUrl, start, end}, projects[] {title, href, dates, active, description(Markdown), technologies[], links[] {type, href, icon}, image, video}, hackathons[] {… mlh, win …}` (SOURCE grep of keys).
- **IA** (OBSERVED live): About → Work Experience → Education → (Skills, SOURCE `page.tsx`) → My Projects ("Check out my latest work") → (Hackathons, SOURCE) → Contact ("Get in Touch"). Floating bottom **Dock** nav with icon buttons and a theme toggle (SOURCE `navbar.tsx`: `Dock … h-14 p-2 … bg-card/90 backdrop-blur-3xl`).
- **Project card anatomy** (SOURCE `src/components/project-card.tsx`): `flex-col h-full border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200` → media `h-48 object-cover` (autoplay muted looping **video** preferred, else image, else `bg-muted` placeholder; image `onError` fallback) → **link badges overlaid top-right** (`absolute top-2 right-2`, black pill with icon + type, e.g. "Website", "Source") → body `p-6 gap-3`: title `font-semibold` + `time text-xs text-muted-foreground` dates, **ArrowUpRight** icon link at right (with `aria-label`) → Markdown description `text-xs leading-relaxed text-muted-foreground prose` → tech tags (`Badge variant=outline text-[11px] h-6 px-2`) pinned to the bottom (`mt-auto`).
- **Typography**: **Geist** (400/500/600/700) + Geist Mono via `next/font/google` (SOURCE `layout.tsx`); section headings `text-xl font-bold`.
- **Colors** (SOURCE `globals.css`, shadcn neutral): light bg `oklch(1 0 0)`, fg `oklch(0.145 0 0)`, primary `oklch(0.205 0 0)`, muted `oklch(0.97 0 0)`, muted-fg `oklch(0.556 0 0)`, border `oklch(0.922 0 0)`; dark bg `oklch(0.18 0 0)`, fg `oklch(0.985 0 0)`, muted `oklch(0.269 0 0)`, border `oklch(1 0 0 / 10%)`; `--radius: .625rem`.
- **Dark mode**: next-themes `ThemeProvider attribute="class" defaultTheme="light"` + ModeToggle (SOURCE).
- **Layout**: content `max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6` (**672px**, Tailwind default); a 100px **FlickeringGrid** header background masked with a gradient (SOURCE).
- **Motion**: `BlurFade` / `BlurFadeText`, staggered `BLUR_FADE_DELAY = 0.04` s per section (SOURCE `page.tsx`).
- **Strengths**: the best-looking compact one-pager; the single data file is easy to edit; strong project card.
- **Weaknesses**: React/Next toolchain for what is essentially static content; English only; Vercel-centric; heavy JS for animation.
- **Relevance: 4/5** for the project card and work-entry anatomy and the overall rhythm. 1/5 as a stack.

## B3. Once UI "Magic Portfolio"
- **URL / repo**: https://github.com/once-ui-system/magic-portfolio · demo https://magic-portfolio-demo.vercel.app
- **Stars**: 1,417 · forks 935 · last push 2026-10-20 · licence `NOASSERTION` on GitHub; README: **"Distributed under the CC BY-NC 4.0 License … Commercial usage is not allowed"** (SOURCE).
- **Stack**: Next.js + Once UI (`@once-ui-system/core`), MDX projects/posts, Node ≥ 20.9 (SOURCE README). OG images via next/og, RSS at `/api/rss`, **password-protected routes** (SOURCE). The route-handler and password features imply a server, so static GH Pages hosting is unlikely (inference; UNKNOWN without testing).
- **i18n**: "A localized, earlier version … with the next-intl library" on the branch `localization-(Once-UI-0.4.2)` only (SOURCE README). Mainline is English only.
- **IA** (SOURCE `once-ui.config.ts` routes): `/`, `/about` (CV), `/work`, `/blog`, `/gallery`; display location + local time + theme switcher.
- **About/CV data** (SOURCE `content.tsx`): `about.intro`, `about.work.experiences[] {company, timeframe, role, achievements[] (JSX bullets), images[] {src, alt, width, height}}`, `studies.institutions[] {name, description}`, `technical.skills[]`, `calendar.link` (cal.com), table of contents. The live `/about` returned only nav labels to the fetcher (client-rendered, OBSERVED fetch limitation).
- **Project MDX front matter** (SOURCE sample project): `title, publishedAt, summary, images[], team[] {name, role, avatar, linkedIn}, link`. Card (SOURCE `ProjectCard.tsx`): image **Carousel** (`sizes="(max-width: 960px) 100vw, 960px"`) → title / description / team AvatarGroup / "Read case study" (if `hasContent`) / external link.
- **Typography**: Geist for heading, body and label; Geist Mono for code (SOURCE config).
- **Style tokens** (SOURCE): `theme: system`, `neutral: gray`, `brand: cyan`, `accent: red`, `solid: contrast`, `border: playful`, `surface: translucent`, `scaling: 100`; background effect `dots` (opacity 40, size 2).
- **Relevance: 3/5** for visual reference (case-study page layout, team avatars, timezone chip). **Do not reuse the code** for a consulting site (licence).

## B4. Astro official "Portfolio" example
- **URL / repo**: https://github.com/withastro/astro/tree/main/examples/portfolio (withastro/astro 63k stars, shields) · `npm create astro@latest -- --template portfolio`
- **Stack**: Astro, plain CSS (no Tailwind) (SOURCE `global.css`). Build `npm run build → ./dist/`.
- **Data model** (SOURCE `src/content.config.ts`): collection `work` (glob `src/content/work/**/*.md`) with zod schema `{title, description, publishDate (date), tags: string[], img, img_alt?}`.
- **Card** (SOURCE `PortfolioPreview.astro`): a whole-card link to `/work/{id}`, `grid-template: auto 1fr / auto 1fr`, height 11rem, `border-radius: .75rem`, 1px `--gray-800` border, `--gradient-subtle` bg, title in `--font-brand` `--text-lg` 500, lazy image; hover raises the shadow.
- **Typography** (SOURCE): body **Public Sans**, brand **Rubik**; scale sm .875 / base 1 / md 1.125 / lg 1.25 / xl 1.625 / 2xl 2.125 / 3xl 2.625 / 4xl 3.5 / 5xl 4.5 rem.
- **Colors** (SOURCE): gray ramp `#090b11 … #f3f4f7 / #ffffff`, inverted under `:root.theme-dark`; accent light `#c561f6`, regular `#7611a6`, dark `#1c0056`.
- **Layout**: `.wrapper max-width: 83rem` (SOURCE).
- **i18n**: none shipped. Astro core has i18n routing (`i18n.locales`, `defaultLocale`, `routing.prefixDefaultLocale` default false, `getRelativeLocaleUrl()`), and static prerendered pages can read `Astro.currentLocale` (SOURCE docs.astro.build i18n guide).
- **Relevance: 2/5.**

## B5. Astrofy
- **URL / repo**: https://github.com/manuelernestog/astrofy · demo https://astrofy-template.netlify.app/
- **Stars**: 1,438 · **last push 2024-07-04** (stale) · MIT (OBSERVED API)
- **Stack**: Astro + Tailwind + **DaisyUI** (`themes: true`, `darkTheme: "dark"`) + typography plugin (SOURCE `tailwind.config.cjs`). Sections: Blog, CV, Projects, **Store**, RSS (SOURCE README). Left sidebar navigation.
- **CV timeline** (SOURCE `components/cv/TimeLine.astro`, `pages/cv.astro`): a flex row with a 16px `bg-primary` dot plus a 2px vertical line → `h3 font-semibold` title → `font-light text-sm` subtitle ("[start] to [end] at [Org], [City], [Country]") → justified body slot. Sections: Profile, Education, Experience, (more).
- **HorizontalCard** (SOURCE): `rounded-lg hover:shadow-xl hover:scale-[102%]` → image max-w 13rem (webp 750×422) → `h1 text-xl font-bold` + optional `badge-secondary` → description → outline tag badges linking to `/tag/{tag}`.
- **Relevance: 2/5** (the CV timeline pattern only; the project is unmaintained).

## B6. Astro Cactus
- **URL / repo**: https://github.com/chrismwilliams/astro-theme-cactus · demo https://astro-cactus.chriswilliams.dev/
- **Stars**: 1,737 · last push 2026-09-22 · MIT (OBSERVED API)
- **Stack**: "Astro v7", Tailwind v4, Pagefind, Satori OG, Expressive Code, webmentions, MD/MDX posts + notes (SOURCE README; version string as written).
- **Layout** (SOURCE `src/layouts/Base.astro`): `max-w-3xl` (768px) `px-4 sm:px-8 pt-16` **`font-mono text-sm`** (monospace body); `lang: "en-GB"`.
- **Colors** (SOURCE `global.css`, oklch): light bg `98.48% 0 0`, text `26.99% .0096 235.05`, link `55.44% .0431 185.69`, accent `55.27% .195 19.06`; dark bg `23.64% .0045 248`, text `83.54% 0 264`, link `70.44% .1133 349`, accent `70.91% .1415 163.7`. Dark via `[data-theme="dark"]` custom variant; 300ms colour transition; `@view-transition { navigation: auto }`.
- **Relevance: 2/5** (good modern token and view-transition reference; blog-focused).

## B7. Astro Nano
- **URL / repo**: https://github.com/markhorn-dev/astro-nano
- **Stars**: 951 · last push 2025-06-16 · MIT (OBSERVED API)
- **Claims**: "100/100 Lighthouse performance", "No frameworks", "Rendered in ~40ms on localhost" (SOURCE README).
- **Data model** (SOURCE `src/content/config.ts`): `blog {title, description, date, draft?}`, `work {company, role, dateStart, dateEnd (date | string)}`, `projects {title, description, date, draft?, demoURL?, repoURL?}`; homepage counts: 3 posts, 2 works, 3 projects (SOURCE `consts.ts`).
- **Layout**: container `max-w-screen-sm px-5` (640px) (SOURCE `Container.astro`); fonts **Inter** sans + **Lora** serif (SOURCE tailwind config); `darkMode: ["class"]`.
- **ArrowCard** (SOURCE): bordered row link (`border-black/15 dark:border-white/20 rounded-lg py-3 px-4 pr-10`) → title `font-semibold` + description `text-sm` (truncate) → an animated arrow that draws its shaft on hover (300ms).
- **Relevance: 3/5.** The best "compact list card" for a no-image project list, and an honest minimal data model (demoURL/repoURL).

## B8. Hugo Blowfish / Congo
| | Blowfish | Congo |
|---|---|---|
| Repo | github.com/nunocoracao/blowfish | github.com/jpanther/congo |
| Stars (API) | 2,913 · push 2026-10-21 | 1,655 · push 2026-08-01 |
| Stack | Hugo + Tailwind **4**; compiled CSS committed (`assets/css/compiled/main.css`, 157 KB, OBSERVED), so users need only Hugo | Hugo + Tailwind 3; compiled CSS committed (63 KB, OBSERVED) |
| Features (SOURCE README) | Dark mode (forced/auto + toggle), "Floating glass header with ⌘K / Ctrl+K search", **multilingual incl. RTL**, Fuse.js search, "perfect Lighthouse scores" claim | Multiple colour schemes, dark mode, multilingual incl. RTL, Fuse.js search, "perfect Lighthouse scores" claim |
| Turkish | `i18n/tr.yaml` present (OBSERVED 200) | `i18n/tr.yaml` present (OBSERVED 200) |
| Defaults (SOURCE Blowfish `params.toml`) | `colorScheme = "blowfish"`, `defaultAppearance = "light"`, `autoSwitchAppearance = true`, `enableSearch = true` | UNKNOWN |
| Publications | none native | none native |
| Relevance | 2/5 | 2/5 |

## B9. Framer portfolio templates (visual reference only)
- No source exists to fetch (closed SaaS). The search found only affiliate roundups, with no usage or sales data. Recurring names: Sawad, DeskTales, Badejo, Gerro, Nana Studio, Avalon, Brickfolio, Agentic, Athos 2.0 (sitebuilderreport, updated 2026-01-07); Nakula, Fabrica, Xtract, Vectura, Refit (veloxthemes); Dashfolio+, Cyberfolio as Reddit favourites (templifica). All are designer- or freelancer-oriented. **No values were extracted (UNKNOWN).** A guideline from templifica (SOURCE article summary): show 3–6 curated projects, each with a thumbnail, a one-line description, and a case study or live demo link.
- **Relevance: 1/5.** Not a code source. Possible mood reference only.

---

# (a) Comparison table

Legend: ✅ yes / native · ◐ partial or needs work · ❌ no. "Maint." = how easily a non-frontend person can maintain it (1 = hard, 5 = easy).

| Template | Build step | GH Pages | i18n (TR+EN) | Dark mode | Publications | Project case studies | Performance (evidence) | Maint. |
|---|---|---|---|---|---|---|---|---|
| al-folio | Ruby/Jekyll + gems, via Actions | ◐ Actions → gh-pages | ❌ (fork with polyglot ◐) | ✅ 3-state | ✅✅ BibTeX, Abs/Bib, badges, selected | ✅ project pages + categories | Lighthouse D 95 / M 92 perf (SOURCE svg) | 2 |
| Academic Pages | Jekyll (whitelisted plugins) | ✅ | ◐ TR UI strings only | ✅ vars | ◐ MD per paper, plain links | ◐ portfolio pages | UNKNOWN | 4 |
| HugoBlox Academic CV | Hugo + Go + pnpm + Tailwind + Pagefind | ◐ | ✅ Hugo multilingual (TR partly translated) | ✅ + theme picker | ✅✅ richest schema, Cite modal | ✅ projects↔pubs | UNKNOWN | 2 |
| Jon Barron | **none** | ✅ | ❌ | ❌ | ✅ hand-written rows, hover media, TL;DR | ❌ (links out) | trivially fast (no JS framework; not measured) | 3 (HTML edits) |
| Academic Project Page | **none** | ✅ | ❌ | UNKNOWN | per-paper page + BibTeX copy | ✅ (per paper) | UNKNOWN | 4 |
| AcadHomepage | Jekyll + Action crawler | ✅ | ❌ | UNKNOWN | ✅ paper-box + live citations | ❌ | UNKNOWN | 4 |
| Minimal Mistakes | Jekyll remote_theme | ✅✅ | ◐ TR UI strings | ◐ skins | ❌ | ◐ | UNKNOWN | 4 |
| PaperMod | Hugo only (no Node) | ✅ | ✅ (tr.yaml) | ✅ | ❌ | ◐ posts | "near-perfect" claim | 3 |
| Quarto | Quarto CLI | ✅ (3 methods) | ◐ per-doc lang | ✅ pair + toggle | ◐ YAML listings | ✅ | UNKNOWN | 3 |
| Vercel starter | Next.js | ❌/UNKNOWN | ❌ | ✅ system | ❌ | ◐ MDX | Speed Insights built in, no score | 2 |
| dillionverma | Next.js + motion | ❌ (headers() blocks export) | ❌ | ✅ toggle | ❌ | ◐ cards link out | UNKNOWN | 3 (one data file) |
| Magic Portfolio | Next.js + Once UI | ❌ likely | ◐ old branch next-intl | ✅ | ❌ | ✅✅ MDX case studies | UNKNOWN | 3 |
| Astro Portfolio ex. | Astro | ◐ Action | ◐ Astro core i18n, not wired | ✅ | ❌ | ✅ | UNKNOWN | 2 |
| Astrofy | Astro + DaisyUI | ◐ | ❌ | ✅ (DaisyUI) | ❌ | ◐ | UNKNOWN (stale since 2024-07) | 2 |
| Astro Cactus | Astro + Tailwind 4 | ◐ | ❌ | ✅ | ❌ | ❌ blog | UNKNOWN | 2 |
| Astro Nano | Astro + Tailwind | ◐ | ❌ | ✅ | ❌ | ◐ | "100/100" claim | 3 |
| Blowfish / Congo | Hugo only | ✅ | ✅ (tr.yaml) | ✅ | ❌ | ◐ | "perfect Lighthouse" claim | 3 |

---

# (b) Recommendation: what to borrow from

mozdemir.com's constraints are: no build step, GitHub Pages, TR at `/` and EN at `/en/`, a mixed academic and industry profile, and an owner who is not a frontend specialist. None of the large templates satisfies all of these at once. **Recommendation: stay hand-built static HTML/CSS (optionally one small vanilla-JS renderer for JSON data) and borrow patterns from three sources.**

1. **Jon Barron template → overall information architecture, density and the publication row.** It is the only top-tier academic template that is itself a no-build static page, so every idea transfers without tooling. It is the recognised "AI researcher" visual idiom: name + one-paragraph bio + slash-separated link row (Email / CV / Scholar / GitHub / LinkedIn), then papers with a media thumbnail and a one-line TL;DR. Re-implement it with semantic markup, CSS grid, a `prefers-color-scheme` dark theme and `:hover`/`:focus-visible` media swaps instead of tables and inline JS (the repo has no licence file; the author invites cloning "for your own personal use").
2. **al-folio → publication-item behaviour and metadata.** Copy its venue badge, self-author emphasis, author truncation, Abs/Bib toggles (do them with `<details>`, which needs no JS), the ordered button row, "selected papers" on the home page, a dated news table, and the BibTeX-as-source-of-truth idea (a `papers.bib` or `publications.json` kept in the repo and offered for download). Add from **HugoBlox** the schema fields al-folio lacks: `publication_types` / status (peer-reviewed vs preprint vs under review), `awards`, and `projects[]` cross-links. These matter for a profile with published plus under-review AutoML papers and production systems.
3. **dillionverma/portfolio → project card and experience entry** (with Astro Nano's ArrowCard as the compact fallback). Its card anatomy is the strongest industry-side pattern found: media (video preferred) → overlaid link pills → title + dates + ↗ → short Markdown summary → tech tags pinned to the bottom. Its single-data-file idea (`resume.tsx`) maps cleanly to a `data/{tr,en}/*.json` approach, which gives bilingual content without a framework.

**Secondary:**
- The **Academic Project Page Template** (5.3k stars, no build) can be used as-is for 1–2 flagship AutoML paper pages, e.g. `/papers/<slug>/` with a BibTeX copy button and Scholar meta tags.
- **PaperMod's** grayscale token set and 720px reading width are a safe, neutral base palette and measure.
- **If a build step ever becomes acceptable**, the shortest route to TR/EN plus publications is Hugo (PaperMod or Blowfish need only the Hugo binary, both ship `tr.yaml`, and both deploy via Actions), with a custom publications partial modelled on (c) below. HugoBlox gives the most out of the box but carries the heaviest toolchain. al-folio would need the polyglot fork.

**Avoid as a code base:**
- Magic Portfolio (CC BY-NC licence vs consulting use).
- dillionverma and the Vercel starter (Next.js; not GH-Pages-exportable as shipped).
- Astrofy (unmaintained since 2024-07).
- Astro academic themes (under 600 stars, immature).

---

# (c) Anatomy specs

## C1. Best publication-list item (synthesised: al-folio + Jon Barron + HugoBlox + AcadHomepage)

**Data (one record per paper, per language where text differs):**
```yaml
id: ozdemir2025automl-x            # also the BibTeX key and anchor (#ozdemir2025automl-x)
title: "…"
authors:                           # ordered; self flagged, not string-matched
  - {name: "Muhammet Özdemir", self: true, equal: false, url: null}
  - {name: "A. Coauthor", equal: false, url: "https://…"}
author_notes: ["*Equal contribution"]          # optional (HugoBlox)
venue: {name: "…Conference on…", short: "GECCO", year: 2025, month: 7}
type: conference | journal | workshop | preprint | thesis   # CSL-like (HugoBlox publication_types)
status: published | accepted | under-review | preprint      # NEW: needed for this client
peer_reviewed: true
awards: [{name: "Best Paper Nominee"}]          # optional (HugoBlox awards / al-folio award)
selected: true                                  # shown on home (al-folio `selected`)
thumb: {img: "/assets/pubs/x.webp", hover: "/assets/pubs/x.mp4", alt: "…"}  # Barron hover-swap
tldr: {tr: "…", en: "…"}                        # one sentence (Barron)
abstract: {tr: null, en: "…"}                   # collapsible (al-folio `abstract`)
links: {pdf, arxiv, doi, code, project, slides, poster, video, dataset}      # typed (HugoBlox link_types)
bibtex: "@inproceedings{…}"                     # collapsible + copy (al-folio Bib, project-page copy button)
projects: ["kyc-face-match"]                    # cross-link to project cards (HugoBlox projects[])
scholar_id: "…"                                 # optional live citation count (al-folio / AcadHomepage)
```

**Rendered anatomy (desktop ≥ 720px; 2-column grid `160px 1fr`, gap 16–20px; stacks on mobile):**
1. **Left rail (160px)**: thumbnail 160×120 to 160×160, `border-radius` 6–8px, `object-fit: cover`. On `:hover` / `:focus-within` it cross-fades (`opacity .2s ease-in-out`, Barron) to the `hover` media. Respect `prefers-reduced-motion` (no autoplay). Above or overlaying it sits the **venue badge** (al-folio `abbr`): short venue + year, e.g. `GECCO '25`, small caps or 12px semibold, solid accent fill. For `under-review` the badge is an outlined, neutral "Under review / Değerlendirmede" badge, so peer-reviewed and pending work are never confused.
2. **Title**: 16–17px semibold, the link goes to `links.project` or `links.pdf` (Barron `.papertitle`, al-folio `.title` bolder).
3. **Authors**: 14px. Self rendered as `<strong>` (Barron) or underline (al-folio `em` + 1px border-bottom). Pick one; bold reads better on mobile. Co-authors link when `url` exists. Equal-contribution marks are `<sup>`. Truncate after N = 5 with a `<button>` "+K more" (al-folio uses 3 plus animated reveal; use a plain toggle).
4. **Venue line**: italic venue name, year · status chip if not `published` · award chip (al-folio `award` / HugoBlox award badge).
5. **TL;DR**: one sentence, 14px muted colour (Barron, AcadHomepage bullet). This is the key differentiator vs. al-folio, which has none.
6. **Action row**: compact outline buttons (al-folio `.links a.btn`: 1px border, padding .25rem .75–1rem, hover → accent) in a **fixed order**: `PDF · arXiv · Code · Project · Slides · Video · DOI · Abstract ▾ · BibTeX ▾`. Hide buttons with no URL. Labels are bilingual (`Özet`/`Abstract`, `Kod`/`Code`, `Kaynakça (BibTeX)`/`BibTeX`).
7. **Collapsibles** (al-folio hidden blocks): use native `<details>` for Abstract and BibTeX, so no JS is required. Text 14px, line-height 1.4–1.6. BibTeX is shown in `<pre>` with a **Copy** button (project-page template) as the single JS enhancement, plus `aria-live` feedback ("Kopyalandı / Copied").
8. **Optional metrics**: a citation count chip only if updated automatically (al-folio scheduled workflow or AcadHomepage crawler). Otherwise omit it; stale numbers hurt credibility.
9. **List-level features**: group by year with right-aligned muted year headings (al-folio `h2.bibliography`); a "Selected" subset on home; a filter row for type (Conference / Journal / Preprint / Under review) plus a text filter (al-folio `bib_search`, Quarto `filter-ui`), as progressive enhancement; `id` anchors per paper; a "Download all (.bib)" link.

## C2. Best project card (synthesised: dillionverma ProjectCard + al-folio + Magic Portfolio + Astro Nano)

**Data:**
```yaml
slug: kyc-face-match
title: {tr: "…", en: "…"}
role: {tr: "Baş ML Mühendisi", en: "Lead ML Engineer"}       # NEW: industry context
org: "…" | "Freelance" | "Personal" | "Research"             # context chip
dates: "2023 – 2024" | "2024 – present"; active: true          # dillion `dates`, `active`
summary: {tr: "…", en: "…"}                                   # ≤ 2 lines (dillion description)
outcome: {tr: "…", en: "…"}                                   # NEW: one metric line, e.g. "↓38% manual review"
tags: ["PyTorch","ONNX","FastAPI","ROS"]                      # dillion technologies → outline badges
media: {img: "/assets/projects/kyc.webp", video: "/assets/projects/kyc.mp4", alt: "…"}
links: [{type: "Code", href: "https://github.com/…"}, {type: "Demo", href: "…"}, {type: "Paper", href: "#pub-id"}]
case_study: "/project-kyc.html"                               # Magic Portfolio `hasContent`
confidential: false                                           # NEW: NDA-safe card (no links, blurred media)
github: "user/repo"                                           # optional live stars (al-folio github_stars)
category: industry | research | robotics | consulting         # al-folio categories → filter tabs
importance: 1                                                 # al-folio sort key
```

**Rendered anatomy (grid: 1 column mobile, 2 columns ≥ 720px; card fills height):**
1. **Container**: `display:flex; flex-direction:column; height:100%`, 1px border (neutral 10–15% alpha), radius 12px (`rounded-xl`, dillion), `overflow:hidden`. Hover/focus gets a 2px muted ring plus a slight shadow, `transition 200ms` (dillion). The whole card is one link to `case_study` when present (al-folio, Astro example). Secondary links stay separately focusable.
2. **Media (aspect 16:9, or fixed 192px `h-48` as in dillion)**: `object-fit: cover`. Video `muted loop playsinline` plays only on hover/visibility and not under `prefers-reduced-motion`; otherwise a WebP poster. Fallback: neutral muted block with the project initial. A confidential project gets an abstract illustration, never screenshots.
3. **Link pills overlaid top-right** (dillion `absolute top-2 right-2`): small dark pills with icon + label (`Code`, `Demo`, `Paper`), max 3.
4. **Body (padding 20–24px, gap 10–12px)**:
   - Row 1: **title** (16px semibold) + **↗ icon** at right (dillion ArrowUpRight, `aria-label="Open …"`).
   - Row 2: **meta line** 12–13px muted: `role · org · dates` with an "Active / Sürüyor" dot when `active`.
   - Row 3: **summary**, 14px, line-height 1.5–1.6, muted, clamped to 3 lines.
   - Row 4: **outcome line** (new): one quantified result in body colour with a leading arrow or metric chip. This is the main industry signal and is missing from every template studied.
   - Row 5 (pinned bottom, `margin-top:auto`): **tech tags** as outline badges, 11–12px, height 24px, padding 0 8px (dillion `text-[11px] h-6 px-2`).
5. **Compact variant** (lists, CV page, or many items): Astro Nano ArrowCard. A single bordered row with title + one-line description and an animated arrow on hover, no media.
6. **Grid-level**: category filter tabs (al-folio `display_categories`) for Industry / Research / Robotics / Consulting, with an "All" default and progressive enhancement. Sort by `importance`. Feature 3–6 on the home page (templifica guideline; Astro Nano shows 3).

---

# (d) All URLs fetched or queried

**GitHub REST API (repo metadata; star counts, OBSERVED 2026-10-21)**: api.github.com/repos/ for alshedivat/al-folio, academicpages/academicpages.github.io, HugoBlox/theme-academic-cv (→ HugoBlox/hugo-theme-academic-cv), HugoBlox/hugo-blox-builder (→ HugoBlox/kit), HugoBlox/kit, wowchemy/starter-hugo-academic (→ hugo-theme-academic-cv), jonbarron/website (→ jonbarron/jonbarron.github.io), mmistakes/minimal-mistakes, adityatelange/hugo-PaperMod, vercel/examples, dillionverma/portfolio (→ magicuidesign/portfolio), once-ui-system/magic-portfolio, manuelernestog/astrofy, chrismwilliams/astro-theme-cactus, markhorn-dev/astro-nano, nunocoracao/blowfish, jpanther/congo, RyanFitzgerald/devportfolio (4,985 stars, not profiled), pages-themes/minimal (1,815, not profiled); contents listings for al-org-dev/al-folio-core (root, _layouts, _sass, _includes), academicpages (root, _publications, _portfolio, _sass, _sass/theme, _includes, _data, _pages, markdown_generator, _sass/include, _sass/layout), HugoBlox/hugo-theme-academic-cv (root, config, config/_default, content, content/publications, content/publications/conference-paper, content/projects, data, data/authors), jonbarron/jonbarron.github.io (root), HugoBlox/kit/modules; api.github.com/rate_limit.

**shields.io star / last-commit JSON**: img.shields.io/github/stars/{quarto-dev/quarto-cli, vercel/examples, withastro/astro, dillionverma/portfolio, magicuidesign/portfolio, HugoBlox/kit, jonbarron/jonbarron.github.io, yaoyao-liu/minimal-light (1k), eliahuhorwitz/Academic-project-page-template, RayeRen/acad-homepage.github.io, luost26/academic-homepage (720), nunocoracao/blowfish, jpanther/congo, wowthemesnet/mediumish-theme-jekyll (1.4k), jxpeng98/astro-theme-scholars, shravanngoswamii/astro-scholar, dadangnh/as-folio, AI-mouse/PRISM (0), sbryngelson/academic-website-template, RomanHauksson/academic-project-astro-template, george-gca/multi-language-al-folio, leonidk/new_website}.json and img.shields.io/github/last-commit/… for the same set plus the main templates.

**raw.githubusercontent.com source files (SOURCE)**:
- alshedivat/al-folio/main: README.md, _config.yml, _bibliography/papers.bib, _projects/1_project.md, _pages/{projects,publications,about,cv,news}.md, _data/socials.yml, _news/announcement_1.md, docs/INSTALL.md, lighthouse_results/{desktop,mobile}/pagespeed.svg
- al-org-dev/al-folio-core/main: tailwind.config.js, _layouts/bib.liquid, _sass/{_variables,_themes,_publications,_typography,_layout}.scss, _includes/{projects,news,selected_papers,bib_search}.liquid
- george-gca/multi-language-al-folio/main: README.md, _config.yml
- academicpages/academicpages.github.io/master: README.md, _config.yml, _publications/2024-02-17-paper-title-number-4.md, _portfolio/portfolio-1.md, _includes/archive-single.html, _sass/theme/_default_light.scss, _sass/theme/_default_dark.scss, _sass/_themes.scss, _pages/publications.html, _pages/cv.md, _data/navigation.yml, _data/ui-text.yml
- mmistakes/minimal-mistakes/master: README.md, _sass/minimal-mistakes/_variables.scss, skins/_dark.scss, skins/_default.scss
- jonbarron/jonbarron.github.io/master: README.md, index.html, stylesheet.css
- HugoBlox/hugo-theme-academic-cv/main: README.md, config/_default/{hugo,languages,params,module}.yaml, content/_index.md, content/publications/conference-paper/index.md, content/experience.md, package.json, hugoblox.yaml, netlify.toml
- HugoBlox/kit/main/modules/blox: data/fonts/academic.yaml, data/themes/default.yaml, data/languages.yaml, data/link_types.yaml, i18n/tr.yaml, layouts/_partials/views/{citation,card,article-grid}.html
- adityatelange/hugo-PaperMod/master: README.md, assets/css/core/{theme-vars,reset}.css, assets/css/common/{main,post-single,post-entry,header}.css, i18n/tr.yaml
- vercel/examples/main/solutions/blog: README.md, package.json, app/{layout.tsx,global.css,page.tsx}, app/components/{nav,posts,footer}.tsx, app/blog/utils.ts
- dillionverma/portfolio/main: README.md, package.json, src/data/resume.tsx, src/app/{layout.tsx,page.tsx,globals.css}, src/components/{project-card,navbar}.tsx, next.config.mjs
- once-ui-system/magic-portfolio/main: README.md, package.json, LICENSE, src/resources/{once-ui.config.ts,content.tsx,index.ts}, src/components/ProjectCard.tsx, src/app/work/projects/automate-design-handovers-with-a-figma-to-code-pipeline.mdx
- withastro/astro/main/examples/portfolio: README.md, package.json, src/styles/global.css, src/components/PortfolioPreview.astro, src/content.config.ts
- manuelernestog/astrofy/main: README.md, tailwind.config.cjs, package.json, src/pages/cv.astro, src/components/HorizontalCard.astro, src/components/cv/TimeLine.astro
- chrismwilliams/astro-theme-cactus/main: README.md, src/styles/global.css, package.json, src/site.config.ts, src/layouts/Base.astro
- markhorn-dev/astro-nano/main: README.md, tailwind.config.mjs, src/consts.ts, src/styles/global.css, src/content/config.ts, src/components/{Container,ArrowCard}.astro
- nunocoracao/blowfish/main: README.md, i18n/tr.yaml, assets/css/compiled/main.css, config/_default/params.toml
- jpanther/congo/dev: README.md, i18n/tr.yaml, assets/css/compiled/main.css
- RayeRen/acad-homepage.github.io/main: README.md, _pages/about.md
- eliahuhorwitz/Academic-project-page-template/master: README.md, index.html

**WebFetch (live pages and docs)**:
- https://alshedivat.github.io/al-folio/publications/
- https://dillion.io/
- https://magic-portfolio-demo.vercel.app/about
- https://jonbarron.info/
- https://academic-demo.netlify.app/
- https://lilianweng.github.io/ (curl)
- https://quarto.org/docs/websites/website-about.html
- https://quarto.org/docs/websites/website-listings.html
- https://quarto.org/docs/publishing/github-pages.html
- https://quarto.org/docs/output-formats/page-layout.html
- https://quarto.org/docs/output-formats/html-themes.html
- https://docs.astro.build/en/guides/internationalization/
- https://nextjs.org/docs/app/guides/static-exports
- https://hugoblox.com/docs/
- https://github.com/HugoBlox/kit/tree/main/modules/blox/data
- https://github.com/HugoBlox/kit/tree/main/modules/blox/data/fonts
- https://astro.build/themes/details/scholarly/
- https://astro.build/themes/details/astro-scholar/
- https://astro.build/themes/details/as-folio

**Web searches**: "astro academic homepage template publications bibtex github researcher"; "Framer most popular portfolio templates 2026 developer researcher personal site". Results cited: sitebuilderreport.com/framer-templates-for-portfolios, veloxthemes.com/blog/best-framer-templates, templifica.com/blog/7-sections-every-developer-portfolio-needs-to-convert-in-2026, framerwebsites.com/blog/best-framer-templates-portfolio, github.com/AI-mouse/PRISM, github.com/sbryngelson/academic-website-template, sourcepulse.org (academic-project-astro-template).

## Failed or limited fetches (reported, not papered over)
- al-folio main repo `_sass/_variables.scss`, `_sass/_themes.scss`, `_sass/_base.scss`, `_layouts/bib.liquid`, `_layouts/about.liquid`, `_includes/projects*.liquid` returned **404**. They moved to `al-org-dev/al-folio-core` in v1.x and were fetched there successfully.
- `jonbarron/jonbarron.github.io` on branch `main` returned **404** for all files; `master` succeeded.
- `eliahuhorwitz/Academic-project-page-template` `main/README.md` returned **404**; `master` succeeded.
- dillionverma: `src/components/resume-card.tsx`, `hackathon-card.tsx`, `tailwind.config.ts`, `next.config.ts` returned **404** (files moved or renamed; work-entry anatomy taken from data + live page instead).
- HugoBlox: `data/fonts/academic.toml`, `data/themes/default.toml`, `layouts/partials/views/citation.html` returned **404** (YAML and `_partials` variants succeeded). `docs.hugoblox.com/reference/customization/` gave a **301** to `hugoblox.com/docs/`, which had no typography details. The first `citation.html` download was overwritten by a 404 loop and was re-fetched successfully.
- GitHub API: **rate limit exceeded** (60/h unauthenticated) mid-research. The `HugoBlox/kit` code search and recursive tree failed; the rest was switched to shields.io (rounded counts) and github.com HTML listings.
- `leonids/astro-academic-homepage` and `sharadcodes/jekyll-theme-researcher`: **Not Found** (guessed names; no such repos).
- Magic Portfolio `/about` live page is client-rendered: the fetch returned only nav labels (no sections), so the anatomy comes from `content.tsx` (SOURCE).
- al-folio live publications page: the `bib_search` input was not visible in fetched text (probably JS-injected, UNKNOWN).
- `gh` CLI is not installed in this environment, so plain curl was used.
- Not measured: no Lighthouse runs were performed in this research. All performance values are template-author claims (SOURCE) or UNKNOWN.
