import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import { Skeleton } from '@/components/skeleton/Skeleton';

export interface ImageLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
  containerClassName?: string;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt = '',
  className,
  containerClassName,
  aspectRatio,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-[#F7EAF0]/40', aspectRatio, containerClassName)}>
      {!isLoaded && !hasError && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F7EAF0]/50 text-muted-grey text-xs p-2 text-center">
          Image preview unavailable
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};
