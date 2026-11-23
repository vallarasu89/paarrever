import React, { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';
import { Container } from '@/components/common/Container/Container';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { Button } from '@/components/common/Button/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { formatCurrency } from '@/utils/helpers';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { Eye } from 'lucide-react';

export const FeaturedProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const categories = [
    { label: 'All Staples', value: 'all' },
    { label: 'Rice & Grains', value: 'staples-rice' },
    { label: 'Cold-Pressed Oils', value: 'oils-ghee' },
    { label: 'Masalas & Spices', value: 'spices-masalas' },
    { label: 'Degree Coffee', value: 'beverages-coffee' },
    { label: 'Traditional Snacks', value: 'snacks-sweets' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categorySlug === selectedCategory);

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F0]">
      <Container>
        <SectionHeading
          eyebrow="The Daily Pantry"
          title="Signature Essentials"
          description="A curated selection of our highest-rated traditional staples, prepared with unadulterated methods and available in all 25+ neighborhood branches."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                selectedCategory === cat.value
                  ? 'bg-[#7A1034] text-white shadow-sm'
                  : 'bg-[#F7EAF0] text-[#7A1034] border border-[#7A1034]/20 hover:bg-[#7A1034] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((prod, idx) => (
            <FadeIn key={prod.id} delay={idx * 0.06}>
              <div className="group rounded-xl overflow-hidden bg-white border border-[#EADDE2] hover:border-[#7A1034] hover:shadow-card transition-all duration-300 flex flex-col h-full">
                {/* Image & Badges */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F7EAF0]">
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prod.isBestseller && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-sm bg-[#7A1034] text-[#FCE2A9] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      Bestseller
                    </span>
                  )}
                  {prod.discountPercentage && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-sm bg-[#F9AD24] text-[#570B26] text-[10px] font-bold shadow-sm">
                      {prod.discountPercentage}% OFF
                    </span>
                  )}
                  <button
                    onClick={() => setModalProduct(prod)}
                    className="absolute inset-0 bg-[#570B26]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold"
                  >
                    <Eye className="w-4 h-4 text-[#FCE2A9]" />
                    <span>View Details</span>
                  </button>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A1034] block">
                      {prod.categoryName}
                    </span>
                    <h3 className="font-serif text-base font-medium text-[#570B26] mt-1 line-clamp-2">
                      {prod.name}
                    </h3>
                    {prod.tamilName && (
                      <p className="text-xs text-[#7A1034]/80 font-sans mt-0.5 truncate font-medium">
                        {prod.tamilName}
                      </p>
                    )}
                    <span className="inline-block mt-2 text-xs text-[#766A70] font-sans">
                      {prod.weight}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#EADDE2] flex items-center justify-between">
                    <div>
                      <span className="font-serif text-lg font-bold text-[#7A1034]">
                        {formatCurrency(prod.price)}
                      </span>
                      {prod.originalPrice && (
                        <span className="ml-2 text-xs line-through text-[#766A70] font-sans">
                          {formatCurrency(prod.originalPrice)}
                        </span>
                      )}
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setModalProduct(prod)}
                      className="text-xs py-1.5 px-3 font-semibold border-[#7A1034] text-[#7A1034] hover:bg-[#7A1034] hover:text-ivory"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Modal */}
      <ProductDetailModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </section>
  );
};
