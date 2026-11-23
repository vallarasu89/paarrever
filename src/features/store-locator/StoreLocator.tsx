import React, { useState, useMemo } from 'react';
import { STORES } from '@/data/stores';
import { StoreLocation } from '@/types/store';
import { Container } from '@/components/common/Container/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb/Breadcrumb';
import { PageTransition } from '@/components/animations/PageTransition';
import {
  MapPin,
  Search,
  Phone,
  Clock,
  Navigation,
  Sparkles,
  Car,
  X,
  CreditCard,
  Gift,
  ExternalLink,
  Store,
  CheckCircle2
} from 'lucide-react';

export const StoreLocator: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState('All');
  const [activeStore, setActiveStore] = useState<StoreLocation>(STORES[0]);
  const [mapMode, setMapMode] = useState<'interactive' | 'google'>('google');

  const zones = ['All', 'Chennai Central', 'Chennai South', 'Chennai North', 'Suburbs'];
  const popularAreas = ['Mylapore', 'Besant Nagar', 'Kodambakkam', 'Palavakkam', 'Royapettah', 'Kotturpuram', 'Thiruvanmiyur'];

  const filteredStores = useMemo(() => {
    return STORES.filter((store) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        store.name.toLowerCase().includes(q) ||
        store.area.toLowerCase().includes(q) ||
        store.address.toLowerCase().includes(q) ||
        store.pincode.includes(q);

      const matchesZone = selectedZone === 'All' || store.zone === selectedZone;

      return matchesSearch && matchesZone;
    });
  }, [searchQuery, selectedZone]);

  // Coordinate normalization for interactive map pins
  const minLat = 12.93;
  const maxLat = 13.12;
  const minLng = 80.14;
  const maxLng = 80.28;

  const getPinPos = (lat: number, lng: number) => {
    const y = ((maxLat - Math.max(minLat, Math.min(maxLat, lat))) / (maxLat - minLat)) * 74 + 13;
    const x = ((Math.max(minLng, Math.min(maxLng, lng)) - minLng) / (maxLng - minLng)) * 74 + 13;
    return { top: `${y}%`, left: `${x}%` };
  };

  return (
    <PageTransition>
      {/* Clean, Modern Hero Banner with Supermarket Storefront Photo */}
      <section className="relative overflow-hidden bg-[#570B26] text-white py-10 sm:py-12 border-b border-[#7A1034]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1920&q=85"
            alt="PAARR EVER Supermarket Storefront"
            className="w-full h-full object-cover object-right sm:object-center opacity-85 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#570B26] via-[#570B26]/85 sm:via-[#570B26]/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Breadcrumb items={[{ label: 'Store Locator' }]} variant="dark" />

            <div className="mt-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9AD24] text-[#570B26] text-[11px] font-extrabold uppercase tracking-wider mb-2.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                25+ Stores Across Chennai
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
                Find Your Neighborhood Store
              </h1>

              <p className="mt-2 text-xs sm:text-sm text-[#FFF9F0]/95 font-sans leading-relaxed max-w-xl">
                Air-conditioned aisles, 7:00 AM daily farm produce, cold-pressed Mara Chekku oil counters, and courteous neighborhood service at every branch.
              </p>

              {/* Compact Metrics Row */}
              <div className="mt-4 pt-3 border-t border-white/20 flex flex-wrap items-center gap-4 text-xs font-bold text-[#FCE2A9]">
                <span className="flex items-center gap-1.5 text-white">
                  <Clock className="w-3.5 h-3.5 text-[#F9AD24]" />
                  Open 7:00 AM – 10:30 PM (All 7 Days)
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <Car className="w-3.5 h-3.5 text-[#F9AD24]" />
                  Dedicated Customer Parking
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F9AD24]" />
                  Mara Chekku Oils &amp; Fresh Produce
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Modern Search & Zone Filter Bar */}
      <section className="bg-white border-b border-[#EADDE2] shadow-xs py-4 sticky top-[72px] z-30">
        <Container>
          <div className="space-y-3">
            {/* Search + Quick Area Shortcuts Row */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-xl">
                <Search className="w-5 h-5 text-[#7A1034] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search neighborhood or pincode (e.g. Mylapore, Besant Nagar, 600004)..."
                  className="w-full pl-11 pr-10 py-2.5 rounded-xl border border-[#EADDE2] bg-[#FFF9F0] text-sm text-[#292329] placeholder-[#766A70] focus:outline-none focus:ring-2 focus:ring-[#7A1034] focus:bg-white transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#766A70] hover:text-[#7A1034]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Area Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-[11px] font-bold text-[#766A70] uppercase tracking-wider shrink-0 mr-1 hidden sm:inline-block">
                  Hotspots:
                </span>
                {popularAreas.map((area) => (
                  <button
                    key={area}
                    onClick={() => setSearchQuery(area)}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#FFF9F0] text-[#570B26] border border-[#EADDE2] hover:bg-[#F7EAF0] hover:border-[#7A1034]/40 font-medium whitespace-nowrap transition-colors"
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Zone Filter Tabs + Store Counter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 pt-2 border-t border-[#EADDE2]/70">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                {zones.map((zone) => {
                  const isActive = selectedZone === zone;
                  return (
                    <button
                      key={zone}
                      onClick={() => setSelectedZone(zone)}
                      className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                        isActive
                          ? 'bg-[#7A1034] text-white shadow-sm ring-2 ring-[#7A1034]/20'
                          : 'bg-[#FFF9F0] text-[#292329] hover:bg-[#F7EAF0] hover:text-[#7A1034] border border-[#EADDE2]'
                      }`}
                    >
                      {zone}
                    </button>
                  );
                })}
              </div>

              <span className="text-xs font-bold text-[#7A1034] bg-[#F7EAF0] px-3 py-1 rounded-lg border border-[#7A1034]/20 self-end sm:self-auto shrink-0">
                Showing {filteredStores.length} of {STORES.length} Stores in Chennai
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Split Layout: Modern Retail Store Cards (Left) + Interactive Live Map with Pins (Right) */}
      <section className="py-8 sm:py-12 bg-[#FFF9F0] min-h-[750px]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Modern Store Cards List (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              {filteredStores.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-2xl border border-[#EADDE2] shadow-sm">
                  <Store className="w-12 h-12 text-[#7A1034] mx-auto mb-3 opacity-60" />
                  <h3 className="text-lg font-bold text-[#570B26]">
                    No stores found matching &ldquo;{searchQuery}&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-[#766A70] mt-1.5 max-w-md mx-auto">
                    Try searching for other Chennai areas like Mylapore, Besant Nagar, Kodambakkam, or reset the filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedZone('All');
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-[#7A1034] text-white font-bold text-xs hover:bg-[#570B26] transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredStores.map((store) => {
                  const isSelected = activeStore?.id === store.id;

                  return (
                    <div
                      key={store.id}
                      onClick={() => setActiveStore(store)}
                      className={`p-4 sm:p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-4 shadow-sm hover:shadow-md ${
                        isSelected
                          ? 'border-[#7A1034] ring-2 ring-[#7A1034]/25 bg-gradient-to-r from-white via-white to-[#FFF9F0]'
                          : 'border-[#EADDE2] hover:border-[#7A1034]/50 hover:-translate-y-0.5'
                      }`}
                    >
                      {/* Photo Thumbnail */}
                      <div className="w-full sm:w-36 h-36 sm:h-auto rounded-xl overflow-hidden shrink-0 relative bg-[#F7EAF0]">
                        <img
                          src={store.imageUrl}
                          alt={store.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-[#7A1034] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          {store.zone.replace('Chennai ', '')}
                        </div>
                        <div className="absolute bottom-2 left-2 inline-flex items-center gap-1 text-[10px] font-bold text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Open 7 AM - 10:30 PM
                        </div>
                      </div>

                      {/* Store Details */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="text-base sm:text-lg font-bold text-[#292329] group-hover:text-[#7A1034] transition-colors leading-tight">
                              {store.name}
                            </h3>
                            <span className="font-mono text-xs font-bold text-[#570B26] bg-[#FFF9F0] px-2 py-0.5 rounded-md border border-[#EADDE2] shrink-0">
                              PIN {store.pincode}
                            </span>
                          </div>

                          <p className="text-xs text-[#292329]/80 leading-relaxed mb-1.5">
                            {store.address}
                          </p>

                          <p className="text-[11px] font-medium text-[#7A1034] flex items-center gap-1 mb-2.5">
                            <MapPin className="w-3.5 h-3.5 text-[#F9AD24] shrink-0" />
                            <span>Landmark: {store.landmark}</span>
                          </p>

                          {/* Amenity Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {store.features.slice(0, 3).map((f, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#FFF9F0] text-[#570B26] border border-[#EADDE2]"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons Row */}
                        <div className="pt-3 border-t border-[#EADDE2] flex flex-wrap items-center justify-between gap-2">
                          <a
                            href={`tel:${store.phone.replace(/[^0-9]/g, '')}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A1034] hover:text-[#570B26] bg-[#F7EAF0] px-3 py-1.5 rounded-lg border border-[#7A1034]/20 transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5 text-[#7A1034]" />
                            <span>{store.phone}</span>
                          </a>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setActiveStore(store)}
                              className="text-xs font-bold text-[#7A1034] hover:underline px-2 py-1"
                            >
                              Show on Map
                            </button>

                            <a
                              href={`https://maps.google.com/?q=${encodeURIComponent(store.googleMapQuery)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#F9AD24] text-[#570B26] hover:bg-[#FCE2A9] text-xs font-bold transition-all shadow-xs"
                            >
                              <Navigation className="w-3.5 h-3.5" />
                              <span>Get Directions</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Right Column: Clean Interactive Map with Pins & Google Maps View (5 Cols - Sticky) */}
            <div className="lg:col-span-5 sticky top-[165px]">
              <div className="bg-white rounded-3xl border border-[#EADDE2] shadow-xl overflow-hidden">
                {/* Header with Store Name + Map View Mode Toggle */}
                <div className="bg-[#570B26] text-white p-4 flex items-center justify-between border-b border-[#7A1034]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#FCE2A9] font-bold block">
                      Active Supermarket Branch
                    </span>
                    <h4 className="text-base font-extrabold text-white leading-tight">
                      {activeStore.name}
                    </h4>
                  </div>

                  {/* Toggle between Live Google Map and Interactive Map Pins */}
                  <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl">
                    <button
                      onClick={() => setMapMode('google')}
                      className={`text-xs px-2.5 py-1 rounded-lg font-bold transition-all ${
                        mapMode === 'google'
                          ? 'bg-[#F9AD24] text-[#570B26] shadow-xs'
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      Google Map
                    </button>
                    <button
                      onClick={() => setMapMode('interactive')}
                      className={`text-xs px-2.5 py-1 rounded-lg font-bold transition-all ${
                        mapMode === 'interactive'
                          ? 'bg-[#F9AD24] text-[#570B26] shadow-xs'
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      Chennai Pins
                    </button>
                  </div>
                </div>

                {/* Map View Canvas */}
                {mapMode === 'google' ? (
                  /* Live Embedded Google Maps View */
                  <div className="relative h-[380px] sm:h-[420px] w-full bg-[#EADDE2]">
                    <iframe
                      title={`Google Map - ${activeStore.name}`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(activeStore.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    />
                  </div>
                ) : (
                  /* Interactive Clean Map with Clickable Supermarket Pins */
                  <div className="relative h-[380px] sm:h-[420px] w-full bg-gradient-to-br from-[#FFF9F0] via-[#FAF5EC] to-[#EFE7D8] overflow-hidden select-none border-b border-[#EADDE2]">
                    {/* Visual Bay of Bengal Coastline on East */}
                    <div className="absolute right-0 top-0 bottom-0 w-[22%] bg-gradient-to-l from-[#BAE6FD]/60 via-[#E0F2FE]/40 to-transparent pointer-events-none">
                      <span className="absolute right-2 top-8 text-[10px] font-bold text-[#0369A1]/60 uppercase tracking-widest rotate-90">
                        Bay of Bengal Coast
                      </span>
                    </div>

                    {/* Waterways and Roads */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 0,120 Q 150,140 250,110 T 450,100" fill="none" stroke="#0284C7" strokeWidth="6" />
                      <path d="M 0,260 Q 180,290 300,240 T 500,220" fill="none" stroke="#0284C7" strokeWidth="8" />
                      <path d="M 100,0 L 220,450" fill="none" stroke="#9CA3AF" strokeWidth="3" strokeDasharray="4,4" />
                      <path d="M 220,0 L 350,450" fill="none" stroke="#9CA3AF" strokeWidth="4" />
                    </svg>

                    {/* Interactive Clickable Pins */}
                    {filteredStores.map((store) => {
                      const isSelected = activeStore.id === store.id;
                      const pos = getPinPos(store.coordinates.lat, store.coordinates.lng);

                      return (
                        <div
                          key={store.id}
                          style={{ top: pos.top, left: pos.left }}
                          onClick={() => setActiveStore(store)}
                          className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all duration-300 ${
                            isSelected ? 'scale-115 z-30' : 'hover:scale-110'
                          }`}
                        >
                          <div className="flex flex-col items-center group">
                            {/* Pin Badge */}
                            <div
                              className={`px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md flex items-center gap-1 whitespace-nowrap transition-all border ${
                                isSelected
                                  ? 'bg-[#F9AD24] text-[#570B26] border-[#570B26] ring-4 ring-[#F9AD24]/40'
                                  : 'bg-[#7A1034] text-white border-white/80 hover:bg-[#570B26]'
                              }`}
                            >
                              <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#570B26]' : 'text-[#F9AD24]'}`} />
                              <span>{store.area}</span>
                            </div>

                            {/* Pin Point */}
                            <div
                              className={`w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] -mt-[1px] ${
                                isSelected ? 'border-t-[#F9AD24]' : 'border-t-[#7A1034]'
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}

                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-semibold text-[#766A70] shadow-xs">
                      Click any pin to inspect branch
                    </div>
                  </div>
                )}

                {/* Active Store Full Card Body */}
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#766A70] font-bold block mb-1">
                      Full Address &amp; Landmark
                    </span>
                    <p className="text-xs sm:text-sm text-[#292329] leading-relaxed font-medium">
                      {activeStore.address}
                    </p>
                    <p className="text-xs text-[#7A1034] mt-1 font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#F9AD24] shrink-0" />
                      Landmark: {activeStore.landmark}
                    </p>
                  </div>

                  {/* Operational Info Grid */}
                  <div className="pt-3 border-t border-[#EADDE2] grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-[#FFF9F0] p-2.5 rounded-xl border border-[#EADDE2]">
                      <span className="text-[#766A70] text-[11px] block font-medium">Operating Hours:</span>
                      <strong className="text-[#7A1034] font-bold text-xs block mt-0.5">{activeStore.timings}</strong>
                    </div>
                    <div className="bg-[#FFF9F0] p-2.5 rounded-xl border border-[#EADDE2]">
                      <span className="text-[#766A70] text-[11px] block font-medium">Branch Phone:</span>
                      <strong className="text-[#7A1034] font-bold text-xs block mt-0.5">{activeStore.phone}</strong>
                    </div>
                  </div>

                  {/* Amenities Checklist */}
                  <div className="pt-3 border-t border-[#EADDE2]">
                    <span className="text-[11px] uppercase tracking-wider text-[#766A70] font-bold block mb-2">
                      Branch Facilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {activeStore.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-[#292329]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7A1034] shrink-0" />
                          <span className="font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action CTAs */}
                  <div className="pt-4 border-t border-[#EADDE2] flex flex-col gap-2.5">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(activeStore.googleMapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#F9AD24] text-[#570B26] font-bold text-sm hover:bg-[#FCE2A9] transition-all shadow-md hover:shadow-lg"
                    >
                      <Navigation className="w-4 h-4" />
                      Navigate on Google Maps
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>

                    <a
                      href={`tel:${activeStore.phone.replace(/[^0-9]/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#7A1034] text-white font-bold text-xs hover:bg-[#570B26] transition-colors shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F9AD24]" />
                      Call {activeStore.name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Service & Reassurance Banner */}
      <section className="py-12 bg-white border-t border-[#EADDE2]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-5 rounded-2xl bg-[#FFF9F0] border border-[#EADDE2]">
              <div className="w-12 h-12 rounded-xl bg-[#7A1034] text-[#F9AD24] flex items-center justify-center shrink-0">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#292329] text-base">Hassle-Free Parking</h4>
                <p className="text-xs text-[#766A70] mt-1 leading-relaxed">
                  Dedicated customer two-wheeler and four-wheeler parking spaces available across our supermarket branches.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-5 rounded-2xl bg-[#FFF9F0] border border-[#EADDE2]">
              <div className="w-12 h-12 rounded-xl bg-[#7A1034] text-[#F9AD24] flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#292329] text-base">Instant Multi-Counter Billing</h4>
                <p className="text-xs text-[#766A70] mt-1 leading-relaxed">
                  Fast billing lanes accepting UPI, Google Pay, Credit/Debit cards, Sodexo, and cash.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-5 rounded-2xl bg-[#FFF9F0] border border-[#EADDE2]">
              <div className="w-12 h-12 rounded-xl bg-[#7A1034] text-[#F9AD24] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#292329] text-base">100% Tested Purity</h4>
                <p className="text-xs text-[#766A70] mt-1 leading-relaxed">
                  Every edible oil, rice grain, and spice tested for unadulterated freshness with zero chemical polishes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default StoreLocator;
