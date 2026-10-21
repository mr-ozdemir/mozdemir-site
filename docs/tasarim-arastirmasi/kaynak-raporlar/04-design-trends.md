# 04 — Portfolio Design Trends (2025–2026) for the mozdemir.com redesign

Research date: 2026-10-21. Client: AI researcher and engineer (AutoML papers, production computer-vision/KYC systems), bilingual TR/EN. Audience: recruiters, academics, freelance clients. Current site: generic Bootstrap template, beige `#e9e8e6`, mixed blues, Roboto/Poppins.

## Evidence tags

- **SOURCE**: the value was read from the site's own HTML/CSS (CSS custom properties, `@font-face`, `font-family` declarations, hex frequency). I pulled it with `scripts/extract.py` (curl/urllib plus regex). The raw logs are in `raw*/extract_log.txt`.
- **OBSERVED**: I saw it in a rendered-text fetch of the page (WebFetch summary), in a gallery listing, or in a third-party article.
- **UNKNOWN**: I could not verify it. These are flagged rather than guessed.
- **ASSESSMENT**: my design judgment (scores, risks, fit). It is not a fact about the site.

Caveats on method:
- Hex "top colors" are frequency counts in CSS. They show what is in the stylesheet, which is not always what dominates the screen. Framework defaults (Webflow `#3898ec`, Tailwind ring colors, Bootstrap palettes) are filtered out of the cards where I recognized them.
- Motion was detected by grepping HTML for `gsap`, `lenis`, `locomotive`, `swiper`, `webgl`, `three`, `framer-motion` and similar strings. Absence of a match does not prove the page has no CSS motion.

---

## 1. Gallery notes

