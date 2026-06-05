import { 
  Edit2, 
  TrendingUp, 
  Medal, 
  ListOrdered, 
  Mail, 
  Smartphone, 
  GraduationCap, 
  MapPin, 
  Award, 
  Trophy, 
  Download 
} from 'lucide-react';
import { cn } from '../../lib/utils';

export function Profile() {
  return (
    <div className="flex-1 pt-24 px-4 sm:px-6 lg:px-8 pb-12 w-full max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Right Column (in RTL) - Profile Info & Progress */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Profile Header Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden border border-outline-variant/30">
            <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-br from-primary-fixed to-secondary-fixed opacity-60"></div>
            <div className="relative z-10 w-28 h-28 rounded-full border-4 border-white shadow-md mb-4 overflow-hidden bg-surface">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=200&auto=format&fit=crop" 
                alt="أحمد محمود" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-headline-md text-2xl font-bold text-on-surface mb-1 shadow-sm">أحمد محمود</h1>
            <p className="font-body-md text-sm text-primary font-semibold mb-5 bg-primary-fixed/40 px-4 py-1.5 rounded-full inline-block">
              الصف الثالث الثانوي - علمي علوم
            </p>
            <button className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border-2 border-primary/20 text-primary rounded-xl font-label-md hover:bg-primary/5 hover:border-primary/50 transition-colors group">
              <Edit2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              تعديل الملف
            </button>
          </div>

          {/* Academic Progress Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30">
            <h2 className="font-headline-md text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              التقدم الأكاديمي
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container-low p-4 rounded-xl text-center">
                <Medal className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="font-headline-lg text-3xl font-bold text-secondary mb-1">2,450</div>
                <div className="font-label-md text-xs text-on-surface-variant">إجمالي النقاط</div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl text-center">
                <ListOrdered className="w-8 h-8 text-tertiary-container mx-auto mb-2" />
                <div className="font-headline-lg text-3xl font-bold text-tertiary-container mb-1">142</div>
                <div className="font-label-md text-xs text-on-surface-variant">الترتيب العام</div>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-label-md text-sm text-on-surface">متوسط الدرجات</span>
                  <span className="font-label-md text-sm text-primary font-bold">88%</span>
                </div>
                <div className="w-full bg-surface-variant rounded-full h-2">
                  <div className="bg-gradient-to-l from-primary to-secondary h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-label-md text-sm text-on-surface">نسبة إنجاز المنهج</span>
                  <span className="font-label-md text-sm text-secondary font-bold">65%</span>
                </div>
                <div className="w-full bg-surface-variant rounded-full h-2">
                  <div className="bg-gradient-to-l from-secondary to-secondary-container h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Left Column (in RTL) - Details & Content */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Personal Information */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
            <h2 className="font-headline-md text-xl font-bold text-on-surface mb-6 border-b border-outline-variant/30 pb-4">
              المعلومات الشخصية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-md text-sm text-on-surface-variant mb-2">البريد الإلكتروني</label>
                <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl border border-transparent focus-within:border-primary focus-within:ring-1 transition-all">
                  <Mail className="w-5 h-5 text-outline shrink-0" />
                  <input type="email" value="ahmed.mahmoud@student.edu" readOnly className="bg-transparent border-none outline-none w-full font-body-md text-on-surface focus:ring-0 text-left" dir="ltr" />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-sm text-on-surface-variant mb-2">رقم الهاتف</label>
                <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl border border-transparent focus-within:border-primary focus-within:ring-1 transition-all">
                  <Smartphone className="w-5 h-5 text-outline shrink-0" />
                  <input type="tel" value="01012345678" readOnly className="bg-transparent border-none outline-none w-full font-body-md text-on-surface focus:ring-0 text-left" dir="ltr" />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-sm text-on-surface-variant mb-2">المدرسة</label>
                <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl border border-transparent focus-within:border-primary focus-within:ring-1 transition-all">
                  <GraduationCap className="w-5 h-5 text-outline shrink-0" />
                  <input type="text" value="مدرسة التوفيقية الثانوية بنين" readOnly className="bg-transparent border-none outline-none w-full font-body-md text-on-surface focus:ring-0" />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-sm text-on-surface-variant mb-2">المحافظة</label>
                <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl border border-transparent focus-within:border-primary focus-within:ring-1 transition-all">
                  <MapPin className="w-5 h-5 text-outline shrink-0" />
                  <input type="text" value="القاهرة" readOnly className="bg-transparent border-none outline-none w-full font-body-md text-on-surface focus:ring-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Bento Grid */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
            <div className="flex justify-between items-center mb-6 border-b border-outline-variant/30 pb-4">
              <h2 className="font-headline-md text-xl font-bold text-on-surface">الشهادات والإنجازات</h2>
              <a href="#" className="font-label-md text-sm text-primary hover:underline hover:text-primary-container transition-colors">عرض الكل</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Certificate Card 1 */}
              <div className="group relative overflow-hidden rounded-xl border border-outline-variant/40 p-5 hover:border-primary/50 transition-colors bg-surface-container-low/50">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary-fixed rounded-full opacity-50 group-hover:scale-[2] transition-transform duration-500 ease-out"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="bg-surface-container p-3 rounded-xl text-primary shadow-sm">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-label-md text-base text-on-surface mb-1 font-bold">إتمام كورس الفيزياء الحديثة</h3>
                    <p className="font-body-md text-sm text-on-surface-variant mb-3">أكتوبر 2023</p>
                    <button className="flex items-center gap-1.5 text-sm font-label-md text-secondary hover:text-primary transition-colors">
                      <Download className="w-4 h-4" />
                      تحميل الشهادة
                    </button>
                  </div>
                </div>
              </div>

              {/* Certificate Card 2 */}
              <div className="group relative overflow-hidden rounded-xl border border-outline-variant/40 p-5 hover:border-primary/50 transition-colors bg-surface-container-low/50">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-secondary-fixed rounded-full opacity-50 group-hover:scale-[2] transition-transform duration-500 ease-out"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="bg-surface-container p-3 rounded-xl text-secondary shadow-sm">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-label-md text-base text-on-surface mb-1 font-bold">الأول على المنصة - لغة عربية</h3>
                    <p className="font-body-md text-sm text-on-surface-variant mb-3">سبتمبر 2023</p>
                    <button className="flex items-center gap-1.5 text-sm font-label-md text-secondary hover:text-primary transition-colors">
                      <Download className="w-4 h-4" />
                      تحميل الشهادة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Security Settings */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
            <h2 className="font-headline-md text-xl font-bold text-on-surface mb-6 border-b border-outline-variant/30 pb-4">
              أمان الحساب
            </h2>
            <div className="max-w-md">
              <p className="font-body-md text-sm text-on-surface-variant mb-6">قم بتحديث كلمة المرور الخاصة بك بانتظام للحفاظ على أمان حسابك.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block font-label-md text-sm text-on-surface mb-2">كلمة المرور الحالية</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 font-body-md text-on-surface transition-all outline-none" />
                </div>
                <div>
                  <label className="block font-label-md text-sm text-on-surface mb-2">كلمة المرور الجديدة</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 font-body-md text-on-surface transition-all outline-none" />
                </div>
                <div>
                  <label className="block font-label-md text-sm text-on-surface mb-2">تأكيد كلمة المرور الجديدة</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 font-body-md text-on-surface transition-all outline-none" />
                </div>
                
                <div className="pt-2">
                  <button type="button" className="bg-gradient-to-r from-primary-container to-secondary text-primary-fixed rounded-xl font-label-md text-sm py-3 px-6 shadow-sm hover:opacity-90 active:scale-[0.98] transition-all">
                    تحديث كلمة المرور
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
