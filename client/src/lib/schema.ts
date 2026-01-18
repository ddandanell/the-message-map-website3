const SITE_URL = "https://themassagemap.com";
const BUSINESS_NAME = "Massage Bali";
const BUSINESS_PHONE = "+62 123 456 7890"; // Update with actual phone
const BUSINESS_EMAIL = "info@themassagemap.com"; // Update with actual email

// Organization Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": BUSINESS_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/attached_assets/generated_images/spa-hero.png`,
  "description": "Your trusted guide to finding the best massage services across all of Bali. Verified reviews, accurate pricing, and professional therapists.",
  "sameAs": [
    "https://www.instagram.com/massagebali",
    "https://www.facebook.com/massagebali",
    "https://twitter.com/massagebali"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": BUSINESS_PHONE,
    "contactType": "customer service",
    "email": BUSINESS_EMAIL,
    "areaServed": "ID",
    "availableLanguage": ["en", "id"]
  }
});

// Local Business Schema
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": BUSINESS_NAME,
  "image": `${SITE_URL}/attached_assets/generated_images/spa-hero.png`,
  "url": SITE_URL,
  "telephone": BUSINESS_PHONE,
  "email": BUSINESS_EMAIL,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bali",
    "addressRegion": "Bali",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.3405,
    "longitude": 115.0920
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "250"
  }
});

// Breadcrumb Schema
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
  }))
});

// Service Schema
export const getServiceSchema = (serviceName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "name": `${serviceName} in Bali`,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": BUSINESS_NAME,
    "url": SITE_URL
  },
  "areaServed": {
    "@type": "Place",
    "name": "Bali, Indonesia"
  },
  "url": url.startsWith('http') ? url : `${SITE_URL}${url}`,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "150"
  }
});

// WebSite Schema with Search Action
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": BUSINESS_NAME,
  "url": SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/bali/{search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

// Article Schema for Guide Pages
export const getArticleSchema = (
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  imageUrl?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": imageUrl || `${SITE_URL}/attached_assets/generated_images/spa-hero.png`,
  "author": {
    "@type": "Organization",
    "name": BUSINESS_NAME
  },
  "publisher": {
    "@type": "Organization",
    "name": BUSINESS_NAME,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/attached_assets/generated_images/spa-hero.png`
    }
  },
  "datePublished": datePublished,
  "dateModified": dateModified,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url.startsWith('http') ? url : `${SITE_URL}${url}`
  }
});
