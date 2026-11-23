import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ButtonLoaderProps {
  className?: string;
}

export const ButtonLoader: React.FC<ButtonLoaderProps> = ({ className }) => {
  return (
    <Loader2 className={cn('w-4 h-4 animate-spin text-current shrink-0', className)} />
  );
};
