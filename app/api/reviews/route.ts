// Receives a review from the form on /reviews. The review is stored as "pending" and
// emailed to you with Approve / Reject links — nothing appears on the site until you approve it.
import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { emailLayout, escapeHtml, sendEmail } from "@/lib/checkout/server/email";
import { signReviewAction } from "@/lib/checkout/server/tokens";
import { REVIEW_SERVICES } from "@/lib/reviews/data";
import { savePendingReview } from "@/lib/reviews/server";

export const runtime = "nodejs";

const SITE = "https://www.marifahtax.com";

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

  // Spam traps: a hidden field people never fill, and forms sent in under 3 seconds.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });
  const startedAt = Number(body.startedAt);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 3000) return NextResponse.json({ ok: true });

  const name = clean(body.name, 60);
  const email = clean(body.email, 160);
  const rating = Math.round(Number(body.rating));
  const serviceRaw = clean(body.service, 60);
  const service = (REVIEW_SERVICES as readonly string[]).includes(serviceRaw) && serviceRaw !== "Other" ? serviceRaw : undefined;
  const text = clean(body.text, 1200, true);
  const consent = body.consent === true;

  const fields: string[] = [];
  if (name.length < 2) fields.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) fields.push("email");
  if (!(rating >= 1 && rating <= 5)) fields.push("rating");
  if (text.length < 20) fields.push("text");
  if (!consent) fields.push("consent");
  if (/https?:\/\/|www\./i.test(text)) fields.push("text");
  if (fields.length) return NextResponse.json({ ok: false, error: "validation", fields }, { status: 400 });

  const now = new Date();
  const id = `${now.toISOString().slice(0, 10).replace(/-/g, "")}-${crypto.randomBytes(5).toString("hex")}`;
  const review = { id, name, email, rating, text, service, date: now.toISOString().slice(0, 10), submittedAt: now.toISOString() };

  try {
    await savePendingReview(review);
  } catch (err) {
    console.error("[reviews] could not save review", err);
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  const link = (action: "approve" | "reject") =>
    `${SITE}/reviews/moderate?id=${id}&a=${action}&s=${signReviewAction(id, action)}`;
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  const { html, text: plain } = emailLayout({
    heading: `New review: ${stars}`,
    intro: `${name} left a review on marifahtax.com. It is not visible on the website until you approve it.`,
    rows: [
      ["Name", name],
      ["Email (not shown)", email],
      ["Rating", `${rating} / 5`],
      ["Service", service ?? ""],
    ],
    extraHtml:
      `<div style="margin-top:18px;background:#f8f5ee;border-left:3px solid #B8913A;padding:12px 14px;color:#222;font-size:14px;line-height:1.55;white-space:pre-wrap">${escapeHtml(text)}</div>` +
      `<div style="margin-top:20px">` +
      `<a href="${link("approve")}" style="display:inline-block;background:#1B2B5B;color:#fff;text-decoration:none;padding:10px 18px;border-radius:999px;font-size:13px;font-weight:bold;margin-right:8px">Approve &amp; publish</a>` +
      `<a href="${link("reject")}" style="display:inline-block;border:1px solid #1B2B5B;color:#1B2B5B;text-decoration:none;padding:9px 18px;border-radius:999px;font-size:13px;font-weight:bold">Reject</a>` +
      `</div>`,
  });
  await sendEmail({
    subject: `New ${rating}-star review from ${name}`,
    html,
    text: `${plain}\n\nReview:\n${text}\n\nApprove: ${link("approve")}\nReject: ${link("reject")}`,
    replyTo: email,
  });

  return NextResponse.json({ ok: true });
}
