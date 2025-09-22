import { cn } from '@/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
  className?: string;
}

export function AppShell({ children, className }: AppShellProps) {
  return (
    <div className={cn('min-h-screen bg-bg', className)}>
      <div className="max-w-md mx-auto bg-surface min-h-screen">
        <div className="px-4 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}
