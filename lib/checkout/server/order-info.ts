import { emailLayout, sendEmail } from "./email";
import {
  fetchOrder,
  fetchPayment,
  notesOf,
  updatePaymentNotes,
  type RazorpayNotes,
  type RazorpayOrder,
  type RazorpayPayment,
} from "./razorpay";

export type Customer = {
  name: string;
  company: string;
  email: string;
  phone: string;
  emirate: string;
  services: string;
};

/** Client details are stored as notes on the Razorpay order (and payment). */
export function customerToNotes(c: Customer): RazorpayNotes {
  const cut = (s: string) => s.slice(0, 250);
  return {
    customer_name: cut(c.name),
    company_name: cut(c.company),
    customer_email: cut(c.email),
    customer_phone: cut(c.phone),
    emirate: cut(c.emirate || "-"),
    services: cut(c.services),
    website: "marifahtax.com",
  };
}

export function customerFromNotes(notes: RazorpayNotes): Customer {
  return {
    name: notes.customer_name || "",
    company: notes.company_name || "",
    email: notes.customer_email || "",
    phone: notes.customer_phone || "",
    emirate: notes.emirate && notes.emirate !== "-" ? notes.emirate : "",
    services: notes.services || "",
  };
}

export function formatAmount(minor: number, currency: string) {
  return `${currency} ${(minor / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDubaiTime(unixSeconds: number) {
  return new Date(unixSeconds * 1000).toLocaleString("en-GB", {
    timeZone: "Asia/Dubai",
    dateStyle: "medium",
    timeStyle: "short",
  }) + " (UAE time)";
}

function paymentEmail(order: RazorpayOrder, payment: RazorpayPayment) {
  const c = customerFromNotes(notesOf(order));
  const card = payment.card
    ? [payment.card.network, payment.card.type, payment.card.last4 ? `•••• ${payment.card.last4}` : ""].filter(Boolean).join(" ")
    : payment.method;
  const amount = formatAmount(payment.amount, payment.currency);
  const { html, text } = emailLayout({
    heading: `New payment received — ${amount}`,
    intro: `${c.name || "A client"}${c.company ? ` (${c.company})` : ""} has paid online. The client is now being asked to upload their documents (optional) — you'll get a separate email if they do.`,
    rows: [
      ["Service", c.services],
      ["Amount paid", amount],
      ["Client name", c.name],
      ["Company", c.company],
      ["Email", c.email],
      ["Phone", c.phone],
      ["Emirate", c.emirate],
      ["Paid with", card],
      ["Payment status", payment.status],
      ["Payment ID", payment.id],
      ["Order ID", order.id],
      ["Date", formatDubaiTime(payment.created_at)],
    ],
    extraHtml: `<p style="margin:18px 0 0;font-size:13px"><a href="https://dashboard.razorpay.com/app/payments/${payment.id}" style="color:#b78900">Open this payment in Razorpay Dashboard →</a></p>`,
  });
  return {
    subject: `New payment: ${c.services || "Online order"} — ${c.company || c.name} (${amount})`,
    html,
    text,
    replyTo: c.email || undefined,
  };
}

/**
 * Emails the owner about a successful payment, once.
 * After emailing, the payment is tagged with notified=yes in Razorpay so the
 * optional webhook doesn't send the same email again.
 */
export async function notifyPaymentOnce(paymentId: string) {
  const payment = await fetchPayment(paymentId);
  const notes = notesOf(payment);
  if (notes.notified === "yes") return { alreadyNotified: true, payment };
  if (!payment.order_id) return { alreadyNotified: false, payment, emailed: false };
  const order = await fetchOrder(payment.order_id);
  const emailed = await sendEmail(paymentEmail(order, payment));
  if (emailed) {
    try {
      await updatePaymentNotes(payment.id, { ...notes, notified: "yes" });
    } catch (err) {
      console.error("[checkout] could not tag payment as notified", err);
    }
  }
  return { alreadyNotified: false, payment, order, emailed };
}
