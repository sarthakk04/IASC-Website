import React from "react";
import { motion } from "framer-motion";

const Gallery = ({ isDarkMode }) => {
  const galleryItems = [
    {
      id: 1,
      image: "../assets/event1.jpg",
      title: "Hackathon 2024",
      description:
        "An exhilarating 48-hour coding sprint with talented developers.",
    },
    {
      id: 2,
      image: "../assets/event1.jpg",
      title: "AI Workshop",
      description: "A deep dive into the world of artificial intelligence.",
    },
    {
      id: 3,
      image: "../assets/event1.jpg",
      title: "Networking Meetup",
      description:
        "Connecting tech enthusiasts for collaboration and innovation.",
    },
    {
      id: 4,
      image: "../assets/event1.jpg",
      title: "Tech Expo",
      description: "Showcasing groundbreaking technologies and projects.",
    },
  ];

  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-11/12 max-w-7xl mx-auto py-16">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {isDarkMode ? "✨ Our Gallery ✨" : "🌟 Our Gallery 🌟"}
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:opacity-75 transition-all duration-300"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                  isDarkMode ? "from-black" : "from-gray-800"
                }`}
              ></div>
              {/* Content */}
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
