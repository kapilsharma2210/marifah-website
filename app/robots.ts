import type { MetadataRoute } from "next";

// Served at https://www.marifahtax.com/robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Form and payment endpoints have nothing for search engines.
      // (/cart and /checkout stay crawlable so Google can read their "noindex" tag.)
      disallow: ["/api/"],
    },
    sitemap: "https://www.marifahtax.com/sitemap.xml",
    host: "https://www.marifahtax.com",
  };
}
