# 05 — UX Evidence Base for mozdemir.com

Compiled 2026-10-21 for a personal portfolio/CV site (AI researcher and engineer; academic papers plus production CV/KYC systems; Turkish/English; static site on GitHub Pages). Audiences: recruiters and hiring managers, academics and PhD committees, freelance clients.

## How to read this document

- **Finding IDs** (e.g. `F1.3`) are cited by the requirements in the "Design requirements derived from evidence" section.
- **Source tier**
  - **T1**: peer-reviewed paper or formal standard (W3C Recommendation, ISO).
  - **T2**: established research or standards organisation guidance (NN/g, W3C WAI or i18n notes, Google Search Central or web.dev, USWDS, university guidance).
  - **T3**: industry survey, vendor report, trade press or blog.
- **Fetched?**
  - **Y**: I opened the primary source and read it directly.
  - **Y-copy**: I read a third-party-hosted copy of the primary document.
  - **S**: secondary only. I read a summary or press coverage, not the primary.
  - **N**: search snippet only, not opened.
- **UNVERIFIED**: the commonly cited claim could not be confirmed at its source. The entry says what the source actually says.

Observed context from the repo (`git ls-files`): the site ships the `aos` (Animate On Scroll) library, Bootstrap, and the `bootstrap-icons` icon font, plus many duplicate image variants (`.png`, `.jfif`, `.webp`). Several findings below bear directly on these.

---

## 1. How recruiters and hiring managers review candidates and portfolios

| ID | Claim (exact numbers) | Source | Tier | Fetched? |
|---|---|---|---|---|
| F1.1 | **2012 Ladders study.** Eye tracking of **30 professional recruiters over a 10-week period**. Recruiters "spend only **6 seconds** reviewing an individual resume" on the initial "fit/no fit" decision, against self-reports of 4–5 minutes. **Almost 80%** of review time went to six data points: name, current title/company, current start/end dates, previous title/company, previous start/end dates, and education. Beyond these, recruiters "did little more than scan for keywords". Rewritten resumes with a clear visual hierarchy scored 6.2 vs 3.9 for usability (7-point scale). On LinkedIn profiles, recruiters spent **19%** of fixation time on the profile picture. Ads and calls to action "created clutter". | Will Evans, *Eye Tracking Online Metacognition: Cognitive Complexity and Recruiter Decision Making*, TheLadders, 2012 (summary brochure "Keeping an eye on recruiter behavior") | T3 (vendor study, not peer-reviewed; the vendor sells resume rewriting, a conflict of interest) | Y-copy (BU-hosted PDF) |
| F1.2 | **2018 Ladders follow-up.** Average initial screen of **7.4 seconds** (up from 6 s in 2012). Resumes that held attention had "simple layouts, with clear sections and heading titles", F/E-pattern-friendly structure, bold titles and bulleted accomplishments. Cluttered layouts, little white space, multiple columns, long sentences and missing headers hurt. The sample size is **not reported** in the coverage. ERE critics note the missing N and instructions and call it "essentially a how-to guide". | Ladders, *Eye-Tracking Study* (2018), via HR Dive (Nov 8, 2018) and ERE | T3 | S (the primary PDF URL returned 404) |
| F1.3 | **Interpretation caveat.** 6–7.4 s is the *initial screening glance*, not total evaluation time. It supports "make the key facts findable in seconds", not "people only read for 7 seconds". | ERE; HR Dive | T3 | S |
| F1.4 | **HackerRank 2018 Developer Skills Report** (survey Oct 16–Nov 1, 2017; 39,441 developers plus employer respondents). "9 in 10 hiring managers" rank previous experience and years of experience among top qualifications. Portfolios are valued more by small companies (**80% vs 66%** at large). "What you do matters more than anything else." Prestige of degree and certificates rank lowest. C-level respondents valued GitHub projects more than years of experience. **81%** of hiring managers use resumes as the first screen. Portfolios are "harder to review at scale". | HackerRank, *2018 Developer Skills Report* | T3 | Y |
| F1.5 | HackerRank *2018 Tech Recruiting Report*: "nearly 1,000 technical recruiters and hiring managers". Most important qualification is "strong work experience, above all else". Recruiters use "previous work experience, years of experience, and personal projects". **75.4%** had hired a great candidate from a non-traditional background. | i-programmer coverage of the HackerRank report (2018) | T3 | S |
| F1.6 | **GitHub profiles in hiring** (qualitative; **7 employers + 6 job seekers** interviewed). Profile cues were seen as "more reliable indicators of technical abilities and motivation than information provided on a resume", because of transparency and the difficulty of faking activity traces. Employers "favored cues that took less effort to access and verify", and side projects signalled passion. | Marlow & Dabbish, "Activity Traces and Signals in Software Developer Recruitment and Hiring," CSCW 2013, pp. 145–156 | T1 | Y |
| F1.7 | Managers evaluating developers' online contributions benefited from an **aggregated summary with drill-down to details** and card-based side-by-side comparison. | Kuttal, Chen, Wang, Balali, Sarma, "Visual Resume," *Information and Software Technology* 138 (2021) 106633 | T1 | Y (abstract) |
| F1.8 | **NN/g survey of 204 UX hiring managers.** Hiring managers "don't have a lot of time to dedicate to each candidate's portfolio" and "very rarely" read the whole thing. Recommends **3–5 detailed case studies**: "Quality over quantity". Show process, not just final output. Avoid going "overboard on a flashy template". Web-based is the most common and accessible medium, and PDFs are "harder to access". | Rachel Krause, "5 Steps to Creating a UX-Design Portfolio," NN/g, Aug 4, 2019 | T2 | Y |
| F1.9 | **UNVERIFIED: "73% of hiring managers rank a strong portfolio above a perfect resume (Stack Overflow 2024)".** This appears on a blog (hakia.com) with no link. I found **no Stack Overflow Developer Survey question** that asks hiring managers about GitHub or portfolios. The SO survey surveys developers, not hiring managers. Do not use it. | Stack Overflow survey materials (search) | n/a | N |
| F1.10 | **UNVERIFIED:** "Recruiters are 50% more likely to search by skills than years of experience" and "skills-filter searches +25% since 2019" (LinkedIn *Future of Recruiting 2023*). Seen only in press coverage (Tech.co, AdNews). The primary report was not retrieved. | LinkedIn Talent Solutions (via press) | T3 | N |
| F1.11 | **UNVERIFIED:** "90% of hiring managers say the portfolio is important" (UX Design Institute 2024 report). This is a gated marketing report and was not confirmed. | UX Design Institute | T3 | N |

**Takeaways for an ML/engineering portfolio:**
- **Screening is fast and anchored on a few facts.** Those facts are role, organisation, dates and education (F1.1–F1.3).
- **Demonstrated work beats credentials** (F1.4–F1.6).
- **Reviewers favour low-effort, verifiable signals and summaries with drill-down** (F1.6, F1.7).
- **A few deep case studies beat many shallow ones** (F1.8).

---

## 2. NN/g guidance (homepage, navigation, scanning, cards, About, mobile nav, language, case studies)

