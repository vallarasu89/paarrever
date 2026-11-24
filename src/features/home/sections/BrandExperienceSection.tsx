import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import hypermallImg from '@/assets/images/hypermall.jpg';
import {
  Sparkles,
  MapPin,
  ArrowRight,
  Building2,
  Car,
  BadgePercent,
  Wind,
  Crown,
  CheckCircle2,
} from 'lucide-react';

export const BrandExperienceSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EA] to-[#FFF9F0] text-[#292329] relative overflow-hidden border-b border-[#EADDE2]">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F9AD24]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#7A1034]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Elite Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#570B26] text-[#FCE2A9] text-xs font-black tracking-widest uppercase mb-4 shadow-sm border border-[#F9AD24]/50">
              <Crown className="w-3.5 h-3.5 text-[#F9AD24]" />
              <span>{language === 'TA' ? 'சென்னையின் முதன்மை மெகா மால்' : 'Chennai’s Elite Retail Landmark'}</span>
              <span className="w-2 h-2 rounded-full bg-[#E53935] live-beacon-blink ml-0.5" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-[#570B26] leading-tight drop-shadow-sm">
              PAARR Hypermarket <br />
              <span className="text-[#7A1034] relative inline-block">
                Flagship Mega Mall
                <span className="block h-1 w-full bg-[#F9AD24] rounded-full mt-2" />
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-4 text-sm sm:text-base text-[#292329]/80 font-sans leading-relaxed max-w-2xl mx-auto">
              {language === 'TA'
                ? 'சென்னையின் மிகப்பெரிய பிரம்மாண்ட ஷாப்பிங் மால்! 4 முன்னணி பிராண்டுகள் ஒரே கம்பீரமான கூரையின் கீழ்.'
                : 'Experience the grandeur of Chennai’s premier shopping destination. 4 powerhouse household brands brought together in one royal, climate-controlled complex.'}
            </p>
          </FadeIn>
        </div>

        {/* Visual Showcase: Monumental Building Photography + Luxury Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Building Photograph in Clean Frame - Full Uncropped */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#EADDE2] bg-[#1A030C] group ring-1 ring-[#570B26]/5">
                <div className="relative aspect-[16/9.5] overflow-hidden flex items-center justify-center">
                  <img
                    src={hypermallImg}
                    alt="Brand Experiences at PAARR Hypermarket Complex - Flagship Destination"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out brightness-[1.02]"
                  />
                  {/* Subtle Gradient for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                  {/* Top Elite Live Beacon Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E53935] text-white text-xs font-black uppercase tracking-wider shadow-lg">
                      <span className="w-2.5 h-2.5 rounded-full bg-white live-beacon-blink" />
                      {language === 'TA' ? 'பிரம்மாண்ட திறப்பு விழா' : 'Grand New Opening'}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[#FCE2A9] text-xs font-bold border border-[#F9AD24]/40 flex items-center gap-1.5">
                      <Crown className="w-3.5 h-3.5 text-[#F9AD24]" />
                      <span>{language === 'TA' ? 'மெகா மால் காம்ப்ளக்ஸ்' : 'Flagship Multi-Brand'}</span>
                    </span>
                  </div>

                  {/* Bottom Info Strip */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3 z-10">
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-[#F9AD24] block">
                        OMR &bull; PIN 600096
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight drop-shadow-md text-white">
                        PAARR Hypermarket Complex
                      </h3>
                      <p className="text-xs text-white/85 flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#F9AD24] shrink-0" />
                        <span>Rajiv Gandhi Salai (OMR), Near Toll Plaza, Chennai</span>
                      </p>
                    </div>

                    <Link
                      to="/stores/store-flagship-hypermarket"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F9AD24] text-[#570B26] text-xs font-black uppercase tracking-wider shadow-md hover:bg-[#FCE2A9] transition-all shrink-0 hover:scale-105"
                    >
                      <span>{language === 'TA' ? 'விவரங்கள்' : 'Explore Mall'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Amenities, Story & Experience */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={0.3} direction="left">
              {/* Flagship Story & Introduction */}
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#7A1034] block">
                  {language === 'TA' ? 'சென்னையின் புதிய ஷாப்பிங் சகாப்தம்' : 'A New Era of Shopping in Chennai'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#570B26] leading-snug">
                  {language === 'TA'
                    ? 'உங்கள் குடும்பத்திற்கான முழுமையான முதன்மை ஷாப்பிங் தளம்'
                    : 'One Majestic Destination for All Your Family Needs'}
                </h3>
                <p className="text-sm text-[#292329]/80 font-sans leading-relaxed">
                  {language === 'TA'
                    ? 'ஓ.எம்.ஆரில் அமைந்துள்ள பிரம்மாண்டமான புதிய மால் வளாகம். குடும்பத்தினருடன் இனிமையான, குளிரூட்டப்பட்ட சூழலில் மளிகைப் பொருட்கள் முதல் அனைத்தையும் ஒரே இடத்தில் பெற்றிடுங்கள்.'
                    : 'Step inside Chennai’s newest flagship retail landmark on OMR. Browse farm-fresh vegetables, single-origin grains, cold-pressed Mara Chekku oils, and thousands of daily staples across expansive climate-controlled aisles.'}
                </p>
              </div>

              {/* Architecture Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#EADDE2] shadow-xs flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#7A1034] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-[#570B26]">1,00,000+ Sq.Ft.</h4>
                    <p className="text-[11px] text-[#766A70]">Mega multi-level floor</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#EADDE2] shadow-xs flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#7A1034] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-[#570B26]">200+ Parking Bays</h4>
                    <p className="text-[11px] text-[#766A70]">Free dedicated parking</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#EADDE2] shadow-xs flex items-start gap-3">
                  <Wind className="w-5 h-5 text-[#7A1034] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-[#570B26]">Central Climate AC</h4>
                    <p className="text-[11px] text-[#766A70]">Cool, wide family aisles</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#EADDE2] shadow-xs flex items-start gap-3">
                  <BadgePercent className="w-5 h-5 text-[#7A1034] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-[#570B26]">Grand Offers</h4>
                    <p className="text-[11px] text-[#766A70]">Exclusive opening savings</p>
                  </div>
                </div>
              </div>

              {/* Luxury CTA Button */}
              <div className="pt-2">
                <Link
                  to="/stores/store-flagship-hypermarket"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#7A1034] hover:bg-[#570B26] text-white font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all group/btn"
                >
                  <Crown className="w-4 h-4 text-[#FCE2A9]" />
                  <span>
                    {language === 'TA' ? 'முதன்மைக் கிளையை நேரில் காண்க' : 'Experience The Flagship Hypermarket'}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandExperienceSection;
