'use client';

// Opens the "Free Consultation" pop-up automatically, at most twice per visitor:
//   1. once, a few seconds after they arrive ("welcome");
//   2. once more when they move to leave the site on a computer ("exit"): the mouse
//      heads for the browser's tab bar / close button. Phones have no such signal.
// It never appears again after that, never after the visitor has sent an enquiry,
// and never on the cart or checkout pages.

import { useEffect, useRef, useState } from 'react';
import { ConsultancyForm } from '@/components/consultancy-form';
import { hasFlag, remember } from '@/lib/contact';

const WELCOME_DELAY_DESKTOP_MS = 8000; // computers
const WELCOME_DELAY_MOBILE_MS = 15000; // phones and tablets
const EXIT_MIN_TIME_ON_SITE_MS = 4000; // ignore accidental mouse moves right after arriving
const SKIP_PATHS = [/^\/cart/, /^\/checkout/];

const EXIT_TEXT = {
  eyebrow: 'Before you go',
  title: 'Get your free tax consultation',
  description:
    'Leave your details and a Marifah tax advisor will contact you within 1 business hour. Free, with no obligation.',
};

export function ConsultationPrompt() {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<'welcome' | 'exit'>('welcome');
  const openRef = useRef(false);
  openRef.current = open;

  useEffect(() => {
    const arrived = Date.now();
    const blocked = () =>
      openRef.current ||
      hasFlag('enquiry_sent') ||
      SKIP_PATHS.some((p) => p.test(window.location.pathname)) ||
      !!document.querySelector('[role="dialog"][data-state="open"]'); // another pop-up is already open

    const show = (v: 'welcome' | 'exit') => {
      remember(v);
      setVariant(v);
      setOpen(true);
    };

    // 1. Welcome pop-up: after a short delay; if the visitor is busy (e.g. paying), try again a little later.
    let poll: number | undefined;
    const isDesktop = window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 1024;
    const timer = window.setTimeout(() => {
      poll = window.setInterval(() => {
        if (hasFlag('welcome') || hasFlag('enquiry_sent')) return window.clearInterval(poll);
        if (!blocked()) {
          window.clearInterval(poll);
          show('welcome');
        }
      }, 1000);
    }, isDesktop ? WELCOME_DELAY_DESKTOP_MS : WELCOME_DELAY_MOBILE_MS);

    // 2. Exit pop-up (computers only): the mouse leaves the page through the top edge.
    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget || e.clientY > 0) return;
      if (Date.now() - arrived < EXIT_MIN_TIME_ON_SITE_MS) return;
      if (hasFlag('exit') || blocked()) return;
      show('exit');
    };
    if (window.matchMedia('(pointer: fine)').matches) document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(poll);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <ConsultancyForm
      open={open}
      onOpenChange={setOpen}
      {...(variant === 'exit' ? EXIT_TEXT : {})}
    />
  );
}
