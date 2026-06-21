import React, { useState } from 'react';
import { Menu, Search, Star, ChevronDown } from 'lucide-react';

interface CoursesProps {
  onHomeClick: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onAboutClick: () => void;
  onPricingClick: () => void;
  onTeachersClick: () => void;
}

export function Courses({ onHomeClick, onLoginClick, onRegisterClick, onAboutClick, onPricingClick, onTeachersClick }: CoursesProps) {
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
            <button disabled className="text-primary font-bold transition-colors font-label-md text-[15px]">الدورات</button>
            <button onClick={onTeachersClick} className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-[15px]">المعلمون</button>
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
             <button disabled className="block w-full text-right text-primary font-bold font-label-md">الدورات</button>
             <button onClick={onTeachersClick} className="block w-full text-right text-on-surface-variant hover:text-primary font-label-md">المعلمون</button>
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

      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-20 flex flex-col gap-12">
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface">
            اكتشف <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">الدورات التعليمية</span>
          </h1>
          <p className="font-body-md text-on-surface-variant text-lg md:text-xl">
            نخبة من أفضل المعلمين ومحتوى تعليمي مصمم خصيصاً لضمان تفوقك. ابحث عن المادة التي تحتاجها وابدأ رحلة النجاح.
          </p>
          <div className="relative w-full max-w-xl mx-auto mt-8">
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-outline" />
            </div>
            <input 
              className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl py-4 pr-12 pl-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent font-body-md shadow-sm transition-shadow outline-none" 
              placeholder="ابحث عن مادة، معلم، أو درس..." 
              type="text"
            />
          </div>
        </section>

        <section className="flex flex-wrap justify-center gap-3 mt-4">
          <button className="bg-primary/10 text-primary font-body-md px-5 py-2 rounded-lg font-semibold transition-colors hover:bg-primary/20">الكل</button>
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant font-body-md px-5 py-2 rounded-lg hover:bg-surface-container-low transition-colors">الفيزياء</button>
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant font-body-md px-5 py-2 rounded-lg hover:bg-surface-container-low transition-colors">الكيمياء</button>
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant font-body-md px-5 py-2 rounded-lg hover:bg-surface-container-low transition-colors">الرياضيات</button>
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant font-body-md px-5 py-2 rounded-lg hover:bg-surface-container-low transition-colors">اللغة العربية</button>
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant font-body-md px-5 py-2 rounded-lg hover:bg-surface-container-low transition-colors">اللغة الإنجليزية</button>
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant font-body-md px-5 py-2 rounded-lg hover:bg-surface-container-low transition-colors">الأحياء</button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Course Card 1 (Featured) */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col md:col-span-2 lg:col-span-2 group relative border border-outline-variant/30 shadow-[0_4px_20px_rgba(37,99,235,0.04)]">
            <div className="absolute top-4 right-4 bg-tertiary text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-sm font-body-md">
              الأكثر طلباً
            </div>
            <div className="h-64 relative overflow-hidden bg-surface-container-high">
              <div className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6a87AEj-SXGI4HyNRiDb8fLoFUrL-6WkrRGg_YemMt0M70nVVfbnerWW6yA0qOrZxH8clFz73mGGPJV1Wd7JT7J4r-6zZCml30bWhmkXYMJ5M2HfnOTlylFnulN8o0RkFM9OYxc5WcN4C6zJTYDmODseKIowPltyE1TBaCC0rXIzYSn1k8ych8CMMcyMeBfm2lrm7u8iQeNDnhW8l__oFS-O-9HK6NZ1Hxmq3hCDY2VQIgNDMO7TW5iwZRMdAHdidvpizeWe_GfvJ')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 right-6 flex items-center gap-2">
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-body border border-white/20">الفيزياء الحديثة</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline font-bold text-2xl text-on-surface">المراجعة النهائية - فيزياء 3 ثانوي</h3>
                <div className="flex items-center gap-1 text-tertiary-container">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">4.9</span>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
                كورس شامل يغطي جميع فصول الفيزياء الحديثة مع تدريبات مكثفة على نظام الامتحانات الجديد وأسئلة بنك المعرفة.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-primary/20">
                  <img className="w-full h-full object-cover" alt="أستاذ" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Gx4tpEpBUbqDJAoS0z39AjyiJlq5T3CBw5pgWUFRC8kYeYcmALLfQ8Iva-mUYNRbzTt1FfEcEjGMcLpxqf9eNRUapEW8VNqBMqJWDg-mtK3xzTGUuY7HneqBHcfX2YnhtIztvit4WbRxpqMRBiwb5iFDMHA7XgMUQp947H7u8Eanm1JmovwMUHifpKkVb6plBOZMkJUY1MMUdTsVv1OGg7PLOaZjYJYJmGLdP6lPqwS6B1VEe5_tOLeGo2EUHp2ex8zFQ5kreNtR" />
                </div>
                <div>
                  <p className="font-body-md font-bold text-sm text-on-surface">أ. محمود السعيد</p>
                  <p className="font-body-md text-xs text-on-surface-variant">خبير المادة</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
                <div className="text-lg font-bold text-primary">350 ج.م</div>
                <button className="bg-gradient-to-r from-primary-container to-secondary text-white px-6 py-2 rounded-full font-body-md font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5">اشترك الآن</button>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col group border border-outline-variant/30 shadow-[0_4px_20px_rgba(37,99,235,0.04)]">
            <div className="h-48 relative overflow-hidden bg-surface-container-high">
              <div className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASSadpBJ6El9ejtvz8K15d4ePJ3iZRtI5aCtZ29BOb2UekZsmjJrvfW0mXsRrNIC149oYlcqU1pQVMT3NYTYnneM-jhHkxi8CdW8Db3CmBrKRJ4p-P2rSijXBc82Dfaw0NnT1CDrzWYW83Vkt4XyACRaY265DuT2rTSOh6kUJk6A9IUb-QtSJ_3r1FrcGepcFS08sWd27BeLPb673gdKutfTEI3pZ5As_KtXDOe6lvVd21RexA79B8H3T5wJ6Rfecaj6TDx9LkJ6Gn')"}}></div>
              <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                <span className="bg-surface-container-lowest/90 backdrop-blur-md text-on-surface px-3 py-1 rounded-full text-xs font-body font-bold shadow-sm">الكيمياء</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-headline font-bold text-xl text-on-surface mb-2">الكيمياء العضوية من الصفر</h3>
              <div className="flex items-center gap-1 text-tertiary-container mb-4 text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold">4.8</span>
                <span className="text-on-surface-variant font-normal">(120 طالب)</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" alt="أستاذة" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwcbNA0CahpWwD9lI0iUQ-LIA8dhZnPwiNuNYBRa20oQ9IVYV7Lx1_0eZV_4q2xJIdmNnBn82ECOTX8mZGTQMUGl6bAQajrUyQvp7ePwESvG9I1yXrHzqWljB8qK4Q4a0HxRT5uh9S_RUCEs8PibVnlCIgNEUXB6gZ3CRl8qo2ZNkMkk0SoC0mk1IL8SNIdxANSEDEZBArvR0wP8ljtC_pn34kSBeqeo60ozmPGJ-nfs1oomU2vDfrQ-gitTil4-2MtOeEVUMOGW-R" />
                </div>
                <p className="font-body-md font-semibold text-sm text-on-surface">أ. نورهان حسن</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
                <div className="text-lg font-bold text-primary">250 ج.م</div>
                <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary/5 px-4 py-2 rounded-full font-body-md font-semibold text-sm transition-colors">التفاصيل</button>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col group border border-outline-variant/30 shadow-[0_4px_20px_rgba(37,99,235,0.04)]">
            <div className="h-48 relative overflow-hidden bg-surface-container-high">
              <div className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1puXhEYEzAcLyXehY077iPnMssd-wQYzg8ZDrk4sipMpRhmT20WgfzBo3ktrV1XaaF9OF5gYj0q1Qzbs0o6N8VM2gW2c4qqWBcx-pOKxOL51sksLmW99QQk8okiLPhSK6KJgXpAr-wg3ZPUtDoNQ5CnZxljdPSOBLML8rmPMkwt41jZUMN_BO3gnHB21h7VP0YFkVGuIjwv6_l1jwAb8Hi4LbFLGADqAQKRF-Bo60HuSY6oMXJ_COokosWF55IFS4X87zM6S4HGHv')"}}></div>
              <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                <span className="bg-surface-container-lowest/90 backdrop-blur-md text-on-surface px-3 py-1 rounded-full text-xs font-body font-bold shadow-sm">الرياضيات</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-headline font-bold text-xl text-on-surface mb-2">التفاضل والتكامل - الباب الأول</h3>
              <div className="flex items-center gap-1 text-tertiary-container mb-4 text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold">4.7</span>
                <span className="text-on-surface-variant font-normal">(85 طالب)</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" alt="أستاذ" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_ND7i0oCg1-4yLdbIOd1W10H-atfRuSDEZbhTi1fnuvHKbOLKJ72RrlP5yeCf3A-vXfzMRKJufR8zGqglepnJ0vi0S3Iu32Bq3GQaOj7fwm9UFLFCoaVBTpoDrbPHby11PlscwqVuSgWc1EuOO5ZOWpuvkrZx5mAyT2oEg3i0bvkU8QCAXON3htC9-DGKCd5xYDinKOiiDQrVOk3heJwR9MabhlTw4cCs3oiRbg6p6EnycGthbMajRQ3hN-bQ2Rwfa-Vg-so_fqqs" />
                </div>
                <p className="font-body-md font-semibold text-sm text-on-surface">م. أحمد كمال</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
                <div className="text-lg font-bold text-primary">200 ج.م</div>
                <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary/5 px-4 py-2 rounded-full font-body-md font-semibold text-sm transition-colors">التفاصيل</button>
              </div>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col group border border-outline-variant/30 shadow-[0_4px_20px_rgba(37,99,235,0.04)]">
            <div className="h-48 relative overflow-hidden bg-surface-container-high">
              <div className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCtlJk1zrC97xrnAGsZwmIDlojnJOKBfgEWOrf0G7J6_9XCYRrEQjfn1Lygi1ZsOhLWjIXayEv5n6HxgeuzYshJY8LN5O8OjVG_oQTBi6RXGlv9eFfRDuP8K6UiKMVITsjV8SpqvtYSuzA2-FzDBlZvXQhpC22jputn4HNZcLdOZaxQMa1KqEQKuAuiXbDdpXnXuGbWAPQy5_FgpW_WCg0gobpwCbQ8sKk8CrYI_DJNfzefMQzPeddqvQq8gAxC8nsUSUbkPXXYM2u')"}}></div>
              <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                <span className="bg-surface-container-lowest/90 backdrop-blur-md text-on-surface px-3 py-1 rounded-full text-xs font-body font-bold shadow-sm">اللغة العربية</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-headline font-bold text-xl text-on-surface mb-2">النحو والبلاغة التطبيقية</h3>
              <div className="flex items-center gap-1 text-tertiary-container mb-4 text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold">4.9</span>
                <span className="text-on-surface-variant font-normal">(210 طالب)</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" alt="أستاذ" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwtfjP0ux-7I5Lgu1lL-WZ-lE5uuvFVEiiaKyOG3o5i1AoMJVK-nDC7lJdgGOwz4eROnip6sECZ3IrYzUQq9wTNjIHqImA4Gi5N8H2py1KXCBccYAqzgNkW9Zn1J9yv-6S4FGuBJfiXZxic17XNcBa3sn-fhODXjNcp9qzqzIfM0VnwD8j7d8gcN8FqMHtV3xIO8k6hVvVDlh3ggaYCi9G_sr6TMMhmt2a1wCvE56tvOWiyE3et0MSnKDdfVvSyDzfGnSBrYF154cJ" />
                </div>
                <p className="font-body-md font-semibold text-sm text-on-surface">أ. د. سيد عبد الرحمن</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
                <div className="text-lg font-bold text-primary">300 ج.م</div>
                <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary/5 px-4 py-2 rounded-full font-body-md font-semibold text-sm transition-colors">التفاصيل</button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-8">
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-primary font-body-md font-semibold px-8 py-3 rounded-full hover:bg-surface-container-low transition-colors shadow-sm flex items-center gap-2">
            <span>عرض المزيد من الدورات</span>
            <ChevronDown className="w-5 h-5" />
          </button>
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
            <button className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-[-4px] text-right">
              تواصل معنا
            </button>
            <button className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-[-4px] text-right">
              الشروط والأحكام
            </button>
            <button className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-[-4px] text-right">
              سياسة الخصوصية
            </button>
            <button className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-[-4px] text-right">
              مركز المساعدة
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
