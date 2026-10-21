# 02: Developer and design-engineer portfolios, evidence record

Research date: 2026-10-21. Purpose: inform the redesign of mozdemir.com (Muhammet Özdemir, AI researcher and engineer, academic plus industry, bilingual TR/EN, audience of recruiters, academics and freelance clients).

## Method and evidence tags

1. Every homepage in scope was downloaded with `curl` (desktop Chrome UA) into `scratchpad/research/raw02/`. Key sub-pages (projects, work, about, archive, résumé) went into `raw02/sub/`.
2. Each homepage's linked stylesheets plus inline `<style>` were downloaded into `raw02/css/<site>.css`. A script (`scripts02/analyze.py`) pulled `@font-face` families, `:root`/`html`/`body`/`.dark`/`[data-theme]` rules, custom-property colours, `max-width` frequencies, transition and animation durations, `cubic-bezier` easings, `border-radius` frequencies, `prefers-reduced-motion` counts, and the class attributes of `html/body/main/nav/header/h1`.
3. A second script (`scripts02/outline.py`) pulled `<title>`, meta description, `<nav>` links, h1 to h3 headings, a skip-link check, the image and empty-alt counts, HTML size and script count.
4. Where a site is open source, files were read from `raw.githubusercontent.com` (bchiang7/v4, antfu/antfu.me, leerob/site).
5. WebFetch was used for rendered-content summaries of a few homepages.

Tags used on every design value:
- **SOURCE:repo**: read from the site's public source repository.
- **SOURCE:css**: read from the deployed production CSS bundle (code, not a guess).
- **SOURCE:html**: read from the production HTML markup, such as Tailwind class names, heading text or attributes.
- **OBSERVED**: read from the fetched page's rendered text or content summary.
- **UNKNOWN**: not verifiable from what was fetched.

Notes on the measurements:
- "Dominant durations" and "dominant radii" are frequency counts across the whole CSS bundle. Framework defaults inflate them, for example Tailwind's `.15s` with `cubic-bezier(.4,0,.2,1)`.
- Hex values for Tailwind utilities were converted from the `rgb()` values in the deployed CSS. For example, `bg-slate-900` reads `rgb(15 23 42)`, which is #0f172a.

---

## Site cards

### 1. Brittany Chiang (current, "v5"): https://brittanychiang.com
- **Fetched:** yes (homepage, `/archive`, CSS bundle). There is no public repo for this version; the pinned repos are v4, bchiang7.github.io (v3), halcyon-vscode and spotify-profile (OBSERVED, github.com/bchiang7). The footer says "Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface." (OBSERVED).
- **Concept:** a calm, dark, two-column résumé-site. Identity and nav are pinned on the left, and a scrolling proof stack sits on the right.
- **Information architecture:**
  - Single-page home with anchor nav: About (`#about`), Experience (`#experience`), Projects (`#projects`) (SOURCE:html). The Writing section is not in the nav.
  - Sections in order: Hero/identity (left column), About, Experience, Projects, Writing, Footer (OBSERVED).
  - Sub-pages: `/archive` ("All Projects" table) and `/resume.pdf`.
  - A project is reachable with 0 clicks (scroll) or 1 click on the "Projects" nav item.
- **Above the fold:**
  - h1 "Brittany Chiang", h2 "Frontend Engineer", tagline "I build accessible, pixel-perfect experiences for the web." (SOURCE:html).
  - Three-item vertical nav and a row of social icons (GitHub, LinkedIn, CodePen, Instagram, Goodreads).
  - No button CTA. The nav itself is the CTA.
- **Project/work presentation:**
  - Each project is a list item on an 8-column grid: thumbnail `col-span-2 aspect-video rounded border-2 border-slate-200/10` plus a text block `col-span-6` (SOURCE:html).
  - Fields: linked title with an arrow icon, description, optional stat badge (e.g. "100k+ Installs"), tech pills.
  - Pill: `rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300` (SOURCE:html).
  - The section ends with a "View Full Project Archive" link.
  - `/archive` is a table with the columns **Year | Project | Made at | Built with | Link** (SOURCE:html heading text, e.g. "2023 Emerson Collective Upstatement Next.js TypeScript SCSS Contentful emersoncollective.com").
- **Experience format:**
  - Six entries, newest first. Grid `sm:grid-cols-8`. The date header is `sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-slate-500`, and the content is `col-span-6` (SOURCE:html).
  - Fields: date range, "Title · Company" (company linked), description, optional extra links (press), tech pills.
  - Promotions are shown as stacked previous titles under one company ("Lead Engineer · Upstatement / Senior Engineer / Engineer").
  - The list ends with a "View Full Résumé" link.
- **Typography:**
  - Inter via next/font with `font-feature-settings:"ss03","cv02","cv11"` on `html` (SOURCE:css).
  - Base `html line-height:1.5`; body `leading-relaxed` (SOURCE:html).
  - h1 `text-4xl` (2.25rem/2.5rem) to `sm:text-5xl` (3rem/1), `font-bold tracking-tight` (SOURCE:html+css).
  - h2 role line `text-lg` to `sm:text-xl` `font-medium tracking-tight`.
  - Nav text `text-xs font-bold uppercase tracking-widest` (SOURCE:html).
- **Colour:**
  - Dark only; no `.dark` or `prefers-color-scheme` rules (SOURCE:css).
  - bg `slate-900` #0f172a. Body text `slate-400` #94a3b8. Headings `slate-200` #e2e8f0. Meta `slate-500` #64748b. Accent `teal-300` #5eead4. Selection `bg-teal-300 text-teal-900` (SOURCE:html+css).
  - A cursor spotlight overlays the page: `radial-gradient(600px circle at Xpx Ypx, rgba(29, 78, 216, 0.15), transparent 80%)` on a fixed full-screen div (SOURCE:html).
- **Layout:**
  - Container `mx-auto max-w-screen-xl` (1280px) `px-6 md:px-12` (SOURCE:html).
  - On `lg` and up the header is `lg:sticky lg:top-0 lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24` and main is `lg:w-[52%] lg:py-24` (SOURCE:html). This is the signature sticky-left-column pattern.
  - Sections use `mb-16 md:mb-24 lg:mb-36 scroll-mt-16 lg:scroll-mt-24`.
  - On mobile, each section gets a sticky label bar: `sticky top-0 bg-slate-900/75 backdrop-blur ... lg:sr-only` (SOURCE:html).
- **Motion:**
  - Nav indicator: a line `h-px w-8 bg-slate-600` that grows to `w-16 bg-slate-200` on hover/focus and when the section is `.active` (scroll-spy). `.active .nav-indicator{width:4rem}` (SOURCE:css).
  - Card hover: an absolutely positioned backdrop gets `lg:group-hover:bg-slate-800/50` with an inset top highlight `shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]` and `drop-shadow-lg`.
  - Sibling cards dim with `lg:group-hover/list:opacity-50` while the hovered one stays at `!opacity-100` (SOURCE:html).
  - Link arrows move `-translate-y-1 translate-x-1` on hover.
  - Timing is Tailwind default `.15s cubic-bezier(.4,0,.2,1)`. The spotlight uses `duration-300` (SOURCE:css/html).
- **Accessibility and performance:**
  - "Skip to Content" link present. `motion-reduce:transition-none` on every animated element. `focus-visible` mirrors hover. `sr-only` section headings on desktop. 9 images, 0 empty alts (SOURCE:html).
  - HTML 63 KB, 12 scripts, one 29 KB CSS file (SOURCE).
  - Inter woff2 files are preloaded.
- **Wayfinding:**
  - Strengths: the persistent left column means identity and nav are always visible. Scroll-spy shows where you are. Projects are one click away. The archive table scales to dozens of projects.
  - Weaknesses: desktop nav is `hidden lg:block`, so mobile has no nav, only sticky section labels. Writing is not in the nav. Dark only.
- **Relevance: 5/5.** It fixes the client's core problem (visitors can't reach projects). Borrowable patterns:
  - Sticky left identity column with scroll-spy nav.
  - Experience list with date column and tech pills.
  - Project rows with thumbnails and outcome badges (for example "Ministry of Health funded", "in production").
  - A `/archive` table with Year, Project, Context (University/Company/Freelance), Stack, Link.
  - Dimming of sibling cards.
  - **Caution:** the layout is now heavily imitated, so mozdemir.com should change palette and type.

### 2. Brittany Chiang v4 (2020 to 2023, Gatsby): https://v4.brittanychiang.com
- **Fetched:** live site no (WebFetch returned only "Loader Logo", because the content renders client-side after a loader). Repo yes: https://github.com/bchiang7/v4 (8.3k stars, OBSERVED). Read `src/styles/variables.js`, `GlobalStyle.js`, `config.js`, `utils/index.js`, `components/nav.js`, `side.js`, `email.js`, `social.js`, and `sections/hero.js`, `about.js`, `jobs.js`, `featured.js`, `projects.js`, `contact.js`.
- **Concept:** the most-cloned developer portfolio of its era. It is a navy-and-mint single page with numbered sections.
- **Information architecture:**
  - navLinks: About `/#about`, Experience `/#jobs`, Work `/#projects`, Contact `/#contact`, plus a "Resume" outline button that opens `/resume.pdf` in a new tab (SOURCE:repo).
  - Section headings: "About Me", "Where I've Worked", "Some Things I've Built", "Other Noteworthy Projects", "What's Next?" / "Get In Touch" (SOURCE:repo).
  - Headings are auto-numbered with `content: '0' counter(section) '.'` in green, followed by a 300px rule (SOURCE:repo).
  - Single page plus `/archive`.
- **Above the fold (SOURCE:repo `hero.js`):**
  - Lines: "Hi, my name is" / "Brittany Chiang." / "I build things for the web."
  - Paragraph: "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences…"
  - CTA button: "Check out my course!"
  - Items fade up in sequence after the loader.
- **Projects:**
  - **Featured:** a 12-column grid where the image (`grid-column: 6 / -1` or `1 / 7`, alternating) overlaps the content block. Fields: overline "Featured Project", title, description card with shadow, tech list (mono), GitHub and external icons.
  - Images are tinted: `mix-blend-mode: multiply; filter: grayscale(100%) contrast(1) brightness(90%)` until hover (SOURCE:repo).
  - **Other Noteworthy Projects:** a card grid `repeat(auto-fill, minmax(300px, 1fr))` with `GRID_LIMIT = 6` and a "Show More" toggle, plus a "view the archive" link (SOURCE:repo).
- **Experience:**
  - A tabbed list, `role="tablist"` with arrow-key focus management.
  - Tab height `--tab-height: 42px`, width `--tab-width: 120px`.
  - A 2px highlight bar slides with `transform: translateY(calc(activeTabId * var(--tab-height)))` over `0.25s cubic-bezier(0.645, 0.045, 0.355, 1)`.
  - On screens ≤600px the tabs become horizontal and the bar uses translateX (SOURCE:repo).
