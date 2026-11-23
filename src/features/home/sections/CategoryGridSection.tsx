import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  Cookie,
  Utensils,
  ShoppingBag,
  Milk,
  BookOpen,
  Smile,
  PawPrint,
  LayoutGrid,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Store
} from 'lucide-react';

interface CategoryCardItem {
  id: string;
  name: string;
  subtitle: string;
  itemCount: string;
  icon: React.ElementType;
  imageUrl: string;
  badge?: string;
}

export const CategoryGridSection: React.FC = () => {
  const categories: CategoryCardItem[] = [
    {
      id: 'packaged-food',
      name: 'Packaged food',
      subtitle: 'Baking needs, Jams & Honey',
      itemCount: '180+ Items',
      icon: Cookie,
      imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80',
      badge: 'Popular',
    },
    {
      id: 'snacking-sweets',
      name: 'Snacking & Sweets',
      subtitle: 'Biscuits, Chips & Nachos',
      itemCount: '240+ Items',
      icon: Utensils,
      imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80',
      badge: 'Bestseller',
    },
    {
      id: 'daily-essentials',
      name: 'Daily essentials',
      subtitle: 'Dry fruits & nuts, Sugar',
      itemCount: '350+ Items',
      icon: ShoppingBag,
      imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
      badge: 'Value Pack',
    },
    {
      id: 'dairy',
      name: 'Dairy',
      subtitle: 'Milk, Curd, Paneer',
      itemCount: 'Fresh Daily',
      icon: Milk,
      imageUrl: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80',
      badge: '7 AM Fresh',
    },
    {
      id: 'stationery',
      name: 'Stationery',
      subtitle: 'School supplies',
      itemCount: '120+ Items',
      icon: BookOpen,
      imageUrl: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'baby-care',
      name: 'Baby care',
      subtitle: 'Baby accessories',
      itemCount: 'Gentle Care',
      icon: Smile,
      imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80',
      badge: 'Safe & Pure',
    },
    {
      id: 'pet-care',
      name: 'Pet Care',
      subtitle: 'Pet accessories',
      itemCount: '80+ Items',
      icon: PawPrint,
      imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'more-categories',
      name: 'More Categories',
      subtitle: 'Explore all items',
      itemCount: '5,000+ SKUs',
      icon: LayoutGrid,
      imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
      badge: 'Explore All',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FFF9F0] border-b border-[#EADDE2] relative overflow-hidden">
      {/* Subtle ambient brand glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-br from-[#F9AD24]/10 via-[#7A1034]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Modern Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EAF0] border border-[#7A1034]/20 text-[#7A1034] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F9AD24]" />
            Curated Supermarket Aisles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292329] tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#766A70] font-sans">
            Step into a world of fresh flavors and everyday essentials that feel just like home
          </p>
        </div>

        {/* 8 Modern Category Cards in 4-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <FadeIn key={cat.id} delay={idx * 0.05}>
                <Link
                  to="/categories"
                  className="group block rounded-2xl bg-white border border-[#EADDE2] overflow-hidden hover:border-[#7A1034]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between"
                >
                  {/* Card Visual Image with Zoom on Hover */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#F7EAF0]">
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                    {/* Top Item Count Tag */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#570B26] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#EADDE2] shadow-xs">
                      {cat.itemCount}
                    </div>

                    {/* Highlight Badge if exists */}
                    {cat.badge && (
                      <div className="absolute top-3 right-3 bg-[#7A1034] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                        {cat.badge}
                      </div>
                    )}

                    {/* Quick Explore Icon in Corner */}
                    <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/90 text-[#7A1034] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#F9AD24] group-hover:text-[#570B26] transition-all duration-300 shadow">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Overlapping Floating Brand Icon Badge */}
                  <div className="px-5 -mt-6 relative z-10 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7A1034] to-[#570B26] text-[#F9AD24] border-2 border-white shadow-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Typography & Details */}
                  <div className="p-5 pt-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-sans text-base font-bold text-[#292329] group-hover:text-[#7A1034] transition-colors leading-snug">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-[#766A70] mt-1 font-sans line-clamp-1">
                        {cat.subtitle}
                      </p>
                    </div>

                    {/* Action Bottom Row */}
                    <div className="pt-3.5 mt-3.5 border-t border-[#EADDE2]/70 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#7A1034] group-hover:text-[#570B26] flex items-center gap-1">
                        Explore Department
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <span className="text-[11px] text-[#766A70] font-medium">In-Store</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12 flex flex-col items-center">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2.5 px-9 py-3.5 rounded-xl bg-[#F9AD24] hover:bg-[#FCE2A9] text-[#570B26] font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-[#F9AD24]"
          >
            <Sparkles className="w-4 h-4 text-[#570B26]" />
            View All Categories &amp; Aisles
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="mt-3 text-xs text-[#766A70] flex items-center gap-1.5">
            <Store className="w-3.5 h-3.5 text-[#7A1034]" />
            Fresh stocks delivered daily across all 25+ Chennai neighborhood stores
          </p>
        </div>
      </Container>
    </section>
  );
};
