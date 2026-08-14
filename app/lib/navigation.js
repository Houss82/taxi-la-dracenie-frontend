import { cities } from "./cities";
import { services } from "./services";

/** Libellés courts pour le menu (toutes les pages services). */
const SERVICE_NAV_LABELS = {
  "taxi-conventionne-dracenie": "Conventionné Dracénie",
  "transport-medical-conventionne-dracenie": "Transport médical",
  "taxi-conventionne-draguignan": "Conventionné Draguignan",
  "taxi-conventionne-vidauban": "Conventionné Vidauban",
  "taxi-aeroport-nice-dracenie": "Nice Côte d'Azur",
  "taxi-aeroport-marseille-dracenie": "Marseille Provence",
  "taxi-aeroport-vidauban": "Nice depuis Vidauban",
  "taxi-aeroport-draguignan": "Nice depuis Draguignan",
  "taxi-gare-les-arcs-draguignan": "Gare Les Arcs",
  "taxi-draguignan-gare-les-arcs": "Draguignan ↔ gare",
};

const CITY_GROUPS = [
  {
    title: "Principales",
    slugs: [
      "taxi-vidauban",
      "taxi-draguignan",
      "taxi-les-arcs",
      "taxi-le-muy",
      "taxi-lorgues",
    ],
  },
  {
    title: "Autres communes",
    slugs: [
      "taxi-trans-en-provence",
      "taxi-taradeau",
      "taxi-flayosc",
      "taxi-figanieres",
    ],
  },
];

const SERVICE_GROUPS = [
  {
    title: "Transport médical",
    slugs: [
      "taxi-conventionne-dracenie",
      "transport-medical-conventionne-dracenie",
      "taxi-conventionne-draguignan",
      "taxi-conventionne-vidauban",
    ],
  },
  {
    title: "Aéroports",
    slugs: [
      "taxi-aeroport-nice-dracenie",
      "taxi-aeroport-marseille-dracenie",
      "taxi-aeroport-vidauban",
      "taxi-aeroport-draguignan",
    ],
  },
  {
    title: "Gare & transferts",
    slugs: [
      "taxi-gare-les-arcs-draguignan",
      "taxi-draguignan-gare-les-arcs",
    ],
  },
];

function slugToCityItem(slug) {
  const city = cities[slug];
  if (!city) return null;
  return { label: `Taxi ${city.name}`, href: `/${slug}` };
}

function slugToServiceItem(slug) {
  if (!services[slug]) return null;
  return {
    label: SERVICE_NAV_LABELS[slug] || services[slug].h1,
    href: `/${slug}`,
  };
}

function buildSubGroups(groups, mapItem) {
  return groups
    .map((group) => ({
      title: group.title,
      items: group.slugs.map(mapItem).filter(Boolean),
    }))
    .filter((group) => group.items.length > 0);
}

function flattenSubGroups(subGroups) {
  return subGroups?.flatMap((group) => group.items) ?? [];
}

function withSubmenu(label, href, groups, mapItem, menuWidth) {
  const subGroups = buildSubGroups(groups, mapItem);
  return {
    label,
    href,
    menuWidth,
    subGroups,
    subItems: flattenSubGroups(subGroups),
  };
}

/** Liens navbar — toutes les pages villes & services, organisés par thème. */
export function getNavItems() {
  return [
    withSubmenu("Villes", "/taxi-vidauban", CITY_GROUPS, slugToCityItem, "w-56"),
    withSubmenu(
      "Services",
      "/taxi-conventionne-dracenie",
      SERVICE_GROUPS,
      slugToServiceItem,
      "w-64"
    ),
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Réservation", href: "/reservation" },
  ];
}

/** Liste à plat (footer, plan du site, etc.). */
export function getAllCityNavLinks() {
  return CITY_GROUPS.flatMap((g) => g.slugs).map(slugToCityItem).filter(Boolean);
}

export function getAllServiceNavLinks() {
  return SERVICE_GROUPS.flatMap((g) => g.slugs).map(slugToServiceItem).filter(Boolean);
}
