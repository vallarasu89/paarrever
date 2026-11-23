import React from 'react';
import { HeroSkeleton } from './HeroSkeleton';
import { ProductSkeleton } from './ProductSkeleton';
import { Container } from '@/components/common/Container/Container';
import { cn } from '@/utils/cn';

export interface PageSkeletonProps {
  className?: string;
}

export const PageSkeleton: React.FC<PageSkeletonProps> = ({ className }) => {
  return (
    <div className={cn('min-h-screen pb-16 space-y-12 animate-fade-in', className)}>
      <HeroSkeleton />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
};
