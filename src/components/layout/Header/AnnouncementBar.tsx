import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ANNOUNCEMENTS } from '@/data/navigation';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = ANNOUNCEMENTS[currentIndex];

  return (
    <div className="bg-[#570B26] text-white text-xs border-b border-[#7A1034] py-2 px-4 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-2 text-[#FCE2A9] font-medium tracking-wider uppercase text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-[#F9AD24] shrink-0" />
          <span>PAARR EVER Neighborhood Supermarkets</span>
        </div>

        <div className="flex-1 flex justify-center text-center overflow-hidden h-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2"
            >
              <span className="text-[#FFF9F0]/90 truncate max-w-[280px] sm:max-w-md md:max-w-lg">
                {current.message}
              </span>
              {current.highlightText && current.href && (
                <Link
                  to={current.href}
                  className="hidden sm:inline-flex items-center gap-0.5 text-[#F9AD24] hover:text-[#FCE2A9] font-semibold underline underline-offset-2 ml-1"
                >
                  <span>{current.highlightText}</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-xs text-[#FFF9F0]/75">
          <span>Call: <strong className="text-white font-medium">044-46143999</strong></span>
          <span className="text-[#7A1034]">|</span>
          <span>7:00 AM – 10:30 PM</span>
        </div>
      </div>
    </div>
  );
};
