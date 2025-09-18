/**
 * src/pages/Landing.tsx
 * Improved landing page with images, testimonials, partners, and latest news.
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing(): React.ReactElement {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="py-5 text-center bg-success text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container"
        >
          <h1 className="display-4 fw-bold">SmartEd Africa</h1>
          <p className="lead mb-4">
            AI-powered, offline-first learning for students, teachers, and communities across Africa.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/signup" className="btn btn-light btn-lg text-success fw-semibold">
              Get Started — Free
            </Link>
            <Link to="/login" className="btn btn-outline-light btn-lg">
              Log in
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Why Choose SmartEd?</h2>
          <div className="row g-4">
            {[
              {
                id: "feature-1",
                title: "Localized Content",
                desc: "Lessons in Hausa, Kanuri, English, designed for low-connectivity contexts.",
                img: "https://source.unsplash.com/400x300/?books,africa",
              },
              {
                id: "feature-2",
                title: "AI Tutor",
                desc: "Personalized WAEC/JAMB prep with instant feedback and adaptive quizzes.",
                img: "https://source.unsplash.com/400x300/?artificial-intelligence,education",
              },
              {
                id: "feature-3",
                title: "Teacher Tools",
                desc: "Microlearning modules, offline packages, and analytics for teachers.",
                img: "https://source.unsplash.com/400x300/?teacher,classroom",
              },
              {
                id: "feature-4",
                title: "Parent Dashboard",
                desc: "Track student progress and support home learning easily.",
                img: "https://source.unsplash.com/400x300/?family,learning",
              },
              {
                id: "feature-5",
                title: "School Admin",
                desc: "Analytics and digital attendance for better resource planning.",
                img: "https://source.unsplash.com/400x300/?school,technology",
              },
              {
                id: "feature-6",
                title: "Community",
                desc: "Study groups, discussions, and peer learning support.",
                img: "https://source.unsplash.com/400x300/?students,africa",
              },
            ].map((feature) => (
              <div className="col-md-4" key={feature.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={feature.img}
                    className="card-img-top"
                    alt={feature.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{feature.title}</h5>
                    <p className="card-text">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">What Our Students Say</h2>
          <div className="row g-4">
            {[
              {
                text: `"SmartEd helped me pass my JAMB exams on the first try!"`,
                name: "Aisha, Kano",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                text: `"The AI tutor feels like having a teacher 24/7."`,
                name: "Chinedu, Lagos",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                text: `"Even offline, my kids can keep learning. Amazing!"`,
                name: "Fatima, Maiduguri",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
            ].map((t, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card shadow-sm h-100">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="rounded-circle mx-auto mt-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="fst-italic">“{t.text}”</p>
                    <h6 className="fw-bold mt-3">– {t.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-5 bg-success text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Stay Updated</h2>
          <p className="mb-4">Get SmartEd news, free resources, and education updates in your inbox.</p>
          <form className="row justify-content-center g-2">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-light btn-lg w-100 text-success fw-semibold">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Latest News</h2>
          <div className="row g-4">
            {[
              {
                id: "news-1",
                title: "SmartEd partners with schools in Northern Nigeria",
                desc: "Expanding access to AI-powered learning in underserved regions.",
                img: "https://source.unsplash.com/400x300/?africa,school",
              },
              {
                id: "news-2",
                title: "Offline-first technology improves exam success",
                desc: "Students using SmartEd’s offline app showed 30% better results.",
                img: "https://source.unsplash.com/400x300/?students,learning",
              },
              {
                id: "news-3",
                title: "SmartEd joins UNESCO education innovation forum",
                desc: "Collaboration for global knowledge-sharing and edtech growth.",
                img: "https://source.unsplash.com/400x300/?conference,education",
              },
            ].map((news) => (
              <div className="col-md-4" key={news.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={news.img}
                    className="card-img-top"
                    alt={news.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.desc}</p>
                    <Link to="/news" className="btn btn-sm btn-success mt-2">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Logos */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Trusted by Partners</h2>
          <p className="mb-5">
            SmartEd Africa is building collaborations with schools, NGOs, and education innovators.
          </p>
          <div className="row justify-content-center g-4 align-items-center">
            {[
              {
                id: "p1",
                name: "UNICEF",
                logo: "https://images.seeklogo.com/logo-png/14/1/unicef-logo-png_seeklogo-144975.png",
              },
              {
                id: "p2",
                name: "WAEC",
                logo: "https://th.bing.com/th/id/OIP.TAwasAFWeMt6Mh1h7bxluwHaHD?rs=1&pid=ImgDetMain",
              },
              {
                id: "p3",
                name: "EdTechNG",
                logo: "https://dummyimage.com/200x80/000/fff&text=EdTechNG",
              },
              {
                id: "p4",
                name: "Ministry of Education",
                logo: "https://dummyimage.com/200x80/007bff/ffffff&text=Ministry+of+Education",
              },
            ].map((partner) => (
              <div className="col-6 col-md-3" key={partner.id}>
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="img-fluid"
                  style={{ maxHeight: "60px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-success text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="container"
        >
          <h2 className="display-6 fw-bold mb-3">Ready to transform learning?</h2>
          <p className="lead mb-4">
            Join students, teachers, and partners building resilient education systems across Africa.
          </p>
          <Link to="/signup" className="btn btn-light btn-lg text-success fw-semibold">
            Create Free Account
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
