import React from "react";
import Spline from "@splinetool/react-spline";

const HeroSection = ({ isDarkMode }) => {
  return (
    <section
      className={`min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-12 transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      
      {/* Left Section: 3D Element */}
      <div
        className="relative w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
        style={{ overflow: "hidden" }}
      >
        <main>
          <Spline
            scene="https://prod.spline.design/j4eU4IbTy6QUPbft/scene.splinecode"
            style={{
              width: "100%",
              height: "95vh",
              position: "relative",
              top: "-60px",
            }}
          />
        </main>
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {isDarkMode
            ? "Discover the Power of Night 🌙"
            : "Welcome to the Bright Side 🌟"}
        </h1>
        <p className="text-lg md:text-xl mb-8">
          {isDarkMode
            ? "Embrace innovation in the dark with clarity and precision."
            : "Let your ideas shine brighter than ever."}
        </p>
        <button
          className={`px-8 py-4 text-lg font-semibold rounded-lg shadow-md transition ${
            isDarkMode
              ? "bg-[#0071c4] text-white hover:bg-[#005fa3]"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {isDarkMode ? "Explore the Night" : "Get Started"}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
