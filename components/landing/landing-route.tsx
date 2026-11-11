import type { Metadata } from "next";
import { LandingPage } from "./landing-page";
import type { LandingConfig } from "./types";
import { findService } from "@/lib/service-menu";

const BASE = "https://www.marifahtax.com";

/** Page metadata for a keyword landing page. */
export function landingMetadata(c: LandingConfig, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `/${c.slug}` },
    openGraph: { type: "website", url: `/${c.slug}`, title, description },
  };
}

/** Renders a landing page together with its structured data (Service, FAQ, breadcrumbs). */
export function LandingRoute({ config: c, serviceName, offers, areaServed }: {
  config: LandingConfig;
  serviceName: string;
  offers: { name: string; price: string }[];
  areaServed: { "@type": "City" | "Country"; name: string };
}) {
  const url = `${BASE}/${c.slug}`;
  const inMenu = findService(`/${c.slug}`);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      description: c.intro,
      url,
      provider: { "@id": `${BASE}/#organization` },
      areaServed,
      offers: offers.map((o) => ({ "@type": "Offer", name: o.name, price: o.price, priceCurrency: "AED" })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
        ...(inMenu
          ? [
              { "@type": "ListItem", position: 3, name: inMenu.group.heading, item: `${BASE}${inMenu.group.href}` },
              { "@type": "ListItem", position: 4, name: c.h1, item: url },
            ]
          : [{ "@type": "ListItem", position: 3, name: c.h1, item: url }]),
      ],
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPage config={c} />
    </>
  );
}
