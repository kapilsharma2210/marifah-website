"use client";

import { useEffect, useState } from "react";
import { FileText, Lock, Minus, Plus, Trash2, ShieldCheck, CreditCard, Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AddToCartButton } from "./add-to-cart-button";
import { useCart } from "./use-cart";
import { CT_REGISTRATION_ID, EMIRATES, MAX_QTY, PRODUCTS, formatPrice } from "@/lib/checkout/products";

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const RAZORPAY_SRC = "https://checkout.razorpay.com/v1/checkout.js";
const DETAILS_KEY = "marifah_checkout_details_v1";
const BRAND_COLOR = "#e6ad00";

type Details = { name: string; company: string; email: string; phone: string; emirate: string };
type FieldErrors = Partial<Record<keyof Details, string>>;
type Status = "idle" | "creating" | "paying" | "verifying";

const EMPTY_DETAILS: Details = { name: "", company: "", email: "", phone: "", emirate: "" };

function loadRazorpay(): Promise<boolean> {
  if (typeof window === "undefined") return Promise.resolve(false);
  if (window.Razorpay) return Promise.resolve(true);
  return new Promise((resolve) => {
    let script = document.querySelector<HTMLScriptElement>(`script[src="${RAZORPAY_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = RAZORPAY_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", () => resolve(!!window.Razorpay));
    script.addEventListener("error", () => resolve(false));
    if (window.Razorpay) resolve(true);
  });
}

function validate(d: Details): FieldErrors {
  const e: FieldErrors = {};
  if (d.name.trim().length < 2) e.name = "Please enter your full name.";
  if (d.company.trim().length < 2) e.company = "Please enter your company / trade name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) e.email = "Please enter a valid email address.";
  if (d.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
  return e;
}

export function CartCheckout() {
  const { items, total, lines, setQty, remove, clear } = useCart();
  const [details, setDetails] = useState<Details>(EMPTY_DETAILS);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Restore details typed earlier in this browser, and preload Razorpay.
  useEffect(() => {
    setMounted(true);
    try {
      const saved = JSON.parse(window.localStorage.getItem(DETAILS_KEY) || "null");
      if (saved && typeof saved === "object") setDetails({ ...EMPTY_DETAILS, ...saved });
    } catch {
      /* ignore */
    }
    loadRazorpay();
  }, []);

  const update = (key: keyof Details, value: string) => {
    const next = { ...details, [key]: value };
    setDetails(next);
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    try {
      window.localStorage.setItem(DETAILS_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const busy = status !== "idle";

  async function pay() {
    setError(null);
    const fieldErrors = validate(details);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length) {
      document.getElementById(`field-${Object.keys(fieldErrors)[0]}`)?.focus();
      return;
    }

    setStatus("creating");
    let order: any;
    try {
      const res = await fetch("/api/checkout/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: lines, customer: details }),
      });
      order = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (order?.fields) setErrors(order.fields);
        throw new Error(order?.error || "We couldn't start the payment. Please try again.");
      }
    } catch (err) {
      setError((err as Error).message || "We couldn't start the payment. Please try again.");
      setStatus("idle");
      return;
    }

    const ready = await loadRazorpay();
    if (!ready) {
      setError("The secure payment window couldn't load. Please check your connection and try again.");
      setStatus("idle");
      return;
    }

    setStatus("paying");
    const rzp = new window.Razorpay({
      key: order.keyId,
      order_id: order.orderId,
      amount: order.amount,
      currency: order.currency,
      name: "Marifah Tax Advisory",
      description: order.description,
      image: `${window.location.origin}/icon.png`,
      prefill: order.prefill,
      notes: order.notes,
      theme: { color: BRAND_COLOR },
      // Show credit / debit cards only.
      config: {
        display: {
          blocks: {
            cards: { name: "Pay with credit / debit card", instruments: [{ method: "card" }] },
          },
          sequence: ["block.cards"],
          preferences: { show_default_blocks: false },
        },
      },
      modal: {
        confirm_close: true,
        ondismiss: () => setStatus("idle"),
      },
      handler: async (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => {
        setStatus("verifying");
        try {
          const res = await fetch("/api/checkout/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok || !data?.token) throw new Error(data?.error || "verify failed");
          clear();
          try {
            window.localStorage.removeItem(DETAILS_KEY);
          } catch {
            /* ignore */
          }
          window.location.href = `/checkout/success?order=${encodeURIComponent(data.orderId)}&t=${encodeURIComponent(data.token)}`;
        } catch {
          clear();
          setStatus("idle");
          setError(
            `Your payment went through (payment ID ${response.razorpay_payment_id}), but we couldn't confirm it automatically. Please don't pay again — send us this payment ID on WhatsApp (+971505815245) or email info@marifahtax.com and we'll take it from here.`
          );
        }
      },
    });
    rzp.on("payment.failed", (resp: any) => {
      setError(
        `Payment failed: ${resp?.error?.description || "your card was declined"}. You can try again with the same or a different card.`
      );
    });
    rzp.open();
  }

  if (!mounted) {
    return (
      <PageFrame>
        <div className="h-72 rounded-2xl border border-primary/10 bg-card animate-pulse" />
      </PageFrame>
    );
  }

  // ── Empty cart ──
  if (!items.length && !error) {
    const p = PRODUCTS[CT_REGISTRATION_ID];
    return (
      <PageFrame>
        <div className="max-w-xl mx-auto text-center rounded-2xl border border-primary/20 bg-card p-8 sm:p-10">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-sm text-muted-foreground mb-7">
            Register your business for UAE Corporate Tax online — {formatPrice(p.price)}, paid securely by card.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <AddToCartButton label={`Add ${p.name}`} />
            <a href="/services/corporate-tax" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors">
              View service details
            </a>
          </div>
        </div>
      </PageFrame>
    );
  }

  return (
    <PageFrame>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-6 lg:gap-8 items-start">
        {/* LEFT: cart + details */}
        <div className="space-y-6 min-w-0">
          <section className="rounded-2xl border border-primary/20 bg-card">
            <h2 className="text-xs font-bold tracking-widest uppercase text-primary px-5 sm:px-6 pt-5">Your cart</h2>
            <ul className="divide-y divide-primary/10">
              {items.map((item) => (
                <li key={item.id} className="px-5 sm:px-6 py-5 flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
                      <span className="text-base font-bold text-foreground tabular-nums">{formatPrice(item.lineTotal)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <div className="inline-flex items-center rounded-full border border-primary/25">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          disabled={busy || item.qty <= 1}
                          onClick={() => setQty(item.id, item.qty - 1)}
                          className="w-9 h-9 flex items-center justify-center text-primary disabled:opacity-30 hover:bg-primary/10 rounded-l-full"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold tabular-nums" aria-live="polite">{item.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          disabled={busy || item.qty >= MAX_QTY}
                          onClick={() => setQty(item.id, item.qty + 1)}
                          className="w-9 h-9 flex items-center justify-center text-primary disabled:opacity-30 hover:bg-primary/10 rounded-r-full"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {item.qty > 1 ? `${item.qty} companies × ${formatPrice(item.price)}` : "1 company"}
                      </span>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => remove(item.id)}
                        className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-primary/20 bg-card p-5 sm:p-6">
            <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-1">Your details</h2>
            <p className="text-sm text-muted-foreground mb-5">We&apos;ll use these to contact you about your registration.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field id="name" label="Full name" error={errors.name}>
                <Input id="field-name" autoComplete="name" value={details.name} onChange={(e) => update("name", e.target.value)} disabled={busy} aria-invalid={!!errors.name} className="h-11 bg-background" placeholder="e.g. Ahmed Khan" />
              </Field>
              <Field id="company" label="Company / trade name" error={errors.company}>
                <Input id="field-company" autoComplete="organization" value={details.company} onChange={(e) => update("company", e.target.value)} disabled={busy} aria-invalid={!!errors.company} className="h-11 bg-background" placeholder="As on your trade license" />
              </Field>
              <Field id="email" label="Email address" error={errors.email}>
                <Input id="field-email" type="email" autoComplete="email" inputMode="email" value={details.email} onChange={(e) => update("email", e.target.value)} disabled={busy} aria-invalid={!!errors.email} className="h-11 bg-background" placeholder="you@company.com" />
              </Field>
              <Field id="phone" label="Phone / WhatsApp" error={errors.phone}>
                <Input id="field-phone" type="tel" autoComplete="tel" inputMode="tel" value={details.phone} onChange={(e) => update("phone", e.target.value)} disabled={busy} aria-invalid={!!errors.phone} className="h-11 bg-background" placeholder="+971 50 123 4567" />
              </Field>
              <Field id="emirate" label="Emirate" optional>
                <select
                  id="field-emirate"
                  value={details.emirate}
                  onChange={(e) => update("emirate", e.target.value)}
                  disabled={busy}
                  className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  <option value="">Select emirate</option>
                  {EMIRATES.map((em) => (
                    <option key={em} value={em}>
                      {em}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </section>
        </div>

        {/* RIGHT: summary + pay */}
        <aside className="rounded-2xl border-2 border-primary/60 bg-card p-5 sm:p-6 lg:sticky lg:top-24">
          <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Order summary</h2>
          <div className="space-y-3 text-sm">
            {items.map((i) => (
              <div key={i.id} className="flex justify-between gap-4">
                <span className="text-muted-foreground">
                  {i.name}
                  {i.qty > 1 ? ` × ${i.qty}` : ""}
                </span>
                <span className="text-foreground font-medium tabular-nums whitespace-nowrap">{formatPrice(i.lineTotal)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-primary/15 mt-4 pt-4 flex items-baseline justify-between">
            <span className="text-foreground font-semibold">Total</span>
            <span className="text-2xl font-bold text-primary tabular-nums">{formatPrice(total)}</span>
          </div>

          {error && (
            <div role="alert" className="mt-5 flex gap-2.5 rounded-xl border border-destructive/40 bg-destructive/10 p-3.5 text-sm text-foreground">
              <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="button"
            onClick={pay}
            disabled={busy || !items.length}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 text-base font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
            {status === "creating"
              ? "Starting secure payment…"
              : status === "paying"
                ? "Complete payment in the window…"
                : status === "verifying"
                  ? "Confirming payment…"
                  : `Pay ${formatPrice(total)} securely`}
          </button>

          <div className="mt-4 space-y-2.5 text-xs text-muted-foreground">
            <p className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-primary shrink-0" /> Credit &amp; debit cards — Visa, Mastercard
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" /> Secure checkout by Razorpay. We never see your card number.
            </p>
            <p className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary shrink-0" /> After payment you can upload your documents (optional).
            </p>
          </div>
        </aside>
      </div>
    </PageFrame>
  );
}

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-card border-b border-primary/10 py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <a href="/packages" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-5">
            <ArrowLeft className="w-4 h-4" /> Continue browsing
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Checkout</h1>
          <div className="w-16 h-1 bg-primary rounded-full mb-6" />
          <Steps current={1} />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">{children}</div>
    </>
  );
}

export function Steps({ current }: { current: 1 | 2 | 3 }) {
  const steps = ["Cart & details", "Secure payment", "Documents (optional)"];
  return (
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm">
      {steps.map((label, i) => {
        const n = i + 1;
        const active = n === current;
        const done = n < current;
        return (
          <li key={label} className="flex items-center gap-3">
            <span className={`flex items-center gap-2 ${active ? "text-foreground font-semibold" : done ? "text-primary" : "text-muted-foreground"}`}>
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold border ${
                  active ? "bg-primary text-primary-foreground border-primary" : done ? "border-primary text-primary" : "border-border text-muted-foreground"
                }`}
              >
                {done ? "✓" : n}
              </span>
              {label}
            </span>
            {n < steps.length && <span className="w-6 h-px bg-border" aria-hidden />}
          </li>
        );
      })}
    </ol>
  );
}

function Field({ id, label, error, optional, children }: { id: string; label: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div className={id === "emirate" ? "sm:col-span-2 sm:max-w-[calc(50%-0.5rem)]" : ""}>
      <label htmlFor={`field-${id}`} className="block text-sm font-medium text-foreground mb-1.5">
        {label} {optional ? <span className="text-muted-foreground font-normal">(optional)</span> : <span className="text-primary">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-destructive mt-1.5">{error}</p>}
    </div>
  );
}
