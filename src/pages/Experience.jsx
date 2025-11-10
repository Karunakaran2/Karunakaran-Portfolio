import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../data/experience";
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = experiences[activeIndex];
  const { state } = useTheme();

  return (
    <div
      className={`relative from-gray-50  ${
        state.darkMode ? "" : "bg-gradient-to-b to-white"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side – Company List */}
          <div className="md:w-1/3 flex flex-col gap-4">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group text-left rounded-xl px-5 py-4 transition-all duration-300 ${
                  activeIndex === index
                    ? `from-red-500 to-pink-500 text-white scale-[1.02] ${
                        state.darkMode ? "border bg-gray-900" : "bg-gray-100"
                      }`
                    : `border border-gray-200 hover:shadow-md ${
                        state.darkMode
                          ? ""
                          : "hover:bg-gray-50 bg-white text-gray-700"
                      }`
                }`}
              >
                <h4
                  className={`text-lg font-semibold color-text ${
                    activeIndex === index ? "color-text-primary" : ""
                  }`}
                >
                  {exp.company}
                </h4>
                <p
                  className={`text-sm mt-1 ${
                    activeIndex === index
                      ? "color-text-primary"
                      : "text-gray-500"
                  }`}
                >
                  {exp.role}
                </p>
              </button>
            ))}
          </div>

          {/* Right Side – Details */}
          <div className="md:w-2/3 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={` border border-gray-100 shadow-xl rounded-2xl p-8 backdrop-blur-sm ${
                  state.darkMode ? "" : "bg-white"
                }`}
              >
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-1 ${
                    state.darkMode ? "" : "text-gray-800"
                  }`}
                >
                  {activeExp.role}
                </h3>
                <p
                  className={`mb-2 font-medium ${
                    state.darkMode ? "" : "text-gray-600"
                  }`}
                >
                  {activeExp.company} • {activeExp.type}
                </p>
                <p
                  className={`text-sm mb-6 ${
                    state.darkMode ? "" : "text-gray-400"
                  }`}
                >
                  {activeExp.duration} | {activeExp.location}
                </p>

                <ul
                  className={`space-y-3 leading-relaxed m-0 p-0 ${
                    state.darkMode ? "" : "text-gray-700"
                  }`}
                >
                  {activeExp.details.map((line, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeExp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-red-100 to-pink-100 text-red-700 font-medium border border-red-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
