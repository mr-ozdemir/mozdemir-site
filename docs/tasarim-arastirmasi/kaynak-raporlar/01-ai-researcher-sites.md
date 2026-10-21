# 01 — How AI/ML researchers and ML engineers design personal websites

Survey date: 2026-10-21. Prepared to inform the redesign of **mozdemir.com** (Muhammet Özdemir — AutoML researcher + production CV engineer, bilingual TR/EN; audience: recruiters, PhD committees/academics, freelance clients).

## Method and evidence tags

- Every homepage was downloaded with `curl` (raw HTML), and the linked stylesheets were downloaded and grepped for real values. For 11 pages, `WebFetch` was also used to get a rendered-content summary. All raw files are in `scratchpad/research/raw/`.
- **SOURCE** = read directly from the site's served HTML/CSS/JS or theme source code (exact value).
- **OBSERVED** = inferred from page content/structure (text, DOM order, element counts), not a CSS value.
- **UNKNOWN** = not verifiable with the fetched material.
- "Clicks" = number of clicks from the homepage to reach the item (0 = on the homepage).
- Page weight numbers are the **HTML document only** (bytes of the HTML response), plus counts of `<script>` and `<img>` tags in it (SOURCE). Not full page weight.
- Hidden text aimed at LLM scrapers exists on some pages (Karpathy, Beyer). It is noted as a design observation only and was not treated as content.

---

## Part A — Site cards

### 1. Andrej Karpathy — https://karpathy.ai
- **Fetched:** yes (HTML + `style.css`, 4,357 bytes). No public repo used; the CSS is tiny and was read in full.
- **Profile type:** mixed (ex-Tesla/OpenAI, educator). Goal: one-page identity hub that points to YouTube, GitHub and X.
- **Information architecture (SOURCE/OBSERVED):** **No nav bar.** One long page. Section order: header (photo + name + tagline + icon row) → `<hr>` → vertical **timeline** (7 entries, 2024– back to 2005) → "bio" (third-person paragraph, ready to copy) → "featured talks" (≈22 thumbnail cards on a grey `#eee` band) → "teaching" → "featured writing" → "pet projects" → "publications" (≈11) → "misc unsorted". Clicks: project 0, paper 0, CV: none (no CV link, Scholar link only).
- **Above the fold (SOURCE):** 240×240 round photo (border-radius 120px) on the left half; on the right, `h1` "Andrej Karpathy" and italic grey `h2` "I like to train deep neural nets on large datasets 🧠🤖💥". Icon row (40×40 SVGs): Twitter, GitHub, three blog icons, and an email icon that reveals a ROT13-obfuscated address on click (`opacity` transition 0.7s). No CTA buttons.
- **Projects (SOURCE):** `.project` rows: an 80px-tall thumbnail floated left (`border-radius:5px; border:1px solid #999`) plus a paragraph whose first words are the linked project name (micrograd, char-rnn, arxiv-sanity, neuraltalk2, ConvNetJS, ulogme). No tags and no dates.
- **Publications (SOURCE):** `.pub` blocks with a 4px `#aaa` left border, 14px. Title link, then the venue inline in **green `#090`** (e.g. "CVPR 2016 (Oral)"), then authors on their own line. His own name is **not** highlighted. No thumbnails. Not grouped. Scholar link at the end.
- **Experience/CV:** on-site **timeline** only. Each entry = right-aligned year span (14px, `#bbb`) | logo (max 80px) on a 2px `#cfcfcf` vertical rule with a 10px dot | description (17px). No PDF CV.
- **Typography (SOURCE):** `font-family: sans-serif` (system default), body 16px / 1.4, `#333`. h1 34px normal weight. h2 18px italic `#999` (max-width 300px). Section titles `.ctitle` 36px, lowercase. Card captions 15px (14px on mobile).
- **Color (SOURCE):** white background, text `#333`, greys `#999 #bbb #cfcfcf #eee #ddd`, venue green `#090`. Links use browser-default blue (no link color is set). **No dark mode.**
- **Layout (SOURCE):** `.container` is 970px wide at ≥992px with 15px side padding. 12-column CSS grid (`.row{display:grid;grid-template-columns:repeat(12,1fr)}`). Timeline: 1 col year / 1 col icon / 10 col description. Talk cards span 3 columns (4 per row), and 6 columns (2 per row) below 992px. The `hr` is a gradient line that fades at both ends.
- **Imagery & motion:** about 50 `<img>` (SOURCE count): logos, talk thumbnails, project thumbnails. The only motion is the email fade.
- **Mobile/performance (SOURCE):** has a viewport meta. At ≤991px the header stacks and centers. HTML 34 KB, 1 inline script, zero frameworks. The footer says it is deliberately "two static files".
- **Wayfinding:** Strong. The page reads top-down as a career story. Weak: no anchors/nav, so long scrolls to reach publications, and the "misc" section is a dumping ground.
- **Note:** There is a `display:none` "bio" div containing joke text aimed at LLM scrapers (SOURCE).
- **Relevance: 4/5.** Borrow: (1) a logo timeline as the on-page CV, (2) a "bio" paragraph ready to paste for event organizers, (3) project rows = thumbnail + name-as-link + 2 sentences, (4) a compact publication block with a colored venue label, (5) a 12-column grid that collapses at 992px.

### 2. Lilian Weng — https://lilianweng.github.io ("Lil'Log")
- **Fetched:** yes (HTML + compiled PaperMod CSS `stylesheet.min.*.css`, 15 KB). Theme: **Hugo 0.163.3 + PaperMod** (SOURCE: generator meta + footer "Powered by Hugo & PaperMod").
- **Profile type:** academic-leaning industry researcher (blog-first). Goal: long-form technical blog.
- **IA (SOURCE):** Header: logo "Lil'Log", theme toggle, then nav **Posts · Archive · Search (Alt+/) · Tags · FAQ**. Homepage = "👋 Welcome to Lil'Log" + one-line intro + social icons (Twitter, Scholar, RSS, GitHub, Instagram) → 10 post cards → pagination "»". There is no About/CV/Projects page; the FAQ (e.g. "What tool do you use for plotting?") stands in for About. Clicks: paper → Scholar (external); CV: none.
- **Above the fold:** No photo. Text-only welcome card.
- **Projects/Publications:** None on site (Scholar icon only). Post card fields (SOURCE/OBSERVED): title (h2 24px/1.3), 2-line clamped excerpt (14px, `--secondary`), footer "date · N min · Lilian Weng".
- **Typography (SOURCE):** system stack `-apple-system, BlinkMacSystemFont, segoe ui, Roboto, Oxygen, Ubuntu, Cantarell, open sans, helvetica neue, sans-serif`. 16px / 1.6. Logo 24px bold. Home h1 34px/1.3. Post title 36px. Post h1 28 / h2 24 / h3 18. TOC 15px.
- **Color (SOURCE, PaperMod tokens):** light `--theme rgb(255,255,255)`, `--entry #fff`, `--primary rgb(30,30,30)`, `--secondary rgb(108,108,108)`, `--tertiary rgb(214,214,214)`, `--content rgb(31,31,31)`, `--code-bg rgb(245,245,245)`, `--border rgb(238,238,238)`. **Dark** `.dark`: `--theme rgb(29,30,32)`, `--entry rgb(46,46,51)`, `--primary rgb(218,218,219)`, `--secondary rgb(155,156,157)`, `--content rgb(196,196,197)`, `--border rgb(51,51,51)`. **Dark mode: yes.** A sun/moon toggle stores `localStorage "pref-theme"` and falls back to `prefers-color-scheme` (SOURCE).
- **Layout (SOURCE):** `--main-width:720px`, `--nav-width:1024px`, `--gap:24px` (14px ≤768px), `--radius:8px`, header/footer 60px. Post cards have a 1px border, 8px radius and 24px padding. Single column.
- **Imagery & motion:** no images on the homepage (0 `<img>`). The card `transform .1s` press effect is disabled under `prefers-reduced-motion`.
- **Mobile/performance:** HTML 26 KB, 9 scripts (mostly analytics/theme). Static.
- **Wayfinding:** Excellent for a blog (search with a keyboard shortcut, tags, archive). Poor for "who is she / what has she published".
- **Relevance: 2/5.** Borrow: the PaperMod token set as a proven dark/light palette, keyboard-shortcut search, and the reading-time meta line for blog posts.

