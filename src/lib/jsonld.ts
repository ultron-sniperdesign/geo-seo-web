/**
 * Strukturovaná data (schema.org JSON-LD) — jeden zdroj pravdy.
 * BaseLayout vždy vloží Organization + WebSite; stránky přidají vlastní uzly
 * (Article / Service / FAQPage / BreadcrumbList) přes prop `jsonLd`.
 * Cross-reference přes @id (žádná duplicita Organization).
 */
import { site } from "~/i18n/site";

export const SITE_URL = "https://geo-seo.cz";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export interface FaqItem {
  q: string;
  a: string;
}
interface Crumb {
  label: string;
  href?: string;
}

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);
const stripHtml = (s: string) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

/** Organization (publisher) — agentura Sniper Design / CPU s.r.o. */
export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.org.name,
    legalName: site.org.alternateName,
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: abs("/apple-touch-icon.png") },
    email: "aiseo-optimalizace@sniperdesign.cz",
    telephone: "+420775181634",
    vatID: "CZ08125163",
    taxID: "08125163",
    foundingDate: "2019-04-29",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Akademická 663/5",
      addressLocality: "Praha 10 — Malešice",
      postalCode: "10800",
      addressCountry: "CZ",
    },
    sameAs: site.org.sameAs,
    knowsAbout: [
      "Generative Engine Optimization",
      "GEO",
      "SEO",
      "AI SEO",
      "Answer Engine Optimization",
      "Schema markup",
      "Core Web Vitals",
      "E-commerce",
    ],
  };
}

/** WebSite — celý web geo-seo.cz. */
export function webSiteJsonLd(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: site.name,
    description: site.org.description,
    inLanguage: site.inLanguage,
    publisher: { "@id": ORG_ID },
  };
}

/** BreadcrumbList — `items` BEZ „Úvod" (přidá se automaticky jako position 1). */
export function breadcrumbJsonLd(items: Crumb[]): Record<string, unknown> {
  const all: Crumb[] = [{ label: "Úvod", href: "/" }, ...items];
  return {
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: abs(c.href) } : {}),
    })),
  };
}

/** Article — edukativní stránky (Co je GEO, GEO návod, Platformy, blog). */
export function articleJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    inLanguage: site.inLanguage,
    author: { "@type": "Person", name: site.author },
    publisher: { "@id": ORG_ID },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    mainEntityOfPage: abs(opts.url),
    image: abs(opts.image ?? "/og/default.png"),
  };
}

/** Service — Audit a navazující služby. */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  url: string;
}): Record<string, unknown> {
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: "Generative Engine Optimization",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Česko" },
    url: abs(opts.url),
  };
}

/** FAQPage — odpovědi se zbaví HTML (schema chce plain text). */
export function faqJsonLd(faq: FaqItem[]): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(item.a) },
    })),
  };
}
