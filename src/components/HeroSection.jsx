import { useState } from "react";
// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = "EQAiF9cczs48m0nA46L9uUiftFGugaGV8BijubeGa7SxZmaU";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Candle is a DeFi platform
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {""} built on the TON
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Additionally, Candle’s native token, $CNDL, serves as a utility token
        within the platform. Holders of $CNDL benefit from receiving a
        percentage of service fees, making it a valuable long-term investment.
        To ensure high liquidity and protect early investors, the $CNDL token
        features a unique sales fee structure, which starts at 90% and gradually
        decreases over time. This approach encourages sustainable growth and
        prevents premature asset sales.
      </p>
      <p
        className="mt-10 text-lg text-center text-neutral-500 max-w-4xl bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text break-all cursor-pointer"
        onClick={copyToClipboard}
      >
        CA :{" "}
        <span className="font-bold">
          EQAiF9cczs48m0nA46L9uUiftFGugaGV8BijubeGa7SxZmaU
        </span>
      </p>
      {isCopied && (
        <p className="text-green-500 text-center mt-2">CA copied.</p>
      )}
      <div className="flex justify-center my-10">
        <Link to="/dashboard">
          <button className="py-3 px-4 mx-3 border rounded-md">
            Go to App
          </button>
        </Link>
        <a
          href="https://dedust.io/"
          target="_blank"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          buy on DeDust
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <div className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 overflow-hidden">
          <img src={home1} alt="Coding" />
        </div>
        <div className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 overflow-hidden">
          <img src={home2} alt="Coding" />
        </div>
        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default HeroSection;
