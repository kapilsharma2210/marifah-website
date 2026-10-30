"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight, Building2, ChevronRight, Lock, MessageCircle, Receipt, Rocket, ShieldCheck, TrendingUp, UserRound,
} from "lucide-react";
import { about } from "@/lib/about-data";
import { DocFaq, DocList, DocParagraphs, DocSection, DocSteps, Paper } from "./doc-blocks";
import { splitPrice, type ServiceInfo } from "./types";

const VALUE_ICONS = [ShieldCheck, Receipt, MessageCircle, Lock];
const AUDIENCE_ICONS = [Rocket, TrendingUp, Building2, UserRound];

/** The /about page: header, at-a-glance figures, structured story, sidebar and links to every service. */
export function AboutPage({
  services,
  stats,
  slugOf,
  onService,
  onAllServices,
  onConsultancy,
  whatsapp,
}: {
  services: ServiceInfo[];
  stats: { value: string; label: string }[];
  slugOf: (s: ServiceInfo) => string;
  onService: (s: ServiceInfo) => void;
  onAllServices: () => void;
  onConsultancy: () => void;
  whatsapp: string;
}) {
  const toc = [
    { id: "who-we-are", heading: "Who we are" },
    { id: "mission", heading: "Mission & values" },
    { id: "how-we-work", heading: "How we work" },
    { id: "who-we-serve", heading: "Who we work with" },
    { id: "why-us", heading: "Why businesses trust us" },
    ...(about.team.length ? [{ id: "team", heading: "Our team" }] : []),
    ...(about.faq.length ? [{ id: "faq", heading: "Common questions" }] : []),
  ];
  const [active, setActive] = useState(toc[0].id);

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
  }, []);

  const serviceLink = (s: ServiceInfo) => ({
    href: `/services/${slugOf(s)}`,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      onService(s);
    },
  });
  const allServicesLink = {
    href: "/services",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      onAllServices();
    },
  };

  return (
    <>
      {/* Header */}
      <header className="relative border-b border-border">
        <div className="relative h-56 md:h-72 w-full overflow-hidden">
          <img src={about.heroImage.src} alt={about.heroImage.alt} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
        </div>
        <div className="relative px-4 sm:px-6 pb-12 -mt-16 md:-mt-20">
          <div className="max-w-6xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground mb-6">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground">About Us</span>
            </nav>
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-gold bg-gold/10 border border-gold/25 px-3 py-1 rounded-full mb-3">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-1.5">{about.title}</h1>
            <p className="text-sm text-muted-foreground tracking-wide">{about.tagline}</p>
            <p className="mt-6 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">{about.intro}</p>

            {stats.length > 0 && (
              <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-border bg-card shadow-sm overflow-hidden divide-x divide-y md:divide-y-0 divide-border">
                {stats.map((s) => (
                  <div key={s.label} className="px-5 py-5 text-center">
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-2xl md:text-3xl font-bold text-primary">{s.value}</dd>
                    <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_340px] gap-10 lg:gap-12 items-start">
          <div className="min-w-0 space-y-8">
            <Paper>
              <DocSection id="who-we-are" eyebrow="Who we are" heading="Tax compliance, handled properly">
                <DocParagraphs paragraphs={about.whoWeAre} />
                {about.photos.length > 0 && (
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-3 auto-rows-[130px] md:auto-rows-[160px] gap-3">
                    {about.photos.map((photo, j) => (
                      <div
                        key={photo.src}
                        className={`relative overflow-hidden rounded-xl border border-border bg-muted ${
                          j === 0 ? "col-span-2 row-span-2" : j === about.photos.length - 1 ? "col-span-2 md:col-span-1" : ""
                        }`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </DocSection>

              <DocSection id="mission" eyebrow="Mission & values" heading="What we stand for">
                <p className="border-l-4 border-gold pl-5 text-lg md:text-xl leading-relaxed text-foreground font-medium mb-8">
                  {about.mission}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {about.values.map((v, i) => {
                    const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
                    return (
                      <div key={v.title} className="rounded-xl border border-border bg-background/60 p-5">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
                        <p className="text-[15px] leading-6 text-foreground/75">{v.body}</p>
                      </div>
                    );
                  })}
                </div>
              </DocSection>

              <DocSection id="how-we-work" eyebrow="How we work" heading="From first call to filed return">
                <DocSteps steps={about.process.map((s, i) => ({ num: i + 1, title: s.title, paragraphs: [s.body] }))} />
              </DocSection>

              <DocSection id="who-we-serve" eyebrow="Who we work with" heading="Built for UAE businesses of every size">
                <div className="grid sm:grid-cols-2 gap-4">
                  {about.audiences.map((a, i) => {
                    const Icon = AUDIENCE_ICONS[i % AUDIENCE_ICONS.length];
                    return (
                      <div key={a.title} className="flex gap-4 rounded-xl border border-border p-5">
                        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{a.title}</h3>
                          <p className="text-[15px] leading-6 text-foreground/75">{a.body}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </DocSection>

              <DocSection id="why-us" eyebrow="Why Marifah" heading="Why businesses trust us">
                <DocList items={about.trust} columns={2} />
              </DocSection>

              {about.team.length > 0 && (
                <DocSection id="team" eyebrow="Our team" heading="The people behind your filings">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {about.team.map((m) => (
                      <div key={m.name} className="rounded-xl border border-border p-5">
                        <div className="flex items-center gap-4 mb-3">
                          {m.photo ? (
                            <img src={m.photo} alt={m.name} className="w-16 h-16 rounded-full object-cover border border-border" />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                              {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold text-foreground">{m.name}</h3>
                            <p className="text-sm text-muted-foreground">{m.role}</p>
                          </div>
                        </div>
                        {m.credentials && m.credentials.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {m.credentials.map((c) => (
                              <span key={c} className="text-[11px] font-semibold text-gold bg-gold/10 border border-gold/25 px-2 py-0.5 rounded-full">
                                {c}
                              </span>
                            ))}
                          </div>
                        )}
                        <p className="text-[15px] leading-6 text-foreground/75">{m.bio}</p>
                      </div>
                    ))}
                  </div>
                </DocSection>
              )}

              {about.faq.length > 0 && (
                <DocSection id="faq" eyebrow="Working with us" heading="Common questions">
                  <DocFaq items={about.faq} />
                </DocSection>
              )}
            </Paper>

            {/* Our promise */}
            <section className="dark rounded-2xl bg-background border border-primary/20 p-8 md:p-10">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Our promise</p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground mb-7">{about.promise}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={onConsultancy}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Book Free Consultation
                </button>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 space-y-6">
            <div className="hidden lg:block rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">On this page</p>
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
            </div>

            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <div className="px-6 pt-6 pb-4">
                <p className="text-xs font-bold tracking-widest uppercase text-gold mb-1">At a glance</p>
                <p className="text-sm text-muted-foreground">Marifah Tax Advisory</p>
              </div>
              <dl className="divide-y divide-border border-t border-border">
                {about.glance.map(([label, value]) => (
                  <div key={label} className="px-6 py-3.5">
                    <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
                    <dd className="text-sm font-medium text-foreground mt-0.5">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="p-6 border-t border-border flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={onConsultancy}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Book Free Consultation
                </button>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* What we do — links to every service page */}
      {services.length > 0 && (
        <section className="bg-card border-t border-border px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">What we do</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Services</h2>
              </div>
              <a {...allServicesLink} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                View all services <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => {
                const Icon = s.icon;
                const price = splitPrice(s.price);
                return (
                  <a
                    key={s.title}
                    {...serviceLink(s)}
                    className="group flex flex-col h-full rounded-2xl border border-border bg-background p-6 hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{s.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">{s.desc}</p>
                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-sm">
                        <span className="text-muted-foreground">{price.label === "Starting from" ? "From " : ""}</span>
                        <span className="font-bold text-foreground">{price.amount}</span>
                      </span>
                      <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
