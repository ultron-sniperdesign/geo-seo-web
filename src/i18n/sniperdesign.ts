/**
 * Slovník UI stringů pro Sniper Design agency promo bloky (Big + Small).
 *
 * Součást i18n vrstvy — fork přeloží celou složku src/i18n/. Big a Small sdílí
 * titulek, trust signály, CTA labely a brand; liší se lead a rozsah obsahu.
 *
 * POZN.: agency URL (sniperdesign.cz, megadetail.cz) jsou identita agentury,
 * sdílené napříč mutacemi; inline odkazy v `lead` nesou href přímo v HTML.
 */

export const sniperDesign = {
  brandAria: "Sniper Design — domovská stránka agentury",
  brandAlt: "Sniper Design",
  eyebrowDefault: "Pomoc s implementací",
  /** Sdílený titulek (Big i Small). */
  title: "Nechcete to řešit interně? <strong>Postavíme to za vás.</strong>",
  hrefHome: "https://www.sniperdesign.cz/",
  hrefSeo: "https://www.sniperdesign.cz/seo-pro-ai",
  hrefConsult: "https://www.sniperdesign.cz/konzultace",
  ctaOpen: "Otevřít Sniper Design",
  ctaConsult: "Nezávazná konzultace",

  big: {
    lead: 'Tento průvodce vám dá přehled. Co s ním reálně udělá web nebo e‑shop, je druhá věc — a obvykle to chce někoho, kdo už tím prošel. V <a href="https://www.sniperdesign.cz/" target="_blank" rel="noopener">Sniper Design</a> děláme <strong>kompletní AI&nbsp;SEO</strong>: od strategie přes audit a implementaci až po finální obsah. Zlatý Upgates partner od&nbsp;2016, přes 600 e‑shopů na CZ trhu, vlastní e‑shop <a href="https://www.megadetail.cz/" target="_blank" rel="noopener">MEGA&nbsp;DETAIL</a>.',
    trust: [
      "<strong>Zlatý Upgates partner</strong> od 2016",
      "<strong>600+</strong> e‑shopů",
      "Vlastní e‑shop <strong>MEGA&nbsp;DETAIL</strong>",
    ],
    pkg: "<strong>Vše dodáváme jako jeden balík.</strong> Strategie, znalost, audity, optimalizace i obsah — pod jednou střechou, s jednou kontaktní osobou, s jedním cílem.",
    benefits: [
      {
        num: "01",
        title: "Strategie a&nbsp;know‑how",
        desc: "Projdeme s vámi web, vysvětlíme co se děje s AI vyhledáváním a poradíme, kterým směrem se vydat — co řešit hned, co odložit a kam vůbec necílit.",
      },
      {
        num: "02",
        title: "Audit AI&nbsp;viditelnosti",
        desc: "Komplexní průchod technickým SEO, on‑page strukturou, schema markupem a obsahem. Konkrétní seznam priorit s odhadem dopadu a effort.",
      },
      {
        num: "03",
        title: "Optimalizace a&nbsp;implementace",
        desc: "Nasadíme strukturovaná data, přepíšeme klíčové stránky do AI‑friendly struktury, zoptimalizujeme rychlost a Core Web Vitals. Custom moduly pro Upgates a Shoptet.",
      },
      {
        num: "04",
        title: "Tvorba a&nbsp;aktualizace obsahu",
        desc: "AI‑řízené generování produktových popisů, FAQ a článků v tonalitě vašeho brandu. Vstup do citation poolu ChatGPT, Perplexity a Google AI Overview.",
      },
    ],
    scopeEyebrow: "Konkrétní záběr",
    scopeTitle:
      "Co konkrétně upravíme na vašem <strong>webu nebo e‑shopu</strong>",
    scope: [
      "Struktura kategorií a služeb",
      "Answer bloky pod nadpisy",
      "FAQ sekce s reálnými dotazy",
      "Schema — Product, Article, Organization",
      "Interní prolinkování",
      "Technické SEO (Core Web Vitals, indexace, mobile)",
      "<code>robots.txt</code> pro AI crawlery",
      "Obsahové mezery proti konkurenci",
      "Měření AI citací a brand zmínek",
    ],
  },

  small: {
    lead: 'V <a href="https://www.sniperdesign.cz/" target="_blank" rel="noopener">Sniper Design</a> děláme <strong>kompletní AI&nbsp;SEO</strong> — strategii, audit, implementaci i obsah. Zlatý Upgates partner od&nbsp;2016, přes 600 e‑shopů na CZ trhu. <strong>AI vyhledávání implementujeme</strong> do návrhů homepage, obsahové struktury i auditů klientských webů.',
    trust: [
      "<strong>Zlatý Upgates partner</strong>",
      "<strong>600+</strong> e‑shopů",
      "Vlastní e‑shop <strong>MEGA&nbsp;DETAIL</strong>",
    ],
  },
};
