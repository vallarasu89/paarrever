import React from 'react';
import { MotionProvider } from './MotionProvider';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MotionProvider>
      {children}
    </MotionProvider>
  );
};
