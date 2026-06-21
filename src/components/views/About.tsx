import React, { useState } from 'react';
import { School, Lightbulb, TrendingUp, Menu } from 'lucide-react';

interface AboutProps {
  onHomeClick: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onPricingClick: () => void;
  onTeachersClick: () => void;
  onCoursesClick: () => void;
}

export function About({ onHomeClick, onLoginClick, onRegisterClick, onPricingClick, onTeachersClick, onCoursesClick }: AboutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col" dir="rtl">
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
            <button onClick={onPricingClick} className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">الأسعار</button>
            <button disabled className="text-primary font-bold transition-colors font-label-md text-[15px]">من نحن</button>
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
             <button onClick={onPricingClick} className="block w-full text-right text-on-surface-variant hover:text-primary font-label-md">الأسعار</button>
             <button disabled className="block w-full text-right text-primary font-bold font-label-md">من نحن</button>
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden bg-surface-bright">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-surface-bright to-surface-bright pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-4xl lg:text-5xl font-headline-lg font-extrabold text-on-surface leading-tight tracking-tight">
                نرسم مستقبل <span className="bg-gradient-to-r from-primary-container to-secondary bg-clip-text text-transparent">التعليم الثانوي</span> برؤية تقنية مبتكرة
              </h1>
              <p className="text-lg lg:text-xl text-on-surface-variant font-body-md max-w-2xl leading-relaxed">
                منصة تعليمية متكاملة صُممت خصيصاً لتلبية احتياجات طالب الثانوية العامة في مصر، نجمع بين نخبة المعلمين وأحدث أدوات التكنولوجيا لتجربة دراسية خالية من التوتر.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={onRegisterClick}
                  className="bg-primary text-white font-label-md font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  انضم إلينا
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-md border border-white/40">
                <img 
                  className="w-full h-full object-cover" 
                  alt="A bright, modern composition showing students using laptops"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDGwygy9ivFj_PiUGKhzrhcwgBA1B_Oek36nyvvD1ngGSM9ertEU6tndpkH98gm_lYC9LxfqW59Aq9mERxgGZ8-aUJwyAC5zYenYlLyOuWODXeup129PiDBfVD5062z1cQ6fMG6K7-2SYy8KSkmXEK3mFVLzbh7hTbSNe4qNXs2K8hrL7NdLigRUlBImu_X4e9l1WRyLSX16lLdC8qTeDGEivC_6L1JLYWHn1FlljFa-0tajOcvRXN091OvBb6qUtov5uQCosF8vOk"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  className="rounded-3xl shadow-xl w-full h-[500px] object-cover" 
                  alt="A clean, minimalist workspace scene featuring a laptop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4MtQM4GfDlXzYLjKg4URtJwSD4gC4s69U7XyYDZoCY0JDCKd82CDtTXO6F0JeJfWv9NRJd2Y76oAdaLlOA8aZI_NVeAlW6Jokbp88GE9QPAWVqgMbnjvh9OjUvoEM3UlJFfITmdFyyPKHFJoRbHdzFITzMMITtXm9TMe-HazF6pYaVR_B1cBLav7gruAVQfENlQI0aCvfMUNF1ZuAD_oYzRhqpTB19lnLFTEHn4NQoy7P8RPP9EytVaO3xvcccRx3BBR8hU_gzKz"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-headline-lg font-bold text-on-surface">قصتنا</h2>
                <div className="h-1 w-20 bg-secondary rounded-full"></div>
                <p className="text-lg text-on-surface-variant font-body-md leading-relaxed">
                  بدأت الفكرة من إدراكنا لحجم التحديات التي يواجهها طالب الثانوية العامة. أردنا خلق بيئة تكسر حاجز الخوف والقلق، وتستبدل الأساليب التقليدية بتجربة تفاعلية ممتعة.
                </p>
                <p className="text-lg text-on-surface-variant font-body-md leading-relaxed">
                  انطلقنا برؤية طموحة: تحويل العبء الدراسي إلى رحلة استكشاف وشغف. فريقنا يضم خبراء تربويين ومهندسي برمجيات اجتمعوا على هدف واحد: تمكين كل طالب من الوصول إلى قمة نجاحه.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-primary-container text-on-primary-container">
          <div className="max-w-container-max mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-x-reverse divide-on-primary-container/20">
              <div className="space-y-2">
                <div className="text-4xl font-headline-lg font-extrabold">+100k</div>
                <div className="text-sm font-label-md opacity-90">طالب مستفيد</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-headline-lg font-extrabold">+50</div>
                <div className="text-sm font-label-md opacity-90">دورة تعليمية</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-headline-lg font-extrabold">98%</div>
                <div className="text-sm font-label-md opacity-90">نسبة الرضا</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-headline-lg font-extrabold">+200</div>
                <div className="text-sm font-label-md opacity-90">معلم خبير</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-headline-lg font-bold text-on-surface">قيمنا الأساسية</h2>
              <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">المبادئ التي تقودنا في كل خطوة لتطوير منصتنا.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group border border-outline-variant/20">
                <div className="w-16 h-16 rounded-xl bg-primary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <School className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-headline-md font-bold text-on-surface mb-3">تعليم عالي الجودة</h3>
                <p className="text-on-surface-variant font-body-md text-sm">نلتزم بتقديم محتوى دقيق وشامل، مصمم من قبل نخبة الخبراء لضمان الفهم العميق.</p>
              </div>
              
              {/* Value 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group border border-outline-variant/20">
                <div className="w-16 h-16 rounded-xl bg-secondary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="text-secondary w-8 h-8" />
                </div>
                <h3 className="text-xl font-headline-md font-bold text-on-surface mb-3">الابتكار</h3>
                <p className="text-on-surface-variant font-body-md text-sm">نسعى دائماً لتطوير أدوات تفاعلية وأساليب شرح حديثة تواكب التطور التكنولوجي.</p>
              </div>
              
              {/* Value 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group border border-outline-variant/20">
                <div className="w-16 h-16 rounded-xl bg-tertiary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="text-tertiary w-8 h-8" />
                </div>
                <h3 className="text-xl font-headline-md font-bold text-on-surface mb-3">نجاح الطلاب</h3>
                <p className="text-on-surface-variant font-body-md text-sm">طالبنا هو محور اهتمامنا، ونجاحه هو المقياس الحقيقي لمدى فاعلية منصتنا.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="bg-surface-container-low border-t border-outline-variant/20 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-container-max mx-auto gap-8">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-headline-md font-bold text-primary">
              أكاديمية النجاح
            </div>
            <p className="font-body-md text-on-surface-variant">
              © {new Date().getFullYear()} أكاديمية النجاح. جميع الحقوق محفوظة. منصة تعليمية رائدة لطلاب الثانوية العامة.
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 font-body-md text-on-surface-variant">
            <button className="hover:text-secondary hover:underline decoration-secondary transition-colors">سياسة الخصوصية</button>
            <button className="hover:text-secondary hover:underline decoration-secondary transition-colors">شروط الاستخدام</button>
            <button className="hover:text-secondary hover:underline decoration-secondary transition-colors">مركز المساعدة</button>
            <button className="hover:text-secondary hover:underline decoration-secondary transition-colors">اتصل بنا</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
