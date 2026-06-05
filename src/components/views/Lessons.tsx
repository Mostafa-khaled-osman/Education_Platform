import { 
  FlaskConical, 
  BookOpen, 
  Calculator, 
  Clock, 
  FileText,
  ArrowLeft,
  Play,
  Award,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../../lib/utils';

export function Lessons() {
  return (
    <div className="flex-1 pt-24 px-4 sm:px-6 lg:px-8 pb-12 w-full max-w-container-max mx-auto">
      
      {/* Page Header & Filters */}
      <div className="mb-10">
        <h1 className="font-headline-xl-mobile md:font-headline-lg text-4xl font-extrabold text-on-surface mb-6">مكتبة الدروس</h1>
        
        {/* Horizontal Filter Scroll */}
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-2">
          <button className="px-5 py-2.5 rounded-full font-label-md bg-primary-container text-on-primary shadow-sm shrink-0 transition-transform active:scale-95">الكل</button>
          <button className="px-5 py-2.5 rounded-full font-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/30 shrink-0 transition-colors">اللغة العربية</button>
          <button className="px-5 py-2.5 rounded-full font-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/30 shrink-0 transition-colors">الرياضيات</button>
          <button className="px-5 py-2.5 rounded-full font-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/30 shrink-0 transition-colors">الفيزياء</button>
          <button className="px-5 py-2.5 rounded-full font-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/30 shrink-0 transition-colors">الكيمياء</button>
          <button className="px-5 py-2.5 rounded-full font-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/30 shrink-0 transition-colors">اللغة الإنجليزية</button>
        </div>
      </div>

      {/* Grid of Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        
        {/* Course Card 1: Physics (In Progress) */}
        <div className="group bg-surface rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
          <div className="relative h-48 w-full overflow-hidden bg-surface-container">
             <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop" 
              alt="فيزياء" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm text-primary font-label-md text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4" />
              فيزياء
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3 leading-tight">الفيزياء الحديثة للثانوية العامة</h3>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="أ. محمود أحمد" className="w-8 h-8 rounded-full object-cover border border-outline-variant/30" />
              <span className="font-body-md text-sm text-on-surface-variant">أ. محمود أحمد</span>
            </div>
            <div className="flex items-center gap-4 mb-5 text-on-surface-variant font-body-md text-sm">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>12 ساعة</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>24 درس</span>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="mt-auto pt-4 border-t border-outline-variant/20">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-md text-sm text-primary font-bold">مكتمل 65%</span>
                <span className="font-label-md text-sm text-on-surface-variant">15/24</span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden mb-4">
                <div className="h-full bg-gradient-to-l from-primary-container to-secondary rounded-full" style={{ width: '65%' }}></div>
              </div>
              <button className="w-full bg-gradient-to-r from-primary-container to-secondary text-on-primary py-2.5 rounded-xl font-label-md shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                استكمال الدرس
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Course Card 2: Arabic (New/Not Started) */}
        <div className="group bg-surface rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
          <div className="relative h-48 w-full overflow-hidden bg-surface-container">
             <img 
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop" 
              alt="لغة عربية" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm text-secondary font-label-md text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              لغة عربية
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3 leading-tight">النحو الشامل وتطبيقاته</h3>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" alt="أ. سارة حسن" className="w-8 h-8 rounded-full object-cover border border-outline-variant/30" />
              <span className="font-body-md text-sm text-on-surface-variant">أ. سارة حسن</span>
            </div>
            <div className="flex items-center gap-4 mb-5 text-on-surface-variant font-body-md text-sm">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>8 ساعات</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>16 درس</span>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="mt-auto pt-4 border-t border-outline-variant/20">
              <div className="flex justify-between items-center mb-2 opacity-60">
                <span className="font-label-md text-sm text-on-surface font-semibold">لم يبدأ بعد</span>
                <span className="font-label-md text-sm text-on-surface-variant">0/16</span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden mb-4">
                <div className="h-full bg-surface-variant rounded-full" style={{ width: '0%' }}></div>
              </div>
              <button className="w-full bg-surface-container hover:bg-surface-container-high text-primary border border-primary/20 py-2.5 rounded-xl font-label-md transition-colors flex items-center justify-center gap-2 active:scale-[0.98]">
                ابدأ التعلم
                <Play className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>
        </div>

        {/* Course Card 3: Math (Completed) */}
        <div className="group bg-surface rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
          <div className="relative h-48 w-full overflow-hidden bg-surface-container">
             <img 
              src="https://images.unsplash.com/photo-1635398284617-10cbbbf7121b?q=80&w=600&auto=format&fit=crop" 
              alt="رياضيات" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm text-tertiary-container font-label-md text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <Calculator className="w-4 h-4" />
              رياضيات
            </div>
            {/* Completed Overlay Badge */}
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-surface text-primary px-4 py-2 rounded-full font-label-md shadow-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                مراجعة الدورة
              </div>
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3 leading-tight">التفاضل والتكامل المتقدم</h3>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="د. طارق كامل" className="w-8 h-8 rounded-full object-cover border border-outline-variant/30" />
              <span className="font-body-md text-sm text-on-surface-variant">د. طارق كامل</span>
            </div>
            <div className="flex items-center gap-4 mb-5 text-on-surface-variant font-body-md text-sm">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>20 ساعة</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>40 درس</span>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="mt-auto pt-4 border-t border-outline-variant/20">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-md text-sm text-[#059669] flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  مكتمل 100%
                </span>
                <span className="font-label-md text-sm text-on-surface-variant">40/40</span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden mb-4">
                <div className="h-full bg-[#059669] rounded-full" style={{ width: '100%' }}></div>
              </div>
              <button className="w-full bg-transparent border-2 border-outline-variant/50 text-on-surface-variant py-2.5 rounded-xl font-label-md hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2 active:scale-[0.98]">
                عرض الشهادة
                <Award className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Load More Button */}
      <div className="mt-12 flex justify-center">
        <button className="px-8 py-3 rounded-full border-2 border-primary/20 text-primary font-label-md hover:bg-primary/5 hover:border-primary/50 transition-colors active:scale-95">
          عرض المزيد من الدروس
        </button>
      </div>

    </div>
  );
}
