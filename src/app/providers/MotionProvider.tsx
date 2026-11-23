import React from 'react';
import { MotionConfig } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? 'always' : 'user'}>
      {children}
    </MotionConfig>
  );
};