| ID | Claim (exact numbers) | Source | Tier | Fetched? |
|---|---|---|---|---|
| F2.1 | **Dwell time.** Users "often leave Web pages in 10–20 seconds". "The first 10 seconds of the page visit are critical." Pages that hold users past ~30 s often keep them 2+ minutes. Advice: "communicate your value proposition within 10 seconds." Based on Liu, White & Dumais (Microsoft Research 2010): 205,873 pages, >2 billion dwell times. | Jakob Nielsen, "How Long Do Users Stay on Web Pages?", NN/g, Sep 11, 2011 | T2 (underlying data T1) | Y |
| F2.2 | **Scrolling and attention (2018).** **57%** of page-viewing time is above the fold. **74%** is within the first two screenfuls and **81%** within the first three. The second screenful gets ~17%. In 2010, 80% was above the fold. | Therese Fessenden, "Scrolling and Attention," NN/g, Apr 15, 2018 | T2 | Y |
| F2.3 | **F-pattern** is the *default* when text lacks strong cues (no headings, bullets or bolding), the user wants efficiency, and is not committed. Countermeasures: put the most important points in the first two paragraphs, use distinct headings that front-load information-carrying words, bold key terms, use bullets, write informative link text, and cut content. Other patterns: **layer-cake** (scan headings only), spotted, marking, bypassing, commitment. "Assume most users will scan." | Kara Pernice, "F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant," NN/g, Nov 12, 2017 (original 2006) | T2 | Y |
| F2.4 | **Scanning vs reading.** **79%** of test users always scanned and **16%** read word by word. Usability gains over promotional control text: concise **+58%**, scannable **+47%**, objective **+27%**, all three combined **+124%**. | Jakob Nielsen, "How Users Read on the Web," NN/g, Sep 30, 1997 | T2 | Y |
| F2.5 | **Homepage guidelines** (2002, still standard). (1) A tagline summarising what the site or person does. (2) A window title starting with the name and avoiding "Welcome to". (3) A clearly marked "About" area. (4) "Clear entry points for the **1–4 main tasks**." (6) "Specifics beat abstractions": show best or recent content. (7) Start links with the most relevant keyword. | Jakob Nielsen, "Top 10 Guidelines for Homepage Usability," NN/g, May 11, 2002 | T2 | Y |
| F2.6 | **Information scent.** The link label is "the most important component" of scent. Labels should be "a succinct yet accurate description" and "clear and self-explanatory". Avoid jargon, branded terms and generic labels ("More", "Learn more"). Be specific rather than "relying on the context", especially on small screens. Support labels with summaries and representative images. | Raluca Budiu, "Information Scent," NN/g, Feb 2, 2020 | T2 | Y |
| F2.7 | **Menu design (17 guidelines).** (1) Show navigation on larger screens, not hidden in a hamburger. (5) Show current location: "Failing to indicate the current location is probably the single most common mistake". (7) Clear, specific, familiar labels: "Menus are **not** the place to get cute with made-up words, internal jargon". (8) Front-load key terms. (11) Make targets big enough. (13) Use click- not hover-activated submenus. (17) "Avoid innovative or gimmicky navigation patterns." | Page Laubheimer, "Menu-Design Checklist: 17 UX Guidelines," NN/g, Jun 7, 2024 | T2 | Y |
| F2.8 | **Hidden vs visible navigation (179 participants, 6 sites).** On desktop, hidden nav was used in **27%** of cases vs **48%** for visible and **50%** for combo. Content discoverability dropped "**more than 20%**" with hidden nav. Hidden-nav tasks were "**at least 39% slower**" on desktop and **15%** slower on mobile vs combo. Difficulty 2.6 (hidden) vs 2.1 (visible). Rec: "Do not use hidden navigation (such as hamburger icons) in desktop user interfaces." On mobile, show links visibly if there are **≤4** top-level items. | Kara Pernice & Raluca Budiu, "Hamburger Menus and Hidden Navigation Hurt UX Metrics," NN/g, Jun 26, 2016 | T2 | Y |
| F2.9 | **Mega menus** suit "bigger sites with many features". For a small personal site (~5–7 top-level destinations) a simple visible menu is the appropriate pattern. List each option only once. | Jakob Nielsen & Angie Li, "Mega Menus Work Well for Site Navigation," NN/g, Mar 26, 2017 | T2 | Y |
| F2.10 | **Duplicate links** add choices, compete for attention, make users wonder whether two links differ, and waste clicks: "Eliminate redundancy on webpages whenever possible to reduce cognitive overload." Acceptable exceptions: an image plus its label, an icon plus text, and top/bottom links on very long pages. Pages 2–3 screens long usually don't need them. If duplicated, place them far apart and never in the same view. | Hoa Loranger, "The Same Link Twice on the Same Page: Do Duplicates Help or Hurt?", NN/g, Mar 13, 2016 | T2 | Y |
| F2.11 | **Cards.** A card is "a container for a few short, related pieces of information". Cards suit browsing heterogeneous items. "Card layouts are less scannable than lists" and are poor for comparison and ranked or ordered content. Make the **whole card clickable**, use a visible container signifier, and keep the summary short. | Page Laubheimer, "Cards: UI-Component Definition," NN/g, Nov 6, 2016 | T2 | Y |
| F2.12 | **About Us.** Based on 3 rounds, 70+ users, 100 sites tested plus 65 reviewed, and 85 guidelines. Give a tagline on the homepage plus a summary of "1–2 short, scannable paragraphs" at the top of About. Users were "baffled" when sites failed to say what they do. Real photos of real people were preferred over stock, which was a negative. Hard-to-find contact info hurt satisfaction. Footers are a fallback when navigation fails, so put contact and About links there. | Anna Kaley & Jakob Nielsen, "About Us Information on Websites," NN/g, May 26, 2019 | T2 | Y |
| F2.13 | **Case-study structure.** Seven elements: (1) problem or hypothesis, (2) your role and collaboration, (3) how you reached the solution, (4) how it solved the problem, (5) challenges and abandoned concepts, (6) effects on users and business, (7) what you learned. Plus the "3–5 case studies" guidance in F1.8. | Krause, NN/g 2019 (as F1.8) | T2 | Y |
| F2.14 | **PDFs.** "PDF should never be used for on-screen reading." If a PDF is needed (e.g. a printable CV), pair it with an HTML gateway page. Label links as PDF with **page count and file size**. | Jakob Nielsen & Anna Kaley, "Avoid PDF for On-Screen Reading," NN/g, Jun 28, 2020 | T2 | Y |
| F2.15 | **Scrolljacking.** "The majority of our study participants were at least mildly disoriented." Task-oriented users abandoned pages. Problems were worse on mobile. Keep important text out of scrolljacks, avoid it on mobile, and keep it off the first screen. Verdict: "scrolljacking leads to more user pain than benefits." | Sara Paul, "Scrolljacking 101," NN/g, Aug 6, 2023 | T2 | Y |
| F2.16 | **Flags for languages.** "Some languages are spoken in many countries", so flags are poor language symbols. NN/g's 1996 piece only suggests choosing a flag by audience location. It does **not** say to use native-language names. That guidance comes from USWDS (F2.17). | Jakob Nielsen, "Flag Problems," NN/g, Aug 1, 1996 | T2 | Y |
| F2.17 | **Two-language selector.** Put the toggle in the header at the **top right** (LTR), in the same position on every page. Label each language "in the common, native language" (e.g. "Español", so here "Türkçe"/"English"). "Do not use flags or country codes to indicate languages." Set the HTML `lang` attribute. | U.S. Web Design System, "Select a language — two languages" pattern | T2 | Y |
| F2.18 | **W3C i18n on language negotiation.** "It is always best to add links to alternate language versions, and to do so on every page… Such information should not be hidden." "Be wary about using IP addresses… to guess the language." Remember the user's choice with a cookie or `localStorage`. | W3C Internationalization, "Language negotiation" Q&A | T2 | Y |

Note: I found no NN/g article specifically about multilingual language *selectors* (`/articles/language-selector/` returns 404). Use USWDS, W3C and Google (F8.x) for this.

---

## 3. Academic researcher homepages and publication lists

