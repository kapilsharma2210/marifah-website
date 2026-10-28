"use client";

import { uploadPresigned } from "@vercel/blob/client";
import { useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, FileUp, Loader2, Mail, MessageCircle, Paperclip, X, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  ALLOWED_DOCUMENT_TYPES,
  DOCUMENT_ACCEPT,
  DOCUMENT_TYPES,
  MAX_DOCUMENT_MB,
  MAX_FILES_PER_TYPE,
  type DocumentTypeKey,
} from "@/lib/checkout/documents";
import { Steps } from "./cart-checkout";

const OFFICE_EMAIL = "info@marifahtax.com";
const WHATSAPP = "971505815245";

type OrderInfo = {
  orderId: string;
  amount?: string;
  services?: string;
  customer: { name: string; company: string; email: string; phone: string } | null;
};

type Pending = {
  id: string;
  docType: DocumentTypeKey;
  file: File;
  status: "ready" | "uploading" | "done" | "error";
  progress: number;
  pathname?: string;
};

type Phase = "form" | "submitting" | "done" | "skipped";

const EXT_OK = /\.(pdf|jpe?g|png|webp|heic|heif|docx?)$/i;

function formatSize(bytes: number) {
  return bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function safeName(name: string) {
  const cleaned = name.normalize("NFKD").replace(/[^A-Za-z0-9._-]+/g, "_").replace(/_+/g, "_");
  return (cleaned.length > 80 ? cleaned.slice(-80) : cleaned) || "document";
}

export function OrderDocuments({ orderId, token }: { orderId: string; token: string }) {
  const [info, setInfo] = useState<OrderInfo | null>(null);
  const [invalid, setInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [files, setFiles] = useState<Pending[]>([]);
  const [typeErrors, setTypeErrors] = useState<Partial<Record<DocumentTypeKey, string>>>({});
  const [phase, setPhase] = useState<Phase>("form");
  const [error, setError] = useState<string | null>(null);
  const counter = useRef(0);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/orders/details?order=${encodeURIComponent(orderId)}&t=${encodeURIComponent(token)}`, { cache: "no-store" })
      .then(async (res) => {
        if (res.status === 400 || res.status === 403) {
          if (!cancelled) setInvalid(true);
          return;
        }
        const data: OrderInfo = await res.json();
        if (cancelled) return;
        setInfo(data);
        if (data.customer) {
          setEmail((e) => e || data.customer!.email);
          setPhone((p) => p || data.customer!.phone);
        }
      })
      .catch(() => !cancelled && setInfo({ orderId, customer: null }));
    return () => {
      cancelled = true;
    };
  }, [orderId, token]);

  const addFiles = (docType: DocumentTypeKey, list: FileList | null) => {
    if (!list?.length) return;
    const existing = files.filter((f) => f.docType === docType).length;
    const incoming = Array.from(list);
    const accepted: Pending[] = [];
    let problem = "";
    for (const file of incoming) {
      if (existing + accepted.length >= MAX_FILES_PER_TYPE) {
        problem = `You can add up to ${MAX_FILES_PER_TYPE} files here.`;
        break;
      }
      const typeOk = ALLOWED_DOCUMENT_TYPES.includes(file.type) || (!file.type && EXT_OK.test(file.name));
      if (!typeOk) {
        problem = `"${file.name}" isn't a supported file. Please use PDF, JPG, PNG or Word.`;
        continue;
      }
      if (file.size > MAX_DOCUMENT_MB * 1024 * 1024) {
        problem = `"${file.name}" is larger than ${MAX_DOCUMENT_MB} MB. Please email it to ${OFFICE_EMAIL} instead.`;
        continue;
      }
      accepted.push({ id: `f${counter.current++}`, docType, file, status: "ready", progress: 0 });
    }
    setTypeErrors((prev) => ({ ...prev, [docType]: problem || undefined }));
    if (accepted.length) setFiles((prev) => [...prev, ...accepted]);
  };

  const removeFile = (id: string) => setFiles((prev) => prev.filter((f) => f.id !== id));

  const patch = (id: string, changes: Partial<Pending>) =>
    setFiles((prev) => prev.map((f) => (f.id === id ? { ...f, ...changes } : f)));

  async function submit() {
    setError(null);
    if (!files.length) {
      setError("Please choose at least one document — or use “I’ll email them later”.");
      return;
    }
    setPhase("submitting");

    const uploaded: { docType: string; pathname: string; name: string }[] = [];
    let failed = 0;
    for (const f of files) {
      if (f.status === "done" && f.pathname) {
        uploaded.push({ docType: f.docType, pathname: f.pathname, name: f.file.name });
        continue;
      }
      patch(f.id, { status: "uploading", progress: 0 });
      try {
        const blob = await uploadPresigned(`orders/${orderId}/${f.docType}/${safeName(f.file.name)}`, f.file, {
          access: "private",
          handleUploadUrl: "/api/documents/upload",
          clientPayload: JSON.stringify({ orderId, token, docType: f.docType }),
          ...(f.file.type ? { contentType: f.file.type } : {}),
          onUploadProgress: ({ percentage }) => patch(f.id, { progress: Math.round(percentage) }),
        });
        patch(f.id, { status: "done", progress: 100, pathname: blob.pathname });
        uploaded.push({ docType: f.docType, pathname: blob.pathname, name: f.file.name });
      } catch (err) {
        console.error("upload failed", err);
        failed++;
        patch(f.id, { status: "error" });
      }
    }

    if (!uploaded.length) {
      setPhase("form");
      setError(`We couldn't upload your files right now. Please try again, or email them to ${OFFICE_EMAIL} with your order reference ${orderId}.`);
      return;
    }

    try {
      const res = await fetch("/api/documents/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, token, email, phone, files: uploaded }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error || "submit failed");
    } catch {
      setPhase("form");
      setError(`Your files were uploaded but we couldn't finish. Please press “Submit documents” again.`);
      return;
    }

    if (failed) {
      setPhase("form");
      setFiles((prev) => prev.filter((f) => f.status !== "done"));
      setError(`${uploaded.length} file(s) received. ${failed} file(s) couldn't be uploaded — try again below or email them to ${OFFICE_EMAIL}.`);
      return;
    }
    setPhase("done");
  }

  const firstName = info?.customer?.name?.split(" ")[0];
  const busy = phase === "submitting";

  if (invalid) {
    return (
      <Frame>
        <div className="max-w-xl mx-auto rounded-2xl border border-primary/20 bg-card p-8 text-center">
          <AlertCircle className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">This link isn&apos;t valid</h2>
          <p className="text-sm text-muted-foreground">
            If you&apos;ve paid and need to send documents, email them to{" "}
            <a className="text-primary" href={`mailto:${OFFICE_EMAIL}`}>{OFFICE_EMAIL}</a> or WhatsApp us on +{WHATSAPP}.
          </p>
        </div>
      </Frame>
    );
  }

  return (
    <Frame>
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Payment confirmation */}
        <section className="rounded-2xl border-2 border-primary/60 bg-card p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl font-bold text-foreground">Payment successful</h2>
              <p className="text-muted-foreground mt-1">
                Thank you{firstName ? `, ${firstName}` : ""}. Your {info?.services || "Corporate Tax Registration"} order is confirmed.
              </p>
              <dl className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <div>
                  <dt className="text-muted-foreground text-xs uppercase tracking-wider">Order reference</dt>
                  <dd className="text-foreground font-mono text-sm break-all">{orderId}</dd>
                </div>
                {info?.amount && (
                  <div>
                    <dt className="text-muted-foreground text-xs uppercase tracking-wider">Amount paid</dt>
                    <dd className="text-foreground font-semibold">{info.amount}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </section>

        {phase === "done" ? (
          <section className="rounded-2xl border border-primary/20 bg-card p-6 sm:p-8 text-center">
            <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
            <h2 className="text-xl font-bold text-foreground mb-2">Documents received</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Thank you. Our team will review your documents and contact you{phone ? ` on ${phone}` : ""}{email ? ` or ${email}` : ""} within one working day.
            </p>
            <a href="/" className="inline-flex mt-6 items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90">
              Back to home
            </a>
          </section>
        ) : phase === "skipped" ? (
          <section className="rounded-2xl border border-primary/20 bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground mb-2">No problem — send them when you&apos;re ready</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Email your Trade License, Passport, Emirates ID and MOA to us and mention your order reference <span className="font-mono text-foreground">{orderId}</span>. Our team will also reach out to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${OFFICE_EMAIL}?subject=${encodeURIComponent(`Documents for order ${orderId}`)}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90"
              >
                <Mail className="w-4 h-4" /> Email {OFFICE_EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello, I paid for Corporate Tax Registration (order ${orderId}). Sending my documents.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary/10"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <button type="button" onClick={() => setPhase("form")} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm text-muted-foreground hover:text-primary">
                <Upload className="w-4 h-4" /> Upload here instead
              </button>
            </div>
          </section>
        ) : (
          <section className="rounded-2xl border border-primary/20 bg-card p-5 sm:p-8">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Next step · Optional</p>
            <h2 className="text-xl font-bold text-foreground mb-2">Upload your documents</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Upload what you have now — every document is optional. You can also email them to{" "}
              <a className="text-primary" href={`mailto:${OFFICE_EMAIL}`}>{OFFICE_EMAIL}</a> later. PDF, JPG, PNG or Word, up to {MAX_DOCUMENT_MB} MB each.
            </p>

            <div className="space-y-3">
              {DOCUMENT_TYPES.map((doc) => {
                const mine = files.filter((f) => f.docType === doc.key);
                return (
                  <div key={doc.key} className="rounded-xl border border-primary/15 bg-background/40 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          {doc.label} <span className="text-muted-foreground font-normal">(optional)</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{doc.hint}</p>
                      </div>
                      <label
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 text-primary text-xs font-semibold cursor-pointer hover:bg-primary/10 transition-colors ${busy ? "pointer-events-none opacity-50" : ""}`}
                      >
                        <FileUp className="w-4 h-4" />
                        {mine.length ? "Add more" : "Choose file"}
                        <input
                          type="file"
                          multiple
                          accept={DOCUMENT_ACCEPT}
                          className="sr-only"
                          disabled={busy}
                          onChange={(e) => {
                            addFiles(doc.key, e.target.files);
                            e.target.value = "";
                          }}
                        />
                      </label>
                    </div>
                    {mine.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {mine.map((f) => (
                          <li key={f.id} className="flex items-center gap-3 rounded-lg bg-card border border-primary/10 px-3 py-2 text-sm">
                            <Paperclip className="w-4 h-4 text-primary shrink-0" />
                            <span className="truncate flex-1 min-w-0 text-foreground">{f.file.name}</span>
                            <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
                              {f.status === "uploading" ? `${f.progress}%` : f.status === "done" ? "Uploaded" : f.status === "error" ? "Failed" : formatSize(f.file.size)}
                            </span>
                            {f.status === "uploading" ? (
                              <Loader2 className="w-4 h-4 animate-spin text-primary shrink-0" />
                            ) : f.status === "done" ? (
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            ) : (
                              <button type="button" aria-label={`Remove ${f.file.name}`} disabled={busy} onClick={() => removeFile(f.id)} className="text-muted-foreground hover:text-destructive shrink-0">
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    {typeErrors[doc.key] && <p className="text-xs text-destructive mt-2">{typeErrors[doc.key]}</p>}
                  </div>
                );
              })}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div>
                <label htmlFor="doc-email" className="block text-sm font-medium text-foreground mb-1.5">Email address</label>
                <Input id="doc-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={busy} className="h-11 bg-background" placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="doc-phone" className="block text-sm font-medium text-foreground mb-1.5">Contact number</label>
                <Input id="doc-phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={busy} className="h-11 bg-background" placeholder="+971 50 123 4567" />
              </div>
            </div>

            {error && (
              <div role="alert" className="mt-5 flex gap-2.5 rounded-xl border border-destructive/40 bg-destructive/10 p-3.5 text-sm text-foreground">
                <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={submit}
                disabled={busy}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-60"
              >
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                {busy ? "Uploading…" : "Submit documents"}
              </button>
              <button
                type="button"
                onClick={() => setPhase("skipped")}
                disabled={busy}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary text-sm font-semibold hover:bg-primary/10 disabled:opacity-60"
              >
                I&apos;ll email them later
              </button>
            </div>
          </section>
        )}
      </div>
    </Frame>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-card border-b border-primary/10 py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Order confirmed</h1>
          <div className="w-16 h-1 bg-primary rounded-full mb-6" />
          <Steps current={3} />
        </div>
      </div>
      <div className="px-4 sm:px-6 py-10 sm:py-12">{children}</div>
    </>
  );
}
