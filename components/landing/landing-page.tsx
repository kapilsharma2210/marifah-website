"use client";

import { useState } from "react";
import {
  MessageCircle, Mail, Phone, Linkedin, Instagram, Facebook,
  CheckCircle, FileText, Calculator, BookOpen, Building2, MapPin, ChevronDown, ArrowRight,
} from "lucide-react";
import { ConsultancyForm } from "@/components/consultancy-form";
import { CartButton } from "@/components/cart/cart-button";
import { AddToCartButton, BuyRegistrationCard } from "@/components/cart/add-to-cart-button";
import { siteConfig } from "@/lib/site-config";
import { LANDING_LINKS, type LandingConfig, type LandingIcon } from "./types";

const BRAND = "MARIFAH TAX ADVISORY";
const WHATSAPP = "971505815245";

const ICONS: Record<LandingIcon, typeof FileText> = {
  file: FileText,
  calculator: Calculator,
  book: BookOpen,
  building: Building2,
  map: MapPin,
};

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Insights", href: "/blog" },
  { label: "Penalty Calculator", href: "/uae-tax-penalty-calculator" },
  { label: "Contact", href: "/contact" },
];

function Navbar({ onConsultancy }: { onConsultancy: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="flex justify-between items-center gap-3 px-4 sm:px-6 md:px-10 py-4 max-w-7xl mx-auto">
        <a href="/" className="font-bold text-base sm:text-lg tracking-widest text-gold shrink-0">{BRAND}</a>
        <div className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foreground hover:text-primary transition-colors">{n.label}</a>
          ))}
          <CartButton />
          <button onClick={onConsultancy} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
            Free Consultation
          </button>
        </div>
        <div className="lg:hidden flex items-center gap-3">
          <CartButton />
          <button className="text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current" />
              <span className="block w-6 h-0.5 bg-current" />
              <span className="block w-6 h-0.5 bg-current" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-primary/10 px-6 py-4 space-y-3 bg-background">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="block text-sm text-foreground hover:text-primary transition-colors py-1">{n.label}</a>
          ))}
          <button onClick={() => { onConsultancy(); setOpen(false); }} className="w-full bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold mt-2">
            Free Consultation
          </button>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="dark bg-background text-foreground border-t border-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <p className="text-gold font-bold text-base tracking-widest mb-4">{BRAND}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Experienced tax professionals for VAT, Corporate Tax and Accounting — serving businesses across all Emirates.
          </p>
          <div className="flex gap-4">
            {[
              { url: siteConfig.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { url: siteConfig.socials.instagram, Icon: Instagram, label: "Instagram" },
              { url: siteConfig.socials.facebook, Icon: Facebook, label: "Facebook" },
            ].filter((s) => s.url).map(({ url, Icon, label }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"><Icon className="w-4 h-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-foreground font-semibold mb-5 text-sm tracking-wide">Services</p>
          <ul className="space-y-3">
            {LANDING_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-foreground font-semibold mb-5 text-sm tracking-wide">Company</p>
          <ul className="space-y-3">
            {[...NAV.slice(1), { label: "Reviews", href: "/reviews" }, { label: "FTA Contact Number", href: "/fta-contact-number-uae" }, { label: "UAE Tax Updates", href: "/uae-tax-updates" }].map((n) => (
              <li key={n.href}><a href={n.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-foreground font-semibold mb-5 text-sm tracking-wide">Contact</p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />info@marifahtax.com</p>
            <p className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />+{WHATSAPP}</p>
          </div>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors">
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-primary/10 py-5 px-6 max-w-7xl mx-auto">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Marifah Tax Advisory. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

const sectionHeading = "text-xs font-bold tracking-widest uppercase text-gold mb-5";

export function LandingPage({ config: c }: { config: LandingConfig }) {
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const Icon = ICONS[c.icon];
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(c.whatsappText)}`;
  const related = LANDING_LINKS.filter((l) => l.href !== `/${c.slug}`);

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
    <div className="bg-background text-foreground min-h-screen">
      <Navbar onConsultancy={() => setConsultancyOpen(true)} />

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
            <span className="text-foreground">{c.eyebrow}</span>
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-14">
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
      </main>

      <Footer />
      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300">
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">WhatsApp Us</span>
      </a>
      <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
    </div>
  );
}
