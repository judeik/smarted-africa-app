import React from 'react'
import { motion } from "framer-motion";

const WhyWork = () => {
  return (
    <>
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
    </>
  )
}

export default WhyWork