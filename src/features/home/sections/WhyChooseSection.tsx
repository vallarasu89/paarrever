import React from 'react';
import { Container } from '@/components/common/Container/Container';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, Shield, Sprout, Heart, Store } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const pillars = [
    {
      title: 'Direct Delta & Rural Sourcing',
      description: 'We bypass multiple layers of wholesale traders, working straight with farming clusters in Thanjavur, Erode, Madurai, and Nilgiris for true single-origin crops.',
      icon: Sprout,
    },
    {
      title: 'Mara Chekku Wood Extraction',
      description: 'Our sesame, groundnut, and coconut oils are extracted in traditional Vaagai wooden presses below 40°C. Never heated, chemically refined, or mineral-oil blended.',
      icon: Shield,
    },
    {
      title: 'Neighborhood Store Hospitality',
      description: 'Each store is designed for quick, comfortable neighborhood visits: clean air-conditioned aisles, polite staff, fast billing, and easy parking.',
      icon: Store,
    },
    {
      title: 'Fair & Transparent Pricing',
      description: 'Purity shouldn’t be a luxury. By cutting distributor markups, PAARR EVER delivers genuine high-grade groceries at prices that honor your household budget.',
      icon: Heart,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7EAF0] border-y border-[#EADDE2]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="The PAARR EVER Difference"
              title="A Neighborhood Supermarket Rooted in Trust"
              description="In an era of mass-processed groceries and dark-store shortcuts, PAARR EVER brings back the sacred relationship between honest grocers and Chennai families."
              className="mb-6"
            />

            <div className="space-y-3 font-sans text-sm text-[#292329]/90">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#7A1034] text-[#FCE2A9] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Lab-tested for pesticide residues and artificial polishes.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#7A1034] text-[#FCE2A9] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Same-day arrivals of native greens, vegetables, and milk.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#7A1034] text-[#FCE2A9] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Courteous neighborhood store staff &amp; ultra-fast billing checkout.</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strategic Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={idx * 0.1}>
                  <div className="p-6 rounded-xl bg-white border border-[#EADDE2] hover:border-[#7A1034] transition-all duration-300 h-full flex flex-col justify-between shadow-subtle hover:shadow-card">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#F7EAF0] border border-[#7A1034]/20 flex items-center justify-center text-[#7A1034] mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg font-medium text-[#570B26] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#292329]/80 leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
