import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, skillsData } from "../data/skills";
import { useTheme } from "../context/ThemeContext";

export default function Skills() {
  const { state } = useTheme();
  const isDark = state.darkMode;

  const bgColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";
  const textColor = isDark ? "text-gray-300" : "text-gray-800";

  const [selected, setSelected] = useState("All");

  const allSkills = Object.values(skillsData).flat();
  const filteredSkills =
    selected === "All" ? allSkills : skillsData[selected] || [];

  return (
    <div className="text-center">
      {/* <h2 className="text-4xl font-bold mb-8 text-blue-400">Skills</h2> */}

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-3 font-medium transition-all duration-300 ${
              selected === cat
                ? "bg-button text-white scale-105"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mx-auto"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`${bgColor} w-100 rounded-xl p-4 flex gap-3 items-center hover:shadow-blue-500/20 cursor-pointer transform transition-all hover:-translate-y-2 shadow-sm border border-light`}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 h-14 object-contain"
              />
              <p className="mb-0 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
