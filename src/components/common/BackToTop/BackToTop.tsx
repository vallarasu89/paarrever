import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';

export const BackToTop: React.FC = () => {
  const { isScrolled } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#7A1034] text-white shadow-lg border border-[#F9AD24]/40 hover:bg-[#570B26] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F9AD24]',
        isScrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <ArrowUp className="w-5 h-5 text-[#FCE2A9]" />
    </button>
  );
};
