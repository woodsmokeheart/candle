import { useState } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = "EQAiF9cczs48m0nA46L9uUiftFGugaGV8BijubeGa7SxZmaU";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Убираем сообщение через 2 секунды
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Candle is a comprehensive DeFi platform
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {""} built on the TON blockchain
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Offers custom TON Jetton deployment, a bridge and DEX seamless asset
        transfers, and a staking service for developers. Its native token,
        $CNDL, provides utility and rewards holders with a share of service
        fees, making it a strong long-term investment.
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
        <a href="#" className="py-3 px-4 mx-3 border rounded-md">
          Dashboard
        </a>
        <a
          href="https://dedust.io/"
          target="_blank"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          buy on DeDust
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
