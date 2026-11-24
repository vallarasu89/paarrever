import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { STORES } from '@/data/stores';
import { Container } from '@/components/common/Container/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb/Breadcrumb';
import { PageTransition } from '@/components/animations/PageTransition';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/common/Button/Button';
import { useLanguage } from '@/context/LanguageContext';
import { StyleUnionLogo, EthirajLogo, VasanthCoLogo, PaarrHypermarketLogo } from '@/components/common/PartnerLogos';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Sparkles,
  Car,
  CreditCard,
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ShoppingBag,
  Tv,
  Shirt,
  Sparkle,
  ArrowLeft,
  Mail,
  ShieldCheck,
} from 'lucide-react';

export const StoreDetails: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const store = STORES.find((s) => s.id === storeId);
  const { language, t } = useLanguage();

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  // If store doesn't exist, redirect to stores list
  if (!store) {
    return <Navigate to="/stores" replace />;
  }

  const storeImages = store.images && store.images.length > 0
    ? store.images
    : [store.imageUrl];

  const isFlagship = store.id === 'store-flagship-hypermarket';

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActivePhotoIndex((prev) => (prev === 0 ? storeImages.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActivePhotoIndex((prev) => (prev === storeImages.length - 1 ? 0 : prev + 1));
  };

  // Other nearby stores
  const otherStores = STORES.filter((s) => s.id !== store.id).slice(0, 3);

  return (
    <PageTransition>
      {/* Top Breadcrumb & Header Bar */}
      <section className="bg-[#570B26] text-white py-8 sm:py-12 border-b border-[#7A1034] relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F9AD24]/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Breadcrumb
                items={[
                  { label: t('nav.stores'), href: '/stores' },
                  { label: store.area },
                ]}
                variant="dark"
              />

              <Link
                to="/stores"
                className="inline-flex items-center gap-1.5 text-xs text-[#FCE2A9] hover:text-white font-bold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{language === 'TA' ? 'அனைத்து 25+ கிளைகள்' : 'All 25+ Stores'}</span>
              </Link>
            </div>

            <div className="space-y-2 mt-2">
              <div className="flex flex-wrap items-center gap-2">
                {isFlagship ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    Grand New Opening &bull; Flagship Complex
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-[#7A1034] text-[#FCE2A9] text-xs font-bold uppercase tracking-wider border border-[#F9AD24]/30">
                    {store.zone}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-bold">
                  PIN {store.pincode}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                {store.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#FFF9F0]/85 font-sans flex items-center gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#F9AD24] shrink-0" />
                <span>{store.address}</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Store Details Section */}
      <section className="py-10 sm:py-16 bg-[#FFF9F0] border-b border-[#EADDE2]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Multiple Photos Gallery (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <FadeIn delay={0.1}>
                {/* Main Large Photo Display */}
                <div
                  className="relative rounded-2xl overflow-hidden bg-black shadow-xl border-2 border-[#EADDE2] group cursor-pointer aspect-[16/10]"
                  onClick={() => setIsPhotoModalOpen(true)}
                  title="Click to view full photo gallery"
                >
                  <img
                    src={storeImages[activePhotoIndex]}
                    alt={`${store.name} photo ${activePhotoIndex + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                  {/* Navigation Arrows */}
                  {storeImages.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevPhoto}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 shadow-lg transition-all focus:outline-none"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextPhoto}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 shadow-lg transition-all focus:outline-none"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FCE2A9] text-xs font-bold border border-white/20">
                      Photo {activePhotoIndex + 1} of {storeImages.length}
                    </span>
                  </div>

                  <button
                    onClick={() => setIsPhotoModalOpen(true)}
                    className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-1.5 transition-all"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View All {storeImages.length} Photos</span>
                  </button>
                </div>

                {/* Thumbnail Strip */}
                {storeImages.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none pt-2">
                    {storeImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`relative w-24 sm:w-28 h-16 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                          activePhotoIndex === idx
                            ? 'border-[#7A1034] ring-2 ring-[#7A1034]/30 scale-105 shadow-md'
                            : 'border-[#EADDE2] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </FadeIn>

              {/* Branch Editorial Description */}
              {store.description && (
                <FadeIn delay={0.2}>
                  <div className="p-6 rounded-2xl bg-white border border-[#EADDE2] shadow-sm space-y-2">
                    <h3 className="font-serif text-lg font-bold text-[#570B26]">
                      About {store.name}
                    </h3>
                    <p className="text-sm text-[#292329]/80 font-sans leading-relaxed">
                      {store.description}
                    </p>
                  </div>
                </FadeIn>
              )}

              {/* Co-located Brands (For Flagship Mall) */}
              {store.partnerBrands && store.partnerBrands.length > 0 && (
                <FadeIn delay={0.25}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFF9F0] via-[#F7EAF0] to-[#FFF9F0] border border-[#EADDE2] shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7A1034] block mb-3">
                      Brand Experiences at This Location
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-white border border-[#EADDE2] flex items-center justify-between gap-3 shadow-xs">
                        <div className="space-y-0.5">
                          <h4 className="font-serif text-sm font-bold text-[#570B26]">PAARR Hypermarket</h4>
                          <p className="text-[11px] text-[#766A70]">Fresh farm produce, staples &amp; household essentials</p>
                        </div>
                        <PaarrHypermarketLogo className="h-6 w-auto shrink-0" />
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-[#EADDE2] flex items-center justify-between gap-3 shadow-xs">
                        <div className="space-y-0.5">
                          <h4 className="font-serif text-sm font-bold text-[#D9232D]">Vasanth &amp; Co</h4>
                          <p className="text-[11px] text-[#766A70]">LED TVs, refrigerators, ACs &amp; home appliances</p>
                        </div>
                        <VasanthCoLogo className="h-8 w-auto shrink-0" />
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-[#EADDE2] flex items-center justify-between gap-3 shadow-xs">
                        <div className="space-y-0.5">
                          <h4 className="font-serif text-sm font-bold text-[#1E40AF]">Style Union</h4>
                          <p className="text-[11px] text-[#766A70]">Trending fashion, festive ethnic &amp; smart daily wear</p>
                        </div>
                        <StyleUnionLogo className="h-5 w-auto text-[#1E40AF] shrink-0" />
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-[#EADDE2] flex items-center justify-between gap-3 shadow-xs">
                        <div className="space-y-0.5">
                          <h4 className="font-serif text-sm font-bold text-[#B45309]">M.A. Ethirajulu Naidu</h4>
                          <p className="text-[11px] text-[#766A70]">Authentic brass, bronze, heirloom cookware &amp; pooja items</p>
                        </div>
                        <EthirajLogo className="h-8 w-auto shrink-0" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>

            {/* Right Column: Key Details, Timings, Contact & Google Map (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <FadeIn delay={0.2} direction="left">
                {/* Core Store Info Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#EADDE2] shadow-sm space-y-5">
                  <h3 className="font-serif text-xl font-bold text-[#570B26] border-b border-[#EADDE2] pb-3">
                    Branch Information
                  </h3>

                  {/* Address */}
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#766A70] font-bold block mb-1">
                      Complete Address
                    </span>
                    <p className="text-sm text-[#292329] font-medium leading-relaxed">
                      {store.address}
                    </p>
                    <p className="text-xs text-[#7A1034] mt-1.5 font-semibold flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#F9AD24] shrink-0" />
                      <span>Landmark: {store.landmark}</span>
                    </p>
                  </div>

                  {/* Timings & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-[#FFF9F0] border border-[#EADDE2]">
                      <div className="flex items-center gap-2 text-[#7A1034] font-bold text-xs mb-1">
                        <Clock className="w-4 h-4 text-[#F9AD24]" />
                        <span>Operating Hours</span>
                      </div>
                      <p className="text-xs font-semibold text-[#292329] leading-snug">
                        {store.timings}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FFF9F0] border border-[#EADDE2]">
                      <div className="flex items-center gap-2 text-[#7A1034] font-bold text-xs mb-1">
                        <Phone className="w-4 h-4 text-[#F9AD24]" />
                        <span>Direct Phone</span>
                      </div>
                      <a
                        href={`tel:${store.phone.replace(/[^0-9]/g, '')}`}
                        className="text-xs font-bold text-[#7A1034] hover:underline block"
                      >
                        {store.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  {store.email && (
                    <div className="pt-2 flex items-center gap-2 text-xs text-[#292329]">
                      <Mail className="w-4 h-4 text-[#7A1034] shrink-0" />
                      <span className="text-[#766A70]">Email:</span>
                      <a href={`mailto:${store.email}`} className="font-semibold text-[#7A1034] hover:underline">
                        {store.email}
                      </a>
                    </div>
                  )}

                  {/* Facilities & Amenities */}
                  <div className="pt-3 border-t border-[#EADDE2]">
                    <span className="text-[11px] uppercase tracking-wider text-[#766A70] font-bold block mb-2.5">
                      Available In-Store Facilities
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {store.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#292329]">
                          <CheckCircle2 className="w-4 h-4 text-[#7A1034] shrink-0" />
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#EADDE2] flex flex-col gap-2.5">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(store.googleMapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#F9AD24] text-[#570B26] font-bold text-sm hover:bg-[#FCE2A9] transition-all shadow-md"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>{t('btn.getDirections')}</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>

                    <a
                      href={`tel:${store.phone.replace(/[^0-9]/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#7A1034] text-white font-bold text-xs hover:bg-[#570B26] transition-colors shadow-xs"
                    >
                      <Phone className="w-4 h-4 text-[#F9AD24]" />
                      <span>{t('btn.callBranch')}</span>
                    </a>
                  </div>
                </div>

                {/* Embedded Live Google Map */}
                <div className="rounded-2xl overflow-hidden border border-[#EADDE2] shadow-sm bg-white">
                  <div className="p-3 bg-[#570B26] text-white text-xs font-bold flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F9AD24]" />
                      <span>Interactive Location Map</span>
                    </span>
                    <span className="text-[10px] text-[#FCE2A9] font-mono">
                      {store.area}
                    </span>
                  </div>
                  <div className="h-64 w-full bg-[#EADDE2]">
                    <iframe
                      title={`Google Map - ${store.name}`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(store.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Explore Other Stores in Chennai */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#EADDE2]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A1034]">
                Convenient Locations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#570B26] mt-1">
                Other PAARR Stores in Chennai
              </h3>
            </div>

            <Link to="/stores">
              <Button
                variant="outline"
                size="sm"
                className="border-[#7A1034] text-[#7A1034] hover:bg-[#7A1034] hover:text-white font-semibold text-xs"
              >
                View All Stores
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherStores.map((otherStore) => (
              <Link
                key={otherStore.id}
                to={`/stores/${otherStore.id}`}
                className="group rounded-2xl overflow-hidden bg-[#FFF9F0] border border-[#EADDE2] hover:border-[#7A1034] hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                  <img
                    src={otherStore.imageUrl}
                    alt={otherStore.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#7A1034] text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow">
                    {otherStore.zone}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#570B26] group-hover:text-[#7A1034] transition-colors">
                      {otherStore.name}
                    </h4>
                    <p className="text-xs text-[#292329]/75 line-clamp-2 mt-1">
                      {otherStore.address}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#EADDE2] flex items-center justify-between text-xs font-bold text-[#7A1034]">
                    <span>View Photos &amp; Details</span>
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Full-Screen Lightbox Photo Gallery Modal */}
      {isPhotoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-[#570B26] text-white border-b border-white/10">
              <div>
                <h4 className="font-serif text-base font-bold text-white">
                  {store.name} — Photo Gallery
                </h4>
                <span className="text-xs text-[#FCE2A9]">
                  Photo {activePhotoIndex + 1} of {storeImages.length}
                </span>
              </div>

              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Main Photo */}
            <div className="relative aspect-video sm:aspect-[16/10] bg-black flex items-center justify-center">
              <img
                src={storeImages[activePhotoIndex]}
                alt={`${store.name} photo`}
                className="w-full h-full object-contain"
              />

              {storeImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 shadow-xl transition-all"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 shadow-xl transition-all"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Thumbnail Strip */}
            {storeImages.length > 1 && (
              <div className="p-3 bg-[#292329] flex items-center justify-center gap-2 overflow-x-auto border-t border-white/10">
                {storeImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      activePhotoIndex === idx
                        ? 'border-[#F9AD24] scale-105 shadow-md'
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </PageTransition>
  );
};

export default StoreDetails;
