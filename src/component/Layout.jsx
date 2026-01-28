import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Gallery from "./Gallery";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children ? children : <Gallery />}
      
      

      <Footer />
    </>
  );
};

export default Layout;
