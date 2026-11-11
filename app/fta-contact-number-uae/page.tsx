import type { Metadata } from "next";
import {
  AlertTriangle, ArrowRight, BadgeCheck, Building2, CalendarClock, ChevronDown, ExternalLink, FileSearch, Info, MapPin,
  MessageCircle, MonitorSmartphone, ShieldCheck, UserRoundSearch,
} from "lucide-react";
import { SiteShell } from "@/components/site-app";
import { ContactCards, MobileCallBar, OpenStatus } from "@/components/fta/fta-contact-widgets";
import { CHANNELS, FTA, HOURS } from "@/lib/fta-contact";

const PATH = "/fta-contact-number-uae";
const URL = `https://www.marifahtax.com${PATH}`;
const UPDATED = "11 November 2026";

const title = "FTA Contact Number UAE: Federal Tax Authority Phone, Email & Hours (2026)";
const description =
  "Call the UAE Federal Tax Authority on 800 82923 (inside the UAE) or +971 8008 2923 (from abroad), email info@tax.gov.ae. Hours, offices, live chat, how to reach an FTA officer about your case and how to find a registered tax agent.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: { type: "article", url: PATH, title, description, images: ["/guides/fta-contact/contact-channels.png"] },
  keywords: [
    "FTA contact number", "Federal Tax Authority contact", "FTA UAE phone number", "FTA customer care number",
    "FTA email address", "FTA working hours", "FTA toll free number", "contact FTA from outside UAE", "FTA tax agent", "FTA officer",
  ],
};

const faqs = [
  { q: "What is the FTA contact number in the UAE?", a: "The Federal Tax Authority's toll-free number is 800 82923. It is free to call from UAE landlines and mobiles, Monday to Saturday from 7:30 am to 10:00 pm UAE time." },
  { q: "How do I call the FTA from outside the UAE?", a: "The FTA publishes +971 80082923 for callers outside the UAE. International call charges from your own phone provider apply. If the call doesn't connect, use live chat on tax.gov.ae or email info@tax.gov.ae, which are free and open 24/7." },
  { q: "What is the FTA email address?", a: "info@tax.gov.ae. The FTA aims to reply within 2 business days. Include your Tax Registration Number (TRN), if you have one, and attach any supporting documents." },
  { q: "What are the FTA working hours?", a: "The call centre is open Monday to Saturday, 7:30 am to 10:00 pm. The Taxpayer Support Centres in Abu Dhabi and Dubai are open Monday to Friday, 7:30 am to 3:30 pm. Email, live chat, the TARA virtual assistant, the EmaraTax portal and app are available 24 hours a day, 7 days a week. Hours can differ on public holidays." },
  { q: "Is the FTA open on Sunday?", a: "The call centre and offices are closed on Sunday. You can still use email, live chat, the TARA virtual assistant and EmaraTax, which are available every day." },
  { q: "Can I get the direct number of an FTA officer?", a: "No. The FTA does not publish direct numbers for individual officers. To reach the person handling your matter, reply through the same EmaraTax case or email the FTA sent you, quote your reference number and TRN, or book a Tax Connect video appointment." },
  { q: "How do I check if someone is a registered tax agent?", a: "The FTA publishes its register of approved tax agents on tax.gov.ae, under Tax Support → Tax Agents. Only people on that register can act as your tax agent before the FTA." },
  { q: "Does the FTA have a WhatsApp number?", a: "The FTA's Contact Us page lists phone, email, live chat, the TARA assistant, EmaraTax and social media, but no WhatsApp number. Be careful with messages from WhatsApp numbers claiming to be the FTA." },
];

const prepare = [
  "Your Tax Registration Number (TRN) or Corporate Tax registration number",
  "Your trade licence number and the legal name exactly as on the licence",
  "Any reference number from EmaraTax or an earlier email from the FTA",
  "The tax period, return or payment your question is about",
  "Screenshots of any error message you see in EmaraTax",
  "A UAE PASS login, which the FTA now uses for its online services",
];

const sectionTag = "text-xs font-bold tracking-widest uppercase text-gold mb-3";
const h2 = "text-2xl md:text-3xl font-bold text-foreground mb-4";

