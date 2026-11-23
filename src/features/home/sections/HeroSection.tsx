import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button/Button';
import { Container } from '@/components/common/Container/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { ImageLoader } from '@/components/loaders/ImageLoader';
import { MapPin, Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#570B26] via-[#6B0D2F] to-[#7A1034] text-white py-12 lg:py-20 border-b border-[#7A1034]">
      {/* Subtle organic background accent lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 Q400,100 800,40 T1600,60" fill="none" stroke="#F9AD24" strokeWidth="1.5" strokeDasharray="6 6" />
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/25 border border-[#F9AD24]/30 text-[#FCE2A9] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#F9AD24] shrink-0" />
                <span>Experience Shopping &amp; Savings &bull; 25+ Chennai Supermarkets</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.12] tracking-tight">
                Authentic South Indian Staples,{' '}
                <span className="italic font-normal text-[#FCE2A9]">Lowest Price</span> in Chennai.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-[#FFF9F0]/90 font-sans leading-relaxed max-w-2xl">
                From aged Thanjavur Ponni rice and cold-pressed Mara Chekku oils to freshly churned dairy and stone-ground masalas — PAARR EVER brings honest, farm-direct purity and unmatched supermarket savings to your family.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/stores">
                  <Button
                    variant="gold"
                    size="lg"
                    leftIcon={<MapPin className="w-4 h-4 text-[#570B26]" />}
                    rightIcon={<ArrowRight className="w-4 h-4 text-[#570B26]" />}
                    className="font-bold shadow-lg bg-[#F9AD24] hover:bg-[#FCE2A9] text-[#570B26] border border-[#F9AD24]"
                  >
                    Find Nearest Store
                  </Button>
                </Link>

                <Link to="/categories">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#FFF9F0]/50 text-[#FFF9F0] hover:bg-white/10 hover:text-white hover:border-white font-semibold"
                  >
                    Browse 16+ Categories
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* Micro Trust Indicators */}
            <FadeIn delay={0.5}>
              <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#FCE2A9] shrink-0" />
                  <span className="text-xs sm:text-sm font-sans font-medium text-[#FFF9F0]">
                    100% Direct Sourced
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Tag className="w-4 h-4 text-[#FCE2A9] shrink-0" />
                  <span className="text-xs sm:text-sm font-sans font-medium text-[#FFF9F0]">
                    Lowest Price Guarantee
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#F9AD24] shrink-0" />
                  <span className="text-xs sm:text-sm font-sans font-medium text-[#FFF9F0]">
                    7 AM Daily Fresh Produce
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Asymmetrical Editorial Composition */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.3} direction="left">
              <div className="relative">
                {/* Main Hero Image - Full 100% Container Coverage */}
                <div className="rounded-xl overflow-hidden border border-[#F9AD24]/30 bg-black/30 shadow-elevated relative z-10 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
                    alt="PAARR EVER Supermarket Interior with pristine fresh produce displays"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Top-Left Tag on Desktop - Crisp and Never Overlapping */}
                  <div className="absolute top-4 left-4 z-10 hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-[#F9AD24]/50 text-[#FCE2A9] text-xs font-semibold uppercase tracking-wider shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F9AD24] animate-pulse" />
                    <span>Lowest Price in Chennai</span>
                  </div>

                  {/* Subtle Natural Vignette for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Mobile-only Bottom Overlay (Hidden on desktop so it never overlaps the 25+ Stores badge) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 text-white sm:hidden">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCE2A9]">
                      Lowest Price in Chennai
                    </span>
                    <p className="font-serif text-base font-medium text-white mt-0.5">
                      Air-conditioned, modern supermarket shopping for everyday savings
                    </p>
                  </div>
                </div>

                {/* Overlapping Floating Badge in Brand Burgundy & Gold */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-[#570B26] text-white p-4 rounded-lg shadow-xl border-2 border-[#F9AD24] hidden sm:block max-w-[220px]">
                  <span className="text-2xl font-serif font-bold text-[#FCE2A9] block">
                    25+ Stores
                  </span>
                  <span className="text-xs font-sans text-[#FFF9F0]/90 leading-tight block mt-1">
                    Mylapore, Besant Nagar, Kodambakkam &amp; all Chennai neighborhoods
                  </span>
                </div>

                {/* Secondary Inset Visual */}
                <div className="absolute -top-6 -right-6 z-20 w-32 h-32 rounded-lg overflow-hidden border-2 border-[#F9AD24] shadow-lg hidden sm:block">
                  <img
                    src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80"
                    alt="Mara Chekku Cold Pressed Oil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};
