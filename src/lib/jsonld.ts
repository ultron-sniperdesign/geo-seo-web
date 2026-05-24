/**
 * Sdílené JSON-LD buildery — jeden zdroj pravdy pro strukturovaná data.
 *
 * Cíl: FAQ (a další struktury) definovat v datovém modulu jen jednou
 * a generovat z nich jak HTML, tak JSON-LD. Dnes byly FAQ na některých
 * stránkách duplicitní (zvlášť v JSON-LD, zvlášť v HTML).
 */

/** FAQ položka — otázka + odpověď (zdroj pro FAQPage JSON-LD i HTML). */
export interface FaqItem {
  q: string;
  a: string;
}

/** Postaví schema.org FAQPage z pole FAQ položek. */
export function buildFaqJsonLd(faq: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
