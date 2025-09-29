import React from 'react'
import { motion } from 'framer-motion'

const ContactUsSection = () => {
  return (
    <>
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
    </>
  )
}

export default ContactUsSection