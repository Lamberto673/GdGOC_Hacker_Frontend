import React from "react";
import Navbar from "../components/Landing/Navbar";
import Heroes from "../components/About/Heroes";
import Purpose from "../components/About/Purpose";
import Values from "../components/About/Values";
import Roles from "../components/About/Roles";
import Commitment from "../components/About/Commitment";
import Curiosity from "../components/Landing/Curiosity";
import Footer from "../components/Landing/Footer";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col text-ink">
      <Navbar />

      <section className="pb-20">
        <Heroes />
      </section>

      <section className="bg-surface">
        <Purpose />
      </section>

      <section>
        <Values />
      </section>

      <section>
        <Roles />
      </section>

      <section className="bg-tint-yellow">
        <Commitment />
      </section>

      <section>
        <Curiosity />
      </section>

      <footer className="bg-surface">
        <Footer />
      </footer>
    </div>
  );
};

export default page;
