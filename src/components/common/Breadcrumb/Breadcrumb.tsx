import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  variant = 'light',
  className,
}) => {
  const isDark = variant === 'dark';

  return (
    <nav aria-label="Breadcrumb" className={cn('py-2', className)}>
      <ol
        className={cn(
          'flex items-center space-x-2 text-xs sm:text-sm font-sans',
          isDark ? 'text-[#FFF9F0]/70' : 'text-[#766A70]'
        )}
      >
        <li>
          <Link
            to="/"
            className={cn(
              'flex items-center transition-colors',
              isDark ? 'hover:text-[#FCE2A9]' : 'hover:text-[#7A1034]'
            )}
            title="Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-2">
              <ChevronRight
                className={cn(
                  'w-3.5 h-3.5 shrink-0',
                  isDark ? 'text-[#FFF9F0]/40' : 'text-[#EADDE2]'
                )}
              />
              {isLast || !item.href ? (
                <span
                  className={cn(
                    'font-medium truncate max-w-[200px] sm:max-w-none',
                    isDark ? 'text-[#FCE2A9]' : 'text-[#7A1034]'
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    'transition-colors truncate max-w-[200px] sm:max-w-none',
                    isDark ? 'hover:text-white' : 'hover:text-[#7A1034]'
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
