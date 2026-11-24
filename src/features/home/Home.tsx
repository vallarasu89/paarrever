import React from 'react';
import { PageTransition } from '@/components/animations/PageTransition';
import { HeroSection } from './sections/HeroSection';
import { BrandExperienceSection } from './sections/BrandExperienceSection';
import { BrandStatsSection } from './sections/BrandStatsSection';
import { CategoryGridSection } from './sections/CategoryGridSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { FeaturedProductsSection } from './sections/FeaturedProductsSection';
import { SpecialOffersSection } from './sections/SpecialOffersSection';
import { StoreVideoSection } from './sections/StoreVideoSection';
import { CommunityImpactSection } from './sections/CommunityImpactSection';
import { StorePreviewSection } from './sections/StorePreviewSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { AboutBrandSection } from './sections/AboutBrandSection';
import { FaqSection } from './sections/FaqSection';
import { ContactCtaSection } from './sections/ContactCtaSection';

export const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Brand Experiences at PAARR - Grand New Opening (Hypermall Building Image) */}
      <BrandExperienceSection />

      {/* 3. Brand Statistics */}
      <BrandStatsSection />

      {/* 4. Shop by Categories */}
      <CategoryGridSection />

      {/* 5. Why Choose PAARR EVER */}
      <WhyChooseSection />

      {/* 6. Featured Products */}
      <FeaturedProductsSection />

      {/* 7. Special Offers */}
      <SpecialOffersSection />

      {/* 8. Virtual Store Tour Video Section (Separate Cinematic Video Experience) */}
      <StoreVideoSection />

      {/* 9. Community Impact */}
      <CommunityImpactSection />

      {/* 10. Store Locator Preview */}
      <StorePreviewSection />

      {/* 11. Customer Testimonials */}
      <TestimonialsSection />

      {/* 12. About Brand */}
      <AboutBrandSection />

      {/* 13. FAQs */}
      <FaqSection />

      {/* 14. Contact CTA */}
      <ContactCtaSection />
    </PageTransition>
  );
};

export default Home;
