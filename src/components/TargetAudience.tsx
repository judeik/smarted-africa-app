import React from 'react'
import { motion } from "framer-motion";

const TargetAudience = () => {
  return (
    <>
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
                            <div className="fs-1 mb-3">{audience.icon} </div>
                            <h5 className="fw-bold">{audience.title}</h5>
                            <p>{audience.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default TargetAudience