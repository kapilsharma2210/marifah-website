import type { Metadata } from "next";
import { BellRing, MessageCircle, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-app";
import { TaxUpdatesFeed, UpcomingDeadlines } from "@/components/tax-updates/tax-updates-feed";
import { LAST_REVIEWED, UPDATES } from "@/lib/tax-updates";

// Rebuilt daily so "New", "In force" and the deadline countdowns stay current.
export const revalidate = 86400;

const PATH = "/uae-tax-updates";
const title = "UAE Tax Updates 2026: Latest FTA & Ministry of Finance Changes | Marifah";
const description =
  "Every recent change to UAE Corporate Tax, VAT, Excise Tax, Customs and e-invoicing in one place: new laws, Cabinet and Ministerial decisions, FTA decisions and clarifications, and upcoming deadlines, each with its official source.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title, description },
  keywords: ["UAE tax updates", "FTA updates", "UAE tax news", "new UAE tax law", "UAE VAT changes 2026", "UAE corporate tax updates", "FTA decision 2026", "UAE excise tax changes", "UAE customs updates"],
};

const fmtLong = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const WHATSAPP = "971505815245";

export default function TaxUpdatesPage() {
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Dubai" });
  const published = UPDATES.filter((u) => u.kind !== "Deadline");
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "UAE Tax Updates",
      description,
      url: `https://www.marifahtax.com${PATH}`,
      dateModified: LAST_REVIEWED,
      publisher: { "@id": "https://www.marifahtax.com/#organization" },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [...published].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 20).map((u, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://www.marifahtax.com${PATH}#${u.id}`,
          name: u.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marifahtax.com/" },
        { "@type": "ListItem", position: 2, name: "UAE Tax Updates", item: `https://www.marifahtax.com${PATH}` },
      ],
    },
  ];

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="bg-card border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-10 md:pt-14">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-5">
            <a href="/" className="hover:text-primary">Home</a><span className="mx-1.5">/</span>
            <span className="text-foreground">UAE Tax Updates</span>
          </nav>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3 inline-flex items-center gap-2">
                <span className="relative flex w-2 h-2"><span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" /><span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" /></span>
                Tax Update Tracker
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">UAE Tax Updates</h1>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
                Every recent change to UAE Corporate Tax, VAT, Excise Tax, Customs and e-invoicing in one place: new laws and decisions, FTA
                clarifications and the deadlines coming up. Each update is explained in plain English, with a link to its official source.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background px-5 py-4 text-sm min-w-60">
              <p className="flex items-center gap-2 font-semibold text-foreground"><ShieldCheck className="w-4 h-4 text-primary" /> Last reviewed</p>
              <p className="text-muted-foreground mt-1">{fmtLong(LAST_REVIEWED)}</p>
              <p className="text-xs text-muted-foreground mt-2">{published.length} changes tracked · checked against FTA &amp; Ministry of Finance sources</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEADLINES */}
      <section className="border-b border-primary/10 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2"><BellRing className="w-5 h-5 text-primary" /> Upcoming Deadlines</h2>
          <UpcomingDeadlines today={today} />
        </div>
      </section>

      {/* FEED */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <TaxUpdatesFeed today={today} />
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mb-3">Not sure how a change affects you?</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ask a tax professional</h2>
            <p className="text-primary-foreground/80 max-w-2xl leading-relaxed">Tell us what your business does and we&apos;ll explain which of these changes apply to you and what you need to do, and by when.</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="/contact" className="inline-flex items-center justify-center bg-primary-foreground text-primary px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">Book a free consultation</a>
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Marifah Tax Advisory, I have a question about a recent UAE tax update.")}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-foreground/10 transition-colors">
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
          </div>
        </div>
        <p className="mt-5 text-xs text-muted-foreground leading-relaxed max-w-4xl">
          Summaries are for general information and are not legal advice. The official texts on tax.gov.ae, mof.gov.ae and uaelegislation.gov.ae take precedence.
          Marifah Tax Advisory is an independent consultancy and is not affiliated with the Federal Tax Authority or the Ministry of Finance.
        </p>
      </section>
    </SiteShell>
  );
}
