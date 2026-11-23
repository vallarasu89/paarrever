import React from 'react';
import { PageTransition } from '@/components/animations/PageTransition';
import { HeroSection } from './sections/HeroSection';
import { BrandStatsSection } from './sections/BrandStatsSection';
import { CategoryGridSection } from './sections/CategoryGridSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { FeaturedProductsSection } from './sections/FeaturedProductsSection';
import { SpecialOffersSection } from './sections/SpecialOffersSection';
import { CommunityImpactSection } from './sections/CommunityImpactSection';
import { StorePreviewSection } from './sections/StorePreviewSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { AboutBrandSection } from './sections/AboutBrandSection';
import { FaqSection } from './sections/FaqSection';
import { ContactCtaSection } from './sections/ContactCtaSection';

export const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* 3. Premium Hero Section */}
      <HeroSection />

      {/* 4. Brand Statistics */}
      <BrandStatsSection />

      {/* 5. Shop by Categories */}
      <CategoryGridSection />

      {/* 6. Why Choose PAARR EVER */}
      <WhyChooseSection />

      {/* 7. Featured Products */}
      <FeaturedProductsSection />

      {/* 8. Special Offers */}
      <SpecialOffersSection />

      {/* 9. Community Impact */}
      <CommunityImpactSection />

      {/* 10. Store Locator Preview */}
      <StorePreviewSection />

      {/* 11. Customer Testimonials */}
      <TestimonialsSection />

      {/* 13. About Brand */}
      <AboutBrandSection />

      {/* 14. FAQs */}
      <FaqSection />

      {/* 15. Contact CTA */}
      <ContactCtaSection />
    </PageTransition>
  );
};

export default Home;
