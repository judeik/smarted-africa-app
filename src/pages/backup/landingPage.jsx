import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Globe, 
  BookOpen, 
  Shield, 
  Smartphone, 
  Download, 
  Star, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Phone, 
  ChevronRight,
  CheckCircle,
  Award,
  TrendingUp,
  Heart,
  User as UserIcon,
  Building,
  GraduationCap,
  Factory,
  WifiOff,
  Cloud,
  Zap,
  Menu,
  X,
  Github,
  Linkedin,
  School,
  Laptop,
  Code,
  Database,
  BarChart3,
  Brain,
  Target,
  Book,
  Headphones,
  Award as Trophy,
  Bot,
  Languages,
  Flag,
  Volume2,
  Send,
  Mic,
  VolumeX
} from 'lucide-react';

// Language data
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
  { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'sw', name: 'Swahili', flag: '🇹🇿' },
  { code: 'am', name: 'Amharic', flag: '🇪🇹' }
];

// Mock translations (in a real app, this would connect to a translation API)
const translations = {
  en: {
    heroTitle: "Education That Works Without Internet",
    heroSubtitle: "SmartEd delivers world-class, localized educational content to students, artisans, and institutions across Africa - completely offline and accessible on any device.",
    getStarted: "Start Learning Today",
    watchDemo: "Watch Demo",
    features: "Features",
    solutions: "Solutions",
    successStories: "Success Stories",
    ourTeam: "Our Team",
    contact: "Contact",
    whoWeServe: "Comprehensive Solutions for Every Learner",
    whyChoose: "Why Choose SmartEd?",
    howItWorks: "How SmartEd Works",
    impact: "Our Impact",
    studentTestimonials: "Student Success Stories",
    partnerTestimonials: "Partner & Institutional Testimonials",
    idCampTeam: "ID Camp Innovation Team",
    latestNews: "Latest News",
    partners: "Our Trusted Partners",
    support: "Support SmartEd Africa",
    stayUpdated: "Stay Updated",
    meetTeam: "Meet Our Development Team",
    contactUs: "Contact Us"
  },
  yo: {
    heroTitle: "Ìmọ̀-ẹ̀kọ́ Tí Ó Ṣiṣẹ́ Láìsí Ìntánẹ́tì",
    heroSubtitle: "SmartEd fún àwọn akẹ́kọ̀ọ́, àwọn ọjọ́gbọ́n, àti àwọn ilé-ìwé ní àgbègbè Afíríkà ní àwọn àkọsílẹ̀ tó dára tó báṣepọ̀ pẹ̀lú àwọn èdè àti àwọn ohun èlò àwọn akẹ́kọ̀ọ́.",
    getStarted: "Bẹ̀rẹ̀ Ìmọ̀-ẹ̀kọ́ Níbìí",
    watchDemo: "Wo Àpẹrẹ",
    features: "Àwọn Ẹ̀yà",
    solutions: "Àwọn Ìdánilẹ́kọ̀ọ́",
    successStories: "Àwọn Ìtàn Ìdàgbàsókè",
    ourTeam: "Ẹgbẹ́ Wa",
    contact: "Kòǹtákì",
    whoWeServe: "Àwọn Ìdánilẹ́kọ̀ọ́ Fún Gbogbo Eniyan",
    whyChoose: "Kí Lá Ṣe Fàráhàn SmartEd?",
    howItWorks: "Bí SmartEd Ṣe Ṣiṣẹ́",
    impact: "Ìpèṣẹ́ Wa",
    studentTestimonials: "Àwọn Ìtàn Ìdàgbàsókè Akẹ́kọ̀ọ́",
    partnerTestimonials: "Àwọn Ìtàn Ìdàgbàsókè Ọ̀dọ́ Àwọn Aláàbòò",
    idCampTeam: "Ẹgbẹ́ Ìṣàkóso ID Camp",
    latestNews: "Àwọn Ìròhìn Tuntun",
    partners: "Àwọn Aláàbòò Wa Tí Wọ́n Trust",
    support: "Tẹ̀lé SmartEd Afíríkà",
    stayUpdated: "Jẹ́ Kí Ó Dára",
    meetTeam: "Mọ Ẹgbẹ́ Ìṣàkóso Wa",
    contactUs: "Kòǹtákì Wa"
  },
  ha: {
    heroTitle: "Ilmin Bincike Ta Yau Da Yau Ba Taka Launi",
    heroSubtitle: "SmartEd yana ilimi mai kyau da aka ta Africa - ta atomatik da zai iya amfani da shi a kowane na'ura.",
    getStarted: "Fara Amfani Da Yau",
    watchDemo: "Duba Bayani",
    features: "Siffofi",
    solutions: "Hanyoyin Magance",
    successStories: "Tarihin Nasara",
    ourTeam: "Takardunmu",
    contact: "Lambobin Hada",
    whoWeServe: "Hanyoyin Magance Don Duk Wanda Ya Ke",
    whyChoose: "Me Ya Za A Zaɓi SmartEd?",
    howItWorks: "Yadda SmartEd Ya Aiki",
    impact: "Tasirinmu",
    studentTestimonials: "Tarihin Nasara Na Dalibai",
    partnerTestimonials: "Tarihin Nasara Na Shagali Da Al'umma",
    idCampTeam: "Takardun Bincike Na ID Camp",
    latestNews: "Labarin Na Farko",
    partners: "Masu Gwamnati Da Mu Na",
    support: "Taimaka Da SmartEd Africa",
    stayUpdated: "Ajiye Da Sabon Bayanai",
    meetTeam: "Gama Takardunmu",
    contactUs: "Hada Da Mu"
  }
  // Add more languages as needed
};

