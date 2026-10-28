import type { Metadata } from "next";
import { SiteShell } from "@/components/site-app";
import { OrderDocuments } from "@/components/cart/order-documents";

export const metadata: Metadata = {
  title: "Order Confirmed | Marifah Tax Advisory",
  robots: { index: false, follow: false },
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string; t?: string }>;
}) {
  const { order = "", t = "" } = await searchParams;
  return (
    <SiteShell>
      <OrderDocuments orderId={order} token={t} />
    </SiteShell>
  );
}
