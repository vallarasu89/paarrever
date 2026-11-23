import React from 'react';
import { Container } from '@/components/common/Container/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb/Breadcrumb';
import { PageTransition } from '@/components/animations/PageTransition';
import { BRAND_INFO } from '@/utils/constants';

export const TermsConditions: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-[#570B26] text-white py-10 lg:py-14 border-b border-[#7A1034]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=85"
            alt="PAARR EVER Terms & Conditions"
            className="w-full h-full object-cover opacity-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#570B26] via-[#570B26]/85 to-transparent" />
        </div>

        <Container size="narrow" className="relative z-10">
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} variant="dark" />
          <div className="mt-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FCE2A9] font-semibold block mb-2">
              Store &amp; Website Governance
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-medium text-white">
              Terms &amp; Conditions
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#FFF9F0]/80 font-sans">
              Effective: January 2026 &bull; {BRAND_INFO.legalName}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white font-sans text-sm text-charcoal/80 leading-relaxed">
        <Container size="narrow">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                1. Store Operations &amp; In-Store Purchases
              </h2>
              <p>
                All sales conducted at PAARR EVER supermarket outlets are subject to standard consumer retail guidelines. Prices displayed on shelf tags and packaging reflect the Maximum Retail Price (MRP) or our discounted PAARR Ever Offer Price inclusive of all applicable taxes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                2. Fresh Produce &amp; Perishables Policy
              </h2>
              <p>
                Because fresh vegetables, leafy greens, dairy, and freshly churned batter are perishable items, we encourage customers to inspect products before checkout. Returns on fresh perishables must be reported within 24 hours of purchase with the original billing receipt.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                3. Packaged Staples &amp; Returns
              </h2>
              <p>
                Unopened non-perishable staples (such as rice bags, cold-pressed oils, and sealed spice pouches) may be exchanged within 7 days of purchase at any PAARR EVER branch upon presenting the valid invoice. Items must be in original, unadulterated condition.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                4. PAARR Passport Terms
              </h2>
              <p>
                The PAARR Passport is an engagement initiative intended for families with children. Stamps are provided at checkout for bills exceeding ₹100. Rewards and gifts are distributed subject to in-store availability. The Passport has no cash surrender value.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                5. Intellectual Property
              </h2>
              <p>
                The PAARR EVER trademark, logo, typography, and website content are the intellectual property of {BRAND_INFO.legalName}. Any unauthorized reproduction, imitation, or scraping is prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#570B26] mb-2">
                6. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These terms are governed in accordance with the laws of India. Any legal disputes arising in connection with store purchases or online services shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default TermsConditions;
