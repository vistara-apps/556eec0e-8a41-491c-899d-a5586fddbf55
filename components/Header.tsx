import { Avatar } from './ui/Avatar';
import { Bell, Menu } from 'lucide-react';

export function Header() {
  // For now, using mock user data until MiniKit user context is properly configured
  const mockUser = {
    displayName: 'Pet Parent',
    pfpUrl: undefined
  };

  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Avatar
          src={mockUser.pfpUrl}
          alt={mockUser.displayName}
          size="md"
          fallback={mockUser.displayName.charAt(0)}
        />
        <div>
          <p className="text-sm text-neutral-500">Welcome back,</p>
          <p className="font-semibold text-neutral-900">
            {mockUser.displayName}
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
