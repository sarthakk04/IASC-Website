import React, { useState } from "react";
import lightlogo from "../assets/light-logo.png";
import darklogo from "../assets/dark-logo.png"; // Assuming the dark logo is imported here

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`flex items-center justify-between p-4 shadow-md transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{
        zIndex: 10, // Ensures the Navbar is above the Spline
      }}
    >
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center">
        <span role="img" aria-label="logo" className="mr-2">
          <img
            src={isDarkMode ? darklogo : lightlogo} // Show the correct logo based on the theme
            alt="Logo"
            className="h-12 w-auto transition-all duration-300" // Adjust height and width as needed
          />
        </span>
      </div>

      {/* Links (Desktop View) */}
      <div className="hidden md:flex space-x-6">
        <a
          href="#home"
          className={`hover:underline ${
            isDarkMode ? "hover:text-[#0071c4]" : "hover:text-[#0071c4]"
          }`}
        >
          Home
        </a>
        <a
          href="#events"
          className={`hover:underline ${
            isDarkMode ? "hover:text-[#0071c4]" : "hover:text-[#0071c4]"
          }`}
        >
          Events
        </a>
        <a
          href="#team"
          className={`hover:underline ${
            isDarkMode ? "hover:text-[#0071c4]" : "hover:text-[#0071c4]"
          }`}
        >
          Team
        </a>
      </div>

      {/* Hamburger Menu (Mobile View) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none hover:scale-110 transition"
        >
          {isMenuOpen ? "❌" : "🍔"}
        </button>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="ml-4 text-2xl focus:outline-none hover:scale-110 transition"
      >
        {isDarkMode ? "🌙" : "☀️"}
      </button>

      {/* Dropdown Menu (Mobile View) */}
      {isMenuOpen && (
        <div
          className={`absolute top-16 left-0 w-full shadow-md md:hidden transition-all duration-300 ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
          style={{
            zIndex: 15, // Higher than Spline
          }}
        >
          <a
            href="#home"
            className={`block px-4 py-2 hover:bg-[#0071c4] hover:text-white`}
          >
            Home
          </a>
          <a
            href="#events"
            className={`block px-4 py-2 hover:bg-[#0071c4] hover:text-white`}
          >
            Events
          </a>
          <a
            href="#team"
            className={`block px-4 py-2 hover:bg-[#0071c4] hover:text-white`}
          >
            Team
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
