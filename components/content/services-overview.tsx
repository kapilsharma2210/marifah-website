"use client";

import { ArrowRight, CheckCircle, MessageCircle, Star, TrendingUp } from "lucide-react";
import { splitPrice, type ServiceInfo } from "./types";

type Section = { heading: string; body: string };

/** The /services page: one card per service, with price and a link to its own page. */
export function ServicesOverview({
  services,
  sections,
  slugOf,
  onService,
  onConsultancy,
  whatsapp,
}: {
  services: ServiceInfo[];
  sections: Section[];
  slugOf: (s: ServiceInfo) => string;
  onService: (s: ServiceInfo) => void;
  onConsultancy: () => void;
  whatsapp: string;
}) {
  const text = (heading: string) => sections.find((s) => s.heading === heading)?.body ?? "";
  const byTitle = (t: string) => services.find((s) => s.title === t);

  const core = [
    { svc: byTitle("Corporate Tax"), heading: "Corporate Tax Services" },
    { svc: byTitle("UAE VAT"), heading: "UAE VAT Services" },
    { svc: byTitle("Accounting"), heading: "Accounting & Bookkeeping" },
  ].filter((c): c is { svc: ServiceInfo; heading: string } => !!c.svc);
  const full = byTitle("Full Compliance Package");

  const link = (svc: ServiceInfo) => ({
    href: `/services/${slugOf(svc)}`,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      onService(svc);
    },
  });

  return (
    <div className="space-y-8">
      {/* Core services */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {core.map(({ svc, heading }) => {
          const Icon = svc.icon;
          const price = splitPrice(svc.price);
          return (
            <article
              key={svc.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-[11px] font-bold tracking-widest uppercase text-gold mb-2">{svc.subtitle}</p>
              <h2 className="text-xl font-bold text-foreground mb-3">
                <a {...link(svc)} className="hover:text-primary transition-colors">
                  {heading}
                </a>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{text(heading)}</p>
              <ul className="space-y-2.5 mb-8">
                {svc.points.slice(0, 4).map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5 border-t border-border flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{price.label}</p>
                  <p className="text-lg font-bold text-foreground">{price.amount}</p>
                </div>
                <a
                  {...link(svc)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
                >
                  View details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Package + advisory */}
      <div className="grid lg:grid-cols-2 gap-6">
        {full && (
          <article className="relative flex flex-col rounded-2xl border-2 border-primary bg-card p-7 sm:p-8 shadow-sm">
            <span className="absolute -top-3 left-7 inline-flex items-center gap-1 bg-primary text-primary-foreground text-[11px] font-bold px-3 py-1 rounded-full">
              <Star className="w-3 h-3" /> {full.tag}
            </span>
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-gold mb-2">{full.subtitle}</p>
                <h2 className="text-xl font-bold text-foreground">
                  <a {...link(full)} className="hover:text-primary transition-colors">
                    {full.title}
                  </a>
                </h2>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Per year</p>
                <p className="text-2xl font-bold text-primary">{splitPrice(full.price).amount}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{full.desc}</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
              {full.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
            <a
              {...link(full)}
              className="mt-auto inline-flex items-center justify-center gap-2 self-start bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              View package details <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        )}

        <article className="flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-8 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <p className="text-[11px] font-bold tracking-widest uppercase text-gold mb-2">Planning · Structuring · Advice</p>
          <h2 className="text-xl font-bold text-foreground mb-3">Tax Consultancy &amp; Advisory</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">{text("Tax Consultancy & Advisory")}</p>
          <button
            type="button"
            onClick={onConsultancy}
            className="mt-auto inline-flex items-center justify-center gap-2 self-start border border-primary text-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Book Free Consultation
          </button>
        </article>
      </div>

      {/* Why act now */}
      {text("Why Act Now?") && (
        <section className="dark rounded-3xl bg-background border border-primary/20 p-8 md:p-12">
          <div className="grid md:grid-cols-[minmax(0,1fr)_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Don&apos;t risk penalties</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Act Now?</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">{text("Why Act Now?")}</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <button
                type="button"
                onClick={onConsultancy}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" /> Book Free Consultation
              </button>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors whitespace-nowrap"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