// Testimonial Component
const Testimonial = ({ name, role, organization, content, avatar, isStudent = false }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
        isStudent ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-green-400 to-teal-500'
      }`}>
        {avatar}
      </div>
      <div className="ml-4">
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{role}{organization && `, ${organization}`}</p>
      </div>
    </div>
    <p className="text-gray-700 italic">"{content}"</p>
    <div className="flex mt-2 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-green-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Partner Logo Component
const PartnerLogo = ({ name, logo }) => (
  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
    <div className="text-2xl font-bold text-gray-800">{logo}</div>
  </div>
);

// Team Member Component
const TeamMember = ({ name, role, github, linkedin, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
    <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
      {name.split(' ').map(n => n[0]).join('')}
    </div>
    <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
    <p className="text-sm text-green-600 mb-3">{role}</p>
    <div className="text-xs text-gray-600 mb-4 h-16 overflow-y-auto">
      {skills.map((skill, index) => (
        <span key={index} className="inline-block bg-gray-100 rounded-full px-2 py-1 mr-1 mb-1">
          {skill}
        </span>
      ))}
    </div>
    <div className="flex justify-center space-x-3">
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
        <Github className="w-5 h-5" />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  </div>
);

// ID Camp Member Component
const IDCampMember = ({ name, role, achievement, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
    <p className="text-sm text-blue-600 mb-2">{role}</p>
    <p className="text-gray-600 text-sm">{achievement}</p>
  </div>
);

// AI Chat Component
const AIChat = ({ isOpen, onClose, currentLanguage }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: currentLanguage === 'en' ? "Hello! I'm SmartEd AI assistant. How can I help you today?" : 
       currentLanguage === 'yo' ? "Bawo ni! Mo ni SmartEd AI alatunse. Bawo ni MO le ran ọ lowo ni yio?" : 
       "Sannu! Ina SmartEd AI mai taimako. Yaya zan ka taimaka maka yau?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        currentLanguage === 'en' ? "I understand your question. Let me help you with that!" : 
        currentLanguage === 'yo' ? "Mo gbo ohun ti o sọ. Jẹ́ kí n ṣe iranlọwọ fun ọ pẹ̀lú eyi!" : 
        "Ina fahimta tambayar ku. Bari ina taimaka maka wannan!",
        currentLanguage === 'en' ? "That's a great question! Here's what I can tell you..." : 
        currentLanguage === 'yo' ? "Eyi jẹ́ ìbéèrè rere! Eyi ni MO lè sọ fún ọ..." : 
        "Wannan tambaya mai kyau ne! Gaɗon ina zan ba ku bayani...",
        currentLanguage === 'en' ? "I'm here to help! Is there anything else you'd like to know?" : 
        currentLanguage === 'yo' ? "Mo wà níbí láti ran ọ lọ́wọ́! Ṣé wà láti ohun miiran ti o fẹ́ mọ̀?" : 
        "Ina nan taimaka! Shin wanda kuma zan kalafta?"
      ];
      
      const aiMessage = { 
        id: Date.now() + 1, 
        text: responses[Math.floor(Math.random() * responses.length)], 
        sender: 'ai' 
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 w-full max-w-md bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Bot className="w-5 h-5 mr-2" />
          <span className="font-semibold">SmartEd AI Assistant</span>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="h-96 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg max-w-xs ${
              message.sender === 'user' 
                ? 'bg-green-600 text-white rounded-br-none' 
                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
            }`}>
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="text-left">
            <div className="inline-block p-3 bg-white text-gray-800 border border-gray-200 rounded-lg rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSend} className="p-4 border-t border-gray-200 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={currentLanguage === 'en' ? "Type your message..." : 
                       currentLanguage === 'yo' ? "Ṣe afikun ifiranṣẹ rẹ..." : 
                       "Ƙara saƙo ku..."}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

