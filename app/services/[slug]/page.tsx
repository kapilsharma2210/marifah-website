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
  if (!servicePages[slug]) notFound();
  return <SiteApp initialServiceSlug={slug} />;
}
