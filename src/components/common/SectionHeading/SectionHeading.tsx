import React from 'react';
import { cn } from '@/utils/cn';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'dark' | 'light';
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  variant = 'dark',
  className,
  action,
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'mb-10 sm:mb-14',
        align === 'center' && 'text-center mx-auto max-w-3xl',
        align === 'left' && 'text-left max-w-2xl',
        align === 'right' && 'text-right ml-auto max-w-2xl',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex-1">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[2px] bg-[#F9AD24] rounded-full" />
              <span
                className={cn(
                  'text-xs font-bold tracking-[0.2em] uppercase font-sans',
                  isDark ? 'text-[#7A1034]' : 'text-[#FCE2A9]'
                )}
              >
                {eyebrow}
              </span>
              <span className="w-5 h-[2px] bg-[#F9AD24] rounded-full" />
            </div>
          )}
          <h2
            className={cn(
              'text-2xl sm:text-3xl lg:text-4xl font-serif font-medium leading-tight',
              isDark ? 'text-[#570B26]' : 'text-white'
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                'mt-3.5 text-sm sm:text-base leading-relaxed font-sans',
                isDark ? 'text-[#766A70]' : 'text-[#FFF9F0]/90'
              )}
            >
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
};
