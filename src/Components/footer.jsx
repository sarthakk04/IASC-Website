import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`py-8 px-4 md:px-16 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        {/* Left Section: Logo */}
        <div className="mb-6 md:mb-0">
          <h1
            className={`text-2xl font-bold ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Intel AI Students Club
          </h1>
          {/* <p className="text-sm mt-2">
            Creating experiences, one pixel at a time.
          </p> */}
        </div>

        {/* Center Section: Social Links */}
        <div className="mb-6 md:mb-0 flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl hover:scale-110 transition-transform ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl hover:scale-110 transition-transform ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl hover:scale-110 transition-transform ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl hover:scale-110 transition-transform ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right Section: Additional Content */}
        <div className="text-sm">
          <p>
            <strong>Contact Us:</strong>{" "}
            <a
              href="mailto:support@yourlogo.com"
              className={`underline ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              intelstudentsclubdypcoe@gmail.com
            </a>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="mt-2">Made with ❤️ by IASC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
