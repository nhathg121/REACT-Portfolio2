import "./app.scss";

//import Component
import Parallax from "./components/parallax/Parallax.jsx";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor.jsx";

const App = () => {
  return (
    <div>
      <Cursor />
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

      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
      <section id="About">About</section>
    </div>
  );
};

export default App;
