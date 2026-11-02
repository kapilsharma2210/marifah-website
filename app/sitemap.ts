import type { MetadataRoute } from "next";
import { blogs, blogSlug } from "@/lib/blog-data";
import { servicePages } from "@/lib/site-pages";

// Generated at build time: every page, service and blog article is listed automatically,
// so new articles added to lib/blog-data.ts appear here with no manual editing.
// Served at https://www.marifahtax.com/sitemap.xml

const BASE = "https://www.marifahtax.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/corporate-tax-consultants-uae`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/vat-consultancy-dubai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/packages`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const services: MetadataRoute.Sitemap = Object.keys(servicePages).map((slug) => ({
    url: `${BASE}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
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

  return [...pages, ...services, ...articles];
}
