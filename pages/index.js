import * as React from "react";
import Hero from "../components/hero";
import Cards from "../components/cards";
import Masonry from "../components/masonry";
import Contacto from "../components/contact";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

const Home = () => (
  <div>
    <Navigation />

    <Hero />

    <section className="sec-cards">
      <h1 className="title">Nuestros productos</h1>
      <Cards variant="outlined" />
    </section>

    <Masonry />
    <section className="sec-cards">
    <Contacto />
    </section>
    <Footer />
  </div>
);

export default Home;
