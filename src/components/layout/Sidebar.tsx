import React, { ReactNode } from 'react';
import { LayoutDashboard, BookOpen, FileQuestion, User, Settings, MessageCircle, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { ViewType } from '../../App';

interface NavItem {
  icon: ReactNode;
  label: string;
  id: ViewType | string;
}

const navItems: NavItem[] = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'لوحة التحكم', id: 'dashboard' },
  { icon: <BookOpen className="w-5 h-5" />, label: 'دروسي', id: 'lessons' },
  { icon: <FileQuestion className="w-5 h-5" />, label: 'الامتحانات', id: 'exams' },
  { icon: <User className="w-5 h-5" />, label: 'الملف الشخصي', id: 'profile' },
  { icon: <Settings className="w-5 h-5" />, label: 'الإعدادات', id: 'settings' },
];

interface SidebarProps {
  className?: string;
  currentView?: ViewType;
  onNavigate?: (view: ViewType) => void;
  onLogout?: () => void;
}

export function Sidebar({ className, currentView = 'dashboard', onNavigate, onLogout }: SidebarProps) {
  return (
    <aside className={cn("fixed top-0 right-0 h-full w-64 z-50 flex flex-col p-4 bg-surface border-l border-outline-variant shadow-md hidden md:flex", className)}>
      <div className="mb-8 px-2 flex flex-col items-center pt-4">
        {/* Abstract Logo Placeholder */}
        <div className="w-16 h-16 rounded-full mb-4 bg-primary-container text-on-primary-container flex items-center justify-center border-2 border-primary-fixed shadow-sm">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="font-headline-md font-black text-primary text-center leading-tight">
          أكاديمية النجاح
        </h1>
        <p className="text-on-surface-variant text-sm mt-1 font-body-md">
          الصف الثالث الثانوي
        </p>
      </div>

      <nav className="flex-1 flex flex-col gap-2 overflow-y-auto hide-scrollbar">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id as ViewType)}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl transition-all active:scale-[0.98]",
                isActive 
                  ? "bg-primary-container text-on-primary-container" 
                  : "text-on-surface-variant hover:bg-surface-container-high"
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.icon}
              <span className="font-label-md">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-outline-variant/20">
        <button className="w-full mb-4 bg-gradient-to-r from-primary-container to-secondary py-3 px-4 rounded-xl text-on-primary font-label-md shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <MessageCircle className="w-5 h-5" />
          تواصل مع الدعم
        </button>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 text-error p-3 hover:bg-error-container/50 transition-all rounded-xl active:scale-[0.98]"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-label-md">تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
}
