import React from 'react';
import { OFFERS } from '@/data/products';
import { Container } from '@/components/common/Container/Container';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { FadeIn } from '@/components/animations/FadeIn';
import { Calendar } from 'lucide-react';

export const SpecialOffersSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F7EAF0] to-[#FFF9F0] border-y border-[#EADDE2]">
      <Container>
        <SectionHeading
          eyebrow="Market Highlights"
          title="This Week's Neighborhood Specials"
          description="Enjoy fresh harvest savings and seasonal bundles curated for honest household value across all PAARR EVER branches."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {OFFERS.map((offer, idx) => (
            <FadeIn key={offer.id} delay={idx * 0.1}>
              <div className="rounded-xl overflow-hidden bg-white border border-[#EADDE2] hover:border-[#7A1034] hover:shadow-card transition-all duration-300 flex flex-col h-full">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#F7EAF0]">
                  <img
                    src={offer.imageUrl}
                    alt={offer.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#7A1034] text-[#FCE2A9] text-xs font-bold uppercase tracking-wider shadow-sm">
                    {offer.badge}
                  </span>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-[#F9AD24] text-[#570B26] font-serif font-bold text-sm shadow-md">
                    {offer.discount}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#7A1034] font-bold">
                      {offer.category}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-[#570B26] mt-1">
                      {offer.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#292329]/80 font-sans leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#EADDE2] flex items-center justify-between text-xs text-[#292329]/80">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#7A1034]" />
                      {offer.validUntil}
                    </span>
                    {offer.code && (
                      <span className="font-mono bg-[#F7EAF0] text-[#7A1034] border border-[#7A1034]/20 px-2.5 py-0.5 rounded font-bold text-[11px]">
                        {offer.code}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};
