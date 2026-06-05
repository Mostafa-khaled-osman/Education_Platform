import React, { useState } from 'react';
import { School } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SignUpProps {
  onLoginClick: () => void;
  onSignUp: () => void;
}

export function SignUp({ onLoginClick, onSignUp }: SignUpProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp();
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background font-body-md" dir="rtl">
      {/* Minimal Header */}
      <header className="bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30 sticky top-0 z-50 flex justify-between items-center px-4 md:px-8 max-w-container-max mx-auto h-16 w-full">
        <div className="font-headline-md text-2xl font-bold text-primary">
          أكاديمية النجاح
        </div>
        <button 
          onClick={onLoginClick}
          className="text-primary hover:text-secondary font-label-md transition-colors duration-300 outline-none"
        >
          تسجيل الدخول
        </button>
      </header>

      <main className="flex-grow flex items-center justify-center py-10 px-4 md:px-8 w-full max-w-container-max mx-auto">
        <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row w-full border border-outline-variant/30">
          
          {/* Form Side (Right in RTL) */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-8 text-center md:text-right">
              <h1 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-on-surface mb-3">إنشاء حساب جديد</h1>
              <p className="text-on-surface-variant font-body-md">انضم إلى منصة أكاديمية النجاح وابدأ رحلة التفوق.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block font-label-md text-sm text-on-surface mb-2">الاسم بالكامل</label>
                <input 
                  type="text" 
                  id="fullName" 
                  className="w-full bg-surface-container-low rounded-xl border border-transparent focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3.5 text-on-surface placeholder:text-outline/70 outline-none transition-all font-body-md" 
                  placeholder="أدخل اسمك رباعياً" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-label-md text-sm text-on-surface mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  id="email" 
                  dir="ltr"
                  className="w-full bg-surface-container-low rounded-xl border border-transparent focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3.5 text-on-surface placeholder:text-outline/70 outline-none transition-all font-body-md text-left" 
                  placeholder="example@email.com" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block font-label-md text-sm text-on-surface mb-2">رقم الموبايل</label>
                <input 
                  type="tel" 
                  id="phone" 
                  dir="ltr"
                  className="w-full bg-surface-container-low rounded-xl border border-transparent focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3.5 text-on-surface placeholder:text-outline/70 outline-none transition-all font-body-md text-left" 
                  placeholder="01X XXXX XXXX" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block font-label-md text-sm text-on-surface mb-2">كلمة المرور</label>
                <input 
                  type="password" 
                  id="password" 
                  dir="ltr"
                  className="w-full bg-surface-container-low rounded-xl border border-transparent focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3.5 text-on-surface placeholder:text-outline/70 outline-none transition-all font-body-md text-left" 
                  placeholder="••••••••" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="grade" className="block font-label-md text-sm text-on-surface mb-2">المرحلة الدراسية</label>
                <div className="relative">
                  <select 
                    id="grade" 
                    className="w-full bg-surface-container-low rounded-xl border border-transparent focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3.5 text-on-surface outline-none transition-all font-body-md appearance-none"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>اختر المرحلة الدراسية</option>
                    <option value="1">الصف الأول الثانوي</option>
                    <option value="2">الصف الثاني الثانوي</option>
                    <option value="3">الصف الثالث الثانوي</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none text-outline">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary-container to-secondary text-on-primary font-label-md py-3.5 rounded-xl shadow-md hover:opacity-90 active:scale-[0.98] transition-all duration-300"
                >
                  إنشاء حساب
                </button>
              </div>
            </form>

            <div className="mt-8 relative flex items-center justify-center">
              <hr className="w-full border-outline-variant/40" />
              <span className="absolute bg-surface-container-lowest px-4 text-outline/80 font-label-md text-sm">أو سجل باستخدام</span>
            </div>

            <div className="mt-8 flex gap-4">
              <button 
                type="button" 
                className="flex-1 flex items-center justify-center gap-2 bg-surface-container-lowest border border-outline-variant/60 rounded-xl py-3 hover:bg-surface-container-low transition-colors text-on-surface font-label-md active:scale-[0.98]"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Google
              </button>
              <button 
                type="button" 
                className="flex-1 flex items-center justify-center gap-2 bg-surface-container-lowest border border-outline-variant/60 rounded-xl py-3 hover:bg-surface-container-low transition-colors text-on-surface font-label-md active:scale-[0.98]"
              >
                <svg className="w-5 h-5 shrink-0 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                </svg>
                Facebook
              </button>
            </div>

            <div className="mt-8 text-center font-body-md text-on-surface-variant">
              لديك حساب بالفعل؟{' '}
              <button 
                type="button"
                onClick={onLoginClick}
                className="text-primary hover:text-primary-container font-bold transition-colors outline-none"
              >
                تسجيل الدخول
              </button>
            </div>
          </div>

          {/* Graphic Side (Left in RTL) */}
          <div className="hidden md:block w-1/2 relative bg-primary-fixed overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800&auto=format&fit=crop")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed to-transparent opacity-80"></div>
            
            <div className="absolute bottom-12 right-12 left-12 text-on-primary z-10 text-right">
              <h2 className="font-headline-lg text-4xl font-bold mb-4 leading-tight">رحلتك نحو القمة تبدأ هنا.</h2>
              <p className="font-body-lg text-lg opacity-90 leading-relaxed max-w-sm">
                انضم لآلاف الطلاب الذين يحققون أحلامهم عبر منصتنا التفاعلية المتطورة.
              </p>
            </div>

            {/* Decorative glass elements */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform rotate-12 shadow-xl"></div>
            <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transform -rotate-12 shadow-xl flex items-center justify-center">
              <School className="w-10 h-10 text-white" />
            </div>
          </div>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest font-body-md border-t border-outline-variant/30 w-full py-6 mt-auto">
        <div className="max-w-container-max mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-headline-md text-xl font-bold text-primary">
            أكاديمية النجاح
          </div>
          <div className="flex gap-6 text-sm text-on-surface-variant">
            <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-primary transition-colors">اتصل بنا</a>
          </div>
          <div className="text-on-surface-variant text-sm opacity-80">
            &copy; {new Date().getFullYear()} أكاديمية النجاح. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}
