import React from 'react';
import { cn } from '@/utils/cn';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1034] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

    const variants = {
      primary: 'bg-[#7A1034] text-white hover:bg-[#570B26] border border-[#7A1034] shadow-sm',
      secondary: 'bg-transparent text-[#7A1034] border border-[#7A1034] hover:bg-[#F7EAF0]',
      outline: 'bg-transparent text-[#292329] border border-[#EADDE2] hover:border-[#7A1034] hover:text-[#7A1034]',
      ghost: 'bg-transparent text-[#7A1034] hover:bg-[#F7EAF0]',
      gold: 'bg-[#F9AD24] text-[#570B26] font-bold hover:bg-[#FCE2A9] border border-[#F9AD24] shadow-sm',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 rounded-sm gap-1.5 tracking-wider uppercase',
      md: 'text-sm px-5 py-2.5 rounded-md gap-2 tracking-wide',
      lg: 'text-base px-7 py-3.5 rounded-md gap-2.5 tracking-wide',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
