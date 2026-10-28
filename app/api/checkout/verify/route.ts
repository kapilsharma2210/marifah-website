import { NextResponse } from "next/server";
import { notifyPaymentOnce } from "@/lib/checkout/server/order-info";
import {
  isValidOrderId,
  isValidPaymentId,
  RazorpayConfigError,
  verifyPaymentSignature,
} from "@/lib/checkout/server/razorpay";
import { signOrderToken } from "@/lib/checkout/server/tokens";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Called by the browser right after Razorpay Checkout reports a successful payment.
export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const orderId = body?.razorpay_order_id;
  const paymentId = body?.razorpay_payment_id;
  const signature = body?.razorpay_signature;

  if (!isValidOrderId(orderId) || !isValidPaymentId(paymentId) || typeof signature !== "string") {
    return NextResponse.json({ error: "Invalid payment response." }, { status: 400 });
  }

  try {
    if (!verifyPaymentSignature(orderId, paymentId, signature)) {
      console.error("[checkout] signature mismatch", orderId, paymentId);
      return NextResponse.json({ error: "We couldn't verify this payment." }, { status: 400 });
    }
  } catch (err) {
    if (err instanceof RazorpayConfigError) {
      return NextResponse.json({ error: "Payment verification is not configured." }, { status: 503 });
    }
    throw err;
  }

  // Signature is valid → the payment is genuine and belongs to this order.
  // Email the owner, but never block the client on this.
  try {
    await notifyPaymentOnce(paymentId);
  } catch (err) {
    console.error("[checkout] post-payment notification failed", err);
  }

  return NextResponse.json({ ok: true, orderId, paymentId, token: signOrderToken(orderId) });
}
