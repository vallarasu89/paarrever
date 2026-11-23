import React from 'react';
import { Container } from '@/components/common/Container/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb/Breadcrumb';
import { PageTransition } from '@/components/animations/PageTransition';
import { BRAND_INFO } from '@/utils/constants';

export const PrivacyPolicy: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-[#570B26] text-white py-10 lg:py-14 border-b border-[#7A1034]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=85"
            alt="PAARR EVER Supermarket Corporate Transparency"
            className="w-full h-full object-cover opacity-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#570B26] via-[#570B26]/85 to-transparent" />
        </div>

        <Container size="narrow" className="relative z-10">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} variant="dark" />
          <div className="mt-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FCE2A9] font-semibold block mb-2">
              Legal Transparency
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-medium text-white">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#FFF9F0]/80 font-sans">
              Last Updated: January 2026 &bull; {BRAND_INFO.legalName}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white font-sans text-sm text-charcoal/80 leading-relaxed">
        <Container size="narrow">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                1. Information We Collect
              </h2>
              <p>
                When you visit PAARR EVER supermarkets, browse our website ({BRAND_INFO.email}), or participate in customer programs such as the PAARR Passport or digital billing, we may collect the following information:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm text-muted-grey">
                <li>Contact details: Name, mobile number for digital invoice delivery, and email address.</li>
                <li>Transaction details: Items purchased, date, store branch location, and payment method used.</li>
                <li>Store safety: In-store Closed-Circuit Television (CCTV) footage for the safety of customers and staff.</li>
                <li>Online inquiries: Messages, feedback, or vendor proposals submitted via our contact forms.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                We use collected information solely for legitimate retail and customer service purposes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm text-muted-grey">
                <li>Generating and dispatching digital purchase receipts and tax invoices via SMS or WhatsApp.</li>
                <li>Responding to customer care inquiries and resolving store feedback.</li>
                <li>Managing the PAARR Passport reward milestone recognitions.</li>
                <li>Complying with statutory accounting and Goods and Services Tax (GST) mandates in India.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                3. We Never Sell Your Data
              </h2>
              <p>
                PAARR EVER has a strict privacy commitment: We never sell, rent, or lease your personal telephone numbers or customer profiles to external brokers, marketing aggregators, or unsolicited telecallers.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                4. Data Security and Retention
              </h2>
              <p>
                Digital records are stored on secured server systems with encrypted access controls. Billing information is maintained in accordance with Indian commercial record retention regulations.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                5. Contacting Our Grievance Officer
              </h2>
              <p>
                If you have questions, corrections, or concerns regarding your privacy, please contact:
              </p>
              <div className="mt-3 p-4 rounded-md bg-ivory border border-border text-xs text-charcoal space-y-1">
                <strong className="text-[#7A1034]">Data Privacy Desk — {BRAND_INFO.name}</strong>
                <div>{BRAND_INFO.corporateAddress}</div>
                <div>Email: {BRAND_INFO.email}</div>
                <div>Phone: {BRAND_INFO.phone}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default PrivacyPolicy;
