// Receives enquiries from the website forms and emails them to info@marifahtax.com
// (or whatever NOTIFY_EMAIL is set to in Vercel), using the same Resend setup as the
// payment emails. Replying to the email goes straight to the client.

import { NextRequest, NextResponse } from "next/server";
import { emailLayout, escapeHtml, sendEmail } from "@/lib/checkout/server/email";

export const runtime = "nodejs";

function clean(value: unknown, max: number, keepNewlines = false) {
  const s = String(value ?? "");
  const stripped = keepNewlines ? s.replace(/[^\S\n]+/g, " ").replace(/\n{3,}/g, "\n\n") : s.replace(/\s+/g, " ");
  return stripped.replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, "").trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  // Spam trap: bots fill every field, people never see this one.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 100);
  const company = clean(body.company, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const service = clean(body.service, 80) || "General enquiry";
  const contactBy = clean(body.contactBy, 20);
  const message = clean(body.message, 3000, true);
  const source = clean(body.source, 80) || "Website form";

  const fields: string[] = [];
  if (!name) fields.push("name");
  if (phone.replace(/\D/g, "").length < 7) fields.push("phone");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) fields.push("email");
  if (fields.length) return NextResponse.json({ ok: false, error: "validation", fields }, { status: 400 });

  const submitted =
    new Date().toLocaleString("en-GB", { timeZone: "Asia/Dubai", dateStyle: "medium", timeStyle: "short" }) + " (UAE time)";
  const waDigits = phone.replace(/\D/g, "").replace(/^00/, "");

  const actions =
    `<div style="margin-top:18px">` +
    (waDigits.length >= 8
      ? `<a href="https://wa.me/${waDigits}" style="display:inline-block;background:#1B2B5B;color:#fff;text-decoration:none;padding:10px 16px;border-radius:999px;font-size:13px;font-weight:bold;margin-right:8px">WhatsApp ${escapeHtml(name.split(" ")[0])}</a>`
      : "") +
    `<a href="mailto:${escapeHtml(email)}" style="display:inline-block;border:1px solid #1B2B5B;color:#1B2B5B;text-decoration:none;padding:9px 16px;border-radius:999px;font-size:13px;font-weight:bold">Email ${escapeHtml(name.split(" ")[0])}</a>` +
    `</div>`;
  const messageHtml = message
    ? `<h2 style="margin:22px 0 8px;font-size:15px;color:#111">Message</h2>` +
      `<div style="background:#f8f5ee;border-left:3px solid #B8913A;padding:12px 14px;color:#222;font-size:14px;line-height:1.55;white-space:pre-wrap">${escapeHtml(message)}</div>`
    : "";

  const { html, text } = emailLayout({
    heading: `New enquiry: ${service}`,
    intro: `${name} sent this through the ${source} on marifahtax.com. Reply to this email to answer them directly.`,
    rows: [
      ["Name", name],
      ["Company", company],
      ["Mobile / WhatsApp", phone],
      ["Email", email],
      ["Service", service],
      ["Prefers", contactBy],
      ["Received", submitted],
      ["Form", source],
    ],
    extraHtml: messageHtml + actions,
  });

  const emailed = await sendEmail({
    subject: `New website enquiry: ${name} (${service})`,
    html,
    text: message ? `${text}\n\nMessage:\n${message}` : text,
    replyTo: email,
  });

  if (!emailed) return NextResponse.json({ ok: false, error: "email_unavailable" }, { status: 503 });
  return NextResponse.json({ ok: true });
}