### 3. Chip Huyen — https://huyenchip.com
- **Fetched:** yes (HTML + `/assets/main.css`, 12.7 KB). **Jekyll 3.10.0** (SOURCE generator). The CSS is Minima-derived (`.wrapper`, `.site-header`, `.post-link`).
- **Profile type:** industry + author/educator. Goal: author/consultant hub.
- **IA (SOURCE):** Nav: **Blog · Books · Events · AI Guide ▾ (AI Roadmap, Good AI List, ML Interviews) · List 100 · Chip's Lib · VN**. The homepage is **pure prose** (8 short paragraphs) with inline links to work, books, GitHub and Scholar, ending in "Reach out if you want to find a way to work together!" Clicks: projects 0 (inline links), papers → Scholar, CV: none.
- **Above the fold (SOURCE):** Round photo floated right (`max-width:33%; border-radius:999px`). First line "I'm Chip Huyen, a writer and computer scientist. I grew up chasing grasshoppers in a small rice-farming village in Vietnam." Then the career summary (NVIDIA NeMo, Snorkel, Netflix, founded/sold a company).
- **Projects/Publications:** Inline prose only, with no list or cards. Books get social-proof phrases ("Amazon #1 bestseller in AI", "most read book on the O'Reilly platform in 2025").
- **Bilingual (SOURCE):** The nav item **"VN"** links to `https://huyenchip.com/vn/`, a separate Vietnamese section. It is the only real second-language section in this survey.
- **Typography (SOURCE):** `@import Lora`. `body{font:400 16px/1.5 "Lora",serif}`. Headings weight 400. Site title 26px. Post title 42px/1 with -1px tracking (36px ≤800px). Post h2 32 / h3 26 / h4 20. Meta 14px `#828282`.
- **Color (SOURCE):** background `#fdfdfd`, text `#111`, link `#4d74eb`, visited `#1337a6`, hover `#111` with underline, borders `#e8e8e8`, code background `#eef`. **No dark mode** (0 `prefers-color-scheme`).
- **Layout (SOURCE):** `.wrapper{max-width:calc(800px - 15px)}` with 15px padding (7.5px ≤800px). Header 55.95px. The hamburger appears at ≤600px. Fixed TOC sidebar on posts (`max-width:290px`).
- **Imagery:** one photo. Lightbox2 + jQuery loaded (SOURCE).
- **Mobile/performance:** HTML 24.6 KB, 9 scripts (jQuery twice, from Google CDN and cdnjs).
- **Wayfinding:** The homepage is warm and personal, but a recruiter has to read paragraphs to find things. The nav is content-type-driven.
- **Relevance: 3/5.** Borrow: (1) a language switch as a top-level nav item ("VN" → for us "TR/EN"), (2) a short personal-origin line for warmth, (3) a closing collaboration CTA ("Reach out…") aimed at freelance clients, (4) social-proof phrases attached to each artifact.

### 4. Jay Alammar — https://jalammar.github.io
- **Fetched:** yes (HTML + `/style.css`, 157 KB incl. bootstrap-ish/ecco styles). **Jekyll Now** theme (SOURCE: "Jekyll Now"/barryclark credit in HTML; `.masthead`, `.site-avatar` classes).
- **Profile type:** industry educator (Cohere). Goal: visual explainer blog and book promo.
- **IA (SOURCE):** Nav: **Blog · About**. Header: 70×70 avatar (5px radius) + site name "Jay Alammar" (28px, weight 300, letter-spacing 1px) + description "Visualizing machine learning one concept at a time." + book promo (*Hands-On Large Language Models*) + social links. Homepage: reverse-chronological posts (≈26) with hero image/GIF/video, summary and "Read More". The top post is a pinned notice ("Moving To Substack").
- **Projects/Publications:** None. The "Illustrated …" series acts as the portfolio. The footer has CC BY-NC-SA 4.0 and a sample citation for *The Illustrated Transformer*.
- **Typography (SOURCE):** `body{font:18px/1.4 Helvetica, Arial, sans-serif; color:#222}`. Headings "Helvetica Neue" bold, line-height 1.7. h1 30 / h2 24 / h3 20. Nav 18px weight 300.
- **Color (SOURCE):** white background, `#222` text, link `#4183C4`, borders `#eee`. **No dark mode** (0 `prefers-color-scheme`).
- **Layout (SOURCE):** `.container{max-width:960px}` ("originally 740" comment). Breakpoint 640px.
- **Imagery & motion:** 23 `<img>` on the homepage, animated GIFs (jquery.gifplayer), D3, KaTeX, interactive explorables. Imagery is the brand.
- **Mobile/performance:** HTML 72 KB, 16 scripts (require.js, d3, bootstrap, jQuery, an old `http://html5shiv` reference).
- **Wayfinding:** Fine for a blog. There are no categories, so older classics are found only by scrolling.
- **Relevance: 2/5.** Borrow: a **signature diagram style**. Muhammet's mammography/YOLO/KYC pipelines would benefit from one consistent "illustrated pipeline" figure per project. Also the "how to cite this" footer for research write-ups.

### 5. Sebastian Raschka — https://sebastianraschka.com
- **Fetched:** yes (HTML + `/css/theme.css` 29 KB + `/css/combined_direct_no_sass.css` 31 KB). **Jekyll 4.2.1**, Minima-derived (SOURCE).
- **Profile type:** mixed (ex-professor UW-Madison, LLM research engineer, author). Goal: content hub (books, newsletter, articles).
- **IA (SOURCE/OBSERVED):** Skip-link, then nav **Home · Blog (external "Ahead of AI") · Books · Courses · LLM Gallery · LLMs From Scratch · Reasoning Models · Talks · More ▾ (From Scratch, Blog Archive, Research, About)**, social icons (X, LinkedIn, GitHub), **dark-mode toggle**, search box. Homepage: "Hello, I'm Sebastian Raschka, PhD." + bio + 3 CTA buttons (**From Scratch / Start Here / Best Articles**) + photo + RSS / "Subscribe via Email" + 4 article cards (thumbnail, title, date, subtitle) + 5 dated "Quick Notes". Clicks: publications 2 (More → Research). CV: a sentence sends visitors to LinkedIn.
- **Publications page (SOURCE `/publications/`):** sub-index (Journal and Conference Papers / Books / Translations / Book Chapters / Patents / Journals and Special Issues). Papers are grouped by **year**. Each entry: authors (own name plain) → title → venue → bracketed text links `[ ArXiv Preprint ] [ Journal Paper ] [ PyTorch Implementation ] [ Experiment code ] [ BibTex ]`. No thumbnails.
- **Typography (SOURCE):** `body{font-family:Helvetica, Arial, sans-serif; font-size:16px; line-height:1.5; font-weight:400}`. h1 2.5em / h2 2.0em / h3 1.5em. Nav links 0.92em / 1.8. Site title 26px with -1px tracking, two-tone (first name `--color-title-first`, last name `--color-title-last` `#c5050c`).
- **Color (SOURCE, `:root`):** bg `#ffffff`, elevated `#f7f9fc`, text `#111111`, muted `#4b5563`, heading `#101828`, link `#0479a8`, hover `#005a7c`, border `#e5e7eb` / strong `#d1d5db`, footer `#424242` / `#f9fafb`, **accent `#c5050c`** (UW red). **Dark `[data-theme='dark']`:** bg `#0d1117`, surface `#101929`, elevated `#132238`, text `#e5e7eb`, muted `#9ca3af`, link `#7dd3fc`, hover `#38bdf8`, border `#1f2937`. Toggle = pill switch 30×14px (`theme-toggle.js`). Transitions 0.25s.
- **Layout (SOURCE):** `.wrapper{max-width:calc(800px - 60px)}` → **740px** with 30px padding. Sticky header that auto-hides on scroll (`.site-header--hidden{transform:translateY(-100%)}`). CTA buttons 40px min-height, 8px radius, `box-shadow 0 8px 18px rgba(15,23,42,.06)`, `translateY(-1px)` on hover.
- **Mobile/performance:** HTML 44.6 KB, 12 small scripts (TOC, search, theme, nav toggle).
- **Wayfinding:** The "Start Here / Best Articles" buttons are excellent. The nav is overcrowded (9 items + More), and research is buried.
- **Relevance: 3/5.** Borrow: (1) **2–3 hero CTA buttons that route by visitor intent**, (2) the token-based light/dark palette with an explicit toggle, (3) a publication page with a type sub-index (journal / conference / under review / book chapter), (4) an auto-hiding sticky header.

### 6. Eugene Yan — https://eugeneyan.com
- **Fetched:** yes (HTML + `/css/main.css` 30 KB + `/js/darkmode.js`). Bootstrap 4 grid + custom CSS. The generator is not stated (UNKNOWN).
- **Profile type:** industry (Amazon → Anthropic). Goal: writing, speaking, prototypes, newsletter.
- **IA (SOURCE):** Nav: **Start Here · Writing · Speaking · Prototyping · About** + search icon + dark-mode checkbox (moon/sun icon). Homepage order: "Hi, I'm Eugene Yan," + one-line mission + "Currently, I'm a Member of Technical Staff at Anthropic." + "Outside of work, I also…" bullet list (Write/Prototype/Teach/Send a newsletter) → "Get email updates" form (ConvertKit) → longer third-person bio → **Latest** (10 lines: `21 Jun 2026 · Title`) → **Trending This Week** → Featured Talks → My Favourites → **stats line "212 posts, 31 talks, 19 prototypes, 426,673 words"** → Selected Prototypes → Resources → footer. Clicks: prototype 0–1, CV 1 (About timeline).
- **Prototyping page (WebFetch):** a vertical list of 19 entries. Each has a linked title, one-line description, date, and icon links (GitHub / Demo / Website / Talk). No images in the list items themselves (34 `<img>` on the page, mostly icons; OBSERVED).
- **About page (SOURCE):** an HTML **timeline** "2026 - now: Member of Technical Staff @ Anthropic (Field <> Frontier)", "2020 - 2025: Principal Applied Scientist @ Amazon (RecSys, LLMs, Engineering)" … down to 2013, with a parenthetical focus per role. Testimonials (quotes from colleagues) follow.
- **Typography (SOURCE):** body/p **Merriweather** (Georgia fallback) 16px / 1.5. Headings Merriweather: h1 32/42px weight 400, h2 28/34, h3 22/30. Header/nav **Raleway**; the site title is 24px Raleway **lowercase** ("eugeneyan"). Code 13px/18px.
- **Color (SOURCE):** light text `#333` on `#fff`, interactive `#007bff`, callout `#e6f2ff`, focus `#00ff00`. **Dark** (checkbox `.dark-mode-checkbox:checked ~ .theme-container`): text `#fff`, subtext `#a6a6a6`, bg `#333`, link `#66b0ff`, callout `#004a99`/`#003166`. Persisted as `localStorage.darkMode`.
- **Layout (SOURCE):** `.container` max-width **750px** at ≥750px (overrides Bootstrap). Single column. Footer in `col-sm-3/col-sm-9`.
- **Mobile/performance:** HTML 62 KB, 16 scripts (jQuery 3.7.1, anchor.js, ConvertKit, Cloudflare Rocket Loader).
- **Wayfinding:** Very good. "Start Here" gives newcomers a curated path, the stats line gives instant credibility, and the dated lists scan quickly.
- **Relevance: 4/5.** Borrow: (1) a "**Currently …**" line + "Outside of work, I also…" bullets (maps to: research / production CV / consulting / AI club), (2) a **stats line** (e.g. "N papers · N production systems · N users served"), (3) the About timeline with a parenthetical domain focus per role, (4) a Prototypes list with icon links (GitHub/Demo/Paper).

