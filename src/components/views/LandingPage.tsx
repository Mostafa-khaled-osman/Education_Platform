import { useState } from 'react';
import { 
  Tv, 
  PlaySquare, 
  FileText, 
  TrendingUp, 
  Award,
  Mail,
  Phone,
  Star,
  Menu
} from 'lucide-react';

interface LandingPageProps {
  onLogin?: () => void;
  onRegister?: () => void;
}

export function LandingPage({ onLogin, onRegister }: LandingPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md flex flex-col" dir="rtl">
      {/* TopNavBar */}
      <nav className="bg-surface/90 backdrop-blur-md sticky top-0 border-b border-outline-variant/20 shadow-sm z-50 transition-all">
        <div className="flex flex-row-reverse justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-4">
          
          {/* Logo on Left (RTL flex-row-reverse pushes it to visual left) */}
          <div className="text-headline-md font-extrabold text-primary shrink-0">
            أكاديمية النجاح
          </div>
          
          {/* Middle Links (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8 flex-row-reverse">
            <a href="#courses" className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">الدورات</a>
            <a href="#teachers" className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">المعلمون</a>
            <a href="#pricing" className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">الأسعار</a>
            <a href="#about" className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">من نحن</a>
          </div>

          {/* Right Side Buttons Action (RTL flex-row-reverse pushes it to visual right) */}
          <div className="flex gap-4 flex-row-reverse items-center shrink-0">
            <button 
              onClick={onRegister}
              className="bg-gradient-to-r from-primary-container to-secondary text-white px-6 py-2.5 rounded-lg font-label-md shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              ابدأ مجاناً
            </button>
            <button 
              onClick={onLogin} 
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
             <a href="#courses" className="block text-on-surface-variant hover:text-primary font-label-md">الدورات</a>
             <a href="#teachers" className="block text-on-surface-variant hover:text-primary font-label-md">المعلمون</a>
             <a href="#pricing" className="block text-on-surface-variant hover:text-primary font-label-md">الأسعار</a>
             <a href="#about" className="block text-on-surface-variant hover:text-primary font-label-md">من نحن</a>
             <div className="h-px bg-outline-variant/20 w-full my-2"></div>
             <button 
                onClick={onLogin}
                className="w-full text-center text-primary font-label-md py-2 hover:bg-primary/5 rounded-lg transition-colors"
             >
                تسجيل الدخول
             </button>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
          {/* Decorative Backdrops */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-primary-fixed-dim/20 to-transparent -z-10 rounded-l-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full md:w-1/3 h-1/2 bg-gradient-to-r from-secondary-fixed-dim/20 to-transparent -z-10 rounded-r-full blur-3xl opacity-60"></div>
          
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-stack-lg items-center">
            
            {/* Text Content */}
            <div className="text-right space-y-6 md:space-y-8 order-2 md:order-1">
              <h1 className="font-headline-xl-mobile md:font-[800] md:text-[56px] md:leading-[1.1] text-on-surface tracking-tight">
                تعلم بذكاء، <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-container to-secondary">
                  حقق أعلى الدرجات
                </span>
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-xl text-[18px] md:text-[20px] leading-relaxed">
                منصة تعليمية متكاملة توفر لك أفضل المعلمين، دروس مسجلة، بث مباشر، وبنوك أسئلة للتحضير للامتحانات النهائية.
              </p>
              <div className="flex flex-wrap gap-4 justify-start pt-2">
                <button className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3.5 rounded-xl font-label-md text-[15px] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
                  ابدأ التعلم الآن
                </button>
                <button className="border-2 border-primary text-primary px-8 py-3.5 rounded-xl font-label-md text-[15px] hover:bg-primary/5 hover:border-primary-container transition-colors">
                  تصفح الدورات
                </button>
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative w-full h-[400px] md:h-[500px] order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-secondary-container/20 rounded-[2rem] transform rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
                alt="طالب يدرس عبر الإنترنت باستخدام جهاز لوحي متطور" 
                className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-xl z-10"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-8 -left-4 md:-left-8 glass-card p-3 md:p-4 rounded-xl z-20 flex items-center gap-3 animate-pulse shadow-lg" style={{ animationDuration: '3s' }}>
                <div className="bg-[#F97316] text-white p-2 rounded-full flex items-center justify-center shadow-inner">
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                </div>
                <div>
                  <p className="font-label-md text-on-surface leading-tight text-sm md:text-base">تقييم عالي</p>
                  <p className="font-body-md text-[11px] md:text-[12px] text-on-surface-variant mt-0.5">من قبل 50k+ طالب</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-section-padding bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-lg text-on-surface mb-4">لماذا تختار منصتنا؟</h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
                نقدم لك كل ما تحتاجه للتفوق في الثانوية العامة بأحدث طرق التدريس والتكنولوجيا.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="glass-card p-8 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-primary-fixed text-primary-container rounded-xl flex items-center justify-center mb-6">
                  <Tv className="w-7 h-7" />
                </div>
                <h3 className="font-headline-md text-[20px] font-bold text-on-surface mb-3">دروس مباشرة</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">
                  تفاعل مع أفضل المعلمين في حصص تفاعلية حية، اطرح أسئلتك واحصل على إجابات فورية.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass-card p-8 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-secondary-fixed text-secondary-container rounded-xl flex items-center justify-center mb-6">
                  <PlaySquare className="w-7 h-7" />
                </div>
                <h3 className="font-headline-md text-[20px] font-bold text-on-surface mb-3">حصص مسجلة</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">
                  راجع الدروس في أي وقت ومن أي مكان. مكتبة ضخمة من الحصص المسجلة بجودة عالية.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass-card p-8 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-tertiary-fixed text-tertiary-container rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="font-headline-md text-[20px] font-bold text-on-surface mb-3">امتحانات تجريبية</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">
                  درب نفسك على نظام الامتحانات الحديث من خلال بنوك أسئلة وامتحانات إلكترونية متطورة.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="glass-card p-8 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-primary-fixed text-primary-container rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="font-headline-md text-[20px] font-bold text-on-surface mb-3">متابعة التقدم</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">
                  تقارير دورية مفصلة لمستوى الطالب وتحديد نقاط الضعف للعمل على تحسينها باستمرار.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="glass-card p-8 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-secondary-fixed text-secondary-container rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="font-headline-md text-[20px] font-bold text-on-surface mb-3">شهادات إتمام</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">
                  احصل على شهادات تقدير عند إتمام الدورات لتحفيزك على الاستمرار في التفوق والنجاح.
                </p>
              </div>

              {/* Promo Card CTA */}
              <div className="bg-gradient-to-br from-primary-container to-secondary-container p-8 rounded-2xl flex flex-col justify-center items-center text-center text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors"></div>
                <div className="relative z-10 w-full flex flex-col items-center">
                  <h3 className="font-headline-md text-[22px] font-bold mb-3 text-white">جاهز للبدء؟</h3>
                  <p className="font-body-md mb-8 text-white/90 text-[15px]">انضم لآلاف الطلاب المتفوقين في مصر الآن.</p>
                  <button 
                    onClick={onLogin}
                    className="w-full max-w-[200px] bg-white text-primary-container px-6 py-3.5 rounded-xl font-label-md hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
                  >
                    سجل حسابك مجاناً
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 md:py-20 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="bg-primary text-on-primary rounded-[2rem] p-8 md:p-14 shadow-lg shadow-primary-container/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center relative z-10">
                <div className="space-y-2">
                  <div className="font-headline-xl text-3xl md:text-5xl font-extrabold text-white">50,000+</div>
                  <div className="font-body-md opacity-90 text-white font-medium">طالب مسجل</div>
                </div>
                
                <div className="space-y-2 border-r border-white/20 md:border-r-0 md:border-l md:border-white/20">
                  <div className="font-headline-xl text-3xl md:text-5xl font-extrabold text-white">500+</div>
                  <div className="font-body-md opacity-90 text-white font-medium">دورة تدريبية</div>
                </div>
                
                <div className="space-y-2 border-t border-white/20 pt-8 md:border-t-0 md:pt-0 md:border-l md:border-white/20">
                  <div className="font-headline-xl text-3xl md:text-5xl font-extrabold text-white">100+</div>
                  <div className="font-body-md opacity-90 text-white font-medium">معلم متميز</div>
                </div>
                
                <div className="space-y-2 border-t border-white/20 pt-8 md:border-t-0 md:pt-0 border-r border-white/20 md:border-r-0">
                  <div className="font-headline-xl text-3xl md:text-5xl font-extrabold text-white">95%</div>
                  <div className="font-body-md opacity-90 text-white font-medium">نسبة النجاح</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t border-outline-variant/30 mt-auto">
        <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 w-full mb-12">
            
            {/* Brand Col */}
            <div className="flex flex-col gap-4 text-right">
              <div className="text-headline-md font-extrabold text-primary">
                أكاديمية النجاح
              </div>
              <p className="font-body-md text-on-surface-variant max-w-sm leading-relaxed">
                منصة تعليمية رائدة تهدف إلى تيسير التعليم، سد الفجوات التعليمية، وتحقيق أعلى مستويات التفوق الفكري والمعرفي لطلاب الثانوية العامة.
              </p>
            </div>

            {/* Links Col */}
            <div className="flex flex-col gap-4 text-right md:-ml-8 md:items-center">
              <div>
                <h4 className="font-headline-md text-lg font-bold mb-4 text-on-surface">روابط هامة</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="#about" className="text-on-surface-variant hover:text-primary transition-colors text-[15px]">عن المنصة</a></li>
                  <li><a href="#contact" className="text-on-surface-variant hover:text-primary transition-colors text-[15px]">تواصل معنا</a></li>
                  <li><a href="#terms" className="text-on-surface-variant hover:text-primary transition-colors text-[15px]">الشروط والأحكام</a></li>
                  <li><a href="#privacy" className="text-on-surface-variant hover:text-primary transition-colors text-[15px]">سياسة الخصوصية</a></li>
                  <li><a href="#help" className="text-on-surface-variant hover:text-primary transition-colors text-[15px]">مركز المساعدة</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Col */}
            <div className="flex flex-col gap-4 text-right">
              <h4 className="font-headline-md text-lg font-bold mb-4 text-on-surface">تواصل معنا</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:info@thanaweya-online.com" className="font-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-3">
                  <Mail className="w-5 h-5 opacity-70" />
                  <span>info@thanaweya-online.com</span>
                </a>
                <a href="tel:+201234567890" className="font-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-3 font-mono" dir="ltr">
                  <Phone className="w-5 h-5 opacity-70" />
                  <span>+20 123 456 7890</span>
                </a>
              </div>
            </div>

          </div>

          <div className="w-full text-center pt-8 border-t border-outline-variant/30 text-on-surface-variant font-body-md text-sm">
            &copy; {new Date().getFullYear()} أكاديمية النجاح. جميع الحقوق محفوظة لطلابنا المتفوقين.
          </div>
        </div>
      </footer>
    </div>
  );
}
