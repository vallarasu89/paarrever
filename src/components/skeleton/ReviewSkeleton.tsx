import React from 'react';
import { Skeleton } from './Skeleton';
import { TextSkeleton } from './TextSkeleton';
import { cn } from '@/utils/cn';

export interface ReviewSkeletonProps {
  className?: string;
}

export const ReviewSkeleton: React.FC<ReviewSkeletonProps> = ({ className }) => {
  return (
    <div className={cn('bg-white border border-border rounded-lg p-6', className)}>
      <div className="flex items-center gap-3 mb-4">
        <Skeleton variant="circular" className="w-10 h-10" />
        <div>
          <Skeleton className="w-28 h-4 mb-1" />
          <Skeleton className="w-20 h-3" />
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-4 h-4 rounded-sm" />
        ))}
      </div>
      <TextSkeleton lines={3} lineHeight="h-3" />
    </div>
  );
};