| Gallery | Fetch result | What is featured | Curation criteria |
|---|---|---|---|
| **Awwwards: Portfolio category** (`awwwards.com/websites/portfolio/`) | OK | Page 1 of 5 lists 31 sites, mostly designer, studio and agency portfolios (e.g. Signal-A Studio, Huy Phan Vol.2, AVEA, STUDIO seitaro, Jithin RP). Two carry badges: **Signal-A Studio** (SOTD + Developer Award, Oct 18 2026) and **Huy Phan Vol.2** (No-code Honors Sep 2026, SOTD Oct 14 2026). OBSERVED | No written criteria on the page. The award taxonomy is SOTD / SOTM / SOTY / Honorable Mention / Nominee / Developer / Portfolio Honors, and there are community "Vote now" buttons. OBSERVED. Jury scoring (design, usability, creativity, content) is well known but was not shown on the fetched page, so it is UNKNOWN here. |
| **Awwwards: Sites of the Day** | OK | 31 SOTDs, Sep 21 to Oct 21 2026. Personal portfolios among them: Huy Phan, Maria Vasilyeva, Jesper Landberg, Gil Huybrecht, MEER MOHSIN. The rest are brand and campaign sites. OBSERVED | Same as above. The bias is toward heavy motion and WebGL "experience" sites. ASSESSMENT |
| **godly.website** | **Redirected.** HTTP 301 to `recent.design/?ref=godly` | Recent ("The best design inspiration on the Internet") mixes web, interface, branding, motion, OG images and app icons. Only one portfolio item was visible (Prekesh Chavda Portfolio), alongside UI and motion shots (ElevenLabs identity, Krea agent onboarding, AI image-loading states). OBSERVED | Not stated. The relationship between godly and Recent beyond the redirect is UNKNOWN; a web search found nothing. |
| **siteinspire: Portfolio** (`/websites?categories=19`) | OK | Page 1 of 5 lists 35 sites: designers, photographers, film makers and architects (dmcg.co, samthies.com, felixpeault.com, taradash.me, nickclement.com, gilhuybrecht.com, etc.). OBSERVED | Tagline only: "the web's finest design + talent". Ordered by date added, with popularity rankings available. OBSERVED |
| **minimal.gallery** | `/category/portfolio/` returned 404. `/tag/portfolio/` worked (985 entries, 43 pages). | Typographic and minimal designer portfolios: astapable.com, fayemi.design, davidfiz.com, xanvierallison.com, gionatannese.com, felixpeault.com, porto rocha, etc. OBSERVED | "Hand-picked", "beautiful & functional". OBSERVED |
| **land-book** (`/portfolio`) | **403 Forbidden** | — | The bot block meant I could not study it. I used the other galleries instead. |
| **lapa.ninja** (`/category/portfolio/`) | **403 Forbidden** | — | Same as land-book. |
| **bestfolios** (`/portfolios`) | **Empty body.** The page is rendered by JS and the fetcher got nothing. | — | Not usable. |
| **One Page Love: Portfolio / Resume** | OK | Portfolio: unfunnyket.com, scoutgraphics.com, meliketurgut.com, timvandamme.com, bymayo.co.uk, sam-peitz.com, officecommun.com. Resume: creativeatishay.in, jonathanmoore.com, rajavijayaraman.com, killianherzer.com, balajmarius.com, blode.co, mattrothenberg.com. OBSERVED | Described as "curated" with filters for genre, style, platform, tech and colour. No selection rules are given. OBSERVED. The resume genre is the closest match to this client. |
| **Framer Gallery: Portfolio** | OK | 24 trending/recent Framer portfolios (huyml.co, tombrown.design, virgilferragut.com, bohdan.design, mason-wong.com, etc.). OBSERVED | Framer's framing: "selected work, project stories, and introductions that show the thinking behind a creative practice". OBSERVED |
| **Read.cv** | **Defunct.** Perplexity acquired it in Jan 2025, exports were available until May 16, and `.cv` sites moved to Hello.cv (TechCrunch). OBSERVED | — | The "read.cv look" (single column, small type, Inter, monochrome) lives on in sites like paco.me and leerob.com. ASSESSMENT |
| **Bento (bento.me)** | **Shut down Feb 13 2026** after Linktree's acquisition, with links redirecting to Linktree (AlternativeTo). OBSERVED | — | The bento *grid* pattern still exists, but its best-known personal-page vehicle is gone. |
| **Muzli: "100 Best Designer Portfolio Websites of 2026"** | OK (first 100k chars read) | Mostly studios, 3D/WebGL work and creative developers (alche.studio, cappen.com, samsy.ninja, chipsa.design, abhishekjha.me, laxspace.co). The article says the order is random. OBSERVED | The article's key claim: "many portfolios fail" at the moment reviewers look for "judgment, clarity, and ownership". OBSERVED |
| **Webflow blog: "8 web design trends to watch in 2026"** (Leah Retta, Jose Ocando) | WebFetch failed (header overflow). curl worked, and I extracted the headings. | 1. Proprietary effects and styles (names Anthropic's illustrative visuals as an example). 2. Art converging with advanced UI. 3. Minimalism in copy. 4. TL;DR experience. 5. Explosion of colour (full colour systems instead of one accent). 6. Dynamic text treatments. 7. Guided scrolling. 8. Infinite canvas. SOURCE (article headings) | Editorial. |
| **Dribbble / Behance** | Not fetched (secondary by brief). | — | — |
| **Smashing Magazine** | No 2026 portfolio or typography trend article surfaced in search. | — | Secondary trend articles (line25, madegooddesigns, thecssagency) agree on: variable fonts as default, a serif revival, extreme scale contrast, bento grids, "brutalism 2.0", restrained scroll-driven motion. OBSERVED (vendor and content-marketing quality, treat as indicative). |

**Cross-gallery takeaway (ASSESSMENT).** The design galleries (Awwwards, godly/Recent, Muzli, Framer) reward creative-studio portfolios with WebGL, smooth-scroll and split-text reveals. Almost none of them feature engineers or researchers. The sites that *engineers and researchers* actually admire live outside these galleries: Karpathy, transformer-circuits, Distill, Lee Robinson, Paco, Rauno, Emil Kowalski, Brittany Chiang, Maggie Appleton. For this client, the galleries are useful for craft details (type, spacing, micro-interaction). The *structure* should come from the engineer and research cluster.

---

## 2. Standout individual sites (24 cards)

Relevance is scored 1–5 for "an AI engineer/researcher serving recruiters, academics and clients" (ASSESSMENT).

### A. Research and AI-engineer cluster

**1. Transformer Circuits Thread: https://transformer-circuits.pub/**
- Concept: Anthropic's interpretability research index. OBSERVED
- Layout: text-forward, reverse-chronological list grouped under month/year headings. Flagship papers get thumbnails; minor updates are text-only with type tags ("paper", "note, exercises"). OBSERVED
- Type: `--sans: "Styrene A"`, `--serif: "Tiempos Text"`. Both are commercial. SOURCE
- Palette: ivory `#faf9f5` / `#f0eee6` / `#e8e6dc`, slate `#141413` / `#3d3d3a` / `#5e5d59`, clay `#d97757`, book-cloth `#cc785c`, sky `#6a9bcc`, olive `#788c5d`. SOURCE
- Motion: none detected. SOURCE (grep)
- Work presentation: author-year citation line, summary and optional thumbnail per entry. This is the best model for a "Publications" page.
- **Relevance 5**

**2. Distill: https://distill.pub/**
- Concept: an ML research journal (on hiatus since 2021, but still the aesthetic reference for interactive ML writing). ASSESSMENT
- Type: `HoeflerText-Regular, Cochin, Georgia, serif` for headings, a system sans stack for UI, a Consolas/Monaco code stack. SOURCE
- Palette: near-monochrome. Recurring values include `#0f2e3d` and `#004276`. SOURCE
- Motion: none site-wide. Interactivity lives inside articles.
- **Relevance 4** (article template rather than portfolio)

**3. Andrej Karpathy: https://karpathy.ai/**
- Concept: a hub page. It says it has "no frameworks, only HTML and CSS" and is "allergic to 500-pound websites". OBSERVED
- Layout: name and tagline, a reverse-chronological career timeline with small institution logos (OpenAI, Tesla, Stanford…), a talks thumbnail grid, teaching, writing lists, pet projects (image plus text), citation-style publications, then misc links. OBSERVED
- Type: `sans-serif` (system default). SOURCE
- Palette: greys `#333`, `#555`, `#999`, `#eee`. SOURCE
- Motion: none. SOURCE
- Takeaway: the content model is ideal (timeline, talks, teaching, papers). The visual layer is deliberately bare.
- **Relevance 4** (structure 5, visuals 2)

**4. Lil'Log (Lilian Weng): https://lilianweng.github.io/**
- Concept: a long-form ML blog built with Hugo (PaperMod-style theme). SOURCE (generator meta: Hugo 0.163.3)
- Type: system sans stack (`-apple-system, BlinkMacSystemFont, segoe ui, Roboto…`). SOURCE
- Palette (dark vars): theme `rgb(29,30,32)`, entry `rgb(46,46,51)`, primary `rgb(218,218,219)`, secondary `rgb(155,156,157)`, link `#286ee0`. SOURCE
- Light/dark: `prefers-color-scheme` is used. SOURCE
- **Relevance 3**

**5. Sebastian Raschka: https://sebastianraschka.com/**
- Concept: "LLM Research Engineer". Books, blog, courses, "From Scratch" series, research. OBSERVED
- Layout: header with theme toggle and search; nav (Blog, Books, Courses, LLM Gallery, LLMs From Scratch, Reasoning Models, Talks); short bio with photo; quick links and subscribe; latest-article cards (thumbnail, date, subtitle); "Quick Notes" list. OBSERVED
- Type: Helvetica/Arial. SOURCE
- Palette (dark theme vars): bg `#0d1117`, surface `#101929`, elevated `#132238`, text `#e5e7eb`, muted `#9ca3af`, link `#7dd3fc`, border `#1f2937`, accent and title-last `#c5050c` (red). SOURCE
- Built with Jekyll 4.2.1, `data-theme` toggling. SOURCE
- **Relevance 4** (strong content IA for a researcher with books and courses; the GitHub-dark look is generic)

**6. Simon Willison: https://simonwillison.net/**
- Concept: a dense blog stream (entries, links, quotes, notes, TILs), grouped by day with tags on every item. OBSERVED
- Type: `georgia, serif` body; Helvetica Neue for UI. SOURCE
- Palette (dark theme): bg `#1a1a2e`, text `#e8e8e8`, muted `#a0a0a0`, link `#7eb8ff`, visited `#c9a0dc`, purple accents (`rgb(100,56,127)`, `#2d2640`). SOURCE
- `data-theme` toggling. SOURCE
- **Relevance 3** (a pattern for a "Notes / TIL" section, not for a homepage)

**7. Gwern.net: https://gwern.net/**
- Concept: maximal editorial typography: drop-cap initials (5 decorative initial families), sidenotes, popups. SOURCE / OBSERVED
- Type: `Source Serif 4` (body), `Source Sans 3` (UI), `IBM Plex Mono` (code). All three are on Google Fonts and Turkish-OK. SOURCE (Turkish check in §5)
- Palette: strictly greyscale. Dark mode body `#161616`, text `#f1f1f1`, links `#dcdcdc`. SOURCE
- Built with Hakyll. SOURCE
- **Relevance 3** (a typographic benchmark; too idiosyncratic to copy)

**8. Maggie Appleton: https://maggieappleton.com/**
- Concept: a "digital garden". Essays as illustrated large cards; notes as title-only cards; patterns grid; library of book covers; relative timestamps ("about 1 year ago"). OBSERVED
- Type: `Canela Deck` (display serif), `Canela Text` (body serif), `Lato` (sans), `IBM Plex Mono`. Canela is commercial. SOURCE
- Palette (dark vars): cream surfaces `#1c1b18` / `#252420`, text `#c2bfba`; accents crimson `#e85aab`, sea-blue `#2bc4da`, purple `#9b7fd9`, salmon `#ff9a8a`, gold `#e5b876`. Uses `oklch` and `color-mix`. SOURCE
- **Relevance 4** (a content-maturity model, essay vs note, that suits a researcher who writes)

**9. Matthew Blode: https://blode.co/** (One Page Love, resume)
- Concept: "AI Engineer at Linktree, two exits". OBSERVED (title)
- Layout: bio blockquote; prose founder-story experience; a **quick-facts metric row** (6 months / 15M+ users / 100+ countries / zero to one); tools; FAQ; writing; affiliations; elsewhere; a section addressed to **AI agents** (llms.txt, MCP endpoints, markdown variants). OBSERVED
- Type: `editorialOld` headings (local font; the name matches PP Editorial Old, but that identification is UNKNOWN), `Inter` body, `Geist Mono` mono. SOURCE
- Palette: `#121212`, `#f2f2f2`, accent blue `#3452ea` / `#5a81ff`. SOURCE
- Next.js, Tailwind v4 (`lab()` colours). SOURCE
- **Relevance 5** (metrics-first, agent-readable, an AI-engineer persona; directly transferable)

**10. Jonathan Moore: https://jonathanmoore.com/** (One Page Love, resume)
- Concept: a design engineer and entrepreneur with a terminal/archive aesthetic. Section markers `§ 00.a`, `§ 01.b`; header with a timestamp and Austin coordinates; experience entries with `[active]` / `[archive]` / `[beta]` status tags, a `REF` hash and `DURATION` in months; a selected-work grid of video-poster thumbnails. OBSERVED
- Type: `ABC Whyte` (sans) and `GT Pressura Mono` (mono). Both commercial. SOURCE
- Palette: bg `#F8F7F5` (warm off-white), text as black alpha steps (1 / .9 / .75 / .6 / .38 / .2), accents terracotta `#C84A2D` and sage `#6B8E65`, status blue `#5683d2`. SOURCE
- **Relevance 5** (the "lab notebook" direction executed with warmth instead of dark neon)

**11. Lee Robinson: https://leerob.com/**
- Concept: a text-only hub. Prose bio, "Notes" topic index, dated blog list. No project grid. OBSERVED
- Type: `Iowan Old Style Local` (reading), system UI sans, Geist Sans/Mono defaults, `Caveat` (handwritten accent). SOURCE
- Palette: `#fafafa` / `#171717` / `#0a0a0a`, neutrals `#737373`, `#a1a1a1`, `#e5e5e5`. SOURCE
- Motion: none. Light/dark via `prefers-color-scheme`. SOURCE
- **Relevance 4**

**12. Brittany Chiang: https://brittanychiang.com/**
- Concept: the canonical engineer portfolio. Header with in-page anchors (About / Experience / Projects); numbered experience timeline with dates, tech tags and a "View Full Résumé" link; projects with screenshot, tags and install-count badge; writing with thumbnails; credits footer. Skip link and accessibility copy. OBSERVED
- Type: `Inter` (next/font). SOURCE
- Palette: Tailwind slate-based. Few literal hexes; `rgba(148,163,184,.1)` inset shadow. SOURCE. The dark navy with teal accent is widely known but was not verified from CSS here: UNKNOWN.
- **Relevance 4** (the structure is proven for recruiters; the look is widely cloned, so differentiation is needed)

### B. Design-engineer cluster (craft benchmarks)

**13. Paco Coursey: https://paco.me/**
- Concept: a single column. Intro, Building, Projects (⌘K, Writer, Next Themes), Writing, "Now", Connect. OBSERVED
- Type: `Sohne` (commercial) with `Inter` fallback, `Newsreader` serif, Menlo mono. Fonts are subset (`inter-subset`, `newsreader-subset-0`). SOURCE
- Palette: Radix-style 12-step grey (`#fcfcfc` to `#202020`), alpha greys, `--indigo: #5e5ce6`. SOURCE
- **Relevance 3**

**14. Rauno Freiberg: https://rauno.me/**
- Concept: a manifesto homepage ("Make it fast. … Make it soulful. Make it."). Craft and projects live on subpages; year archives; email copies to clipboard. OBSERVED
- Type: custom face named `X`, `JetBrains Mono`, Georgia serif. SOURCE
- Palette: Radix gray (`hsl(0 0% 99%)` to `hsl(0 0% 9%)`); shadows `0 5px 10px rgba(0,0,0,.12)` / `0 8px 30px` / `0 30px 60px`. SOURCE
- **Relevance 3**

**15. Emil Kowalski: https://emilkowal.ski/**
- Concept: Design Engineer at Linear. Projects (Sonner, Vaul…) and writing as title-plus-one-line lists, with a newsletter. OBSERVED
- Type: local fonts aliased `Sans` / `Serif` / `Mono`, with `font-feature-settings: "cv01","ss03"` and `"opsz" auto` (Inter-like settings). The actual families are UNKNOWN. SOURCE
- Palette: `#0b0b09`, `#11110e`, `#f8f8f8`, `#d6d6d6`, `#989898`. Layered shadow tokens (`--ds-shadow-border: 0 0 0 1px hsla(0,0%,100%,.08)`). SOURCE
- **Relevance 3**

**16. Josh W. Comeau: https://www.joshwcomeau.com/**
- Concept: playful educational brand.
- Type: `Wotfard` (sans), `Cartograph CF` (mono), `Sriracha` (accent). SOURCE
- Palette: yellow selection `#ffd633`, blue `#4242fa`, magenta `hsl(326 100% 61%)`. SOURCE
- **Relevance 2** (too whimsical for this audience)

### C. Gallery-featured design portfolios (craft and trend signals)

**17. Huy Phan Vol.2: https://huyml.co/** (Awwwards SOTD Oct 14 2026, also in Framer gallery)
- Concept: an award-led designer site. Recognition row, numbered "Selected work" cards, a full work index with award tags, audio toggle, local-time clock, Rive animations. OBSERVED
- Type: `BT Grotesk`, `BT Glyphius`, `F37 Bolton (trial)`, Inter. SOURCE
- Palette: `#000` / `#fff` / `#ececec` / `#181818`, red `#ff4949`. SOURCE
- Built with Framer; gsap detected. SOURCE
- **Relevance 2**

**18. Signal-A Studio: https://signal-a.studio/** (Awwwards SOTD + Developer Award Oct 18 2026)
- Concept: a Warsaw/Berlin studio. Split-word hero, numbered case-study cards with "Notable recognitions" and "Project scope" tags, live CET clock, marquee footer. OBSERVED
- Type: `Neue Haas Grotesk Text/Display Pro`, `PP Editorial New` (Ultralight/Thin), `GT America Mono`. Mono size token `--s-a-mono-font-default: 10px`. SOURCE
- Palette: black/white. SOURCE
- Motion: gsap + Lenis smooth scroll + Locomotive + Swiper (heavy). SOURCE
- **Relevance 1–2** (borrow only: case-study card metadata "scope / recognition")

**19. Nick Clement: https://nickclement.com/** (siteinspire)
- Concept: independent product/brand designer for founders, with focus sectors including **AI and data**. Hero "Complex ideas, made clear"; a selected-work index with discipline tags; focus groups (Design / Strategy / Build); recent engagements; a numbered "who I'm open to working with" list. OBSERVED
- Type: `BDO Grotesk Variable` (wght 380), plus Inter, Geist, Geist Mono, Instrument Serif and Switzer loaded. SOURCE
- Palette: `#000`, `#1f1f1f`, `#262626`, `#8c8c8c`, `#adadad`, `#e3e3e3`, `#fff`. SOURCE
- Built with Framer. SOURCE
- **Relevance 4** (the best freelance-client positioning model in the set)

**20. Evgenii Astapov: https://astapable.com/** (minimal.gallery)
- Concept: a product designer whose section headers are styled as code comments (`/* Featured Work */`). An **"Ask Ev AI" chatbot** with an error and logging disclaimer, a "Live Apps" section, resume and booking CTAs, and a version/updated-date footer. OBSERVED
- Type: `Baru Sans`. SOURCE
- Palette: `#fbfbfb`, `#1c1c1c`, `#eaeaea`, `#cdcdcd`, `#9b9b9b`. SOURCE
- Built with Webflow; gsap + Lenis. SOURCE
- **Relevance 3** (the "ask my AI" widget is a relevant idea for an AI engineer, but risky if it hallucinates)

**21. Melike Turgut: https://meliketurgut.com/** (One Page Love)
- Concept: a Turkish-born (Fethiye), Brooklyn-based product designer. Narrative "chapters" (The Premise / The Reality / The Plot) instead of a case grid; lowercase "me · like" wordmark. English-only. OBSERVED
- Type: `Agrandir` / `Agrandir Tight`, `PP Editorial New` Ultralight, `Belmonte Ballpoint` (Pangram Pangram). SOURCE
- Palette: `--paper: #eaece5`, `--ink: #40400c`, `--lilac: #b466eb`. SOURCE
- **Relevance 3** (a nice "paper + olive ink" palette with a Turkish link; English-only)

**22. Tim Van Damme: https://timvandamme.com/** (One Page Love)
- Concept: a text-first career log. Roles with nested project links to third-party coverage, side projects, and "Elsewhere" (talks and press). OBSERVED
- Type: `proxima-soft` (condensed variants) and `felt-tip-roman` (Adobe Fonts). SOURCE
- Palette: built with the CSS `light-dark()` function, e.g. `--background: light-dark(#fff,#000)`, `--text: light-dark(#333,#ccc)`, accent `#c44536` / `#e87a6a`. SOURCE
- **Relevance 3** (`light-dark()` is a clean modern theming technique worth adopting)

**23. David McGillivray, Design Office: https://dmcg.co/** (siteinspire)
- Type: `Neue Montreal` (Pangram Pangram). SOURCE
- Palette: page bg `#7b776d` (a warm grey-taupe as the *background*), fg `#f6f6f6`, case pages `#dcdcdc` / `#404040`, highlight `#fffb00`. SOURCE
- Next.js; gsap and WebGL strings detected. SOURCE
- WebFetch returned 404 for the rendered page, so the layout is UNKNOWN. curl got 200.
- **Relevance 2** (a palette reference: a mid-tone neutral background)

**24. Eli Horn: https://elihorn.ca/** (minimal.gallery)
- Concept: an artist's single-screen gateway where an epigraph quote is the link to the works. OBSERVED
- Type: `Suisse Works` (serif) and `Neue Haas Grotesk Text`. SOURCE
- Palette: bg `#bebebe` (mid-grey), fg `#000`, highlight `#e0d46e`. SOURCE
- **Relevance 2**

### Also extracted (tokens only, no card)

| Site | Fonts (SOURCE) | Palette (SOURCE) | Note |
|---|---|---|---|
| balajmarius.com (OPL resume) | local `sans` / `serif` / `mono` aliases | blue `#0e63ff`, `#cfe0ff`, `#f2f5f9`, `#162456` | Next.js + Tailwind v4 |
| mariavasilyeva.com (SOTD Oct 9) | custom `feat` / `synt` / `suo` | `#f9f9f9`, `#131313`, `#626262`, `#e9e9e9` | — |
| jesperlandberg.com (SOTD Sep 29) | local `sans` | `#fff`, `#eee`, `#d9a441` | radius 2rem / 1.5rem |
| felixpeault.com | `Suisse Intl Cond` + `Archivo` | `#222`, `#f7eeec`, `#007cba`, `#00ba82` | — |
| fayemi.design | `Suisse Int'l Condensed` → `Archivo Narrow` fallback | `#000`, `#fff`, `#ff2d55` | single font, radius 2px |
| samthies.com | `Quadrant Text Mono` | `#2b2728`, `#121212`, `#fffcf8`, `#cd6238` | mono-only site |
| sam-peitz.com | `ui-monospace` system stack only | `--paper: #F0F5F5`, `--ink: #121212` | zero webfonts |
| taradash.me | `Explorers Diatype Cyrillic` | Webflow defaults | — |
| davidfiz.com | `Haas` + `Minion` | `#000`, `#e1e1e1`, Apple-style system blue `#0A84FF` | — |
| gilhuybrecht.com (SOTD Sep 21) | local `sans` + mono | `#fff`, `#000`, `#ffe81f` | — |
| colah.github.io | `CMS` / `CMSS` (Computer Modern web), Droid Sans/Serif | Bootstrap 3 defaults (`#428bca`) | Counter-example: the classic researcher blog on Bootstrap 3 has the same "dated template" problem as mozdemir.com today |

---

## 3. AI lab and company aesthetics

| Company | Typography (SOURCE) | Palette (SOURCE) | Layout signature (OBSERVED) |
|---|---|---|---|
| **Anthropic** (anthropic.com) | Custom `anthropicSans`, `anthropicSerif`, `anthropicMono`, plus `jetBrainsMono`. Legacy vars still reference `--styrene-b`, `--tiempos-text`, `--copernicus`. Optical-size tokens `--font-opsz-display: 48`, `--font-opsz-text: 16`. Usage counts: sans ×211, serif ×165, mono ×32, so the serif is used heavily, not only for headlines. | Warm grey ramp: `#faf9f5` (050), `#f5f4ed`, `#f0eee6`, `#e8e6dc`, `#d1cfc5`, `#b0aea5`, `#87867f`, `#5e5d59`, `#3d3d3a`, `#262624`, `#1a1918`, `#141413` (950). Accents: clay `#d97757` (interactive `#c6613f`), oat `#e3dacc`, olive `#788c5d`, cactus `#bcd1ca`, sky `#6a9bcc`, fig `#c46686`, iris `#dfdbfd` / `#4a3aa7`, periwinkle `#cde2fb` / `#184f95`. | Large serif headline ("AI research and products that put safety at the frontier."), full-width illustration, dated announcement cards (date, title, one-liner, text links), an image-tile carousel with an "01 / 04" counter, dense multi-column footer. Webflow's 2026 trends article cites Anthropic's illustrative visuals as an example of "proprietary effects". |
| **OpenAI** (openai.com; WebFetch 403, curl 200) | `OpenAI Sans` (+ JP/SC/TC and Variable Scripts), `LF Serif` (with liga/calt), mono `SF Mono, Consolas…` | Pure monochrome: `--color-background` `#fff` / `#000`; primary solid `#181818`, hover `#303030`; alpha steps `#00000005` to `#0000001f`. Systematic chart ramps (blue `#173e76` to `#f6fafe`, green `#1f4e25`…). | UNKNOWN beyond source (the rendered fetch was blocked). |
| **Google DeepMind** (deepmind.google) | `Google Sans Flex` (variable opsz 6..144, wght 1..1000, loaded from Google Fonts, Turkish-OK per §5), `Google Symbols` | Neutrals `#0a0a0a`, `#212226`, `#4e4f56`, `#f3f4f6`, `#f8f9fc`; brand `--ai-brand-blue: #3186ff`, cyan `#2daeb8`, green `#00af57`, yellow `#fec700`, orange `#ff902a`, red `#fc413d`; 90° two-stop gradients (e.g. `#3186ff` to `#2daeb8`). | Hero slideshow, product modules with looping video, a dated news grid with category tags, model carousel, podcast, newsletter. Sticky nav with mega-menus. |
| **Hugging Face** | `Source Sans Pro` + `IBM Plex Mono`; `Charter` serif for blog; KaTeX fonts for math. | Dark `#0b0f19` / `#101623` / `#141c2e`; GitHub-dark `#0d1117` / `#30363d`; Tailwind v4 oklch palette; gradients `#625fff33` to `#fb2c3633`. | Card-dense hub: trending Models / Spaces / Datasets cards with counts, emoji icons, pill badges, light and dark illustrations. |
| **Mistral AI** | Custom `ALTMistral` (6 cuts), `Inter` variable, `Space Mono` as `--font-mono`. | Warm neutrals `#f5f4ef`, `#e4e3de`, `#e4e2d6`, `#eceae1`; dark text `#31313a`, `#343446`, `#474754`; orange ramp `#fa500f` / `#ff5229` / `#ff6529`; yellow `#fec63a` / `#ffaf01`. Radii mostly 0 to 0.3125rem (near-square). | Bordered grid header (`divide-x` + `border-b`), customer logo row, keyword chips, tabbed four-part product stack with alternating blocks, sector proof panels. Small radii and visible dividers give it a "technical paper grid" feel. |
| **Linear** | `Inter Variable` (`"cv01","ss03"`, `"opsz" auto`), `Berkeley Mono` (commercial) for mono, **`Tiempos Headline`** as `--font-serif-display`. Weights 300 / 400 / 510 / 590 / 680. Title scale tokens `1.0625, 1.25, 1.5, 2, 2.5, 3, 3.5, 4, 4.5rem`. | Dark levels `#08090a` (0), `#0f1011` (1), `#141516` (2), `#191a1b` (3); text `#f7f8f8`, `#d0d6e0`, `#8a8f98`, `#62666d`; brand `#5e6ad2`; accent `#7170ff`. Code tokens (`#F79CE0` keyword, `#83dcdc` entity…). | Headline + two product screenshots, three value pillars with numbered "Fig" captions (editorial device), alternating feature blocks with realistic UI mockups, changelog cards, customer quotes. Even Linear now carries a serif display face. |
| **Vercel** | `Geist Sans`, `Geist Mono`, plus **Geist Pixel** variants (Square / Grid / Circle / Triangle / Line) used as display accents. | `#000` / `#fff` core; greys `#eaeaea`, `#666`, `#333`, `#111`; `--geist-cyan: #50e3c2`; error `#e00`; blue `#0070f3`; gradient `135deg, #ff1e56, #0096ff`. Radius 6 / 8 / 12px plus full pills. | "Agentic Infrastructure" hero; customer-example sections with feature lists; "Recently shipped" cards. Agent-oriented copy ("have your agent fetch and follow the setup guide"). |

**Shared signatures (ASSESSMENT)**
- Every lab now uses a **custom or near-custom sans plus a mono**, and 4 of 7 (Anthropic, OpenAI, Linear, HF blog) also ship a **serif**. The 2026 AI-brand voice is "sans for UI, serif for ideas, mono for data".
- Palettes split into two camps:
  - **Warm-paper neutrals** (Anthropic, Mistral, also Jonathan Moore and Melike Turgut) with one earthy accent.
  - **Neutral monochrome** (OpenAI, Vercel, Linear dark) with near-zero accent use.
- Saturated blue-purple "AI gradient" hero blobs are absent from Anthropic, OpenAI, Linear and Vercel. DeepMind keeps disciplined two-stop gradients.
- Dated feeds (news, changelog, research index) are a recurring structural device. They map well to papers and talks.
- Small radii (0–8px) and hairline dividers dominate. Big 24px+ pill-cards are mostly gone from these brands.

---

## 4. Trend synthesis: named visual directions

| # | Direction | Defining traits | Example sites | Risks | Fit for mozdemir.com (ASSESSMENT) |
|---|---|---|---|---|---|
| 1 | **Editorial minimal / "research paper"** | Serif display + sans UI (or serif body); warm paper background; generous measure (60–75ch); dated lists; citations; sidenotes; little motion | transformer-circuits.pub, Anthropic, gwern.net, maggieappleton.com, leerob.com, Linear's serif display | Can feel slow or "blog-only" to recruiters if there are no visual project proofs. Serif fonts need careful Turkish diacritic rendering (all candidates pass, §5). | **High.** It matches academic credibility and echoes the AI-lab voice. The beige heritage of the current site becomes a feature. |
| 2 | **Technical / monospace engineer ("lab notebook")** | Mono metadata (dates, tags, IDs), section markers (§ 01), status pills, metric rows, hairline grids, light motion | jonathanmoore.com, blode.co, astapable.com, Linear, Vercel, Mistral grid header | Easy to overdo into a cosplay terminal. All-mono body hurts readability. Dark neon versions date quickly. | **High as an accent layer.** It is ideal for production CV/KYC systems (metrics: latency, accuracy, throughput). |
| 3 | **Text-first single column ("read.cv lineage")** | One column, ~640px, small type (14–16px), lists of title + one-liner, no imagery, Radix greys | paco.me, emilkowal.ski, rauno.me, leerob.com, timvandamme.com, sam-peitz.com | Too austere to show CV demos or diagrams. Read.cv itself is gone. Lowest differentiation. | **Medium.** It works for the homepage hero and about, not for project pages. |
| 4 | **Bento grid** | Modular tiles of mixed sizes: stats, map, GitHub, photo, Spotify; rounded cards | (bento.me, now shut down); CSS-agency trend roundups still list it | Peaked around 2023–24. It reads as "template". Hierarchy suffers (everything is a tile). Bento.me's shutdown removed its flagship. | **Low–medium.** Use only for a compact "at a glance" strip (papers, years, systems shipped). |
| 5 | **Dark glass / neon AI** | Near-black, glassmorphism, glowing gradients, particle or neural visuals | (generic AI-startup templates; not used by the labs studied) | Most dated, lowest contrast, GPU-heavy, signals "template". Labs have moved away. | **Low.** Avoid. A disciplined dark *mode* (Linear-style levels) is fine. |
| 6 | **Swiss / neo-grotesk index** | Neue Haas / Suisse / Neue Montreal grotesks, strict grid, condensed type, numbered indexes, monochrome + one signal colour | signal-a.studio, fayemi.design, felixpeault.com, elihorn.ca, dmcg.co | The premium fonts are paid. Free substitutes (Inter Tight, Hanken Grotesk) look more generic. It can look cold. | **Medium.** Good discipline for the project index. |
| 7 | **Immersive / WebGL showcase** | Smooth scroll (Lenis), split-text reveals (GSAP), 3D scenes, sound toggles, live clocks | huyml.co, signal-a.studio, Muzli list (alche.studio, samsy.ninja, chipsa.design), bruno-simon (cited by Elementor) | Performance, accessibility (motion sickness, keyboard), maintenance cost. Distracts academics and recruiters. | **Low**, except one small interactive demo (e.g. a client-side face-detection or document-crop toy) used as proof of skill. |
| 8 | **Agent-readable portfolio** (emerging) | `llms.txt`, markdown twins of pages, MCP endpoints, "when to use this" copy addressed to AI agents | blode.co; Vercel's homepage copy ("have your agent fetch…") | New; conventions are unsettled. | **High, and on-brand for an AI engineer.** It is cheap to add (static `llms.txt` + `.md` versions). |

Trend-article signals for 2026 (OBSERVED, mixed source quality):
- Webflow: proprietary effects; minimal copy; TL;DR summaries; full colour systems; dynamic text; guided scroll; infinite canvas.
- Secondary articles: variable fonts as the default; serif revival; huge headline plus tiny caption scale contrast; restrained scroll-driven motion; earth tones.
- Muzli: reviewers look for judgment, clarity and ownership.
- DevPlaybook (via DEV): hero, then projects, skills, about, contact; don't lead with skills lists.

---

## 5. Font pairings and Turkish coverage

**Method.** `scripts/turkish_check.py` downloads every woff2 that Google Fonts and Fontshare serve for a family (all `unicode-range` subsets), reads the `cmap` with fontTools, and checks for all of `ğ Ğ ş Ş ı İ ç Ç ö Ö ü Ü`.
- Sanity test: **Rock Salt** (latin-only) correctly reported MISSING. Special Elite, Six Caps, Monoton and Major Mono Display passed.
- Full results: `turkish_check_results.txt`.
- On Google Fonts, `ğ ş ı İ` live in the **latin-ext** subset (U+0100–017F). Self-hosting must keep latin-ext; subsetting to latin-only would break Turkish. If `text=` or `&subset` parameters are used, include latin-ext.

**Families verified: all Turkish glyphs present (SOURCE: cmap check)**
- Google Fonts, sans: Inter, Inter Tight, Geist, IBM Plex Sans, Source Sans 3, Instrument Sans, Space Grotesk, Manrope, DM Sans, Hanken Grotesk, Schibsted Grotesk, Bricolage Grotesque, Familjen Grotesk, Google Sans Flex, Onest, Figtree, Plus Jakarta Sans, Outfit, Sora, Public Sans, Work Sans, Archivo, Red Hat Display, Poppins, Roboto, Geologica, Albert Sans, Funnel Display, Funnel Sans, Host Grotesk, Commissioner, Atkinson Hyperlegible Next, Mona Sans, Hubot Sans, Radio Canada Big, Libre Franklin, Epilogue, Syne, Unbounded.
- Google Fonts, serif: Source Serif 4, Newsreader, Fraunces, Instrument Serif, IBM Plex Serif, DM Serif Display, Spectral, Literata, EB Garamond, Libre Caslon Text, Lora, Merriweather, Bodoni Moda, Playfair Display, Cormorant Garamond, Crimson Pro, Young Serif, Gloock.
- Google Fonts, mono: Geist Mono, IBM Plex Mono, JetBrains Mono, Space Mono, DM Mono, Martian Mono, Roboto Mono, Fira Code, Red Hat Mono, Azeret Mono, Spline Sans Mono, Ubuntu Mono.
- Fontshare (free for commercial use): Satoshi, General Sans, Cabinet Grotesk, Clash Display, Switzer, Supreme, Erode, Zodiak, Gambetta, Sentient, Boska, Author, Chillax.
- Not tested, because they are commercial (seen in the wild): Söhne, Styrene, Tiempos, Berkeley Mono, Neue Haas Grotesk, Neue Montreal, PP Editorial New, ABC Whyte, GT America Mono, Canela. Turkish support for these is UNKNOWN; check before licensing.

**Pairings observed in the wild → free equivalents**

| Observed pairing (SOURCE) | Where | Free, Turkish-OK equivalent |
|---|---|---|
| Styrene + Tiempos (+ JetBrains Mono) | Anthropic, transformer-circuits | **Inter Tight** or **Geist** + **Source Serif 4** or **Newsreader** + **JetBrains Mono** |
| Inter Variable + Tiempos Headline + Berkeley Mono | Linear | **Inter** + **Newsreader** (display opsz) + **Geist Mono** / **Martian Mono** |
| Geist + Geist Mono (+ Pixel) | Vercel | **Geist** + **Geist Mono**, both on Google Fonts |
| Source Serif 4 + Source Sans 3 + IBM Plex Mono | gwern.net | Same; all free |
| Source Sans Pro + IBM Plex Mono | Hugging Face | Source Sans 3 + IBM Plex Mono |
| Inter + Geist Mono + editorial serif | blode.co | Inter + Geist Mono + **Instrument Serif** (only 400 + italic, display use only) |
| ABC Whyte + GT Pressura Mono | jonathanmoore.com | **Hanken Grotesk** or **Schibsted Grotesk** + **IBM Plex Mono** / **DM Mono** |
| Neue Haas + PP Editorial New + GT America Mono | signal-a.studio | **Inter Tight** + **Instrument Serif** + **Geist Mono** |
| Söhne + Inter + Newsreader | paco.me | **Inter** + **Newsreader** |
| Canela + Lato + IBM Plex Mono | maggieappleton.com | **Fraunces** (soft opsz) + **Public Sans** + **IBM Plex Mono** |
| Iowan Old Style + system UI | leerob.com | **Literata** or **Source Serif 4** + system UI |
| Google Sans Flex | DeepMind | **Google Sans Flex** (now on Google Fonts, Turkish-OK) |

Notes:
- Poppins (currently used on mozdemir.com) is Turkish-OK, but its geometric "startup 2018" look is the main dated signal. ASSESSMENT
- Instrument Serif has a single weight (plus italic). It works for display headlines only.
- Newsreader, Fraunces, Source Serif 4, Literata and Google Sans Flex have **optical-size axes**. That matches the Anthropic and Linear `opsz` usage.

---

## 6. Three candidate visual directions for mozdemir.com

Common requirements for all three: semantic `lang="tr"` / `lang="en"` with `hreflang` alternates; `font-display: swap`; self-hosted variable woff2 keeping **latin + latin-ext**; `prefers-reduced-motion` respected; light/dark via `prefers-color-scheme` plus a toggle (or CSS `light-dark()` as on timvandamme.com); `llms.txt` and markdown twins (blode.co pattern); WCAG AA contrast. Contrast was machine-checked (WCAG 2.x formula) against each direction's `--bg`: text ≥15:1, muted ≥5.6:1, and accents ≥5:1 in light and ≥6.7:1 in dark. Four accents were darkened after the first check failed (B teal 3.89 → `#087A5E` 5.08; B warn 4.02 → `#965A00` 5.35; C red 3.91 → `#B8381A` 5.12; A terracotta 4.50 → `#A64A28` 5.26).

### Direction A: "Research Editorial" (recommended primary)

Concept: a research-paper aesthetic warmed for humans. The serif carries ideas (headlines, paper titles); the sans carries the interface; mono carries metadata (venues, years, metrics). It evolves the current beige rather than discarding it, and sits in the same family as Anthropic and transformer-circuits without copying their exact ramps.

- **Fonts**:
  - Display and reading: **Newsreader** (opsz 6–72; headings at opsz ~48, body at ~16).
  - UI: **Inter** (or Inter Tight for headings in small sizes). Use `"cv01","ss03"` only after checking how the Turkish dotless ı and İ render with them.
  - Mono: **JetBrains Mono** or IBM Plex Mono at 0.8125rem for metadata.
  - All three are Turkish-verified.
- **Scale**: 1.25 ratio. Body 17/28px; h1 `clamp(2.5rem, 5vw, 4rem)`, serif, weight 400–500, tracking −0.01em; meta 13px mono uppercase, tracking +0.04em.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#F6F4EF` (warm paper; successor to `#e9e8e6`) | `#141412` |
| `--surface` | `#FFFFFF` | `#1C1B19` |
| `--surface-2` | `#EEEBE3` | `#24231F` |
| `--text` | `#1B1A17` | `#ECE9E2` |
| `--text-muted` | `#5C5A54` | `#A4A096` |
| `--rule` | `#DFDBD0` | `#2F2D29` |
| `--accent` (İznik cobalt, a Turkish ceramic nod) | `#1F4FA3` | `#8EB0F0` |
| `--accent-2` (sparingly: highlights, "new") | `#A64A28` (terracotta) | `#E08A66` |
| `--selection` | `#1F4FA3` @ 18% | `#8EB0F0` @ 25% |

- **Radius**: 4px for cards and images, 999px for tags. Mostly hairline-ruled rows instead of cards.
- **Shadow**: none by default. Hover uses a 1px rule colour change, or `0 1px 2px rgba(27,26,23,.06)`.
- **Motion**: **low**. 150–200ms colour and underline transitions; one fade-up on the hero; no smooth-scroll library.
- **Page patterns**:
  - Publications as transformer-circuits-style dated rows (year group → title, authors, venue, PDF / code / BibTeX links).
  - Projects as editorial case pages with "Fig. 1" captions (Linear device) and a TL;DR box (Webflow 2026 trend).
- **Risk**: can read "academic only". Mitigate with a metric strip from Direction B on project cards.

### Direction B: "Lab Notebook" (technical / monospace engineer)

Concept: production-systems credibility. Every project reads like a system record (status, stack, metrics, duration), in the Jonathan Moore / Linear / Vercel lineage, but kept *readable* with a sans body.

- **Fonts**: **Geist** (UI and body), **Geist Mono** (metadata, numbers, section markers `§ 01`). Optional display accent: **Instrument Serif** italic for one or two words in the hero. All Turkish-verified.
- **Scale**: 1.2 ratio. Body 16/26px Geist; h1 `clamp(2.25rem, 4.5vw, 3.5rem)` Geist 600, tracking −0.025em; mono meta 12–13px.

| Token | Light | Dark (default for this direction) |
|---|---|---|
| `--bg` | `#FAFAF9` | `#0B0C0E` |
| `--bg-1` (raised) | `#FFFFFF` | `#111316` |
| `--bg-2` (hover) | `#F2F2F0` | `#181A1E` |
| `--text` | `#0B0C0E` | `#EDEEF0` |
| `--text-muted` | `#62656B` | `#8C9099` |
| `--border` | `#E4E4E1` | `#23262B` |
| `--accent` (signal teal: "detection box" colour, nods to CV bounding boxes) | `#087A5E` | `#3FD0A4` |
| `--warn` (status pills: beta / research) | `#965A00` | `#F2B33D` |

- **Radius**: 6px for cards and inputs, 4px for pills. Hairline 1px borders everywhere; visible grid dividers (Mistral `divide-x` idea).
- **Shadow**: dark mode uses none (elevation by `--bg` level, as Linear does). Light mode uses `0 0 0 1px var(--border), 0 1px 2px rgba(0,0,0,.04)`.
- **Motion**: **low–medium**. Number counters on metrics (once, on view); bounding-box draw-on animation over a project image (pure CSS/SVG, ≤600ms); a status-pill pulse for "in production". Disable all of it under reduced motion.
- **Page patterns**: header with a mono timestamp (Istanbul time); experience log with `[production]` / `[research]` / `[archive]` tags; project cards with metric rows (e.g. "FAR@1e-4", "p95 latency", "docs/day"). Use real numbers only.
- **Risk**: dark-first can lower readability for long paper abstracts, and the terminal motif can feel gimmicky. Default to light on publication pages.

### Direction C: "Swiss Index" (grid-disciplined, with a restrained bento strip)

Concept: a neo-grotesk index page with a strict 12-column grid, numbered project index, condensed meta and one signal colour. It borrows galleries' craft (signal-a, fayemi, felixpeault) without the heavy motion. A small bento "at a glance" strip covers papers, years and systems shipped.

- **Fonts**: **Hanken Grotesk** or **Inter Tight** (display and UI), **Source Serif 4** italic (pull quotes, paper titles), **DM Mono** (indexes and numbers). Free alternative with more character: **Switzer** or **General Sans** (Fontshare). All Turkish-verified.
- **Scale**: 1.333 ratio. Body 16/25; h1 `clamp(3rem, 8vw, 6.5rem)` grotesk 500, tracking −0.035em (huge-headline / small-caption contrast trend); index numbers in mono 12px.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#F1F1EC` | `#0F0F0D` |
| `--surface` (bento tiles) | `#E6E6DF` | `#191917` |
| `--text` | `#111110` | `#F1F1EC` |
| `--text-muted` | `#5F5F58` | `#9C9C93` |
| `--rule` | `#CFCFC6` | `#2E2E2A` |
| `--accent` (Swiss signal red-orange) | `#B8381A` | `#FF6A45` |

- **Radius**: 0 for the index rows and images; 12px only for the bento strip tiles. The radius contrast is intentional.
- **Shadow**: none. Use flat tonal tiles.
- **Motion**: **medium**. Hover image preview following the cursor on the project index (desktop only); staggered line reveal on h1 (CSS only, no GSAP); no smooth-scroll hijack.
- **Risk**: bento is the trend most likely to date (peaked 2023–24; bento.me closed Feb 2026). Grotesk-only pages can feel cold for academics. Hover previews do not exist on touch devices.

### Recommendation (ASSESSMENT)

Use **A as the base system with B's metadata layer**:
- Newsreader + Inter + JetBrains Mono (or Geist Mono).
- Warm paper light theme, plus a Linear-style levelled dark theme.
- Cobalt accent.
- Mono status and metric rows on project cards.
- Low motion.

This serves all three audiences:
- **Academics** get a paper-like publications index.
- **Recruiters** get a scannable timeline and metrics.
- **Clients** get a clear services and "who I work with" block (the nickclement.com pattern).

It also stays fast, which supports the Karpathy-style "no 500-pound website" credibility. Add `llms.txt` and markdown twins as the AI-native differentiator.

---

## 7. URLs fetched

The WebSearch queries themselves are not listed. The articles they surfaced and actually used are cited inline (TechCrunch on Read.cv, AlternativeTo on Bento, Muzli, Webflow, line25 / madegooddesigns / thecssagency summaries).

**Galleries and articles**
- https://www.awwwards.com/websites/portfolio/ (OK)
- https://www.awwwards.com/websites/sites_of_the_day/ (OK)
- https://godly.website/ (301 → http://recent.design/?ref=godly)
- http://recent.design/?ref=godly (OK)
- https://www.siteinspire.com/websites?categories=19 (OK)
- https://minimal.gallery/category/portfolio/ (404)
- https://minimal.gallery/ (OK)
- https://minimal.gallery/tag/portfolio/ (OK)
- https://onepagelove.com/gallery/portfolio (OK)
- https://onepagelove.com/gallery/resume (OK)
- https://land-book.com/portfolio (403)
- https://www.lapa.ninja/category/portfolio/ (403)
- https://www.bestfolios.com/portfolios (empty: JS-rendered)
- https://www.framer.com/gallery/categories/portfolio (OK)
- https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/ (OK, first 100k chars)
- https://webflow.com/blog/web-design-trends-2026 (WebFetch header-overflow error; curl OK)

**AI companies** (HTML + CSS via script; rendered via WebFetch where noted)
- https://www.anthropic.com/ (script + WebFetch)
- https://openai.com/ (script 403; curl 200 + CSS chunks `/_next/static/immutable/chunks/*.css`)
- https://deepmind.google/ (script + WebFetch) + https://deepmind.google/static/dist/css/site.c5be1dde.css
- https://huggingface.co/ (script + WebFetch)
- https://mistral.ai/ (script + WebFetch)
- https://linear.app/ (script + WebFetch) + 10 CSS files under https://static.linear.app/web/_next/static/css/
- https://vercel.com/ (script + WebFetch)

**Individual sites** (script extraction; WebFetch rendered summary marked *)
- karpathy.ai*, colah.github.io, lilianweng.github.io, simonwillison.net*, gwern.net, maggieappleton.com*, brittanychiang.com*, leerob.com*, rauno.me*, paco.me*, emilkowal.ski*, www.joshwcomeau.com, sebastianraschka.com*, huyenchip.com, eugeneyan.com, distill.pub, transformer-circuits.pub* (home.css 403)
- huyml.co*, signal-a.studio*, dmcg.co (WebFetch 404, curl 200), samthies.com, felixpeault.com, taradash.me, astapable.com*, elihorn.ca*, fayemi.design, michaelgatt.com, xanvierallison.com (CSS on CDN 403), www.davidfiz.com, timvandamme.com*, meliketurgut.com*, www.sam-peitz.com*, gilhuybrecht.com, nickclement.com*
- jesperlandberg.com, balajmarius.com, blode.co*, mattrothenberg.com (403), jonathanmoore.com*, www.mariavasilyeva.com

**Font coverage checks**
- `https://fonts.googleapis.com/css2?family=<Family>&display=swap` for 70 families (+ the woff2 files on fonts.gstatic.com it references)
- `https://api.fontshare.com/v2/css?f[]=<family>@400&display=swap` for 13 families

**Fetch failures summary**
- land-book (403), lapa.ninja (403), bestfolios (JS-empty), minimal.gallery `/category/portfolio/` (404).
- godly.website (now redirects to recent.design).
- openai.com via WebFetch and the script (403; curl worked).
- webflow.com blog via WebFetch (header overflow; curl worked).
- mattrothenberg.com (403), transformer-circuits.pub/home.css (403), xanvierallison CSS (403), dmcg.co via WebFetch (404).

Supporting artefacts: `scratchpad/research/scripts/extract.py`, `scripts/turkish_check.py`, `turkish_check_results.txt`, `raw/`, `raw2/`, `raw3/` (`extract_log.txt` in each), `fontcache/`.
