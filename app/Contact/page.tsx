import React from "react";
import Navbar from "../components/Landing/Navbar";
import Heroes from "../components/Contact/Heroes";
import Workspace from "../components/Contact/Workspace";
import Guidance from "../components/Contact/Guidance";
import Footer from "../components/Landing/Footer";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col text-ink">
      <Navbar />

      <section>
        <Heroes />
        <Workspace />
      </section>

      <section className="border-t border-line">
        <Guidance />
      </section>

      <footer className="bg-surface">
        <Footer />
      </footer>
    </div>
  );
};

export default page;
