import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container/Container';
import { Button } from '@/components/common/Button/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { Award, Compass, Gift, Star, ArrowRight } from 'lucide-react';

export const PassportCalloutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FFF9F0] border-b border-[#EADDE2]">
      <Container>
        <div className="bg-gradient-to-br from-[#570B26] via-[#6B0D2F] to-[#7A1034] text-white rounded-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-[#F9AD24]/40 shadow-elevated">
          {/* Subtle decorative gold badge in background */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-[#7A1034] opacity-50 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-[#FCE2A9] text-xs font-semibold uppercase tracking-wider border border-[#F9AD24]/30">
                <Compass className="w-3.5 h-3.5 text-[#F9AD24] shrink-0" />
                <span>Exclusive In-Store Kids Program</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white leading-tight">
                Turn Every Grocery Run Into an Adventure with{' '}
                <span className="text-[#FCE2A9] italic">PAARR Passport</span>
              </h2>

              <p className="text-sm sm:text-base text-[#FFF9F0]/90 font-sans leading-relaxed max-w-xl">
                Designed to make children love shopping for healthy groceries! Collect stamps on every visit above ₹100, solve fun South Indian agriculture puzzles, and claim special badges and gifts at the billing counter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#FFF9F0]/90">
                  <Gift className="w-4 h-4 text-[#F9AD24] shrink-0" />
                  <span>Free Booklet with ₹100+ bill</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#FFF9F0]/90">
                  <Star className="w-4 h-4 text-[#F9AD24] shrink-0" />
                  <span>Stamps on Every Visit</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#FFF9F0]/90">
                  <Award className="w-4 h-4 text-[#F9AD24] shrink-0" />
                  <span>Surprise Gifts &amp; Badges</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/passport">
                  <Button
                    variant="gold"
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4 text-[#570B26]" />}
                    className="font-bold shadow-md bg-[#F9AD24] hover:bg-[#FCE2A9] text-[#570B26] border border-[#F9AD24]"
                  >
                    Discover How It Works
                  </Button>
                </Link>
                <Link to="/stores">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#FFF9F0]/50 text-[#FFF9F0] hover:text-white hover:border-white hover:bg-white/10"
                  >
                    Find a Passport Counter
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <FadeIn delay={0.2} direction="left">
                <div className="bg-[#570B26] p-6 rounded-xl border border-[#F9AD24]/40 shadow-xl max-w-sm text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#6B0D2F] border-2 border-[#F9AD24] flex items-center justify-center text-[#FCE2A9]">
                    <Compass className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#FCE2A9] font-semibold">
                      Junior Explorer Club
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                      PAARR Passport 2026 Edition
                    </h3>
                  </div>
                  <p className="text-xs text-[#FFF9F0]/80 font-sans leading-relaxed">
                    Available at all 25+ billing counters. Ask any store executive for your child’s complimentary booklet.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