### 7. Hamel Husain — https://hamel.dev
- **Fetched:** yes (HTML + `styles.css` + `index-styles.css` + both Quarto Bootstrap bundles). **Quarto 1.9.38** (SOURCE).
- **Profile type:** industry consultant/educator. Goal: sell the AI Evals course and consulting, blog.
- **IA (SOURCE):** Site-wide **announcement bar** ("Join 5,000+ engineers & PMs in mastering AI Evals, Enroll by Oct 24 25% off →"). Nav: **Blog · Notes · OSS · Teaching**. Homepage has an "On this page" TOC (🎓 Learn With Me / 📮 Blog / 📬 Follow Me), title "Hamel Husain's Blog", subtitle "Notes on applied AI engineering, machine learning, and data science.", 2 bio paragraphs (20+ years, Airbnb, GitHub), "Learn With Me" pitch, "Subscribe To My Newsletter" button, and a **blog table (Date | Title)**. Clicks: OSS 1 (`/oss/opensource.html`).
- **OSS page (SOURCE):** intro paragraph, then a project name heading with a description, and for fastai a **table: Project | Description | Role | Other References** (e.g. "fastpages — Creator — Blog, Talk"). Stating the **role** is a strong pattern.
- **Typography (SOURCE):** `--bs-body-font-family: "Source Sans Pro", -apple-system…`, 1rem / 1.5. Index title 1.8rem / 700 / -0.02em (1.5rem ≤768px). Description 1rem / 1.6.
- **Color (SOURCE):** light theme = Quarto/Bootswatch **cosmo** variables (`--bs-primary #2780e3`, body `#343a40` on `#fff`, link `#39729E`). Dark bundle: body bg `#151515`, primary/link `#75A8D9`, greys `#949494 / #f8f8f8`. Subscribe button `#447099` → hover `#305775`. **Dark mode: yes** (Quarto toggle; two stylesheets with `data-mode`).
- **Layout:** Quarto article grid. Exact content width UNKNOWN (Quarto computes the grid). The blog table **turns into stacked cards at ≤480px** (`display:block` rows, hidden thead; SOURCE).
- **Mobile/performance:** HTML 58.6 KB, 23 scripts (Bootstrap, clipboard, MathJax, tippy…). Static.
- **Wayfinding:** Clear commercial funnel. The TOC on the homepage helps.
- **Relevance: 4/5** (for the freelance-client audience). Borrow: (1) an OSS/Projects table with a **Role** column (Creator / Core contributor / Lead engineer), (2) a "Learn With Me / Work With Me" section for consulting, (3) responsive table → cards.

### 8. Christopher Olah — https://colah.github.io
- **Fetched:** yes (HTML + `css/default.css` + `css/index.css` + inline styles).
- **Profile type:** research (interpretability). Goal: essay index.
- **IA (SOURCE):** Bootstrap navbar: **colah's blog · Blog · About · Contact**. Homepage = "Recent Exciting Things!" + **topic-grouped** sections (Neural Networks (General), Convolutional Neural Networks, Recurrent…). Each section is a row of **thumbnail cards**, and Distill/Transformer Circuits items are tagged "On Distill".
- **Projects/Publications:** Cards (SOURCE `index.css`): 250px wide, min-height 340px, **2px solid black border**, 5px radius, white background, 245px-tall image, centered h3 title (100%) and h4 subtitle (85%).
- **Typography (SOURCE):** body `'CMS'` (Computer Modern Sans via `cmun-*` webfonts), `'Droid Sans'`, Helvetica; 18px / 1.5; letter-spacing -0.02rem; **justified text at ≥768px**. h1 `'CMS','Droid Serif'` 300%.
- **Color (SOURCE):** index links black. Post links `rgb(109,109,109)`. The index has a full-bleed **grass photo background** (`images/grass.jpg`, fixed, cover) behind a `rgba(245,245,245,.95)` panel. **No dark mode.**
- **Layout:** Bootstrap 3 container (exact width UNKNOWN). Floated cards. Panel padding 20/30px. ≤600px removes the panel margins.
- **Mobile/performance:** HTML 36 KB, 9 scripts, 43 images. Old Bootstrap 3, Font Awesome 4, `http://` Google Fonts links (mixed content risk).
- **Wayfinding:** Topic grouping + thumbnails = very scannable. The visual style is dated.
- **Relevance: 2/5.** Borrow: **topic-grouped thumbnail grid** (e.g. "Medical imaging", "Production CV", "AutoML"), plus a source badge ("On Distill" → "Journal", "In production").

### 9. Jon Barron — https://jonbarron.info (the de-facto ML academic template)
- **Fetched:** yes (HTML 237 KB + `stylesheet.css`). Repo: https://github.com/jonbarron/jonbarron_website (README fetched: "Feel free to clone this code for your own personal use."). The footer also points to Leonid Keselman's Jekyll fork (https://github.com/leonidk/new_website).
- **Profile type:** academic/industry research scientist (Google DeepMind). Goal: publication portfolio.
- **IA (SOURCE):** **No nav.** One page built from **nested `<table>`s**. Order: intro row (63% text / 37% photo) → "Research" (interests + "Some papers are highlighted") → **111 paper rows** → "Miscellanea" → "Micropapers" → "Recorded Talks" → "Academic Service" → "Teaching" → footer credit. Clicks: paper 0, CV 1 (PDF), Bio 1 (`.txt`).
- **Above the fold (SOURCE):** name centered 32px. A first-person paragraph with inline links to past projects (Glass, Lens Blur, HDR+, Portrait Mode…), PhD advisor, award. A centered link row **Email / CV / Bio / Scholar / Twitter / Github** separated by `&nbsp;/&nbsp;`. Circular photo (`border-radius:50%`) in the right cell.
- **Publications (SOURCE):** each `<tr>`: left cell 20% with a **160×160 media box**. 50 `<video>` tags and JS `onmouseover` swap a before/after image with `opacity .2s`. Right cell 80%: `.papertitle` (14px bold) link → full author list with **own name in `<strong>`** → `<em>Venue</em>, Year` → "project page / arXiv / code / video" slash-separated → 1–2-sentence summary. **20 rows highlighted** with `bgcolor="#ffffd0"` (pale yellow).
- **Typography (SOURCE):** **Lato** (self-declared @font-face from Google static) with Verdana/Helvetica fallback. Body / td / p / a **14px**. h2 22px normal. `.name` 32px. `.papertitle` 14px / 700.
- **Color (SOURCE):** link `#1772d0`, hover/focus **`#f09228` (orange)**, highlight `#ffffd0`. Text uses the browser default (black). **No dark mode.**
- **Layout (SOURCE):** outer table `max-width:800px; margin:auto`. Row spacing via `border-spacing:0 10px`. Cell padding 16px / 8px / 2.5%.
- **Mobile/performance:** has a viewport meta, but table layout doesn't reflow (the 20/80 split shrinks). HTML 237 KB, 100 `<script>` tags (one per hover animation), 162 `<img>`, 50 videos (`preload` varies). Heavy media.
- **Wayfinding:** For academics it is the gold standard: everything is on one page, and highlighted rows signal "read these first". For recruiters/clients, 111 rows is a wall, and there is no project/industry framing.
- **Relevance: 4/5.** Borrow: (1) the **media thumbnail + title + authors (self bold) + venue/year + slash links + 1-line TL;DR** row, (2) **highlight selected papers**, (3) an Email/CV/Scholar/GitHub link row under the bio, (4) before/after hover thumbnails (very apt for detection results: raw mammogram → detection overlay; raw frame → YOLO boxes).

