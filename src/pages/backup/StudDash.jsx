import React, { useState } from 'react';
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
  Zap
} from 'lucide-react';

// Testimonial Component
const Testimonial = ({ name, role, organization, content, avatar }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
        {avatar}
      </div>
      <div className="ml-4">
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{role}, {organization}</p>
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
const TeamMember = ({ name, role }) => (
  <div className="text-center">
    <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
      {name.split(' ').map(n => n[0]).join('')}
    </div>
    <h3 className="font-semibold text-gray-900">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

// Main App Component
const App = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic
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
    }
  ];

  // Testimonials
  const testimonials = [
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

  // Partners
  const partners = [
    { name: "UNESCO", logo: "UN" },
    { name: "World Bank", logo: "WB" },
    { name: "Google.org", logo: "GO" },
    { name: "Mastercard Foundation", logo: "MF" },
    { name: "African Development Bank", logo: "AfDB" },
    { name: "Microsoft Philanthropies", logo: "MP" }
  ];

  // Team Members
  const team = [
    { name: "Dr. Chike Okonkwo", role: "Founder & CEO" },
    { name: "Aisha Mohammed", role: "CTO" },
    { name: "Prof. Samuel Adeyemi", role: "Chief Academic Officer" },
    { name: "Grace Nwosu", role: "Head of Partnerships" },
    { name: "David Mensah", role: "Lead Developer" },
    { name: "Zainab Bello", role: "Content Director" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <GraduationCap className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-green-600">SmartEd Africa</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 font-medium">Features</a>
              <a href="#audience" className="text-gray-600 hover:text-green-600 font-medium">Who We Serve</a>
              <a href="#impact" className="text-gray-600 hover:text-green-600 font-medium">Impact</a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 font-medium">Contact</a>
              <button 
                onClick={() => alert('Authentication flow would open here!')}
                className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full mb-6">
            <Award className="w-4 h-4 mr-2" />
            <span>AI-Powered Offline Learning for Africa</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Education That Works
            <span className="block text-green-600">Without Internet</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            SmartEd delivers world-class, localized educational content to students, artisans, and institutions across Africa - completely offline and accessible on any device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert('Authentication flow would open here!')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              Start Learning Today
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="audience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SmartEd is designed for everyone who believes education should be accessible, regardless of location or connectivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SmartEd?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines cutting-edge technology with deep understanding of African educational needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How SmartEd Works</h2>
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
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
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

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from educators, students, and partners who are transforming education with SmartEd.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
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
          <h2 className="text-3xl font-bold mb-4">Support SmartEd Africa</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Your support helps us bring quality education to millions of underserved learners across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates, success stories, and educational resources.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors whitespace-nowrap"
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
      <section className="py-16 bg-gradient-to-br from-teal-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators, technologists, and entrepreneurs dedicated to transforming African education.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
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