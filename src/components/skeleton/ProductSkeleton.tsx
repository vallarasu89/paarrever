import React from 'react';
import { Skeleton } from './Skeleton';
import { cn } from '@/utils/cn';

export interface ProductSkeletonProps {
  className?: string;
}

export const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ className }) => {
  return (
    <div className={cn('bg-white border border-border rounded-lg p-4 flex flex-col h-full', className)}>
      <Skeleton className="w-full aspect-[4/3] rounded-md mb-3.5" />
      <Skeleton className="w-24 h-3 rounded-sm mb-2 bg-[#F7EAF0]" />
      <Skeleton className="w-4/5 h-4 rounded-sm mb-1.5" />
      <Skeleton className="w-1/2 h-3.5 rounded-sm mb-3" />
      <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
        <div>
          <Skeleton className="w-16 h-5 rounded-sm" />
          <Skeleton className="w-10 h-3 rounded-sm mt-1" />
        </div>
        <Skeleton className="w-20 h-8 rounded-sm" />
      </div>
    </div>
  );
};
