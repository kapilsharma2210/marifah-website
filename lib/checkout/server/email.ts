// Sends notification emails to Marifah through Resend (https://resend.com).
// If RESEND_API_KEY is not set, emails are skipped — all client details are still
// saved on the payment in your Razorpay Dashboard.

const RESEND_API_BASE = "https://api.resend.com";

export type EmailAttachment = { filename: string; content: string /* base64 */ };

export function notifyRecipients() {
  return (process.env.NOTIFY_EMAIL || "info@marifahtax.com")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function sendEmail(input: {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set — skipping email:", input.subject);
    return false;
  }
  try {
    const res = await fetch(`${RESEND_API_BASE}/emails`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM?.trim() || "Marifah Website <onboarding@resend.dev>",
        to: notifyRecipients(),
        subject: input.subject,
        html: input.html,
        text: input.text,
        ...(input.replyTo ? { reply_to: input.replyTo } : {}),
        ...(input.attachments?.length ? { attachments: input.attachments } : {}),
      }),
    });
    if (!res.ok) {
      console.error("[email] Resend error", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[email] send failed", err);
    return false;
  }
}

export function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Simple, email-client-safe layout: heading, intro, a details table and optional extra HTML. */
export function emailLayout(opts: {
  heading: string;
  intro: string;
  rows: [string, string][];
  extraHtml?: string;
}) {
  const rows = opts.rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;white-space:nowrap;vertical-align:top">${escapeHtml(k)}</td>` +
        `<td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;font-weight:600">${escapeHtml(v)}</td></tr>`
    )
    .join("");
  const html = `<!doctype html><html><body style="margin:0;background:#f6f6f4;font-family:Arial,Helvetica,sans-serif">
<div style="max-width:620px;margin:0 auto;padding:24px">
  <div style="background:#1c1d20;color:#e6ad00;font-weight:bold;letter-spacing:2px;padding:14px 20px;border-radius:10px 10px 0 0;font-size:14px">MARIFAH TAX ADVISORY</div>
  <div style="background:#fff;padding:24px 20px;border-radius:0 0 10px 10px">
    <h1 style="margin:0 0 8px;font-size:20px;color:#111">${escapeHtml(opts.heading)}</h1>
    <p style="margin:0 0 18px;color:#444;font-size:14px;line-height:1.5">${escapeHtml(opts.intro)}</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
    ${opts.extraHtml ?? ""}
  </div>
  <p style="color:#999;font-size:12px;text-align:center;margin-top:14px">Sent automatically by marifahtax.com</p>
</div></body></html>`;
  const text =
    `${opts.heading}\n\n${opts.intro}\n\n` +
    opts.rows
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
  return { html, text };
}
