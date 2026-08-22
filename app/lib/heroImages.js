/** Images hero par page — véhicules variés, images générées par service. */

const DEFAULT_HERO = "/hero-taxi-lamparo-dracenie.jpg";
export const HOME_HERO_IMAGE = "/taxi-transport-medical-dracenie-chd.jpg";

export const cityHeroImages = {
  "taxi-vidauban": "/heroes/taxi-vidauban.jpg",
  "taxi-draguignan": "/heroes/taxi-draguignan.jpg",
  "taxi-le-muy": "/heroes/taxi-le-muy.jpg",
  "taxi-les-arcs": "/heroes/taxi-les-arcs.jpg",
  "taxi-trans-en-provence": "/heroes/taxi-trans-en-provence.png",
  "taxi-lorgues": "/heroes/taxi-lorgues.jpg",
  "taxi-taradeau": "/heroes/taxi-taradeau.jpg",
  "taxi-flayosc": "/heroes/taxi-flayosc.png",
  "taxi-figanieres": "/heroes/taxi-figanieres.jpg",
};

/** Tesla · V-Class · Van · GLC · Break · Mercedes grise · V-Class CHD */
export const serviceHeroImages = {
  "taxi-conventionne-dracenie": "/heroes/taxi-conventionne-dracenie.jpg",
  "transport-medical-conventionne-dracenie":
    "/heroes/transport-medical-conventionne-dracenie.jpg",
  "taxi-aeroport-nice-dracenie": "/heroes/taxi-aeroport-nice-dracenie.jpg",
  "taxi-aeroport-marseille-dracenie":
    "/heroes/taxi-aeroport-marseille-dracenie.jpg",
  "taxi-gare-les-arcs-draguignan": "/heroes/taxi-gare-les-arcs-draguignan.jpg",
  "taxi-conventionne-draguignan": "/heroes/taxi-conventionne-draguignan.jpg",
  "taxi-conventionne-vidauban": "/heroes/taxi-conventionne-vidauban.jpg",
  "taxi-aeroport-vidauban": "/heroes/taxi-aeroport-vidauban.jpg",
  "taxi-aeroport-draguignan": "/heroes/taxi-aeroport-draguignan.jpg",
  "taxi-draguignan-gare-les-arcs":
    "/heroes/taxi-draguignan-gare-les-arcs.jpg",
  "taxi-le-muy-gare-les-arcs":
    "/heroes/taxi-le-muy-gare-les-arcs.jpg",
};

export function getCityHeroImage(slug) {
  return cityHeroImages[slug] || DEFAULT_HERO;
}

export function getServiceHeroImage(slug) {
  return serviceHeroImages[slug] || DEFAULT_HERO;
}
