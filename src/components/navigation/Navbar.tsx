import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X 
} from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { translations } from '../../utils/translations';

interface NavbarProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  showAutoDetect: boolean;
  onAuthClick: (type: 'login' | 'signup') => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentLanguage, 
  onLanguageChange, 
  showAutoDetect,
  onAuthClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <GraduationCap className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-green-600">SmartEd Africa</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              {translations[currentLanguage as keyof typeof translations]?.features || 'Features'}
            </a>
            <a href="#audience" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              {translations[currentLanguage as keyof typeof translations]?.solutions || 'Solutions'}
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              {translations[currentLanguage as keyof typeof translations]?.successStories || 'Success Stories'}
            </a>
            <a href="#team" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              {translations[currentLanguage as keyof typeof translations]?.ourTeam || 'Our Team'}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              {translations[currentLanguage as keyof typeof translations]?.contact || 'Contact'}
            </a>
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange}
              showAutoDetect={showAutoDetect}
            />
            <button 
              onClick={() => onAuthClick('login')}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full font-medium hover:from-green-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
            >
              {translations[currentLanguage as keyof typeof translations]?.login || 'Login'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange}
              showAutoDetect={showAutoDetect}
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-green-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage as keyof typeof translations]?.features || 'Features'}
              </a>
              <a href="#audience" className="text-gray-600 hover:text-green-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage as keyof typeof translations]?.solutions || 'Solutions'}
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage as keyof typeof translations]?.successStories || 'Success Stories'}
              </a>
              <a href="#team" className="text-gray-600 hover:text-green-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage as keyof typeof translations]?.ourTeam || 'Our Team'}
              </a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage as keyof typeof translations]?.contact || 'Contact'}
              </a>
              <div className="flex space-x-3">
                <button 
                  onClick={() => {
                    onAuthClick('login');
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full font-medium hover:from-green-700 hover:to-teal-700 transition-all shadow-lg"
                >
                  {translations[currentLanguage as keyof typeof translations]?.login || 'Login'}
                </button>
                <button 
                  onClick={() => {
                    onAuthClick('signup');
                    setIsMenuOpen(false);
                  }}
                  className="border-2 border-green-600 text-green-600 px-4 py-2 rounded-full font-medium hover:bg-green-50 transition-colors"
                >
                  {translations[currentLanguage as keyof typeof translations]?.signup || 'Sign Up'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;