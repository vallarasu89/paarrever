import React from 'react';
import { Container } from '@/components/common/Container/Container';
import { FadeIn } from '@/components/animations/FadeIn';

export const CommunityImpactSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#EADDE2]">
      <Container>
        {/* Title matching exact reference screenshot */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292329]">
            Community Impact
          </h2>
          <p className="mt-2 text-sm text-[#766A70] font-sans">
            our commitment to tamil nadu goes beyond just business
          </p>
        </div>

        {/* 3 Impact Stat Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <div className="space-y-2">
              <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#7A1034] tracking-tight block">
                5000+
              </span>
              <h3 className="font-sans text-base font-bold text-[#292329]">
                SKUs
              </h3>
              <p className="text-xs sm:text-sm text-[#766A70] font-sans leading-relaxed max-w-xs mx-auto">
                Direct partnerships providing fair prices and sustainable livelihoods
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-2">
              <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#F9AD24] tracking-tight block">
                16+
              </span>
              <h3 className="font-sans text-base font-bold text-[#292329]">
                Categories
              </h3>
              <p className="text-xs sm:text-sm text-[#766A70] font-sans leading-relaxed max-w-xs mx-auto">
                Shop 16+ trusted categories for your everyday needs
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-2">
              <span className="font-sans text-4xl sm:text-5xl font-extrabold text-[#570B26] tracking-tight block">
                25
              </span>
              <h3 className="font-sans text-base font-bold text-[#292329]">
                Store Locations
              </h3>
              <p className="text-xs sm:text-sm text-[#766A70] font-sans leading-relaxed max-w-xs mx-auto">
                Serving communities across Chennai and Tamil Nadu
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};
