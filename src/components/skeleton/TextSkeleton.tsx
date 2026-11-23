import React from 'react';
import { Skeleton } from './Skeleton';
import { cn } from '@/utils/cn';

export interface TextSkeletonProps {
  lines?: number;
  className?: string;
  lineHeight?: string;
  lastLineWidth?: string;
}

export const TextSkeleton: React.FC<TextSkeletonProps> = ({
  lines = 3,
  className,
  lineHeight = 'h-4',
  lastLineWidth = 'w-3/5',
}) => {
  return (
    <div className={cn('space-y-2.5 w-full', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          className={cn(
            lineHeight,
            index === lines - 1 ? lastLineWidth : 'w-full'
          )}
        />
      ))}
    </div>
  );
};
