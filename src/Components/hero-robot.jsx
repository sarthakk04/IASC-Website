import React from "react";
import Spline from "@splinetool/react-spline";

const HeroRobot = ({ isDarkMode }) => {
  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{
        position: "relative",
        overflow: "hidden", // Prevents scrolling overflow
      }}
    >
      {/* Block to cover the watermark */}
      <div
        className={`hidden md:block transition-all duration-300 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
        style={{
          position: "relative",
          height: "40px",
          width: "200px",
          left: "1350px",
          top: "310px",
          zIndex: 15,
        }}
      ></div>

      {/* Desktop View: Spline Component */}
      <div className="hidden md:block w-full h-full">
        <Spline
          scene="https://prod.spline.design/7DPs4FqpnpeqIXjP/scene.splinecode"
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0, // Ensures the Spline stays in the background
          }}
        />
      </div>

      {/* Mobile View: Image, Title, and Description */}
      <div className="block md:hidden flex flex-col items-center justify-center text-center p-6">
        {/* Image Placeholder */}
        <img
          src={isDarkMode ? "/robot-dark.png" : "/robot-light.png"}
          alt="Hero Robot"
          className="w-2/3 max-w-xs mb-4"
        />
        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">
          {isDarkMode
            ? "Explore the Night Vision 🌌"
            : "Welcome to Bright Horizons 🌟"}
        </h1>
        {/* Description */}
        <p className="text-sm md:text-base">
          {isDarkMode
            ? "Dive into the world of creativity with a touch of innovation under the stars."
            : "Experience cutting-edge technology and boundless imagination in daylight."}
        </p>
      </div>
    </section>
  );
};

export default HeroRobot;
