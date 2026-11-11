"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CalendarClock, ExternalLink, Search, X } from "lucide-react";
import { CATEGORIES, UPDATES, type TaxUpdate, type UpdateCategory } from "@/lib/tax-updates";

const CAT_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label])) as Record<UpdateCategory, string>;
const CAT_STYLE: Record<UpdateCategory, string> = {
  ct: "bg-indigo-50 text-indigo-800 border-indigo-200",
  vat: "bg-emerald-50 text-emerald-800 border-emerald-200",
  einv: "bg-sky-50 text-sky-800 border-sky-200",
  excise: "bg-rose-50 text-rose-800 border-rose-200",
  customs: "bg-amber-50 text-amber-800 border-amber-200",
  procedures: "bg-violet-50 text-violet-800 border-violet-200",
};

const fmt = (iso: string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" }) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { ...opts, timeZone: "UTC" });

const daysBetween = (a: string, b: string) => Math.round((Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`)) / 86_400_000);

function status(u: TaxUpdate, today: string): { label: string; cls: string } {
  if (u.kind === "Deadline") {
    return u.date >= today
      ? { label: "Deadline", cls: "bg-red-600 text-white" }
      : { label: "Deadline passed", cls: "bg-muted text-muted-foreground" };
  }
  const eff = u.effective ?? u.date;
  if (eff > today) return { label: `In force from ${fmt(eff)}`, cls: "bg-amber-500 text-white" };
  if (daysBetween(u.date, today) <= 30) return { label: "New", cls: "bg-primary text-primary-foreground" };
  return { label: "In force", cls: "bg-emerald-600 text-white" };
}

export function UpcomingDeadlines({ today }: { today: string }) {
  const items = UPDATES.filter((u) => u.kind === "Deadline" && u.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  if (!items.length) return <p className="text-sm text-muted-foreground">No deadlines in the coming months.</p>;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((u) => {
        const d = daysBetween(today, u.date);
        return (
          <div key={u.id} id={u.id} className="scroll-mt-28 rounded-2xl border border-border bg-background p-5 hover:border-primary/40 hover:shadow-sm transition-all flex flex-col">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${CAT_STYLE[u.category]}`}>{CAT_LABEL[u.category]}</span>
              <span className={`text-xs font-bold tabular-nums ${d <= 30 ? "text-red-600" : "text-primary"}`}>{d === 0 ? "Today" : `${d} day${d === 1 ? "" : "s"} left`}</span>
            </div>
            <p className="text-2xl font-bold text-foreground tabular-nums">{fmt(u.date, { day: "numeric", month: "short" })}</p>
            <p className="text-xs text-muted-foreground mb-2">{fmt(u.date, { year: "numeric" })}</p>
            <p className="text-sm font-semibold text-foreground leading-snug">{u.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-2 flex-grow">{u.summary}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
              {u.related ? (
                <a href={u.related.href} className="font-semibold text-primary hover:underline inline-flex items-center gap-1">{u.related.label} <ArrowRight className="w-3 h-3" /></a>
              ) : (
                <a href={u.sources[0].url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1"><ExternalLink className="w-3 h-3" />{u.sources[0].label}</a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function TaxUpdatesFeed({ today }: { today: string }) {
  const [cat, setCat] = useState<UpdateCategory | "all">("all");
  const [q, setQ] = useState("");

  // Upcoming deadlines live in the strip above; the feed shows published changes and past deadlines.
  const feedItems = useMemo(() => UPDATES.filter((u) => !(u.kind === "Deadline" && u.date >= today)), [today]);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return [...feedItems]
      .filter((u) => cat === "all" || u.category === cat)
      .filter((u) => !term || `${u.title} ${u.summary} ${u.kind} ${CAT_LABEL[u.category]}`.toLowerCase().includes(term))
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [cat, q, feedItems]);

  // Group by month for the timeline headings
  const groups = useMemo(() => {
    const m = new Map<string, TaxUpdate[]>();
    for (const u of list) {
      const key = u.date.slice(0, 7);
      m.set(key, [...(m.get(key) ?? []), u]);
    }
    return [...m.entries()];
  }, [list]);

  const counts = useMemo(() => Object.fromEntries(CATEGORIES.map((c) => [c.id, feedItems.filter((u) => u.category === c.id).length])), [feedItems]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
        <div role="tablist" aria-label="Filter by tax" className="flex flex-wrap gap-2">
          {[{ id: "all" as const, label: "All updates" }, ...CATEGORIES].map((c) => {
            const active = cat === c.id;
            const n = c.id === "all" ? feedItems.length : counts[c.id];
            return (
              <button key={c.id} role="tab" aria-selected={active} onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${active ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border hover:border-primary/40"}`}>
                {c.label} <span className={`ml-1 text-xs ${active ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{n}</span>
              </button>
            );
          })}
        </div>
        <div className="relative lg:ml-auto lg:w-72">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search updates…" aria-label="Search updates"
            className="w-full h-11 rounded-full border border-input bg-card pl-10 pr-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
          {q && (
            <button onClick={() => setQ("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Timeline */}
      {groups.length === 0 ? (
        <p className="text-sm text-muted-foreground py-10 text-center">No updates match your search.</p>
      ) : (
        <div className="space-y-10">
          {groups.map(([month, items]) => (
            <section key={month} aria-label={fmt(`${month}-01`, { month: "long", year: "numeric" })}>
              <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-4 sticky top-[72px] z-10 bg-background/95 backdrop-blur py-2">
                {fmt(`${month}-01`, { month: "long", year: "numeric" })}
              </h2>
              <ol className="relative border-l-2 border-primary/15 ml-2 space-y-5">
                {items.map((u) => {
                  const s = status(u, today);
                  return (
                    <li key={u.id} id={u.id} className="ml-6 scroll-mt-32">
                      <span className="absolute -left-[9px] mt-6 w-4 h-4 rounded-full border-4 border-background bg-primary" aria-hidden="true" />
                      <article className="rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-primary/30 hover:shadow-sm transition-all">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${s.cls}`}>{s.label}</span>
                          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${CAT_STYLE[u.category]}`}>{CAT_LABEL[u.category]}</span>
                          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-border text-muted-foreground">{u.kind}</span>
                          <time dateTime={u.date} className="text-xs text-muted-foreground ml-auto inline-flex items-center gap-1">
                            <CalendarClock className="w-3.5 h-3.5" />{fmt(u.date)}
                          </time>
                        </div>
                        <h3 className="text-lg font-bold text-foreground leading-snug mb-2">{u.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{u.summary}</p>
                        {(u.whoIsAffected || u.effective) && (
                          <dl className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                            {u.whoIsAffected && (
                              <div className="rounded-xl bg-background border border-border px-4 py-2.5">
                                <dt className="text-xs text-muted-foreground">Who it affects</dt>
                                <dd className="font-medium text-foreground">{u.whoIsAffected}</dd>
                              </div>
                            )}
                            {u.effective && u.kind !== "Deadline" && (
                              <div className="rounded-xl bg-background border border-border px-4 py-2.5">
                                <dt className="text-xs text-muted-foreground">Takes effect</dt>
                                <dd className="font-medium text-foreground">{fmt(u.effective)}</dd>
                              </div>
                            )}
                          </dl>
                        )}
                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                          {u.sources.map((src) => (
                            <a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                              <ExternalLink className="w-3.5 h-3.5" />{src.label}
                            </a>
                          ))}
                          {u.related && (
                            <a href={u.related.href} className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
                              {u.related.label} <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
