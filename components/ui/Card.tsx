import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'providerHighlight';
  children: React.ReactNode;
}

export function Card({ variant = 'default', className, children, ...props }: CardProps) {
  const variants = {
    default: 'bg-surface border border-neutral-100 shadow-card',
    providerHighlight: 'bg-surface border-2 border-accent shadow-card',
  };

  return (
    <div
      className={cn(
        'rounded-lg p-4 transition-all duration-200',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
