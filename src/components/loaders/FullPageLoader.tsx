import React from 'react';
import { motion } from 'framer-motion';

export interface FullPageLoaderProps {
  message?: string;
}

export const FullPageLoader: React.FC<FullPageLoaderProps> = ({
  message = 'Welcome to PAARR EVER...',
}) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF9F0]">
      <div className="relative flex flex-col items-center">
        {/* Animated Brand Ring */}
        <div className="w-16 h-16 rounded-full border-2 border-[#F7EAF0] border-t-[#7A1034] animate-spin" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[#7A1034] font-bold text-lg">
          P
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-sm font-sans uppercase tracking-[0.2em] text-[#7A1034] font-medium"
      >
        {message}
      </motion.p>
      <p className="mt-1 text-xs text-[#766A70] font-sans">
        Neighborhood Supermarket &bull; Lowest Price in Chennai
      </p>
    </div>
  );
};
