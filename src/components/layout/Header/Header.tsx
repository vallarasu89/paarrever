import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/data/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/common/Button/Button';
import { BrandLogo } from '@/components/common/BrandLogo';
import { AnnouncementBar } from './AnnouncementBar';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';
import { MapPin, Menu, ShoppingBag, Globe, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  const getNavLabel = (href: string, defaultLabel: string) => {
    switch (href) {
      case '/':
        return t('nav.home');
      case '/about':
        return t('nav.about');
      case '/categories':
        return t('nav.categories');
      case '/stores':
        return t('nav.stores');
      case '/contact':
        return t('nav.contact');
      case '/reviews':
        return t('nav.reviews');
      case '/passport':
        return t('nav.passport');
      default:
        return defaultLabel;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      <AnnouncementBar />

      <div
        className={cn(
          'w-full bg-white transition-all duration-300 border-b border-[#EADDE2]',
          isScrolled ? 'py-2 shadow-subtle' : 'py-3'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link
            to="/"
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1034] rounded-sm mr-3 xl:mr-6 shrink-0"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 shrink-0">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              const label = getNavLabel(link.href, link.label);

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'relative px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-colors font-sans tracking-wide rounded-md whitespace-nowrap flex items-center shrink-0',
                    isActive
                      ? 'text-[#7A1034] font-bold'
                      : 'text-[#292329]/90 hover:text-[#7A1034] hover:bg-[#F7EAF0]'
                  )}
                >
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <span>{label}</span>
                    {link.badge && (
                      <span className="hidden xl:inline-block text-[9px] xl:text-[10px] px-1.5 py-0.5 rounded-full bg-[#F7EAF0] text-[#7A1034] font-bold uppercase tracking-wider border border-[#7A1034]/25 whitespace-nowrap shrink-0">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-[2.5px] bg-[#7A1034] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs + Vivid Blinking Hyper Mall Beacon + WhatsApp & Language Toggle */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* Vivid Blinking / Pulsing Live Grand Opening Hyper Mall Badge */}
            <Link
              to="/stores/store-flagship-hypermarket"
              className="relative group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#2E0413] via-[#570B26] to-[#2E0413] border-2 border-[#F9AD24] shadow-[0_0_15px_rgba(249,173,36,0.35)] hover:shadow-[0_0_22px_rgba(249,173,36,0.6)] transition-all shrink-0 hover:scale-105"
              title="Visit PAARR Hypermarket Flagship Complex"
            >
              {/* High-visibility Live Blinking Beacon Light */}
              <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1744] opacity-90" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF1744] live-beacon-blink" />
              </span>

              <span className="text-[11px] font-black uppercase tracking-wider text-[#FCE2A9] flex items-center gap-1">
                {/* <Sparkles className="w-3.5 h-3.5 text-[#F9AD24] animate-pulse" /> */}
                <span>{language === 'TA' ? 'ஹைப்பர் மால்' : 'Hyper Mall'}</span>
              </span>

              {/* Blinking Live NOW OPEN Pill */}
              <span className="px-2 py-0.5 rounded-full bg-[#E53935] text-white text-[9px] font-black uppercase tracking-wider shadow-sm live-beacon-blink">
                {language === 'TA' ? 'திறப்பு • LIVE' : 'NOW OPEN'}
              </span>
            </Link>

            {/* 25+ Stores Quick Link */}
            <Link to="/stores" className="hidden 2xl:inline-flex">
              <Button
                variant="outline"
                size="sm"
                leftIcon={<MapPin className="w-3.5 h-3.5 text-[#7A1034]" />}
                className="font-sans border-[#7A1034]/40 hover:border-[#7A1034] text-[#7A1034] hover:bg-[#F7EAF0] text-xs py-2 px-3 font-semibold whitespace-nowrap"
              >
                {t('nav.stores')}
              </Button>
            </Link>

            {/* Tamil / English Language Toggle Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-md bg-[#7A1034] text-white text-xs font-bold hover:bg-[#570B26] transition-colors shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5 border border-[#F9AD24]/30"
              title={language === 'EN' ? 'தமிழுக்கு மாறவும்' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-[#F9AD24]" />
              <span>{language === 'EN' ? 'தமிழ்' : 'English'}</span>
            </button>

            {/* Get in Touch CTA */}
            <Link to="/contact" className="shrink-0">
              <Button
                variant="gold"
                size="sm"
                leftIcon={<ShoppingBag className="w-3.5 h-3.5 text-[#570B26]" />}
                className="text-xs py-2 px-3 xl:px-3.5 font-bold shadow-sm bg-[#F9AD24] hover:bg-[#FCE2A9] text-[#570B26] border border-[#F9AD24] whitespace-nowrap"
              >
                {t('nav.contact')}
              </Button>
            </Link>
          </div>

          {/* Mobile Right Controls: Blinking Pill + Language Toggle + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Blinking Hyper Mall Beacon */}
            <Link
              to="/stores/store-flagship-hypermarket"
              className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#2E0413] to-[#570B26] text-[#FCE2A9] border border-[#F9AD24] text-[10px] font-black uppercase tracking-wider shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1744] opacity-90" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1744] live-beacon-blink" />
              </span>
              <span className="text-[#FCE2A9] font-bold">{language === 'TA' ? 'மால்' : 'Mall'}</span>
              <span className="px-1 py-0.2 rounded bg-[#E53935] text-white text-[8px] font-extrabold live-beacon-blink">LIVE</span>
            </Link>

            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-md bg-[#7A1034] text-white text-xs font-bold flex items-center gap-1 shadow-xs"
            >
              <Globe className="w-3 h-3 text-[#F9AD24]" />
              <span>{language === 'EN' ? 'தமிழ்' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-md text-[#292329] hover:text-[#7A1034] hover:bg-[#F7EAF0] focus:outline-none focus:ring-2 focus:ring-[#7A1034]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
