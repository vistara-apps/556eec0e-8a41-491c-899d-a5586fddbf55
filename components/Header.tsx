import { useMiniKit } from '@coinbase/minikit';
import { Avatar } from './ui/Avatar';
import { Bell, Menu } from 'lucide-react';

export function Header() {
  const { context } = useMiniKit();
  
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Avatar
          src={context?.user?.pfpUrl}
          alt={context?.user?.displayName || 'User'}
          size="md"
          fallback={context?.user?.displayName?.charAt(0) || 'U'}
        />
        <div>
          <p className="text-sm text-neutral-500">Welcome back,</p>
          <p className="font-semibold text-neutral-900">
            {context?.user?.displayName || 'Pet Parent'}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-neutral-100 rounded-md transition-colors duration-200">
          <Bell className="w-5 h-5 text-neutral-500" />
        </button>
        <button className="p-2 hover:bg-neutral-100 rounded-md transition-colors duration-200">
          <Menu className="w-5 h-5 text-neutral-500" />
        </button>
      </div>
    </header>
  );
}
