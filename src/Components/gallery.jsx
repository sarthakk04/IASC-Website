import React from "react";
import { motion } from "framer-motion";
import hacktoberfest from "../assets/hactoberfest.jpg";
import bit from "../assets/bit.jpg";
import eventImg from "../assets/event1.jpg";
import magnitude from "../assets/magnitude.jpg";

const Gallery = ({ isDarkMode }) => {
  const galleryItems = [
    {
      id: 1,
      image: hacktoberfest,
      title: "Hacktoberfest 2024",
      description: "Unlock the power of open source - your code, your impact",
    },
    {
      id: 2,
      image: bit,
      title: "Breaking into Tech",
      description: "Hear the inspiring journey of an Full Stack AI Developer",
    },
    {
      id: 3,
      image: magnitude,
      title: "MAGNITUDE",
      description: "A Hackathon from Innovation & Impact",
    },
    {
      id: 4,
      image: eventImg,
      title: "Tech Expo",
      description: "Showcasing groundbreaking technologies and projects.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-11/12 max-w-7xl mx-auto py-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          {isDarkMode ? "✨ Our Gallery ✨" : "🌟 Our Gallery 🌟"}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className={`relative group rounded-xl overflow-hidden shadow-lg ${
                isDarkMode ? "shadow-blue-500/20" : "shadow-gray-400/30"
              }`}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              {/* Image */}
              <div className="overflow-hidden w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-6 ${
                  isDarkMode
                    ? "bg-gradient-to-b from-transparent to-black/80"
                    : "bg-gradient-to-b from-transparent to-white/80"
                }`}
              >
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-2 ${
                    isDarkMode ? "text-blue-400" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
