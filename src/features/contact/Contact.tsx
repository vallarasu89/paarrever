import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from './schemas/contactSchema';
import { apiService } from '@/services/api';
import { STORES } from '@/data/stores';
import { BRAND_INFO } from '@/utils/constants';
import { Container } from '@/components/common/Container/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb/Breadcrumb';
import { Button } from '@/components/common/Button/Button';
import { PageTransition } from '@/components/animations/PageTransition';
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: 'general',
      storeLocation: '',
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      await apiService.submitContactForm(data);
      setIsSubmitted(true);
      reset();
    } catch {
      setServerError('An unexpected error occurred while sending your message. Please try again.');
    }
  };

  return (
    <PageTransition>
      {/* Brand Hero Header with Vivid Customer Service Background */}
      <section className="relative overflow-hidden bg-[#570B26] text-white py-12 lg:py-16 border-b border-[#7A1034]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1920&q=85"
            alt="Customer Care and Helpdesk"
            className="w-full h-full object-cover opacity-85 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#570B26] via-[#570B26]/80 sm:via-[#570B26]/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Contact Us' }]} variant="dark" />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FCE2A9] font-semibold block mb-2">
              Customer Care &amp; Partnerships
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-medium text-white leading-tight">
              We&apos;re Always Here to Help
            </h1>
            <p className="mt-4 text-base text-[#FFF9F0]/90 font-sans leading-relaxed">
              Have feedback on a recent visit to our stores, questions about our products, or want to partner with us as a local farmer or vendor? Reach out directly.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-16 sm:py-24 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Hours */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-xl border border-border shadow-subtle space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#570B26] mb-1">
                    Central Customer Desk
                  </h3>
                  <p className="text-xs text-muted-grey font-sans">
                    Our Chennai headquarters manages queries across all 25+ stores.
                  </p>
                </div>

                <div className="space-y-4 text-sm font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#7A1034] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-charcoal block">Corporate Office:</strong>
                      <span className="text-muted-grey text-xs leading-relaxed">
                        {BRAND_INFO.corporateAddress}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#7A1034] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-charcoal block">Phone Lines:</strong>
                      <span className="text-muted-grey text-xs">
                        {BRAND_INFO.phone}
                      </span>
                      <span className="block text-[11px] text-[#7A1034] font-semibold mt-0.5">
                        Mon – Sat, 9:00 AM – 7:00 PM
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#7A1034] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-charcoal block">Email Desk:</strong>
                      <span className="text-muted-grey text-xs">
                        {BRAND_INFO.email}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#7A1034] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-charcoal block">Store Hours:</strong>
                      <span className="text-muted-grey text-xs">
                        7:00 AM – 10:30 PM (All 7 Days)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vendor & Farmer Notice */}
              <div className="bg-[#570B26] text-white p-6 rounded-xl border border-[#F9AD24]/40 space-y-2 shadow-card">
                <span className="text-[11px] uppercase tracking-widest text-[#FCE2A9] font-semibold block">
                  Farmer &amp; Producer Inquiries
                </span>
                <h4 className="font-serif text-lg font-medium text-white">
                  Supply Directly to PAARR EVER
                </h4>
                <p className="text-xs text-[#FFF9F0]/80 font-sans leading-relaxed">
                  Are you an agricultural collective, cold-press oil miller, or traditional food artisan? We welcome direct partnerships without distributor layers. Select &ldquo;Vendor / Farmer Partnership&rdquo; in the form.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-xl border border-border shadow-subtle">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F7EAF0] text-[#7A1034] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-[#7A1034]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#570B26]">
                      Thank You for Reaching Out
                    </h3>
                    <p className="text-sm text-muted-grey font-sans max-w-md mx-auto leading-relaxed">
                      Your message has been assigned to our customer care team. A representative will contact you via email or phone within 24 business hours.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#570B26] mb-1">
                        Send Us a Message
                      </h3>
                      <p className="text-xs text-muted-grey font-sans">
                        Fill in your details below and we will get back to you promptly.
                      </p>
                    </div>

                    {serverError && (
                      <div className="p-4 rounded-md bg-red-50 text-red-800 border border-red-200 flex items-center gap-2 text-xs">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('inquiryType')}
                        className="w-full px-3.5 py-2.5 rounded-md bg-ivory border border-border text-sm text-charcoal focus:outline-none focus:border-[#7A1034]"
                      >
                        <option value="general">General Inquiry / Product Availability</option>
                        <option value="feedback">Store Feedback &amp; Experience</option>
                        <option value="vendor">Vendor / Farmer Sourcing Partnership</option>
                        <option value="passport">PAARR Passport Inquiry</option>
                      </select>
                      {errors.inquiryType && (
                        <p className="text-xs text-red-600 mt-1">{errors.inquiryType.message}</p>
                      )}
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          {...register('fullName')}
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 rounded-md bg-ivory border border-border text-sm text-charcoal placeholder-muted-grey/60 focus:outline-none focus:border-[#7A1034]"
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 rounded-md bg-ivory border border-border text-sm text-charcoal placeholder-muted-grey/60 focus:outline-none focus:border-[#7A1034]"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Store Branch */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-md bg-ivory border border-border text-sm text-charcoal placeholder-muted-grey/60 focus:outline-none focus:border-[#7A1034]"
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                          Relevant Store Branch (Optional)
                        </label>
                        <select
                          {...register('storeLocation')}
                          className="w-full px-3.5 py-2.5 rounded-md bg-ivory border border-border text-sm text-charcoal focus:outline-none focus:border-[#7A1034]"
                        >
                          <option value="">Select a Branch...</option>
                          {STORES.map((s) => (
                            <option key={s.id} value={s.name}>
                              {s.name} ({s.area})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('subject')}
                        placeholder="Brief summary of your query"
                        className="w-full px-3.5 py-2.5 rounded-md bg-ivory border border-border text-sm text-charcoal placeholder-muted-grey/60 focus:outline-none focus:border-[#7A1034]"
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-600 mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        {...register('message')}
                        placeholder="Tell us more about how we can help..."
                        className="w-full px-3.5 py-2.5 rounded-md bg-ivory border border-border text-sm text-charcoal placeholder-muted-grey/60 focus:outline-none focus:border-[#7A1034]"
                      />
                      {errors.message && (
                        <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      fullWidth
                    >
                      Submit Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default Contact;