- **Typography:**
  - `--font-sans: 'Calibre','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif`; `--font-mono: 'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace`.
  - Scale: 12/13/14/16/18/20/22px, heading 32px.
  - Body `font-size: var(--fz-xl)` (20px), and `--fz-lg` (18px) at ≤480px. `line-height: 1.3`.
  - `.big-heading: clamp(40px, 8vw, 80px)`; `.numbered-heading: clamp(26px, 5vw, 32px)` (all SOURCE:repo).
- **Colour (SOURCE:repo):** `--navy #0a192f`, `--light-navy #112240`, `--lightest-navy #233554`, `--dark-navy #020c1b`, `--slate #8892b0`, `--light-slate #a8b2d1`, `--lightest-slate #ccd6f6`, `--white #e6f1ff`, `--green #64ffda`, `--pink #f57dff`, `--blue #57cbff`. Dark only.
- **Layout (SOURCE:repo):**
  - `main` `max-width:1600px; padding:200px 150px`, shrinking down to `125px 25px` at ≤480px. Sections `max-width:1000px; padding:100px 0`.
  - `--nav-height:100px`, shrinking to `70px` on scroll. The nav hides on scroll-down and shows on scroll-up with `backdrop-filter: blur(10px)`.
  - Fixed side rails: social icons at `left:40px` and the email address in `writing-mode: vertical-rl` at `right:40px`.
  - Radius 4px.
- **Motion (SOURCE:repo):**
  - `--transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1)`.
  - Logo loader, then `loaderDelay = 2000` ms and `navDelay = 1000` ms.
  - ScrollReveal `srConfig`: `distance '20px', duration 500, delay 200, viewFactor 0.25, easing cubic-bezier(0.645,0.045,0.355,1)`.
  - Focus `outline: 2px dashed var(--green); outline-offset: 3px`.
- **Accessibility and performance:** skip link, keyboard-operable tabs, custom focus ring (SOURCE:repo). The 2-second loader delays content, and the live site was not readable by WebFetch at all.
- **Wayfinding:** the numbered sections help people orient. The tabbed experience hides most content behind clicks. The loader hurts first paint.
- **Relevance: 3/5.** Borrow the tabbed experience and the "Other Noteworthy Projects" grid with a Show More limit. Avoid the loader and the cloned look. The README asks forks to "give me proper credit by linking back to brittanychiang.com" (SOURCE:repo). This is a licensing and ethics note if code is reused.

### 3. Lee Robinson: https://leerob.com
- **Fetched:** yes (homepage, CSS). Repo https://github.com/leerob/site is fetched but no longer matches the live site. It is now a generic "Next.js + MDX blog template" (`layout.tsx` metadata title "John Smith", Inter, `max-w-[60ch]`) (SOURCE:repo). The live site's CSS shows a different design (Iowan Old Style, `.site-shell`).
- **Concept:** a writer's index. A serif bio sits above a list of essays.
- **Information architecture:**
  - No nav bar. h1 is "@leerob" (handle link) (SOURCE:html).
  - Sections: Bio (with a "Default / Long" bio-length switch, OBSERVED as "Bio DefaultLong"), Notes (10 topic links), Blogs (8 posts with month-year) (OBSERVED).
  - Multi-page (each note or post is a page).
  - There are no projects. Work history appears only in prose: "I work on ML at SpaceX (formerly at Cursor)…".
- **Above the fold:** handle, the Bio toggle and "I'm an engineer and writer." No CTA except a mailto on "angel invest".
- **Projects:** none. Experience: prose only.
- **Typography (SOURCE:css):**
  - `--font-reading: "Iowan Old Style Local","Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif`. Body `font-size:17px; line-height:1.6`.
  - `--font-ui: ui-sans-serif,-apple-system,…` used at 13px for meta.
  - `.site-title` `font-size: clamp(2.2rem,3.5vw,2.65rem); font-weight:600; letter-spacing:-.02em; line-height:1.15`.
  - `.writing-index h2` 1.45rem/600. Caveat is used for handwritten accents.
- **Colour (SOURCE:css):**
  - Light: `--bg #fff`, `--text-copy #171717`, `--text-heading #000`, `--text-nav #6b7280`.
  - Dark (`.dark`): `--bg #1a1a1a`, `--background #0a0a0a`, `--text-copy #eaeaea`, `--text-heading #f2f2f2`, `--text-nav #afafaf`.
  - shadcn token set present; `--radius: .625rem`.
- **Layout (SOURCE:css):** `.content-frame{--content-width:600px; width:min(100%,var(--content-width))}`; `.site-shell{--page-pad: clamp(1.25rem,3.4vw,3.25rem); container-type:inline-size}`. Single centred column.
- **Motion:** minimal. `.site-title-link` `transition: opacity .2s`. Durations `.3s` and `.16s` (SOURCE:css).
- **Accessibility and performance:** no skip link. The **HTML is 802 KB with 213 `<script>` tags** (SOURCE:html, mostly RSC payload). That is heavy for a text page.
- **Wayfinding:** excellent for reading, but there is no route to "what has he built".
- **Relevance: 2/5.** Borrow the **short/long bio toggle** (useful for a recruiter vs academic audience), the serif reading face for research write-ups, and the 600px measure. Do not copy the project-less IA.

### 4. Josh W. Comeau: https://www.joshwcomeau.com
- **Fetched:** yes (homepage, `/about-josh/`, CSS). Closed source.
- **Concept:** a playful education brand. Whimsy (sounds, springs, pride-flag toggles) is part of the content.
- **Information architecture:**
  - Nav: categories, courses, goodies, About (OBSERVED; only "About" is a plain `<a>` in `<nav>`, the others are menus).
  - Home: "Articles and Tutorials" (12 cards plus "Show more"), "Browse By Category" (CSS, React, Animation, Career, JavaScript, SVG, Next.js, General), "Popular Content" (numbered top 10), author block plus newsletter, footer (OBSERVED).
  - Multi-page.
- **Above the fold:** the latest article card (title, subtitle, blurb, "Read more"). The CTA is a newsletter signup.
- **Project presentation:** courses are links only. The About page contains interactive facts: a pronunciation button, an imperial/metric toggle and drum keys Q/W/E/R (OBSERVED).
- **Typography (SOURCE:css):**
  - `--font-family: "Wotfard","Wotfard-fallback",sans-serif`; `--font-family-mono: "Cartograph CF",monospace`; `--font-family-spicy: "Sriracha"…`.
  - Weights: light 400, medium 500, bold 600.
  - `body{line-height:1.5; line-height:calc(.95 + .62rem)}` (verbatim).
- **Colour (SOURCE:css/html):**
  - Light: `--color-text #0a0c10`, `--color-background #fff`, `--color-primary #4242fa`, `--color-secondary #e60067`, `--color-tertiary #2c0b8e`, `--color-decorative #63bce9`, selection `#ffec8f`.
  - Dark: via `html[data-color-mode=dark]` with the vars inlined on `<html style>` (no flash) and a selection of `rgba(139,133,173,.35)`.
- **Layout:** most common max-width `48rem` (19 uses), also `67.125rem` and `50rem` (SOURCE:css).
- **Motion (SOURCE:css):**
  - Dominant durations `.3s` (17) and `.5s` (15); custom springs such as `cubic-bezier(.27,.22,.44,1.03)` and `cubic-bezier(0,.67,.6,1.24)`.
  - **27 `prefers-reduced-motion` blocks**, the most thorough of the CSS-animated sites.
  - A global "Disable sounds" toggle (OBSERVED).
- **Accessibility and performance:** no skip link. HTML 118 KB, 32 scripts. Reduced-motion support is exemplary, and the sound toggle is explicit.
- **Wayfinding:** strong taxonomy (categories plus popular plus search). The person is secondary to the content.
- **Relevance: 2/5.** Borrow the "Popular content" numbered list (for top papers), the category tiles (for research areas) and the reduced-motion discipline.

### 5. Paco Coursey: https://paco.me
- **Fetched:** yes (homepage, `/craft`, CSS). Repo https://github.com/pacocoursey/paco exists (`package.json` on `master` returned 200, SOURCE:repo existence only). Design values below are from the deployed CSS.
- **Concept:** quiet typographic minimalism. "Crafting interfaces." It reads like a printed page.
- **Information architecture:**
  - No nav on home (SOURCE:html).
  - h2 sections in order: Building, Projects, Writing, Now, Connect (SOURCE:html).
  - Sub-pages `/craft` (grouped Motion / CSS / Interaction) and `/writing`.
  - Clicks to a project: 0, because projects link straight out to GitHub.
- **Above the fold:** "Paco Coursey / Crafting interfaces. Building polished software and web experiences… Webmaster at Linear. In the past I've developed the Vercel design system, website, and dashboard." (OBSERVED). No CTA.
- **Projects:** a list of name plus one-line description ("⌘K, Composable command menu React component."). No dates, images or tags (OBSERVED).
- **Experience:** prose in the hero.
- **Typography (SOURCE:css):**
  - `--font-sans: "Sohne","Inter",var(--font-fallback)`; `--font-serif: "Newsreader","Signifier","Times",serif`; `--font-ui`/`--font-display: "Inter"`.
  - Subset fonts are preloaded: `/fonts/inter-subset.woff2`, `sohne-subset-0.woff2`, `newsreader-subset-0.woff2` (SOURCE:html).
  - `html{font-size:16px}`.
- **Colour (SOURCE:css):**
  - `--fg #000`, `--bg #fff`. A Radix-style 12-step gray: `--gray-1 #fcfcfc` … `--gray-9 #8d8d8d`, `--gray-11 #646464`, `--gray-12 #202020`, plus alpha grays.
  - Dark: `prefers-color-scheme` (2 rules, automatic). No toggle observed.
- **Layout (SOURCE:css):** `--content-width:640px`; `html{scroll-padding-top: calc(var(--header-height) + var(--gap-2x))}`. Sidenotes sit in the margin above 1024px.
- **Motion:** `[data-animate]` on headings; few transitions (`.3s` to `.6s`) (SOURCE:css/html). 1 reduced-motion rule.
- **Accessibility and performance:** HTML 10.5 KB, the lightest Next.js site in the set. No skip link.
- **Wayfinding:** the whole site is one screen. There is no depth for case studies.
- **Relevance: 3/5.** Borrow the **section vocabulary** (Building / Projects / Writing / Now / Connect, which maps to Research / Systems / Papers / Now / Contact), the subset-font preloading and the 640px measure.

### 6. Rauno Freiberg: https://rauno.me
- **Fetched:** yes (homepage, `/craft`, `/projects`, CSS). Closed source.
- **Concept:** an interaction designer's gallery of prototypes. The homepage is one sentence.
- **Information architecture:**
  - h1: "Rauno Freiberg is an Estonian interaction designer working with Vercel and Devouring Details" (SOURCE:html).
  - h3 entries: DD, Craft, Projects, plus Field Notes, Twitter, 2023, 2022, GitHub, Email ("Copied", a click-to-copy email).
  - Footer mantra: "Make it fast. Make it beautiful. Make it consistent. Make it carefully. Make it timeless. Make it soulful. Make it." (OBSERVED).
