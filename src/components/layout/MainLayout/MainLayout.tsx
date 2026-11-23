import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { BackToTop } from '@/components/common/BackToTop/BackToTop';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0] text-[#292329] font-sans selection:bg-[#F7EAF0] selection:text-[#7A1034]">
      <Header />
      <main className="flex-1 w-full" id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};
