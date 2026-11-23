import React from 'react';
import { cn } from '@/utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rectangular' | 'circular' | 'rounded';
  shimmer?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rounded',
  shimmer = true,
  ...props
}) => {
  const variantClasses = {
    rectangular: 'rounded-none',
    circular: 'rounded-full',
    rounded: 'rounded-md',
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        'bg-[#F7EAF0]/70 transition-colors',
        variantClasses[variant],
        shimmer ? 'shimmer-bg' : 'animate-pulse',
        className
      )}
      {...props}
    />
  );
};