- **Projects:**
  - `/projects` is name plus year only ("Web Interface Guidelines 2023", "Vesper 2023", "⌘K 2022" …) (OBSERVED).
  - `/craft` is a media grid (81 images/videos) where each item has a title, month-year and an action label: "View Prototype", "View Production" or "Read Essay" (OBSERVED).
- **Typography (SOURCE:css):** `--fonts-body: X, -apple-system, …` (a custom face named "X", preloaded `/dd.woff2`), JetBrains Mono, Georgia serif fallback.
- **Colour (SOURCE:css):** a Radix-style gray in HSL for dark: `--colors-gray1: hsl(0 0% 8.5%)` … `gray12: hsl(0 0% 93.0%)`. Accents `--orange #FF6100`, `--yellow #FFFF02`, `--neon1 rgb(209,255,0)`, `--blue rgb(5,111,247)`. Theme via `.dark`.
- **Layout:** max-widths 400px and 960px (SOURCE:css).
- **Motion:** `cubic-bezier(.2,.8,.2,1)`; `.25s` and `.35s` (SOURCE:css). 0 reduced-motion rules.
- **Accessibility and performance:** no skip link. The craft page is 226 KB of HTML with heavy video.
- **Wayfinding:** cryptic labels (DD, Field Notes) only work for an audience that already knows him.
- **Relevance: 2/5.** Borrow the **action-labelled media grid** ("View demo / Read paper / View production") for CV demos (YOLO counting, OCR/face-match) and click-to-copy email.

### 7. Emil Kowalski: https://emilkowal.ski
- **Fetched:** yes (homepage, CSS). `/about` returned 404. Closed source.
- **Concept:** design-engineer minimalism with very fine hover polish.
- **Information architecture:**
  - A sticky announcement bar ("Enrollment for my new course aiforui.dev is open! 10 days left to join.") (OBSERVED).
  - Header: "Emil Kowalski / Design Engineer". Bio: "Today I work on the Web team at Linear…"
  - Sections: Projects (aiforui.dev, Sonner, animations.dev, Vaul), Writing (titles with subtitles), newsletter (OBSERVED).
  - No nav.
- **Projects:** row = name plus one-liner. Row class `-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-gray-200 sm:py-3` (SOURCE:html). This is a "hover pill" that bleeds into the margin.
- **Typography (SOURCE:css):** `--font-sans:"Sans"`, `--font-mono:"Mono"`, `--font-serif:"Serif"` plus `"serifInline"` (self-hosted; actual typeface names are UNKNOWN). Body `text-gray-1100`, labels `font-medium`.
- **Colour (SOURCE:css):**
  - Light gray scale `--color-gray-100 #fdfdfc`, `-500 #e2e1de`, `-900 #8d8d86`, `-1100 #63635e`, `-1200 #21201c` (warm, Radix "sand"-like).
  - Dark `.dark`: `--color-gray-100 #111110` … `-1200 #eeeeec`.
  - `--brand #fad657`. Vercel-style shadow tokens `--ds-shadow-*`.
- **Layout:** `max-w-[692px] px-6 py-12 sm:py-32 md:py-16`; `header mb-32` (SOURCE:html).
- **Motion (SOURCE:css):** `.15s` dominant; a custom `cubic-bezier(.165,.84,.44,1)` (easeOutQuart); 1 reduced-motion rule. The newsletter input is a pill `h-12 rounded-full` with a `focus-within:ring-2 ring-black/20` ring.
- **Accessibility and performance:** HTML 28 KB. No headings detected in the server HTML (h1 to h3 absent, SOURCE:html), which is a semantic weakness.
- **Wayfinding:** clear for a small body of work.
- **Relevance: 3/5.** Borrow the hover-bleed list rows for publications and projects, the warm gray scale and the sticky announcement bar (for example "Open to freelance AI consulting").

### 8. Delba de Oliveira: https://delba.dev
- **Fetched:** yes (homepage, CSS). Closed source; `delbaoliveira/website` returned 404.
- **Concept:** a portfolio built as a job-search page. It is explicit about what she wants next.
- **Information architecture:**
  - `<title>Portfolio`. h1 "Portfolio", then h2 Work, Personal, About me (SOURCE:html).
  - Single page.
- **Above the fold:** "I'm looking for my next role in developer education or technical video production. If you're hiring: **Let's talk**." The CTA button is `rounded-md bg-stone-800 px-4 py-2 text-base font-medium text-white hover:bg-stone-700` (SOURCE:html/OBSERVED).
- **Work presentation:** each entry is a bold linked name, a colon, then her contribution and role. Examples: "Next.js Docs: Built, authored, and maintained." "v0 docs: IA, asset sourcing, and technical writing review." (OBSERVED). This is a contribution-first format.
- **Typography (SOURCE:css/html):** Geist Sans (body), Geist Mono, Geist Pixel (Square/Grid/Circle/Triangle/Line), Fraunces and Radley serifs; `prose prose-stone`.
- **Colour:** `bg-stone-50`, text `stone-500/400`. Light only; `[data-theme]` rules exist only for the code-theme vars (SOURCE:css).
- **Layout:** `body mx-auto max-w-5xl px-12 py-36`; content `grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr]` (SOURCE:html).
- **Motion:** `transition-opacity duration-500` fade-in (SOURCE:html).
- **Accessibility and performance:** no skip link; HTML 63 KB.
- **Wayfinding:** excellent intent signalling, with very little navigation needed.
- **Relevance: 4/5.** Borrow the **availability statement plus "Let's talk" CTA above the fold** (freelance clients and recruiters) and the **"Project: what I did" contribution lines** (for example "Mammography AI: model training, data pipeline, Ministry of Health reporting").

### 9. Anthony Fu: https://antfu.me
- **Fetched:** yes (homepage, `/projects`, CSS). Repo https://github.com/antfu/antfu.me: read `src/styles/main.css`, `src/styles/prose.css`, `unocss.config.ts`, `src/components/ListProjects.vue` (SOURCE:repo).
- **Concept:** an open-source maintainer's hub. Prose-first, with an exhaustive projects catalogue.
- **Information architecture:**
  - Nav: Blog, Projects, Talks, Sponsors, plus icon links (podcasts, photos, demos, Bluesky, GitHub, RSS) (SOURCE:html).
  - The home is prose with inline link lists ("Working at Vercel / Nuxt", "Creator of Vitest Slidev VueUse UnoCSS…", "Recent work", "Core team of", "Maintaining").
  - `/projects` is grouped by category (Current Focus, Nuxt Ecosystem, DevTools, Vite Ecosystem…). It opens with GitHub / Recent Releases / Yak Map buttons.
  - Clicks to projects: 1.
- **Project presentation:** each category has a giant faded heading (`select-none relative h18 mt5 pointer-events-none`) and a grid of name plus one-line description plus icon (SOURCE:repo).
- **Typography (SOURCE:repo):**
  - UnoCSS `presetWebFonts`: sans Inter, mono DM Mono, condensed Roboto Condensed, "wisper" Bad Script.
  - `.prose{max-width:65ch; font-size:1rem; line-height:1.75}`; lead `1.25em / 1.6`.
- **Colour (SOURCE:repo/css):**
  - `--c-bg #fff` and dark `html.dark --c-bg #050505`; `--fg #555`, `--fg-deep #222`, `--fg-deeper #000`, `--fg-light #888`.
  - Selection `#8884`; `border-base: #8884`. `color-scheme: light dark`.
- **Layout:** `main px-7 py-10`; prose 65ch; projects `max-w-300` (UnoCSS, 75rem) (SOURCE:html/repo).
- **Motion (SOURCE:repo):**
  - `@keyframes slide-enter{0%{translate:0 10px;opacity:0}}`, `animation: slide-enter 1s both`, `--enter-step: 90ms` stagger per child, only inside `@media (prefers-reduced-motion: no-preference)`.
  - Buttons: `op50 … transition-all duration-200 ease-out hover:(op100 text-color bg-color/10)`.
- **Accessibility and performance:** HTML 16 KB. 3 reduced-motion blocks. No skip link.
- **Wayfinding:** the categories make a large catalogue scannable.
- **Relevance: 3/5.** Borrow the **projects grouped by theme** (AutoML research / Computer vision in production / Consulting / Community), the stagger-on-enter with a reduced-motion guard (copy-ready values: 10px, 1s, 90ms step) and the `op50 → op100` buttons.

### 10. Cassie Evans: https://cassie.codes
- **Fetched:** yes, but **the portfolio is retired.** The page now reads "Thanks for reading. It was a joy to maintain a personal site… It feels different now and it no longer nourishes me…" with links to LinkedIn and Discord (OBSERVED). The CSS is 2 KB: `html{background-color:black}`, a system-ui stack, `max-width:24rem` card (SOURCE:css).
- **Concept (historic):** a GSAP/SVG animation showcase. Its historic design could not be verified from current fetches (UNKNOWN).
- **Relevance: 1/5.** Nothing current to borrow.

### 11. Bruno Simon: https://bruno-simon.com
- **Fetched:** yes (homepage HTML and CSS; the 3D scene itself is WebGL/WebGPU and was not rendered).
- **Concept:** an extreme example. The portfolio is a drivable 3D world.
- **Information architecture:**
  - Overlay panels in the HTML: Home ("Welcome! My name is Bruno Simon, and I'm a creative developer (mostly for the web). This is my portfolio. Please drive around…"), Three.js, Three.js Journey, Devlogs, Source code, Musics, Some more links (SOURCE:html).
  - An Options menu (Audio, Quality, "I'm stuck!" respawn, Reset, Renderer WebGPU).
  - Control maps for Mouse, Keyboard (WASD, Shift boost, Space jump, M map…), Mobile, Tablet and Gamepad (OBSERVED).
- **Typography (SOURCE:css/html):** Pally (Regular/Medium/Bold), Nunito 400/700/900 and Amatic SC 700 from Google Fonts. `html{font-size:20px}`.
- **Colour (SOURCE:css):** `html{background: radial-gradient(farthest-side at 0 0, #251f2b, #1d1721)}`.
- **Motion (SOURCE:css):** springy overshoot eases such as `cubic-bezier(.4,1.6,.65,1)` and `cubic-bezier(.49,2.2,.53,.75)`. 0 reduced-motion rules.
- **Accessibility and performance:** 44 `<img>` tags. Text panels exist in the DOM, which is good. But reaching content requires driving, and there is no reduced-motion handling.
- **Wayfinding:** deliberately poor. Discovery is the point.
- **Relevance: 1/5.** One idea to borrow, **an "I'm stuck!" escape hatch**: if any interactive demo is added (for example a live YOLO counter), always give a plain-HTML path to the same information.

