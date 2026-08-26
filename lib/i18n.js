import fi from "./dictionaries/fi";
import en from "./dictionaries/en";

export const locales = ["fi", "en"];
export const defaultLocale = "fi";

const dictionaries = { fi, en };

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

// URL segment for each translated route, per locale. Every page that has a
// real English counterpart is listed here so hrefs are built explicitly
// rather than guessed (guessing previously produced 404s for pages that
// don't have a translation at all, e.g. /vappulehti).
export const routes = {
  events: { fi: "tapahtumat", en: "events" },
  news: { fi: "kuulumiset", en: "news" },
  board: { fi: "hallitus", en: "board" },
  rules: { fi: "saannot", en: "rules" },
  capRules: { fi: "lakkiohjesaanto", en: "cap-regulations" },
};

export function routePath(key, locale) {
  const prefix = locale === "en" ? "/en" : "";
  return `${prefix}/${routes[key][locale]}`;
}

export function homePath(locale) {
  return locale === "en" ? "/en" : "/";
}
