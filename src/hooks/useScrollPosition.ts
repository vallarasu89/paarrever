import { useState, useEffect } from 'react';

export function useScrollPosition(): { scrollY: number; isScrolled: boolean } {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    isScrolled: false,
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrollState({
            scrollY: y,
            isScrolled: y > 40,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
}
