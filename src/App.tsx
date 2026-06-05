import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/views/Dashboard';
import { LandingPage } from './components/views/LandingPage';
import { Exams } from './components/views/Exams';
import { Lessons } from './components/views/Lessons';
import { Login } from './components/views/Login';
import { Profile } from './components/views/Profile';
import { Settings } from './components/views/Settings';
import { SignUp } from './components/views/SignUp';

export type ViewType = 'landing' | 'login' | 'signup' | 'dashboard' | 'exams' | 'lessons' | 'profile' | 'settings';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (currentView === 'landing') {
    return <LandingPage onLogin={() => setCurrentView('login')} onRegister={() => setCurrentView('signup')} />;
  }

  if (currentView === 'login') {
    return (
      <Login 
        onLogin={() => setCurrentView('dashboard')} 
        onSignUp={() => setCurrentView('signup')}
      />
    );
  }

  if (currentView === 'signup') {
    return (
      <SignUp 
        onLoginClick={() => setCurrentView('login')}
        onSignUp={() => setCurrentView('dashboard')}
      />
    );
  }

  return (
    <div className="flex w-full min-h-screen bg-background text-on-background font-body-md" dir="rtl">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-inverse-surface/40 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <Sidebar 
        className={isSidebarOpen ? "flex" : "hidden md:flex"} 
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          setIsSidebarOpen(false);
        }}
        onLogout={() => setCurrentView('landing')}
      />

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col min-h-screen w-full md:pr-64 relative transition-all duration-300">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'exams' && <Exams />}
        {currentView === 'lessons' && <Lessons />}
        {currentView === 'profile' && <Profile />}
        {currentView === 'settings' && <Settings />}
      </main>
    </div>
  );
}
