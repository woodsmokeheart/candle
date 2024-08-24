import { useState, useEffect } from "react";
import home1 from "./assets/logo5.png";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("September 1, 2024 00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="rounded-lg w-1/2 mb-10 overflow-hidden">
          <img src={home1} alt="Coding" />
        </div>
        <h1 className="text-2xl mb-10">launch app via...</h1>
        <div className="text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text mb-10">
          <span>{timeLeft.days}</span>:
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
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
  );
};

export default DashboardPage;
