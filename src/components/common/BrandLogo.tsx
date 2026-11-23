import React from 'react';

export interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="PAARR EVER Supermarket"
        className={`${sizeMap[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default BrandLogo;
