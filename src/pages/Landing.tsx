/**
 * src/pages/Landing.tsx
 * SmartEd Africa Landing Page - Pure React + Bootstrap
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
<<<<<<< HEAD
import { FaGithub, FaLinkedin } from "react-icons/fa";
=======
import { Helmet } from "react-helmet-async";
>>>>>>> 6a3e11f7278cd3b259b2c9545eb4e430880c98b1
import { Link } from "react-router-dom";
import schemaData from "../../public/schema.json"; // import your JSON file

export default function Landing(): React.ReactElement {
  useEffect(() => {
    // Enable Bootstrap tooltips or any additional JS if needed
  }, []);

  return (
    <div className="bg-light text-dark">

       {/* ✅ Helmet with JSON-LD */}
        <Helmet>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Helmet>

      {/* Hero Section */}
      <section id="hero" className="mt-5 py-5 text-center bg-success text-white section-padd">
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

{/* Target Audience */}
<section id="audience" className="py-5 bg-white text-center section-padd">
  <div className="container">
    <h2 className="fw-bold mb-5">Who We Serve</h2>
    <div className="row g-4">
      {[
        { title: "Students", icon: "🎓", desc: "K–12 learners, JAMB aspirants, university students, and vocational learners." },
        { title: "Teachers", icon: "🧑‍🏫", desc: "Classroom teachers, lecturers, and home tutors managing classes and tracking progress." },
        { title: "Parents", icon: "👨‍👩‍👧‍👦", desc: "Support children’s learning at home and monitor their academic progress." },
        { title: "ID Camps Participants", icon: "🏕️", desc: "Intensive learning camps accessible from any device, anywhere." },
        { title: "Educational Institutions", icon: "🏫", desc: "Schools, universities, and private institutions leveraging SmartEd for quality learning." },
        { title: "Community & NGOs", icon: "🌍", desc: "Organizations supporting inclusive and accessible education across Africa." },

      ].map((audience, idx) => (
        <motion.div
          className="col-md-4"
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="card shadow-sm h-100 p-4 border-0 rounded-3 hover-shadow">
            <div className="fs-1 mb-3">{audience.icon}</div>
            <h5 className="fw-bold">{audience.title}</h5>
            <p>{audience.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Features */}
      <section id="features" className="py-5 bg-white section-padd">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Why Choose SmartEd?</h2>
          <div className="row g-4">
            {[

                {
                title: "Localized Content",
                desc: "Lessons in Hausa, Kanuri, English, designed for low-connectivity contexts.",
                img: "https://images.unsplash.com/photo-1668965450077-1d23194b5f86?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400&q=80",
              },
              {
                title: "AI Tutor",
                desc: "Personalized WAEC/JAMB prep with instant feedback and adaptive quizzes.",
                img: "https://plus.unsplash.com/premium_photo-1683195787943-deceacb3f1c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=400",
              },
              {
                title: "Teacher Tools",
                desc: "Microlearning modules, offline packages, and analytics for teachers.",
                img: "https://images.unsplash.com/photo-1716654716581-3c92ba53de10?q=80&w=578&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=400",
              },
              {
                title: "Parent Dashboard",
                desc: "Track student progress and support home learning easily.",
                img: "https://images.unsplash.com/photo-1595780975747-e158890f48d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=400",
              },
              {
                title: "School Admin",
                desc: "Analytics and digital attendance for better resource planning.",
                img: "https://plus.unsplash.com/premium_photo-1713890431555-a86ba9933f11?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=400",
              },
              {
                title: "Community",
                desc: "Study groups, discussions, and peer learning support.",
                img: "https://images.unsplash.com/flagged/photo-1579133311477-9121405c78dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=400",
              },
            ].map((feature, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 shadow-sm hover-shadow hover-scale">
                  <img src={feature.img} alt={feature.title} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
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

{/* Why Our System Works */}
<section id="why-works" className="py-5 bg-light section-padd">
  <div className="container">
    <h2 className="fw-bold text-center mb-5">Why Our System Works</h2>
    <div className="row g-4 text-center">
      {[
        { title: "Offline-First Design", desc: "Access lessons anytime, anywhere, even with low connectivity.", icon: "💾" },
        { title: "AI-Powered Learning", desc: "Adaptive quizzes and personalized feedback boost student success.", icon: "🤖" },
        { title: "Community Driven", desc: "Students, teachers, and parents collaborate in real-time.", icon: "🌍" },
      ].map((item, idx) => (
        <motion.div
          className="col-md-4"
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="card shadow-sm h-100 p-4 border-0 rounded-3 hover-shadow">
            <div className="fs-1 mb-3">{item.icon}</div>
            <h5 className="fw-bold">{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5 bg-light section-padd">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">What Our Students Say</h2>
          <div className="row g-4">
            {[
              { text: "SmartEd helped me pass my JAMB exams on the first try!", name: "Aisha, Kano", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { text: "The AI tutor feels like having a teacher 24/7.", name: "Chinedu, Lagos", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { text: "Even offline, my kids can keep learning. Amazing!", name: "Fatima, Maiduguri", img: "https://randomuser.me/api/portraits/women/65.jpg" },
            ].map((t, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card shadow-sm h-100 p-3">
                  <img src={t.img} alt={t.name} className="rounded-circle mx-auto mt-3" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
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
      <section id="newsletter"  className="py-5 bg-success text-white text-center section-padd">
        <div className="container">
          <h2 className="fw-bold mb-3">Stay Updated</h2>
          <p className="mb-4">Get SmartEd news, free resources, and education updates in your inbox.</p>
          <form className="row justify-content-center g-2">
            <div className="col-md-6">
              <input type="email" className="form-control form-control-lg" placeholder="Enter your email" required />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-light btn-lg w-100 text-success fw-semibold">Subscribe</button>
            </div>
          </form>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-5 bg-white section-padd">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Latest News</h2>
          <div className="row g-4">
            {[
              { title: "SmartEd partners with schools in Northern Nigeria", desc: "Expanding access to AI-powered learning in underserved regions.", img: "https://images.unsplash.com/photo-1665586510291-ae722d1d1f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNtYXJ0RWQlMjBwYXJ0bmVycyUyMHdpdGglMjBzY2hvb2xzJTIwaW4lMjBOb3J0aGVybiUyME5pZ2VyaWF8ZW58MHx8MHx8fDA%3D" },
              { title: "Offline-first technology improves exam success", desc: "Students using SmartEd’s offline app showed 30% better results.", img: "https://images.unsplash.com/photo-1683174411274-2adb89891739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21hcnRFZCUyMHBhcnRuZXJzJTIwd2l0aCUyMHNjaG9vbHMlMjBpbiUyME5vcnRoZXJuJTIwTmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D" },
              { title: "SmartEd joins UNESCO education innovation forum", desc: "Collaboration for global knowledge-sharing and edtech growth.", img: "https://plus.unsplash.com/premium_photo-1713890423188-01590e2422de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnRFZCUyMHBhcnRuZXJzJTIwd2l0aCUyMHNjaG9vbHMlMjBpbiUyME5vcnRoZXJuJTIwTmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D" },
            ].map((news, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 shadow-sm">
                  <img src={news.img} className="card-img-top" alt={news.title} style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.desc}</p>
                    <Link to="/news" className="btn btn-sm btn-success mt-2">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Logos */}
      <section id="partners" className="py-5 bg-light section-padd">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Trusted by Partners</h2>
          <p className="mb-5">SmartEd Africa collaborates with schools, NGOs, and education innovators.</p>
          <div className="row justify-content-center g-4 align-items-center">
            {[
              { name: "UNICEF", logo: "https://images.seeklogo.com/logo-png/14/1/unicef-logo-png_seeklogo-144975.png" },
              { name: "WAEC", logo: "https://th.bing.com/th/id/OIP.TAwasAFWeMt6Mh1h7bxluwHaHD?rs=1&pid=ImgDetMain" },
              { name: "EdTechNG", logo: "https://dummyimage.com/200x80/000/fff&text=EdTechNG" },
              { name: "Ministry of Education", logo: "https://dummyimage.com/200x80/007bff/ffffff&text=Ministry+of+Education" },
            ].map((partner, idx) => (
              <div className="col-6 col-md-3" key={idx}>
                <img src={partner.logo} alt={partner.name} className="img-fluid" style={{ maxHeight: "60px", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Carousel */}
      <section id="highlights" className="py-5 bg-white section-padd">
        <div className="container">
          <motion.h2 className="fw-bold text-center mb-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Our Impact
          </motion.h2>

          <div id="impactCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
              {[
                { img: "https://images.unsplash.com/photo-1665586510539-cc2a12a54347?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "10,000+ Students Reached", desc: "Providing quality education to underserved communities across Africa." },
                { img: "https://images.unsplash.com/flagged/photo-1579133311477-9121405c78dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "500+ Teachers Trained", desc: "Empowering educators with AI-driven tools and offline learning methods." },
                { img: "https://images.unsplash.com/photo-1668965450077-1d23194b5f86?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Improved Exam Results", desc: "Students using SmartEd have shown 30% better results in WAEC/JAMB." },
                { img: "https://images.unsplash.com/photo-1666281269793-da06484657e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "100+ Coding Workshops", desc: "Hands-on workshops teaching programming and problem-solving skills." },
                { img: "https://images.unsplash.com/photo-1666281179585-2775d4a8d81c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "ID Camps & Bootcamps", desc: "Organized intensive learning camps for students across the region." },
              ].map((slide, idx) => (
                <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                  <div className="row align-items-center g-0">
                    <div className="col-md-6">
                      <img src={slide.img} className="d-block w-100 rounded-4 shadow-sm" alt={slide.title} style={{ objectFit: "cover", height: "300px" }} />
                    </div>
                    <div className="col-md-6">
                      <motion.div className="p-4 text-center text-md-start" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
                        <h3 className="fw-bold text-success">{slide.title}</h3>
                        <p className="lead">{slide.desc}</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#impactCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#impactCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

            <div className="carousel-indicators mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <button key={i} type="button" data-bs-target="#impactCarousel" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined} aria-label={`Slide ${i + 1}`}></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation" className="py-5 section-padd" style={{ background: "linear-gradient(90deg, #28a745 0%, #218838 100%)" }}>
        <div className="container text-center text-white">
          <motion.h2 className="fw-bold mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>Support SmartEd Africa</motion.h2>
          <motion.p className="mb-5 lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>Help us provide quality education across Africa. Every donation counts!</motion.p>

          <div className="row g-4 justify-content-center">
            {[
              { icon: "💡", title: "One-Time Donation", desc: "Support a child’s learning journey with a single contribution.", btnText: "Donate Now" },
              { icon: "🔄", title: "Monthly Support", desc: "Become a recurring supporter to sustain our programs long-term.", btnText: "Join Monthly" },
              { icon: "🤝", title: "Corporate Partnerships", desc: "Collaborate with us to impact more communities and students.", btnText: "Partner With Us" },
            ].map((donation, idx) => (
              <motion.div className="col-md-4" key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.2 }} viewport={{ once: true }}>
                <div className="card h-100 p-4 border-0 rounded-4 text-center donation-card hover-shadow hover-scale position-relative overflow-hidden">
                  <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", background: "rgba(255,255,255,0.2)", fontSize: "1.8rem" }}>
                    {donation.icon}
                  </div>
                  <h5 className="fw-bold mb-2">{donation.title}</h5>
                  <p className="mb-4">{donation.desc}</p>
                  <button className="btn btn-success fw-semibold px-4 py-2" style={{ background: "linear-gradient(135deg, #20c997, #28a745)", border: "none", transition: "all 0.3s ease-in-out", cursor: "pointer" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
                    {donation.btnText}
                  </button>
                  <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden">
                    <div className="bg-light opacity-10 w-100 h-100"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* Contact Us */}
<section id="contact" className="py-5 bg-white section-padd">
  <div className="container">
    <h2 className="fw-bold text-center mb-5">Contact Us</h2>
    <motion.div
      className="row justify-content-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="col-md-8">
        <form action="mailto:smartedafrica01@gmail.com" className="row g-3 shadow-sm p-4 rounded-4 border border-light">
          <div className="col-md-6">
            <input type="text" className="form-control form-control-lg" placeholder="Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control form-control-lg" placeholder="Email" required />
          </div>
          <div className="col-12">
            <input type="text" className="form-control form-control-lg" placeholder="Subject" required />
          </div>
          <div className="col-12">
            <textarea className="form-control form-control-lg" rows={5} placeholder="Message" required></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success btn-lg fw-semibold">Send Message</button>
          </div>
        </form>
      </div>
    </motion.div>
  </div>
</section>


      {/* 🔹 About Us Section */}
      <section id="about" className="py-16 bg-gray-50 section-padd">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            Meet Our Team
          </h2>

          {/* 🔹 Responsive grid layout */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* 🔹 Team Member 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="font-semibold text-xl text-green-700">
                Ojobor Jude Ikechukwu
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Full-Stack Dev | React, TS, PHP, Node.js, MySQL, MongoDB, Python (beginner)
              </p>
              <div className="space-x-4">
                <a href="https://github.com/judeik" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaGithub className="mr-1"/>GitHub</a>
                <a href="https://www.linkedin.com/in/ojobor-jude-ik-292b9612b/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaLinkedin className="mr-1"/>LinkedIn</a>
              </div>
            </div>

            {/* 🔹 Team Member 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="font-semibold text-xl text-green-700">
                Akpom David
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Frontend Dev | CSS, JavaScript, React, TypeScript
              </p>
              <div className="space-x-4">
                <a href="https://github.com/Dahvid16" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaGithub className="mr-1"/>GitHub</a>
                <a href="https://www.linkedin.com/in/davidakpom" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaLinkedin className="mr-1"/>LinkedIn</a>
              </div>
            </div>

            {/* 🔹 Team Member 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="font-semibold text-xl text-green-700">
                Omolaja Mamun
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Beginner Backend Dev | C#, HTML, CSS, MySQL, Python (basic)
              </p>
              <div className="space-x-4">
                <a href="https://github.com/Omolaja2" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaGithub className="mr-1"/>GitHub</a>
                <a href="https://www.linkedin.com/in/omolaja-mamun-49b98634b" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaLinkedin className="mr-1"/>LinkedIn</a>
              </div>
            </div>

            {/* 🔹 Team Member 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="font-semibold text-xl text-green-700">
                Chinemeze Njoku
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Python Dev | Data Science (NumPy, Pandas, Matplotlib), ML/AI learner
              </p>
              <div className="space-x-4">
                <a href="https://github.com/Chinemezee" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaGithub className="mr-1"/>GitHub</a>
                <a href="https://www.linkedin.com/in/chinemeze-njoku-7401051a8" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline inline-flex items-center"><FaLinkedin className="mr-1"/>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold">About SmartEd</h5>
              <p>SmartEd Africa provides AI-powered, offline-first learning to students, teachers, and communities, transforming education across the continent.</p>
            </div>
            <div className="col-md-2">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                {["Features", "News", "Partners", "Contact"].map(link => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} className="text-white text-decoration-none">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-md-3">
              <h6 className="fw-bold">Contact Us</h6>
              <p>Email: smartedafrica01@gmail.com</p>
              <p>Phone: +234 861 599 9859</p>
            </div>
            <div className="col-md-3">
              <h6 className="fw-bold">Follow Us</h6>
              <div className="d-flex gap-3 mt-2">
                {["facebook", "twitter", "linkedin", "instagram"].map(icon => (
                  <a key={icon} href="#" className="text-white fs-4"><i className={`bi bi-${icon}`}></i></a>
                ))}
              </div>
            </div>
          </div>
          {/* <hr className="my-4 border-secondary" />
          <div className="d-flex justify-content-between align-items-center flex-column flex-md-row text-center text-md-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} SmartEd Africa. All rights reserved.</p>
            <ul className="list-unstyled d-flex gap-3 mb-0 mt-2 mt-md-0">
              {["Privacy Policy", "Terms of Service"].map(link => (
                <li key={link}><a href="#" className="text-white text-decoration-none">{link}</a></li>
              ))}
            </ul>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
