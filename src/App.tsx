import React, { useState, useEffect } from 'react';
import Navbar from './components/navigation/Navbar';
import LandingPage from './pages/LandingPage';
import AIChat from './components/chat/AIChat';
import AuthModal from './components/auth/AuthModal';
import { translations } from './utils/translations';

// Auth Modal Component (simplified for this example)
const inlineAuthModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  authType: 'login' | 'signup';
  currentLanguage: string;
}> = ({ isOpen, onClose, authType, currentLanguage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {authType === 'login' 
              ? (translations[currentLanguage as keyof typeof translations]?.login || 'Login') 
              : (translations[currentLanguage as keyof typeof translations]?.signup || 'Sign Up')}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="text-center py-8">
          <div className="text-green-600 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-6">
            {authType === 'login' 
              ? 'Login functionality would be implemented here' 
              : 'Signup functionality would be implemented here'}
          </p>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-md font-medium hover:from-green-700 hover:to-teal-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showAutoTranslatePopup, setShowAutoTranslatePopup] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState('en');
  const [showAutoDetect, setShowAutoDetect] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');

  // Simulate IP-based language detection
  useEffect(() => {
    const mockIPDetection = () => {
      const userLocation = Math.random();
      
      if (userLocation < 0.25) {
        setDetectedLanguage('ig'); // Igbo for SE Nigeria
        setShowAutoDetect(true);
      } else if (userLocation < 0.5) {
        setDetectedLanguage('yo'); // Yoruba for SW Nigeria
        setShowAutoDetect(true);
      } else if (userLocation < 0.75) {
        setDetectedLanguage('ha'); // Hausa for Northern Nigeria
        setShowAutoDetect(true);
      } else {
        setDetectedLanguage('en'); // Default to English
        setShowAutoDetect(false);
      }
      
      if (detectedLanguage !== 'en') {
        setShowAutoTranslatePopup(true);
      }
    };
    
    mockIPDetection();
  }, []);

  const handleTranslateAccept = () => {
    setCurrentLanguage(detectedLanguage);
    setShowAutoTranslatePopup(false);
  };

  const handleTranslateDecline = () => {
    setShowAutoTranslatePopup(false);
  };

  const handleAuthClick = (type: 'login' | 'signup') => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100">
      {/* Modern Navbar */}
      <Navbar 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage}
        showAutoDetect={showAutoDetect}
        onAuthClick={handleAuthClick}
      />

      {/* AI Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 z-40 bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-full shadow-lg hover:from-green-700 hover:to-teal-700 transition-all"
        aria-label="Open AI Chat"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* AI Chat Component */}
      <AIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        currentLanguage={currentLanguage}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        authType={authType}
        currentLanguage={currentLanguage}
      />

      {/* Auto-translate Popup */}
      {showAutoTranslatePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Language Detected</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We detected that you might prefer <strong>🇳🇬 Igbo</strong>. 
              Would you like to translate this page?
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

      {/* Main Content */}
      <LandingPage 
        currentLanguage={currentLanguage}
        onAuthClick={handleAuthClick}
      />
    </div>
  );
};

export default App;