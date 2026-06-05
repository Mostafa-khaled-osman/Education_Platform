import React from 'react';
import { User, Lock, EyeOff, BookOpen } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onSignUp: () => void;
}

export function Login({ onLogin, onSignUp }: LoginProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-surface-container-lowest" dir="rtl">
      {/* ... previous graphic side code ... */}
      <div className="hidden md:flex md:w-1/2 relative bg-gradient-to-br from-primary to-secondary items-center justify-center p-8 lg:p-20 overflow-hidden">
        {/* ... */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 text-center max-w-md">
          <h1 className="font-headline-xl text-4xl lg:text-5xl font-extrabold text-on-primary mb-6 leading-tight">
            أهلاً بك مجدداً في رحلة تفوقك
          </h1>
          <p className="font-body-lg text-lg text-on-primary/90 leading-relaxed mb-10">
            منصة ثانوية أونلاين توفر لك أفضل الأدوات التعليمية لتحقيق أهدافك.
          </p>
          
          <div className="w-full h-72 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
              alt="طلاب يدرسون" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <BookOpen className="w-20 h-20 text-white relative z-10" />
          </div>
        </div>
      </div>

      {/* Form Side (Left in RTL) */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-12 lg:p-20">
        
        <div className="md:hidden text-center mb-8 mt-4">
          <h2 className="font-headline-xl-mobile text-3xl font-extrabold text-primary">ثانوية أونلاين</h2>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center md:text-right mb-10">
              <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-3">تسجيل الدخول</h2>
              <p className="font-body-md text-on-surface-variant">أدخل بياناتك للوصول إلى دروسك ومتابعة تقدمك</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="identifier" className="block font-label-md text-sm text-on-surface">البريد الإلكتروني أو رقم الهاتف</label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-outline">
                    <User className="w-5 h-5" />
                  </span>
                  <input 
                    type="text" 
                    id="identifier" 
                    className="block w-full pl-4 pr-12 py-3.5 bg-surface border border-outline-variant/60 rounded-xl text-on-surface placeholder-on-surface-variant/80 focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md" 
                    placeholder="example@email.com" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block font-label-md text-sm text-on-surface">كلمة المرور</label>
                  <a href="#" className="font-label-md text-sm text-primary hover:text-primary-container transition-colors">نسيت كلمة المرور؟</a>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-outline">
                    <Lock className="w-5 h-5" />
                  </span>
                  <input 
                    type="password" 
                    id="password" 
                    className="block w-full pl-12 pr-12 py-3.5 bg-surface border border-outline-variant/60 rounded-xl text-on-surface placeholder:text-outline-variant/80 focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md" 
                    placeholder="••••••••" 
                    required 
                  />
                  <button type="button" className="absolute inset-y-0 left-0 flex items-center pl-4 text-outline hover:text-on-surface transition-colors">
                    <EyeOff className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full flex justify-center py-3.5 px-4 rounded-xl shadow-md font-label-md text-base text-on-primary bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 active:scale-[0.98]"
                >
                  دخول
                </button>
              </div>

              <div className="relative py-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant/40"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-surface-container-lowest font-body-md text-on-surface-variant">أو سجل الدخول بواسطة</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center w-full px-4 py-3 border border-outline-variant/60 rounded-xl bg-surface hover:bg-surface-container transition-colors active:scale-[0.98]">
                  <svg className="w-5 h-5 ml-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  <span className="font-label-md text-on-surface">Google</span>
                </button>
                <button type="button" className="flex items-center justify-center w-full px-4 py-3 border border-outline-variant/60 rounded-xl bg-surface hover:bg-surface-container transition-colors active:scale-[0.98]">
                  <svg className="w-5 h-5 ml-3" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-label-md text-on-surface">Facebook</span>
                </button>
              </div>

              <div className="text-center pt-8">
                <p className="font-body-md text-on-surface-variant">
                  ليس لديك حساب؟{' '}
                  <button 
                    type="button" 
                    onClick={onSignUp}
                    className="font-label-md text-primary hover:text-primary-container transition-colors outline-none inline"
                  >
                    اشترك الآن
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
          <div className="font-bold text-primary text-lg">ثانوية أونلاين</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-primary transition-colors">اتصل بنا</a>
          </div>
          <div className="opacity-80">
            &copy; {new Date().getFullYear()} ثانوية أونلاين. جميع الحقوق محفوظة
          </div>
        </div>
      </div>
    </div>
  );
}