### 12. Tania Rascia: https://www.taniarascia.com
- **Fetched:** yes (homepage, `/projects/`, `/me/`, CSS). The repo path `taniarascia/taniarascia.com/main/package.json` returned 404, so the source location is UNKNOWN. The footer says "Gatsby … Netlify" (OBSERVED).
- **Concept:** a "digital garden". Warm, personal, documentation-heavy.
- **Information architecture:**
  - Nav: Blog, Shelves, Projects, About me (SOURCE:html).
  - Sidebar: "I'm Tania, software engineer and open-source creator. This is my digital garden 🌱", plus Email signup, GitHub, Bluesky, RSS feed, New Moon, **Resume**, Topics, Source (OBSERVED).
  - Home h2 order: **A brief timeline**, Latest, Shelves, Series, Projects (SOURCE:html).
- **Above the fold:** "Hey, I'm Tania! Principal software engineer, writer, all-around nerd." followed by a career timeline.
  - "1998–2006 Geocities kid…"
  - "2007–2014 Professional chef…"
  - "2014–2020 Career change…"
  - "2021–now Principal software engineer: … 177 posts, 40+ publications, and 20,000+ stars on GitHub." (OBSERVED)
- **Projects (`/projects/`):** card list with **year, name, one-liner, then Article / Demo / Source links** (for example "2019 Chip8 Retro game emulator Article Demo Source") (OBSERVED).
- **About (`/me/`):** Contact, What I'm Doing Now (dated "Updated August 16th, 2026"), Tools (Software/Hardware), Publications, Books, Interviews & Podcasts, Speaking, Songs, Miscellaneous (SOURCE:html).
- **Typography (SOURCE:css):** "Google Sans Flex Variable" (UI/body), "Outfit Variable" (headings), "Google Sans Code Variable" (code).
- **Colour (SOURCE:css):**
  - Grays `--gray-0 #fbfbfb` … `--gray-12 #0d0d11`; beige `--beige-0 #f8f4e6` … `--beige-4 #c6ba93`; `--color-primary: var(--theme-yellow)`.
  - **64 `prefers-color-scheme` rules** plus a user "Color Theme" picker (OBSERVED).
- **Layout:** max-widths 799px and 65ch (SOURCE:css).
- **Motion:** almost none (`.15s`/`.25s`). 0 reduced-motion rules (none needed).
- **Accessibility and performance:** no skip link. 25 images with 22 `alt=""` (probably decorative icons, but worth checking). HTML 212 KB.
- **Wayfinding:** very good. Résumé, projects and timeline are all one click or less from home.
- **Relevance: 4/5.** Borrow:
  - The **"brief timeline" on the homepage**, which tells a career-change story in four lines. It suits the client's academia to production to consulting arc.
  - The **Article / Demo / Source link triplet** per project. Map it to **Paper / Demo / Code** for research.
  - A dated "Now" block.

### 13. Shu Ding: https://shud.in
- **Fetched:** yes (homepage, `/projects`, CSS). Repo https://github.com/shuding/shud.in exists (`package.json` 200); design values are from the deployed CSS.
- **Concept:** a scholarly, typographic engineer page. A muted "rurikon" blue-gray palette and a math-ready setup.
- **Information architecture:**
  - Nav: About, Thoughts, Projects, Guestbook. Lowercase, right-aligned and **sticky** (`lowercase text-right mobile:sticky top-6 sm:top-10 md:top-14`) in a left rail (SOURCE:html).
  - Home is a single bio paragraph that includes education: "In 2017, I earned my BSc degree in Computer Science from Fudan University… joined… Microsoft. In 2018, I joined Vercel (ZEIT) and worked on the core platform, Next.js, AI SDK, v0…" (OBSERVED).
  - Clicks to projects: 1.
- **Projects (`/projects`):** a narrative h2 per project (Next.js, v0, Vercel AI SDK, Vercel, React Best Practices, SWR, Satori, COBE, GPU Lexer, React Wrap Balancer, Next View Transitions). Each has a paragraph on **what he personally did** ("I designed the first client-side hook APIs and implemented function calling…") (OBSERVED).
- **Typography (SOURCE:css/html):**
  - `--sans/--serif/--mono` with preloaded InterVariable, IosevkaFixedCurly ExtendedMedium and LoraItalicVariable. **KaTeX font faces are bundled.**
  - Body `text-sm leading-6` → `sm:text-[15px] sm:leading-7` → `md:text-base md:leading-7`. h1 `font-semibold mb-7 text-rurikon-600 text-balance`.
- **Colour (SOURCE:css):** `--color-rurikon-50 #ebedef` … `-300 #8c95a1` … `-500 #4a515b` (body) … `-800 #1e2125`; `--background #fcfcfc`; links underline `decoration-rurikon-300 → hover:decoration-rurikon-600`. No dark mode detected (0 `.dark`/media rules).
- **Layout:** `body p-6 sm:p-10 md:p-14`; `main max-w-2xl` (42rem) with `[contain:inline-size]` (SOURCE:html).
- **Motion:** `transition-colors` only; 1 reduced-motion rule (SOURCE:css).
- **Accessibility and performance:** focus-visible outlines defined (`focus-visible:outline-rurikon-400 outline-offset-1`) (SOURCE:html). HTML 17 KB.
- **Wayfinding:** a tiny, persistent nav. Projects are story-driven but have no images.
- **Relevance: 4/5.** It is closest in spirit to an engineer-researcher. Borrow:
  - The **sticky minimal side nav**.
  - **Education inside the bio sentence**.
  - **Per-project "what I did" narrative**.
  - **KaTeX-ready typography** for equations (GP/ABC/NAS papers).
  - The muted blue-gray palette.

### 14. Guillermo Rauch: https://rauchg.com
- **Fetched:** yes (homepage, `/about`, CSS).
- **Concept:** a CEO's essay index with social proof (view counts).
- **Information architecture:**
  - Nav: About, "Follow me" (X) (SOURCE:html).
  - Home: posts grouped by year, each with a **view count** ("2015 Pure UI 708,396", "2014 7 principles of rich web applications 741,233") (OBSERVED).
  - `/about`: About plus "Technical contributions" (SOURCE:html).
