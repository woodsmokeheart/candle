import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Roadmap from "./components/Roadmap";
import Chart from "./components/Chart";
import Tokenomics from "./components/Tokenomics";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="features">
          <FeatureSection />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
        <section id="chart">
          <Chart />
        </section>
        <section id="tokenomics">
          <Tokenomics />
        </section>
      </div>
    </>
  );
};

export default App;
