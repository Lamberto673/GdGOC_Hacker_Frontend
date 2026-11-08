import React from "react";
import Navbar from "../components/Landing/Navbar";
import Heroes from "../components/Overview/Heroes";
import SectionNav from "../components/Overview/SectionNav";
import Tracks from "../components/Overview/Tracks";
import Outcomes from "../components/Overview/Outcomes";
import Formats from "../components/Overview/Formats";
import Journey from "../components/Overview/Journey";
import StartingPoint from "../components/Overview/StartingPoint";
import Curiosity from "../components/Landing/Curiosity";
import Footer from "../components/Landing/Footer";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col text-ink">
      <Navbar />

      <section>
        <Heroes />
        <SectionNav />
      </section>

      <section id="tracks" className="scroll-mt-26">
        <Tracks />
        <Outcomes />
      </section>

      <section id="formats" className="scroll-mt-26 bg-surface">
        <Formats />
      </section>

      <section id="journey" className="scroll-mt-26">
        <Journey />
      </section>

      <section id="start" className="scroll-mt-26 bg-tint-yellow">
        <StartingPoint />
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
