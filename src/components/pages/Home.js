import React from "react";
import Hero from "../Hero";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;