// Language Selector Component
const LanguageSelector = ({ currentLanguage, onLanguageChange, showAutoDetect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-green-600 font-medium"
      >
        <Languages className="w-5 h-5" />
        <span>{languages.find(l => l.code === currentLanguage)?.flag || '🇬🇧'} {languages.find(l => l.code === currentLanguage)?.name}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {showAutoDetect && (
            <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
              Auto-detected
            </div>
          )}
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2 ${
                currentLanguage === lang.code ? 'bg-green-50 text-green-700' : 'text-gray-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Modern Navbar Component
const Navbar = ({ currentLanguage, onLanguageChange, showAutoDetect }) => {
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
              {translations[currentLanguage]?.features || 'Features'}
            </a>
            <a href="#audience" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              {translations[currentLanguage]?.solutions || 'Solutions'}
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              {translations[currentLanguage]?.successStories || 'Success Stories'}
            </a>
            <a href="#team" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              {translations[currentLanguage]?.ourTeam || 'Our Team'}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              {translations[currentLanguage]?.contact || 'Contact'}
            </a>
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange}
              showAutoDetect={showAutoDetect}
            />
            <button 
              onClick={() => alert('Authentication flow would open here!')}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full font-medium hover:from-green-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
            >
              {translations[currentLanguage]?.getStarted || 'Get Started'}
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
                {translations[currentLanguage]?.features || 'Features'}
              </a>
              <a href="#audience" className="text-gray-600 hover:text-green-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage]?.solutions || 'Solutions'}
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage]?.successStories || 'Success Stories'}
              </a>
              <a href="#team" className="text-gray-600 hover:text-green-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage]?.ourTeam || 'Our Team'}
              </a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage]?.contact || 'Contact'}
              </a>
              <button 
                onClick={() => {
                  alert('Authentication flow would open here!');
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full font-medium hover:from-green-700 hover:to-teal-700 transition-all shadow-lg"
              >
                {translations[currentLanguage]?.getStarted || 'Get Started'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Auto-translate Popup
const AutoTranslatePopup = ({ detectedLanguage, onAccept, onDecline }) => {
  const detectedLang = languages.find(l => l.code === detectedLanguage);
  
  if (!detectedLang) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex items-center mb-4">
          <Flag className="w-6 h-6 text-green-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Language Detected</h3>
        </div>
        <p className="text-gray-600 mb-4">
          We detected that you might prefer <strong>{detectedLang.flag} {detectedLang.name}</strong>. 
          Would you like to translate this page?
        </p>
        <div className="flex space-x-3">
          <button
            onClick={onAccept}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Yes, Translate
          </button>
          <button
            onClick={onDecline}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
          >
            No, Keep English
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showAutoTranslatePopup, setShowAutoTranslatePopup] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState('en');
  const [showAutoDetect, setShowAutoDetect] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Simulate IP-based language detection
  useEffect(() => {
    // In a real app, this would call an API like ipapi.com or similar
    const mockIPDetection = () => {
      // Mock different scenarios based on user location
      const userLocation = Math.random(); // Simulate different users
      
      if (userLocation < 0.3) {
        setDetectedLanguage('yo'); // Yoruba for SW Nigeria
        setShowAutoDetect(true);
      } else if (userLocation < 0.6) {
        setDetectedLanguage('ha'); // Hausa for Northern Nigeria
        setShowAutoDetect(true);
      } else if (userLocation < 0.8) {
        setDetectedLanguage('fr'); // French for Francophone Africa
        setShowAutoDetect(true);
      } else {
        setDetectedLanguage('en'); // Default to English
        setShowAutoDetect(false);
      }
      
      // Show popup only if detected language is different from default
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  // Who We Serve Data
  const whoWeServe = [
    {
      icon: GraduationCap,
      title: "Students & Learners",
      description: "Access quality education anytime, anywhere - perfect for rural and urban students alike.",
      audience: "Primary to tertiary students, self-learners"
    },
    {
      icon: Building,
      title: "Educational Institutions",
      description: "Empower schools, colleges, and universities with offline-capable learning management.",
      audience: "Schools, Universities, Training Centers"
    },
    {
      icon: Factory,
      title: "Artisans & Professionals",
      description: "Upskill with practical, localized content tailored to local industries and crafts.",
      audience: "Artisans, Farmers, Small Business Owners"
    },
    {
      icon: WifiOff,
      title: "Rural Communities",
      description: "Bridge the digital divide with offline-first learning that works without internet.",
      audience: "Rural dwellers, Remote communities"
    },
    {
      icon: Cloud,
      title: "Examination Bodies",
      description: "Secure, offline-capable assessment platforms for standardized testing.",
      audience: "WAEC, NECO, JAMB, State Boards"
    },
    {
      icon: Zap,
      title: "Cyber Cafes & Centers",
      description: "Transform internet cafes into smart learning hubs with our localized content.",
      audience: "Cyber cafes, Community centers, Libraries"
    },
    {
      icon: School,
      title: "Prep Centers",
      description: "Specialized exam preparation content with AI-powered practice tests and performance analytics.",
      audience: "JAMB, WAEC, NECO, Post-UTME prep centers"
    }
  ];

  // Why Choose SmartEd Features
  const whyChooseFeatures = [
    {
      icon: Download,
      title: "Truly Offline",
      description: "Download once, learn forever. No internet required after initial setup."
    },
    {
      icon: Globe,
      title: "Localized Content",
      description: "Curriculum-aligned content in local languages with cultural relevance."
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Military-grade security with phone/email verification and biometric options."
    },
    {
      icon: Smartphone,
      title: "Low-Device Friendly",
      description: "Runs smoothly on devices with as little as 1GB RAM and Android 5.0+."
    },
    {
      icon: BookOpen,
      title: "AI-Powered Learning",
      description: "Adaptive learning paths that adjust to individual student needs and pace."
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Peer-to-peer learning networks that work offline in local communities."
    },
    {
      icon: Bot,
      title: "AI Customer Support",
      description: "24/7 AI-powered chat assistance in your preferred language."
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Automatic translation with manual language selection for all major African languages."
    }
  ];

  // Student Testimonials
  const studentTestimonials = [
    {
      name: "Chiamaka Okonkwo",
      role: "JAMB Candidate",
      content: "SmartEd helped me score 320 in JAMB! The offline practice tests were exactly like the real exam.",
      avatar: "CO"
    },
    {
      name: "Tunde Adebayo",
      role: "WAEC Student",
      content: "I studied for WAEC using SmartEd during the village power outage. Got 8 distinctions!",
      avatar: "TA"
    },
    {
      name: "Aisha Mohammed",
      role: "NECO Candidate",
      content: "The localized content in Hausa made it so much easier to understand complex topics.",
      avatar: "AM"
    },
    {
      name: "Emmanuel Okafor",
      role: "University Student",
      content: "Perfect for rural students like me. I can study anytime without worrying about data costs.",
      avatar: "EO"
    }
  ];

  // Professional Testimonials
  const professionalTestimonials = [
    {
      name: "Amina Yusuf",
      role: "Head Teacher",
      organization: "Rural Primary School, Kano",
      content: "SmartEd has transformed our school. Students can now access quality education even during the frequent power outages.",
      avatar: "AY"
    },
    {
      name: "Dr. Emmanuel Okafor",
      role: "Director of ICT",
      organization: "Federal Ministry of Education",
      content: "The offline capability and localized content make SmartEd perfect for our national education digitization agenda.",
      avatar: "EO"
    },
    {
      name: "Fatima Ibrahim",
      role: "Artisan",
      organization: "Kano Textile Guild",
      content: "I've learned new weaving techniques through SmartEd without needing internet. It's changed my business completely.",
      avatar: "FI"
    },
    {
      name: "James Wilson",
      role: "CEO",
      organization: "Global Education NGO",
      content: "Finally, a solution that works in the most remote areas. SmartEd is bridging the education gap effectively.",
      avatar: "JW"
    }
  ];

  // ID Camp Members
  const idCampMembers = [
    {
      name: "Ojobor Jude Ikechukwu",
      role: "Team Leader & Product Manager",
      achievement: "Led development of offline-first architecture and secure authentication flow",
      icon: Target
    },
    {
      name: "Akpom David",
      role: "Frontend Developer",
      achievement: "Built responsive UI components and optimized performance for low-end devices",
      icon: Laptop
    },
    {
      name: "Omolaja Mamun",
      role: "Backend Developer",
      achievement: "Implemented offline data synchronization and secure API endpoints",
      icon: Database
    },
    {
      name: "Chinemeze Njoku",
      role: "AI/ML Developer",
      achievement: "Developed adaptive learning algorithms and performance analytics",
      icon: Brain
    }
  ];

  // Partners
  const partners = [
    { name: "UNESCO", logo: "UN" },
    { name: "World Bank", logo: "WB" },
    { name: "Google.org", logo: "GO" },
    { name: "Mastercard Foundation", logo: "MF" },
    { name: "African Development Bank", logo: "AfDB" },
    { name: "Microsoft Philanthropies", logo: "MP" }
  ];

  // Team Members with complete information
  const team = [
    {
      name: "Ojobor Jude Ikechukwu",
      role: "Team Leader & Product Manager",
      github: "https://github.com/judeik",
      linkedin: "https://www.linkedin.com/in/ojobor-jude-ik-292b9612b/",
      skills: ["React", "TypeScript", "PHP", "Node.js", "MySQL", "MongoDB", "Python (Beginner)", "Full-Stack Dev"]
    },
    {
      name: "Akpom David",
      role: "Frontend Developer",
      github: "https://github.com/Dahvid16",
      linkedin: "https://www.linkedin.com/in/davidakpom",
      skills: ["CSS", "JavaScript", "React", "TypeScript", "Frontend Dev"]
    },
    {
      name: "Omolaja Mamun",
      role: "Backend Developer",
      github: "https://github.com/Omolaja2",
      linkedin: "https://www.linkedin.com/in/omolaja-mamun-49b98634b",
      skills: ["C#", "HTML", "CSS", "MySQL", "Python (Basic)", "Backend Dev"]
    },
    {
      name: "Chinemeze Njoku",
      role: "AI/ML Developer",
      github: "https://github.com/Chinemezee",
      linkedin: "https://www.linkedin.com/in/chinemeze-njoku-7401051a8",
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Science", "ML/AI Learner"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100">
      {/* Modern Navbar */}
      <Navbar 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage}
        showAutoDetect={showAutoDetect}
      />

      {/* AI Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 z-40 bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-full shadow-lg hover:from-green-700 hover:to-teal-700 transition-all"
        aria-label="Open AI Chat"
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* AI Chat Component */}
      <AIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        currentLanguage={currentLanguage}
      />

      {/* Auto-translate Popup */}
      {showAutoTranslatePopup && (
        <AutoTranslatePopup 
          detectedLanguage={detectedLanguage}
          onAccept={handleTranslateAccept}
          onDecline={handleTranslateDecline}
        />
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full mb-6">
            <Award className="w-4 h-4 mr-2" />
            <span>AI-Powered Offline Learning for Africa</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {translations[currentLanguage]?.heroTitle || "Education That Works Without Internet"}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {translations[currentLanguage]?.heroSubtitle || "SmartEd delivers world-class, localized educational content to students, artisans, and institutions across Africa - completely offline and accessible on any device."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert('Authentication flow would open here!')}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
            >
              {translations[currentLanguage]?.getStarted || 'Start Learning Today'}
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors">
              {translations[currentLanguage]?.watchDemo || 'Watch Demo'}
            </button>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="audience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations[currentLanguage]?.whoWeServe || "Comprehensive Solutions for Every Learner"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SmartEd is designed for everyone who believes education should be accessible, regardless of location or connectivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoWeServe.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <p className="text-sm text-gray-500 italic">Serving: {service.audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SmartEd */}
      <section id="features" className="py-16 bg-gradient-to-br from-teal-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations[currentLanguage]?.whyChoose || "Why Choose SmartEd?"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines cutting-edge technology with deep understanding of African educational needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations[currentLanguage]?.howItWorks || "How SmartEd Works"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, secure, and designed for the African context.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Signup</h3>
              <p className="text-gray-600">Register with phone or email, verify with SMS/email</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Content</h3>
              <p className="text-gray-600">Get curriculum-aligned content for your region</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn Offline</h3>
              <p className="text-gray-600">Access courses anytime, anywhere without internet</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sync When Online</h3>
              <p className="text-gray-600">Progress syncs automatically when connected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {translations[currentLanguage]?.impact || "Our Impact"}
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Transforming education across Africa, one community at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="opacity-90">Active Learners</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12K+</div>
              <p className="opacity-90">Rural Schools</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <p className="opacity-90">African Countries</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="opacity-90">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations[currentLanguage]?.studentTestimonials || "Student Success Stories"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who have transformed their academic journey with SmartEd.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {studentTestimonials.map((testimonial, index) => (
              <Testimonial 
                key={index} 
                {...testimonial} 
                isStudent={true}
              />
            ))}
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations[currentLanguage]?.partnerTestimonials || "Partner & Institutional Testimonials"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from educators, students, and partners who are transforming education with SmartEd.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalTestimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ID Camp Members */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
              <Trophy className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations[currentLanguage]?.idCampTeam || "ID Camp Innovation Team"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented developers behind SmartEd Africa, trained through Google's ID Camp program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {idCampMembers.map((member, index) => (
              <IDCampMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations[currentLanguage]?.latestNews || "Latest News"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest developments and success stories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-green-600 font-semibold mb-2">PARTNERSHIP</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SmartEd Partners with UNESCO for Rural Education Initiative</h3>
              <p className="text-gray-600 mb-4">New partnership aims to bring offline learning to 10,000 rural schools across West Africa.</p>
              <a href="#" className="text-green-600 font-medium flex items-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-green-600 font-semibold mb-2">LAUNCH</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">New Yoruba and Hausa Language Content Now Available</h3>
              <p className="text-gray-600 mb-4">Expanding our localized content library to serve more Nigerian communities.</p>
              <a href="#" className="text-green-600 font-medium flex items-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-green-600 font-semibold mb-2">IMPACT</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SmartEd Helps 5,000 Artisans Upskill During Pandemic</h3>
              <p className="text-gray-600 mb-4">Offline learning platform proves crucial for vocational training during lockdowns.</p>
              <a href="#" className="text-green-600 font-medium flex items-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations[currentLanguage]?.partners || "Our Trusted Partners"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading organizations to transform African education.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <PartnerLogo key={index} {...partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Heart className="w-16 h-16 mx-auto mb-6 text-pink-300" />
          <h2 className="text-3xl font-bold mb-4">
            {translations[currentLanguage]?.support || "Support SmartEd Africa"}
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Your support helps us bring quality education to millions of underserved learners across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {translations[currentLanguage]?.stayUpdated || "Stay Updated"}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates, success stories, and educational resources.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full font-medium hover:from-green-700 hover:to-teal-700 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          {isSubscribed && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Thank you for subscribing!
            </div>
          )}
        </div>
      </section>

      {/* Meet Our Team */}
      <section id="team" className="py-16 bg-gradient-to-br from-teal-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations[currentLanguage]?.meetTeam || "Meet Our Development Team"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developers and technologists dedicated to transforming African education through innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations[currentLanguage]?.contactUs || "Contact Us"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Get in touch with our team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-600">Lagos, Nigeria | Nairobi, Kenya | Accra, Ghana</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-600">+234 800 SMARTED</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-600">hello@smartedafrica.org</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-600">WhatsApp: +234 800 SMARTED</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-green-400" />
                <span className="ml-2 text-xl font-bold">SmartEd Africa</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering African learners with offline, AI-powered education that works anywhere.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Learners</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Get Started</a></li>
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Download App</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Institutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Schools</a></li>
                <li><a href="#" className="hover:text-white">Universities</a></li>
                <li><a href="#" className="hover:text-white">NGOs</a></li>
                <li><a href="#" className="hover:text-white">Partnerships</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Team</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SmartEd Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;