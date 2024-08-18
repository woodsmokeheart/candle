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
        Candle is the best
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {""} product for people
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
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
        <p className="text-green-500 text-center mt-2">
          CA copied.
        </p>
      )}
      <div className="flex justify-center my-10">
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
