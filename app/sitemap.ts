import type { MetadataRoute } from "next";
import { blogs, blogSlug } from "@/lib/blog-data";
import { servicePages } from "@/lib/site-pages";
import { SERVICE_DETAIL_PAGES } from "@/lib/service-menu";

// Generated at build time: every page, service and blog article is listed automatically,
// so new articles added to lib/blog-data.ts appear here with no manual editing.
// Served at https://www.marifahtax.com/sitemap.xml

const BASE = "https://www.marifahtax.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/corporate-tax-consultants-uae`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/vat-consultancy-dubai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/corporate-tax-return-filing-uae`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/accounting-bookkeeping-services-dubai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tax-consultants-abu-dhabi`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tax-consultants-sharjah`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/packages`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/reviews`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/uae-tax-penalty-calculator`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/fta-contact-number-uae`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/uae-tax-updates`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const services: MetadataRoute.Sitemap = Object.keys(servicePages).map((slug) => ({
    url: `${BASE}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Individual service pages from the Services menu (e.g. /services/vat-registration)
  const serviceDetails: MetadataRoute.Sitemap = SERVICE_DETAIL_PAGES.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articles: MetadataRoute.Sitemap = blogs.map((b) => {
    const updated = (b as { updated?: string }).updated;
    return {
      url: `${BASE}/blog/${blogSlug(b)}`,
      ...(updated ? { lastModified: new Date(updated) } : {}),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...pages, ...services, ...serviceDetails, ...articles];
}
