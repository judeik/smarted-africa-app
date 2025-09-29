import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NewsSection = () => {
  return (
    <>
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
              <input type="submit" value="Subscribe" className="btn btn-light btn-lg w-100 text-success fw-semibold" />
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
              <motion.div className="col-md-4" key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 shadow-sm">
                  <img src={news.img} className="card-img-top" alt={news.title} style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.desc}</p>
                    <Link to="/news" className="btn btn-sm btn-success mt-2">Read More</Link>
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

export default NewsSection