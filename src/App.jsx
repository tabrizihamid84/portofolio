import "./app.scss";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Parrallax from "./components/parrallax/Parrallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Hero from "./components/sidebar/hero/Hero";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parrallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parrallax type="portfolio" />
      </section>

      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
