import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { Phone, MessageCircle, Instagram, Navigation, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Caketown Cafe';
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[+]?[\d\s-]{8,}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!form.message.trim()) newErrors.message = 'Please enter a message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactOptions = [
    { icon: Phone, label: 'Call', value: '+91 [phone]', href: 'tel:+91' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/91' },
    { icon: Instagram, label: 'Instagram', value: '@caketowncafe', href: 'https://instagram.com' },
    { icon: Navigation, label: 'Directions', value: 'Find us', href: 'https://maps.google.com' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-caketown-cream pt-28 pb-16 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
              Contact
            </p>
          </Reveal>
          <AnimatedHeading
            lines={['COME SAY', 'HELLO.']}
            className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[14vw] sm:text-[10vw] lg:text-[7rem]"
          />
        </div>
      </section>

      {/* Contact options */}
      <section className="bg-white py-12 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {contactOptions.map((opt, i) => (
              <Reveal key={opt.label} delay={i * 80}>
                <a
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-caketown-cream hover:bg-caketown-peach/50 active:scale-95 transition-all duration-300"
                >
                  <opt.icon className="w-7 h-7 text-caketown-orange mb-3" />
                  <span className="text-sm font-semibold text-caketown-black">{opt.label}</span>
                  <span className="text-xs text-caketown-black/50 mt-1">{opt.value}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-caketown-cream py-16 sm:py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <h2 className="font-display font-extrabold tracking-tightest text-caketown-black text-2xl sm:text-3xl mb-2">
              Send us a message
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-sm text-caketown-black/60 mb-8">
              Questions, custom cake orders, or just saying hi — we'd love to hear from you.
            </p>
          </Reveal>

          {submitted ? (
            <Reveal>
              <div className="rounded-2xl bg-white p-8 sm:p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-caketown-orange flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-caketown-black mb-2">
                  Message sent!
                </h3>
                <p className="text-sm text-caketown-black/60">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-caketown-orange hover:text-caketown-orange-dark transition-colors"
                >
                  Send another message
                </button>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={120}>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-caketown-black mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 text-sm bg-white outline-none transition-colors ${
                      errors.name ? 'border-caketown-cherry' : 'border-caketown-black/10 focus:border-caketown-orange'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-caketown-cherry mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-caketown-black mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 text-sm bg-white outline-none transition-colors ${
                      errors.email ? 'border-caketown-cherry' : 'border-caketown-black/10 focus:border-caketown-orange'
                    }`}
                    placeholder="you@email.com"
                  />
                  {errors.email && <p className="text-xs text-caketown-cherry mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-caketown-black mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 text-sm bg-white outline-none transition-colors ${
                      errors.phone ? 'border-caketown-cherry' : 'border-caketown-black/10 focus:border-caketown-orange'
                    }`}
                    placeholder="+91 [phone number]"
                  />
                  {errors.phone && <p className="text-xs text-caketown-cherry mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-caketown-black mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 text-sm bg-white outline-none transition-colors resize-none ${
                      errors.message ? 'border-caketown-cherry' : 'border-caketown-black/10 focus:border-caketown-orange'
                    }`}
                    placeholder="Tell us what you need..."
                  />
                  {errors.message && <p className="text-xs text-caketown-cherry mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-caketown-orange text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-caketown-orange/20 hover:bg-caketown-orange-dark transition-all duration-300 active:scale-95"
                >
                  Send Message
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
