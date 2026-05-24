/**
 * Služby (Audit + 4 navazující) — zdroj pro ServiceCard grid (homepage,
 * /sluzby/ rozcestník) i dynamickou routu /sluzby/[slug]. Detail: SLUZBY.md.
 * Audit má vlastní stránku /audit/ (nemá detail pole zde).
 */
export interface Service {
  slug: string;
  title: string;
  blurb: string;
  href: string;
  featured?: boolean;
  tag?: string;
  /** Detail pro /sluzby/[slug] (4 navazující služby; Audit je nemá). */
  valueProp?: string;
  contains?: string[];
  forWhom?: string;
  model?: string;
}

export const services: Service[] = [
  {
    slug: "audit",
    title: "GEO/SEO Audit",
    blurb:
      "Zjistíte přesně, proč vás AI necituje a co s tím — konkrétní prioritizovaný plán, ne obecné rady.",
    href: "/audit/",
    featured: true,
    tag: "Vstupní produkt",
  },
  {
    slug: "dlouhodobe-seo",
    title: "Dlouhodobé SEO",
    blurb:
      "SEO je základ pro vše — bez dobrých pozic a indexace vás AI ani nenajde, natož aby vás citovala.",
    href: "/sluzby/dlouhodobe-seo/",
    valueProp:
      "SEO je základ pro všechny ostatní disciplíny — bez dobrých pozic a indexace vás AI ani nenajde, natož aby vás citovala.",
    contains: [
      "Keyword strategie",
      "On-page optimalizace",
      "Technické SEO",
      "Budování autority a link building",
      "Průběžný reporting",
    ],
    forWhom: "Weby, které potřebují vybudovat organickou viditelnost jako foundaci pro GEO.",
    model: "Dlouhodobá měsíční spolupráce. Typicky navazuje na Audit, který odhalí SEO mezery.",
  },
  {
    slug: "geo-obsah",
    title: "GEO obsahové služby",
    blurb:
      "Doplníme na web vše, co AI potřebuje k citaci: answer blocky, FAQ, fact-density a schema.",
    href: "/sluzby/geo-obsah/",
    valueProp:
      "Doplníme na web vše, co AI potřebuje k citaci — obsah napsaný tak, aby ho generativní enginy použily jako zdroj.",
    contains: [
      "Answer blocky (40–60 slov)",
      "FAQ sekce + FAQPage schema",
      "Citovatelné formulace a fact-density",
      "Doplnění chybějícího obsahu a definic",
      "Strukturování stránek",
    ],
    forWhom: "Weby s tenkým nebo marketingovým obsahem, který AI přeskakuje.",
    model: "Jednorázové balíčky (X stránek) nebo průběžná spolupráce.",
  },
  {
    slug: "technicka-uprava",
    title: "Technická úprava webů a e-shopů",
    blurb:
      "Strukturovaná data, llms.txt, povolení AI crawlerů, Core Web Vitals — web čitelný pro AI i vyhledávače.",
    href: "/sluzby/technicka-uprava/",
    valueProp:
      "Technická implementace, díky které je web strojově čitelný pro AI i vyhledávače.",
    contains: [
      "Strukturovaná data (Product / FAQ / Article / HowTo schema)",
      "robots.txt + llms.txt + povolení AI crawlerů",
      "Core Web Vitals",
      "Indexační hygiena",
      "Sitemap a IndexNow",
    ],
    forWhom: "E-shopy (Shoptet, Upgates, vlastní) a weby s technickým dluhem.",
    model:
      "Jednorázová implementace, případně s návaznou správou. Navazuje na e-commerce specializaci Sniper Design.",
  },
  {
    slug: "sprava-geo",
    title: "Dlouhodobá správa GEO",
    blurb:
      "Držíme vaši AI viditelnost v čase: monitoring citací, freshness, reporting a iterace dle dat.",
    href: "/sluzby/sprava-geo/",
    valueProp: "GEO se rychle mění — držíme vaši AI viditelnost v čase, měříme a iterujeme.",
    contains: [
      "Měsíční monitoring citací (citation share vs konkurence)",
      "Sledování platforem (ChatGPT / Perplexity / Google AI)",
      "Průběžná aktualizace obsahu (freshness)",
      "Reporting",
      "Iterace dle dat",
    ],
    forWhom: "Brandy, které chtějí dlouhodobě růst v AI odpovědích, ne jednorázový zásah.",
    model: "Měsíční retainer.",
  },
];
