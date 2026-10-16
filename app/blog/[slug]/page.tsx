import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteApp } from "@/components/site-app";
import { blogs, blogSlug, findBlog } from "@/lib/blog-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: blogSlug(b) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = findBlog(slug);
  if (!blog) return {};
  const title = `${blog.title} | Marifah Tax Advisory`;
  const description = blog.excerpt ?? undefined;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", url: `/blog/${slug}`, title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = findBlog(slug);
  if (!blog) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    url: `https://www.marifahtax.com/blog/${slug}`,
    author: { "@type": "Organization", name: "Marifah Tax Advisory" },
    publisher: { "@id": "https://www.marifahtax.com/#organization" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteApp initialBlogSlug={slug} />
    </>
  );
}
