import React, { useState } from 'react';
import { Menu, Search, Filter, Star, Award, Users } from 'lucide-react';

interface TeachersProps {
  onHomeClick: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onAboutClick: () => void;
  onPricingClick: () => void;
  onCoursesClick: () => void;
}

export function Teachers({ onHomeClick, onLoginClick, onRegisterClick, onAboutClick, onPricingClick, onCoursesClick }: TeachersProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <button disabled className="text-primary font-bold transition-colors font-label-md text-[15px]">المعلمون</button>
            <button onClick={onPricingClick} className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">الأسعار</button>
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
             <button disabled className="block w-full text-right text-primary font-bold font-label-md">المعلمون</button>
             <button onClick={onPricingClick} className="block w-full text-right text-on-surface-variant hover:text-primary font-label-md">الأسعار</button>
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

      <main className="flex-grow">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12">
          <header className="mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">تعرف على معلميك</h1>
            <p className="text-xl text-on-surface-variant font-body-md max-w-2xl leading-relaxed">
              اكتشف نخبة من أفضل المعلمين المتخصصين لمساعدتك في رحلتك نحو التفوق الأكاديمي. تصفح الملفات، اقرأ التقييمات، وابدأ التعلم.
            </p>
          </header>
          
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 mb-16 flex flex-col md:flex-row gap-4 items-center justify-between relative shadow-sm border border-outline-variant/30">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
              <input 
                className="w-full bg-surface-container-low border-none rounded-lg py-3 pr-12 pl-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all font-body-md" 
                placeholder="ابحث عن معلم أو مادة..." 
                type="text"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-48">
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                <select className="w-full bg-surface-container-low border-none rounded-lg py-3 pr-10 pl-4 text-on-surface focus:ring-2 focus:ring-primary appearance-none cursor-pointer font-body-md">
                  <option value="">جميع المواد</option>
                  <option value="physics">الفيزياء</option>
                  <option value="math">الرياضيات</option>
                  <option value="arabic">اللغة العربية</option>
                  <option value="chemistry">الكيمياء</option>
                </select>
              </div>
              <div className="relative w-full sm:w-48">
                <Star className="absolute right-3 top-1/2 -translate-y-1/2 text-tertiary-container fill-tertiary-container w-5 h-5" />
                <select className="w-full bg-surface-container-low border-none rounded-lg py-3 pr-10 pl-4 text-on-surface focus:ring-2 focus:ring-primary appearance-none cursor-pointer font-body-md">
                  <option value="">الأعلى تقييماً</option>
                  <option value="4">4 نجوم فأكثر</option>
                  <option value="new">الأحدث</option>
                </select>
              </div>
            </div>
          </div>
          
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-tertiary-container fill-tertiary-container w-8 h-8" />
              <h2 className="font-headline text-3xl font-bold text-on-surface">نخبة المعلمين المتميزين</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Teacher 1 */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden flex flex-col sm:flex-row group transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-outline-variant/30">
                <div className="sm:w-2/5 h-64 sm:h-auto relative">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Teacher" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3o-gCjoxIqJywcvLarLVlsqJXI1F185Usq7w5OHexOsIjs7dmrENpniqdLrYav8URqQwLYPIASElZ8G15kibhM184zb-CrVgu32D_qHZl3CkVThnpc5cGVkhdIMuk-z1TqAEwUKj_u98-sI3OSGRJulcAWkahsY1fZKwn1e4to6NLgx3kbWSH5cq-lsHre6hwVEBKbwabsTAYiNq5ytkO3iTb7xwRxsM0JcGLA_-QS09H_5gYdwsGLAXIecAQHlSVhqaSkQci8EfT"
                  />
                  <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur text-primary text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircleFilledIcon /> موثق
                  </div>
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-headline text-2xl font-bold text-on-surface">أ. د. محمود عبدلله</h3>
                      <p className="text-primary font-bold mt-1">الفيزياء المتقدمة</p>
                    </div>
                    <div className="bg-tertiary-container/10 text-tertiary-container px-2 py-1 rounded-lg flex items-center gap-1">
                      <Star className="fill-tertiary-container w-4 h-4" />
                      <span className="font-bold text-sm">4.9</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-sm mb-4 leading-relaxed line-clamp-3">
                    خبير مادة الفيزياء لأكثر من 15 عاماً. يتميز بشرح المفاهيم المعقدة بطرق عملية مبسطة تناسب جميع مستويات الطلاب مع تدريب مكثف على أسئلة النظام الحديث.
                  </p>
                  <div className="mt-auto pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                    <span className="text-sm text-on-surface-variant flex items-center gap-1 font-body-md">
                      <Users className="w-4 h-4" />
                      +5000 طالب
                    </span>
                    <button className="bg-primary hover:opacity-90 text-white rounded-full px-6 py-2 font-bold text-sm transition-opacity"> عرض الملف</button>
                  </div>
                </div>
              </div>

              {/* Top Teacher 2 */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden flex flex-col sm:flex-row group transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-outline-variant/30">
                <div className="sm:w-2/5 h-64 sm:h-auto relative">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Teacher" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNcmBgiGod91VYnYW5RMGSD_OkciaVtK6dHZeAzOoyeW_l269WZl5m-xSpwNxYH_3qI79tu3oplrCDgyTkowRBsFJ_wGpE4W4NzULu0oo3rC2XUHFVtaFJ7Ha1EqOnJguVtvfIN9NZnDhMExN5FatK9EgwYL57nBelDwlS7cUSiKUc0-x9ccelJNrZwe6_GhJlbRppNHjzp6hbmG9Xrzomij4n-vfXK48_VBv-j6V5HtngzDbg41d5fubrRzLM32MNNdB5B7_1kkOb"
                  />
                  <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur text-primary text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircleFilledIcon /> موثق
                  </div>
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-headline text-2xl font-bold text-on-surface">أ. فاطمة الزهراء</h3>
                      <p className="text-primary font-bold mt-1">اللغة العربية</p>
                    </div>
                    <div className="bg-tertiary-container/10 text-tertiary-container px-2 py-1 rounded-lg flex items-center gap-1">
                      <Star className="fill-tertiary-container w-4 h-4" />
                      <span className="font-bold text-sm">4.8</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-sm mb-4 leading-relaxed line-clamp-3">
                    متخصصة في فروع اللغة العربية وتأسيس النحو والبلاغة. تعتمد أسلوب التفاعل المستمر والمتابعة الدقيقة لضمان فهم واستيعاب الطلاب لكافة فروع المادة.
                  </p>
                  <div className="mt-auto pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                    <span className="text-sm text-on-surface-variant flex items-center gap-1 font-body-md">
                      <Users className="w-4 h-4" />
                      +3200 طالب
                    </span>
                    <button className="bg-primary hover:opacity-90 text-white rounded-full px-6 py-2 font-bold text-sm transition-opacity"> عرض الملف</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="font-headline text-3xl font-bold text-on-surface">جميع المعلمين</h2>
                <p className="text-on-surface-variant mt-2 font-body-md">تصفح القائمة الكاملة لمعلمينا المتميزين</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              
              {/* Teacher Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.04)] overflow-hidden group hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary-container">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Teacher" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIEv1eq6YimpMZSQLScEj1VA78UEiiOW0T3y1vlWPFaAsh3p57B-J8PWkMapRdGblT74ZSQuhm1_qw8z3GGANStB5Zc57JmeshMR35WlveQdaubBtTk9RA5hiMZobj1dlkOqQUyEyDM9yM-MNgPpYE4le1lEVMU4QOYKnI5aaODleQhTuEUPlb_sAk8VBHfB_K0MYlmDsTUp7kA_slvmgIhvlWyemIrXce_eUKFrOQKbpCCA-EAfynZY_dM_iBZZgh6gnB47IDWgCP"
                  />
                  <div className="absolute bottom-4 right-4 bg-surface-container-lowest text-primary text-xs font-bold px-3 py-1 rounded-lg shadow-sm">الرياضيات البحتة</div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-headline text-xl font-bold text-on-surface">م. طارق حسن</h3>
                    <div className="flex items-center gap-1 text-tertiary-container">
                      <Star className="fill-tertiary-container w-4 h-4" />
                      <span className="font-bold text-sm text-on-surface">4.7</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-sm mb-4 line-clamp-2">
                    مهندس متخصص في تدريس الرياضيات البحتة والتطبيقية، يركز على الفهم العميق للقوانين الرياضية.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-outline mb-5 font-body-md">
                    <span className="flex items-center gap-1">8 سنوات خبرة</span>
                    <span className="flex items-center gap-1">120 تقييم</span>
                  </div>
                  <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full py-2 font-bold transition-colors">عرض الملف الشخصي</button>
                </div>
              </div>
              
              {/* Teacher Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.04)] overflow-hidden group hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary-container">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Teacher" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRVGUNxBoLpXRu_zdnnU-27B-yYgYDNlRWbQp9a2BPVX7-d9UZSqnNYFxZ4y-RYDU7n0w6ErVpqKNXxDb6BCIYnzxYenvbe7zko1bRkuCYUdT61N9OkFCDvrz6Zp15pTvYi0XlEwm0FNT_Nu2Pq2gswdKBJRZh49TG14XPaVNJSLtg-sYw-ZRZDOfSsPe7XKpJXBJoWi_fFThv8G1QPxxiZnY4TDD9Kg5tSD3EqL4sOQhf6OyoAZJgLTjHWVjiVtdG4jQpUuRV7vDZ"
                  />
                  <div className="absolute bottom-4 right-4 bg-surface-container-lowest text-primary text-xs font-bold px-3 py-1 rounded-lg shadow-sm">الكيمياء</div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-headline text-xl font-bold text-on-surface">د. نورهان سعيد</h3>
                    <div className="flex items-center gap-1 text-tertiary-container">
                      <Star className="fill-tertiary-container w-4 h-4" />
                      <span className="font-bold text-sm text-on-surface">4.8</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-sm mb-4 line-clamp-2">
                    شرح تفصيلي لمنهج الكيمياء مع تجارب عملية مصورة لتسهيل استيعاب المعادلات والتفاعلات.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-outline mb-5 font-body-md">
                    <span className="flex items-center gap-1">10 سنوات خبرة</span>
                    <span className="flex items-center gap-1">240 تقييم</span>
                  </div>
                  <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full py-2 font-bold transition-colors">عرض الملف الشخصي</button>
                </div>
              </div>

              {/* Teacher Card 3 */}
              <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.04)] overflow-hidden group hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary-container">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Teacher" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRW2DPl3qj9jlAoYdFOW6ZhMnvic1FaXmIyR4IZ1lupiKVOWn5hhLTZMOzYozX21wrP12Kf5n6Rf-nubITT496OtRaXNVvWcsdaEmQ-AzW5aDNP33oZ2uBqXXjysveZuHKlXOgIdq-i2NgID1ENw5SvD-U6HING1V29m7R4EZ67tGlVmDoR9CQJCZRdX8w6Rq0aV7i2xTVDw2SL0WN9VVNgEuZ8A7MNpffZNOTJFFYB1X1tB7kdr32xFDK-f_lYriNVaK8BosiFDtO"
                  />
                  <div className="absolute bottom-4 right-4 bg-surface-container-lowest text-primary text-xs font-bold px-3 py-1 rounded-lg shadow-sm">التاريخ</div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-headline text-xl font-bold text-on-surface">أ. ياسر عبد الرحمن</h3>
                    <div className="flex items-center gap-1 text-tertiary-container">
                      <Star className="fill-tertiary-container w-4 h-4" />
                      <span className="font-bold text-sm text-on-surface">4.6</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-sm mb-4 line-clamp-2">
                    أسلوب قصصي ممتع في سرد الأحداث التاريخية، يربط الماضي بالحاضر لتسهيل الحفظ والفهم.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-outline mb-5 font-body-md">
                    <span className="flex items-center gap-1">12 سنة خبرة</span>
                    <span className="flex items-center gap-1">95 تقييم</span>
                  </div>
                  <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full py-2 font-bold transition-colors">عرض الملف الشخصي</button>
                </div>
              </div>

               {/* Teacher Card 4 */}
               <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.04)] overflow-hidden group hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary-container">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Teacher" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe1e1NPS9vftgjQZfFWagyR_A0Lb5KHwCZU4gHQhlj4SO1cuayCFEdiSNbhV4PzMyUwVXm2t9cIEyAPeYIQlAnwCHHfeQFEFp6DOABtSauETvDJnYwcFtxvfvtxufRB3YB4ZOEPM0dNIGnMTStrKho12c2Ptp4cvknZP2tgP5wD7zyFZU0NcByfcbhU3MUW6O1poeiWl3PQmfQqMFcUzTQ7epZZLQ_66P4Mx2NKxtZ6aK-VoBnNx4U_kscdF24mLK1ZNUy-Rbzy-Wn"
                  />
                  <div className="absolute bottom-4 right-4 bg-surface-container-lowest text-primary text-xs font-bold px-3 py-1 rounded-lg shadow-sm">اللغة الإنجليزية</div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-headline text-xl font-bold text-on-surface">أ. سارة كامل</h3>
                    <div className="flex items-center gap-1 text-tertiary-container">
                      <Star className="fill-tertiary-container w-4 h-4" />
                      <span className="font-bold text-sm text-on-surface">4.9</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-sm mb-4 line-clamp-2">
                    تأسيس شامل في القواعد والمفردات مع تدريب مكثف على مهارات الترجمة والقطعة باستخدام أحدث الطرق.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-outline mb-5 font-body-md">
                    <span className="flex items-center gap-1">7 سنوات خبرة</span>
                    <span className="flex items-center gap-1">310 تقييم</span>
                  </div>
                  <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full py-2 font-bold transition-colors">عرض الملف الشخصي</button>
                </div>
              </div>

            </div>
            
             <div className="mt-12 flex justify-center">
              <button className="bg-surface-container-high hover:bg-surface-dim text-on-surface-variant px-8 py-3 rounded-full font-bold transition-colors">تحميل المزيد من المعلمين</button>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest dark:bg-surface-container-low w-full py-section-padding border-t border-outline-variant/20 mt-20">
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

function CheckCircleFilledIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );
}
