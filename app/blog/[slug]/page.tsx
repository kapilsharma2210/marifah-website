import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteApp } from "@/components/site-app";
import { blogs, blogSlug, findBlog } from "@/lib/blog-data";
import type { BlogPost } from "@/components/content/types";

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
  const cover = (blog as BlogPost).cover;
  const images = cover?.src ? [{ url: cover.src, alt: cover.alt || blog.title }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", url: `/blog/${slug}`, title, description, images },
    twitter: images ? { card: "summary_large_image", title, description, images: [cover!.src] } : undefined,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = findBlog(slug);
  if (!blog) notFound();
  const { cover, updated } = blog as BlogPost;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    url: `https://www.marifahtax.com/blog/${slug}`,
    ...(cover?.src ? { image: cover.src } : {}),
    ...(updated ? { dateModified: updated } : {}),
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
