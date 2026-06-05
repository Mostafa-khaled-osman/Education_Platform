import { 
  CheckCircle2, 
  Award, 
  CalendarClock, 
  Clock, 
  PlayCircle, 
  User, 
  ArrowLeft,
  ChevronLeft
} from 'lucide-react';
import { cn } from '../../lib/utils';

export function Dashboard() {
  return (
    <div className="flex-1 pt-24 px-4 sm:px-6 lg:px-8 pb-12 w-full max-w-container-max mx-auto">
      
      {/* Welcome Banner */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-primary-container to-secondary rounded-2xl p-8 text-on-primary shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h2 className="font-headline-lg mb-2">أهلاً بك يا بطل! 👋</h2>
            <p className="font-body-lg opacity-90">استمر في التقدم نحو القمة، نحن فخورون بك.</p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard 
          title="الدروس المكتملة"
          value="24"
          trend="+3 هذا الأسبوع"
          trendColor="text-primary"
          icon={<CheckCircle2 className="text-primary-container w-6 h-6" />}
        />
        <StatCard 
          title="النقاط"
          value="1,250"
          trend="المرتبة 5 في الدفعة"
          trendColor="text-secondary"
          icon={<Award className="text-secondary w-6 h-6" />}
        />
        <StatCard 
          title="الاختبارات القادمة"
          value="3"
          trend="أقربهم غداً"
          trendColor="text-on-surface-variant"
          icon={<CalendarClock className="text-tertiary-container w-6 h-6" />}
        />
        <StatCard 
          title="ساعات المذاكرة"
          value="45"
          trend="+5 ساعات هذا الأسبوع"
          trendColor="text-primary"
          icon={<Clock className="text-primary-fixed-variant w-6 h-6" />}
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">استكمال التعلم</h3>
            
            <div className="glass-card rounded-2xl overflow-hidden group">
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-2/5 h-48 md:h-auto relative">
                  <img 
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop" 
                    alt="صورة غلاف درس الفيزياء" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-container flex items-center gap-1">
                    <PlayCircle className="w-4 h-4" />
                    فيديو
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-2 mb-2">
                      <span className="bg-primary/10 text-primary-container px-2 py-0.5 rounded text-xs font-semibold">فيزياء</span>
                      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-xs font-semibold">الوحدة الثانية</span>
                    </div>
                    <h4 className="font-headline-md text-2xl font-bold text-on-surface mb-2">الفيزياء الحديثة للثانوية العامة</h4>
                    <p className="text-sm text-on-surface-variant mb-6 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      أ. محمود أحمد
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-2 text-on-surface-variant">
                        <span className="font-semibold">مكتمل 65%</span>
                        <span>تبقي 15 دقيقة</span>
                      </div>
                      <div className="w-full bg-surface-variant rounded-full h-2">
                        <div className="bg-gradient-to-l from-primary-container to-secondary h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <button className="w-full sm:w-auto bg-primary-container text-on-primary px-6 py-3 rounded-xl font-label-md shadow-md hover:bg-primary-container/90 transition-colors flex items-center justify-center gap-2">
                      استكمال الدرس
                      <ArrowLeft className="w-5 h-5 mr-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Upcoming Schedule */}
          <section className="glass-card rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-md text-lg font-bold text-on-surface">جدول اليوم</h3>
              <button className="text-primary text-sm font-semibold hover:underline">عرض الكل</button>
            </div>
            <div className="space-y-4">
              <ScheduleItem 
                time="18:00" 
                title="مراجعة اللغة العربية" 
                desc="بث مباشر - أ. رضا الفني" 
                colorClass="text-error bg-error/10" 
              />
              <ScheduleItem 
                time="20:30" 
                title="حل تدريبات الكيمياء العضوية" 
                desc="واجب منزلي" 
                colorClass="text-primary-container bg-primary/10" 
              />
            </div>
          </section>

          {/* Recent Activity */}
          <section className="glass-card rounded-2xl p-6">
             <h3 className="font-headline-md text-lg font-bold text-on-surface mb-6">أحدث النشاطات</h3>
             <div className="space-y-6 relative before:absolute before:inset-y-2 before:right-[15px] before:w-[2px] before:bg-outline-variant/30">
                <ActivityItem 
                  title="حصلت على درجة كاملة!"
                  desc="اختبار التفاضل والتكامل القصير - 100%"
                  time="منذ ساعتين"
                  icon={<Award className="w-4 h-4" />}
                  colorClass="text-secondary bg-secondary/10"
                />
                <ActivityItem 
                  title="إكمال وحدة الجيولوجيا"
                  desc="تم الانتهاء من الوحدة الأولى بالكامل"
                  time="أمس"
                  icon={<CheckCircle2 className="w-4 h-4" />}
                  colorClass="text-primary-container bg-primary/10"
                />
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Sub-components

function StatCard({ title, value, trend, trendColor, icon }: any) {
  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3 text-on-surface-variant">
        <span className="font-label-md text-sm">{title}</span>
        {icon}
      </div>
      <div className="font-headline-md text-3xl mb-1 text-on-surface">{value}</div>
      <div className={cn("text-xs font-semibold", trendColor)}>{trend}</div>
    </div>
  );
}

function ScheduleItem({ time, title, desc, colorClass }: any) {
  return (
    <div className="flex items-start gap-4 p-3 rounded-xl bg-surface-container-low border border-transparent hover:border-outline-variant/50 transition-colors cursor-pointer">
      <div className={cn("p-2 rounded-lg flex flex-col items-center justify-center min-w-[55px]", colorClass)}>
        <span className="text-sm font-bold tracking-tighter" dir="ltr">{time}</span>
      </div>
      <div className="flex-1">
        <h4 className="font-label-md text-on-surface mb-1">{title}</h4>
        <p className="text-xs text-on-surface-variant">{desc}</p>
      </div>
    </div>
  );
}

function ActivityItem({ title, desc, time, icon, colorClass }: any) {
  return (
    <div className="relative pr-12">
      <div className={cn("absolute right-0 top-0.5 w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-surface-container-lowest z-10", colorClass)}>
        {icon}
      </div>
      <h4 className="font-label-md text-on-surface leading-snug mb-1">{title}</h4>
      <p className="text-xs text-on-surface-variant mb-1">{desc}</p>
      <span className="text-[11px] text-outline block">{time}</span>
    </div>
  );
}
