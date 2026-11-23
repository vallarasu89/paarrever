import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/data/navigation';
import { BRAND_INFO } from '@/utils/constants';
import { Button } from '@/components/common/Button/Button';
import { BrandLogo } from '@/components/common/BrandLogo';
import { X, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#570B26]/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative ml-auto w-full max-w-sm h-full bg-[#FFF9F0] shadow-2xl flex flex-col z-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-[#EADDE2] bg-white">
              <Link to="/" onClick={onClose} className="inline-block">
                <BrandLogo size="sm" />
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-md text-[#292329] hover:text-[#7A1034] hover:bg-[#F7EAF0] focus:outline-none focus:ring-2 focus:ring-[#7A1034]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="p-5 space-y-1 flex-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors font-sans',
                      isActive
                        ? 'bg-[#F7EAF0] text-[#7A1034] font-semibold border-l-4 border-[#7A1034]'
                        : 'text-[#292329] hover:bg-[#FFF9F0] hover:text-[#7A1034]'
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {link.label}
                      {link.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7A1034] text-[#FCE2A9] font-semibold">
                          {link.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#766A70]" />
                  </Link>
                );
              })}
            </nav>

            {/* Quick Actions & Store info */}
            <div className="p-5 border-t border-[#EADDE2] bg-[#FFF9F0]/80 space-y-4">
              <div className="space-y-2">
                <Link to="/stores" onClick={onClose} className="block w-full">
                  <Button
                    variant="primary"
                    fullWidth
                    leftIcon={<MapPin className="w-4 h-4 text-[#FCE2A9]" />}
                  >
                    Locate 25+ Stores
                  </Button>
                </Link>
              </div>

              <div className="space-y-2 text-xs text-[#766A70] font-sans pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#7A1034] shrink-0" />
                  <span>{BRAND_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#7A1034] shrink-0" />
                  <span>{BRAND_INFO.storeHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#7A1034] shrink-0" />
                  <span>{BRAND_INFO.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
