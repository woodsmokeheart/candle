import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <div id="dexscreener-embed" style={{ marginTop: "60px" }}>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-40 tracking-wide mb-10">
            Token{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Graph
            </span>
          </h2>
          <iframe
            src="https://dexscreener.com/ton/EQCaY8Ifl2S6lRBMBJeY35LIuMXPc8JfItWG4tl7lBGrSoR2?embed=1&theme=dark"
            style={{ width: "100%", height: "700px", border: "none" }}
          ></iframe>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
