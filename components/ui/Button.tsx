import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-white hover:opacity-90 focus:ring-primary',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-500 hover:text-white focus:ring-neutral-500',
    outline: 'border border-neutral-500 text-neutral-900 hover:bg-neutral-500 hover:text-white focus:ring-neutral-500',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm rounded-sm',
    md: 'px-4 py-3 text-base rounded-md',
    lg: 'px-6 py-4 text-lg rounded-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={cn('w-4 h-4', children && 'mr-2')} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={cn('w-4 h-4', children && 'ml-2')} />
      )}
    </button>
  );
}
