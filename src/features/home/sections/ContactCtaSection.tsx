import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container/Container';
import { Button } from '@/components/common/Button/Button';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

export const ContactCtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#570B26] via-[#6B0D2F] to-[#7A1034] text-white border-t border-[#7A1034]">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#FCE2A9] font-semibold block">
            Always Here for You
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white leading-tight">
            Visit Your Neighborhood PAARR EVER Today
          </h2>
          <p className="text-sm sm:text-base text-[#FFF9F0]/90 font-sans leading-relaxed max-w-2xl mx-auto">
            Experience the difference of fresh delta staples, stone-pressed oils, and friendly smiles. Have a suggestion, bulk query, or feedback? Our team is always ready to assist.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/stores">
              <Button
                variant="gold"
                size="lg"
                leftIcon={<MapPin className="w-4 h-4 text-[#570B26]" />}
                className="font-bold shadow-lg bg-[#F9AD24] hover:bg-[#FCE2A9] text-[#570B26] border border-[#F9AD24]"
              >
                Explore All 25+ Stores
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-[#FFF9F0]/50 text-[#FFF9F0] hover:text-white hover:border-white hover:bg-white/10"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Send Us a Message
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FFF9F0]/80 font-sans">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#FCE2A9]" />
              <span>Customer Care: 044-46143999</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#FCE2A9]" />
              <span>care@paarrever.com</span>
            </span>
            <span>&bull;</span>
            <span>Open 7:00 AM – 10:30 PM (All 7 Days)</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
