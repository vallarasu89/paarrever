import React from 'react';
import { Skeleton } from './Skeleton';
import { cn } from '@/utils/cn';

export interface HeroSkeletonProps {
  className?: string;
}

export const HeroSkeleton: React.FC<HeroSkeletonProps> = ({ className }) => {
  return (
    <div className={cn('w-full py-16 bg-cream/50 min-h-[500px] flex items-center', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <Skeleton className="w-32 h-4 rounded-sm" />
          <Skeleton className="w-4/5 h-12 rounded-md" />
          <Skeleton className="w-3/5 h-12 rounded-md" />
          <Skeleton className="w-full h-4 rounded-sm mt-4" />
          <Skeleton className="w-3/4 h-4 rounded-sm" />
          <div className="pt-4 flex gap-4">
            <Skeleton className="w-36 h-12 rounded-md" />
            <Skeleton className="w-36 h-12 rounded-md" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <Skeleton className="w-full aspect-[4/3] rounded-lg" />
        </div>
      </div>
    </div>
  );
};