| ID | Claim | Source | Tier | Fetched? |
|---|---|---|---|---|
| F3.1 | **Top CS PhD programmes.** "The most important component is your prior research experience and what your recommendation letters and personal statement have to say about" it. "Every application is carefully scrutinized by at least 3 faculty". **Warning for international applicants:** if publications appear in venues the committee doesn't know or can't access, "this usually leads us to discount such publications". Remedy: "Create a web site that has links to all of your papers in English." | Mor Harchol-Balter (CMU), "Applying to Ph.D. Programs in Computer Science," 2014 PDF | T2 (faculty guidance) | Y |
| F3.2 | **LSE guidance.** Content: short bio, news/events, research interests and publications, major projects, contact. "Visitors will likely spend a very short amount of time on your site", so make "key information accessible within three clicks from the entry point". Divide large publication lists "by type". Tailor to the audience (academic, student, public). Complete the page metadata. Only build a larger site if you "have the time to keep it updated". Write clearly for an international audience. | LSE, "How do you create a good personal website?" | T2 | Y |
| F3.3 | **Elsevier guidance.** Content: profile and expertise, current research and goals, "links to all types of publications", basic contact info, honours, funding, teaching, talks. Design: a simple uncluttered template, light background with dark text, 2–3 colours, 1–2 fonts, generous spacing and bullets, avoid long paragraphs. | Elsevier Connect, "Creating a simple and effective academic personal website," Nov 29, 2012 | T3 (publisher blog) | Y |
| F3.4 | **Google Scholar indexing of personal pages.** "Each paper must have its own unique URL." Abstract must be visible on the page without sign-in. Meta tags are required: `citation_title`, `citation_author` (one per author), `citation_publication_date` (e.g. "2010/5/12" or year), `citation_pdf_url` (same subdirectory as the abstract page). PDF must be text-searchable, end in `.pdf`, and "must not exceed **5MB**". | Google Scholar, "Inclusion Guidelines for Webmasters" | T2 | Y |
| F3.5 | **Under-review papers and anonymity.** ACL Rolling Review: "authors are free to post and discuss non-anonymous preprints at any time"; submissions stay anonymous during review (effective from the Feb 15, 2024 cycles; page dated Jan 15, 2024). NeurIPS 2025 requires anonymized submissions, including linked material. Its full social-media policy was not confirmed. **Policies vary by venue and year, so check each one before listing a venue name next to an under-review title.** | ARR "Anonymity" page; NeurIPS 2025 CFP/FAQ (search) | T2 | Y (ARR); N (NeurIPS) |
| F3.6 | **Common conventions** (convergent across F3.2, F3.3 and community practice, not a formal standard): reverse-chronological order, grouped by type (journal, conference, preprint, thesis), own name highlighted, venue named, and per-item links ([PDF] [DOI] [arXiv] [code] [BibTeX]). Also link Google Scholar and ORCID profiles. | Synthesis | — | — |

---

## 4. Case-study and project write-up structure (engineering/ML), metrics, confidentiality

| ID | Claim | Source | Tier | Fetched? |
|---|---|---|---|---|
| F4.1 | Seven-element case-study structure (F2.13) and the process-over-output emphasis (F1.8). | NN/g 2019 | T2 | Y |
| F4.2 | **Model cards for ML.** Recommends that "released models be accompanied by documentation detailing their performance characteristics": intended use, evaluation data and procedure, metrics (disaggregated where relevant), caveats and limitations. This maps directly onto an ML project page's "Results" and "Limitations" blocks. | Mitchell et al., "Model Cards for Model Reporting," FAT* 2019 (arXiv 1810.03993) | T1 | Y (abstract) |
| F4.3 | **NeurIPS Paper Checklist** headings: Claims, Limitations, Reproducibility, Open access to data and code, Experimental details, Statistical significance, Compute resources, Broader impacts, Licenses, and others. This is a credible template for describing research projects (claims tied to evidence, limitations stated). | NeurIPS, "Paper Checklist Guidelines" | T2 | Y |
| F4.4 | **Summary plus drill-down.** Reviewers want aggregated summaries first, then details (F1.7). Employers favour low-cost, verifiable cues such as repos, demos and DOIs (F1.6). | Kuttal et al. 2021; Marlow & Dabbish 2013 | T1 | Y |
| F4.5 | **NDA/confidential work (T3 practitioner consensus only; no T1/T2 source found).** Check the NDA, since restrictions vary and some expire. Ask the client for permission; a password-protected or on-request case study is an option only with consent. Commonly restricted: client name and branding, specific findings, artifacts, **metrics/data/analytics**. Usually shareable: industry or domain, your role and responsibilities, process, generalised lessons. Don't write something vague like "helped a leading company…". Be precise about *your* contribution. | uxplanet/uxdesign.cc, freelancermap, vanschneider, Fueler, Core77 (search results) | T3 | N |
| F4.6 | **Metrics.** Hiring managers want "effects on users and the business" (F2.13). Model cards want metrics with evaluation context (F4.2). Objective, non-promotional language improved usability by 27% (F2.4). So state metrics with baseline, dataset or scale and unit, and avoid adjectives. | Synthesis of F2.4, F2.13, F4.2 | — | — |

---

## 5. Accessibility: WCAG 2.2 AA (most relevant success criteria)

WCAG 2.2 became a W3C Recommendation on **5 Oct 2023**, with an updated edition on **12 Dec 2024**. It adds 9 SC to 2.1 and removes **4.1.1 Parsing**. Source: W3C WCAG 2.2 and "What's New in WCAG 2.2" (T1, Y).

