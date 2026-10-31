/**
 * Structured data for The Massage Map.
 *
 * Rules applied here:
 *  - no aggregateRating or review markup unless real, attributable reviews exist
 *    (there are none: Google treats invented review markup as spam)
 *  - no phone number, postal address or social profile that is not real
 *  - the Organisation describes the directory, not a spa
 */

const SITE_URL = "https://www.themassagemap.com";
const BRAND = "The Massage Map";

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND,
  url: SITE_URL,
  description:
    "A Bali massage and spa directory built from each provider's own published information, with prices, hours, contact details and the date every listing was checked.",
  knowsAbout: ["Bali massage", "Bali spas", "Balinese massage"],
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND,
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@type": "Organization", name: BRAND, url: SITE_URL },
});

/** Kept for call sites that ask for a local-business schema: a directory is not one. */
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Bali massage and spa directory",
  url: `${SITE_URL}/bali`,
  isPartOf: { "@type": "WebSite", name: BRAND, url: SITE_URL },
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
  })),
});

export const getServiceSchema = (serviceName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description,
  url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
  serviceType: "Massage",
  areaServed: { "@type": "AdministrativeArea", name: "Bali, Indonesia" },
});

export const getArticleSchema = (title: string, description: string, url: string, datePublished?: string, dateModified?: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
  ...(datePublished ? { datePublished } : {}),
  ...(dateModified ? { dateModified } : {}),
  publisher: { "@type": "Organization", name: BRAND, url: SITE_URL },
});
