"use client";

import { ArrowRight, BadgeCheck, ChevronRight, MessageCircle } from "lucide-react";
import { AddToCartButton, BuyRegistrationCard } from "@/components/cart/add-to-cart-button";
import { DocList, DocSection, DocSteps, Paper } from "./doc-blocks";
import { splitPrice, type ServiceInfo } from "./types";

/** A single service page (/services/<slug>): overview, what's included, how we help, pricing and other services. */
export function ServiceDetail({
  svc,
  image,
  services,
  slugOf,
  onAllServices,
  onService,
  onConsultancy,
  whatsapp,
}: {
  svc: ServiceInfo;
  image: string;
  services: ServiceInfo[];
  slugOf: (s: ServiceInfo) => string;
  onAllServices: () => void;
  onService: (s: ServiceInfo) => void;
  onConsultancy: () => void;
  whatsapp: string;
}) {
  const Icon = svc.icon;
  const others = services.filter((s) => s.title !== svc.title);
  const allServicesLink = {
    href: "/services",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      onAllServices();
    },
  };
  const serviceLink = (s: ServiceInfo) => ({
    href: `/services/${slugOf(s)}`,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      onService(s);
    },
  });

  return (
    <>
      {/* Header */}
      <header className="relative border-b border-border">
        <div className="relative h-56 md:h-72 w-full overflow-hidden">
          <img src={image} alt={svc.title} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
        </div>
        <div className="relative px-4 sm:px-6 pb-12 -mt-16 md:-mt-20">
          <div className="max-w-6xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground mb-6">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <ChevronRight className="w-3.5 h-3.5" />
              <a {...allServicesLink} className="hover:text-primary transition-colors">Services</a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground">{svc.title}</span>
            </nav>
            <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
              <div className="w-14 h-14 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <div className="min-w-0">
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-gold bg-gold/10 border border-gold/25 px-3 py-1 rounded-full mb-3">
                  {svc.tag}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-1.5">{svc.title}</h1>
                <p className="text-sm text-muted-foreground tracking-wide">{svc.subtitle}</p>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">{svc.desc}</p>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-12 items-start">
          <div className="min-w-0 space-y-8">
            <Paper>
              <DocSection eyebrow="What's included" heading="Everything covered in this service">
                <DocList items={svc.points} columns={2} />
              </DocSection>
              {svc.sections && svc.sections.length > 0 && (
                <DocSection eyebrow="How we help" heading="Our approach">
                  <DocSteps steps={svc.sections.map((sec, i) => ({ num: i + 1, title: sec.title, paragraphs: [sec.body] }))} />
                </DocSection>
              )}
            </Paper>

            {svc.title === "Corporate Tax" && <BuyRegistrationCard />}
          </div>

          {/* Pricing sidebar */}
          <aside className="lg:sticky lg:top-28 space-y-6">
            {svc.pricing && (
              <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                <div className="px-6 pt-6 pb-4">
                  <p className="text-xs font-bold tracking-widest uppercase text-gold mb-1">Transparent pricing</p>
                  <p className="text-sm text-muted-foreground">Flat fees. No hidden charges.</p>
                </div>
                <ul className="divide-y divide-border border-t border-border">
                  {svc.pricing.map((row) => (
                    <li key={row.label} className={`px-6 py-4 ${row.highlight ? "bg-primary/5" : ""}`}>
                      <div className="flex items-start justify-between gap-4">
                        <span className={`text-sm flex items-start gap-2 ${row.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                          {row.highlight && <BadgeCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />}
                          {row.label}
                        </span>
                        <span className={`font-bold whitespace-nowrap ${row.highlight ? "text-primary" : "text-foreground"} text-sm`}>{row.price}</span>
                      </div>
                      {row.productId && <AddToCartButton productId={row.productId} size="sm" className="mt-3 w-full" />}
                    </li>
                  ))}
                </ul>
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
            )}
          </aside>
        </div>
      </div>

      {/* Other services */}
      {others.length > 0 && (
        <section className="bg-card border-t border-border px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Explore more</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Other Services</h2>
              </div>
              <a {...allServicesLink} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                View all services <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((s) => {
                const OIcon = s.icon;
                const price = splitPrice(s.price);
                return (
                  <a
                    key={s.title}
                    {...serviceLink(s)}
                    className="group flex flex-col h-full rounded-2xl border border-border bg-background p-6 hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <OIcon className="w-5 h-5 text-primary" />
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
