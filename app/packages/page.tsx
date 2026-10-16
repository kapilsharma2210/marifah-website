import type { Metadata } from "next";
import { SiteApp } from "@/components/site-app";
import { sitePages } from "@/lib/site-pages";

export const metadata: Metadata = {
  title: sitePages.packages.title,
  description: sitePages.packages.description,
  alternates: { canonical: "/packages" },
  openGraph: { url: "/packages", title: sitePages.packages.title, description: sitePages.packages.description },
};

export default function Page() {
  return <SiteApp initialPage="packages" />;
}
