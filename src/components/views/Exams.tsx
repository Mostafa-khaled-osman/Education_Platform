import { 
  Calendar, 
  TrendingUp, 
  CheckCircle, 
  Calculator, 
  Globe, 
  ChevronLeft,
  CalendarCheck,
  Clock
} from 'lucide-react';
import { cn } from '../../lib/utils';

export function Exams() {
  return (
    <div className="flex-1 pt-24 px-4 sm:px-6 lg:px-8 pb-12 w-full max-w-container-max mx-auto">
      
      {/* Header Section */}
      <section className="mb-10">
        <h2 className="font-headline-xl text-4xl font-extrabold text-on-surface mb-2">الامتحانات</h2>
        <p className="font-body-lg text-on-surface-variant text-lg">استعد جيداً، قيم مستواك، وحقق التفوق.</p>
      </section>

      {/* Statistics Cards */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card rounded-2xl p-6 shadow-sm flex flex-col justify-between h-32 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
              <Calendar className="w-6 h-6" />
            </div>
            <span className="font-headline-md text-3xl text-on-surface font-bold">3</span>
          </div>
          <p className="font-label-md text-on-surface-variant mt-auto text-sm">الاختبارات القادمة</p>
        </div>

        <div className="glass-card rounded-2xl p-6 shadow-sm flex flex-col justify-between h-32 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="font-headline-md text-3xl text-on-surface font-bold">92%</span>
          </div>
          <p className="font-label-md text-on-surface-variant mt-auto text-sm">متوسط الدرجات</p>
        </div>

        <div className="glass-card rounded-2xl p-6 shadow-sm flex flex-col justify-between h-32 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
              <CheckCircle className="w-6 h-6" />
            </div>
            <span className="font-headline-md text-3xl text-on-surface font-bold">14</span>
          </div>
          <p className="font-label-md text-on-surface-variant mt-auto text-sm">الاختبارات المكتملة</p>
        </div>
      </section>

      {/* Upcoming Exams */}
      <section className="mb-12">
        <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-6">الاختبارات القادمة</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Exam Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
            <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
              <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                <Calculator className="w-7 h-7" />
              </div>
              <div>
                <div className="flex gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant rounded text-xs font-semibold">الفيزياء</span>
                  <span className="px-2.5 py-0.5 bg-error-container text-on-error-container rounded text-xs font-semibold">مهم جداً</span>
                </div>
                <h4 className="font-headline-md text-xl font-bold text-on-surface mb-2 leading-tight">اختبار الفصل الأول: الكهربية</h4>
                <div className="flex flex-wrap items-center gap-4 mt-1 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-1.5"><CalendarCheck className="w-4 h-4" /> غداً، 10:00 صباحاً</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 90 دقيقة</span>
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary rounded-xl font-label-md shadow-sm hover:opacity-90 active:scale-[0.98] transition-all whitespace-nowrap">
              ابدأ الآن
            </button>
          </div>

          {/* Exam Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
            <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
              <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <div className="flex gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant rounded text-xs font-semibold">اللغة العربية</span>
                </div>
                <h4 className="font-headline-md text-xl font-bold text-on-surface mb-2 leading-tight">النحو الشامل - الوحدة الثانية</h4>
                <div className="flex flex-wrap items-center gap-4 mt-1 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-1.5"><CalendarCheck className="w-4 h-4" /> 15 أكتوبر، 02:00 مساءً</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 60 دقيقة</span>
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto px-6 py-3 border-2 border-primary text-primary rounded-xl font-label-md hover:bg-primary-fixed/20 active:scale-[0.98] transition-all whitespace-nowrap">
              مراجعة التفاصيل
            </button>
          </div>
        </div>
      </section>

      {/* Previous Exam Results */}
      <section>
        <h3 className="font-headline-lg text-2xl font-bold text-on-surface mb-6">نتائج الاختبارات السابقة</h3>
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right min-w-[600px]">
              <thead className="bg-surface-container-low border-b border-outline-variant/30">
                <tr>
                  <th className="p-5 font-label-md text-sm text-on-surface-variant w-[40%]">المادة والاختبار</th>
                  <th className="p-5 font-label-md text-sm text-on-surface-variant w-[20%]">التاريخ</th>
                  <th className="p-5 font-label-md text-sm text-on-surface-variant w-[25%]">النتيجة</th>
                  <th className="p-5 font-label-md text-sm text-on-surface-variant w-[15%]">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                <tr className="hover:bg-surface-container-low/50 transition-colors group">
                  <td className="p-5">
                    <div className="font-headline-md text-lg text-on-surface font-bold">الكيمياء: العضوية 1</div>
                    <div className="font-body-md text-on-surface-variant text-sm mt-1">اختبار جزئي</div>
                  </td>
                  <td className="p-5 font-body-md text-on-surface-variant">10 أكتوبر 2023</td>
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden flex-shrink-0">
                        <div className="h-full bg-primary-container rounded-full" style={{ width: '96%' }}></div>
                      </div>
                      <span className="font-label-md text-primary-container font-bold">48/50</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <button className="text-secondary font-label-md text-sm flex items-center gap-1 hover:text-secondary-container transition-colors group-hover:underline">
                      عرض التفاصيل <ChevronLeft className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
                
                <tr className="hover:bg-surface-container-low/50 transition-colors group">
                  <td className="p-5">
                    <div className="font-headline-md text-lg text-on-surface font-bold">الرياضيات: التفاضل</div>
                    <div className="font-body-md text-on-surface-variant text-sm mt-1">اختبار شامل</div>
                  </td>
                  <td className="p-5 font-body-md text-on-surface-variant">5 أكتوبر 2023</td>
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden flex-shrink-0">
                        <div className="h-full bg-tertiary-container rounded-full" style={{ width: '84%' }}></div>
                      </div>
                      <span className="font-label-md text-tertiary-container font-bold">42/50</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <button className="text-secondary font-label-md text-sm flex items-center gap-1 hover:text-secondary-container transition-colors group-hover:underline">
                      عرض التفاصيل <ChevronLeft className="w-4 h-4" />
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/50 transition-colors group">
                  <td className="p-5">
                    <div className="font-headline-md text-lg text-on-surface font-bold">اللغة الإنجليزية: الوحدة 1-3</div>
                    <div className="font-body-md text-on-surface-variant text-sm mt-1">اختبار شهري</div>
                  </td>
                  <td className="p-5 font-body-md text-on-surface-variant">28 سبتمبر 2023</td>
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden flex-shrink-0">
                        <div className="h-full bg-primary-container rounded-full" style={{ width: '98%' }}></div>
                      </div>
                      <span className="font-label-md text-primary-container font-bold">49/50</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <button className="text-secondary font-label-md text-sm flex items-center gap-1 hover:text-secondary-container transition-colors group-hover:underline">
                      عرض التفاصيل <ChevronLeft className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
