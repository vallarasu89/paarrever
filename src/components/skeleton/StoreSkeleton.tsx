import React from 'react';
import { Skeleton } from './Skeleton';
import { TextSkeleton } from './TextSkeleton';
import { cn } from '@/utils/cn';

export interface StoreSkeletonProps {
  className?: string;
}

export const StoreSkeleton: React.FC<StoreSkeletonProps> = ({ className }) => {
  return (
    <div className={cn('bg-white border border-border rounded-lg p-5', className)}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <Skeleton className="w-20 h-3 rounded-sm mb-2" />
          <Skeleton className="w-3/4 h-5 rounded-sm" />
        </div>
        <Skeleton className="w-12 h-6 rounded-full" />
      </div>
      <TextSkeleton lines={2} lineHeight="h-3" className="mb-4" />
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton className="w-16 h-5 rounded-sm" />
        <Skeleton className="w-24 h-5 rounded-sm" />
        <Skeleton className="w-20 h-5 rounded-sm" />
      </div>
      <div className="pt-3 border-t border-border flex gap-3">
        <Skeleton className="w-1/2 h-9 rounded-sm" />
        <Skeleton className="w-1/2 h-9 rounded-sm" />
      </div>
    </div>
  );
};
