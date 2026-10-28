import { NextResponse } from "next/server";
import { customerFromNotes, formatAmount } from "@/lib/checkout/server/order-info";
import { fetchOrder, isValidOrderId, notesOf } from "@/lib/checkout/server/razorpay";
import { verifyOrderToken } from "@/lib/checkout/server/tokens";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Used by the "Payment successful → upload documents" page.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const orderId = url.searchParams.get("order");
  const token = url.searchParams.get("t");

  if (!isValidOrderId(orderId)) {
    return NextResponse.json({ error: "Invalid link." }, { status: 400 });
  }
  try {
    if (!verifyOrderToken(orderId, token)) {
      return NextResponse.json({ error: "Invalid link." }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Not configured." }, { status: 503 });
  }

  try {
    const order = await fetchOrder(orderId);
    const c = customerFromNotes(notesOf(order));
    return NextResponse.json(
      {
        orderId: order.id,
        receipt: order.receipt,
        status: order.status,
        amount: formatAmount(order.amount_paid || order.amount, order.currency),
        customer: { name: c.name, company: c.company, email: c.email, phone: c.phone },
        services: c.services,
      },
      { headers: { "Cache-Control": "private, no-store" } }
    );
  } catch (err) {
    console.error("[orders] fetch failed", err);
    // Still let the client upload documents — the token proves they paid.
    return NextResponse.json({ orderId, customer: null }, { headers: { "Cache-Control": "private, no-store" } });
  }
}
