import React from 'react';
import { TESTIMONIALS } from '@/data/testimonials';
import { Container } from '@/components/common/Container/Container';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { FadeIn } from '@/components/animations/FadeIn';
import { Star, CheckCircle, Quote } from 'lucide-react';

const CUSTOMER_AVATARS: Record<string, string> = {
  'rev-1': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', // Kalyani Seshadri
  'rev-2': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', // Raghavan Narayanan
  'rev-3': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80', // Dr. Priya Sundaram
  'rev-4': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', // Venkatesh Balaji
  'rev-5': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', // Meenakshi Krishnan
  'rev-6': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80', // Suresh Chandran
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F7EAF0] border-b border-[#EADDE2]">
      <Container>
        <SectionHeading
          eyebrow="Neighborhood Voices"
          title="Loved by Families Across Chennai"
          description="Read honest reflections from regular shoppers who trust PAARR EVER for authentic staples, fresh daily produce, and courteous service."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.slice(0, 6).map((rev, idx) => {
            const avatarUrl = CUSTOMER_AVATARS[rev.id] || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
            return (
              <FadeIn key={rev.id} delay={idx * 0.08}>
                <div className="p-6 rounded-2xl bg-white border border-[#EADDE2] hover:border-[#7A1034] hover:shadow-card transition-all duration-300 flex flex-col justify-between h-full relative group">
                  <Quote className="w-8 h-8 text-[#7A1034]/15 absolute top-5 right-5 group-hover:text-[#7A1034]/30 transition-colors" />
                  
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#F9AD24] fill-[#F9AD24]" />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-[#292329]/85 font-sans leading-relaxed italic mb-6">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>

                  {/* Customer Portrait & Name */}
                  <div className="pt-4 border-t border-[#EADDE2] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={avatarUrl}
                        alt={rev.author}
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-[#7A1034]/25 shadow-xs shrink-0"
                      />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#570B26]">
                          {rev.author}
                        </h4>
                        <span className="text-[11px] text-[#766A70] font-sans block">
                          {rev.storeLocation}
                        </span>
                      </div>
                    </div>

                    {rev.verifiedShopper && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-sans text-[#7A1034] font-bold bg-[#F7EAF0] px-2.5 py-1 rounded-full border border-[#7A1034]/15">
                        <CheckCircle className="w-3 h-3 text-[#7A1034] shrink-0" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
