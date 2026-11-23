import React from 'react';
import { Skeleton } from './Skeleton';
import { cn } from '@/utils/cn';

export interface ImageSkeletonProps {
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
  className?: string;
}

export const ImageSkeleton: React.FC<ImageSkeletonProps> = ({
  aspectRatio = 'square',
  className,
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
  };

  return (
    <Skeleton
      className={cn('w-full', aspectClasses[aspectRatio], className)}
    />
  );
};
