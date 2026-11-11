"use client";

import { useState } from "react";
import {
  MessageCircle, CheckCircle, FileText, Calculator, BookOpen, Building2, MapPin, ChevronDown, ArrowRight,
} from "lucide-react";
import { ConsultancyForm } from "@/components/consultancy-form";
import { AddToCartButton, BuyRegistrationCard } from "@/components/cart/add-to-cart-button";
import { SiteShell } from "@/components/site-app";
import { findService, relatedServices } from "@/lib/service-menu";
import { LANDING_LINKS, type LandingConfig, type LandingIcon } from "./types";

const WHATSAPP = "971505815245";

const ICONS: Record<LandingIcon, typeof FileText> = {
  file: FileText,
  calculator: Calculator,
  book: BookOpen,
  building: Building2,
  map: MapPin,
};

const sectionHeading = "text-xs font-bold tracking-widest uppercase text-gold mb-5";

export function LandingPage({ config: c }: { config: LandingConfig }) {
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const Icon = ICONS[c.icon];
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(c.whatsappText)}`;
  const inMenu = findService(`/${c.slug}`);
  const related = relatedServices(`/${c.slug}`) ?? LANDING_LINKS.filter((l) => l.href !== `/${c.slug}`);

  const ctaButtons = (full = false) => (
    <div className={`flex flex-col sm:flex-row gap-3 ${full ? "w-full sm:w-auto" : ""}`}>
      <button onClick={() => setConsultancyOpen(true)}
        className={`inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity ${full ? "w-full sm:w-auto" : ""}`}>
        Book Free Consultation
      </button>
      <a href={wa} target="_blank" rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors ${full ? "w-full sm:w-auto" : ""}`}>
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
    </div>
  );

  return (
    <SiteShell>

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-primary/10">
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img src={c.hero.src} alt={c.hero.alt} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/90" />
        </div>
        <div className="max-w-4xl mx-auto relative px-4 sm:px-6 pb-10">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-1.5">/</span>
            <a href="/services" className="hover:text-primary">Services</a>
            <span className="mx-1.5">/</span>
            {inMenu ? (
              <>
                <a href={inMenu.group.href} className="hover:text-primary">{inMenu.group.heading}</a>
                <span className="mx-1.5">/</span>
                <span className="text-foreground">{inMenu.item.label}</span>
              </>
            ) : (
              <span className="text-foreground">{c.eyebrow}</span>
            )}
          </nav>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
                {c.eyebrow}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight">{c.h1}</h1>
              <p className="text-muted-foreground text-sm tracking-wide">{c.subtitle}</p>
            </div>
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed text-sm sm:text-base border-l-2 border-primary/40 pl-4">{c.intro}</p>
          <div className="mt-6">{ctaButtons()}</div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-14">
        {/* WHAT'S INCLUDED */}
        <section>
          <h2 className={sectionHeading}>What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {c.included.map((pt) => (
              <div key={pt} className="flex items-start gap-3 bg-card border border-primary/10 rounded-xl px-4 py-3 hover:border-primary/30 transition-colors">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{pt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* HOW WE HELP */}
        <section>
          <h2 className={sectionHeading}>{c.helpTitle}</h2>
          <div className="space-y-4">
            {c.help.map((sec, i) => (
              <div key={sec.title} className="bg-card border border-primary/10 rounded-2xl p-6 hover:border-primary/25 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{sec.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed sm:pl-10">{sec.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KEY FACTS TABLE */}
        {c.table && (
          <section>
            <h2 className={sectionHeading}>{c.table.title}</h2>
            <div className="rounded-2xl border border-primary/20 overflow-hidden">
              <div className="grid grid-cols-2 gap-4 bg-primary/10 px-4 sm:px-6 py-3 border-b border-primary/20">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{c.table.columns[0]}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary text-right">{c.table.columns[1]}</span>
              </div>
              {c.table.rows.map(([a, b]) => (
                <div key={a} className="grid grid-cols-2 gap-4 px-4 sm:px-6 py-3 border-b border-primary/10 last:border-0 bg-card">
                  <span className="text-sm text-muted-foreground">{a}</span>
                  <span className="text-sm font-semibold text-foreground text-right">{b}</span>
                </div>
              ))}
            </div>
            {c.table.note && <p className="text-xs text-muted-foreground mt-3 pl-1">{c.table.note}</p>}
          </section>
        )}

        {/* PRICING */}
        <section>
          <h2 className={sectionHeading}>Transparent Pricing</h2>
          <div className="rounded-2xl border border-primary/20 overflow-hidden">
            {c.pricing.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-primary/10 last:border-0 bg-card">
                <span className="text-sm text-muted-foreground min-w-0">{row.label}</span>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-sm font-bold text-foreground">{row.price}</span>
                  {row.buyOnline && <AddToCartButton size="sm" />}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 pl-1">{c.pricingNote ?? "* No hidden charges. What you see is what you pay."}</p>
        </section>

        {c.showBuyRegistration && (
          <section aria-label="Buy Corporate Tax Registration online">
            <BuyRegistrationCard />
          </section>
        )}

        {/* FAQ — answers stay in the page HTML (collapsed with <details>) so search engines can read them */}
        <section>
          <h2 className={sectionHeading}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {c.faqs.map((faq) => (
              <details key={faq.q} className="group bg-card border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/25 transition-colors">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-sm font-semibold text-foreground pr-4">{faq.q}</h3>
                  <ChevronDown className="w-4 h-4 text-primary shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col items-start gap-5">
          <div>
            <h2 className="text-lg font-bold text-foreground mb-1">{c.cta.title}</h2>
            <p className="text-sm text-muted-foreground">{c.cta.body}</p>
          </div>
          {ctaButtons(true)}
        </section>

        {/* RELATED */}
        <section>
          <h2 className={sectionHeading}>Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((l) => (
              <a key={l.href} href={l.href} className="group flex items-center justify-between gap-3 bg-card border border-primary/10 rounded-xl px-4 py-3 hover:border-primary/30 transition-colors">
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{l.label}</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </a>
            ))}
          </div>
        </section>
      </div>

      <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
    </SiteShell>
  );
}
