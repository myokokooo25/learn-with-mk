import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import AuthScreen from './components/Login';
import Dashboard from './components/Dashboard';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[100dvh] min-h-screen mk-app-bg">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-[3px] border-slate-300/70" aria-hidden />
          <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-indigo-500 border-r-violet-400" />
          <span className="sr-only">Loading</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] min-h-screen">
      {user ? <Dashboard /> : <AuthScreen />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
