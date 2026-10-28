"use client";

import { Check, ShoppingCart, ArrowRight, Lock } from "lucide-react";
import { CT_REGISTRATION_ID, PRODUCTS, formatPrice } from "@/lib/checkout/products";
import { cn } from "@/lib/utils";
import { useCart } from "./use-cart";

type Props = {
  productId?: string;
  label?: string;
  size?: "sm" | "md";
  variant?: "primary" | "outline";
  /** true = add and go straight to the cart ("Buy now"). */
  buyNow?: boolean;
  className?: string;
};

/**
 * "Add to Cart" button. Once the service is in the cart it turns into
 * "In cart — View cart" so clients can't add it twice by accident.
 */
export function AddToCartButton({
  productId = CT_REGISTRATION_ID,
  label,
  size = "md",
  variant = "primary",
  buyNow = false,
  className = "",
}: Props) {
  const { add, has } = useCart();
  const inCart = has(productId);
  const sizing = size === "sm" ? "px-4 py-2 text-xs gap-1.5" : "px-6 py-3 text-sm gap-2";

  if (inCart && !buyNow) {
    return (
      <a
        href="/cart"
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors whitespace-nowrap",
          sizing,
          className
        )}
      >
        <Check className="w-4 h-4" /> In cart · View cart
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        add(productId);
        if (buyNow) window.location.href = "/cart";
      }}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-colors whitespace-nowrap",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "border border-primary/50 text-primary hover:bg-primary/10",
        sizing,
        className
      )}
    >
      {buyNow ? <ArrowRight className="w-4 h-4 order-last" /> : <ShoppingCart className="w-4 h-4" />}
      {label ?? (buyNow ? "Register Now" : "Add to Cart")}
    </button>
  );
}

/** Highlighted "buy online" box for Corporate Tax Registration. */
export function BuyRegistrationCard({ className = "" }: { className?: string }) {
  const p = PRODUCTS[CT_REGISTRATION_ID];
  return (
    <div className={`rounded-2xl border-2 border-primary bg-primary/5 p-6 sm:p-8 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Register online</p>
          <h3 className="text-xl font-bold text-foreground mb-2">
            {p.name} — <span className="text-primary">{formatPrice(p.price)}</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pay securely by credit or debit card, then upload your documents. Our team starts your FTA registration right away.
          </p>
          <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-primary" /> Secure card payment · Visa · Mastercard
          </p>
        </div>
        <div className="flex flex-col gap-2 shrink-0">
          <AddToCartButton buyNow label="Register Now" />
          <AddToCartButton size="sm" variant="outline" />
        </div>
      </div>
    </div>
  );
}
