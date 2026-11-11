"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Mail, Phone, PhoneCall } from "lucide-react";
import { FTA, HOURS } from "@/lib/fta-contact";

type Hours = { days: number[]; open: string; close: string };

function uaeNow() {
  // Day and minutes in UAE time (UTC+4, no daylight saving), independent of the visitor's clock zone.
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Dubai", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")), time: `${get("hour")}:${get("minute")}` };
}
const toMin = (hhmm: string) => Number(hhmm.slice(0, 2)) * 60 + Number(hhmm.slice(3));
const isOpen = (h: Hours, n: { day: number; minutes: number }) => h.days.includes(n.day) && n.minutes >= toMin(h.open) && n.minutes < toMin(h.close);

/** "Open now / Closed" pill, shown only after mount so the page itself stays static. */
export function OpenStatus({ which }: { which: "callCentre" | "supportCentre" }) {
  const [state, setState] = useState<null | { open: boolean; time: string }>(null);
  useEffect(() => {
    const tick = () => { const n = uaeNow(); setState({ open: isOpen(HOURS[which], n), time: n.time }); };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [which]);
  if (!state) return <span className="inline-block h-6" aria-hidden="true" />;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${state.open ? "bg-emerald-100 text-emerald-800" : "bg-muted text-muted-foreground"}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${state.open ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground/60"}`} />
      {state.open ? "Open now" : "Closed now"} · {state.time} UAE time
    </span>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1800); } catch { /* ignore */ }
      }}
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
      aria-label={`Copy ${label}`}
    >
      {done ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
      {done ? "Copied" : "Copy"}
    </button>
  );
}

/** The three main contact cards with tap-to-call and tap-to-email. */
export function ContactCards() {
  const card = "relative flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all";
  return (
    <div className="grid md:grid-cols-3 gap-5">
      <div className={card}>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center"><Phone className="w-5 h-5" /></span>
          <OpenStatus which="callCentre" />
        </div>
        <p className="text-xs font-bold tracking-widest uppercase text-gold">Calling from inside the UAE</p>
        <p className="mt-1 text-3xl font-bold text-foreground tabular-nums">{FTA.phoneUae.display}</p>
        <p className="mt-1 text-sm text-muted-foreground">Toll-free · {HOURS.callCentre.label}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <a href={`tel:${FTA.phoneUae.tel}`} className="inline-flex flex-1 items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            <PhoneCall className="w-4 h-4" /> Call now
          </a>
          <CopyButton text={FTA.phoneUae.display} label="UAE number" />
        </div>
      </div>

      <div className={card}>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center"><PhoneCall className="w-5 h-5" /></span>
          <OpenStatus which="callCentre" />
        </div>
        <p className="text-xs font-bold tracking-widest uppercase text-gold">Calling from outside the UAE</p>
        <p className="mt-1 text-3xl font-bold text-foreground tabular-nums">{FTA.phoneIntl.display}</p>
        <p className="mt-1 text-sm text-muted-foreground">International call rates apply · same hours</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <a href={`tel:${FTA.phoneIntl.tel}`} className="inline-flex flex-1 items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            <PhoneCall className="w-4 h-4" /> Call from abroad
          </a>
          <CopyButton text={FTA.phoneIntl.display} label="international number" />
        </div>
      </div>

      <div className={card}>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center"><Mail className="w-5 h-5" /></span>
          <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary">Reply within 2 business days</span>
        </div>
        <p className="text-xs font-bold tracking-widest uppercase text-gold">Email</p>
        <p className="mt-1 text-2xl font-bold text-foreground break-all">{FTA.email}</p>
        <p className="mt-1 text-sm text-muted-foreground">Open 24/7 · include your TRN if you have one</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <a href={`mailto:${FTA.email}`} className="inline-flex flex-1 items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            <Mail className="w-4 h-4" /> Write an email
          </a>
          <CopyButton text={FTA.email} label="email address" />
        </div>
      </div>
    </div>
  );
}

/** Sticky call bar on phones, so the number is always one tap away. */
export function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur px-4 py-3 flex gap-3">
      <a href={`tel:${FTA.phoneUae.tel}`} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full text-sm font-semibold">
        <PhoneCall className="w-4 h-4" /> Call FTA {FTA.phoneUae.display}
      </a>
      <a href={`mailto:${FTA.email}`} aria-label="Email the FTA" className="w-12 inline-flex items-center justify-center border border-primary text-primary rounded-full">
        <Mail className="w-4 h-4" />
      </a>
    </div>
  );
}
