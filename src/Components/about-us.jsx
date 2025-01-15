import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMedium,
} from "react-icons/fa";
import intelimg from "../assets/intel_logo.png";

const AboutUs = ({ isDarkMode }) => {
  return (
    <section
      className={`min-h-screen w-full flex flex-col md:flex-row items-center justify-center transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Left Side (Image or Graphic) */}
      <div className="md:w-1/2 w-full h-full flex items-center justify-center p-6">
        <img
          src={intelimg}
          alt="About Us"
          className={`w-3/4 max-w-sm rounded-lg shadow-lg transition-all duration-300 ${
            isDarkMode
              ? "shadow-[0_0_20px_5px_#0071c4] filter-brightness-125"
              : "shadow-[0_0_20px_5px_#3ea6ff] filter-brightness-110"
          }`}
        />
      </div>

      {/* Right Side (Content) */}
      <div className="md:w-1/2 w-full flex flex-col items-start justify-center p-6 space-y-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold">
          {isDarkMode
            ? "Intel® Student Ambassador Programs 🌌"
            : "Intel® Student Ambassador Programs 🌟"}
        </h1>

        {/* Description */}
        <p className="text-lg leading-7">
          {isDarkMode
            ? "Undergraduate and graduate students who are passionate about technology and working with developer communities can participate in these programs to promote learning, sharing, and collaboration."
            : "Undergraduate and graduate students who are passionate about technology and working with developer communities can participate in these programs to promote learning, sharing, and collaboration."}
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/iasc_dypcoe"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-all ${
              isDarkMode ? "hover:text-[#E1306C]" : "hover:text-[#E1306C]"
            }`}
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/IASC-DYPCOE"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-all ${
              isDarkMode ? "hover:text-[#6e5494]" : "hover:text-[#6e5494]"
            }`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/company/intel-ai-students-club-dypcoe-official/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-all ${
              isDarkMode ? "hover:text-[#0077b5]" : "hover:text-[#0077b5]"
            }`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://chat.whatsapp.com/JueNGLbz1TE0a3TsQNj84M"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-all ${
              isDarkMode ? "hover:text-[#25D366]" : "hover:text-[#25D366]"
            }`}
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://medium.com/@intelstudentsclubdypcoe"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-all ${
              isDarkMode ? "hover:text-[#00ab6c]" : "hover:text-[#00ab6c]"
            }`}
          >
            <FaMedium />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
