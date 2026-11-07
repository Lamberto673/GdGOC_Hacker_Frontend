import React from "react";
import Navbar from "../components/Landing/Navbar";
import Heroes from "../components/About/Heroes";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col text-ink">
      <Navbar />

      <section>
        <Heroes />
      </section>
    </div>
  );
};

export default page;
