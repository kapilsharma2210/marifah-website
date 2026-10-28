import { get } from "@vercel/blob";
import { NextResponse } from "next/server";
import { DOCUMENT_KEYS, documentLabel } from "@/lib/checkout/documents";
import { emailLayout, escapeHtml, sendEmail, type EmailAttachment } from "@/lib/checkout/server/email";
import { customerFromNotes, type Customer } from "@/lib/checkout/server/order-info";
import { fetchOrder, isValidOrderId, notesOf } from "@/lib/checkout/server/razorpay";
import { signFilePath, verifyOrderToken } from "@/lib/checkout/server/tokens";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const MAX_ATTACH_BYTES = 25 * 1024 * 1024; // keep the email under Resend's 40 MB limit

type SubmittedFile = { docType: string; pathname: string; name: string };

function str(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

// Called after the browser has uploaded the documents. Emails the owner with the files.
export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const orderId = body?.orderId;
  if (!isValidOrderId(orderId) || !verifyOrderToken(orderId, body?.token)) {
    return NextResponse.json({ error: "This link is not valid." }, { status: 403 });
  }

  const files: SubmittedFile[] = (Array.isArray(body?.files) ? body.files : [])
    .slice(0, 30)
    .map((f: any) => ({ docType: str(f?.docType, 40), pathname: str(f?.pathname, 400), name: str(f?.name, 200) }))
    .filter(
      (f: SubmittedFile) =>
        DOCUMENT_KEYS.includes(f.docType) &&
        f.pathname.startsWith(`orders/${orderId}/${f.docType}/`) &&
        !f.pathname.includes("..")
    );
  if (!files.length) {
    return NextResponse.json({ error: "No documents were received." }, { status: 400 });
  }
  const contactEmail = str(body?.email, 120);
  const contactPhone = str(body?.phone, 30);

  // Client details from the paid order (best effort).
  let customer: Customer | null = null;
  try {
    customer = customerFromNotes(notesOf(await fetchOrder(orderId)));
  } catch (err) {
    console.error("[documents] could not load order", err);
  }

  // Attach the files to the email (up to ~25 MB) and add a secure download link for each.
  const origin = new URL(request.url).origin;
  const attachments: EmailAttachment[] = [];
  let attachedBytes = 0;
  const listed: { label: string; name: string; link: string; attached: boolean; missing: boolean }[] = [];

  for (const f of files) {
    const link = `${origin}/api/documents/file?p=${encodeURIComponent(f.pathname)}&s=${signFilePath(f.pathname)}`;
    const label = documentLabel(f.docType);
    let attached = false;
    let missing = false;
    try {
      const result = await get(f.pathname, { access: "private" });
      if (!result || result.statusCode !== 200) {
        missing = true;
      } else {
        const buf = Buffer.from(await new Response(result.stream).arrayBuffer());
        if (attachedBytes + buf.length <= MAX_ATTACH_BYTES) {
          attachments.push({ filename: `${label} - ${f.name || "document"}`, content: buf.toString("base64") });
          attachedBytes += buf.length;
          attached = true;
        }
      }
    } catch (err) {
      console.error("[documents] could not read", f.pathname, err);
      missing = true;
    }
    listed.push({ label, name: f.name, link, attached, missing });
  }

  const received = listed.filter((l) => !l.missing);
  if (!received.length) {
    return NextResponse.json({ error: "Your files didn't arrive. Please try again." }, { status: 400 });
  }

  const docsHtml =
    `<h2 style="font-size:15px;margin:22px 0 8px;color:#111">Documents (${received.length})</h2><ul style="padding-left:18px;margin:0;font-size:14px;line-height:1.7">` +
    received
      .map(
        (l) =>
          `<li><strong>${escapeHtml(l.label)}</strong> — ${escapeHtml(l.name)} · <a href="${escapeHtml(l.link)}" style="color:#b78900">download</a>${l.attached ? " (attached)" : ""}</li>`
      )
      .join("") +
    `</ul><p style="font-size:12px;color:#888;margin-top:12px">Files are also stored in your Vercel project → Storage → Blob, folder orders/${escapeHtml(orderId)}/</p>`;

  const name = customer?.name || "A client";
  const company = customer?.company || "";
  const { html, text } = emailLayout({
    heading: `Documents received — ${company || name}`,
    intro: `${name}${company ? ` (${company})` : ""} uploaded documents for their Corporate Tax Registration order.`,
    rows: [
      ["Client name", customer?.name || ""],
      ["Company", company],
      ["Email (on upload form)", contactEmail],
      ["Phone (on upload form)", contactPhone],
      ["Email (at checkout)", customer && customer.email !== contactEmail ? customer.email : ""],
      ["Phone (at checkout)", customer && customer.phone !== contactPhone ? customer.phone : ""],
      ["Service", customer?.services || ""],
      ["Order ID", orderId],
    ],
    extraHtml: docsHtml,
  });

  const emailed = await sendEmail({
    subject: `Documents received: ${company || name} — ${orderId}`,
    html,
    text:
      text +
      "\n\nDocuments:\n" +
      received.map((l) => `- ${l.label}: ${l.name} — ${l.link}`).join("\n"),
    replyTo: contactEmail || customer?.email || undefined,
    attachments,
  });

  return NextResponse.json({ ok: true, received: received.length, emailed });
}
