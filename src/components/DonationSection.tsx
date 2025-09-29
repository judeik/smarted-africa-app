import React from 'react'
import { motion } from 'framer-motion'

const abc = () => {
  return (
    <>
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
    </>
  )
}

export default abc