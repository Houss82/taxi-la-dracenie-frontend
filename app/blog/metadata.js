import { SITE_URL } from "@/app/lib/site";

export const metadata = {
  title:
    "Blog Taxis La Dracénie | Conseils & Actualités Transport | Dracénie",
  description:
    "Conseils taxi en Dracénie : CHD Draguignan, gare Les Arcs, aéroport Nice, taxi conventionné CPAM. Guides pratiques et actualités transport Var.",
  keywords: [
    "blog taxi Dracénie",
    "conseils transport Vidauban",
    "taxi conventionné Draguignan",
    "taxi gare Les Arcs",
    "transfert aéroport Nice Dracénie",
    "transport médical CHD",
  ],
  openGraph: {
    title: "Blog Taxis La Dracénie | Conseils & Actualités",
    description:
      "Guides pratiques taxi Dracénie : CHD, gare TGV, aéroports Nice et Marseille, transport médical CPAM.",
    url: `${SITE_URL}/blog`,
    type: "website",
    siteName: "Taxis La Dracénie",
    images: [
      {
        url: `${SITE_URL}/hero-taxi-lamparo-dracenie.jpg`,
        width: 1200,
        height: 630,
        alt: "Blog Taxis La Dracénie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Taxis La Dracénie | Conseils & Actualités",
    description:
      "Guides pratiques taxi en Dracénie — CHD, gare, aéroport, CPAM.",
    images: [`${SITE_URL}/hero-taxi-lamparo-dracenie.jpg`],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
    languages: {
      "fr-FR": `${SITE_URL}/blog`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
