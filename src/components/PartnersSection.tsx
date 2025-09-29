import React from 'react'

const PartnersSection = () => {
  return (
    <>
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
    </>
  )
}

export default PartnersSection