"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Calculator, Clock, FileText, Receipt } from "lucide-react";
import { blogSlug } from "@/lib/blog-data";
import type { BlogPost } from "./types";

// Same photos the homepage "Latest Insights" section uses, so the featured article matches.
export const BLOG_IMAGES = [
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1400&q=90",
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1400&q=90",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=90",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=90",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=90",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1400&q=90",
];

export function categoryIcon(category?: string) {
  const c = (category || "").toLowerCase();
  if (c.includes("vat")) return Calculator;
  if (c.includes("invoic")) return Receipt;
  if (c.includes("corporate")) return FileText;
  return BookOpen;
}

const linkProps = (b: BlogPost, onBlog: (b: BlogPost) => void) => ({
  href: `/blog/${blogSlug(b)}`,
  onClick: (e: React.MouseEvent) => {
    e.preventDefault();
    onBlog(b);
  },
});

/** Article card used on the blog page and in "Related articles". */
export function BlogCard({ blog, onBlog }: { blog: BlogPost; onBlog: (b: BlogPost) => void }) {
  const Icon = categoryIcon(blog.category);
  return (
    <a
      {...linkProps(blog, onBlog)}
      className="group flex flex-col h-full rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="min-w-0">
          {blog.category && <p className="text-[11px] font-bold tracking-widest uppercase text-gold">{blog.category}</p>}
          {blog.readTime && (
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" /> {blog.readTime}
            </p>
          )}
        </div>
      </div>
      <h3 className="text-lg font-bold leading-snug text-foreground mb-3 line-clamp-3 group-hover:text-primary transition-colors">
        {blog.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">{blog.excerpt}</p>
      <span className="mt-auto pt-4 border-t border-border text-sm font-semibold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
        Read article <ArrowRight className="w-4 h-4" />
      </span>
    </a>
  );
}

/** The /blog page: featured latest article, topic filter, and an even grid of articles. */
export function BlogIndex({ blogs, onBlog }: { blogs: BlogPost[]; onBlog: (b: BlogPost) => void }) {
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    blogs.forEach((b) => b.category && counts.set(b.category, (counts.get(b.category) || 0) + 1));
    return [{ name: "All", count: blogs.length }, ...[...counts].map(([name, count]) => ({ name, count }))];
  }, [blogs]);

  const list = category === "All" ? blogs : blogs.filter((b) => b.category === category);
  const featured = category === "All" ? list[0] : null;
  const rest = featured ? list.slice(1) : list;

  return (
    <div className="space-y-10">
      {/* Topic filter */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles by topic">
        {categories.map((c) => {
          const active = c.name === category;
          return (
            <button
              key={c.name}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(c.name)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-primary/40"
              }`}
            >
              {c.name}
              <span className={`text-xs tabular-nums ${active ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{c.count}</span>
            </button>
          );
        })}
      </div>

      {/* Featured */}
      {featured && (
        <a
          {...linkProps(featured, onBlog)}
          className="group grid md:grid-cols-2 rounded-3xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative min-h-56 md:min-h-80 overflow-hidden bg-muted">
            <img
              src={BLOG_IMAGES[0]}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-7 sm:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[11px] font-bold tracking-widest uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded-full">Latest</span>
              {featured.category && <span className="text-[11px] font-bold tracking-widest uppercase text-gold">{featured.category}</span>}
              {featured.readTime && (
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-foreground mb-4 group-hover:text-primary transition-colors">
              {featured.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7">{featured.excerpt}</p>
            <span className="inline-flex items-center gap-2 self-start bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold group-hover:bg-primary/90 transition-colors">
              Read article <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </a>
      )}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((b) => (
          <BlogCard key={b.title} blog={b} onBlog={onBlog} />
        ))}
      </div>
    </div>
  );
}
