import React from 'react';
import { MotionProvider } from './MotionProvider';
import { LanguageProvider } from '@/context/LanguageContext';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageProvider>
      <MotionProvider>
        {children}
      </MotionProvider>
    </LanguageProvider>
  );
};
