"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { MAX_QTY, PRODUCTS, type Product } from "@/lib/checkout/products";

// The cart lives in the visitor's browser (localStorage), so it survives page reloads.

const STORAGE_KEY = "marifah_cart_v1";

export type CartLine = { id: string; qty: number };

const EMPTY: CartLine[] = [];
let snapshot: CartLine[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function sanitize(value: unknown): CartLine[] {
  if (!Array.isArray(value)) return EMPTY;
  const out: CartLine[] = [];
  for (const v of value) {
    const id = (v as any)?.id;
    const qty = Math.floor(Number((v as any)?.qty));
    if (PRODUCTS[id] && qty >= 1 && !out.some((l) => l.id === id)) {
      out.push({ id, qty: Math.min(qty, MAX_QTY) });
    }
  }
  return out.length ? out : EMPTY;
}

function readStorage(): CartLine[] {
  try {
    return sanitize(JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]"));
  } catch {
    return EMPTY;
  }
}

function getSnapshot() {
  if (!loaded) {
    snapshot = readStorage();
    loaded = true;
  }
  return snapshot;
}

function getServerSnapshot() {
  return EMPTY;
}

function write(lines: CartLine[]) {
  snapshot = lines.length ? lines : EMPTY;
  loaded = true;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    /* storage unavailable — cart still works for this page view */
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      snapshot = readStorage();
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export type CartItem = Product & { qty: number; lineTotal: number };

export function useCart() {
  const lines = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const items: CartItem[] = useMemo(
    () => lines.map((l) => ({ ...PRODUCTS[l.id], qty: l.qty, lineTotal: PRODUCTS[l.id].price * l.qty })),
    [lines]
  );
  const total = items.reduce((s, i) => s + i.lineTotal, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  /** Adds the service once (clicking "Add to Cart" again won't double it). */
  const add = useCallback((id: string) => {
    const cur = getSnapshot();
    if (!PRODUCTS[id] || cur.some((l) => l.id === id)) return;
    write([...cur, { id, qty: 1 }]);
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    const q = Math.max(1, Math.min(MAX_QTY, Math.floor(qty)));
    write(getSnapshot().map((l) => (l.id === id ? { ...l, qty: q } : l)));
  }, []);

  const remove = useCallback((id: string) => write(getSnapshot().filter((l) => l.id !== id)), []);
  const clear = useCallback(() => write([]), []);
  const has = useCallback((id: string) => lines.some((l) => l.id === id), [lines]);

  return { lines, items, total, count, add, setQty, remove, clear, has };
}
