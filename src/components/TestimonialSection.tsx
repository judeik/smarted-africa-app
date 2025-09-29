import React from 'react'
import { motion } from 'framer-motion'

const TestimonialSection = () => {
  return (
    <>
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
              <motion.div className="col-md-4" key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card shadow-sm h-100 p-3">
                  <img src={t.img} alt={t.name} className="rounded-circle mx-auto mt-3" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                  <div className="card-body">
                    <p className="fst-italic">“{t.text}”</p>
                    <h6 className="fw-bold mt-3">– {t.name}</h6>
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

export default TestimonialSection