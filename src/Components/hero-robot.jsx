import React from "react";
import Spline from "@splinetool/react-spline";

const HeroRobot = ({ isDarkMode }) => {
  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center transition-all duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* Full-screen Spline Component */}
      <Spline
        scene="https://prod.spline.design/7DPs4FqpnpeqIXjP/scene.splinecode"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroRobot;
