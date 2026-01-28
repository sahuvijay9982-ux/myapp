import React from 'react'

function Services() {
  return (
      <>
      
          <div className="container my-5 services">
              <div className="text-center mb-4">
                  <h2>Our Services</h2>
                  <p className="text-muted">
                      We provide high-quality digital solutions to grow your business
                  </p>
              </div>

              <div className="row g-5">
                  <div className="col-md-4">
                      <div className="service-card card text-center">
                          <div className="fs-1 mb-3">💻</div>
                          <h5>Web Development</h5>
                          <p className="text-muted">Responsive and fast websites.</p>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="service-card card text-center">
                          <div className="fs-1 mb-3">🎨</div>
                          <h5>Web Design</h5>
                          <p className="text-muted">Modern and clean UI designs.</p>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="service-card card text-center">
                          <div className="fs-1 mb-3">📱</div>
                          <h5>Responsive Design</h5>
                          <p className="text-muted">Mobile-first layouts.</p>
                      </div>
                  </div>

                  <br></br>
                  <div className="col-md-4">
                      <div className="service-card card text-center">
                          <div className="fs-1 mb-3">⚙️</div>
                          <h5>Maintenance</h5>
                          <p className="text-muted">Secure and scalable backend.</p>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="service-card card text-center">
                          <div className="fs-1 mb-3">🛒</div>
                          <h5>SEO Optimization</h5>
                          <p className="text-muted">Online store development.</p>
                      </div>
                      
                  </div>

                  <div className="col-md-4">
                      <div className="service-card card text-center">
                          <div className="fs-1 mb-3">🔒</div>
                          <h5>E-Commerce</h5>
                          <p className="text-muted">Protect your website.</p>
                      </div>
                  </div>
              </div>
          </div>

      
      </>
  )
}

export default Services
