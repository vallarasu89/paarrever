import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container/Container';
import { Button } from '@/components/common/Button/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight, Leaf, Award } from 'lucide-react';

export const AboutBrandSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F0] border-y border-[#EADDE2]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual left with People & Inset Farmer Photo */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#7A1034]/30 shadow-elevated bg-white aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80"
                    alt="Friendly PAARR EVER Supermarket store team greeting customers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#570B26]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs uppercase tracking-widest text-[#FCE2A9] font-bold">
                      Our Philosophy
                    </span>
                    <p className="font-serif text-lg font-medium text-white mt-1">
                      Respecting culinary traditions, honoring the farmer, and serving the neighborhood.
                    </p>
                  </div>
                </div>

                {/* Perfectly Contained Farmer Partner Badge (No Overlap outside) */}
                <div className="absolute bottom-4 right-4 z-20 w-32 h-32 rounded-xl overflow-hidden border-2 border-[#F9AD24] shadow-xl hidden sm:block bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=400&q=80"
                    alt="Delta Farmer Partner"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#570B26]/90 py-1 px-1.5 text-center text-[10px] font-bold text-[#FCE2A9]">
                    Farmer Partner
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Editorial right */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-4 h-[2px] bg-[#F9AD24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#7A1034] font-sans">
                Heritage &amp; Community
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#570B26] leading-tight">
              A Modern Supermarket with the Soul of an Honest Village Grocer
            </h2>

            <p className="text-sm sm:text-base text-[#292329]/80 font-sans leading-relaxed">
              PAARR EVER was founded with a singular conviction: daily groceries should never come with doubts about purity, freshness, or exorbitant markups. By establishing direct supply lines with Tamil Nadu’s agricultural heartlands, we bridge the gap between hard-working farmers and conscious urban families.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-white border border-[#EADDE2] hover:border-[#7A1034] transition-colors">
                <Leaf className="w-5 h-5 text-[#7A1034] mb-2" />
                <h4 className="font-serif text-base font-medium text-[#570B26]">
                  Unadulterated Staples
                </h4>
                <p className="text-xs text-[#766A70] font-sans mt-1">
                  Unpolished dals, native rices, and pure spices with zero synthetic additives.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#EADDE2] hover:border-[#7A1034] transition-colors">
                <Award className="w-5 h-5 text-[#7A1034] mb-2" />
                <h4 className="font-serif text-base font-medium text-[#570B26]">
                  Community Accountability
                </h4>
                <p className="text-xs text-[#766A70] font-sans mt-1">
                  Over 25 stores rooted directly in Chennai residential neighborhoods.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/about">
                <Button
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="font-bold shadow-sm"
                >
                  Read Our Full Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
