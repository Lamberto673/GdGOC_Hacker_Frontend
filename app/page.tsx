import Navbar from "./components/Landing/Navbar";
import HeroesLayout from "./components/Landing/HeroesLayout";
import CampusCommunity from "./components/Landing/CampusCommunity";
import Interest from "./components/Landing/Interest";
import MoreClassroom from "./components/Landing/MoreClassroom";
import ProtoType from "./components/Landing/ProtoType";
import MakeYourFirstMove from "./components/Landing/MakeYourFirstMove";
import FAQ from "./components/Landing/FAQ";
import GreenStar from "./components/Landing/GreenStar";
import Curiosity from "./components/Landing/Curiosity";
import Footer from "./components/Landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-ink">
      <Navbar />
      {/* Hero Session */}
      <section className="flex flex-col">
        <HeroesLayout />
      </section>

      <section>
        <CampusCommunity />
        <Interest />
      </section>

      <section className="bg-surface">
        <MoreClassroom />
      </section>

      <section>
        <ProtoType />
      </section>

      <section>
        <MakeYourFirstMove />
      </section>

      <section className="bg-tint-green">
        <GreenStar />
      </section>

      <section>
        <FAQ />
      </section>
      <section>
        <Curiosity />
      </section>

      <footer className="bg-surface">
        <Footer />
      </footer>
    </div>
  );
}
