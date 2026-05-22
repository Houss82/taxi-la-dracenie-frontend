import { SITE_PHONE_DISPLAY } from "./contact";

/** Remplace d'anciens numéros en dur par la constante unique. */
const LEGACY_PHONES = ["04 94 73 00 00", "04 22 46 04 62", "0422460462"];

export function hydrateContactStrings(value) {
  if (typeof value === "string") {
    let result = value;
    for (const legacy of LEGACY_PHONES) {
      result = result.split(legacy).join(SITE_PHONE_DISPLAY);
    }
    return result;
  }
  if (Array.isArray(value)) {
    return value.map(hydrateContactStrings);
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [key, hydrateContactStrings(val)])
    );
  }
  return value;
}
