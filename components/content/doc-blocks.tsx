// Shared "document" styles so articles and service pages read like one consistent, professional publication.
import type { ReactNode } from "react";
import { CheckCircle2, Info } from "lucide-react";

/** White page that holds the content; sections inside are separated by thin rules. */
export function Paper({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm px-5 py-8 sm:px-10 sm:py-10">
      <div className="divide-y divide-border">{children}</div>
    </div>
  );
}

export function DocSection({ id, eyebrow, heading, children }: { id?: string; eyebrow?: string; heading?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-9 first:pt-0 last:pb-0">
      {eyebrow && <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">{eyebrow}</p>}
      {heading && <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-5">{heading}</h2>}
      {children}
    </section>
  );
}

export function DocParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-base md:text-[17px] leading-8 text-foreground/85">
          {p}
        </p>
      ))}
    </div>
  );
}

export function DocList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={columns === 2 ? "grid sm:grid-cols-2 gap-x-8 gap-y-3.5" : "space-y-3.5"}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-base leading-7 text-foreground/85">
          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DocTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm md:text-[15px]">
        <tbody className="divide-y divide-border">
          {rows.map(([label, value], i) => (
            <tr key={i} className="block sm:table-row">
              {value ? (
                <>
                  <th scope="row" className="block sm:table-cell sm:w-[42%] text-left align-top font-semibold text-foreground bg-secondary/50 px-4 pt-3 pb-1 sm:py-3.5 leading-relaxed">
                    {label}
                  </th>
                  <td className="block sm:table-cell align-top text-foreground/80 px-4 pb-3 pt-0 sm:py-3.5 leading-relaxed">{value}</td>
                </>
              ) : (
                <td colSpan={2} className="block sm:table-cell text-foreground/80 px-4 py-3.5 leading-relaxed">
                  {label}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DocSteps({ steps }: { steps: { num: number; title: string; paragraphs: string[] }[] }) {
  return (
    <ol className="space-y-0">
      {steps.map((s, i) => (
        <li key={i} className="relative pl-14 pb-8 last:pb-0">
          {i < steps.length - 1 && <span aria-hidden className="absolute left-[17px] top-10 bottom-1 w-px bg-border" />}
          <span className="absolute left-0 top-0 w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
            {s.num}
          </span>
          <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug pt-1.5 mb-2">{s.title}</h3>
          <div className="space-y-3">
            {s.paragraphs.map((p, j) => (
              <p key={j} className="text-base leading-7 text-foreground/80">
                {p}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DocTimeline({ events }: { events: { date: string; title: string; body: string }[] }) {
  return (
    <ol className="space-y-0">
      {events.map((e, i) => (
        <li key={i} className="relative pl-10 pb-8 last:pb-0">
          {i < events.length - 1 && <span aria-hidden className="absolute left-[7px] top-5 bottom-0 w-px bg-border" />}
          <span aria-hidden className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-gold ring-4 ring-gold/15" />
          {e.date && <p className="text-xs font-bold tracking-widest uppercase text-gold mb-1">{e.date}</p>}
          <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug mb-2">{e.title}</h3>
          <p className="text-base leading-7 text-foreground/80">{e.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function DocFaq({ items }: { items: { title: string; body: string }[] }) {
  return (
    <dl className="divide-y divide-border">
      {items.map((q, i) => (
        <div key={i} className="py-5 first:pt-0 last:pb-0">
          <dt className="text-base md:text-lg font-semibold text-foreground leading-snug">{q.title}</dt>
          <dd className="mt-2 text-base leading-7 text-foreground/80">{q.body}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DocCallout({ heading, body }: { heading?: string; body: string }) {
  return (
    <div className="rounded-xl border border-gold/25 border-l-4 border-l-gold bg-gold/[0.06] px-5 py-5 sm:px-6">
      <p className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-gold mb-2">
        <Info className="w-3.5 h-3.5" /> Important
      </p>
      {heading && <h3 className="font-semibold text-foreground leading-snug mb-1.5">{heading}</h3>}
      <p className="text-[15px] leading-7 text-foreground/80">{body}</p>
    </div>
  );
}
