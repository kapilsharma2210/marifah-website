"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CheckCircle, ChevronDown, ChevronRight, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { BlogCard } from "./blog-index";
import type { BlogPost, BlogSection } from "./types";

const sectionId = (i: number) => `section-${i + 1}`;

/** A single blog article: header, readable body, "On this page" menu, help box and related articles. */
export function BlogArticle({
  blog,
  allBlogs,
  onAllArticles,
  onBlog,
  onConsultancy,
  whatsapp,
}: {
  blog: BlogPost;
  allBlogs: BlogPost[];
  onAllArticles: () => void;
  onBlog: (b: BlogPost) => void;
  onConsultancy: () => void;
  whatsapp: string;
}) {
  const sections = blog.sections ?? [];
  const toc = sections
    .map((s, i) => ({ id: sectionId(i), heading: s.heading, type: s.type }))
    .filter((s) => s.heading && s.type !== "cta" && s.type !== "alert");
  const [active, setActive] = useState(toc[0]?.id);

  // Highlight the section currently on screen in the "On this page" menu.
  useEffect(() => {
    const els = toc.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -65% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog.title]);

  const related = useMemo(() => {
    const others = allBlogs.filter((b) => b.title !== blog.title);
    const same = others.filter((b) => b.category === blog.category);
    return [...same, ...others.filter((b) => b.category !== blog.category)].slice(0, 3);
  }, [allBlogs, blog]);

  const allArticlesLink = {
    href: "/blog",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      onAllArticles();
    },
  };
  const isCorporateTax = (blog.category || "").toLowerCase().includes("corporate");

  const tocList = (
    <ul className="space-y-1">
      {toc.map((t) => (
        <li key={t.id}>
          <a
            href={`#${t.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(t.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              setActive(t.id);
            }}
            className={`block border-l-2 pl-3 py-1.5 text-sm leading-snug transition-colors ${
              active === t.id ? "border-primary text-primary font-medium" : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.heading}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Header */}
      <header className="bg-card border-b border-border px-4 sm:px-6 pt-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <a {...allArticlesLink} className="hover:text-primary transition-colors">Insights</a>
            {blog.category && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-foreground">{blog.category}</span>
              </>
            )}
          </nav>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {blog.category && (
                <span className="text-[11px] font-bold tracking-widest uppercase text-gold bg-gold/10 border border-gold/25 px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              )}
              {blog.readTime && (
                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {blog.readTime}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">{blog.title}</h1>
            {blog.excerpt && <p className="text-lg text-muted-foreground leading-relaxed">{blog.excerpt}</p>}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">M</div>
              <p className="text-sm">
                <span className="block font-semibold text-foreground">Marifah Tax Advisory</span>
                <span className="text-muted-foreground">UAE Tax Insights</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_300px] gap-12 items-start">
          <article className="min-w-0 max-w-3xl">
            {toc.length > 2 && (
              <details className="lg:hidden mb-10 rounded-2xl border border-border bg-card group">
                <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4 text-sm font-semibold text-foreground">
                  On this page
                  <ChevronDown className="w-4 h-4 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-4">{tocList}</div>
              </details>
            )}
            <div className="space-y-12">
              {sections.map((s, i) => (
                <Section key={i} id={sectionId(i)} section={s} onConsultancy={onConsultancy} whatsapp={whatsapp} />
              ))}
            </div>
          </article>

          <aside className="hidden lg:block sticky top-28 space-y-6">
            {toc.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">On this page</p>
                {tocList}
              </div>
            )}
            <div className="dark rounded-2xl bg-background border border-primary/20 p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Need expert help?</p>
              <p className="text-foreground font-semibold mb-2">Talk to a UAE tax advisor</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">Book a free 30-minute consultation — no obligation.</p>
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={onConsultancy}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Free Consultation
                </button>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            {isCorporateTax && (
              <div className="rounded-2xl border-2 border-primary bg-card p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Register online</p>
                <p className="text-foreground font-semibold mb-1">Corporate Tax Registration</p>
                <p className="text-sm text-muted-foreground mb-4">AED 499 · pay by card in minutes</p>
                <AddToCartButton buyNow label="Register Now" className="w-full" />
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-card border-t border-border px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Keep reading</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Related Articles</h2>
              </div>
              <a {...allArticlesLink} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                View all articles <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((b) => (
                <BlogCard key={b.title} blog={b} onBlog={onBlog} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Section({
  id,
  section: s,
  onConsultancy,
  whatsapp,
}: {
  id: string;
  section: BlogSection;
  onConsultancy: () => void;
  whatsapp: string;
}) {
  const heading = s.heading ? (
    <h2 className="text-2xl font-bold text-foreground leading-snug mb-5">{s.heading}</h2>
  ) : null;

  if (s.type === "text") {
    return (
      <section id={id} className="scroll-mt-28">
        {heading}
        <p className="text-base md:text-[17px] leading-8 text-foreground/80 whitespace-pre-line">{s.body}</p>
      </section>
    );
  }

  if (s.type === "checklist") {
    return (
      <section id={id} className="scroll-mt-28">
        {heading}
        <ul className="grid sm:grid-cols-2 gap-3">
          {(s.items as string[] | undefined)?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm leading-relaxed text-foreground">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (s.type === "numbered") {
    return (
      <section id={id} className="scroll-mt-28">
        {heading}
        <ol className="rounded-2xl border border-border bg-card divide-y divide-border">
          {(s.items as { title: string; body: string }[] | undefined)?.map((item, j) => (
            <li key={j} className="flex gap-4 p-5 sm:p-6">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">
                {String(j + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (s.type === "alert") {
    return (
      <aside id={id} className="scroll-mt-28 rounded-2xl border border-gold/30 border-l-4 border-l-gold bg-gold/5 p-6 flex gap-4">
        <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-foreground mb-1.5">{s.heading}</h3>
          <p className="text-sm leading-relaxed text-foreground/80">{s.body}</p>
        </div>
      </aside>
    );
  }

  if (s.type === "cta") {
    return (
      <section id={id} className="dark scroll-mt-28 rounded-2xl bg-background border border-primary/20 p-7 sm:p-8">
        <h3 className="text-xl font-bold text-foreground mb-2">{s.heading}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground mb-6 max-w-xl">{s.body}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onConsultancy}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Free Consultation
          </button>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return null;
}