export default function FtaContactPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url: URL,
      image: "https://www.marifahtax.com/guides/fta-contact/contact-channels.png",
      dateModified: "2026-11-11",
      author: { "@type": "Organization", name: "Marifah Tax Advisory", url: "https://www.marifahtax.com" },
      publisher: { "@id": "https://www.marifahtax.com/#organization" },
      about: {
        "@type": "GovernmentOrganization",
        name: "Federal Tax Authority (UAE)",
        url: FTA.website,
        sameAs: [FTA.website],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marifahtax.com/" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.marifahtax.com/blog" },
        { "@type": "ListItem", position: 3, name: "FTA Contact Number UAE", item: URL },
      ],
    },
  ];

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="bg-card border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-10 md:pt-14 md:pb-12">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-5">
            <a href="/" className="hover:text-primary">Home</a><span className="mx-1.5">/</span>
            <a href="/blog" className="hover:text-primary">Insights</a><span className="mx-1.5">/</span>
            <span className="text-foreground">FTA Contact Number</span>
          </nav>
          <p className={sectionTag}>Federal Tax Authority · Contact Guide</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-4xl">
            FTA Contact Number UAE: How to Reach the Federal Tax Authority
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            Every official way to contact the UAE Federal Tax Authority in one place: phone numbers for inside and outside the UAE,
            email, opening hours, offices, live chat and what to do when you need to reach an FTA officer about your case.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-primary" /> Checked against tax.gov.ae · Updated {UPDATED}</span>
            <span className="inline-flex items-center gap-1.5"><Info className="w-4 h-4 text-primary" /> Independent guide by Marifah Tax Advisory, not the FTA</span>
          </div>
        </div>
      </section>

      <div className="pb-24 md:pb-0">
        {/* CONTACT CARDS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12" aria-label="FTA phone and email">
          <ContactCards />
          <p className="mt-4 text-xs text-muted-foreground">
            Tap a number on your phone to call directly. Numbers and email as published on the FTA&apos;s{" "}
            <a href={FTA.contactPage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">official Contact Us page</a>.
          </p>
        </section>

        {/* CHANNEL GUIDE IMAGE */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
          <figure className="rounded-3xl overflow-hidden border border-border bg-card">
            <img src="/guides/fta-contact/contact-channels.png" alt="Which way to contact the FTA: call 800 82923 for quick questions, live chat 24/7, email for detailed questions, an EmaraTax request for returns or TRN, Tax Connect for complex matters, or visit the Abu Dhabi or Dubai office" className="w-full h-auto" width={1600} height={610} />
          </figure>
        </section>

        {/* HOURS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 grid lg:grid-cols-[1fr_1.15fr] gap-8 items-start">
          <div>
            <p className={sectionTag}>Working schedule</p>
            <h2 className={h2}>FTA Working Hours and Timings</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">All times are UAE time (GMT+4). Hours can change on public holidays and during Ramadan, so check tax.gov.ae around those dates.</p>
            <div className="rounded-2xl border border-border bg-card divide-y divide-border">
              <div className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <p className="font-semibold text-foreground">Call centre · {FTA.phoneUae.display}</p>
                  <OpenStatus which="callCentre" />
                </div>
                <p className="text-sm text-muted-foreground">{HOURS.callCentre.label}</p>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <p className="font-semibold text-foreground">Taxpayer Support Centres (offices)</p>
                  <OpenStatus which="supportCentre" />
                </div>
                <p className="text-sm text-muted-foreground">{HOURS.supportCentre.label}</p>
              </div>
              <div className="p-5">
                <p className="font-semibold text-foreground mb-1">Email, live chat, TARA, EmaraTax portal &amp; app</p>
                <p className="text-sm text-muted-foreground">24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
          <figure className="rounded-3xl overflow-hidden border border-border bg-card lg:mt-12">
            <img src="/guides/fta-contact/opening-hours.png" alt="Weekly chart: FTA call centre open Monday to Saturday 7:30 am to 10 pm; offices open Monday to Friday 7:30 am to 3:30 pm; closed Sunday" className="w-full h-auto" width={1600} height={900} loading="lazy" />
          </figure>
        </section>

        {/* ALL CHANNELS */}
        <section className="bg-card border-y border-primary/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            <p className={sectionTag}>Every channel</p>
            <h2 className={h2}>All the Ways to Contact the FTA</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">Response times are the service standards published by the FTA. For anything about your own registration, returns or payments, an EmaraTax request is usually best because it gives you a reference number to follow up with.</p>
            <div className="rounded-2xl border border-border overflow-x-auto bg-background">
              <table className="w-full text-sm min-w-[640px]">
                <thead className="bg-primary/5 text-left">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold text-foreground">Channel</th>
                    <th scope="col" className="px-5 py-3 font-semibold text-foreground">When</th>
                    <th scope="col" className="px-5 py-3 font-semibold text-foreground">Response</th>
                    <th scope="col" className="px-5 py-3 font-semibold text-foreground">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {CHANNELS.map((c) => (
                    <tr key={c.name} className="border-t border-border align-top">
                      <td className="px-5 py-3.5 font-medium text-foreground">{c.name}</td>
                      <td className="px-5 py-3.5 text-muted-foreground whitespace-nowrap">{c.when}</td>
                      <td className="px-5 py-3.5 text-muted-foreground">{c.response}</td>
                      <td className="px-5 py-3.5 text-muted-foreground">{c.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={FTA.contactPage} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">
                <MessageCircle className="w-4 h-4" /> Live chat on tax.gov.ae <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href={FTA.emaraTax} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">
                <MonitorSmartphone className="w-4 h-4" /> Open EmaraTax <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href={FTA.inquiryCard} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">
                <CalendarClock className="w-4 h-4" /> Book Tax Connect / submit an inquiry <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* OFFICES */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <p className={sectionTag}>Visit in person</p>
          <h2 className={h2}>FTA Offices in Abu Dhabi and Dubai</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">The Taxpayer Support Centres are open Monday to Friday, 7:30 am to 3:30 pm. Bring your supporting documents, take a ticket at reception and you will be called. The FTA aims to serve visitors within about 15 minutes.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {FTA.offices.map((o) => (
              <div key={o.city} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Building2 className="w-5 h-5" /></span>
                <div>
                  <p className="font-semibold text-foreground text-lg">{o.city}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{o.address}</p>
                  <a href={o.map} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                    <MapPin className="w-4 h-4" /> Get directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FTA OFFICER */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-primary/20 bg-card p-7">
            <span className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4"><UserRoundSearch className="w-5 h-5" /></span>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">How to Reach an FTA Officer About Your Case</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">The FTA does not publish direct phone numbers or emails for individual officers. To reach the person handling your registration, refund, audit or request:</p>
            <ul className="space-y-2.5 text-sm text-foreground">
              {[
                "Reply through the same EmaraTax case or notification, so it reaches the right team",
                "Quote your reference number and TRN in every message",
                "Book a Tax Connect video appointment for a complex matter",
                "Call 800 82923 with your reference number ready, so the agent can find your case",
              ].map((t) => (
                <li key={t} className="flex gap-2.5"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-primary/20 bg-card p-7">
            <span className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4"><FileSearch className="w-5 h-5" /></span>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Looking for an FTA Registered Tax Agent?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A tax agent is a private professional registered with the FTA to represent businesses before it, for example in audits, reconsiderations and correspondence. Tax agents are not FTA employees.
              The FTA publishes its official register of approved tax agents, so you can check that anyone acting for you is on it.
            </p>
            <a href={FTA.taxAgents} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Check the FTA tax agent register <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* PREPARE */}
        <section className="bg-card border-y border-primary/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-[1fr_1fr] gap-10">
            <div>
              <p className={sectionTag}>Save time</p>
              <h2 className={h2}>Have These Ready Before You Call</h2>
              <p className="text-muted-foreground leading-relaxed">The agent will usually ask you to confirm who you are and which registration your question is about. Having these details ready makes the call much quicker.</p>
            </div>
            <ul className="space-y-3">
              {prepare.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground bg-background border border-border rounded-xl px-4 py-3">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />{p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMPLAINTS + SCAM WARNING */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Making a Complaint to the FTA</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">You can complain through the FTA website, email, the call centre, live chat, EmaraTax or in person. The service is free. The FTA&apos;s published targets are:</p>
            <dl className="grid grid-cols-3 gap-3 text-center">
              {[["Urgent", "1 working day"], ["Normal", "5 working days"], ["Complicated", "15 working days"]].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-primary/5 p-3">
                  <dt className="text-xs text-muted-foreground">{k}</dt>
                  <dd className="text-sm font-bold text-foreground mt-1">{v}</dd>
                </div>
              ))}
            </dl>
            <a href={FTA.complaintCard} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              FTA complaint service <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="rounded-3xl border border-amber-300 bg-amber-50 p-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-800 mb-3"><AlertTriangle className="w-4 h-4" /> Stay safe</span>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Beware of Fake &quot;FTA&quot; Calls and Messages</h2>
            <ul className="space-y-2.5 text-sm text-foreground">
              {[
                "The FTA's website and email use the tax.gov.ae domain; be wary of anything else",
                "The FTA's website is tax.gov.ae and its portal is EmaraTax",
                "The FTA's Contact Us page lists no WhatsApp number",
                "Never share your UAE PASS or EmaraTax login, or one-time codes, with anyone",
                "If in doubt, hang up and call 800 82923 yourself",
              ].map((t) => (
                <li key={t} className="flex gap-2.5"><ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* SOCIAL */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="text-xl font-bold text-foreground mb-4">Official FTA Social Media</h2>
          <div className="flex flex-wrap gap-3">
            {FTA.social.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2.5 rounded-full text-sm hover:border-primary hover:text-primary transition-colors">
                <span className="font-semibold">{s.name}</span><span className="text-muted-foreground">{s.handle}</span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className={h2}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-card border border-primary/10 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-sm font-semibold text-foreground pr-4">{f.q}</h3>
                  <ChevronDown className="w-4 h-4 text-primary shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mb-3">Prefer someone to handle it?</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Let our tax professionals deal with the FTA paperwork</h2>
              <p className="text-primary-foreground/80 max-w-2xl leading-relaxed">
                We prepare and file VAT and Corporate Tax registrations, returns and voluntary disclosures, raise EmaraTax requests and help you
                respond to FTA emails, so you get it right the first time.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Book a free consultation
              </a>
              <a href="/uae-tax-penalty-calculator" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-foreground/10 transition-colors">
                Check an FTA penalty
              </a>
            </div>
          </div>
          <p className="mt-5 text-xs text-muted-foreground leading-relaxed max-w-4xl">
            Marifah Tax Advisory is an independent tax consultancy and is not part of, or affiliated with, the Federal Tax Authority. Contact details on this page are taken from the FTA&apos;s official website
            ({FTA.website.replace("https://", "")}) and were last checked on {UPDATED}. Always confirm on the FTA&apos;s website before relying on them.
          </p>
        </section>
      </div>

      <MobileCallBar />
    </SiteShell>
  );
}
