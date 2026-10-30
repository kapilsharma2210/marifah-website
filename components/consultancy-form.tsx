'use client';

import { useEffect, useState } from 'react';
import { BadgeCheck, CheckCircle2, Clock, Lock, MessageCircle, Mail, X, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Spinner } from '@/components/ui/spinner';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import {
  CONTACT_METHODS,
  SERVICE_GROUPS,
  isValidEmail,
  isValidPhone,
  remember,
  submitEnquiry,
  whatsappLink,
  type Enquiry,
} from '@/lib/contact';

interface ConsultancyFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Optional heading overrides (used by the automatic "Before you go" pop-up). */
  eyebrow?: string;
  title?: string;
  description?: string;
}

type Field = 'name' | 'phone' | 'email' | 'service';
type Status = 'idle' | 'sending' | 'sent' | 'failed';

const EMPTY = { name: '', company: '', phone: '', email: '', service: '', contactBy: 'WhatsApp', message: '', website: '' };
const METHOD_ICONS = { WhatsApp: MessageCircle, Email: Mail } as const;

export function ConsultancyForm({ open, onOpenChange, eyebrow, title, description }: ConsultancyFormProps) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  // Start fresh each time the pop-up is closed (after the closing animation).
  useEffect(() => {
    if (open) {
      remember('welcome'); // visitor has seen the form, so the automatic welcome pop-up isn't needed
      return;
    }
    const t = setTimeout(() => {
      setForm(EMPTY);
      setErrors({});
      setStatus('idle');
    }, 250);
    return () => clearTimeout(t);
  }, [open]);

  const set = (key: keyof typeof EMPTY, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (key in errors) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const enquiry = (): Enquiry => ({ ...form, source: 'Free Consultation form' });

  const validate = () => {
    const e: Partial<Record<Field, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!isValidPhone(form.phone)) e.phone = 'Please enter a valid mobile number.';
    if (!isValidEmail(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.service) e.service = 'Please choose a service.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (status === 'sending' || !validate()) return;
    setStatus('sending');
    const ok = await submitEnquiry(enquiry());
    setStatus(ok ? 'sent' : 'failed');
  };

  const firstName = form.name.trim().split(/\s+/)[0];
  const fieldClass = 'h-11 bg-card border-border';
  const label = (htmlFor: string, text: string, optional = false) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground mb-1.5">
      {text}
      {optional && <span className="ml-1 font-normal text-muted-foreground">(optional)</span>}
    </label>
  );
  const error = (key: Field) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1.5 text-xs text-destructive">
        {errors[key]}
      </p>
    ) : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-2xl p-0 gap-0 overflow-hidden border-primary/20 max-h-[calc(100dvh-2rem)] flex flex-col"
      >
        {/* Header */}
        <div className="dark relative bg-background px-6 sm:px-8 pt-7 pb-6 shrink-0">
          <DialogClose className="absolute right-4 top-4 rounded-full p-1.5 text-foreground/70 hover:text-foreground hover:bg-white/10 transition-colors">
            <X className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">{(status !== 'sent' && eyebrow) || 'Free consultation'}</p>
          <DialogTitle className="text-2xl font-bold text-foreground leading-tight pr-8">
            {status === 'sent' ? 'Request received' : title || 'Book your free consultation'}
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {status === 'sent'
              ? 'Thank you for contacting Marifah Tax Advisory.'
              : description || 'Tell us a little about your business. A tax advisor will get back to you within 1 business hour.'}
          </DialogDescription>
          {status !== 'sent' && (
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-foreground/85">
              <li className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-gold" />Free, no obligation</li>
              <li className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold" />Reply within 1 hour</li>
              <li className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-gold" />Confidential</li>
            </ul>
          )}
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6">
          {status === 'sent' ? (
            <div className="text-center py-4">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Thank you{firstName ? `, ${firstName}` : ''}!</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                We&apos;ve received your request for <span className="font-medium text-foreground">{form.service}</span>. A Marifah
                tax advisor will contact you by {form.contactBy} within 1 business
                hour (Mon–Fri, 9 AM – 6 PM UAE time).
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <DialogClose className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
                  Done
                </DialogClose>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp now
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid sm:grid-cols-2 gap-x-4 gap-y-4">
              <div>
                {label('cf-name', 'Full name')}
                <Input
                  id="cf-name" value={form.name} onChange={(e) => set('name', e.target.value)}
                  placeholder="e.g. Ahmed Khan" autoComplete="name" className={fieldClass}
                  aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {error('name')}
              </div>
              <div>
                {label('cf-company', 'Company name', true)}
                <Input
                  id="cf-company" value={form.company} onChange={(e) => set('company', e.target.value)}
                  placeholder="e.g. Al Noor Trading LLC" autoComplete="organization" className={fieldClass}
                />
              </div>
              <div>
                {label('cf-phone', 'Mobile / WhatsApp')}
                <Input
                  id="cf-phone" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)}
                  placeholder="+971 50 123 4567" autoComplete="tel" className={fieldClass}
                  aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {error('phone')}
              </div>
              <div>
                {label('cf-email', 'Email address')}
                <Input
                  id="cf-email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)}
                  placeholder="name@company.com" autoComplete="email" className={fieldClass}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {error('email')}
              </div>

              <div className="sm:col-span-2">
                {label('cf-service', 'Service you need')}
                <Select value={form.service} onValueChange={(v) => set('service', v)}>
                  <SelectTrigger
                    id="cf-service"
                    className="w-full data-[size=default]:h-11 bg-card border-border"
                    aria-invalid={!!errors.service}
                  >
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_GROUPS.map((g) => (
                      <SelectGroup key={g.label}>
                        <SelectLabel className="text-gold font-semibold">{g.label}</SelectLabel>
                        {g.items.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
                {error('service')}
              </div>

              <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-medium text-foreground mb-1.5">Best way to reach you</legend>
                <div className="grid grid-cols-2 gap-2">
                  {CONTACT_METHODS.map((m) => {
                    const Icon = METHOD_ICONS[m];
                    const active = form.contactBy === m;
                    return (
                      <button
                        key={m}
                        type="button"
                        aria-pressed={active}
                        onClick={() => set('contactBy', m)}
                        className={`flex items-center justify-center gap-1.5 h-10 rounded-md border text-sm transition-colors ${
                          active
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-card text-foreground hover:border-primary/40'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {m}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="sm:col-span-2">
                {label('cf-message', 'How can we help?', true)}
                <Textarea
                  id="cf-message" value={form.message} onChange={(e) => set('message', e.target.value)} rows={3}
                  placeholder="e.g. We're a free zone company and need to register for Corporate Tax before the deadline."
                  className="bg-card border-border min-h-[96px]"
                />
              </div>

              {/* Spam trap: hidden from people, bots fill it in */}
              <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                <label htmlFor="cf-website">Website</label>
                <input
                  id="cf-website" tabIndex={-1} autoComplete="off" value={form.website}
                  onChange={(e) => set('website', e.target.value)}
                />
              </div>

              {status === 'failed' && (
                <div role="alert" className="sm:col-span-2 rounded-lg border border-gold/30 bg-gold/[0.07] px-4 py-3">
                  <p className="flex items-start gap-2 text-sm text-foreground">
                    <AlertCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    We couldn&apos;t send your request just now. Please send it on WhatsApp instead. Your details are already filled in.
                  </p>
                  <a
                    href={whatsappLink(enquiry())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Send on WhatsApp
                  </a>
                </div>
              )}

              <div className="sm:col-span-2 pt-1">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary text-primary-foreground text-base font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <><Spinner className="size-5" /> Sending…</>
                  ) : (
                    'Request my free consultation'
                  )}
                </button>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground text-center">
                  <Lock className="w-3.5 h-3.5" /> Your details are confidential and only used to reply to your enquiry.
                </p>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
