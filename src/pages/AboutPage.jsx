import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import AboutList from "../components/About/AboutList";

const AboutPage = () => {
  return (
    
    <div>
      
      <Header activeHeading={6} />
      <AboutList />
      <Footer />
    </div>
  );
};





export default AboutPage;