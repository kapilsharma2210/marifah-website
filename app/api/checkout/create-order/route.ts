import { NextResponse } from "next/server";
import { CURRENCY, EMIRATES, MAX_QTY, PRODUCTS } from "@/lib/checkout/products";
import { customerToNotes } from "@/lib/checkout/server/order-info";
import { createOrder, getRazorpayKeys, RazorpayApiError, RazorpayConfigError } from "@/lib/checkout/server/razorpay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().replace(/\s+/g, " ").slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // ── Items: price always comes from the server-side catalogue ──
  const rawItems: unknown[] = Array.isArray(body?.items) ? body.items.slice(0, 10) : [];
  const lines: { name: string; qty: number; price: number }[] = [];
  for (const it of rawItems as any[]) {
    const product = PRODUCTS[it?.id];
    const qty = Number(it?.qty);
    if (!product || !Number.isInteger(qty) || qty < 1 || qty > MAX_QTY) continue;
    lines.push({ name: product.name, qty, price: product.price });
  }
  if (!lines.length) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }
  const total = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  const amount = Math.round(total * 100); // Razorpay expects the smallest unit (fils)

  // ── Client details ──
  const c = body?.customer ?? {};
  const customer = {
    name: str(c.name, 80),
    company: str(c.company, 120),
    email: str(c.email, 120).toLowerCase(),
    phone: str(c.phone, 25),
    emirate: EMIRATES.includes(c.emirate) ? (c.emirate as string) : "",
    services: lines.map((l) => (l.qty > 1 ? `${l.name} x${l.qty}` : l.name)).join(", "),
  };
  const errors: Record<string, string> = {};
  if (customer.name.length < 2) errors.name = "Please enter your full name.";
  if (customer.company.length < 2) errors.company = "Please enter your company / trade name.";
  if (!EMAIL_RE.test(customer.email)) errors.email = "Please enter a valid email address.";
  if (customer.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "Please check your details.", fields: errors }, { status: 400 });
  }

  try {
    const { keyId } = getRazorpayKeys();
    const notes = customerToNotes(customer);
    const order = await createOrder({
      amount,
      currency: CURRENCY,
      receipt: `MTA-${Date.now()}`,
      notes,
    });
    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
      description: customer.services,
      notes,
      prefill: { name: customer.name, email: customer.email, contact: customer.phone },
    });
  } catch (err) {
    if (err instanceof RazorpayConfigError) {
      console.error("[checkout] Razorpay keys missing");
      return NextResponse.json(
        { error: "Online payment is not available right now. Please contact us on WhatsApp and we'll help you complete your order." },
        { status: 503 }
      );
    }
    if (err instanceof RazorpayApiError) {
      console.error("[checkout] Razorpay create order failed", err.status, JSON.stringify(err.details));
    } else {
      console.error("[checkout] create order failed", err);
    }
    return NextResponse.json(
      { error: "We couldn't start the payment. Please try again in a moment, or contact us on WhatsApp." },
      { status: 502 }
    );
  }
}
