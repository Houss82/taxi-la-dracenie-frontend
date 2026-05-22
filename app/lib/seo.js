import { SITE_PHONE_DISPLAY, SITE_PHONE_E164, SITE_EMAIL } from "./contact";
import { SITE_NAME, SITE_URL } from "./site";

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}) {
  const canonical = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export function buildTaxiServiceJsonLd({
  name,
  url,
  areaServed = [],
  description,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name,
    url,
    telephone: SITE_PHONE_E164,
    email: SITE_EMAIL,
    description,
    areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vidauban",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      postalCode: "83550",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.424,
      longitude: 6.432,
    },
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function buildLocalBusinessJsonLd({ name, url, areaServed = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    telephone: SITE_PHONE_E164,
    email: SITE_EMAIL,
    image: `${SITE_URL}/logo.svg`,
    areaServed,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dracénie",
      addressLocality: "Vidauban",
      addressRegion: "Var",
      postalCode: "83550",
      addressCountry: "FR",
    },
  };
}

export function buildFaqJsonLd(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item.a === "string" ? item.a : item.aText || item.q,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const defaultHomeKeywords = [
  "taxi Dracénie",
  "taxi Vidauban",
  "taxi Draguignan",
  "taxi Le Muy",
  "taxi Les Arcs",
  "taxi conventionné Dracénie",
  "taxi gare Les Arcs Draguignan",
  "taxi aéroport Nice Dracénie",
];

export function phoneSnippet() {
  return SITE_PHONE_DISPLAY;
}