| ID | SC | Level | Requirement (normative essentials) |
|---|---|---|---|
| F5.1 | 1.4.3 Contrast (Minimum) | AA | Text ≥ **4.5:1**. Large text (≥ **18 pt**, or **14 pt bold**, ≈24 px / 18.66 px bold) ≥ **3:1**. Logotypes exempt. |
| F5.2 | 1.4.11 Non-text Contrast | AA | UI components (borders, focus indicators, icons) and meaningful graphics ≥ **3:1** against adjacent colours. |
| F5.3 | 1.4.10 Reflow | AA | No 2-D scrolling at **320 CSS px** width (= 1280 px at 400% zoom). For horizontal-scrolling content the height is 256 CSS px. |
| F5.4 | 1.4.12 Text Spacing | AA | No loss of content when the user sets line-height **1.5×**, paragraph spacing **2×**, letter spacing **0.12×** and word spacing **0.16×** the font size. |
| F5.5 | 1.4.8 Visual Presentation | AAA (advisory) | A mechanism for width "no more than **80 characters**", no justified text, line spacing ≥1.5, paragraph spacing ≥1.5× line spacing, and resize to 200% without horizontal scrolling. |
| F5.6 | 2.2.2 Pause, Stop, Hide | A | Moving, blinking or scrolling content that starts automatically and lasts >5 s must be pausable. |
| F5.7 | 2.3.3 Animation from Interactions | AAA | "Motion animation triggered by interaction can be disabled". Technique **C39**: use `prefers-reduced-motion`. Benefits people with vestibular disorders. |
| F5.8 | 2.4.1 Bypass Blocks | A | A skip mechanism past repeated blocks (skip link). |
| F5.9 | 2.4.2 Page Titled | A | Titles describe topic or purpose. |
| F5.10 | 2.4.4 Link Purpose (In Context) | A | Link purpose is determinable from the link text plus context. "Read more" alone fails scent (F2.6). |
| F5.11 | 2.4.5 Multiple Ways | AA | More than one way to locate a page, e.g. nav plus a sitemap/index page or search. |
| F5.12 | 2.4.6 Headings and Labels | AA | Headings and labels describe topic or purpose. |
| F5.13 | 2.4.7 Focus Visible | AA | The keyboard focus indicator is visible. |
| F5.14 | 2.4.11 Focus Not Obscured (Minimum) **(new)** | AA | A focused component is not *entirely* hidden by author content such as sticky headers or cookie bars. |
| F5.15 | 2.4.13 Focus Appearance **(new)** | AAA | The focus indicator area is ≥ a **2 CSS px** perimeter with 3:1 change contrast. A good target even though it is AAA. |
| F5.16 | 2.5.8 Target Size (Minimum) **(new)** | AA | Targets ≥ **24×24 CSS px**. Exceptions: spacing (a 24 px circle doesn't intersect another target), equivalent control, inline-in-text, user-agent controlled, essential. |
| F5.17 | 3.1.1 Language of Page | A | The default human language is programmatically determinable (`<html lang>`). |
| F5.18 | 3.1.2 Language of Parts | AA | Passages in another language are marked (`lang` on the element). Proper names and technical terms are exempt. |
| F5.19 | 3.2.3 Consistent Navigation | AA | Repeated navigation appears in the **same relative order** on every page. |
| F5.20 | 3.2.4 Consistent Identification | AA | Same function means the same label across pages. This directly addresses "inconsistent nav labels". |
| F5.21 | 3.2.6 Consistent Help **(new)** | A | Contact or help mechanisms appear in the same relative order across pages. |

Supporting T2 sources (Y):
- W3C i18n "Declaring language in HTML": "Always use a language attribute on the `html` tag." Add `lang` on elements containing another language. Never use `<meta http-equiv="Content-Language">`.
- web.dev "prefers-reduced-motion" (Thomas Steiner, 2019): parallax is a key trigger. Keep essential feedback, drop decorative motion, and prefer very short durations over `animation: none` if JS waits for `animationend`. **UNVERIFIED:** the frequently quoted "35% of adults over 40 have vestibular dysfunction" statistic does not appear in this source or the W3C Understanding doc. I could not trace it to a primary source in this pass.

---

## 6. Performance: Core Web Vitals, images, fonts, preloaders and animation

| ID | Claim (exact numbers) | Source | Tier | Fetched? |
|---|---|---|---|---|
| F6.1 | **Core Web Vitals thresholds**, assessed at the **75th percentile** of page loads, split mobile/desktop. **LCP** good ≤ **2.5 s**, poor > **4.0 s**. **INP** good ≤ **200 ms**, poor > **500 ms**. **CLS** good ≤ **0.1**, poor > **0.25**. | web.dev "Web Vitals"; "How the Core Web Vitals metrics thresholds were defined" (updated May 7, 2025); "INP" (updated Sep 2, 2025) | T2 | Y |
| F6.2 | INP replaced FID as a stable Core Web Vital in **March 2024**; the launch post is dated 2024-03-12. | web.dev blog "INP is officially a Core Web Vital" | T2 | Y |
| F6.3 | **LCP breakdown targets:** ~40% TTFB, <10% resource load delay, ~40% load duration, <10% render delay. "**Never lazy-load your LCP image**." Use `fetchpriority="high"` on one or two images at most. Synchronous scripts are "almost never necessary". Content "hidden until the JavaScript code finishes loading, and then everything is revealed at once" inflates render delay. A/B-test-style hiding is the cited example, and AOS fade-in or preloader patterns behave the same way (inference). | Walton & Pollard, "Optimize LCP," web.dev (updated Mar 31, 2025) | T2 | Y |
| F6.4 | **CLS.** "Always include `width` and `height` size attributes on your images and video elements" (or CSS `aspect-ratio`). Reserve space for late content. Web-font swaps can shift layout. Animate `transform` rather than layout properties, since composited transforms "don't count toward CLS". | Osmani & Pollard, "Optimize CLS," web.dev (updated Feb 7, 2025) | T2 | Y |
| F6.5 | **Image formats.** "WebP and AVIF will generally provide better compression… and should be used where possible", with JPEG/PNG fallback. Prefer vector (SVG) where possible. Use `<video>` instead of GIF. Serve responsive images. Google's figures: WebP lossless is "**26% smaller**" than PNG, and WebP lossy is "**25–34% smaller**" than JPEG at equal SSIM. | web.dev "Choose the right image format"; Google "WebP" | T2 | Y |
| F6.6 | **Fonts.** Use WOFF2 only. Preconnect to font origins (with `crossorigin`). Preload sparingly: it steals bandwidth and ignores `unicode-range`. `font-display: swap` shows text immediately but may shift. `optional` blocks ≤100 ms and avoids swap shifts but may skip the font. Use `size-adjust` fallback metrics to cut CLS. "The fastest font to deliver is a font that isn't requested in the first place" (system fonts are fine for body). Replace **icon fonts with SVG**, which is better for accessibility and CLS. Self-hosting needs subsetting and WOFF2, and check font licences. | Hempenius & Pollard, "Best practices for fonts," web.dev (updated 2022-10-04) | T2 | Y |
| F6.7 | **Turkish glyph coverage (directly verified 2026-10-21 from the Google Fonts CSS2 API, Inter 400).** The `latin` subset covers U+0000–00FF (includes **ç ö ü Ç Ö Ü**) **plus U+0131 (dotless ı)**. **ğ Ğ (U+011E/F), İ (U+0130), ş Ş (U+015E/F)** are only in **`latin-ext`** (U+0100–02BA…). A Turkish page subset to `latin` alone renders ğ/ş/İ in the fallback font (mixed glyphs). Self-hosted subsets must include at least U+011E–011F, U+0130–0131 and U+015E–015F. | fonts.googleapis.com/css2 response; Unicode Latin Extended-A block | T2 | Y |
| F6.8 | **Preloaders/splash screens:** **no T1/T2 source found** that studies preloaders on content sites. The evidence is indirect: hidden-until-JS content delays LCP (F6.3), the first 10 s are critical (F2.1), and scroll-triggered effects disorient users (F2.15). Treat "remove preloader" as an inference from these, not a measured effect. | Inference | — | — |
| F6.9 | **Lab vs field.** CWV thresholds apply to field data (CrUX). A low-traffic personal site may have **no CrUX data**, so verify with Lighthouse/PageSpeed lab runs (TBT as the INP proxy) plus `web-vitals` RUM if desired. | Inference from F6.1 (CrUX basis) | — | — |

---

## 7. Typography, readability and dark mode

| ID | Claim (exact numbers) | Source | Tier | Fetched? |
|---|---|---|---|---|
| F7.1 | **Line length.** Dyson & Kipping (1998): 48 participants and 6 line lengths of **25–100 cpl** (10 pt Arial). **100 cpl** was read fastest vs 25 cpl, partly due to scrolling. **55 cpl** was *rated* easiest to read but was not fastest. **Dyson & Haselgrove (2001):** "documents at **55 characters per line** producing better comprehension scores than the longest line length (**100** characters per line)", with no speed-accuracy trade-off. Characters per line is "the critical variable". Bernard et al. (2002a): 45/76/132 cpl showed no differences. | Mary C. Dyson, "How physical text layout affects reading from screen," *Behaviour & Information Technology* 23(6):377–393, 2004 (review) | T1 | Y (review). The 2001 primary was not opened (paywall); its result is taken from the review. |
| F7.2 | WCAG 1.4.8 (AAA) caps block width at **80 characters** (F5.5). | W3C | T1 | Y |
| F7.3 | **Font size** (104 participants, Wikipedia reading, eye tracking; font sizes **10–26 "points"** and 4 line spacings). Readability (fixation duration) improved significantly with size, and comprehension was significantly better at **18 and 26**. Line-spacing effects were marginal, and the extremes (0.8×, 1.8×) impaired readability. Authors recommend "fonts of size **18 or larger** and… default line spacing" for text-heavy sites. Caveat: "points" in a browser context ≈ CSS px as set in the experiment, so verify the unit before quoting. | Rello, Pielot & Marcos, "Make It Big! The Effect of Font Size and Line Spacing on Online Readability," CHI 2016, pp. 3637–3648 | T1 | S (ACM returned 403; summaries via BYU Editing Research and Clear Helper; metadata confirmed via Semantic Scholar) |
| F7.4 | **Line height.** WCAG 1.4.12 requires layouts to *tolerate* 1.5×, and 1.4.8 recommends ≥1.5 (AAA). Rello et al. found default spacing (~1.2×) fine and extremes harmful. A 1.5–1.6 body line-height satisfies the standard and stays within the tested non-harmful range. | F5.4, F5.5, F7.3 | — | — |
| F7.5 | **Dark vs light mode (literature review).** "In users with normal vision, light mode leads to better performance most of the time" (Piepenbrock et al. 2013, *Ergonomics*, ages 18–33 and 60–85). The light-mode advantage grows as font size shrinks (Piepenbrock, Mayr & Buchner 2013, *Human Factors*). Light mode is better at night for small text (Dobres et al. 2017). People with cloudy ocular media (cataracts) read faster in dark mode (Legge et al. 1985, 7 participants). Recommendation: don't make dark mode the default for general audiences, but offer it and honour the OS setting. NN/g did no primary research here. | Raluca Budiu, "Dark Mode vs. Light Mode: Which Is Better?", NN/g, Feb 2, 2020 | T2 (review of T1) | Y |
| F7.6 | `prefers-color-scheme` (Media Queries Level 5) detects the OS/UA light or dark preference. `light` also means "has not expressed an active preference". It has been Baseline widely available since **January 2020**. | MDN | T2 | Y |
| F7.7 | **UNVERIFIED:** popular dark-mode preference figures (e.g. "82% of users use dark mode") come from vendor polls (Android Authority, Polypane). No representative survey was confirmed. Don't cite them. | — | T3 | N |
| F7.8 | **Body-text contrast:** the 4.5:1 minimum applies in both themes (F5.1). The Elsevier academic-site guide also recommends dark text on a light background (F3.3, T3). | W3C | T1 | Y |

---

## 8. SEO for personal sites

| ID | Claim | Source | Tier | Fetched? |
|---|---|---|---|---|
| F8.1 | **hreflang.** Use one method (HTML `<link>`, HTTP header, or sitemap). "Each language version must list itself as well as all other language versions." Return links are mandatory, otherwise annotations are ignored. URLs must be **absolute**. Use `x-default` as the fallback. Codes are ISO 639-1 (`tr`, `en`) with optional ISO 3166-1 region. A region-only code is invalid. | Google Search Central, "Tell Google about localized versions of your page" | T2 | Y |
| F8.2 | "Google doesn't use `hreflang` or the HTML `lang` attribute to detect the language of a page". It uses visible content, so set `lang` for accessibility (F5.17), not SEO. Use **different URLs per language**. "**Avoid automatically redirecting**" between language versions. Add links to other language versions. Avoid translating only the boilerplate. | Google, "Tell Google about localized versions"; "Managing multi-regional and multilingual sites" | T2 | Y |
| F8.3 | **FAQ rich results are gone.** Restricted to "well-known, authoritative government and health websites" (Sep 14, 2023). Deprecated, "no longer appear in Google Search starting May 7, 2026" (May 8, 2026). Documentation removed: "no longer shown in Google Search results" (Jun 15, 2026). Do not add `FAQPage` for SEO. | Google Search Central "Latest updates" changelog | T2 | Y |
| F8.4 | **Sitelinks search box is gone.** "No longer available in Google Search results" (Nov 29, 2024 changelog; retired Nov 21, 2024 per press). `SearchAction` markup is unused but harmless. `WebSite` structured data for **site names** is still supported. A static site with no search should not declare a `SearchAction`. | Google changelog (Y); press coverage (S) | T2 | Y/S |
| F8.5 | **ProfilePage + Person.** Valid for pages that centre on one person, including an "About Me" page. `mainEntity` requires `name`. Recommended: `alternateName`, `description`, `identifier`, `image` (no placeholder images), `sameAs` (external profiles), and page `dateCreated`/`dateModified`. Markup doesn't guarantee rich results. | Google Search Central, "Profile page (ProfilePage) structured data" (added Nov 27, 2023) | T2 | Y |
| F8.6 | **ScholarlyArticle** is a schema.org type, but this pass found no Google Search rich-result feature for it. Discoverability of papers in **Google Scholar** relies on `citation_*` meta tags and one URL per paper (F3.4). Treat ScholarlyArticle JSON-LD as optional semantic markup with no expected SERP feature. | schema.org (not fetched); Google Scholar (Y) | T2 | Partly |
| F8.7 | **Sitemaps.** You may not need one if the site is "about **500 pages or fewer**" and "comprehensively linked internally". You may need one if "your site is new and has few external links". A sitemap is cheap for a new personal site and is also a place to declare hreflang. | Google, "What is a sitemap" | T2 | Y |
| F8.8 | **Meta descriptions and titles.** "Identical or similar descriptions on every page of a site aren't helpful". Write page-specific descriptions with no length limit (the snippet is truncated). Prioritise the home and key pages. Titles: "descriptive and concise", unique per page, avoid boilerplate, "Brand your titles concisely" (site name at the start or end). Empty descriptions (current problem) give Google no candidate snippet text. | Google, "Control your snippets"; "Influencing your title links" | T2 | Y |

---

## 9. Trust and credibility

| ID | Claim (exact numbers) | Source | Tier | Fetched? |
|---|---|---|---|---|
| F9.1 | **Stanford Guidelines for Web Credibility** (B.J. Fogg, 2002; "over 4,500 people" across three years of research): (1) make it easy to verify the accuracy of information, (2) show there's a real person or organisation behind the site, (3) highlight expertise, (4) show honest and trustworthy people stand behind it, (5) make it easy to contact you, (6) look professional or appropriate for your purpose, (7) make it easy to use and useful, (8) update content often, or at least show it's been reviewed recently, (9) use restraint with promotional content, (10) avoid errors of all types. | Stanford Persuasive Technology Lab, credibility.stanford.edu/guidelines | T2 | Y |
| F9.2 | **Stanford-Makovsky Web Credibility Study 2002** (self-report, **1,481 respondents** from the US and Finland, 55 items, −3…+3 scale, not peer-reviewed). Increased credibility: physical address **+1.67**, phone **+1.56**, email **+1.47**, "updated since your last visit" **+1.65**, "looks professionally designed" **+1.54**, "arranged in a way that makes sense" **+1.46**, author credentials listed **+1.31**, citations and references **+1.30**, "information in more than one language" **+0.98**. Decreased it: typo **−1.26**, sometimes unavailable **−1.29**, "a link that doesn't work" **−1.42**, unattributed info **−0.53**. | Fogg et al., Stanford-Makovsky Web Credibility Study 2002 (research report) | T2/T3 (lab report) | Y |
| F9.3 | **Prominence of design look.** 2,684 participants evaluated live sites, and "design look" appeared in **46.1%** of credibility comments, the most frequent category. | Fogg et al., "How do users evaluate the credibility of Web sites?", DUX 2003 | T1 | S (figures from search summaries; paper not opened) |
| F9.4 | **First impressions.** Visual-appeal judgments form within ~50 ms and are consistent with longer exposures. | Lindgaard, Fernandes, Dudek & Brown, "Attention web designers: You have 50 milliseconds to make a good first impression!", *Behaviour & IT* 25(2), 2006 | T1 | S (metadata verified via Semantic Scholar; abstract not retrievable; the finding is stated from the well-known paper, so verify before quoting numbers) |
| F9.5 | About-page credibility: real photos over stock, easy-to-find contact, honest and balanced testimonials (F2.12). Recruiters spent **19%** of profile time fixating on photos, a distraction from key data (F1.1). So use a modest, real headshot, not a dominant hero image. | NN/g 2019; Ladders 2012 | T2/T3 | Y |

---

## Design requirements derived from evidence

Each requirement is testable. Evidence IDs are in brackets.

### A. Homepage and information architecture

**R1. Value proposition in the first viewport.** At 1366×768 and 390×844, the first viewport shows name, a role line naming the domains (for example "AI researcher & engineer: document AI, KYC/identity verification"), and one sentence of proof (for example "N peer-reviewed papers · production KYC systems at X scale"). No "Welcome to…" copy.
- Evidence: [F2.1, F2.5, F2.12]
- Test: a 5-second test with 5 users recalls the role and a domain.

**R2. 1–4 audience task entry points above the fold.** The homepage hero offers ≤4 primary entry points: **Projects**, **Publications**, **CV**, **Contact**.
- Evidence: [F2.5 guideline 4, F3.2]
- Test: each is visible without scrolling at 1366×768.

**R3. Featured projects early.** The Featured Projects section starts within the first screenful on desktop. At least **3** featured project cards are fully visible within the first **two** screenfuls (≤2160 px of page height at 1080 px viewport, ≤1536 px at 768 px).
- Evidence: [F2.2, F2.5 guideline 6]

**R4. Click depth.** Every project page, paper page and the CV is reachable in **≤2 clicks** from the homepage. The Projects index, Publications index and CV are reachable in **1 click** from every page.
- Evidence: [F3.2 (≤3 clicks), F2.7]
- Test: crawl the link graph.

**R5. Multiple ways.** Provide the global nav plus at least one other locating mechanism: an HTML sitemap/index page, or tag filters on the Projects index.
- Evidence: [F5.11]

**R6. 3–5 deep case studies.** Exactly 3–5 projects are "featured" with full case studies. Others appear as a compact list ("More projects") with a one-line outcome each.
- Evidence: [F1.8, F2.13]

### B. Navigation and labels

**R7. Visible desktop nav, no hamburger.** At viewport widths ≥ 768 px all top-level items are visible. On mobile, if there are ≤4 top-level items they stay visible; otherwise use a combo pattern (visible primary items plus a menu).
- Evidence: [F2.8, F2.7 #1]

**R8. Single canonical label set.** Keep a label dictionary (EN↔TR, e.g. Projects↔Projeler, Publications↔Yayınlar, CV↔Özgeçmiş, Contact↔İletişim, About↔Hakkımda).
- The same destination uses the identical label in the header, the footer, the page `<h1>` (or its lead word) and `<title>`.
- Nav order is identical on all pages.
- Labels are plain, familiar nouns with no made-up or branded terms.
- Evidence: [F5.19, F5.20, F2.7 #7–8, F2.6]
- Test: automated diff of the nav HTML across pages.

**R9. Current location indicated.** The active nav item has `aria-current="page"` plus a visible non-colour-only indicator.
- Evidence: [F2.7 #5]

**R10. No duplicate links within one view.** Within any single viewport, no two separate text links point to the same URL. Exceptions: an image plus caption acting as one card, and the logo→home link. Header nav items are not repeated as hero buttons, except the single primary CTA.
- Evidence: [F2.10]
- Test: a script lists duplicate hrefs per section.

**R11. Simple menu, no mega menu or hover submenus.** No hover-activated menus. If any submenu exists, it opens on click.
- Evidence: [F2.9, F2.7 #13]

### C. Calls to action, contact and CV

**R12. One primary CTA per page.** Each page has one visually primary CTA matched to its audience:
- Home: "Contact me" or "Get in touch".
- CV page: "Download CV (PDF, 2 pages, 180 KB)", with real values.
- Project pages: "Discuss a similar project".

Secondary CTAs are visually subordinate.
- Evidence: [F2.5, F9.1 #5]

**R13. Contact in ≤1 click everywhere, in a consistent place.** Email is shown as text and links in the header (or as the last nav item) and the footer, in the same relative order on every page. Also link GitHub, Google Scholar, ORCID and LinkedIn.
- Evidence: [F5.21, F2.12, F9.1 #5, F9.2]

**R14. HTML CV plus labelled PDF.** The CV exists as an HTML page, the gateway. The PDF is an optional download whose link text includes "PDF", page count and file size.
- Evidence: [F2.14, F3.3]

**R15. Recruiter-scannable experience block.** Each role shows title, organisation, start–end dates (month/year), and 2–4 bulleted, metric-led accomplishments. Education also appears with dates.
- Keep it to a single column, with dates in a consistent left or right position.
- No decorative imagery inside the experience list.
- Evidence: [F1.1, F1.2, F1.3, F1.5]
- Test: users find the "current title + org + dates" in ≤7 s.

### D. Project pages and case studies

**R16. Case-study template.** Every featured project page has these blocks in this order:
1. **Summary box** (≤60 words): problem, *my role*, headline result, year, status.
2. Problem/context.
3. Approach, including alternatives rejected.
4. Results: metrics with baseline, dataset or scale, and unit.
5. My role and team size.
6. Stack.
7. Limitations and lessons.
8. Links: repo, paper, demo, DOI.

Evidence: [F2.13, F4.2, F4.3, F4.4, F1.7]

**R17. No placeholder pages.** A project may be linked publicly only if it has at least a summary box, role, year, status and one verifiable link or an explicit NDA notice. No lorem ipsum, "coming soon" or template images.
- Evidence: [F9.1 #10, F9.2 (broken link −1.42, typo −1.26)]
- Test: CI grep for placeholder strings and a link checker with 0 broken internal links.

**R18. Confidential/NDA variant.** For NDA projects, show:
- domain and problem class;
- own role and responsibilities;
- method at a generic level;
- scale as ranges (e.g. "10⁵–10⁶ documents/month");
- relative metrics only if the client permits.

Add the status badge "Under NDA: details available on request" and an on-request CTA. Never show client name or logo, screenshots, or exact metrics without written permission.
- Evidence: [F4.5 (T3), F4.6]

**R19. Under-review research.** List papers under review as "Under review" (plus a preprint link if one exists). Name the venue only if that venue's current policy permits it (see the ARR vs NeurIPS differences).
- Evidence: [F3.5]

**R20. Project cards.** Each card shows a front-loaded title, a one-line outcome, role, year, 2–4 stack tags and a status badge (Published / In production / Under NDA / Under review).
- The **whole card is one link**. A visible container signifier marks the card.
- Cards are used for projects only. Publications use a list.
- Evidence: [F2.11, F2.6, F1.7]

**R21. Descriptive link text.** No standalone "Read more", "Learn more" or "Click here". Links name the destination (e.g. "KYC document-verification case study").
- Evidence: [F2.6, F5.10]
- Test: grep.

### E. Publications

**R22. Publication list format.**
- Reverse chronological, grouped by type: Journal, Conference, Preprint/Under review, Thesis.
- Each entry: all authors with **own name bolded**, title, full venue name plus acronym, year, status, and links [PDF] [DOI] [arXiv] [Code] [BibTeX].
- English title for every paper; for a Turkish-language paper, add the Turkish original in `lang="tr"`.

Evidence: [F3.1, F3.2, F3.3, F3.6, F5.18]

**R23. One page per paper with Scholar meta.** Each paper has its own URL with a visible abstract and `citation_title`, `citation_author` (×n), `citation_publication_date` and `citation_pdf_url` (PDF in the same directory, ≤5 MB, text-searchable).
- Evidence: [F3.4]

### F. Bilingual UX

**R24. Separate URL per language, with equivalent-page switching.** For example `/` (TR) and `/en/`, or `/tr/` and `/en/`.
- The language switch is in the header, top right, at a fixed position on every page.
- It links to the **equivalent page**, not the other homepage.
- Text labels "English" / "Türkçe". **No flags.**
- No automatic redirect by IP or `Accept-Language` (at most a dismissible suggestion banner). Remember the choice in `localStorage`, wrapped in try/catch.
- Evidence: [F2.17, F2.18, F8.2, F2.16]

**R25. Language markup.** `<html lang="tr">` or `lang="en"` on every page. Inline foreign-language passages carry `lang`. Each language version is fully translated, including navigation, not boilerplate-only.
- Evidence: [F5.17, F5.18, F8.2]

**R26. hreflang cluster.** Every page declares absolute-URL alternates for itself, its counterpart and `x-default`, with reciprocal links. Codes are `tr` and `en`.
- Evidence: [F8.1]
- Test: hreflang validator, 0 missing return links.

### G. Accessibility (WCAG 2.2 AA conformance target)

**R27. Contrast in both themes.**
- Body text ≥4.5:1.
- Large text (≥24 px, or ≥18.66 px bold) ≥3:1.
- UI boundaries, icons and focus rings ≥3:1.
- Tested for the light and dark themes separately.
- Evidence: [F5.1, F5.2, F7.8]

**R28. Focus.** All interactive elements have a visible focus ring of ≥2 px with ≥3:1 contrast (meets AAA 2.4.13 by construction). Focused elements are never hidden by the sticky header (use `scroll-padding-top` ≥ header height).
- Evidence: [F5.13, F5.14, F5.15]

**R29. Target size.** All nav links, the language switch, social icons and card links are ≥24×24 CSS px, or meet the spacing exception. Aim for 44×44 for primary mobile targets.
- Evidence: [F5.16, F2.7 #11]

**R30. Structure.**
- A skip-to-content link.
- `header`, `nav`, `main` and `footer` landmarks.
- One `<h1>` per page and a logical heading order.
- A unique descriptive `<title>`.
- Evidence: [F5.8, F5.9, F5.12]

**R31. Reflow and spacing.** No horizontal scrolling at 320 CSS px. No clipped content when the 1.4.12 text-spacing bookmarklet is applied. Text resizes to 200% without loss.
- Evidence: [F5.3, F5.4, F5.5]

**R32. Motion.**
- Under `prefers-reduced-motion: reduce`, all scroll-triggered and decorative animation is off (AOS disabled), with no parallax.
- No scrolljacking at all.
- Any auto-moving element >5 s is pausable.
- Evidence: [F5.6, F5.7, F2.15]

### H. Performance

**R33. Core Web Vitals budget.** Mobile p75 targets: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1. Where CrUX data is absent, lab Lighthouse mobile should give LCP ≤2.5 s, TBT ≤200 ms and CLS ≤0.1 on every template (home, project, publications, CV).
- Evidence: [F6.1, F6.2, F6.9]

**R34. No preloader, no hidden-until-JS above the fold.**
- Remove any splash or preloader.
- Above-the-fold content, including the LCP element, renders from the HTML/CSS without waiting for JS. No `opacity:0` entrance animations on hero content.
- The hero image is not lazy-loaded and carries `fetchpriority="high"`. It is the only image with high priority.
- Evidence: [F6.3, F6.8, F2.1]

**R35. Images.**
- AVIF/WebP via `<picture>` with fallback.
- `width`/`height` on every `<img>`.
- `srcset`/`sizes` for content images.
- `loading="lazy"` only below the fold.
- Drop unused duplicate variants (`.jfif`/`.png` twins).
- Use SVG for logos and icons.
- Evidence: [F6.4, F6.5]

**R36. Fonts.**
- ≤2 web-font families (or system UI for body).
- WOFF2 only, preloading ≤1–2 files.
- `font-display: swap`, or `optional` for body.
- Use `size-adjust`ed fallbacks.
- **Turkish coverage must include U+011E–011F, U+0130–0131 and U+015E–015F** (the Google Fonts `latin-ext` subset, or a custom subset). Test string "ğĞüÜşŞıİöÖçÇ" renders entirely in the web font.
- Replace the Bootstrap Icons font with inline SVG.
- Evidence: [F6.6, F6.7]

### I. Typography and theme

**R37. Readable body text.**
- Body ≥18 px on desktop (≥16 px minimum on mobile).
- Line-height 1.5–1.6.
- Measure 55–75 characters (hard cap 80).
- Left-aligned, never justified.
- Paragraph spacing ≥1.5× line-height.
- Evidence: [F7.1, F7.2, F7.3, F7.4, F5.5]

**R38. Theme.** Follow `prefers-color-scheme` on first visit, defaulting to light when there is no preference, and offer a manual toggle that persists. Both themes meet R27.
- Evidence: [F7.5, F7.6]

**R39. Scannable writing.**
- Every page leads with its key point in the first two sentences.
- Use descriptive H2/H3 headings that front-load keywords, bullets for lists of ≥3 items, and bold for a few key terms.
- Use objective, non-promotional wording (no "passionate", "cutting-edge" without evidence).
- Evidence: [F2.3, F2.4]

### J. SEO and metadata

**R40. Unique titles and descriptions.**
- Every page has a unique `<title>` in the form "Page topic – Muhammet Özdemir" (localised per language).
- Every page has a unique, non-empty meta description of 1–2 sentences that summarises that page.
- 0 empty or duplicate descriptions site-wide.
- Evidence: [F8.8, F2.5, F5.9]

**R41. Structured data.**
- The About (or home) page has `ProfilePage` with `mainEntity: Person` (`name`, `alternateName` "Muhammet Ozdemir/Özdemir", `jobTitle`, `affiliation`, `image` (a real photo), `sameAs` [GitHub, Scholar, ORCID, LinkedIn]) plus `dateModified`.
- Add `WebSite` with `name` for the site name.
- **No `FAQPage`** and **no `SearchAction`**.
- ScholarlyArticle JSON-LD is optional and secondary to the R23 `citation_*` tags.
- Evidence: [F8.3, F8.4, F8.5, F8.6]

**R42. Sitemap.** `sitemap.xml` lists all canonical TR and EN URLs with accurate `lastmod` and is referenced in `robots.txt`. hreflang is declared in exactly one mechanism (HTML link tags *or* the sitemap).
- Evidence: [F8.7, F8.1]

### K. Credibility

**R43. Freshness signal.** Home and CV show "Last updated: YYYY-MM", generated at build or by a manual check at most quarterly. A news or updates list shows dated recent items.
- Evidence: [F9.1 #8, F9.2 (+1.65), F2.5 guideline 8, F3.2]

**R44. Verifiability.** Every claim of a result links to evidence (paper DOI, repo, demo, certificate, employer page) or is marked NDA. Credentials (degrees, affiliations) appear on the About and CV pages.
- Evidence: [F9.1 #1–3, F9.2 (credentials +1.31, citations +1.30), F1.6]

**R45. Error-free.** CI runs a link checker (internal and external), an HTML validator and a spell-check (TR and EN). Release is blocked on any broken internal link.
- Evidence: [F9.1 #10, F9.2]

**R46. Photo restraint.** Use one real, professional headshot, no stock imagery, sized so it does not dominate the hero; ≤25% of first-viewport area is a suggested heuristic, not evidence-derived.
- Evidence: [F2.12, F1.1 (19% gaze on photos), F9.3, F9.4]

---

## Evidence-quality notes

- **Recruiter timing (6 s / 7.4 s)** comes from a vendor with a commercial interest. The 2012 study had N=30 and the 2018 study's N is undisclosed. Use it to justify *scannability*, not as a precise attention budget.
- **NN/g articles** are mostly qualitative usability findings plus expert synthesis. Quantitative ones used here: hamburger (N=179), scrolling (eye tracking), and dwell time (Microsoft Research data).
- **Portfolio/GitHub importance:** the strongest quantitative source is HackerRank 2018 (dated). The peer-reviewed evidence (Marlow & Dabbish 2013; Kuttal et al. 2021) is qualitative or small-N. No current (2024–2026) large-sample survey of hiring managers on portfolios was verified.
- **NDA handling** has only practitioner (T3) support.
- **Typography:** the line-length evidence (Dyson) is older and from desktop screens. The font-size evidence (Rello 2016) was read only via secondary summaries.

---

## References

**Recruiting and portfolios**
1. Evans, W. (2012). *Eye Tracking Online Metacognition: Cognitive Complexity and Recruiter Decision Making.* TheLadders. Summary PDF: https://www.bu.edu/com/files/2018/10/TheLadders-EyeTracking-StudyC2.pdf
2. HR Dive (2018, Nov 8). "Eye-tracking study shows recruiters look at resumes for 7 seconds." https://www.hrdive.com/news/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/541582/
3. ERE. "Is the 6-second resume scan a myth?" https://www.ere.net/articles/is-the-6-second-resume-scan-a-myth
4. HackerRank (2018). *2018 Developer Skills Report.* https://www.hackerrank.com/research/developer-skills/2018/
5. i-programmer (2018). "What's Important To Get A Developer Job" (HackerRank Tech Recruiting Report). https://www.i-programmer.info/news/150-training-a-education/11824-hackerrank-recruiting.html
6. Marlow, J., & Dabbish, L. (2013). Activity traces and signals in software developer recruitment and hiring. *CSCW '13*, 145–156. https://www.cs.cmu.edu/~xia/resources/Documents/Marlow-cscw13.pdf
7. Kuttal, S. K., Chen, X., Wang, Z., Balali, S., & Sarma, A. (2021). Visual Resume: Exploring developers' online contributions for hiring. *Information and Software Technology*, 138, 106633. https://par.nsf.gov/servlets/purl/10357418
8. Krause, R. (2019). 5 Steps to Creating a UX-Design Portfolio. NN/g. https://www.nngroup.com/articles/ux-design-portfolios/

**NN/g navigation, scanning and content**
9. Nielsen, J. (2011). How Long Do Users Stay on Web Pages? NN/g. https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/
10. Fessenden, T. (2018). Scrolling and Attention. NN/g. https://www.nngroup.com/articles/scrolling-and-attention/
11. Pernice, K. (2017). F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant. NN/g. https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
12. Nielsen, J. (1997). How Users Read on the Web. NN/g. https://www.nngroup.com/articles/how-users-read-on-the-web/
13. Nielsen, J. (2002). Top 10 Guidelines for Homepage Usability. NN/g. https://www.nngroup.com/articles/top-ten-guidelines-for-homepage-usability/
14. Budiu, R. (2020). Information Scent. NN/g. https://www.nngroup.com/articles/information-scent/
15. Laubheimer, P. (2024). Menu-Design Checklist: 17 UX Guidelines. NN/g. https://www.nngroup.com/articles/menu-design/
16. Pernice, K., & Budiu, R. (2016). Hamburger Menus and Hidden Navigation Hurt UX Metrics. NN/g. https://www.nngroup.com/articles/hamburger-menus/
17. Nielsen, J., & Li, A. (2017). Mega Menus Work Well for Site Navigation. NN/g. https://www.nngroup.com/articles/mega-menus-work-well/
18. Loranger, H. (2016). The Same Link Twice on the Same Page: Do Duplicates Help or Hurt? NN/g. https://www.nngroup.com/articles/duplicate-links/
19. Laubheimer, P. (2016). Cards: UI-Component Definition. NN/g. https://www.nngroup.com/articles/cards-component/
20. Kaley, A., & Nielsen, J. (2019). About Us Information on Websites. NN/g. https://www.nngroup.com/articles/about-us-information-on-websites/
21. Nielsen, J., & Kaley, A. (2020). Avoid PDF for On-Screen Reading. NN/g. https://www.nngroup.com/articles/avoid-pdf-for-on-screen-reading/
22. Paul, S. (2023). Scrolljacking 101. NN/g. https://www.nngroup.com/articles/scrolljacking-101/
23. Nielsen, J. (1996). Flag Problems. NN/g. https://www.nngroup.com/articles/flag-problems/
24. Budiu, R. (2020). Dark Mode vs. Light Mode: Which Is Better? NN/g. https://www.nngroup.com/articles/dark-mode/

**Multilingual**
25. U.S. Web Design System. Select a language — two languages. https://designsystem.digital.gov/patterns/select-a-language/two-languages/
26. W3C Internationalization. Language negotiation (Q&A). https://www.w3.org/International/questions/qa-site-conneg
27. W3C Internationalization. Declaring language in HTML. https://www.w3.org/International/questions/qa-html-language-declarations

**Academic**
28. Harchol-Balter, M. (2014). Applying to Ph.D. Programs in Computer Science. CMU. https://www.cs.cmu.edu/~harchol/gradschooltalk.pdf
29. LSE. How do you create a good personal website? https://info.lse.ac.uk/staff/services/engagement-and-impact/open-research/personal-websites
30. Elsevier Connect (2012). Creating a simple and effective academic personal website. https://www.elsevier.com/connect/creating-a-simple-and-effective-academic-personal-website
31. Google Scholar. Inclusion Guidelines for Webmasters. https://scholar.google.com/intl/en/scholar/inclusion.html
32. ACL Rolling Review. Anonymity policy. https://aclrollingreview.org/anonymity
33. NeurIPS 2025 Call for Papers / FAQ. https://neurips.cc/Conferences/2025/CallForPapers ; https://neurips.cc/Conferences/2025/PaperInformation/NeurIPS-FAQ
34. NeurIPS. Paper Checklist Guidelines. https://neurips.cc/public/guides/PaperChecklist
35. Mitchell, M., et al. (2019). Model Cards for Model Reporting. *FAT\* '19*. https://arxiv.org/abs/1810.03993

**NDA handling (T3)**
36. NDA/portfolio practitioner sources: https://www.freelancermap.com/blog/can-i-share-nda-protected-work-on-my-portfolio-tips-and-advice/ ; https://vanschneider.com/blog/portfolio-tips/make-portfolio-work-cant-shared/ ; https://www.fueler.io/blog/how-to-write-case-study-client-work-under-nda

**Accessibility**
37. W3C (2023/2024). Web Content Accessibility Guidelines (WCAG) 2.2. https://www.w3.org/TR/WCAG22/
38. W3C WAI. What's New in WCAG 2.2. https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
39. W3C WAI. Understanding SC 1.4.12 Text Spacing. https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
40. W3C WAI. Understanding SC 1.4.10 Reflow. https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
41. W3C WAI. Understanding SC 1.4.8 Visual Presentation. https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html
42. W3C WAI. Understanding SC 2.3.3 Animation from Interactions. https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
43. Steiner, T. (2019). prefers-reduced-motion: Sometimes less movement is more. web.dev. https://web.dev/articles/prefers-reduced-motion

**Performance**
44. web.dev. Web Vitals. https://web.dev/articles/vitals
45. web.dev. How the Core Web Vitals metrics thresholds were defined. https://web.dev/articles/defining-core-web-vitals-thresholds
46. web.dev. Interaction to Next Paint (INP). https://web.dev/articles/inp ; launch post: https://web.dev/blog/inp-cwv-launch
47. Walton, P., & Pollard, B. Optimize Largest Contentful Paint. web.dev. https://web.dev/articles/optimize-lcp
48. Osmani, A., & Pollard, B. Optimize Cumulative Layout Shift. web.dev. https://web.dev/articles/optimize-cls
49. web.dev. Choose the right image format. https://web.dev/articles/choose-the-right-image-format
50. Google. An image format for the Web (WebP). https://developers.google.com/speed/webp
51. Hempenius, K., & Pollard, B. Best practices for fonts. web.dev. https://web.dev/articles/font-best-practices
52. Google Fonts CSS2 API (subset ranges inspected 2026-10-21). https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap

**Typography and dark mode**
53. Dyson, M. C. (2004). How physical text layout affects reading from screen. *Behaviour & Information Technology*, 23(6), 377–393. (Copy read: https://stu.westga.edu/~ssynan1/literacy/Dyson.pdf)
54. Dyson, M. C., & Haselgrove, M. (2001). The influence of reading speed and line length on the effectiveness of reading from screen. *International Journal of Human-Computer Studies*, 54, 585–612. https://doi.org/10.1006/ijhc.2001.0458 (not opened; via ref. 53)
55. Rello, L., Pielot, M., & Marcos, M.-C. (2016). Make It Big! The Effect of Font Size and Line Spacing on Online Readability. *CHI '16*, 3637–3648. https://doi.org/10.1145/2858036.2858204 (secondary summaries only)
56. Piepenbrock, C., Mayr, S., Mund, I., & Buchner, A. (2013). Positive display polarity is advantageous for both younger and older adults. *Ergonomics*. https://doi.org/10.1080/00140139.2013.790485 (metadata only; findings via ref. 24)
57. MDN. prefers-color-scheme. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme

**SEO**
58. Google Search Central. Tell Google about localized versions of your page. https://developers.google.com/search/docs/specialty/international/localized-versions
59. Google Search Central. Managing multi-regional and multilingual sites. https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
60. Google Search Central. Latest updates (changelog: FAQ, sitelinks search box, ProfilePage). https://developers.google.com/search/updates
61. Google Search Central. Profile page (ProfilePage) structured data. https://developers.google.com/search/docs/appearance/structured-data/profile-page
62. Google Search Central. What is a sitemap. https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
63. Google Search Central. Control your snippets in search results. https://developers.google.com/search/docs/appearance/snippet
64. Google Search Central. Influencing your title links. https://developers.google.com/search/docs/appearance/title-link

**Credibility**
65. Fogg, B. J. (2002). Stanford Guidelines for Web Credibility. https://credibility.stanford.edu/guidelines/index.html
66. Fogg, B. J., Kameda, T., Boyd, J., Marshall, J., Sethi, R., Sockol, M., & Trowbridge, T. (2002). Stanford-Makovsky Web Credibility Study 2002. https://credibility.stanford.edu/pdf/Stanford-MakovskyWebCredStudy2002-prelim.pdf
67. Fogg, B. J., Soohoo, C., Danielson, D. R., Marable, L., Stanford, J., & Tauber, E. R. (2003). How do users evaluate the credibility of Web sites? *DUX '03*. (DOI not verified in this pass; paper not opened; figures via secondary sources, e.g. https://internetnews.com/marketing/study-for-site-cred-looks-matter)
68. Lindgaard, G., Fernandes, G., Dudek, C., & Brown, J. (2006). Attention web designers: You have 50 milliseconds to make a good first impression! *Behaviour & Information Technology*, 25(2). https://doi.org/10.1080/01449290500330448 (title/authors/year/venue verified via Semantic Scholar; page range not verified)
