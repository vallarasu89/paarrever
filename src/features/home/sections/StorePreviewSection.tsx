import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { STORES } from '@/data/stores';
import { Container } from '@/components/common/Container/Container';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { Button } from '@/components/common/Button/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { MapPin, Search, ArrowRight, Clock, Phone } from 'lucide-react';

export const StorePreviewSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const displayedStores = STORES.filter((s) =>
    s.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.pincode.includes(searchTerm)
  ).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F0] border-b border-[#EADDE2]">
      <Container>
        <SectionHeading
          eyebrow="Convenient Locations"
          title="25+ Neighborhood Stores Across Chennai"
          description="Find your nearest PAARR EVER branch for farm-fresh groceries, comfortable air-conditioned aisles, and warm neighborhood hospitality."
          action={
            <Link to="/stores">
              <Button
                variant="outline"
                size="sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-semibold border-[#7A1034] text-[#7A1034] hover:bg-[#7A1034] hover:text-white"
              >
                View All 25+ Stores
              </Button>
            </Link>
          }
        />

        {/* Quick Search */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-[#7A1034] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by neighborhood (e.g. Mylapore, Besant Nagar, ECR)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-[#EADDE2] text-[#292329] placeholder-[#766A70]/70 text-sm focus:outline-none focus:border-[#7A1034] focus:ring-1 focus:ring-[#7A1034] shadow-sm"
            />
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedStores.map((store, idx) => (
            <FadeIn key={store.id} delay={idx * 0.08}>
              <div className="p-5 rounded-xl bg-white border border-[#EADDE2] hover:border-[#7A1034] hover:shadow-card transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7A1034] font-semibold mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#F7EAF0] text-[11px] font-bold text-[#7A1034]">
                      {store.zone}
                    </span>
                    <span className="text-[#766A70] font-mono text-[11px]">
                      {store.pincode}
                    </span>
                  </div>

                  <Link to={`/stores/${store.id}`} className="block group">
                    <h3 className="font-serif text-lg font-medium text-[#570B26] group-hover:text-[#7A1034] transition-colors mb-1.5">
                      {store.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#292329]/80 font-sans line-clamp-2 leading-relaxed mb-4">
                    {store.address}
                  </p>

                  <div className="space-y-1.5 text-xs text-charcoal/80 font-sans pt-2 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#7A1034] shrink-0" />
                      <span>{store.timings}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#7A1034] shrink-0" />
                      <span>{store.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(store.googleMapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A1034] hover:text-[#570B26]"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};
