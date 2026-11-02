"use client";

import { useRef, useState } from "react";
import { CheckCircle, Loader2, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { REVIEW_SERVICES } from "@/lib/reviews/data";

type Status = "idle" | "sending" | "sent" | "failed";
const LABELS = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];

export function ReviewForm() {
  const startedAt = useRef(Date.now());
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", service: "", text: "", website: "" });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((errs) => errs.filter((x) => x !== k));
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: string[] = [];
    if (!rating) errs.push("rating");
    if (form.name.trim().length < 2) errs.push("name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errs.push("email");
    if (form.text.trim().length < 20) errs.push("text");
    if (/https?:\/\/|www\./i.test(form.text)) errs.push("text");
    if (!consent) errs.push("consent");
    setErrors(errs);
    if (errs.length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, rating, consent, startedAt: startedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        if (Array.isArray(data?.fields)) setErrors(data.fields);
        setStatus(data?.error === "validation" ? "idle" : "failed");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-10 px-4">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">Thank you for your review</h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          We read every review before it goes live, so it will appear on this page shortly.
        </p>
      </div>
    );
  }

  const err = (k: string) => errors.includes(k);
  const shown = hover || rating;
  const fieldClass = "h-11 bg-background";

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <fieldset>
        <legend className="text-sm font-medium text-foreground mb-2">Your rating</legend>
        <div className="flex items-center gap-3">
          <div className="flex gap-1" onMouseLeave={() => setHover(0)} role="radiogroup" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={rating === n}
                aria-label={`${n} star${n > 1 ? "s" : ""}`}
                onMouseEnter={() => setHover(n)}
                onFocus={() => setHover(n)}
                onBlur={() => setHover(0)}
                onClick={() => { setRating(n); setErrors((e) => e.filter((x) => x !== "rating")); }}
                className="p-0.5 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <Star className={`w-8 h-8 transition-colors ${n <= shown ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}`} />
              </button>
            ))}
          </div>
          <span className="text-sm text-muted-foreground min-w-20">{LABELS[shown]}</span>
        </div>
        {err("rating") && <p className="text-xs text-destructive mt-1.5">Please choose a rating.</p>}
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rv-name" className="text-sm font-medium text-foreground block mb-1.5">Your name</label>
          <Input id="rv-name" value={form.name} onChange={set("name")} autoComplete="name" maxLength={60} placeholder="e.g. Ahmed K." aria-invalid={err("name")} className={fieldClass} />
          <p className="text-xs text-muted-foreground mt-1">Shown with your review. A first name and initial is fine.</p>
          {err("name") && <p className="text-xs text-destructive mt-1">Please enter your name.</p>}
        </div>
        <div>
          <label htmlFor="rv-email" className="text-sm font-medium text-foreground block mb-1.5">Email</label>
          <Input id="rv-email" type="email" value={form.email} onChange={set("email")} autoComplete="email" inputMode="email" placeholder="you@company.com" aria-invalid={err("email")} className={fieldClass} />
          <p className="text-xs text-muted-foreground mt-1">Never shown. Only used to confirm you&apos;re a client.</p>
          {err("email") && <p className="text-xs text-destructive mt-1">Please enter a valid email.</p>}
        </div>
      </div>

      <div>
        <label htmlFor="rv-service" className="text-sm font-medium text-foreground block mb-1.5">Service you used <span className="text-muted-foreground font-normal">(optional)</span></label>
        <select id="rv-service" value={form.service} onChange={set("service")}
          className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <option value="">Select a service</option>
          {REVIEW_SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="rv-text" className="text-sm font-medium text-foreground block mb-1.5">Your review</label>
        <Textarea id="rv-text" value={form.text} onChange={set("text")} rows={5} maxLength={1200}
          placeholder="What did we help you with, and how was the experience?" aria-invalid={err("text")} className="bg-background" />
        <div className="flex justify-between mt-1">
          {err("text")
            ? <p className="text-xs text-destructive">Please write at least 20 characters, without links.</p>
            : <span />}
          <span className="text-xs text-muted-foreground tabular-nums">{form.text.length}/1200</span>
        </div>
      </div>

      {/* Spam trap — hidden from people */}
      <input name="website" value={form.website} onChange={set("website")} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />

      <label className="flex items-start gap-2.5 text-sm text-muted-foreground cursor-pointer">
        <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); setErrors((x) => x.filter((k) => k !== "consent")); }}
          className="mt-0.5 w-4 h-4 accent-[#1B2B5B] shrink-0" />
        <span>I am a client of Marifah Tax Advisory and agree that my name, rating and review may be shown on this website.</span>
      </label>
      {err("consent") && <p className="text-xs text-destructive -mt-3">Please confirm to submit your review.</p>}

      {status === "failed" && (
        <p className="text-sm text-destructive">We couldn&apos;t send your review just now. Please try again, or email it to info@marifahtax.com.</p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 w-full sm:w-auto">
        {status === "sending" && <Loader2 className="w-4 h-4 animate-spin" />}
        Submit review
      </button>
    </form>
  );
}
