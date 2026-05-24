/**
 * Slovník UI stringů sdílených komponent (Header, Footer, EmailCapture).
 *
 * Jeden zdroj překladového textu pro „chrome" webu. Komponenty (.astro) jsou
 * SDÍLENÉ napříč mutacemi a vlastní je CZ kanonický projekt (vlastník design
 * systému „A"). Tento soubor se při forku do jiného jazyka PŘELOŽÍ — stejně
 * jako content/pages/*.ts. EN/DE/PL fork = kopie projektu + překlad těchto dat.
 *
 * Nav odkazy: `nav.groups` (3 skupiny, 12 odkazů) sdílí Footer i mobilní menu;
 * `nav.desktop` (8 kompaktních) je jen pro desktopovou lištu.
 *
 * POZN.: značka/domény (brand spany, e-mailové adresy v právním textu) jsou
 * per-doména identita — fork je upraví v rámci své identity, nejsou to „překlad".
 */

export interface NavLink {
  href: string;
  label: string;
  /** Disciplína — barevné zvýraznění (tečka / hover barva). */
  d?: "seo" | "geo" | "aeo" | "aio";
  /** Stylová varianta (pillar / blog / audit / free). */
  variant?: "pillar" | "blog" | "audit" | "free";
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export const nav = {
  brandAria: "geo-seo.cz — domovská stránka",
  menuLabel: "Menu",
  openLabel: "Otevřít menu",
  closeLabel: "Zavřít menu",
  navAria: "Hlavní navigace",
  mobileAria: "Mobilní navigace",

  /** DESKTOP lišta — kompaktní (kratší názvy, pills). */
  desktop: [
    { href: "/seo/", label: "SEO", d: "seo" },
    { href: "/geo/", label: "GEO", d: "geo" },
    { href: "/aeo/", label: "AEO", d: "aeo" },
    { href: "/aio/", label: "AIO", d: "aio" },
    { href: "/seo-vs-geo-vs-aeo-vs-aio/", label: "Průvodce", variant: "pillar" },
    { href: "/blog/", label: "Blog", variant: "blog" },
    { href: "/audit/", label: "Audit", variant: "audit" },
    { href: "/navod-zdarma/", label: "Návod zdarma", variant: "free" },
  ] as NavLink[],

  /** Kompletní seznam — sdílí Footer i mobilní menu (plné názvy, 3 skupiny). */
  groups: [
    {
      label: "Čtyři disciplíny",
      links: [
        { href: "/seo/", label: "SEO", d: "seo" },
        { href: "/geo/", label: "GEO", d: "geo" },
        { href: "/aeo/", label: "AEO", d: "aeo" },
        { href: "/aio/", label: "AIO", d: "aio" },
      ],
    },
    {
      label: "Praxe",
      links: [
        { href: "/prakticky-postup/", label: "Praktický postup" },
        { href: "/rozhodovaci-matice/", label: "Rozhodovací matice" },
        { href: "/seo-vs-geo-vs-aeo-vs-aio/", label: "Hlavní průvodce" },
        { href: "/blog/", label: "Blog" },
      ],
    },
    {
      label: "Co nabízíme",
      links: [
        { href: "/navod-zdarma/", label: "Návod zdarma", variant: "free" },
        { href: "/pack/", label: "AI SEO Wireframe Pack" },
        { href: "/audit/", label: "AI SEO audit", variant: "audit" },
        { href: "/kontakt/", label: "Kontakt" },
      ],
    },
  ] as NavGroup[],
};

export const footer = {
  tagline:
    "Praktický průvodce GEO (Generative Engine Optimization) pro český trh — jak vás začnou citovat ChatGPT, Perplexity a Google AI. Audit a služby od agentury Sniper Design.",
  /** Skládá se jako: © {rok} {doména} · {builtNote} */
  builtNote: "postaveno na Astru · hostováno v ČR",
  sitemapLabel: "Sitemap",
  updatedLabel: "Aktualizováno květen 2026",
};

/**
 * UI microcopy vykreslované přímo ve sdílených šablonách (pillar, sekce
 * [slug], blog reading pages, homepage chrome) — opakující se popisky, které
 * NEjsou ani „chrome" komponent (nav/footer/emailCapture výš), ani obsah
 * stránek (content/pages/*.ts). Fork je přeloží.
 *
 * Rich tituly (`*Html`) jsou HTML stringy renderované přes `set:html`.
 * Vložené <strong>/<span class="hl"> dostanou styl z GLOBÁLNÍCH h2 pravidel
 * (src/styles/global.css → `h2 strong`, `h2 .hl`), takže fork je smí přeložit
 * i se značkami a v jiném slovosledu. `{abbr}` placeholder nahradí šablona.
 */
export const ui = {
  // Breadcrumbs (viditelné ve stránce; JSON-LD breadcrumb root řeší site.breadcrumbRoot)
  crumbHome: "Úvod",
  crumbBlog: "Blog",
  crumbDisciplines: "Disciplíny",
  ariaBreadcrumb: "Drobečková navigace",
  ariaToc: "Obsah článku",

  // Answer block (krátká odpověď / definice nahoře)
  answerShort: "Stručná odpověď",
  answerDefinition: "Stručná definice",

  // Meta dlaždice (slov / otázek / čtení / aktualizace)
  metaWords: "slov",
  metaFaqs: "častých otázek",
  metaReadingMins: "minut čtení",
  metaUpdated: "Aktualizováno:",

  // Obsah (TOC)
  tocLabel: "Obsah",
  tocLabelRich: "V tomto článku",
  tocChapters: "kapitol",

  // FAQ eyebrow
  faqEyebrowNum: "FAQ",
  faqEyebrow: "Časté otázky",

  // Back CTA
  backToHome: "Zpět na úvod",
  allArticles: "Všechny články v blogu",

  // Sekce [slug] — kontextový label v breadcrumb pillu (klíč = abbr)
  sectionContext: {
    SEO: "První disciplína · SEO",
    GEO: "Druhá disciplína · GEO",
    AEO: "Třetí disciplína · AEO",
    AIO: "Čtvrtá disciplína · AIO",
    PRAXE: "Návod · Praktický postup",
    MATICE: "Rozhodování · Kdy co použít",
  } as Record<string, string>,

  // Blog kategorie (crumb + filter chips + card tag); klíč = frontmatter category
  category: {
    tutorial: "Tutorial",
    analysis: "Analýza",
    defensive: "Defenzivní",
    "case-study": "Case study",
  } as Record<string, string>,
  categoryFallback: "Článek",

  // Pillar (hlavní průvodce)
  pillar: {
    eyebrow: "Hlavní průvodce",
    wordsApprox: "~3 000 slov",
    readingApprox: "~12 minut čtení",
    compareTable: "Srovnávací tabulka",
    faqTitleHtml: 'Sedm <span class="hl">častých otázek</span> ke <strong>4 zkratkám</strong>',
  },

  // Sekce [slug] — rich FAQ titulek ({abbr} nahradí šablona)
  sectionFaqTitleHtml:
    'Otázky, které se k <span class="hl">{abbr}</span> <strong>ptají nejčastěji</strong>',
};

export const emailCapture = {
  label: "Váš e-mail",
  placeholder: "vas@email.cz",
  buttonLabel: "Stáhnout AI SEO návod zdarma",
  legalHtml:
    'Pošleme vám <strong>odkaz na PDF</strong> z&nbsp;e-mailu <strong>aiseo-optimalizace@sniperdesign.cz</strong> (zkontrolujte i&nbsp;Hromadné&nbsp;/&nbsp;Promo). V&nbsp;dalších dnech občas přidáme <strong>praktické tipy k&nbsp;AI&nbsp;SEO a&nbsp;občasnou nabídku našich produktů / služeb</strong>. <strong>Žádný denní newsletter</strong> &mdash; odhlášení je v&nbsp;každém e-mailu jedním kliknutím. <a href="/gdpr/">Zásady zpracování osobních údajů</a>.',
};
