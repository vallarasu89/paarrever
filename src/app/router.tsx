import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { RouteLoader } from '@/components/loaders/RouteLoader';

// Route code splitting
const Home = lazy(() => import('@/features/home/Home'));
const About = lazy(() => import('@/features/about/About'));
const Categories = lazy(() => import('@/features/categories/Categories'));
const StoreLocator = lazy(() => import('@/features/store-locator/StoreLocator'));
const StoreDetails = lazy(() => import('@/features/store-locator/StoreDetails'));
const Contact = lazy(() => import('@/features/contact/Contact'));
const Reviews = lazy(() => import('@/features/reviews/Reviews'));
const PaarrPassport = lazy(() => import('@/features/paarr-passport/PaarrPassport'));
const PrivacyPolicy = lazy(() => import('@/features/legal/PrivacyPolicy'));
const TermsConditions = lazy(() => import('@/features/legal/TermsConditions'));

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<RouteLoader />}>{children}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'about',
        element: (
          <SuspenseWrapper>
            <About />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'categories',
        element: (
          <SuspenseWrapper>
            <Categories />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'stores',
        element: (
          <SuspenseWrapper>
            <StoreLocator />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'stores/:storeId',
        element: (
          <SuspenseWrapper>
            <StoreDetails />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'store-locator',
        element: <Navigate to="/stores" replace />,
      },
      {
        path: 'contact',
        element: (
          <SuspenseWrapper>
            <Contact />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'reviews',
        element: (
          <SuspenseWrapper>
            <Reviews />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'passport',
        element: (
          <SuspenseWrapper>
            <PaarrPassport />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'paarr-passport',
        element: <Navigate to="/passport" replace />,
      },
      {
        path: 'privacy-policy',
        element: (
          <SuspenseWrapper>
            <PrivacyPolicy />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'terms-conditions',
        element: (
          <SuspenseWrapper>
            <TermsConditions />
          </SuspenseWrapper>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
