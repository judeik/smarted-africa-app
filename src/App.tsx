import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/navigation/Navbar';
import LandingPage from './pages/LandingPage';
import CoursesPage from './pages/CoursesPage';
import AIChat from './components/chat/AIChat';
import AuthModal from './components/auth/AuthModal';
import { translations as _translations } from './utils/translations';

// -------------------- Types --------------------
interface UserSubscription {
  plan: 'free' | 'premium' | 'pro';
  status: 'active' | 'expired' | 'none';
  courseId?: string;
  expiresAt?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  subscription: UserSubscription;
}

// -------------------- Main App --------------------
const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showAutoTranslatePopup, setShowAutoTranslatePopup] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState('en');
  const [showAutoDetect, setShowAutoDetect] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<'landing' | 'courses' | 'dashboard'>('landing');
  const [isLoading, setIsLoading] = useState(true);

  // -------------------- Auth Check --------------------
  const checkAuthStatus = useCallback(async () => {
    const token = localStorage.getItem('smarted_auth_token');
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      // Mock user data (replace with real API call)
      const mockUser: User = {
        id: 'user_123',
        email: 'student@example.com',
        name: 'Chiamaka Okonkwo',
        subscription: {
          plan: 'free',
          status: 'active',
          courseId: 'waec-maths',
          expiresAt: '2025-12-31',
        },
      };

      setUser(mockUser);
      setCurrentPage(mockUser.subscription.status === 'active' ? 'dashboard' : 'courses');
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('smarted_auth_token');
      setUser(null);
      setCurrentPage('landing');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  // -------------------- Mock Language Detection --------------------
  useEffect(() => {
    const detectLanguage = () => {
      const random = Math.random();
      let lang = 'en';

      if (random < 0.25) lang = 'ig';
      else if (random < 0.5) lang = 'yo';
      else if (random < 0.75) lang = 'ha';

      setDetectedLanguage(lang);
      setShowAutoDetect(lang !== 'en');
      setShowAutoTranslatePopup(lang !== 'en');
    };

    detectLanguage();
  }, []);

  // -------------------- Handlers --------------------
  const handleTranslateAccept = () => {
    setCurrentLanguage(detectedLanguage);
    setShowAutoTranslatePopup(false);
  };

  const handleTranslateDecline = () => setShowAutoTranslatePopup(false);

  const handleAuthClick = (type: 'login' | 'signup') => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (userData: User) => {
    localStorage.setItem('smarted_auth_token', 'mock_jwt_token');
    setUser(userData);
    setCurrentPage(userData.subscription.status === 'active' ? 'dashboard' : 'courses');
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('smarted_auth_token');
    setUser(null);
    setCurrentPage('landing');
  };

  const handleCourseSubscribe = (courseId: string, plan: 'premium' | 'pro') => {
    if (!user) return;

    const updatedUser: User = {
      ...user,
      subscription: {
        plan,
        status: 'active',
        courseId,
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      },
    };

    setUser(updatedUser);
    setCurrentPage('dashboard');
  };

  // -------------------- Loading State --------------------
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900">Loading SmartEd Africa...</h2>
          <p className="text-gray-600">Preparing your AI-powered learning experience</p>
        </div>
      </div>
    );
  }

  // -------------------- Dashboard --------------------
  const Dashboard: React.FC = () => {
    if (!user) return null;
    const isPremium = user.subscription.plan !== 'free';

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}!</h1>
            <p className="text-gray-600">
              {isPremium
                ? 'You have full access to all premium features.'
                : "You're on the free plan. Upgrade for full access."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Offline Lessons', free: 'Limited offline access (upgrade to unlock)', premium: 'Download and access all lessons offline' },
              { title: 'AI Tutor', free: 'Basic AI support only', premium: '24/7 AI-powered doubt solving' },
              { title: 'Exam Analytics', free: 'Basic analytics only', premium: 'Detailed performance insights' },
            ].map((feature) => (
              <div
                key={feature.title}
                className={`bg-white p-6 rounded-lg shadow transition ${
                  isPremium ? 'border-green-200' : 'border-gray-200 opacity-75'
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{isPremium ? feature.premium : feature.free}</p>
              </div>
            ))}
          </div>

          {!isPremium && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center mb-8">
              <h3 className="font-bold text-yellow-800 mb-2">Upgrade to Premium</h3>
              <p className="text-yellow-700 mb-4">
                Get full offline access, AI tutoring, and exam analytics for just ₦10,000/year!
              </p>
              <button
                onClick={() => setCurrentPage('courses')}
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:from-green-700 hover:to-teal-700"
              >
                Upgrade Now
              </button>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  };

  // -------------------- Main Render --------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100">
      <Navbar
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        showAutoDetect={showAutoDetect}
        onAuthClick={handleAuthClick}
        user={user}
        onLogout={handleLogout}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {/* Floating AI Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 z-40 bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-full shadow-lg hover:from-green-700 hover:to-teal-700 transition-all"
        aria-label="Open AI Chat"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      <AIChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        currentLanguage={currentLanguage}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        authType={authType}
        currentLanguage={currentLanguage}
        onSuccess={handleAuthSuccess}
      />

      {showAutoTranslatePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Language Detected</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We detected that you might prefer{' '}
              <strong>
                {detectedLanguage === 'ig'
                  ? '🇳🇬 Igbo'
                  : detectedLanguage === 'yo'
                  ? '🇳🇬 Yoruba'
                  : detectedLanguage === 'ha'
                  ? '🇳🇬 Hausa'
                  : 'English'}
              </strong>
              . Would you like to translate this page?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleTranslateAccept}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                Yes, Translate
              </button>
              <button
                onClick={handleTranslateDecline}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
              >
                No, Keep English
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'landing' && (
        <LandingPage
          currentLanguage={currentLanguage}
          onAuthClick={handleAuthClick}
          onNavigateToCourses={() => setCurrentPage('courses')}
        />
      )}

      {currentPage === 'courses' && (
        <CoursesPage
          currentLanguage={currentLanguage}
          onSubscribe={handleCourseSubscribe}
        />
      )}

      {currentPage === 'dashboard' && <Dashboard />}
    </div>
  );
};

export default App;
