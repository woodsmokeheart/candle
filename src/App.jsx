import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Roadmap from "./components/Roadmap";
import Chart from "./components/Chart";
import Tokenomics from "./components/Tokenomics";
import { Link } from "react-router-dom";

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
        <div className="flex flex-col items-center justify-center mt-20 mb-20">
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "100px",
                overflow: "hidden",
                filter: "invert(100%)",
                border: "1px solid black",
              }}
            >
              <Link to="/">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/internet--v1.png"
                  alt="internet--v1"
                />
              </Link>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "100px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 20px",
                width: "50px",
                height: "50px",
                filter: "invert(100%)",
                border: "1px solid black",
              }}
            >
              <Link to="https://t.me/candle_ton">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios/50/telegram-app.png"
                  alt="telegram-app"
                />
              </Link>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "100px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50px",
                height: "50px",
                filter: "invert(100%)",
                border: "1px solid black",
              }}
            >
              <Link to="https://x.com/Candle_TON">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios/50/twitterx--v2.png"
                  alt="twitterx--v2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
