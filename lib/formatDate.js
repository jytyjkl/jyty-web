export function formatDate(dateStr, locale) {
  return new Date(dateStr).toLocaleDateString(locale === "en" ? "en-GB" : "fi-FI");
}
