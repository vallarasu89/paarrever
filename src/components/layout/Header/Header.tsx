import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/data/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/common/Button/Button';
import { BrandLogo } from '@/components/common/BrandLogo';
import { AnnouncementBar } from './AnnouncementBar';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';
import { MapPin, Menu, ShoppingBag, MessageCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'EN' | 'TA'>('EN');
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  const toggleLanguage = () => {
    setCurrentLang(prev => (prev === 'EN' ? 'TA' : 'EN'));
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
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1034] rounded-sm mr-4 xl:mr-8 shrink-0"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation - Clean single-line layout with whitespace-nowrap */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 shrink-0">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'relative px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-colors font-sans tracking-wide rounded-md whitespace-nowrap flex items-center shrink-0',
                    isActive
                      ? 'text-[#7A1034] font-bold'
                      : 'text-[#292329]/90 hover:text-[#7A1034] hover:bg-[#F7EAF0]'
                  )}
                >
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="hidden xl:inline-block text-[9px] xl:text-[10px] px-1.5 py-0.5 rounded-full bg-[#F7EAF0] text-[#7A1034] font-bold uppercase tracking-wider border border-[#7A1034]/25 whitespace-nowrap shrink-0">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-[2.5px] bg-[#7A1034] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs + WhatsApp & Tamil Toggle */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* 25+ Stores Quick Link shown on wide desktop */}
            <Link to="/stores" className="hidden 2xl:inline-flex">
              <Button
                variant="outline"
                size="sm"
                leftIcon={<MapPin className="w-3.5 h-3.5 text-[#7A1034]" />}
                className="font-sans border-[#7A1034]/40 hover:border-[#7A1034] text-[#7A1034] hover:bg-[#F7EAF0] text-xs py-2 px-3 font-semibold whitespace-nowrap"
              >
                25+ Stores
              </Button>
            </Link>

            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/914446143999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 rounded-md bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] shrink-0"
              title="Chat with Customer Care"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            {/* Tamil Language Toggle Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-md bg-[#7A1034] text-white text-xs font-bold hover:bg-[#570B26] transition-colors shadow-sm whitespace-nowrap shrink-0"
              title="Switch Language"
            >
              {currentLang === 'EN' ? 'தமிழ்' : 'English'}
            </button>

            {/* Get in Touch CTA */}
            <Link to="/contact" className="shrink-0">
              <Button
                variant="gold"
                size="sm"
                leftIcon={<ShoppingBag className="w-3.5 h-3.5 text-[#570B26]" />}
                className="text-xs py-2 px-3 xl:px-3.5 font-bold shadow-sm bg-[#F9AD24] hover:bg-[#FCE2A9] text-[#570B26] border border-[#F9AD24] whitespace-nowrap"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden p-2 rounded-md text-[#292329] hover:text-[#7A1034] hover:bg-[#F7EAF0] focus:outline-none focus:ring-2 focus:ring-[#7A1034]"
          >
            <Menu className="w-6 h-6" />
          </button>
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
