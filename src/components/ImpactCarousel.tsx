import React from 'react'
import { motion } from 'framer-motion'

const ImpactCarousel = () => {
  return (
    <>
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
    </>
  )
}

export default ImpactCarousel