- **Typography (SOURCE:css/html):** Geist, Geist Mono; year column `w-10 md:w-14 text-xs text-neutral-500`; header `text-md md:text-lg font-bold`.
- **Colour:** `:root` bg `rgb(252 252 252)` (#fcfcfc); dark via `prefers-color-scheme` (4 rules) (SOURCE:css).
- **Layout:** `body max-w-2xl m-auto`; `main p-6 pt-3 md:pt-6` (SOURCE:html).
- **Motion:** row hover `group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 transition-all` at `.15s` (SOURCE:html/css).
- **Accessibility and performance:** HTML 28 KB; no skip link.
- **Relevance: 2/5.** Borrow the **year-grouped list with a metric column**. For mozdemir this could be publications grouped by year with citation counts or venue in the metric slot.

### 15. Dan Abramov, overreacted: https://overreacted.io
- **Fetched:** yes (homepage, CSS). Source repo location: `gaearon/overreacted.io` has `app/global.css` (200, SOURCE:repo existence). Values are from the deployed CSS.
- **Concept:** a pure blog: title, date, one-line subtitle.
- **Information architecture:** header (logo "overreacted", "by" avatar). A list of every post (h2), each with date and subtitle ("How to Fix Any Bug / October 21, 2025 / The joys of vibecoding.") (OBSERVED). No nav and no projects.
- **Typography (SOURCE:css/html):** Montserrat (titles, `text-[28px] font-black leading-none`), Merriweather (body). Meta `text-[13px]`.
- **Colour (SOURCE:css):** light `--text #222`, `--bg white`, `--link #d23669`, `--code-bg #232936`, inline code bg `rgba(255,229,100,0.2)`. Dark via `prefers-color-scheme` gives `--bg rgb(40,44,53)`.
- **Layout:** `body mx-auto max-w-2xl px-5 py-12` (SOURCE:html).
- **Motion:** list item `hover:scale-[1.005] will-change-transform active:scale-100` (SOURCE:html).
- **Relevance: 2/5.** Borrow the title, date and subtitle triad for writing, and the subtle 1.005 hover scale.

### 16. Maxime Heckel: https://blog.maximeheckel.com
- **Fetched:** yes (homepage, CSS). `/about/` returned 404.
- **Concept:** deep, interactive technical essays (shaders, WebGPU) with an "Ask" AI feature.
- **Information architecture:** top controls "Index · Articles · Cmd · Ask" (OBSERVED). h1 "Experiments and essays on the modern web." Intro paragraph, then articles **grouped by year with month-day dates** (OBSERVED).
- **Typography (SOURCE:css/html):** preloaded InterVariable and DepartureMono; `html{font:100%/1.2888 var(--font-display)}`; **full KaTeX font set**; h1 uses design-system variants (`size-6 weight-2 family-display`).
- **Colour (SOURCE:css):** OKLCH gray ramp keyed to `var(--base-hue)` (`--gray-000 oklch(99.5% 0 var(--base-hue))` … `--gray-1200 oklch(19.83% 0.01 …)`). Theme class `maximeheckel-dark` on `<html>` (SOURCE:html).
- **Tokens (SOURCE:css):**
  - Spacing `--space-1:4px … --space-4:16px, -5:24px, -6:32px, -7:40px, -8:48px, -10:64px, -11:80px, -12:96px, -13:128px`.
  - Radius `--border-radius-0:4px, -1:8px, -2:12px, -3:16px`.
- **Motion:** `0.3s` dominant; spring-ish `cubic-bezier(0.2,0.85,0.32,1.2)`. 1 reduced-motion rule.
- **Accessibility and performance:** HTML 171 KB; no skip link.
- **Relevance: 3/5.** For an AutoML researcher, the **interactive explanation** format (playgrounds and visualisations inside articles) is the most aspirational writing model. Also borrow the **⌘K plus "Ask"** pattern and a clean 4px-based spacing scale. It is heavy to build.

### 17. Jhey Tompkins: https://jhey.dev
- **Fetched:** yes (homepage, `/index`, CSS). Built with Astro (`/_astro/` assets, SOURCE:html).
- **Concept:** a prolific prototype lab with "live" personal readouts.
- **Information architecture:**
  - Tiny nav "jhey.dev". h1 "Jhey Tompkins", tagline "Designer · Engineer · Tastemaker / Brand Design Studio @ Shopify".
  - Inline links "Index · Email · AMA · Follow". h2 "Latest" (5 prototypes plus "View all").
  - Server-island readouts: location ("Chillin in Split"), weather/time ("84.1°F · 17:23"), now playing (OBSERVED).
  - `/index` lists **hundreds of prototypes by year with "Updated / A–Z" sort and filter ("No matches")** (OBSERVED). HTML 1.8 MB.
- **Typography (SOURCE:css):** system stacks `--font-sans: ui-sans-serif,system-ui…`; **`body{font-weight:300}`**; h1 `text-fluid leading-none`; row labels `font-mono font-medium uppercase`.
- **Colour (SOURCE:css):** `--color-bg: light-dark(#fff,#000)`; rules via `light-dark(color-mix(in hsl,canvasText,#0000 90%), …)`; red accent `oklch(63.7% .237 25.331)`. `[data-theme=dark|light]` overrides plus `color-scheme: light dark`.
- **Layout:** `nav p-2 top-0 absolute lg:fixed` (SOURCE:html).
- **Motion:** 4 reduced-motion blocks; icons `group-hover/row:text-accent` (SOURCE:css/html).
- **Relevance: 2/5.** Borrow the **filterable/sortable index page** (for a large papers/projects list) and modern `light-dark()` theming. The 1.8 MB index HTML is a cautionary example.

### 18. Sarah Drasner: https://sarah.dev
- **Fetched:** yes (homepage, `/projects/`, CSS). Built with Nuxt (`/_nuxt/`, SOURCE:html).
- **Concept:** an engineering leader's site with "Code Drawings", hand-drawn visual explainers of technical topics.
- **Information architecture:**
  - Nav: writing, speaking, projects (SOURCE:html).
  - Home h1 "I Make Things" (`class="glitch"`), h2 "About Me" (a third-person bio: "Sarah is a Distinguished Engineer, and Area Tech Lead for AI and the Web Ecosystem for Chrome at Google…"), h2 "Say Hello" (OBSERVED).
- **Projects (`/projects/`):**
  - "Code Drawings: Visual explorations of code": **AI 01 Transformers, AI 02 MCP in Practice, AI 03 Vector Databases, AI 04 Context Windows**, plus Android, Rendering and WASM series (SOURCE:html).
  - Then CodePen demos, each with a title, a description ("Uses Vue, GreenSock, and SVG") and "See pen ⟶" (OBSERVED).
- **Typography (SOURCE:css/html):** Fonts.com kit with PlacardNext (UI), "Mercury Display A/B" (display), PalatinoLinotype.
- **Colour:** no CSS vars or dark rules detected (UNKNOWN palette; light only per CSS).
- **Motion:** `.25s` transitions; 0 reduced-motion rules (SOURCE:css). The glitch h1 animation has no reduced-motion guard (SOURCE:css counts).
- **Relevance: 3/5.** The **numbered visual-explainer series** ("AI 01 Transformers") is a strong pattern for a researcher: "AutoML 01 Genetic Programming, AutoML 02 Artificial Bee Colony, CV 01 Mammography pipeline". Also borrow the third-person bio for press and academic use.

### 19. Kent C. Dodds: https://kentcdodds.com
- **Fetched:** yes (homepage, `/about`, CSS). Repo https://github.com/kentcdodds/kentcdodds.com exists (`package.json` 200).
- **Concept:** an educator business site. Funnels into courses and community.
- **Information architecture:**
  - Nav: Blog, Talks, Courses, Better, Discord, Calls, About, search, dark-mode switch (SOURCE:html).
  - Home h2s: "Helping people make the world a better place through quality software.", "Having a hard time keeping up with JavaScript?", "Blog recommendations", "My flagship training" (Epic Product Engineer, Epic AI, Epic Web, Epic React, Testing JavaScript), "Meet like minded people…" (SOURCE:html).
- **Above the fold:** three CTAs, "Read the blog", "Take a course" and "Learn more about Kent", plus an "Introduction video (2:13)" (OBSERVED).
- **About:** story, values (Kindness / Share knowledge / Collaborate), talks, interviews, awards, fun facts, uses (SOURCE:html).
- **Typography:** system stack `--font-sans: ui-sans-serif, system-ui…` in the deployed CSS (SOURCE:css). No @font-face captured.
- **Colour:** Tailwind v4 OKLCH palette plus custom `--color-red-500 #ff4545`, `--color-green-600 #68d94a`; dark via `.dark` (127 rules) (SOURCE:css). `body bg-white transition duration-500 dark:bg-gray-900` (SOURCE:html).
- **Layout:** nav `mx-auto max-w-384` (Tailwind v4 → 96rem); header `mx-10vw` (SOURCE:html).
- **Motion:** `.2s` dominant; 5 reduced-motion rules (SOURCE:css).
- **Relevance: 2/5.** Borrow the **three-way CTA in the hero, one per audience** (for example "Read my research", "See production systems", "Hire me for consulting") and the values/story About page.

### 20. Lynn Fisher: https://lynnandtonic.com
- **Fetched:** yes (homepage, `/work/`, `/about/`, CSS).
- **Concept:** a portfolio redesigned every year ("v. XIX") as an art piece.
- **Information architecture:**
  - Nav: About, Work, Thoughts, Archive (past versions), RSS, Gifs, plus a "mode" toggle (SOURCE:html).
  - The homepage text is almost empty (the content is illustration and CSS).
  - `/work/` lists projects as **name plus own domain** (Nestflix nestflix.fun, A Single Div a.singlediv.com, Hollywood Age Gap hollywoodagegap.com…) (OBSERVED).
  - `/about/`: bio, "Selected Press", "Interviews", "Talks" (SOURCE:html).
- **Typography (SOURCE:css):**
  - Sydonia Atramentiqua (Regular/Italic/Light/Bold) serif, "Hubano-Rough" display (preloaded).
  - Body `font-size: var(--font-base)` = 1.2rem, `font-weight:300`, `line-height:1.6`.
  - Scale tokens `--font-xs .85rem, sm 1rem, base 1.2rem, md 1.5rem, lg 2.3rem, xl 3rem, xxl 6rem`.
- **Colour (SOURCE:css):** `--beige #e4e2d7`, `--red #ff3b3b`, `--black #111`; `--bg-color: light-dark(var(--beige), var(--black))`, `--text-color: light-dark(black, var(--red))`; tiled `bg-pattern.jpg` background.
- **Accessibility:** "Jump to navigation" link on sub-pages (OBSERVED). 0 reduced-motion rules.
- **Relevance: 2/5.** Borrow the **"Archive" of past site versions** (an honest way to keep the old Bootstrap CV accessible) and the **Selected Press** list (for example media coverage of the mammography project).

### 21. Adham Dannaway: https://www.adhamdannaway.com
- **Fetched:** yes (homepage, `/portfolio`, CSS). WordPress (SiteGround optimiser CSS; `html class="no-js lt-ie9…"`) (SOURCE:html).
- **Concept:** the famous split hero, "designer" on one half and "< coder >" on the other.
- **Information architecture:**
  - Nav: about, learn, portfolio, blog, contact, plus socials (SOURCE:html).
  - Home: split hero, then "Some of my latest work" (3 items), then footer with "Back to top" (SOURCE:html).
- **Above the fold:** two h1s: "designer: UI/UX Designer with a passion for designing beautiful and functional user experiences." and "< coder >: Front end developer who writes clean, elegant and efficient code." (OBSERVED).
- **Portfolio (`/portfolio`):** a grid of 17 case studies, each **title plus category label** ("Qantas map search / Product design", "Freelancer.com brand & UX design / Brand & UX design") (OBSERVED). Images: 17, with 14 empty alts (SOURCE:html).
- **Typography (SOURCE:css):** Proxima Nova (light/regular/semibold/bold), Neo Sans; `html{font-size:62.5%}` (1rem = 10px).
- **Layout/visual (SOURCE:css):** max-widths 1040px / 68rem; radius **8px** dominant (36 uses); transitions `.3s` (12 uses).
- **Relevance: 3/5.** Borrow the **dual-identity hero idea**, "Researcher | Engineer" (or TR/EN). Also the **category label under each case-study tile**. The WordPress legacy stack and missing alts are things to avoid.

### 22. Brian Lovin: https://brianlovin.com
- **Fetched:** yes (homepage, `/about`, CSS). Repo https://github.com/brianlovin/briOS exists (`package.json` 200).
- **Concept:** an "OS-like" personal hub of many small tools and lists.
- **Information architecture:**
  - Home h2s: Writing (5 latest), Projects (HN, App Dissection, Stack, AMA, TIL, Listening, Sites, Shiori, Staff Design, Design Details, How to Computer Better, Crit, HN CLI, Tax UI) (OBSERVED).
  - `/about` h2s: Work, Projects, Speaking, Investments. The **Work list is "Company / Role / Years"** ("Notion Product Designer Current", "Campsite Co-founder 2022–25", "GitHub Product Designer 2018–22"…) (OBSERVED).
- **Typography (SOURCE:css/html):** Inter, "Source Serif 4", JetBrainsMono Nerd Font. List rows `text-xl`; title `font-medium leading-[1.6] group-hover/list-item:underline`; description `text-quaternary`.
- **Colour (SOURCE:css):** `--text-color-brand #fc532a`; text tokens primary/secondary/tertiary/quaternary mapped to neutral-900/600/500/400. `html bg-white dark:bg-black`; dark via `prefers-color-scheme` (3) plus `.dark` (1).
- **Motion:** `.15s`; `cubic-bezier(.87,0,.13,1)` (SOURCE:css).
- **Relevance: 3/5.** Borrow the **one-line-per-role Work list** (Company · Role · Years), the most compact experience format in this set and good for a mixed academic and industry CV. Also the four-level text-colour hierarchy tokens.

### 23. Hamish Williams: https://hamishw.com
- **Fetched:** yes (homepage, `/projects/smart-sparrow`, CSS). Repo https://github.com/HamishMW/portfolio is widely referenced, but the guessed raw paths returned 404, so repo contents are UNKNOWN. Values are from the deployed CSS.
- **Concept:** a polished, motion-rich product-designer portfolio with 3D device mockups and "decoder" text.
- **Information architecture:**
  - Nav: Projects (`/#project-1`), Details (`/#details`), Articles, Contact, plus Bluesky, Figma, GitHub (SOURCE:html).
  - Home: hero, then **numbered project summaries** (01, 02, 03), then a "Details" bio ("Hi there…"). Multi-page case studies.
- **Above the fold:** "Hamish Williams / Designer + Developer, Prototyper, Animator, Illustrator, and Modder" (rotating decoder text), plus a "Scroll to projects" affordance (OBSERVED).
- **Project summaries:** index ("01"), title ("Designing the future of education"), one-line description, button ("View project" / "View website"), and a 3D device model preview (SOURCE:html class names `_index_`, `_title_`, `_description_`, `_button_`, `_model_`).
- **Case-study structure (`/projects/smart-sparrow`) (SOURCE:html headings):**
  - Header: title, summary, "Visit website", role tags ("Art Direction, UX and UI Design, Front End Development, Motion Design").
  - h2 sections: "The problem", "The aero design system", "Design system docs", "Motion design", "Encouraging adaptivity", "An extensible plugin ecosystem…", "Next-generation learning experiences", "Project outcomes".
  - It includes a **dark/light theme comparison** image toggle.
- **Typography (SOURCE:css):**
  - Gotham (book/medium preloaded) plus IPA Gothic for Japanese (`--japaneseFontStack`). **A bilingual font stack, a precedent for TR/EN.**
  - Fluid tokens per breakpoint: `--fontSizeH0` 2.625 to 8.75rem, `--fontSizeH1` 2.375 to 6.25rem, `--fontSizeH2` 1.75 to 3.625rem, `--fontSizeBodyL` 1.0625 to 1.375rem, `--fontSizeBodyM` 1 to 1.125rem, `--fontSizeBodyS` .875 to 1rem; `--fontWeightBold: 700`.
- **Colour (SOURCE:css):**
  - Default `data-theme="dark"`: `--background oklch(17.76% 0 0)`, `--backgroundLight oklch(21.78% 0 0)`, `--primary/--accent oklch(84.42% 0.19 202.24)` (cyan), `--textBody color-mix(in lab, var(--text) 80%, transparent)`, `--textLight … 60%`.
  - Light: `--background oklch(96.12% 0 0)`, `--primary` black, accent cyan. A theme toggle.
- **Layout (SOURCE:css):** max-widths 696px (23 uses, text) and 1040px (17, sections), up to 1680/2080px for media.
- **Motion (SOURCE:css):** tokens `--durationXS 200ms, S 300ms, M 400ms, L 600ms, XL 800ms`, `--bezierFastoutSlowin cubic-bezier(0.4,0.0,0.2,1)`; body `transition: var(--durationM) ease` on background/opacity. **39 `prefers-reduced-motion` blocks**, the most in the set.
- **Accessibility and performance:** "Skip to main content" link; HTML 24 KB; CSS split per component.
- **Wayfinding:** "Projects" is the first nav item and the first section. Numbered summaries lead into deep case studies.
- **Relevance: 4/5.** Borrow:
  - The **case-study template** (Problem, then System/Approach, then Process detail, then Outcomes). Map it to "Problem, then Data, then Model/Architecture, then Deployment, then Results/Impact" for mammography, YOLO counting and KYC OCR.
  - Numbered project summaries with a role-tag line.
  - Motion-duration tokens with reduced-motion coverage.
  - A **bilingual font-stack** approach.

### 24. Shawn "swyx" Wang: https://www.swyx.io
- **Fetched:** yes (homepage, CSS). SvelteKit (`/_app/immutable/`, `data-sveltekit-preload-data="hover"`, SOURCE:html).
- **Concept:** "A NOTEBOOK BY SHAWN WANG". An AI-engineer thought leader's curated reading path.
- **Information architecture:**
  - Nav: skip link, "⌕ Search the notebook… ⌘ K", home, ideas, podcasts, about, subscribe, a dark toggle (SOURCE:html).
  - Home h2s: "Things worth thinking about" (**numbered start-here essays 01 to 11 with a kicker category, title, one-liner and "Read essay ↗"**), "What I'm building", "A few other interests", a book callout, "Latest writing & appearances", "Selected talks", newsletter, "The rest of the library", "Popular writing", "Popular speaking" (SOURCE:html).
- **Above the fold:** "Hey, I'm swyx. I write about technology, markets, and networks. Building in public at the frontier of AI…" plus links "My story ↗ / People I bet on ↗ / Cognition ↗" and a "San Francisco ✦ · · · ✦ Singapore" two-cities motif (OBSERVED). That motif is a nice precedent for a two-place, two-language identity.
- **Typography (SOURCE:css/html):** Cardo, Newsreader (semibold preloaded), Inter (400 to 700 preloaded).
- **Colour (SOURCE:css):**
  - Light "paper": `--page-bg #f5f0e7`, `--page-surface #fbf8f2`, `--page-text #292a24`, `--page-muted #6c675d`, `--page-link #974337`, `--page-accent #9e4235`, `--selection-bg #f2d58c`.
  - Dark `.dark`: `--page-bg #111523`, `--page-text #f0e8d9`, `--page-link #e7c985`, `--page-accent #dfbd78`.
- **Motion:** `.15s` to `.22s`; 2 reduced-motion blocks (SOURCE:css).
- **Relevance: 3/5.** Borrow the **"A few places to start" numbered curated path** (for academics: "Start here: 3 papers"), ⌘K search and the warm paper palette.

### 25. Steph Ango: https://stephango.com
- **Fetched:** yes (homepage, `/about`, CSS). Jekyll plus Netlify, written in Obsidian (OBSERVED colophon).
- **Concept:** a plain-text essayist; the site is an expression of "File over app".
- **Information architecture:** nav: Steph Ango, About, Now (SOURCE:html). Home: "Latest" featured essay with "Keep reading →", Topics tag cloud, Writing by "YYYY · MM" (OBSERVED). About: Elsewhere, Interviews (a **table: Interview, Year, Length, Topics**), Colophon (SOURCE:html).
- **Typography (SOURCE:css):** `--font-content: -apple-system, BlinkMacSystemFont, "Inter", "IBM Plex Sans", …`; `html{font-size:62.5%}`; `h1{font-weight:500; font-size:calc(1.35em + .55vw); letter-spacing:-0.02em; line-height:1.25}`; `--heading-weight: 500`.
- **Colour (SOURCE:css):** **Flexoki** (his own palette): `--flexoki-paper #FFFCF0`, `--flexoki-black #100F0F`, `--flexoki-50 #F2F0E5` … `--flexoki-950 #1C1B1A`, red-400 `#D14D41`. Dark via a `.theme-dark` class.
- **Layout (SOURCE:css):** `--wrap-normal: 37em; --wrap-wide: 54em`; radius 4px, images 6px.
- **Relevance: 2/5.** Borrow the **talks/interviews table** (Year, Length, Topics), which fits academic talks and the founder-of-AI-club events. Flexoki is a ready-made, open warm palette.

### 26. Cassidy Williams: https://cassidoo.co
- **Fetched:** yes (homepage, CSS). Astro (`/_astro/`, SOURCE:html). `/about` returned 404.
- **Concept:** a friendly monospace homepage.
- **Information architecture:** nav: home, newsletter, blog, github, socials. h1 "Cassidy Williams", h2 "Software Engineer in Chicago". Bio, "Here's my most recent posts or read a random one!" (date plus tags), "View posts by tag" (SOURCE:html/OBSERVED).
- **Typography (SOURCE:css):** **iA Writer Mono** for everything.
- **Colour (SOURCE:css):** `--white #faf5f6`, `--black #252525`, `--gray #6b6b6b`, `--highlight #e5ffc3`, `--red #e4002b`, `--green #24d05a`, `--pink #eb4888`, `--blue #10a2f5`, `--yellow #e9bc3f`; 1 `prefers-color-scheme` rule.
- **Layout (SOURCE:css):** `body{max-width:70ch; margin:auto; padding:20px}`.
- **Relevance: 2/5.** Borrow the "read a random one" serendipity link. Otherwise this is a blog pattern.

### 27. Dennis Snellenberg: https://dennissnellenberg.com
- **Fetched:** yes (homepage, `/work`, CSS). An Awwwards-style freelance site (nav includes an "Awwwards" social).
- **Concept:** a high-polish freelance designer-developer site built to win clients.
- **Information architecture:**
  - Preloader **cycling greetings in 9 languages** ("Hello, Bonjour, स्वागत हे, Ciao, Olá, おい, Hallå, Guten tag, Hallo") (SOURCE:html).
  - Nav: Work, About, Contact plus a "Menu" overlay.
  - Hero h1 "Dennis Snellenberg —" with "Freelance Designer & Developer". Sections: "Helping brands to stand out in the digital era…", Recent work, Services, "Let's work together" (OBSERVED).
- **Work (`/work`):** filter tabs **"All / Design 7 / Development 11"**, and a table with the columns **Client | Location | Services | Year** ("TWICE Spain Interaction & Development 2024") (OBSERVED). There is also a grid view of the same items (duplicate list in the HTML).
- **Typography (SOURCE:css):** a custom "Dennis Sans".
- **Colour (SOURCE:css):** `--color-dark #1C1D20`, `--color-dark-dark #141517`, `--color-blue #455CE9`, `--color-blue-dark #334BD3`, `--color-gray #999D9E`, `--color-lightgray #E9EAEB`, `--color-border rgba(28,29,32,0.175)`.
- **Motion (SOURCE:css/html):** `locomotive-scroll.css` (smooth scroll), `data-barba="wrapper"` (page transitions), eases `cubic-bezier(0.34,1,0.64,1)` (9), `cubic-bezier(0.36,0,0.66,0)` (8) and `cubic-bezier(.7,0,.2,1)`; durations `.4s` dominant; **0 reduced-motion rules**.
- **Layout:** max-widths 540px and 720px (text), 1000 to 1200px (SOURCE:css). Radius `50%` dominant (round magnetic buttons, OBSERVED via the CSS radius count; the "magnetic" behaviour itself is UNKNOWN).
- **Relevance: 3/5.** For the **freelance audience**, borrow the **work table with Client, Location, Services and Year plus category filter counts**, the closing "Let's work together" CTA and the **multilingual greeting idea** (Merhaba / Hello as a tiny bilingual signal). Skip smooth-scroll hijacking (no reduced-motion support).

### 28. Olaolu Olawuyi: https://olaolu.dev
- **Fetched:** yes (homepage, `/work`, `/resume`, CSS).
- **Concept:** a bold, colourful senior-engineer portfolio with a first-class HTML résumé.
- **Information architecture:**
  - Nav: **My Work, My Shelf, My Résumé**, "Say Hello" (hello@olaolu.dev, t.me), socials as two-letter labels TW GH LN YT (SOURCE:html).
  - Home h1: "A Software Engineer building fast, resilient web products at scale." with the kicker "Hey, I'm Olaolu". Bio with **business impact** ("This work has contributed millions in incremental revenue…") (OBSERVED).
- **Work (`/work`):** h1 "/ work ." ("Selected work I've taken on in the past."). Cards: project name, logo, summary image, live domain (hellotax, Conectar, John Deere, Personal Website, Pixel2HTML, dropd, Dignisia) (OBSERVED).
- **Résumé (`/resume`):**
  - An HTML page with a **"Download" button**, location, email, "Core Technologies" and "Others" skill lists.
  - h2 "Expert Software Engineer." Experience: company, role, date range, achievement bullets ("Shopify Staff Engineer May 2020 - Present…"), then Projects (SOURCE:html/OBSERVED).
- **Typography (SOURCE:css):** SF UI Text (self-hosted as "sfUiText"); **`--base-font-size:20px`**; `html{line-height:1.7}`.
- **Colour (SOURCE:css):** `--bg-color #f5f4fc`, `--body-color #474747`, `--link-color #6b17e6`, `--electric-blue #4831d4`, `--lime #ccf381`, `--purple #3d155f`, `--border-color #cbc9dd`; `color-scheme: light` (no dark).
- **Layout (SOURCE:css):** `--content-width: 940px; --space: 3.5rem; --radius: 5px`.
- **Accessibility:** "Skip to content"; a **route-change announcer ("You just navigated to: /work")** for screen readers (OBSERVED); 1 reduced-motion rule.
- **Relevance: 4/5.** Borrow the **HTML résumé page plus Download PDF** (recruiters get a fast skim and ATS gets a PDF), the **"My Work / My Résumé / Say Hello" top-level IA**, impact-quantified bio lines and the route announcer.

### 29. Zach Leatherman: https://www.zachleat.com
- **Fetched:** yes (homepage, `/projects/`, CSS). Repo https://github.com/zachleat/zachleat.com exists (`package.json` 200). Eleventy.
- **Concept:** a performance-obsessed web veteran with data-rich pages.
- **Information architecture:**
  - Nav: Home, About, Archives, Projects, Build Awesome, More (Speaking, Uses, Domains) (SOURCE:html).
  - Home: sitewide activity stats, Popular, bio ("He has given 86 talks in nine different countries…") (OBSERVED).
  - `/projects/` ("Is this still being maintained??") is an **OSS health dashboard**: "Open Source Health 98", "129 total open source projects (104 active)", "84,753,314 downloads (last 12 months)", releases per year, recent publishes (OBSERVED).
- **Typography (SOURCE:css):** Lato (subset preloaded), "Hex Franklin Tight" (variable, preloaded), "Numero"; `--z-width-list: calc(45 * 1.1875rem)`.
- **Colour (SOURCE:css):** `--z-color-bg #fff`, `--z-color-text #525252`, `--z-color-text-heading #222`, `--z-color-primary #3c603c`, `--z-color-link #304f3e`, `--z-color-pre-bg #272822`; `[data-theme=dark|light]` toggle plus `prefers-color-scheme` (5).
- **Accessibility and performance:** skip link; but the projects page is **985 KB of HTML with 428 images**.
- **Relevance: 2/5.** Borrow the **quantified impact strip** (for example "3 systems in production · N papers · X citations · Y club members") without the weight.

### 30. Manu Arora: https://manuarora.in
- **Fetched:** yes (homepage, CSS). `/projects` redirected to home (OBSERVED).
- **Concept:** a creator and studio founder. The portfolio doubles as a sales page.
- **Information architecture:**
  - Nav: Home, Blog, Sponsor plus socials (X, YouTube, GitHub, LinkedIn) (SOURCE:html).
  - h2 order: **Reach** (live stats "Updated Oct 21, 2026": YouTube 33.5K subscribers, X 44K followers, Aceternity UI 3M page views/mo), **Things I do** (Aceternity, Aceternity UI, Acebuilder, Vibrant, YouTube), Latest videos, **Companies I've worked with**, **Work with me**, Writing (SOURCE:html/OBSERVED).
- **Above the fold:** "Need a website built? My studio Aceternity does that. Want a second pair of eyes on your product? Book a call with me." (OBSERVED). These are two service CTAs.
- **Typography (SOURCE:css):** primary "Schibsted Grotesk Variable"; also Inter Variable and Geist Variable; h1 `text-xl font-medium tracking-tight md:text-2xl`; section labels `font-mono text-sm uppercase tracking-wide text-foreground/40`.
- **Colour (SOURCE:css):** shadcn OKLCH tokens `--background oklch(100% 0 0)`, `--foreground oklch(14.5% 0 0)`, dark `.dark --background oklch(14.5% 0 0)`.
- **Layout and motion (SOURCE:html):** `nav mx-auto max-w-2xl px-4`; list rows `-mx-2 rounded-lg px-2 py-2 hover:bg-black/[0.03] transition-colors duration-150`; accordion chevron `transition-[rotate,color] duration-200 ease-out`.
- **Relevance: 3/5.** Borrow **"Companies I've worked with" logos** (Ministry of Health project, bank KYC client and the university, where permitted) and **"Work with me" plus "Book a call"** for freelance consulting.

### 31. Henry Heffernan: https://henryheffernan.com
- **Fetched:** partially. The HTML is a 3.4 KB shell: `<title>Henry Heffernan - Portfolio 2022`, the meta description ("I'm Henry, a Software Engineer based in NY. Rensselaer Polytechnic Institute Graduate…"), `bundle.*.js` and two `.mp4` files (SOURCE:html). The 3D scene did not render; no content is visible to crawlers.
- **Concept:** a 3D desk scene with a computer you "use". An extreme example like Bruno.
- **Typography/colour (SOURCE:css):** `ocr-a-std, monospace`; `body{background-color:#000}`; transitions `0.65s`.
- **Relevance: 1/5.** A lesson in what not to do: zero server-rendered content means poor SEO and accessibility for recruiters.

### 32. Jacek Jeznach: https://jacekjeznach.com
- **Fetched:** **failed.** WebFetch returned "unable to get local issuer certificate". curl returned a 5.6 KB "Redirecting… Loading" page whose script calls `window.location.replace(...)` with referrer and timezone detection (SOURCE:html). This looks like a parked or redirecting domain. No design data was recorded.
- **Relevance:** n/a. It appears in many "best portfolio" lists, but it is not currently verifiable.

---

## Cross-site pattern frequency

Basis: the 28 sites with analysable current content (cards 1 to 9 and 11 to 30, excluding retired Cassie Evans, JS-only Henry Heffernan and failed Jacek Jeznach; v4 counted from its repo). Y = present, N = absent, ? = UNKNOWN. Evidence comes from the cards above.

| Site | Home type | Projects on home | Project images | Tech/role tags | Dates on items | Experience list | Résumé link | Writing on home | Dark mode | Sticky nav/rail | ⌘K/search | Skip link | Reduced-motion CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Brittany (current) | single page + anchors | Y | Y | Y | Y | Y | Y | Y | dark-only | Y (left col) | N | Y | Y |
| Brittany v4 | single page + anchors | Y | Y | Y | Y | Y (tabs) | Y | N | dark-only | Y (header + side rails) | N | Y | ? |
| Lee Robinson | index | N | N | N | Y | N (prose) | N | Y | Y (toggle class) | N | N | N | Y |
| Josh Comeau | content hub | N | N | N | N | N | N | Y | Y (toggle) | ? | Y | N | Y |
| Paco Coursey | single screen | Y | N | N | N | N (prose) | N | Y | Y (auto) | N | N | N | Y |
| Rauno Freiberg | single sentence | via sub-page | sub-page Y | N | Y | N | N | N | Y | N | N | N | N |
| Emil Kowalski | single page | Y | N | N | N | N (prose) | N | Y | Y | Y (banner) | N | N | Y |
| Delba de Oliveira | single page | Y | N | N | N | N | ? | N | N | N | N | N | N |
| Anthony Fu | prose + nav | inline links | N | N | N | N (prose) | N | N | Y (toggle) | N | N | N | Y |
| Bruno Simon | 3D world | in-world | Y | N | N | N | N | N | dark-only | n/a | N | N | N |
| Tania Rascia | hub | Y | Y | N | Y | Y (timeline) | Y | Y | Y (auto + picker) | Y (sidebar) | N | N | N |
| Shu Ding | bio | N (1 click) | N | N | N | N (prose) | N | N | N | Y (side nav) | N | N | Y |
| Guillermo Rauch | index | N | N | N | Y | N | N | Y | Y (auto) | N | N | N | N |
| Dan Abramov | blog index | N | N | N | Y | N | N | Y | Y (auto) | N | N | N | Y |
| Maxime Heckel | blog index | N | N | N | Y | N | N | Y | Y | ? | Y | N | Y |
| Jhey Tompkins | lab | Y (latest) | N | N | N | N | N | N | Y | Y (lg:fixed nav) | Y (index filter) | N | Y |
| Sarah Drasner | bio | N (1 click) | sub-page Y | sub-page Y | N | N (prose) | N | N | N | ? | N | N | N |
| Kent C. Dodds | business hub | courses | Y | N | N | N | N | Y | Y (toggle) | ? | Y | N | Y |
| Lynn Fisher | art piece | N (1 click) | sub-page Y | N | N | N | N | N | Y (auto + mode) | N | N | sub-pages | N |
| Adham Dannaway | split hero + work | Y | Y | Y (category) | N | N | N | N | ? | N | N | N | Y |
| Brian Lovin | hub lists | Y | N | N | N | Y (about) | N | Y | Y | ? | N | N | Y |
| Hamish Williams | showcase | Y (numbered) | Y (3D) | Y (role tags) | N | N | N | N | Y (toggle, default dark) | Y (nav) | N | Y | Y (39) |
| swyx | notebook | Y ("building") | some | N | Y | N | N | Y | Y (toggle) | Y (panel) | Y | Y | Y |
| Steph Ango | essay index | N | N | N | Y | N | N | Y | Y (class) | N | N | N | N |
| Cassidy Williams | blog home | N | N | N | Y | N | N | Y | Y (auto) | N | N | N | N |
| Dennis Snellenberg | agency showcase | Y | ? | Y (services) | Y | N | N | N | partial (dark sections) | Y (menu) | N | N | N |
| Olaolu Olawuyi | statement + nav | N (1 click) | sub-page Y | N | sub-page Y | sub-page Y | Y (HTML + download) | N | N | ? | N | Y | Y |
| Zach Leatherman | hub | N (1 click) | Y | N | Y | N | N | Y | Y (toggle) | Y (rail) | Y | Y | Y |
| Manu Arora | sales hub | Y | Y | N | N | logos | N | Y | Y | ? | N | N | N |

Approximate counts (Y only, out of 28):

| Pattern | Count |
|---|---|
| Projects or work visible on the homepage | ≈16 |
| Project images on home | ≈9 |
| Tech or role tags on items | ≈7 |
| Explicit structured experience list | ≈6 (Brittany, v4, Tania timeline, Brian about, Olaolu résumé, Manu logos) |
| Résumé or CV link | 4 (Brittany, v4, Tania, Olaolu) |
| Dark mode in some form | ≈22 |
| Skip link | 7 |
| Reduced-motion CSS | ≈17 |
| ⌘K or search | 6 |

Typography and layout tallies (SOURCE:css/html):

| Measure | Sites |
|---|---|
| Inter as primary or secondary face | ≈9: Brittany, Anthony Fu, Paco, Shu, Maxime, Brian, swyx, Manu, Steph (in stack) |
| Geist | 3: Delba, Rauch, Manu |
| System-only stack | 4: Kent, Jhey, Cassie, Steph (content stack starts -apple-system) |
| A serif for reading or display | ≈11: Lee (Iowan), Paco (Newsreader), Delba (Fraunces/Radley), Emil (Serif), Shu (Lora), Brian (Source Serif 4), swyx (Cardo/Newsreader), Dan Abramov (Merriweather), Sarah (Mercury/Palatino), Lynn (Sydonia), Rauno (Georgia fallback) |
| Text column 600 to 700px | 7: Lee 600px, Paco 640px, Shu/Rauch/Dan Abramov/Manu 42rem (672px), Emil 692px, Hamish 696px |
| Wide 2-column layout | 2: Brittany 1280px with a 48/52 split, Delba 1024px with 2fr/1fr |
| KaTeX fonts bundled | 2: Shu, Maxime, both math-capable, relevant to research |
| Tailwind or UnoCSS utility classes in production HTML | ≈13 |

---

## Top 5 most relevant to mozdemir.com

1. **Brittany Chiang (current), 5/5.** It directly solves "visitors can't reach projects":
   - The sticky left column (name, role, tagline, scroll-spy nav to About / Experience / Projects) keeps the structure visible.
   - The right column carries experience rows (date | role · org | description | tech pills) and project rows (thumbnail | title ↗ | description | badges | pills).
   - A `/archive` table holds the long tail.
   - All of this maps one-to-one onto the client's mixed CV: education and academic roles plus industry plus freelance in Experience; production CV systems and AutoML research in Projects; and a Publications section, which is the one thing to add.
   - Copy-ready values: 1280px container with a 48/52 split, `py-24` on lg, `.15s` transitions, `motion-reduce` guards, skip link.
   - Change the palette and type to avoid looking like a clone.
2. **Hamish Williams, 4/5.** Best **case-study template** and **motion-token system with reduced-motion coverage**:
   - Numbered project summaries (01 to 03) with a role-tag line, a single CTA and a visual.
   - Each production system (mammography AI, YOLO campus counting, KYC OCR + face match, ROS lane detection) deserves a Hamish-style page: Problem, then Data, then Approach/Model, then Deployment, then Outcomes. Recruiters and clients need this depth, which a one-line list cannot give.
   - The Gotham + IPA Gothic stack is precedent for a bilingual font stack. TR needs ğ ş ı İ ç ö ü coverage.
3. **Shu Ding, 4/5.** The closest **engineer-researcher tone**:
   - Minimal sticky side nav (About / Thoughts / Projects).
   - Education woven into the bio.
   - Per-project "what I personally did" narratives.
   - KaTeX-ready typography and a restrained blue-gray palette.
   - Fits the academic audience (AutoML papers) without looking like a template.
4. **Olaolu Olawuyi, 4/5.** Best **résumé handling** for recruiters:
   - Top-level "My Work / My Résumé / Say Hello".
   - An HTML résumé page (skills lists, then experience with dates and quantified bullets) plus a Download button.
   - Impact-quantified bio, a skip link and a route announcer.
   - The client's current CV content can migrate into this page almost unchanged, while the home page becomes project-first.
5. **Tania Rascia, 4/5** (tied with Delba de Oliveira). Best **story and wayfinding for a career arc**:
   - A four-line "brief timeline" on the homepage (for example "2018 to 2020 University AI club founder · 2020 to 2022 AutoML research (GP, ABC, NAS) · 2022 to now production CV systems + freelance consulting").
   - Projects with year and **Article / Demo / Source**, renamed **Paper / Demo / Code**.
   - An always-visible Résumé link.
   - Delba's **availability statement plus "Let's talk" button above the fold** should be combined with this for the freelance audience.

Honourable mentions to borrow single patterns from:

| Pattern | Source sites | Use on mozdemir.com |
|---|---|---|
| Short/long bio toggle | Lee Robinson | Recruiter vs academic |
| Numbered visual-explainer series | Sarah Drasner | "AutoML 01 …" |
| Year-grouped list with a metric column | Rauch | Publications with venue or citations |
| Client / Location / Services / Year table with filter counts | Dennis | Freelance work |
| "Companies I've worked with" plus "Work with me" | Manu | Consulting |
| Company · Role · Years one-liners | Brian | Compact experience |
| Grouped project catalogue with stagger-enter (10px / 1s / 90ms, reduced-motion guarded) | Anthony Fu | Projects page |

## Specific recommendations distilled for the redesign

- **IA:** top-level Projects, Research/Publications, Experience, About, Contact, with a TR/EN switch. Home order: Hero (name, role "AI Researcher & Engineer", one-line value statement, availability plus CTA), Selected Projects (3 to 4 with images and badges), Publications (year-grouped), Experience (Brittany-style rows), Writing/Talks (optional), Contact. Every project should be reachable in one click from the first screen.
- **Project card fields:** title, year, context (Academic / Industry / Freelance), role, stack pills, status badge ("In production", "Funded by Ministry of Health"), links (Paper / Demo / Code / Case study), thumbnail.
- **Case-study template (Hamish):** Problem, Data, Approach, System/Deployment, Results, My role, Stack.
- **Type:** an Inter-class sans (Inter, Geist or similar with full Turkish glyphs) for UI, plus an optional serif for long reading (Lee, Shu, swyx). Body 16 to 17px with line-height 1.6 to 1.75 (antfu prose 1rem/1.75, Lee 17px/1.6). Measure 600 to 700px for text.
- **Colour:** neutral 12-step gray (Radix-style, as at Paco, Rauno and Emil) plus one accent. Support both light and dark with no flash (Josh inlines theme vars on `<html>`).
- **Motion:** durations 150 to 400ms (Hamish tokens 200/300/400/600/800ms; Brittany 150ms; antfu stagger 90ms), easing `cubic-bezier(0.4,0,0.2,1)`. Every animation sits behind `prefers-reduced-motion: no-preference`. No loaders, no scroll-jacking.
- **Accessibility and performance:** skip link, visible focus rings, server-rendered content (avoid the Henry/Bruno failure mode), subset-preloaded fonts (Paco), small HTML (Paco at 10 KB vs Lee's 802 KB and Jhey's 1.8 MB index).

---

## URLs actually fetched

**Homepages via curl (HTTP 200 unless noted):**
- https://brittanychiang.com
- https://leerob.com
- https://www.joshwcomeau.com
- https://paco.me
- https://rauno.me
- https://emilkowal.ski
- https://delba.dev
- https://antfu.me
- https://cassie.codes (retired-site message)
- https://bruno-simon.com
- https://www.taniarascia.com
- https://shud.in
- https://rauchg.com
- https://overreacted.io
- https://blog.maximeheckel.com
- https://www.jhey.dev
- https://sarah.dev
- https://kentcdodds.com
- https://lynnandtonic.com
- https://www.adhamdannaway.com
- https://brianlovin.com
- https://hamishw.com
- https://swyx.io (via https://www.swyx.io)
- https://stephango.com
- https://cassidoo.co
- https://jacekjeznach.com (parked/redirect shell)
- https://dennissnellenberg.com
- https://henryheffernan.com (JS shell)
- https://www.zachleat.com
- https://olaolu.dev
- https://www.manuarora.in

**Sub-pages via curl:**
- https://brittanychiang.com/archive
- https://antfu.me/projects
- https://www.taniarascia.com/projects/
- https://www.taniarascia.com/me/
- https://shud.in/projects
- https://lynnandtonic.com/work/
- https://lynnandtonic.com/about/
- https://sarah.dev/projects/
- https://olaolu.dev/work
- https://olaolu.dev/resume
- https://www.adhamdannaway.com/portfolio
- https://rauno.me/craft
- https://rauno.me/projects
- https://dennissnellenberg.com/work
- https://kentcdodds.com/about
- https://paco.me/craft
- https://www.zachleat.com/projects/
- https://www.jhey.dev/index
- https://hamishw.com/projects/smart-sparrow
- https://brianlovin.com/about
- https://rauchg.com/about
- https://www.joshwcomeau.com/about-josh/
- https://stephango.com/about
- https://leerob.com/about (redirected to home)
- https://www.manuarora.in/projects (redirected to home)
- https://emilkowal.ski/about (404)
- https://cassidoo.co/about (404)
- https://blog.maximeheckel.com/about/ (404)

**CSS:** every stylesheet linked from each homepage above (up to 10 per site, Google/Fonts.com font CSS excluded), for example https://brittanychiang.com/_next/static/css/1205f04d95fac248.css, https://hamishw.com/assets/root-3CgR45Fi.css, https://dennissnellenberg.com/assets/css/style-new.css, https://stephango.com/styles.css and https://lynnandtonic.com/assets/css/main.css. All downloads succeeded.

**WebFetch:**
- https://brittanychiang.com
- https://leerob.com
- https://www.joshwcomeau.com
- https://paco.me
- https://github.com/bchiang7
- https://github.com/leerob/site
- https://raw.githubusercontent.com/bchiang7/v4/main/src/styles/variables.js
- https://raw.githubusercontent.com/bchiang7/v4/main/src/styles/GlobalStyle.js
- https://v4.brittanychiang.com (loader only)
- https://jacekjeznach.com (certificate error)

**Source files via raw.githubusercontent.com:**
- bchiang7/v4: README.md, src/config.js, src/utils/index.js, src/components/{nav.js, side.js, email.js, social.js}, src/components/sections/{hero.js, about.js, jobs.js, featured.js, projects.js, contact.js}
- antfu/antfu.me: src/styles/main.css, src/styles/prose.css, unocss.config.ts, src/components/ListProjects.vue
- leerob/site: app/layout.tsx, app/globals.css (now a generic template)
- Existence probes returning 200: pacocoursey/paco/master/package.json, shuding/shud.in/main/package.json, kentcdodds/kentcdodds.com/main/package.json, brianlovin/briOS/main/package.json, zachleat/zachleat.com/main/package.json, gaearon/overreacted.io/main/app/global.css, timlrx/tailwind-nextjs-starter-blog/main/package.json

**WebSearch:** "best developer portfolio websites 2026 examples" (Colorlib 2026 roundup, Elementor 2026 list including Bruno Simon, DevPlaybook / DEV Community 2026), "best software engineer portfolio examples 2025 list" (CareerFoundry 24 examples, WeAreDevelopers monthly roundups), and "emmabostian developer-portfolios github list" (curated A to Z list, about 25.9k stars per GitTrend).

**Failed or limited:**
- jacekjeznach.com: TLS error via WebFetch; parked/redirect shell via curl.
- v4.brittanychiang.com: client-rendered behind a loader.
- henryheffernan.com: JS-only.
- cassie.codes: portfolio retired.
- GitHub REST API: rate-limited (HTTP 403 message) and no `gh` CLI, so repo metadata (stars, last push) was not collected except where shown on github.com pages.
- 404 raw paths: HamishMW/portfolio, taniarascia/taniarascia.com, delbaoliveira/website, cassidoo/cassidoo.co. Their source layouts are UNKNOWN.
- leerob/site no longer reflects leerob.com.

Raw evidence on disk (for verification):
- `C:\Users\34mam\AppData\Local\Temp\claude\C--Users-34mam-Github-mozdemir-site\2a5a9e3c-0c54-4804-88fa-ea2df9f03a54\scratchpad\research\raw02\` (HTML, `css\`, `sub\`)
- `...\research\an2.txt`, `...\research\an3.txt`, `...\research\outline.txt`, `...\research\outline_sub.txt` (extraction output)
- `...\research\scripts02\` (extraction scripts)
