// Turns the raw article sections from lib/blog-data.ts into consistently structured blocks:
// paragraphs, bullet lists, two-column tables, numbered steps, timelines, Q&A and callouts.
// The article text itself is not changed — only how it is laid out.

import type { BlogSection } from "./types";

type Item = { title: string; body: string };

export type Block =
  | { kind: "text"; id: string; heading?: string; paragraphs: string[] }
  | { kind: "list"; id: string; heading?: string; items: string[] }
  | { kind: "table"; id: string; heading?: string; rows: [string, string][] }
  | { kind: "steps"; id: string; heading?: string; steps: { num: number; title: string; paragraphs: string[] }[] }
  | { kind: "timeline"; id: string; heading?: string; events: { date: string; title: string; body: string }[] }
  | { kind: "faq"; id: string; heading?: string; items: Item[] }
  | { kind: "callout"; id: string; heading?: string; body: string }
  | { kind: "cta"; id: string; heading?: string; body: string };

const ABBREVIATIONS = /(?:\b(?:No|Nos|e\.g|i\.e|vs|etc|Dr|Mr|Mrs|Ms|St|Art|approx|Co|Ltd|Inc))\.$/i;

/** Splits a long paragraph into readable paragraphs of 2–3 sentences. */
export function toParagraphs(text = ""): string[] {
  const clean = text.trim();
  const words = clean.split(/\s+/).length;
  if (words <= 70) return clean ? [clean] : [];

  // Sentence split, then re-join where the "sentence end" was really an abbreviation.
  const raw = clean.split(/(?<=[.!?])\s+(?=[A-Z0-9"'(“‘])/);
  const sentences: string[] = [];
  for (const part of raw) {
    const prev = sentences[sentences.length - 1];
    if (prev && ABBREVIATIONS.test(prev)) sentences[sentences.length - 1] = `${prev} ${part}`;
    else sentences.push(part);
  }

  const paras: string[] = [];
  let current: string[] = [];
  let count = 0;
  for (const s of sentences) {
    current.push(s);
    count += s.split(/\s+/).length;
    if (count >= 45) {
      paras.push(current.join(" "));
      current = [];
      count = 0;
    }
  }
  if (current.length) {
    const tail = current.join(" ");
    // Don't leave a very short last paragraph on its own.
    if (paras.length && tail.split(/\s+/).length < 18) paras[paras.length - 1] += " " + tail;
    else paras.push(tail);
  }
  return paras;
}

const cap = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

/** "Label: value" or "Label — value" lists read better as a two-column table. */
function asTableRows(items: string[]): [string, string][] | null {
  if (items.length < 3) return null;
  const tryPattern = (re: RegExp) => {
    const rows = items.map((it) => {
      const m = it.match(re);
      return m ? ([m[1].trim(), cap(m[2].trim())] as [string, string]) : null;
    });
    const hits = rows.filter(Boolean).length;
    return hits / items.length >= 0.7 ? rows : null;
  };
  const rows = tryPattern(/^([^:]{2,60}):\s+(.+)$/) || tryPattern(/^(.{2,110}?)\s+[—–]\s+(.+)$/);
  if (!rows) return null;
  // Items that didn't match the pattern keep their full text in the first column.
  return rows.map((r, i) => r ?? ([items[i], ""] as [string, string]));
}

const MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December";
const DATE_TITLE = new RegExp(`^(\\d{1,2}\\s+(?:${MONTHS})\\s+\\d{4})\\s*[—–-]\\s*(.+)$`);
const STEP_HEADING = /^Step\s+(\d+)\s*[—–:-]\s*(.+)$/i;

export function toBlocks(sections: BlogSection[]): Block[] {
  const blocks: Block[] = [];
  let n = 0;
  // How many separate "Step N —" runs the article has (used to name them clearly).
  let stepRuns = 0;
  sections.forEach((s, i) => {
    const isStep = (x?: BlogSection) => !!x && x.type === "text" && STEP_HEADING.test(x.heading || "");
    if (isStep(s) && !isStep(sections[i - 1])) stepRuns++;
  });
  const nextId = () => `section-${++n}`;

  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];

    // Consecutive "Step 1 — …", "Step 2 — …" text sections become one numbered step guide.
    if (s.type === "text" && s.heading && STEP_HEADING.test(s.heading)) {
      const steps: { num: number; title: string; paragraphs: string[] }[] = [];
      while (i < sections.length && sections[i].type === "text" && STEP_HEADING.test(sections[i].heading || "")) {
        const m = (sections[i].heading || "").match(STEP_HEADING)!;
        steps.push({ num: Number(m[1]), title: m[2], paragraphs: toParagraphs(sections[i].body) });
        i++;
      }
      i--;
      const first = steps[0].num;
      const last = steps[steps.length - 1].num;
      const heading =
        stepRuns <= 1 ? "Step-by-Step Process" : first === last ? `Step ${first}` : `Steps ${first}–${last}`;
      blocks.push({ kind: "steps", id: nextId(), heading, steps });
      continue;
    }

    if (s.type === "text") {
      blocks.push({ kind: "text", id: nextId(), heading: s.heading, paragraphs: toParagraphs(s.body) });
    } else if (s.type === "checklist") {
      const items = (s.items as string[] | undefined) ?? [];
      const rows = asTableRows(items);
      blocks.push(rows ? { kind: "table", id: nextId(), heading: s.heading, rows } : { kind: "list", id: nextId(), heading: s.heading, items });
    } else if (s.type === "numbered") {
      const items = ((s.items as Item[] | undefined) ?? []).filter((x) => x && typeof x === "object");
      const faq = items.filter((x) => x.title.trim().endsWith("?")).length / Math.max(items.length, 1) >= 0.6;
      const dated = items.filter((x) => DATE_TITLE.test(x.title)).length / Math.max(items.length, 1) >= 0.6;
      if (faq) {
        blocks.push({ kind: "faq", id: nextId(), heading: s.heading, items });
      } else if (dated) {
        blocks.push({
          kind: "timeline",
          id: nextId(),
          heading: s.heading,
          events: items.map((x) => {
            const m = x.title.match(DATE_TITLE);
            return m ? { date: m[1], title: m[2], body: x.body } : { date: "", title: x.title, body: x.body };
          }),
        });
      } else {
        blocks.push({
          kind: "steps",
          id: nextId(),
          heading: s.heading,
          steps: items.map((x, j) => ({ num: j + 1, title: x.title, paragraphs: toParagraphs(x.body) })),
        });
      }
    } else if (s.type === "alert") {
      blocks.push({ kind: "callout", id: nextId(), heading: s.heading, body: s.body || "" });
    } else if (s.type === "cta") {
      blocks.push({ kind: "cta", id: nextId(), heading: s.heading, body: s.body || "" });
    }
  }
  return blocks;
}
