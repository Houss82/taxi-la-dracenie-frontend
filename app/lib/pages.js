import { getCityBySlug, getAllCitySlugs } from "./cities";
import { getServiceBySlug, getAllServiceSlugs } from "./services";

export function resolvePage(slug) {
  const city = getCityBySlug(slug);
  if (city) return { type: "city", data: city };

  const service = getServiceBySlug(slug);
  if (service) return { type: "service", data: service };

  return null;
}

export function getAllPageSlugs() {
  return [...getAllCitySlugs(), ...getAllServiceSlugs()];
}
