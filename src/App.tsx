import React from "react";
import "./app.sass";

import Parallax from "./components/parallax/Parallax.jsx";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      <section id="About">Contact</section>
    </div>
  );
};

export default App;
