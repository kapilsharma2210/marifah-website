import type { Metadata } from "next";
import { SiteApp } from "@/components/site-app";
import { sitePages } from "@/lib/site-pages";

export const metadata: Metadata = {
  title: sitePages.contact.title,
  description: sitePages.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: sitePages.contact.title, description: sitePages.contact.description },
};

export default function Page() {
  return <SiteApp initialPage="contact" />;
}
