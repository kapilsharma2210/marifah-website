'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ConsultancyFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SERVICES = [
  'Accounting',
  'VAT Registration',
  'VAT De-Registration',
  'VAT Return Filing',
  'Corporate Tax Registration',
  'Corporate Tax De-Registration',
  'Corporate Tax Filing',
  'Corporate Tax',
  'WPS Service',
  'AML Services',
  'Others',
];

const WHATSAPP_NUMBER = '971505815245';

export function ConsultancyForm({ open, onOpenChange }: ConsultancyFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.service || !formData.message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const text =
      `Hello Marifah Tax Advisory,%0A%0A` +
      `Name: ${encodeURIComponent(formData.name)}%0A` +
      `Phone: ${encodeURIComponent(formData.phone)}%0A` +
      `Email: ${encodeURIComponent(formData.email)}%0A` +
      `Service Required: ${encodeURIComponent(formData.service)}%0A%0A` +
      `Message: ${encodeURIComponent(formData.message)}`;

    const link = document.createElement('a');
    link.href = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${text}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clear form
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });

    // Close the modal
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book Free Consultancy</DialogTitle>
          <DialogDescription>
            Fill in your details and we&apos;ll contact you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">Name</label>
            <Input
              id="name" name="name" value={formData.name}
              onChange={handleInputChange} placeholder="Your full name" required
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1 block">Mobile Number</label>
            <Input
              id="phone" name="phone" type="tel" value={formData.phone}
              onChange={handleInputChange} placeholder="+971 50 123 4567" required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground mb-1 block">Email Address</label>
            <Input
              id="email" name="email" type="email" value={formData.email}
              onChange={handleInputChange} placeholder="your.email@example.com" required
            />
          </div>

          <div>
            <label htmlFor="service" className="text-sm font-medium text-foreground mb-1 block">Required Service</label>
            <Select value={formData.service} onValueChange={handleServiceChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((service) => (
                  <SelectItem key={service} value={service}>{service}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground mb-1 block">Message</label>
            <Textarea
              id="message" name="message" value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more about your requirements..."
              rows={4} required
            />
          </div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
