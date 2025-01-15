import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/p1.jpg";

const OurTeam = ({ isDarkMode }) => {
  const teamMembers = [
    {
      id: 1,
      name: "Jane Doe",
      designation: "Frontend Developer",
      image: profileImg,
      linkedIn: "https://linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
    },
    {
      id: 2,
      name: "John Smith",
      designation: "Backend Developer",
      image: profileImg,
      linkedIn: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      designation: "UI/UX Designer",
      image: profileImg,
      linkedIn: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson",
    },
    {
      id: 4,
      name: "Michael Brown",
      designation: "Full Stack Developer",
      image: profileImg,
      linkedIn: "https://linkedin.com/in/michaelbrown",
      github: "https://github.com/michaelbrown",
    },
    {
      id: 5,
      name: "Emily Davis",
      designation: "Project Manager",
      image: profileImg,
      linkedIn: "https://linkedin.com/in/emilydavis",
      github: "https://github.com/emilydavis",
    },
    {
      id: 6,
      name: "Chris Wilson",
      designation: "Data Scientist",
      image: profileImg,
      linkedIn: "https://linkedin.com/in/chriswilson",
      github: "https://github.com/chriswilson",
    },
  ];

  return (
    <section
      className={`min-h-screen w-full py-16 flex items-center justify-center transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-11/12 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          {isDarkMode ? "✨ Meet Our Team ✨" : "🌟 Meet Our Team 🌟"}
        </h2>
        <div
          className="overflow-hidden relative"
          style={{ maxWidth: "100%", padding: "0 16px" }}
        >
          <motion.div
            className="flex gap-12"
            initial={{ x: 0 }}
            animate={{
              x:
                teamMembers.length > 4
                  ? `-${(teamMembers.length - 4) * 100}%`
                  : 0,
            }}
            transition={{
              duration: teamMembers.length > 4 ? teamMembers.length * 2 : 0,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className={`flex flex-col items-center bg-opacity-50 rounded-lg p-6 ${
                  isDarkMode
                    ? "bg-gradient-to-b from-gray-800 to-gray-700 shadow-blue-500/20"
                    : "bg-gradient-to-b from-gray-200 to-white shadow-gray-400/30"
                } shadow-lg`}
              >
                {/* Profile Image */}
                <div className="w-32 h-32 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-opacity-50"
                    style={{
                      borderColor: isDarkMode ? "#4f46e5" : "#d1d5db",
                    }}
                  />
                </div>

                {/* Name and Designation */}
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDarkMode ? "text-blue-400" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h3>
                <p className="text-sm mb-4">{member.designation}</p>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-blue-500 transition duration-300"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-gray-600 transition duration-300"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
