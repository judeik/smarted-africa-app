import React from 'react'

const DashboardFooter = () => {
  return (
    <>
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
    </>
  )
}

export default DashboardFooter