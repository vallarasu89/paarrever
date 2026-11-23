import React from 'react';
import { Skeleton } from './Skeleton';
import { TextSkeleton } from './TextSkeleton';
import { cn } from '@/utils/cn';

export interface CardSkeletonProps {
  className?: string;
  hasImage?: boolean;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({
  className,
  hasImage = true,
}) => {
  return (
    <div className={cn('p-5 rounded-lg border border-border bg-white', className)}>
      {hasImage && <Skeleton className="w-full h-44 mb-4 rounded-md" />}
      <Skeleton className="w-1/3 h-3 mb-2" />
      <Skeleton className="w-3/4 h-5 mb-3" />
      <TextSkeleton lines={2} lineHeight="h-3" />
      <div className="mt-4 pt-4 border-t border-border/50 flex justify-between items-center">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-16 h-8 rounded-sm" />
      </div>
    </div>
  );
};