#### 9a. Researchers using the Barron template (verified from footers)
| Researcher | URL | Credit text (SOURCE) | Variation |
|---|---|---|---|
| Ben Mildenhall | https://bmild.github.io | "Yep it's another Jon Barron website." | Adds a **"Highlights" strip** before Research: project name + a 3–5-word plain-English caption ("Neural Radiance Fields — Many images to 3D", "DreamFusion — Text to 3D", "ReconFusion — Few images to 3D"). 54 papertitles, 33 videos. Music recital section at the end. |
| Pratul Srinivasan | https://pratulsrinivasan.github.io | "You've probably seen this website template before, thanks to Jon Barron." | Section "Research and Publications". 53 papertitles, 30 videos. Awards listed in the bio paragraph. |
| Dor Verbin | https://dorverbin.github.io | "I'm also using Jon's website template." | 29 papertitles. Research-interest paragraph above the list. |
| Leonid Keselman | https://leonidk.com | "Design and source code from Jon Barron's website" | The **Jekyll fork**: same visual system, data-driven. Email / GitHub / Google Scholar / LinkedIn row (adds LinkedIn: an industry signal). |
None of the four uses the yellow `#ffffd0` highlight (0 matches each; SOURCE).

### 10. Vicki Boykis — https://vickiboykis.com
- **Fetched:** yes (HTML with all CSS inline). **Hugo + hugo-bearblog** ("Made with Hugo ʕ•ᴥ•ʔ Bear"; SOURCE).
- **Profile type:** industry ML engineer / writer. Goal: blog.
- **IA (SOURCE):** title "✰Vicki Boykis✰ Tech Blog", nav **Essays · RSS · GitHub · About · Changes · AI**, client-side Lunr search. Homepage = flat list "Title — Mon DD YYYY", years of posts.
- **Typography (SOURCE):** `body{font-family:Verdana,sans-serif; max-width:720px; line-height:1.5; color:#444; padding:20px}`. Headings/strong `#222`.
- **Color (SOURCE):** link `#3273dc`, visited `#8b6fcb`. **Dark via `prefers-color-scheme` only** (no toggle): bg `#333`, text `#ddd`, headings `#eee`, link `#8cc2dd`.
- **Layout (SOURCE):** 720px single column. Post list rows are `display:flex` with a fixed 130px date column. Nav stacks at ≤700px.
- **Mobile/performance:** HTML 30 KB, 4 scripts, 0 images. Very fast.
- **Wayfinding:** Good for readers, none for portfolio.
- **Relevance: 2/5.** Borrow: an extreme-minimal baseline (720px, one font, automatic dark mode). A "Changes" page (a site changelog) signals an actively maintained site.

### 11. Jason Wei — https://www.jasonwei.net
- **Fetched:** yes (HTML 480 KB + Squarespace `site.css` 1.29 MB + `custom.css`). WebFetch of the home and `/papers`. **Squarespace 7.1** (templateId `5c5a519771c10ba3470d8101`).
- **Profile type:** industry researcher (Google Brain → OpenAI → Meta MSL). Goal: bio + papers + blog.
- **IA (SOURCE/WebFetch):** Nav: **Home · Papers · Blog · Thoughts** (the header layout is "navRight"). Homepage: photo (`presidio.png`), short bio ("I am an American AI researcher…"), link row **Twitter / CV / Google Scholar / Email**, then "Papers" and "Talks & Media". Clicks: paper 0–1, CV 1.
- **Papers page (WebFetch):** grouped **by year** (2025→2019). Each entry: title link, authors with **own name bold**, co-first authors in braces, venue abbreviation "NeurIPS '22", awards in parentheses "(outstanding paper award)", optional "(blog)" / "(youtube)" links. No thumbnails, no citation counts.
- **Typography (SOURCE):** body `"adobe-garamond-pro"` (Typekit), headings `"orpheus-pro"`. Body line-height 1.2em, heading line-height 1.4em, letter-spacing .01em. `--base-font-size:14px`, `--normal-text-size-value:1.3`, `--heading-1-size-value:1.7`.
- **Color (SOURCE):** `--accent-hsl: 240,26.7%,33.7%` (≈ `#3F3F6D` slate indigo, converted from the HSL source), `--lightAccent-hsl: 60,4.3%,95.5%` (≈ `#F4F4F2`). Custom CSS forces markdown links to `#639`. **No dark mode** (header "light" theme).
- **Layout (SOURCE):** `maxPageWidth 1400px` (Squarespace default container).
- **Mobile/performance:** HTML 480 KB, 39 scripts. The heaviest site in the survey for the least content.
- **Wayfinding:** Simple and effective (3 content types). It looks generic.
- **Relevance: 3/5.** Borrow: the paper-entry micro-format (bold self, braces for equal contribution, award in parentheses, "(blog)" companion link). Avoid: a builder platform's JS weight.

### 12. Lucas Beyer — https://lucasb.eyer.be
- **Fetched:** yes (HTML + `colors.css`, `light.css`, `dark.css`, `fonts.css`, `nav.css`, `txt.css`). Hand-written static.
- **Profile type:** research scientist (Google Brain/DeepMind → OpenAI Zürich). Goal: personal homepage with personality.
- **IA (SOURCE):** fixed dark nav pill at top 5%: **↑ / Things I've done / Writing / Curriculum Vitae / Contact Me** (slashes as `::before`, «/» collapse toggle). Five **full-viewport sections** (`#home #projects #articles #cv #contact`) with alternating light/dark backgrounds and gradient separators. Clicks: everything 0 (anchors).
- **Above the fold:** "Hi there, my name is **Lucas Beyer** — I'm a self-taught hacker and studied scientist dedicated to the creation of awesomeness…". No photo.
- **Publications (SOURCE/OBSERVED):** "Publications ¶" = **17 favourite papers, each with a one-sentence TL;DR** ("SigLIP: Sigmoid instead of SoftMax for CLIP is more scalable…", "Efficiency Misnomer: Don't plot only one of #params, FLOPs, or wall-clock. Show all three!"). The full list is deferred to Scholar / Semantic Scholar. "Projects ¶" = dated timeline lines ("ca 2021—2024: Co-leading the multimodal research team…").
- **Typography (SOURCE):** body `.content` `0.9em/1.5em DejaVu Sans`. h1 3em `evelethclean_thin`. h2 2em / h3 1.4em `andes`. Other self-hosted display fonts: Ostrich, prada, andes-black. Code DejaVu Sans Mono.
- **Color (SOURCE):** `--col-gray-light #e8e8e8`, `--col-gray-dark #585858`, links `--col-blu-light #6bd1fb`, hover `#4a92af`, `em` rendered as **orange `#e39300`** (non-italic). Yellow `#FCD07E` on dark sections. Dark/light stylesheets are switched by `media="(prefers-color-scheme: …)"` on `<link>` (auto, no toggle). Nav `rgba(32,32,32,.9)`.
- **Layout (SOURCE):** each section `height:100%` as a `display:table` with vertically centered `.content` (padding `4% 65px 2%`).
- **Mobile/performance (SOURCE):** **no viewport meta tag**, so phones render the desktop layout zoomed out. HTML 101 KB, 13 scripts. Hidden `#llm` paragraph with prompt-injection-style text for LLMs; there is also a Konami-code easter egg (↑↑↓↓←→←→BA glyphs in the DOM).
- **Wayfinding:** Fast via the anchor nav, but full-height sections waste space.
- **Relevance: 3/5** (mainly for one pattern). Borrow: a **"favourite papers with a one-sentence TL;DR"** list, which recruiters and committees can scan in 20 seconds. Avoid: missing viewport meta, novelty fonts.

### 13. Yi Tay — https://www.yitay.net
- **Fetched:** yes (HTML 375 KB + Squarespace `site.css`). WebFetch of the home and `/papers`. **Squarespace 7.1** (same template id as Jason Wei).
- **Profile type:** industry research scientist (Google DeepMind, ex-Reka co-founder). Goal: bio + research narrative.
- **IA (SOURCE/WebFetch):** **black** header ("navLeft"): **Main · Blog · About · Papers · Thoughts** + social icons (Twitter, LinkedIn, Instagram). Homepage = photo + bullet bio ("Hello hello. 🦛 I am a principal research scientist at Google DeepMind…") + footer "Made with Squarespace".
- **Papers page (WebFetch):** "Research / Work", organized by **research arcs/eras**: "Gemini era", "Pioneering LLM work (pre-2023)", "Generative Retrieval / DSI", "Pre-2023 architecture / scaling research". Each arc opens with a **first-person commentary paragraph**, then a numbered list of title links (arXiv / blog).
- **Typography (SOURCE):** body **"Work Sans"** line-height 1.5em. Headings **"Alice"** (serif) line-height 1.2em, letter-spacing -.02em. `--base-font-size:18px`, `--heading-1-size-value:4`.
- **Color (SOURCE):** `--accent-hsl 278.8,12.4%,73.1%` (≈ `#BDB2C3` dusty lilac, converted), `--darkAccent-hsl 32.7,6.4%,33.9%` (≈ `#5C5651`), `--lightAccent-hsl 300,2.4%,92%` (≈ `#EBE8EB`). Header section theme "black". No dark-mode toggle.
- **Layout (SOURCE):** `maxPageWidth 1700px`.
- **Mobile/performance:** HTML 375 KB, 38 scripts.
- **Wayfinding:** The bio is effective. The arc-based paper page is the best narrative publication format found.
- **Relevance: 3/5.** Borrow: **research arcs with commentary**, which fits Muhammet's line of work well ("Arc 1: Metaheuristic AutoML: GP/ABC for activation functions, NAS" → "Arc 2: Medical imaging" → "Arc 3: Production CV").

