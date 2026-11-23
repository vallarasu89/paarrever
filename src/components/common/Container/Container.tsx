import React from 'react';
import { cn } from '@/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide' | 'full';
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'default',
  as: Component = 'div',
  ...props
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
