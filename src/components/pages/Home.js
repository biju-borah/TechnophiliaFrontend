import React from "react";
import Hero from "../Hero";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;