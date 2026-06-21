import React, { useState } from 'react';
import { Menu, CheckCircle, XCircle, ChevronDown, Check, Minus } from 'lucide-react';

interface PricingProps {
  onHomeClick: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onAboutClick: () => void;
  onTeachersClick: () => void;
  onCoursesClick: () => void;
}

export function Pricing({ onHomeClick, onLoginClick, onRegisterClick, onAboutClick, onTeachersClick, onCoursesClick }: PricingProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container" dir="rtl">
      {/* TopNavBar */}
      <nav className="bg-surface/90 backdrop-blur-md sticky top-0 border-b border-outline-variant/20 shadow-sm z-50 transition-all">
        <div className="flex flex-row-reverse justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-4">
          
          {/* Logo on Left (RTL flex-row-reverse pushes it to visual left) */}
          <div className="text-headline-md font-extrabold text-primary shrink-0">
            أكاديمية النجاح
          </div>
          
          {/* Middle Links (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8 flex-row-reverse">
            <button onClick={onHomeClick} className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">الرئيسية</button>
            <button onClick={onCoursesClick} className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">الدورات</button>
            <button onClick={onTeachersClick} className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">المعلمون</button>
            <button disabled className="text-primary font-bold transition-colors font-label-md text-[15px]">الأسعار</button>
            <button onClick={onAboutClick} className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">من نحن</button>
          </div>

          {/* Right Side Buttons Action (RTL flex-row-reverse pushes it to visual right) */}
          <div className="flex gap-4 flex-row-reverse items-center shrink-0">
            <button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-primary-container to-secondary text-white px-6 py-2.5 rounded-lg font-label-md shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              ابدأ مجاناً
            </button>
            <button 
              onClick={onLoginClick} 
              className="text-primary font-label-md hover:opacity-80 transition-opacity duration-300 hidden md:block"
            >
              تسجيل الدخول
            </button>
            <button 
              className="md:hidden text-primary p-2 hover:bg-surface-container rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface border-t border-outline-variant/20 px-margin-mobile py-4 space-y-4 animate-in slide-in-from-top-2">
             <button onClick={onHomeClick} className="block w-full text-right text-on-surface-variant hover:text-primary font-label-md">الرئيسية</button>
             <button onClick={onCoursesClick} className="block w-full text-right text-on-surface-variant hover:text-primary font-label-md">الدورات</button>
             <button onClick={onTeachersClick} className="block w-full text-right text-on-surface-variant hover:text-primary font-label-md">المعلمون</button>
             <button disabled className="block w-full text-right text-primary font-bold font-label-md">الأسعار</button>
             <button onClick={onAboutClick} className="block w-full text-right text-on-surface-variant hover:text-primary font-label-md">من نحن</button>
             <div className="h-px bg-outline-variant/20 w-full my-2"></div>
             <button 
                onClick={onLoginClick}
                className="w-full text-center text-primary font-label-md py-2 hover:bg-primary/5 rounded-lg transition-colors"
             >
                تسجيل الدخول
             </button>
          </div>
        )}
      </nav>

      <main className="flex-grow flex flex-col items-center w-full pb-section-padding pt-16">
        {/* Header Section */}
        <section className="w-full max-w-container-max px-margin-mobile md:px-gutter mx-auto text-center mb-16">
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mb-4 leading-tight">
            استثمر في <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary">مستقبلك</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body-md">
            اختر الخطة التي تناسب طموحك. جميع الخطط مصممة لتوفير أفضل تجربة تعليمية لطلاب الثانوية العامة.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-surface-container-high rounded-full p-1 mb-12 shadow-sm relative">
             {/* A custom solution for RTL toggle */}
              <div 
                className="absolute top-1 bottom-1 bg-surface rounded-full shadow-sm transition-all duration-300 z-0"
                style={{
                  left: isAnnual ? '4px' : 'calc(50% + 4px)',
                  right: !isAnnual ? '4px' : 'calc(50% + 4px)',
                }}
              />
             <button 
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full font-label-md transition-all duration-300 relative z-10 w-32 ${!isAnnual ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
             >
                شهري
             </button>
             <button 
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full font-label-md flex justify-center items-center transition-all duration-300 relative z-10 w-32 ${isAnnual ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
             >
                سنوي <span className="text-[10px] sm:text-xs bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-full mr-2 font-bold">-20%</span>
             </button>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="w-full max-w-container-max px-margin-mobile md:px-gutter mx-auto mb-section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Basic Plan */}
            <div className="bg-white/80 backdrop-blur-md rounded-[24px] p-8 flex flex-col h-full shadow-[0_4px_20px_rgba(37,99,235,0.04)] border border-outline-variant/30 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-8">
                <h3 className="font-headline font-bold text-2xl text-on-surface mb-2">الأساسي</h3>
                <p className="text-on-surface-variant font-body-md mb-6 min-h-[48px]">مثالي للطلاب الذين يفضلون المذاكرة الذاتية ومراجعة الدروس.</p>
                <div className="flex items-baseline mb-2 flex-row-reverse justify-end">
                  <span className="text-on-surface-variant ml-2 font-body-md">{isAnnual ? 'ج.م / سنة' : 'ج.م / شهر'}</span>
                  <span className="text-4xl font-headline font-extrabold text-on-surface">
                     {isAnnual ? '1440' : '150'}
                  </span>
                </div>
              </div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow cursor-default">
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  الوصول لجميع الدروس المسجلة
                </li>
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  مذكرات PDF لكل درس
                </li>
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  امتحان شهري تقييمي
                </li>
                <li className="flex items-center text-on-surface-variant/50 font-body-md space-x-3 space-x-reverse">
                  <XCircle className="text-outline-variant w-5 h-5 ml-3" />
                  <span className="line-through">حصص مراجعة لايف</span>
                </li>
                <li className="flex items-center text-on-surface-variant/50 font-body-md space-x-3 space-x-reverse">
                  <XCircle className="text-outline-variant w-5 h-5 ml-3" />
                  <span className="line-through">بنك أسئلة متقدم</span>
                </li>
              </ul>
              
              <button 
                onClick={onRegisterClick}
                className="w-full py-3 rounded-full border-2 border-primary text-primary font-bold font-label-md hover:bg-primary/5 transition-colors mt-auto"
              >
                اشترك الآن
              </button>
            </div>

            {/* Pro Plan (Popular) */}
            <div className="bg-white/80 backdrop-blur-md rounded-[24px] p-8 flex flex-col h-full relative shadow-[0_8px_30px_rgba(37,99,235,0.12)] border-2 border-primary transition-transform duration-300 hover:-translate-y-2 md:-mt-4">
              {/* Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1.5 rounded-full text-sm font-bold font-label-md shadow-md whitespace-nowrap">
                الأكثر شعبية
              </div>
              
              <div className="mb-8 pt-4">
                <h3 className="font-headline font-bold text-2xl text-primary mb-2">المتفوق</h3>
                <p className="text-on-surface-variant font-body-md mb-6 min-h-[48px]">الخطة المتكاملة لضمان التفوق والمتابعة المستمرة.</p>
                <div className="flex items-baseline mb-2 flex-row-reverse justify-end">
                  <span className="text-on-surface-variant ml-2 font-body-md">{isAnnual ? 'ج.م / سنة' : 'ج.م / شهر'}</span>
                  <span className="text-4xl font-headline font-extrabold text-on-surface">
                    {isAnnual ? '2880' : '300'}
                  </span>
                </div>
              </div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow cursor-default">
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  الوصول لجميع الدروس المسجلة
                </li>
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  مذكرات PDF لكل درس
                </li>
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  امتحان أسبوعي وشهري
                </li>
                <li className="flex items-center text-on-surface font-bold font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-secondary w-5 h-5 ml-3" />
                  حصتين مراجعة لايف أسبوعياً
                </li>
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  الوصول لبنك الأسئلة المتقدم
                </li>
              </ul>
              
              <button onClick={onRegisterClick} className="w-full py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold font-label-md shadow-md hover:shadow-lg transition-all active:scale-95 mt-auto">
                اشترك الآن
              </button>
            </div>

            {/* Elite Plan */}
            <div className="bg-white/80 backdrop-blur-md rounded-[24px] p-8 flex flex-col h-full shadow-[0_4px_20px_rgba(37,99,235,0.04)] border border-outline-variant/30 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-8">
                <h3 className="font-headline font-bold text-2xl text-on-surface mb-2">النخبة</h3>
                <p className="text-on-surface-variant font-body-md mb-6 min-h-[48px]">للحصول على توجيه شخصي ومتابعة مكثفة على مدار الساعة.</p>
                <div className="flex items-baseline mb-2 flex-row-reverse justify-end">
                  <span className="text-on-surface-variant ml-2 font-body-md">{isAnnual ? 'ج.م / سنة' : 'ج.م / شهر'}</span>
                  <span className="text-4xl font-headline font-extrabold text-on-surface">
                     {isAnnual ? '5760' : '600'}
                  </span>
                </div>
              </div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow cursor-default">
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  كل مميزات خطة "المتفوق"
                </li>
                <li className="flex items-center text-on-surface font-bold font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-tertiary-container w-5 h-5 ml-3" />
                  جلسة توجيه شخصية 1-to-1 شهرياً
                </li>
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  مراجعة وتقييم الواجبات يدوياً
                </li>
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  أولوية الرد في جروبات الدعم
                </li>
                <li className="flex items-center text-on-surface font-body-md space-x-3 space-x-reverse">
                  <CheckCircle className="text-primary w-5 h-5 ml-3" />
                  تخصيص خطة دراسية فردية
                </li>
              </ul>
              
              <button 
                onClick={onRegisterClick}
                className="w-full py-3 rounded-full border-2 border-primary text-primary font-bold font-label-md hover:bg-primary/5 transition-colors mt-auto"
              >
                اشترك الآن
              </button>
            </div>

          </div>
        </section>

        {/* Feature Comparison Table (Desktop Mostly) */}
        <section className="w-full max-w-container-max px-margin-mobile md:px-gutter mx-auto mb-section-padding hidden md:block">
          <h2 className="font-headline font-bold text-3xl text-center text-on-surface mb-12">مقارنة الميزات بالتفصيل</h2>
          
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 overflow-hidden">
            <table className="w-full text-right font-body-md">
              <thead className="bg-surface-container-low border-b border-outline-variant/30">
                <tr>
                  <th className="py-4 px-6 text-on-surface-variant font-semibold w-1/4">الميزة</th>
                  <th className="py-4 px-6 text-center text-on-surface font-bold text-lg w-1/4">الأساسي</th>
                  <th className="py-4 px-6 text-center text-primary font-bold text-lg w-1/4 bg-primary/5">المتفوق</th>
                  <th className="py-4 px-6 text-center text-on-surface font-bold text-lg w-1/4">النخبة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-6 text-on-surface font-medium">الوصول للمكتبة المسجلة</td>
                  <td className="py-4 px-6 text-center text-primary"><Check className="mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-primary/5 text-primary"><Check className="mx-auto" /></td>
                  <td className="py-4 px-6 text-center text-primary"><Check className="mx-auto" /></td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-6 text-on-surface font-medium">مذكرات PDF</td>
                  <td className="py-4 px-6 text-center text-primary"><Check className="mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-primary/5 text-primary"><Check className="mx-auto" /></td>
                  <td className="py-4 px-6 text-center text-primary"><Check className="mx-auto" /></td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-6 text-on-surface font-medium">الامتحانات الدورية</td>
                  <td className="py-4 px-6 text-center text-on-surface-variant">شهرياً فقط</td>
                  <td className="py-4 px-6 text-center text-on-surface bg-primary/5 font-semibold">أسبوعياً وشهرياً</td>
                  <td className="py-4 px-6 text-center text-on-surface font-semibold">أسبوعياً وشهرياً</td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-6 text-on-surface font-medium">حصص اللايف التفاعلية</td>
                  <td className="py-4 px-6 text-center text-outline-variant/50"><Minus className="mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-primary/5 text-on-surface">حصتين أسبوعياً</td>
                  <td className="py-4 px-6 text-center text-on-surface">3 حصص أسبوعياً</td>
                </tr>
                {/* Row 5 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-6 text-on-surface font-medium">بنك الأسئلة المتقدم</td>
                  <td className="py-4 px-6 text-center text-outline-variant/50"><Minus className="mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-primary/5 text-primary"><Check className="mx-auto" /></td>
                  <td className="py-4 px-6 text-center text-primary"><Check className="mx-auto" /></td>
                </tr>
                {/* Row 6 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-6 text-on-surface font-medium">متابعة شخصية (1-to-1)</td>
                  <td className="py-4 px-6 text-center text-outline-variant/50"><Minus className="mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-primary/5 text-outline-variant/50"><Minus className="mx-auto" /></td>
                  <td className="py-4 px-6 text-center text-primary"><Check className="mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="w-full max-w-3xl px-margin-mobile mx-auto mb-section-padding">
          <h2 className="font-headline font-bold text-3xl text-center text-on-surface mb-10">الأسئلة الشائعة</h2>
          
          <div className="space-y-4 font-body-md">
            {[
              { 
                q: "هل يمكنني تغيير خطتي لاحقاً؟", 
                a: "نعم، يمكنك الترقية أو تغيير خطتك في أي وقت من خلال إعدادات حسابك. سيتم احتساب الفارق النسبي للمدة المتبقية من اشتراكك الحالي." 
              },
              { 
                q: "ما هي طرق الدفع المتاحة؟", 
                a: "نقبل جميع البطاقات الائتمانية (فيزا، ماستركارد، ميزة)، بالإضافة إلى الدفع عبر المحافظ الإلكترونية (فودافون كاش، اتصالات كاش) وفوري." 
              },
              { 
                q: "كيف تعمل سياسة استرداد الأموال؟", 
                a: "نقدم ضمان استرداد كامل للأموال خلال أول 14 يوماً من الاشتراك إذا لم تكن راضياً عن الخدمة، بدون طرح أي أسئلة. تواصل مع فريق الدعم وسنقوم بتنفيذ طلبك." 
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 shadow-sm overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center text-right group outline-none"
                >
                  <h4 className="text-lg font-bold text-on-surface transition-colors group-hover:text-primary">
                    {faq.q}
                  </h4>
                  <ChevronDown className={`text-primary transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${openFaq === idx ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                >
                   <p className="text-on-surface-variant text-base overflow-hidden pr-2">
                     {faq.a}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest dark:bg-surface-container-low w-full py-section-padding border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row-reverse justify-between items-start gap-stack-lg w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          {/* Brand & Copyright */}
          <div className="flex flex-col gap-4 text-right">
            <div className="text-headline-md font-headline font-extrabold text-primary dark:text-primary-fixed">
              أكاديمية النجاح
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant dark:text-on-surface-variant">
              © 2024 أكاديمية النجاح. جميع الحقوق محفوظة لطلابنا المتفوقين.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col gap-3 text-right">
            <button onClick={onAboutClick} className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-[-4px] text-right">
              عن المنصة
            </button>
            <a className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-[-4px]" href="#">
              تواصل معنا
            </a>
            <a className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-[-4px]" href="#">
              الشروط والأحكام
            </a>
            <a className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-[-4px]" href="#">
              سياسة الخصوصية
            </a>
            <a className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-[-4px]" href="#">
              مركز المساعدة
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
