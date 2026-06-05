import { useState } from 'react';
import { cn } from '../../lib/utils';

type SettingsTab = 'account' | 'security' | 'notifications' | 'privacy';

export function Settings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('account');

  return (
    <div className="flex-1 pt-24 px-4 sm:px-6 lg:px-8 pb-12 w-full max-w-container-max mx-auto">
      <div className="mb-10">
        <h1 className="font-headline-lg text-3xl font-bold text-on-surface mb-2">الإعدادات</h1>
        <p className="text-on-surface-variant font-body-md text-lg">إدارة حسابك وتفضيلات الإشعارات والأمان.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Settings Navigation */}
        <div className="lg:col-span-3">
          <div className="bg-surface-container-lowest rounded-2xl p-2 sticky top-24 shadow-sm border border-outline-variant/30">
            <ul className="flex flex-row lg:flex-col gap-1 overflow-x-auto hide-scrollbar pb-2 lg:pb-0">
              <li>
                <button 
                  onClick={() => setActiveTab('account')}
                  className={cn(
                    "block w-full text-right px-4 py-3 rounded-xl font-label-md transition-colors whitespace-nowrap",
                    activeTab === 'account' ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-surface-container-low"
                  )}
                >
                  إعدادات الحساب
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('security')}
                  className={cn(
                    "block w-full text-right px-4 py-3 rounded-xl font-label-md transition-colors whitespace-nowrap",
                    activeTab === 'security' ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-surface-container-low"
                  )}
                >
                  الأمان
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('notifications')}
                  className={cn(
                    "block w-full text-right px-4 py-3 rounded-xl font-label-md transition-colors whitespace-nowrap",
                    activeTab === 'notifications' ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-surface-container-low"
                  )}
                >
                  التنبيهات
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('privacy')}
                  className={cn(
                    "block w-full text-right px-4 py-3 rounded-xl font-label-md transition-colors whitespace-nowrap",
                    activeTab === 'privacy' ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-surface-container-low"
                  )}
                >
                  الخصوصية
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-9 flex flex-col gap-8">
          
          {/* Account Settings */}
          {activeTab === 'account' && (
            <section className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
              <h2 className="font-headline-md text-xl font-bold text-on-surface border-b border-outline-variant/30 pb-4 mb-6">إعدادات الحساب</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-label-md text-on-surface-variant mb-2">الاسم الكامل</label>
                  <input 
                    type="text" 
                    defaultValue="أحمد محمد" 
                    className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none font-body-md text-on-surface" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-label-md text-on-surface-variant mb-2">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    defaultValue="ahmed@example.com" 
                    dir="ltr" 
                    className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none font-body-md text-on-surface text-left" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-label-md text-on-surface-variant mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    defaultValue="01012345678" 
                    dir="ltr" 
                    className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none font-body-md text-on-surface text-left" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-label-md text-on-surface-variant mb-2">المرحلة الدراسية</label>
                  <select className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none font-body-md text-on-surface appearance-none pr-4 pl-10" defaultValue="3">
                    <option value="1">الصف الأول الثانوي</option>
                    <option value="2">الصف الثاني الثانوي</option>
                    <option value="3">الصف الثالث الثانوي</option>
                  </select>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button className="bg-primary text-white font-label-md px-6 py-3 rounded-xl shadow-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
                  حفظ التغييرات
                </button>
              </div>
            </section>
          )}

          {/* Security */}
          {activeTab === 'security' && (
            <section className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
              <h2 className="font-headline-md text-xl font-bold text-on-surface border-b border-outline-variant/30 pb-4 mb-6">الأمان</h2>
              
              <div className="mb-8">
                <h3 className="font-label-md text-base text-on-surface mb-4">تغيير كلمة المرور</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-label-md text-on-surface-variant mb-2">كلمة المرور الحالية</label>
                    <input 
                      type="password" 
                      className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none font-body-md text-on-surface text-left" 
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-label-md text-on-surface-variant mb-2">كلمة المرور الجديدة</label>
                    <input 
                      type="password" 
                      className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none font-body-md text-on-surface text-left" 
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-label-md text-on-surface-variant mb-2">تأكيد كلمة المرور</label>
                    <input 
                      type="password" 
                      className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none font-body-md text-on-surface text-left" 
                      dir="ltr"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-start">
                  <button className="bg-transparent border-2 border-primary text-primary font-label-md px-6 py-2.5 rounded-xl hover:bg-primary/5 transition-colors active:scale-[0.98]">
                    تحديث كلمة المرور
                  </button>
                </div>
              </div>

              <div className="border-t border-outline-variant/30 pt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-label-md text-base text-on-surface">المصادقة الثنائية (2FA)</h3>
                    <p className="text-sm text-on-surface-variant mt-1">أضف طبقة حماية إضافية لحسابك.</p>
                  </div>
                  <ToggleSwitch id="toggle2fa" />
                </div>
              </div>
            </section>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <section className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
              <h2 className="font-headline-md text-xl font-bold text-on-surface border-b border-outline-variant/30 pb-4 mb-6">التنبيهات</h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-label-md text-base text-on-surface">إشعارات الدروس الجديدة</h3>
                    <p className="text-sm text-on-surface-variant mt-1">تلقي تنبيهات عند إضافة دروس جديدة في المواد التي تتابعها.</p>
                  </div>
                  <ToggleSwitch id="toggleLessons" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-label-md text-base text-on-surface">إشعارات الامتحانات</h3>
                    <p className="text-sm text-on-surface-variant mt-1">تنبيهات بمواعيد الامتحانات ونتائجها.</p>
                  </div>
                  <ToggleSwitch id="toggleExams" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-label-md text-base text-on-surface">الإعلانات الهامة</h3>
                    <p className="text-sm text-on-surface-variant mt-1">أخبار المنصة والتحديثات الضرورية.</p>
                  </div>
                  <ToggleSwitch id="toggleAnnouncements" />
                </div>
              </div>
            </section>
          )}

          {/* Privacy */}
          {activeTab === 'privacy' && (
            <section className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
              <h2 className="font-headline-md text-xl font-bold text-on-surface border-b border-outline-variant/30 pb-4 mb-6">الخصوصية</h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-label-md text-base text-on-surface">إظهار مستوى التقدم</h3>
                    <p className="text-sm text-on-surface-variant mt-1">السماح لزملائك برؤية مستواك والمقعد الحالي الخاص بك.</p>
                  </div>
                  <ToggleSwitch id="toggleProgressPrivacy" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-label-md text-base text-on-surface">النشاط الأخير</h3>
                    <p className="text-sm text-on-surface-variant mt-1">عرض حالة تواجدك ونشاطك الأخير للآخرين.</p>
                  </div>
                  <ToggleSwitch id="toggleActivityPrivacy" defaultChecked />
                </div>
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}

function ToggleSwitch({ id, defaultChecked = false }: { id: string, defaultChecked?: boolean }) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
      className={cn(
        "relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isChecked ? "bg-primary" : "bg-outline-variant"
      )}
    >
      <span className="sr-only">Toggle</span>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
          isChecked ? "-translate-x-6" : "translate-x-0"
        )}
      />
    </button>
  );
}
