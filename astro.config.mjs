// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import indexnow from "astro-indexnow";
import tailwindcss from "@tailwindcss/vite";
import { visit } from "unist-util-visit";
import rehypeExternalLinks from "rehype-external-links";

/**
 * Rehype plugin: GFM task-list checkboxy mají v markdown renderu Astro
 * podobu <input type="checkbox" disabled>. Lighthouse je flaguje v `label`
 * audit jako missing label. Visuálně label tvoří text položky v <li>,
 * sémanticky jde jen o dekoraci (read-only marker), takže přidáme
 * aria-hidden + role="presentation".
 */
function rehypeTaskListA11y() {
  return (/** @type {any} */ tree) => {
    visit(tree, "element", (/** @type {any} */ node) => {
      if (
        node.tagName === "input" &&
        node.properties?.type === "checkbox" &&
        node.properties?.disabled
      ) {
        node.properties["aria-hidden"] = "true";
        node.properties.role = "presentation";
        node.properties.tabIndex = -1;
      }
    });
  };
}

/**
 * PER-FORK: kanonická doména webu. Mutace (EN/DE/PL fork) změní JEN tuto
 * konstantu — propisuje se do `site:` (canonical/OG/sitemap přes Astro.site)
 * i do detekce interních odkazů v rehypeExternalLinks níže. Žádná jiná doména
 * se v configu natvrdo nevyskytuje.
 */
const SITE = "https://geo-seo.cz";
const SITE_HOST = new URL(SITE).host;

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  // Redirects — zatím žádné. geo-seo si je nadefinuje, až vzniknou alias URL.
  redirects: {},
  markdown: {
    rehypePlugins: [
      rehypeTaskListA11y,
      /**
       * Externí odkazy → otvírat v novém tabu + bezpečnost (noopener proti
       * tabnabbing). `noreferrer` přidán jako vedlejší ochrana soukromí
       * (ne všechny prohlížeče dnes implicitně referrer skryjí).
       *
       * Vědomě NEPOUŽÍVÁME `rel="nofollow"` — naše externí odkazy
       * jsou citace autorit (arxiv, Google docs, Search Engine Land,
       * vlastní brand sniperdesign.cz / megadetail.cz). Plošný `nofollow`
       * by snižoval E-E-A-T signály webu (Google očekává, že solidní
       * autor cituje zdroje s dofollow odkazy).
       *
       * Pravidlo `target` filtru — externí = vše, co nezačíná
       * relativně (/), neřízeným anchor (#), mailto:, tel: a NENÍ
       * naše vlastní doména aiseo-optimalizace.cz.
       */
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
          protocols: ["http", "https"],
          test: (/** @type {any} */ node) => {
            const href = node.properties?.href;
            if (typeof href !== "string") return false;
            // Skip vlastní doména — interní linky se nemají otvírat v novém tabu
            return !href.includes(SITE_HOST);
          },
        },
      ],
    ],
    /**
     * Shiki theme: výchozí Astro `github-dark` má světlé syntax barvy
     * (#79B8FF, #9ECBFF, #E1E4E8) na našem světlém pozadí
     * → kontrast pod 2:1, fail WCAG AA. `github-light` má tmavé tokeny
     * proti světlému bg, kontrast OK.
     */
    shikiConfig: {
      theme: "github-light",
    },
  },
  integrations: [
    mdx(),
    sitemap({
      // Vyloučit ze sitemap:
      // - /seo-a-geo — není kanonická URL (redirect na pillar)
      // - /*/dekujeme/ — thank-you stránky mají noindex
      // - /geo-v2 — design preview / work-in-progress, ne pro Google
      filter: (page) =>
        !page.includes("/seo-a-geo") &&
        !page.includes("/dekujeme") &&
        !page.includes("/geo-v2"),
      // Build-time datum jako lastmod pro všechny stránky.
      // Google `lastmod` používá, pokud je konzistentně přesné — přesně to děláme.
      lastmod: new Date(),
    }),
    // IndexNow — push změněných URL při buildu na Bing, Yandex, Seznam, Naver, Yep.
    // Key je VEŘEJNÝ (k ověření vlastnictví je v `public/<key>.txt`), takže fallback
    // přímo v configu není leak. Env var dovoluje rotaci klíče bez code change.
    // Cache `.astro-indexnow-cache.json` MUSÍ být commitnutá (CI build = ephemeral,
    // bez cache by se každý build chápal jako první a re-submitoval všechny URL).
    indexnow({
      key:
        process.env.INDEXNOW_KEY || "929226a175c657aac3ba73a765ee364d",
    }),
  ],
  vite: {
    // Cast: @tailwindcss/vite a astro/vite mohou mít odlišný Plugin<any> typ
    // (různé verze vite v node_modules). Funkčně to ale sedí, jen TS to neví.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
