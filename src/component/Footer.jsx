import React from 'react'

function Footer() {
  return (
    <>
      
          


          <footer className="bg-dark text-light pt-5">
              <div className="container">
                  <div className="row">

                      {/* About */}
                      <div className="col-md-3 mb-4">
                          <h5 className="fw-bold">Ducat India</h5>
                          <p className="text-white">
                              We build modern fast and responsive website using the latest technologies.
                          </p>
                      </div>

                      {/* Links */}
                      <div className="col-md-3 mb-4">
                          <h5 className="fw-bold">Links</h5>
                          <ul className="list-unstyled">
                              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                              <li><a href="#" className="text-white text-decoration-none">About</a></li>
                              <li><a href="#" className="text-white text-decoration-none">Services</a></li>
                              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
                          </ul>
                      </div>

                      <div className="col-md-3 mb-4">
                          <h5 className="fw-bold">Services</h5>
                          <ul className="list-unstyled">
                              <li><a href="#" className="text-white text-decoration-none">Web Design</a></li>
                              <li><a href="#" className="text-white text-decoration-none">Web Development</a></li>
                              <li><a href="#" className="text-white text-decoration-none">SEO</a></li>
                              <li><a href="#" className="text-white text-decoration-none">Hosting</a></li>
                          </ul>
                      </div>

                      {/* Contact */}
                      <div className="col-md-3 mb-4">
                          <h5 className="fw-bold">Contact</h5>
                          <p className="text-white mb-0">📍 Jaipur,India</p>
                          <p className="text-white mb-1">📧 info@example.com</p>
                          <p className="text-white mb-0">📞 +91 98765 43210</p>
                      </div>

                  </div>

                  <hr className="border-white" />

                  <div className="text-center pb-3">
                      <small className="text-white">
                          © 2026 My Website. All Rights Reserved.
                      </small>
                  </div>
              </div>
          </footer>
   
    </>
  )
}

export default Footer