### 14. Simon Willison — https://simonwillison.net
- **Fetched:** yes (HTML + `/static/css/all.*.css` 52 KB). Backend not verified (UNKNOWN; the CSS is generated with `cog`).
- **Profile type:** industry engineer/blogger. Goal: high-frequency link blog.
- **IA (SOURCE):** header "Simon Willison's Weblog" + **About · Newsletter · TILs · Tools** + top tag counts ("python 1,292 llm 641 …"), sponsor banner, content-type filters **Entries · Links · Quotes · Notes · Guides · Elsewhere**, day-grouped stream, right sidebar.
- **Typography (SOURCE):** body `"Helvetica Neue", helvetica, sans-serif` with line-height 1.45. Headings **Georgia** (h1 2em/1, entry h2 1.4em/1.4).
- **Color (SOURCE):** light bg `#fdfdfd`, text `#000`, muted `#666`, link `#0303bb` with a 1px bottom border `rgb(0,0,238)` (dotted on hover), visited `#636`, purple gradient bands (`rgb(154,103,175)`…). **Dark:** `[data-theme="dark"]` toggle **and** `prefers-color-scheme` when no theme is set: bg `#1a1a2e`, text `#e8e8e8`, link `#7eb8ff`, visited `#c9a0dc`. Quote marks are inline SVG in `#8A2BE2`.
- **Layout (SOURCE):** `#wrapper 940px` = `#primary 560px` + 35px gap + `#secondary 280px`. Fluid at 801–940px. Single column ≤800px (`div.entry max-width:680px`).
- **Mobile/performance:** HTML 99 KB, 7 scripts (Plausible analytics).
- **Wayfinding:** A power-user archive. Too dense for a portfolio.
- **Relevance: 1/5.** Borrow only: link styling via `border-bottom` (calm underline) and a 3-state theme (auto/light/dark).

