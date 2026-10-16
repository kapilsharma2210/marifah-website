import type { Metadata } from "next";
import { SiteApp } from "@/components/site-app";
import { sitePages } from "@/lib/site-pages";

export const metadata: Metadata = {
  title: sitePages.about.title,
  description: sitePages.about.description,
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: sitePages.about.title, description: sitePages.about.description },
};

export default function Page() {
  return <SiteApp initialPage="about" />;
}
