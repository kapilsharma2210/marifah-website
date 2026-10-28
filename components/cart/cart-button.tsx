"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "./use-cart";

/** Cart icon for the header, with the number of items. */
export function CartButton({ className = "" }: { className?: string }) {
  const { count } = useCart();
  return (
    <a
      href="/cart"
      aria-label={count ? `Cart, ${count} item${count > 1 ? "s" : ""}` : "Cart"}
      className={`relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-colors shrink-0 ${className}`}
    >
      <ShoppingCart className="w-[18px] h-[18px]" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center tabular-nums">
          {count}
        </span>
      )}
    </a>
  );
}