### 15. Jeremy Howard — https://jeremy.fast.ai
- **Fetched:** yes (HTML 7.9 KB). **The response is a bare HTML fragment** (`<div class="home">…`) with **no `<html>`, `<head>`, stylesheet or viewport meta** (SOURCE). It renders in browser-default styles (Times-like serif, default blue links), a leftover of fastpages.
- **Profile type:** mixed (fast.ai founder, Kaggle ex-#1/President, UQ honorary professor). Goal: list of things created.
- **IA (SOURCE):** 250px photo floated right + intro → **domain-grouped** h2 sections: "Deep Learning and Machine Learning", "Medicine", "Other startups", "Other stuff". Each item is a bullet: linked name + one sentence of **impact with external validation** ("which has 5 stars on Amazon", "MIT Tech Review ranked it #14…", "reached #1 on the global machine learning competition leaderboard").
- **Typography/Color/Layout:** browser defaults (OBSERVED from missing CSS). No dark mode. No mobile viewport.
- **Relevance: 2/5.** Borrow: **domain grouping** ("Medical AI" as its own section, like his "Medicine"), and **impact + third-party proof** in each bullet (Ministry of Health/TÜSEB funding, "in production at …", "banking KYC"). Avoid: shipping without a `<head>`.

### 16. fast.ai — https://www.fast.ai
- **Fetched:** yes (HTML 253 KB + `styles.css` + Bootstrap bundle). **Quarto 1.9.38**, Bootswatch **Flatly** variables (SOURCE).
- **Profile type:** org/lab blog. Goal: courses, software, blog.
- **IA (SOURCE):** nav **fast.ai · About**. Hero line "fast.ai—Making neural nets uncool again". **Category filter with counts** (All (162), advice (25), ai-in-society (47), courses (42)…). A 4-row "Courses / Software / Book / In the news" link block. Post listing with category chips, date, author, and an image on the right.
- **Typography (SOURCE):** `--bs-body-font-family: Lato…`, 1rem / 1.5.
- **Color (SOURCE):** primary `#2c3e50`, link `#18bc9c` (teal), body `#212529` on `#fff`. Dark bundle body `#dee2e6` on `#212529`. Quarto toggle.
- **Mobile/performance:** HTML 253 KB, 22 scripts, 118 images.
- **Relevance: 1/5.** Borrow: the **labelled link block** ("Courses: … ; Software: … ; Book: … ; In the news: …"), a compact way to show many artifact types.

### 17. Gwern Branwen — https://gwern.net (typography reference)
- **Fetched:** yes (HTML 142 KB + `head.css` 92 KB + `style.css` 311 KB). **Hakyll** (SOURCE generator).
- **Profile type:** independent researcher/writer. Goal: long-form essays.
- **IA (SOURCE):** nav **Site · Me · New · Blog · Links · Patreon · Substack**. The homepage is a giant categorized index (Newest / Popular / Notable, then ~40 topic headings: Statistics, Meta-Science, AI: Safety, Deep Learning…). Popups, sidenotes, transclusion and collapsible sections need JS (a "JavaScript Disabled!" warning is in the DOM).
- **Typography (SOURCE `:root`):** serif `"Source Serif 4", "Apple Garamond", "Baskerville", "Libre Baskerville", …`; sans `"Source Sans 3", "Lucida Sans Unicode", …`; mono `"IBM Plex Mono", …`. **Body 20px** (18px ≤649px). **Line-height steps by viewport:** 1.45 (≤649px), 1.50 (≤999px), 1.55 (≤1199px), 1.60 (≥1200px). `font-variant-numeric: oldstyle-nums` in body text.
- **Color (SOURCE, inlined `#inlined-styles-colors`):** light bg `#fff`, text `#000`, link `#333` (monochrome; links are distinguished by underline/icons). Dark bg `#161616`, text `#f1f1f1`, link `#dcdcdc`. Seasonal overrides exist (blood-red / holly-green variables). Dark favicons via `prefers-color-scheme`. The `mode-selector` widget offers auto/light/dark.
- **Layout (SOURCE):** `--GW-body-max-width: 935px`, side padding 20px (16px ≤649px).
- **Relevance: 2/5.** Borrow: **line-height that scales with viewport width**, 20/18px body, oldstyle numerals for prose, and a monochrome link style for a scholarly tone.

### 18. Shreya Shankar — https://www.sh-reya.com (discovered: ML engineer → PhD → faculty)
- **Fetched:** yes (HTML + two Astro CSS bundles). **Astro 4.11.3** (SOURCE).
- **Profile type:** **mixed**: ex-ML engineer, Berkeley PhD, incoming CMU faculty, co-teaches AI Evals with Hamel. Goal: academic + practitioner profile.
- **IA (SOURCE):** nav **Home · Blog · Google Scholar · Twitter · GitHub**. Two-column layout: a left **`aside.profile-card`** (photo, name, email, Twitter / GitHub / Scholar / **CV** links, current & past **mentees with outcomes**, "e.g. undergrad → PhD student @ UC Berkeley; CRA Undergraduate Award") and the right content (lab sign-up form, bio, **Recent news**, **Academic service**, faculty application materials, a visible note discouraging AI-generated outreach). Papers → Scholar (external) from the homepage.
- **Bio pattern (SOURCE):** names a concrete artifact with traction: "built the DocETL stack … (4.1k+ GitHub stars, used by public defenders, climate scientists, and more)", then the awards list, then "In a past life, I was an ML engineer".
- **Publication styles (SOURCE CSS):** `.paper-title` .9375rem / 600, `.paper-authors` .875rem with **own name `<b>` in `--text-primary`**, `.paper-venue` .8125rem italic muted, `.paper-badge` with a 6px colored **dot**, `.paper-link:hover` background `--accent-subtle`.
- **Typography (SOURCE):** body **Inter** 16px / **1.7**. Headings **Lora** 600 / 1.3 / -.01em. h2 1.625rem with a bottom border. h3–h5 Inter 600.
- **Color (SOURCE):** `--cream #fdfcfa` (bg), `--cream-dark #f9f7f4`, `--parchment #f5f2ed`, `--ink #1a1a1a`, `--ink-light #333`, `--ink-muted #555`, **`--accent #8b5a3c`** (warm brown), hover `#6d4630`, accent-light `rgba(139,90,60,.08)`, border `rgba(44,44,44,.08)`, `--shadow-md 0 4px 12px rgba(0,0,0,.06)`, transitions .15s. **No dark mode.**
- **Layout (SOURCE):** `main{width:1080px; max-width:calc(100% - 3rem); padding:3rem 1.5rem}`. Grid `240px 1fr`, collapsing to `1fr` on mobile. Images 6px radius.
- **Mobile/performance:** HTML 26 KB, 3 scripts. Fast.
- **Wayfinding:** The sticky profile card keeps identity and links always visible. News gives recency.
- **Relevance: 5/5.** Same "engineer who does research" story as Muhammet. Borrow: the **profile-card sidebar** (photo + links + CV), the **artifact + traction** sentence in the bio, News, the paper micro-typography (title 600 / authors smaller with self bold / venue italic / status badge dot, ideal for "Under review" vs "Published (SCI-E)"), and the warm editorial palette.

### 19. Lj V. Miranda — https://ljvmiranda921.github.io (discovered: ML engineer → Cambridge PhD)
- **Fetched:** yes (HTML + `/assets/main.css` 13.7 KB). Subpages fetched: `/research/`, `/projects/`, `/cv/`. **Jekyll 4.4.1** (SOURCE).
- **Profile type:** **mixed**: ex-ML engineer (ExplosionAI/spaCy), Ai2 pre-doc, PhD student. Goal: research + engineering portfolio + notebook.
- **IA (SOURCE):** header "Lj V. Miranda / PhD Student, University of Cambridge / email". Nav **About · CV · Research · Life · Projects · Notebook**. Homepage: first-person intro (advisor, interests, "happy to … collaborate") → GitHub / Scholar / Itch.io / RSS → **Recent posts** (date | section | title | 2-line summary) → **"What's new?"** dated news ("Aug 2026: … accepted to EMNLP Main"). Clicks: research 1, project 1, CV 1 (HTML, with PDF link).
- **Research page (SOURCE):** a research statement (3 short paragraphs) → "Selected Publications" with **Keywords: data-centric NLP, multilinguality, edge models** → entries: **title / venue badge ("EMNLP '26", "Preprint '26", "ACL '25 (work done as pre-doc at Ai2)") / authors (★ = equal contribution) / one-sentence TL;DR / "Website / Code / Collection / Slides / Video"**. 6 images on the page.
- **Projects page (SOURCE):** an intro defining a project ("things … with a tangible outcome like a library, website, or a game"), then a dated list "03 Aug 2026 » …". Includes **"PySwarms: a particle swarm optimization library in Python"** (a swarm-intelligence project, close to Muhammet's ABC work).
- **CV page (SOURCE):** HTML CV ("Last updated: October 18, 2026. You can also get the PDF version or find me on Linkedin"): Education (institution / degree / years) → Experience (org / role / years).
- **Typography (SOURCE):** body **Vollkorn** 400 18px / 1.5, `font-feature-settings "kern","lnum"`. Small caps **Vollkorn SC** for figure/table labels and quote authors (letter-spacing .05em). **Inter** for table headers (15.75px). Headings weight 500.
- **Color (SOURCE):** bg **`#fffff8`** (Tufte paper), text `#111`, **link `#a00000`** (deep red), visited `rgb(83.5,0,0)`, hover `#111` underline. Captions `rgb(85.85,85.85,85.85)`. **No dark mode.**
- **Layout (SOURCE):** `.wrapper{max-width:calc(900px - 60px); padding:30px 75px}` → 840px. Breakpoints 800 / 600px.
- **Mobile/performance:** HTML 17.8 KB, 5 scripts (GitHub buttons, MathJax 2.7, Plausible).
- **Wayfinding:** The best "researcher-engineer" IA in the survey: Research, Projects and CV are separate, clearly named and one click away, with news for recency.
- **Relevance: 5/5.** Borrow wholesale: the IA (**About · Research · Projects · CV · Notes/Blog** + language switch), the research page with a statement + keywords + selected pubs + TL;DR, an HTML CV with a PDF link and a "last updated" date, and a "What's new?" list.

### 20. Brandon Amos — https://bamos.github.io (discovered; publication-list reference)
- **Fetched:** yes (HTML 216 KB + `/css/bamos.css`). Bootstrap 3 navbar.
- **Profile type:** research scientist (Meta FAIR → Reflection AI). Goal: publications-first homepage.
- **IA (SOURCE/OBSERVED):** fixed navbar **Brandon Amos · CV · Presentations**. Intro paragraph (employer, PhD, internships) → **"Publications"** with a stats line "**Google Scholar: 14.6k+ citations and an h-index of 46.**" and "Selected publications I am a primary author on are highlighted." → `h2` per **year** (2026, 2025, …) → numbered entries.
- **Entries (SOURCE):** number, title, **pill links** (`.pub-pill`: abstract ×80, code ×47, slides ×7; abstract expands inline), authors, venue ("ICLR 2026"), the abstract. **22 highlighted rows** `background-color:#ffffd0` (the Barron convention), and **17 thumbnails** (`.publicationImg`).
- **Typography (SOURCE):** **Source Sans Pro** weight **300** for body/nav/headings. h1 2em, h2 1.5em, h3 1em (with scroll-margin hack padding-top 3em). Captions 0.7em italic `#808080`.
- **Color (SOURCE):** link `#2b6f82` (teal), hover `#8d674b` (brown), navbar bg `#ecf6fe`, navbar text `#264653`. No dark mode.
- **Mobile/performance:** HTML 216 KB (all abstracts inline), 5 scripts.
- **Relevance: 4/5.** Borrow: the **citation stats line**, **year-grouped numbered list**, highlighted first-author papers, **pill buttons** (Abstract / Code / Slides) with an expandable abstract.

### 21. al-folio theme — https://alshedivat.github.io/al-folio/ (+ users: Tri Dao https://tridao.me, Yang Song https://yang-song.net)
- **Fetched:** yes: demo home, demo `/publications/`, compiled `main.css` (33 KB) + `tailwind.css` (21 KB), repo `_config.yml`. The raw GitHub `_sass/*.scss` paths returned 404 (the repo is restructured) and the GitHub API was rate-limited, so values come from the compiled CSS. Tri Dao and Yang Song homepages were fetched (al-folio confirmed by markup/"al-folio" strings).
- **Profile type:** the most common **academic Jekyll theme** for ML PhD students/faculty.
- **IA (SOURCE, demo):** fixed top nav **about · blog · publications · projects · repositories · CV · teaching · people · submenus ▾** + **search "ctrl k"** + **3-state theme toggle (system / light / dark)**. Tri Dao's live nav: **About · Blog · Publications · Awards · Teaching · Repositories**. The home has title + affiliation + **CV (updated 01/2026)** link, research interests, students, honors, **news** (dated items), selected publications.
- **Publications (SOURCE):** per entry `.abbr` venue **badge** (colored block), optional `.preview` thumbnail, `.title`, `.author` (self highlighted; long lists collapse to "and N more authors"), `.periodical`, `.links` buttons (`btn btn-sm`: ABS, BIB, PDF, CODE, …), BibTeX toggle, optional altmetric/citation badges. Grouped by year.
- **Typography (SOURCE):** `font-family: Roboto, sans-serif` (Tailwind layer). Code `Iosevka Fixed, monospace`. Tri Dao also loads Roboto Slab + MDB.
- **Color (SOURCE):** light bg `#ffffff`, text `#000000`, light text `#828282`, **theme `#b509ac`** (magenta), hover `#b509ac`, divider `rgba(0,0,0,.1)`, footer `#e8e8e8`, code bg `rgba(181,9,172,.05)`. **Dark:** bg `#1c1c1d`, text `#e8e8e8`, **theme `#2698ba`** (cyan), card `#212529`, divider `#424246`. `html[data-theme=dark]` + `data-theme-setting` (system/light/dark).
- **Layout (SOURCE):** content `max-width:930px`.
- **Mobile/performance:** demo HTML 39 KB, 25 scripts (search, MathJax, theme, Bootstrap/Tailwind, many optional features).
- **Relevance: 4/5.** It is the expected academic format (PhD committees will recognize it). Borrow: venue badges, ABS/BIB/PDF/CODE buttons, news, search, the 3-state theme toggle. Avoid: generic look, feature bloat.

### 22. Sayak Paul — https://sayak.dev (discovered: ML engineer at Hugging Face)
- **Fetched:** yes (HTML + Quarto Bootstrap bundle). Subpage `/pages/research.html` fetched (the first guess `/research.html` returned 404). **Quarto 1.10.19** (SOURCE).
- **Profile type:** industry ML engineer with research output (diffusion, Hugging Face). Goal: portfolio of authoring, talks, research.
- **IA (SOURCE):** nav **About Me · Authoring · Blog · Research · Resources**. Home: "Hi there 👋 I am Sayak Paul (সায়ক পাল)" (native-script name) + links to an FAQ doc, external articles, decks → **News** bullets → GitHub/Scholar pointers. The footer credits the structure: "inspired by Omar's site".
- **Research page (SOURCE):** interests paragraph → "Conference tutorials" (CVPR'21, NeurIPS'22, CVPR'23, ECCV'26) → **"Invited talks, demos, etc." table: Talk | Venue | Date | Links (slides, recording)**.
- **Typography/Color (SOURCE):** Quarto **Flatly** variables: Lato 1rem / 1.5, link `#18bc9c`, body `#212529` on `#fff`, dark bundle `#dee2e6` on `#212529`. Quarto light/dark toggle present.
- **Relevance: 3/5.** Borrow: a **talks/tutorials table** (Talk | Venue | Date | Slides | Recording), a native-script name next to the Latin one (Muhammet Özdemir), News bullets.

### 23. Nathan Lambert — https://natolambert.com (discovered)
- **Fetched:** yes (HTML 16.8 KB + `style.css` 119 KB). **Webflow export** (`w-container`, `w-richtext` classes; SOURCE).
- **Profile type:** mixed (researcher, nonprofit founder, author, newsletter).
- **IA (SOURCE):** small round profile photo + "Nathan LAMBERT" + 2-line bio → an **arrow-labelled routing list**: "**Papers → Google Scholar or CV** / **Talks → See Library** / **Newsletter → Interconnects.ai** / **Book → RLHF Book ('26)** / **Open Models → Artifacts Hub ('26), …**" → "Recent:" paragraph → "Podcast appearances" dated list with "Show more…".
- **Typography (SOURCE):** body **Lato** 14px / 135% (p 160%, blog 16px / 150%). Headings **Merriweather** 400 (h1 35/40, h2 25/30, h3 21/30, h4 18/22). h6 **Exo**.
- **Color (SOURCE):** bg `#f0f0f0`, text `#333`, link `#24a7ff` underlined, palette vars `--steel-blue #3b99d9`, `--steel-blue-2 #2e80b6`, `--firebrick #bf3a30`, `--dim-gray-2 #49647b`. No dark mode.
- **Relevance: 3/5.** Borrow: the **"Type → destination" routing list** right under the bio (e.g. "Papers → …", "Production systems → …", "Consulting → …", "CV → PDF"). It answers every visitor type in 5 lines.

### 24. Radek Osmulski — https://radekosmulski.com (discovered: Kaggle Grandmaster per AI Portfolio Podcast; NVIDIA)
- **Fetched:** yes (HTML 58 KB + Ghost `screen.css`). **Ghost 6.44**, **Casper** theme tokens (`--color-darkgrey #15171a`, `--color-wash #e5eff5`, `--color-midgrey #738a94`; SOURCE).
- **Profile type:** industry (Senior Data Scientist at NVIDIA, author, Kaggle). Goal: blog + book.
- **IA (SOURCE):** nav **LinkedIn · Twitter · YouTube · GitHub · My book · Projects · Twitter threads · About**. Home: "Hey friends — I'm Radek. I'm a Senior Data Scientist at NVIDIA and an author." → **Featured** → post cards (title, excerpt, date, "N min read").
- **Typography/Color (SOURCE):** `--font-sans` system stack, body 1.6rem (Casper base 62.5% ⇒ 16px) / 1.6em, serif `Georgia`. Ghost accent **`#0005ff`**. Dark mode not enabled (no `auto-color`/`dark-mode` class on `<html>`).
- **Relevance: 2/5.** Shows that Kaggle-strong practitioners mostly run blogs rather than portfolios. A **Kaggle/competition results block** would set Muhammet apart.

---

## Part B — Cross-site pattern table

Sites counted (n = 29 distinct sites): Karpathy, Weng, Huyen, Alammar, Raschka, Yan, Husain, Olah, Barron, Mildenhall, Srinivasan, Verbin, Keselman, Boykis, Wei, Beyer, Tay, Willison, Howard, fast.ai, Gwern, Shankar, Miranda, Amos, al-folio demo, Tri Dao, Yang Song, Paul, Lambert. Radek is excluded from counts where not checked.

| Pattern | Sites using it (evidence) | Frequency |
|---|---|---|
| Single content column ≤ 800px | Weng 720, Huyen 785, Raschka 740, Yan 750, Boykis 720, Barron 800 + 4 template users | 10/29 |
| Content width 900–1000px | Karpathy 970, Alammar 960, Gwern 935, al-folio 930 (+Tri Dao, Yang Song), Miranda 840(+padding), Willison 940 (2-col) | 8/29 |
| Photo above the fold | Karpathy, Huyen, Alammar (avatar), Raschka, Barron + 4 users, Wei, Tay, Howard, Shankar, Lambert, Tri Dao, Yang Song (OBSERVED) | ≈17/29 |
| No nav, single long page | Karpathy, Barron, Mildenhall, Srinivasan, Verbin, Keselman, Howard | 7/29 |
| Inline link row Email / CV / Scholar / GitHub / Twitter under bio | Barron + 4 users, Wei, Shankar, Miranda, Karpathy (icons), Weng (icons), Lambert | 11/29 |
| CV as PDF | Barron, Mildenhall, Wei, Shankar, Tri Dao ("updated 01/2026"), Lambert, Miranda (+HTML), Verbin (commented out) | 8/29 |
| CV / timeline rendered on site | Karpathy (logo timeline), Yan (About timeline), Miranda (HTML CV), Amos (CV page), al-folio (CV page), Beyer (CV section) | 6/29 |
| Publications on homepage | Karpathy, Barron + 4, Wei, Beyer, Amos, Tri Dao (selected) | 10/29 |
| Paper thumbnails / media | Barron + 4 (images + 50/33/30 videos), Amos (17), al-folio (preview), Miranda (6 on research page) | 8/29 |
| Own name bold in author lists | Barron, Mildenhall, Srinivasan, Verbin, Keselman (template `<strong>`), Wei, Shankar, al-folio | ≥8/29 |
| Highlighted "selected" papers | Barron (20 rows `#ffffd0`), Amos (22 rows `#ffffd0`); template users removed it | 2/29 |
| One-sentence TL;DR per paper | Beyer, Miranda, Barron + users (summary paragraph) | 7/29 |
| Papers grouped by year | Wei, Amos, Raschka, al-folio, Tri Dao | 5/29 |
| Papers/work grouped by theme / arc / domain | Tay (arcs + commentary), Olah (topics), Howard (domains), Mildenhall ("Highlights") | 4/29 |
| Link pills/buttons per item (Paper/Code/Slides/Video) | Amos (pills), al-folio (+Tri Dao, Yang Song) (buttons), Yan prototypes (icons); slash-text links: Barron + 4, Miranda; brackets: Raschka | 12/29 |
| Venue as colored label/badge | Karpathy (green text), al-folio (abbr badge), Miranda (venue line), Shankar (badge dot) | 6/29 |
| News / "What's new" / "Recent" | Miranda, Shankar, Tri Dao, al-folio, Paul, Lambert | 6/29 |
| Credibility stats line | Yan (posts/talks/prototypes/words), Amos (citations/h-index), Husain (5,000+ students), Huyen (bestseller), Shankar (4.1k+ stars) | 5/29 |
| Projects as image cards / thumbnails | Karpathy (80px thumbs), Olah (250px cards), Alammar (post heroes) | 3/29 |
| Projects as real case studies (problem → approach → result) | none found | **0/29** |
| Project list with role stated | Husain (Role column), Howard (founder/president…), Lambert | 3/29 |
| Hero CTA buttons | Raschka (3 buttons), Husain (Subscribe button + announcement bar) | 2/29 |
| Explicit collaboration/hire CTA | Huyen ("Reach out…"), Beyer (talk requests), Miranda ("happy to discuss … collaborate"), Yan (How I can help, commented out) | 4/29 |
| Newsletter capture | Raschka, Yan, Husain, Willison, Shankar (lab updates), Alammar/Huyen (Substack), Lambert | 8/29 |
| Site search | Weng, Raschka, Yan, Boykis, Willison, Gwern, al-folio (+Tri Dao, Yang Song), Husain/Paul (Quarto) | 11/29 |
| Dark mode (any) | Weng, Raschka, Yan, Husain, Boykis (auto), Beyer (auto), Willison, fast.ai, Gwern, al-folio, Tri Dao, Yang Song, Paul | 13/29 |
| Dark mode with explicit toggle | Weng, Raschka, Yan, Husain, Willison, fast.ai, Gwern (3-state), al-folio (3-state), Paul | 9/29 (+Tri Dao/Yang Song via theme) |
| Serif body text | Huyen (Lora), Yan (Merriweather), Gwern (Source Serif 4), Miranda (Vollkorn), Wei (Garamond), Howard (default) | 6/29 |
| Serif headings + sans body | Shankar (Lora/Inter), Willison (Georgia/Helvetica), Tay (Alice/Work Sans), Lambert (Merriweather/Lato) | 4/29 |
| Base body size ≥ 18px | Alammar 18, Olah 18, Gwern 20, Miranda 18, Tay 18 | 5/29 |
| Body line-height ≥ 1.6 | Weng 1.6, Shankar 1.7, Gwern 1.45–1.6 (scaled) | 3/29 |
| Hand-written static HTML | Karpathy, Barron + 3 users, Beyer, Howard (fragment) | 7/29 |
| Static site generator | Jekyll (Huyen, Alammar, Raschka, Miranda, al-folio, Tri Dao, Yang Song, Keselman), Hugo (Weng, Boykis), Quarto (Husain, fast.ai, Paul), Hakyll (Gwern), Astro (Shankar) | 15/29 |
| Hosted builder (Squarespace / Webflow / Ghost) | Wei, Tay (Squarespace), Lambert (Webflow), Radek (Ghost) | 4 |
| Real second-language version | Huyen ("VN" → `/vn/`) only; Paul shows native-script name only | **1/29** |
| Missing viewport meta (bad mobile) | Beyer, Howard | 2/29 |
| Hidden or visible text aimed at LLMs/AI agents | Karpathy (`display:none` bio), Beyer (`#llm` paragraph), Shankar (visible "Note for AI agents") | 3/29 |

**Key gaps (opportunities for mozdemir.com):** (1) nobody presents **production ML systems as case studies** with problem, data, model, deployment and impact; (2) bilingual sites are almost nonexistent among top ML researchers; (3) very few sites route different visitor types explicitly (Raschka's buttons and Lambert's arrow list are the only good examples).

---

## Part C — Top 5 most relevant sites for mozdemir.com

1. **Lj V. Miranda — ljvmiranda921.github.io (5/5).** The closest profile match: an ML engineer turned PhD researcher who keeps Research, Projects and CV as separate, one-click pages. It has a research statement with keywords, selected publications with a venue line, ★ for equal contribution, a TL;DR and link set, an HTML CV with a PDF and "last updated" date, and a "What's new?" news list. It even contains a swarm-optimization library (PySwarms), so the AutoML/ABC work would sit naturally in the same structure. Typography is a good serif reference (Vollkorn 18/1.5 on `#fffff8`, link `#a00000`).
2. **Shreya Shankar — sh-reya.com (5/5).** Shows how to present an "ex-ML-engineer + researcher" identity. A sticky **profile card** (photo, email, CV, Scholar, GitHub) keeps identity visible. The bio names one artifact with traction (stars, users, awards), and there are News and service sections. Her paper micro-typography (title 600 → authors smaller with self bold → italic venue → status badge dot) suits "Published (SCI-E)" vs "Under review" labels. Modern tokens: Inter 16/1.7 + Lora headings, cream `#fdfcfa`, accent `#8b5a3c`, 1080px with a `240px 1fr` grid.
3. **Andrej Karpathy — karpathy.ai (4/5).** The best one-page **career narrative**: a logo timeline (education → research → production), project rows with thumbnails, a compact publication block with a colored venue label, and a "bio" paragraph ready to copy. The 12-column grid in 4.3 KB of CSS with no framework is a performance model for a static bilingual site.
4. **Jon Barron template + Ben Mildenhall's "Highlights" variant (4/5).** It is what PhD committees expect: media thumbnail, title, authors with self bold, venue/year, Paper/Code/Project links and a one-line summary, with selected work highlighted. Hover-swap before/after thumbnails suit detection work (raw mammogram → detection overlay; frame → YOLO counts; ID card → OCR fields). Mildenhall's "Highlights" strip (project name + 3-word plain-English caption) is the perfect top-of-page teaser for non-academic visitors.
5. **Eugene Yan — eugeneyan.com (4/5)**, with **Hamel Husain** as a close runner-up for the client-facing parts. Yan shows how an industry ML practitioner earns credibility quickly: a "Currently …" line, "Outside of work, I also…" bullets, a "Start Here" page, a stats line, an About timeline with a domain focus per role, and a Prototypes list with GitHub/Demo icon links. Husain adds a Role column for projects and a "work with me" funnel for freelance clients.

Honourable mentions: **al-folio** (the academic default; venue badges, ABS/BIB/PDF buttons, 3-state dark toggle), **Brandon Amos** (citation stats line, year groups, pills), **Yi Tay** (research arcs with commentary), **Nathan Lambert** (arrow routing list), **Chip Huyen** (language switch in the nav).

### Concrete patterns to carry into the mozdemir.com brief
- **IA:** `About · Research · Projects · Publications · CV · (Blog/Notes) · TR | EN`. Publications can live inside Research (Miranda) or as a separate page. Every item is reachable in ≤1 click.
- **Hero:** name + native spelling, one-line positioning ("AI researcher & engineer: AutoML research, production computer vision"), "Currently …" line, a link row (Email / CV PDF / Scholar / GitHub / LinkedIn), plus a **routing list or 3 intent buttons**: "For recruiters → CV", "For academics → Research", "For clients → Projects / Contact".
- **Highlights strip** (Mildenhall): 3–4 flagship items with 3-word captions ("Mammography AI: breast-cancer detection", "Campus counting: YOLO in production", "KYC verification: OCR + face match", "AutoML: GP/ABC activation search").
- **Project case-study cards** (a gap in the market): thumbnail/diagram, title, role, funding/client (TÜSEB / Ministry of Health, bank, Skechers), status badge "In production", stack, 1-line impact, links (Paper / Code / Demo / Slides).
- **Publication rows** (Barron/Shankar/al-folio): self bold, venue badge with an indexing note (SCI-E), status dot (Published / Under review), TL;DR, Paper/Code/BibTeX pills, grouped by research arc (Tay) or year.
- **CV:** HTML timeline (Karpathy/Yan) + PDF download in both languages + "last updated" date (Miranda).
- **News** list with dates (Miranda/Shankar/al-folio).
- **Theme:** token-based light/dark with a 3-state toggle (al-folio/Gwern), values in the style of Raschka's `:root` sets. Keep the measure at 680–750px for prose; the page container can be 960–1080px with a sidebar profile card.

---

## Part D — Every URL actually fetched

**WebFetch (rendered summaries):**
- https://karpathy.ai
- https://lilianweng.github.io
- https://huyenchip.com
- https://jalammar.github.io
- https://sebastianraschka.com
- https://eugeneyan.com
- https://www.jasonwei.net/
- https://www.yitay.net/
- https://www.jasonwei.net/papers
- https://eugeneyan.com/prototyping/
- https://www.yitay.net/papers

**WebSearch queries:** `"Website template from Jon Barron" OR "template from Jon Barron" github.io` (no useful hits; template users were found by probing known NeRF researchers' sites instead); `Kaggle grandmaster personal website portfolio github.io machine learning engineer` (identified Radek Osmulski as a Kaggle Grandmaster via https://aiportfoliopodcast.buzzsprout.com/2281174/episodes/14884972-radek-osmulski-kaggle-grandmaster-meta-learning-career-growth-coding-ai-portfolio-podcast, not fetched).

**curl (raw HTML / CSS / JS), all HTTP 200 unless noted:**
- https://karpathy.ai/ , https://karpathy.ai/style.css
- https://lilianweng.github.io/ , https://lilianweng.github.io/assets/css/stylesheet.min.8e2f522e170c601ef0b359b6e27078d17e3020e1f4d928afdff4dae588c1e9e4.css , https://lilianweng.github.io/faq/
- https://huyenchip.com/ , https://huyenchip.com/assets/main.css , https://huyenchip.com/blog/
- https://jalammar.github.io/ , https://jalammar.github.io/style.css , https://jalammar.github.io/about/
- https://sebastianraschka.com/ , https://sebastianraschka.com/css/theme.css , https://sebastianraschka.com/css/combined_direct_no_sass.css , https://sebastianraschka.com/publications/
- https://eugeneyan.com/ , https://eugeneyan.com/css/main.css , https://eugeneyan.com/js/darkmode.js , https://eugeneyan.com/about/ , https://eugeneyan.com/prototyping/
- https://hamel.dev/ , https://hamel.dev/styles.css , https://hamel.dev/index-styles.css , https://hamel.dev/site_libs/bootstrap/bootstrap-affc281bc40d49e7fc62e894aeee29f6.min.css , https://hamel.dev/site_libs/bootstrap/bootstrap-dark-f2ffc9ead08980f4d55fea45d674f183.min.css , https://hamel.dev/oss/ (**404**), https://hamel.dev/oss/opensource.html
- https://colah.github.io/ , https://colah.github.io/css/default.css , https://colah.github.io/css/index.css
- https://jonbarron.info/ , https://jonbarron.info/stylesheet.css , https://raw.githubusercontent.com/jonbarron/jonbarron_website/master/README.md
- https://bmild.github.io/ , https://pratulsrinivasan.github.io/ , https://people.eecs.berkeley.edu/~pratul/ (same page), https://dorverbin.github.io/ , https://leonidk.com/
- Probed but not Barron-template (not included as cards): https://phogzone.com/ , https://www.ajayj.com/ , https://www.matthewtancik.com/ (Webflow), https://ruiqigao.github.io/ , https://www.vincentsitzmann.com/ , https://chenlin9.github.io/ , https://yenchenlin.me/ , https://poole.github.io/ (**404**)
- https://vickiboykis.com/
- https://www.jasonwei.net/ , its Squarespace `site.css` (versioned-site-css/633a6c0dd119b45af0d898c2/…/site.css), https://static1.squarespace.com/static/custom-css/633a6c0dd119b45af0d898c2/633a6c0ed119b45af0d898db/0/custom.css , https://www.jasonwei.net/papers
- https://lucasb.eyer.be/ , /static/colors.css , /static/dark.css , /static/light.css , /static/fonts.css , /static/nav.css , /static/txt.css
- https://www.yitay.net/ , its Squarespace `site.css` (versioned-site-css/636628d6a9d980577a9faf5b/…/site.css), https://www.yitay.net/papers
- https://simonwillison.net/ , https://simonwillison.net/static/css/all.d8050490c5db.css , https://simonwillison.net/about/
- https://jeremy.fast.ai/
- https://www.fast.ai/ , https://www.fast.ai/styles.css , https://www.fast.ai/site_libs/bootstrap/bootstrap-6033a600180109c3731f6a886c29932c.min.css
- https://gwern.net/ , https://gwern.net/static/css/head.css , https://gwern.net/static/css/style.css
- https://www.sh-reya.com/ + its two `/_astro/*.css` bundles
- https://ljvmiranda921.github.io/ , /assets/main.css , /research/ , /projects/ , /cv/
- https://bamos.github.io/ , https://bamos.github.io/css/bamos.css
- https://alshedivat.github.io/al-folio/ , /al-folio/assets/css/main.css , /al-folio/assets/css/tailwind.css , /al-folio/publications/ , https://raw.githubusercontent.com/alshedivat/al-folio/main/_config.yml ; raw `_sass/_variables.scss`, `_sass/_themes.scss`, `_sass/_base.scss` (**404**); `api.github.com/repos/alshedivat/al-folio/git/trees/main` (**403 rate-limited**)
- https://tridao.me/ , https://tridao.me/publications/ , https://yang-song.net/
- https://sayak.dev/ , its Quarto bootstrap bundle , https://sayak.dev/research.html (**404**), https://sayak.dev/pages/research.html
- https://natolambert.com/ , https://natolambert.com/style.css
- https://radekosmulski.com/ , https://radekosmulski.com/assets/built/screen.css
- **Failed / discarded:** https://www.psinger.com/ (connection failed, HTTP 000); https://abhishekthakur.com/ (domain for sale, not a personal site); https://hugoblox.com/templates/details/academic-cv/ (**404**).
