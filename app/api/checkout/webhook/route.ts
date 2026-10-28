import { NextResponse } from "next/server";
import { notifyPaymentOnce } from "@/lib/checkout/server/order-info";
import { isValidPaymentId, verifyWebhookSignature } from "@/lib/checkout/server/razorpay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// OPTIONAL safety net. In Razorpay Dashboard → Account & Settings → Webhooks, add
//   URL:    https://www.marifahtax.com/api/checkout/webhook
//   Events: order.paid
//   Secret: any password — and save the same value in Vercel as RAZORPAY_WEBHOOK_SECRET
// Then you still get the "new payment" email even if a client closes the browser
// right after paying.
export async function POST(request: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET?.trim();
  if (!secret) {
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 503 });
  }
  const raw = await request.text();
  const signature = request.headers.get("x-razorpay-signature") || "";
  if (!verifyWebhookSignature(raw, signature, secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  let event: any;
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (event?.event === "order.paid" || event?.event === "payment.captured") {
    const paymentId = event?.payload?.payment?.entity?.id;
    if (isValidPaymentId(paymentId)) {
      try {
        await notifyPaymentOnce(paymentId);
      } catch (err) {
        console.error("[webhook] notification failed", err);
        // Non-200 makes Razorpay retry later.
        return NextResponse.json({ error: "Temporary failure" }, { status: 500 });
      }
    }
  }
  return NextResponse.json({ ok: true });
}
