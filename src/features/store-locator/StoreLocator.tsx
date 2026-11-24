import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { STORES } from '@/data/stores';
import { Container } from '@/components/common/Container/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb/Breadcrumb';
import { PageTransition } from '@/components/animations/PageTransition';
import { FadeIn } from '@/components/animations/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import hypermallImg from '@/assets/images/hypermall.jpg';
import {
  MapPin,
  Search,
  Clock,
  Navigation,
  Sparkles,
  Car,
  X,
  CreditCard,
  Store,
  CheckCircle2,
  ArrowRight,
  Image as ImageIcon,
  ShoppingBag,
  Tv,
  Shirt,
  Sparkle,
  ExternalLink,
} from 'lucide-react';

export const StoreLocator: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState('All');

  const zones = ['All', 'Chennai Central', 'Chennai South', 'Chennai North', 'Suburbs'];
  const popularAreas = ['OMR', 'Mylapore', 'Besant Nagar', 'Kodambakkam', 'Palavakkam', 'Royapettah', 'Kotturpuram'];

  // The Grand Opening Flagship Hypermarket
  const flagshipStore = STORES.find((s) => s.id === 'store-flagship-hypermarket') || STORES[0];

  // The neighborhood stores (excluding the flagship spotlight from the standard neighborhood grid)
  const neighborhoodStores = useMemo(() => {
    return STORES.filter((s) => s.id !== 'store-flagship-hypermarket');
  }, []);

  const filteredStores = useMemo(() => {
    return neighborhoodStores.filter((store) => {
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
  }, [searchQuery, selectedZone, neighborhoodStores]);

  // Check if search specifically matched the flagship
  const flagshipMatchesSearch = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      flagshipStore.name.toLowerCase().includes(q) ||
      flagshipStore.area.toLowerCase().includes(q) ||
      flagshipStore.address.toLowerCase().includes(q) ||
      flagshipStore.pincode.includes(q) ||
      'hypermarket'.includes(q) ||
      'vasanth'.includes(q) ||
      'style union'.includes(q) ||
      'ethirajulu'.includes(q)
    );
  }, [searchQuery, flagshipStore]);

  return (
    <PageTransition>
      {/* Hero Banner featuring the Flagship Hypermall Complex photo */}
      <section className="relative overflow-hidden bg-[#570B26] text-white py-10 sm:py-14 border-b border-[#7A1034]">
        <div className="absolute inset-0 z-0">
          <img
            src={hypermallImg}
            alt="Brand Experiences at PAARR Hypermarket Complex - Flagship Destination"
            className="w-full h-full object-cover object-center opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#570B26] via-[#570B26]/90 to-[#570B26]/60" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Breadcrumb items={[{ label: t('nav.stores') }]} variant="dark" />

            <div className="mt-3 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9AD24] text-[#570B26] text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'TA' ? 'பிரம்மாண்ட புதிய திறப்பு விழா • 25+ சென்னை கிளைகள்' : 'Now Open • PAARR Hypermarket Complex & 25+ Chennai Supermarkets'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-sm">
                {t('stores.heroTitle')}
              </h1>

              <p className="text-sm sm:text-base text-[#FFF9F0]/90 font-sans leading-relaxed max-w-2xl">
                {t('stores.heroSubtitle')}
              </p>

              {/* Quick Metrics */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-[#FCE2A9]">
                <span className="flex items-center gap-1.5 text-white">
                  <Clock className="w-3.5 h-3.5 text-[#F9AD24]" />
                  Open 7:00 AM – 11:00 PM (All 7 Days)
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <Car className="w-3.5 h-3.5 text-[#F9AD24]" />
                  Spacious Dedicated Customer Parking
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F9AD24]" />
                  Mara Chekku Oils &amp; 5000+ Fresh SKUs
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* INDIVIDUAL FLAGSHIP SPOTLIGHT (Main Highlight - Clean Elite Luxury Presentation) */}
      {flagshipMatchesSearch && (
        <section className="py-10 sm:py-14 bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EA] to-[#FFF9F0] border-b border-[#EADDE2] relative overflow-hidden">
          {/* Subtle Warm Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F9AD24]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7A1034]/5 rounded-full blur-3xl pointer-events-none" />

          <Container className="relative z-10">
            {/* Spotlight Eyebrow */}
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#570B26] text-[#FCE2A9] text-xs font-black tracking-widest uppercase shadow-sm border border-[#F9AD24]/50">
                <Sparkles className="w-3.5 h-3.5 text-[#F9AD24] animate-pulse" />
                <span>{t('stores.flagshipSpotlight')}</span>
                <span className="w-2 h-2 rounded-full bg-[#E53935] live-beacon-blink ml-0.5" />
              </div>

              <span className="text-xs text-[#7A1034] font-bold hidden sm:inline-block">
                ★ {language === 'TA' ? 'சென்னையின் மிகப்பெரிய மல்டி-பிராண்ட் தளம்' : "Chennai's Largest Multi-Brand Shopping Destination"}
              </span>
            </div>

            {/* Standalone Mega Showcase Card - Clean Elite Look */}
            <FadeIn delay={0.1}>
              <div className="rounded-3xl bg-white border-2 border-[#EADDE2] hover:border-[#7A1034]/40 shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-300 ring-1 ring-[#570B26]/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Left Column: Monumental Building Photo (7 Cols) - Full Image Uncropped */}
                  <Link
                    to={`/stores/${flagshipStore.id}`}
                    className="lg:col-span-7 relative overflow-hidden bg-[#1A030C] flex items-center justify-center min-h-[320px] sm:min-h-[420px]"
                  >
                    <img
                      src={flagshipStore.imageUrl}
                      alt={flagshipStore.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E53935] text-white text-xs font-black uppercase tracking-wider shadow-lg">
                        <span className="w-2.5 h-2.5 rounded-full bg-white live-beacon-blink" />
                        {t('badge.grandOpening')}
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[#FCE2A9] text-xs font-bold border border-[#F9AD24]/40">
                        {t('badge.flagship')}
                      </span>
                    </div>

                    {/* Bottom Photo Badges */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                      <div className="flex items-center gap-1.5 text-xs font-bold bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
                        <ImageIcon className="w-4 h-4 text-[#F9AD24]" />
                        <span>5 {t('stores.photosCount')}</span>
                      </div>

                      <div className="font-mono text-xs font-black bg-[#F9AD24] text-[#2E0413] px-3.5 py-1.5 rounded-xl shadow-md">
                        PIN 600096 &bull; OMR
                      </div>
                    </div>
                  </Link>

                  {/* Right Column: Editorial & Brand Experience Highlights (5 Cols) */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white text-[#292329]">
                    <div className="space-y-4">
                      {/* Eyebrow */}
                      <span className="text-xs font-black uppercase tracking-widest text-[#7A1034] block">
                        {language === 'TA' ? 'பிரமாண்ட மெகா மால் வளாகம் • OMR' : 'Flagship Mega Mall Complex • OMR'}
                      </span>

                      {/* Main Title & Address */}
                      <div>
                        <Link to={`/stores/${flagshipStore.id}`}>
                          <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#570B26] hover:text-[#7A1034] transition-colors leading-tight">
                            {flagshipStore.name}
                          </h2>
                        </Link>
                        <p className="text-xs sm:text-sm text-[#292329]/80 font-sans mt-2.5 leading-relaxed">
                          {flagshipStore.description}
                        </p>
                      </div>

                      {/* Location & Landmark */}
                      <div className="space-y-1.5 text-xs text-[#292329] pt-2 border-t border-[#EADDE2]">
                        <p className="flex items-start gap-1.5 font-medium">
                          <MapPin className="w-4 h-4 text-[#7A1034] shrink-0 mt-0.5" />
                          <span>{flagshipStore.address}</span>
                        </p>
                        <p className="text-[11px] text-[#7A1034] pl-5 font-semibold">
                          Landmark: {flagshipStore.landmark}
                        </p>
                      </div>

                      {/* Highlights Pill Badges */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="px-3 py-1.5 rounded-lg bg-[#FFF9F0] border border-[#EADDE2] text-xs font-bold text-[#570B26] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7A1034]" />
                          1,00,000+ Sq.Ft.
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-[#FFF9F0] border border-[#EADDE2] text-xs font-bold text-[#570B26] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7A1034]" />
                          5000+ Farm SKUs
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-[#FFF9F0] border border-[#EADDE2] text-xs font-bold text-[#570B26] flex items-center gap-1.5">
                          <Car className="w-3.5 h-3.5 text-[#7A1034]" />
                          200+ Parking Bays
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-[#FFF9F0] border border-[#EADDE2] text-xs font-bold text-[#570B26] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7A1034]" />
                          Central AC Aisles
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-[#FFF9F0] border border-[#EADDE2] text-xs font-bold text-[#570B26] flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#7A1034]" />
                          7 AM – 11 PM Daily
                        </span>
                      </div>
                    </div>

                    {/* Action CTA Buttons */}
                    <div className="pt-4 border-t border-[#EADDE2] flex flex-col sm:flex-row gap-3">
                      <Link
                        to={`/stores/${flagshipStore.id}`}
                        className="inline-flex items-center justify-center gap-2 flex-1 py-3.5 rounded-xl bg-[#7A1034] hover:bg-[#570B26] text-white font-bold text-xs sm:text-sm shadow-md transition-all group/btn"
                      >
                        <span>{t('btn.exploreFlagship')}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(flagshipStore.googleMapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-[#F9AD24] text-[#570B26] hover:bg-[#FCE2A9] font-bold text-xs transition-all shadow-xs"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>{t('btn.getDirections')}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* Search & Zone Filter Bar - Normal Non-Sticky Scroll */}
      <section className="bg-white border-b border-[#EADDE2] shadow-xs py-4">
        <Container>
          <div className="space-y-3">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-xl">
                <Search className="w-5 h-5 text-[#7A1034] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('stores.searchPlaceholder')}
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
                  {t('stores.hotspots')}
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
                Showing {filteredStores.length} {t('stores.showingStores')}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* NEIGHBORHOOD STORES SECTION */}
      <section className="py-10 sm:py-16 bg-[#FFF9F0] min-h-[600px]">
        <Container>
          {/* Section Subheading */}
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A1034]">
              {language === 'TA' ? 'அண்டை கிளைகள்' : 'Neighborhood Supermarket Network'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#570B26] mt-1">
              {t('stores.neighborhoodTitle')}
            </h3>
          </div>

          {filteredStores.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#EADDE2] shadow-sm max-w-lg mx-auto">
              <Store className="w-12 h-12 text-[#7A1034] mx-auto mb-3 opacity-60" />
              <h3 className="text-lg font-bold text-[#570B26]">
                No stores found matching &ldquo;{searchQuery}&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-[#766A70] mt-1.5 max-w-md mx-auto">
                Try searching for other Chennai areas like Mylapore, Besant Nagar, Kodambakkam, or reset filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedZone('All');
                }}
                className="mt-4 px-5 py-2 rounded-xl bg-[#7A1034] text-white font-bold text-xs hover:bg-[#570B26] transition-colors"
              >
                {t('btn.resetFilters')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {filteredStores.map((store, idx) => {
                const photosCount = store.images?.length || 1;

                return (
                  <FadeIn key={store.id} delay={Math.min(idx * 0.05, 0.3)}>
                    <Link
                      to={`/stores/${store.id}`}
                      className="group rounded-3xl bg-white border border-[#EADDE2] hover:border-[#7A1034] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full"
                    >
                      {/* Photo Thumbnail */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                        <img
                          src={store.imageUrl}
                          alt={store.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                        {/* Top Zone Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#7A1034] text-white text-xs font-bold uppercase tracking-wider shadow">
                            {store.zone}
                          </span>
                        </div>

                        {/* Photos Count Badge */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                          <ImageIcon className="w-3.5 h-3.5 text-[#F9AD24]" />
                          <span>{photosCount} {t('stores.photosCount')}</span>
                        </div>

                        {/* PIN Code Badge */}
                        <div className="absolute bottom-3 right-3 font-mono text-xs font-bold text-[#570B26] bg-[#FFF9F0] px-2.5 py-1 rounded-lg border border-[#EADDE2] shadow">
                          PIN {store.pincode}
                        </div>
                      </div>

                      {/* Store Card Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#570B26] group-hover:text-[#7A1034] transition-colors leading-tight">
                            {store.name}
                          </h3>

                          <p className="text-xs sm:text-sm text-[#292329]/80 font-sans mt-2 leading-relaxed line-clamp-2">
                            {store.address}
                          </p>

                          <p className="text-xs font-semibold text-[#7A1034] mt-1.5 flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#F9AD24] shrink-0" />
                            <span>Landmark: {store.landmark}</span>
                          </p>

                          {/* Quick Facilities */}
                          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#EADDE2]/70">
                            {store.features.slice(0, 3).map((feat, i) => (
                              <span
                                key={i}
                                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#FFF9F0] text-[#570B26] border border-[#EADDE2]"
                              >
                                {feat}
                              </span>
                            ))}
                            {store.features.length > 3 && (
                              <span className="text-[11px] font-bold px-2 py-0.5 text-[#7A1034]">
                                +{store.features.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Card Footer with Timings and CTA Button */}
                        <div className="pt-3 border-t border-[#EADDE2] flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-1.5 text-xs text-[#766A70]">
                            <Clock className="w-3.5 h-3.5 text-[#7A1034]" />
                            <span className="font-medium">{store.timings.split('(')[0]}</span>
                          </div>

                          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7A1034] group-hover:bg-[#570B26] text-white text-xs font-bold transition-all shadow-sm">
                            <span>{t('btn.viewDetails')}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* Customer Reassurance */}
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
                  Dedicated customer two-wheeler and four-wheeler parking bays across our supermarket &amp; hypermarket branches.
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
                  Fast checkout lanes accepting UPI, Google Pay, Credit/Debit cards, Sodexo, and cash.
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
