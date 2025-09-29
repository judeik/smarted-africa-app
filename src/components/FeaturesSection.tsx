import React from 'react'
import { motion } from 'framer-motion'

const FeaturesSection = () => {
  return (
    <>
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
              <motion.div className="col-md-4" key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 shadow-sm hover-shadow hover-scale">
                  <img src={feature.img} alt={feature.title} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{feature.title}</h5>
                    <p className="card-text">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturesSection