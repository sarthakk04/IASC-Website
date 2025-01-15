import React from "react";

const aims = [
  {
    title: "🎓 Education and Skill Development",
    description:
      "We are dedicated to fostering education and skill development through workshops, projects, and networking, empowering members to excel in the ever-evolving tech landscape.",
  },
  {
    title: "🤝 Collaboration and Networking",
    description:
      "We encourage collaboration and networking as they foster innovation, enhance productivity, and drive professional growth, ultimately leading to greater achievements and continuous development.",
  },
  {
    title: "🚀 Innovation and Research",
    description:
      "We champion innovation and research for their critical role in driving progress, advancing knowledge, and achieving excellence, fostering a culture of continuous improvement and groundbreaking discoveries.",
  },
];

const OurAim = ({ isDarkMode }) => {
  return (
    <section
      className={`min-h-screen w-full flex flex-col items-center justify-center py-12 px-6 transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Section Heading */}
      <h1 className="text-4xl font-bold mb-10">
        {isDarkMode
          ? "🌌 Our Aim: Pioneering the Future"
          : "🌟 Our Aim: Pioneering the Future"}
      </h1>

      {/* Aim Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {aims.map((aim, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg transition-all duration-300 ${
              isDarkMode
                ? "bg-[#1a1a1a] hover:bg-[#292929] hover:shadow-[#0071c4] text-white"
                : "bg-gray-100 hover:bg-gray-200 hover:shadow-[#3ea6ff] text-black"
            }`}
          >
            {/* Emoji and Title */}
            <h2 className="text-2xl font-semibold mb-4">{aim.title}</h2>

            {/* Description */}
            <p className="text-base leading-7">{aim.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAim;
