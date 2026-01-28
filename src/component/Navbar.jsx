
import React from 'react'

function Navbar() {
  return (  
      <>
      
          
          
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">

                  <a className="navbar-brand" href="/">
                      DUCAT INDIA
                  </a>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">

                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" href="/gallery">Gallery</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" href="/products">Product</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" href="/services">Service</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" href="/about">About</a>
                          </li>
                      </ul>

                  </div>
              </div>
          </nav>

      
      </>
  )
}

export default Navbar
