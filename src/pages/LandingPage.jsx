import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default LandingPage;
