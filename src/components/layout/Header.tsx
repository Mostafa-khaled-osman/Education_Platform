import { Bell, MessageSquare, Menu, Search, ShoppingCart } from 'lucide-react';
import { cn } from '../../lib/utils';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-gutter h-16 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm md:w-[calc(100%-16rem)] right-0 md:right-64">
      <div className="flex items-center gap-4">
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={onMenuClick}
            className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-md"
            aria-label="Toggle Sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-headline-md text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            أكاديمية النجاح
          </span>
        </div>
      </div>

      {/* Search Bar for Desktop */}
      <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant/50 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all w-96 ml-auto mr-4">
        <Search className="w-5 h-5 text-outline ml-2 shrink-0" />
        <input 
          type="text" 
          placeholder="ابحث عن درس، مادة، أو معلم..." 
          className="bg-transparent border-none outline-none text-body-md w-full text-on-surface placeholder:text-outline/70 focus:ring-0 p-0"
        />
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <button 
          className="md:hidden text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95 p-2 rounded-full hover:bg-surface-container-high"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>
        <button 
          className="text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95 p-2 rounded-full hover:bg-surface-container-high relative"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
        </button>
        <button 
          className="text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95 p-2 rounded-full hover:bg-surface-container-high"
          aria-label="Shopping Cart"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer ml-2">
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop" 
            alt="صورة الملف الشخصي" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
