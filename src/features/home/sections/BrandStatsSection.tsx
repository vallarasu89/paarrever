import React from 'react';
import { Container } from '@/components/common/Container/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { BRAND_INFO } from '@/utils/constants';
import { Store, ShoppingBag, Layers, Users } from 'lucide-react';

export const BrandStatsSection: React.FC = () => {
  const stats = [
    {
      value: BRAND_INFO.stats.skuCount,
      label: 'Products & SKUs',
      description: 'Direct partnerships providing fair prices & sustainable livelihoods',
      color: 'text-sky-300',
      icon: ShoppingBag,
    },
    {
      value: `${BRAND_INFO.stats.categoriesCount} Categories`,
      label: 'Curated Departments',
      description: 'Shop trusted categories for all your everyday household needs',
      color: 'text-gold-light',
      icon: Layers,
    },
    {
      value: BRAND_INFO.stats.storesCount,
      label: 'Store Locations',
      description: 'Serving neighborhood communities across Chennai and Tamil Nadu',
      color: 'text-amber-300',
      icon: Store,
    },
    {
      value: BRAND_INFO.stats.happyFamilies,
      label: 'Happy Neighborhood Families',
      description: 'Choosing quality, daily freshness, and lowest price in Chennai',
      color: 'text-gold',
      icon: Users,
    },
  ];

  return (
    <section className="bg-[#570B26] text-white py-12 border-y border-[#7A1034]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.label} delay={idx * 0.1}>
                <div className="p-5 sm:p-6 rounded-lg bg-[#6B0D2F]/60 border border-[#7A1034]/40 relative group hover:border-[#F9AD24]/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F9AD24]">
                      {item.value}
                    </span>
                    <Icon className="w-5 h-5 text-[#FCE2A9]" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs text-[#FFF9F0]/80 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
