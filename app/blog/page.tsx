import type { Metadata } from "next";
import { SiteApp } from "@/components/site-app";
import { sitePages } from "@/lib/site-pages";

export const metadata: Metadata = {
  title: sitePages.blog.title,
  description: sitePages.blog.description,
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title: sitePages.blog.title, description: sitePages.blog.description },
};

export default function Page() {
  return <SiteApp initialPage="blog" />;
}
