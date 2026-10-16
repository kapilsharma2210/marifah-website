import type { Metadata } from "next";
import { SiteApp } from "@/components/site-app";
import { sitePages } from "@/lib/site-pages";

export const metadata: Metadata = {
  title: sitePages.services.title,
  description: sitePages.services.description,
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: sitePages.services.title, description: sitePages.services.description },
};

export default function Page() {
  return <SiteApp initialPage="services" />;
}
