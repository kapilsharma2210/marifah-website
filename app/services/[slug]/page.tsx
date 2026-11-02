import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteApp } from "@/components/site-app";
import { servicePages } from "@/lib/site-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { url: `/services/${slug}`, title: page.title, description: page.description },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) notFound();
  const name = page.title.split("|")[0].trim();
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description: page.description,
      url: `https://www.marifahtax.com/services/${slug}`,
      provider: { "@id": "https://www.marifahtax.com/#organization" },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marifahtax.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.marifahtax.com/services" },
        { "@type": "ListItem", position: 3, name, item: `https://www.marifahtax.com/services/${slug}` },
      ],
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteApp initialServiceSlug={slug} />
    </>
  );
}
