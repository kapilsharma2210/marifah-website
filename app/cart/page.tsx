import type { Metadata } from "next";
import { SiteShell } from "@/components/site-app";
import { CartCheckout } from "@/components/cart/cart-checkout";

export const metadata: Metadata = {
  title: "Checkout | Marifah Tax Advisory",
  description: "Pay for Corporate Tax Registration securely by credit or debit card.",
  alternates: { canonical: "/cart" },
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <SiteShell>
      <CartCheckout />
    </SiteShell>
  );
}
