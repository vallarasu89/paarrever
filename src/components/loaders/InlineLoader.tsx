import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface InlineLoaderProps {
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const InlineLoader: React.FC<InlineLoaderProps> = ({
  text = 'Loading...',
  className,
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'w-3.5 h-3.5 text-xs',
    md: 'w-4 h-4 text-sm',
    lg: 'w-5 h-5 text-base',
  };

  return (
    <div className={cn('inline-flex items-center gap-2 text-[#7A1034]', className)}>
      <Loader2 className={cn('animate-spin', sizeMap[size])} />
      {text && <span className="font-sans font-medium text-[#766A70]">{text}</span>}
    </div>
  );
};
