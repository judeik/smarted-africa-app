import React, { useState, useEffect } from 'react';
import {
  Star,
  BookOpen,
  User,
  Clock,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  CheckCircle
} from 'lucide-react';
import { translations } from '../utils/translations';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface Course {
  id: string;
  title: string;
  instructor: string;
  basePrice: number; // in NGN
  description: string;
  shortDescription: string;
  image: string;
  rating: number;
  reviewCount: number;
  duration: string;
  level: string;
  reviews: Review[];
}

const CoursesPage: React.FC<{ currentLanguage: string }> = ({ currentLanguage }) => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [subscriptionDuration, setSubscriptionDuration] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewCourseId, setReviewCourseId] = useState<string | null>(null);

  // Mock course data (ready for API integration)
  const courses: Course[] = [
    {
      id: 'waec-maths',
      title: 'WAEC Mathematics Mastery',
      instructor: 'Dr. Adebayo Johnson',
      basePrice: 5000,
      description: 'Comprehensive WAEC Mathematics preparation covering all topics from Algebra to Statistics. Includes 50+ practice tests, video explanations, and AI-powered doubt solving. Perfect for SS3 students aiming for A1 grades. Content available offline in English, Yoruba, and Hausa.',
      shortDescription: 'Master WAEC Mathematics with 50+ practice tests and AI support.',
      image: 'https://placehold.co/400x250/28a745/white?text=WAEC+Maths',
      rating: 4.8,
      reviewCount: 124,
      duration: '3 months',
      level: 'Beginner to Advanced',
      reviews: [
        {
          id: 'r1',
          name: 'Chiamaka E.',
          rating: 5,
          comment: 'Scored A1 in WAEC Maths! The offline practice tests were exactly like the real exam.',
          date: '2024-03-15'
        },
        {
          id: 'r2',
          name: 'Tunde A.',
          rating: 4,
          comment: 'Great content, but I wish there were more Igbo translations.',
          date: '2024-02-28'
        }
      ]
    },
    {
      id: 'jamb-physics',
      title: 'JAMB Physics Crash Course',
      instructor: 'Prof. Fatima Ibrahim',
      basePrice: 7500,
      description: 'Intensive JAMB Physics preparation focusing on high-yield topics like Waves, Electricity, and Modern Physics. Includes timed mock exams, formula sheets, and weekly live doubt sessions (recorded for offline access). Designed for students with limited study time.',
      shortDescription: 'Ace JAMB Physics with timed mocks and formula mastery.',
      image: 'https://placehold.co/400x250/20c997/white?text=JAMB+Physics',
      rating: 4.6,
      reviewCount: 89,
      duration: '2 months',
      level: 'Intermediate',
      reviews: [
        {
          id: 'r3',
          name: 'Emmanuel O.',
          rating: 5,
          comment: 'The formula sheets saved me! Got 320 in JAMB overall.',
          date: '2024-04-02'
        }
      ]
    },
    {
      id: 'neco-english',
      title: 'NECO English Language Excellence',
      instructor: 'Mrs. Grace Nwosu',
      basePrice: 4000,
      description: 'Master NECO English with focus on Comprehension, Lexis, and Essay Writing. Includes graded essay feedback (AI-powered), oral English practice, and past questions from 2015–2024. Available in English with Hausa explanations for complex grammar rules.',
      shortDescription: 'Excel in NECO English with AI essay grading and oral practice.',
      image: 'https://placehold.co/400x250/17a2b8/white?text=NECO+English',
      rating: 4.9,
      reviewCount: 203,
      duration: '4 months',
      level: 'All Levels',
      reviews: [
        {
          id: 'r4',
          name: 'Aisha M.',
          rating: 5,
          comment: 'The Hausa explanations made grammar so much easier to understand!',
          date: '2024-01-20'
        }
      ]
    }
  ];

  const VAT_RATE = 0.075; // 7.5% VAT

  const calculateTotalPrice = (basePrice: number): number => {
    return basePrice * (1 + VAT_RATE);
  };

  const getDurationMultiplier = (): number => {
    switch (subscriptionDuration) {
      case 'quarterly': return 2.7; // 10% discount
      case 'yearly': return 10;   // 16.7% discount per month
      default: return 1;
    }
  };

  const handleSubscribe = (course: Course) => {
    setSelectedCourse(course);
    setIsSubscribeModalOpen(true);
  };

  const handleWriteReview = (courseId: string) => {
    setReviewCourseId(courseId);
    setIsReviewModalOpen(true);
  };

  const submitReview = () => {
    // In real app: POST to API
    alert('Thank you for your review! (In production, this would be saved to the database)');
    setIsReviewModalOpen(false);
    setNewReview({ rating: 5, comment: '' });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100 pt-16">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {translations[currentLanguage]?.courses || "Our Courses"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium, offline-capable courses designed for African students preparing for national examinations.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    {renderStars(course.rating)}
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span>{course.instructor}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration} • {course.level}</span>
                  </div>

                  <p className="text-gray-700 mb-4">
                    {expandedCourse === course.id
                      ? course.description
                      : course.shortDescription}
                  </p>

                  {course.description.length > course.shortDescription.length && (
                    <button
                      onClick={() => setExpandedCourse(
                        expandedCourse === course.id ? null : course.id
                      )}
                      className="text-green-600 hover:text-green-700 font-medium flex items-center mb-4"
                    >
                      {expandedCourse === course.id ? 'Show less' : 'Read more'}
                      {expandedCourse === course.id ?
                        <ChevronUp className="w-4 h-4 ml-1" /> :
                        <ChevronDown className="w-4 h-4 ml-1" />
                      }
                    </button>
                  )}

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-gray-900">
                        ₦{Math.round(calculateTotalPrice(course.basePrice)).toLocaleString()}
                      </span>
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ₦{Math.round(course.basePrice * 1.1).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-green-600">Includes 7.5% VAT</p>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleSubscribe(course)}
                      className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all"
                    >
                      Subscribe
                    </button>
                    <button
                      onClick={() => handleWriteReview(course.id)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                      aria-label="Write a review"
                    >
                      <Star className="w-5 h-5 text-yellow-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section (below courses) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.flatMap(course =>
              course.reviews.map(review => (
                <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  {renderStars(review.rating)}
                  <p className="text-gray-700 mt-2 italic">"{review.comment}"</p>
                  <div className="mt-3 flex items-center text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>{courses.find(c => c.reviews.includes(review))?.title}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Subscription Modal */}
      {isSubscribeModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Subscribe to {selectedCourse.title}</h2>
              <button
                onClick={() => setIsSubscribeModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Choose Duration</h3>
              <div className="space-y-2">
                {(['monthly', 'quarterly', 'yearly'] as const).map((duration) => (
                  <label key={duration} className="flex items-center">
                    <input
                      type="radio"
                      name="duration"
                      checked={subscriptionDuration === duration}
                      onChange={() => setSubscriptionDuration(duration)}
                      className="h-4 w-4 text-green-600"
                    />
                    <span className="ml-3 text-gray-700 capitalize">
                      {duration}
                      {duration === 'quarterly' && ' (10% off)'}
                      {duration === 'yearly' && ' (16.7% off)'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Base Price:</span>
                <span>₦{Math.round(selectedCourse.basePrice * getDurationMultiplier()).toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">VAT (7.5%):</span>
                <span>₦{Math.round(selectedCourse.basePrice * getDurationMultiplier() * VAT_RATE).toLocaleString()}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>₦{Math.round(calculateTotalPrice(selectedCourse.basePrice) * getDurationMultiplier()).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all">
              Proceed to Checkout
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Secure payment via Paystack • 7-day money-back guarantee
            </p>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Write a Review</h2>
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setNewReview({...newReview, rating: star})}
                    className="text-2xl"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= newReview.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="review-comment" className="block text-sm font-medium text-gray-700 mb-2">
                Your Feedback
              </label>
              <textarea
                id="review-comment"
                rows={4}
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Share your experience with this course..."
              />
            </div>

            <button
              onClick={submitReview}
              disabled={!newReview.comment.trim()}
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all disabled:opacity-50"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} SmartEd Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoursesPage;
