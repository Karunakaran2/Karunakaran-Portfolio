import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Card } from "@mui/material";
import { Mail } from "lucide-react";

export default function About() {
  const { state } = useTheme();
  const textColor = state.darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <section
      id="about-me"
      className={`transition-colors duration-300 ${
        state.darkMode ? "bg-[#001925]" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative"
      >
        {/* Title */}
        <h2 className="text-5xl font-bold text-[#87A4B6] mb-8 leading-tight">
          About <br /> <span className="text-[#FF7A01]">Karunakaran</span>
        </h2>

        {/* Flex container */}
        <div className="flex flex-wrap items-center justify-between gap-10">
          {/* Left image section */}
          <div className="relative w-[400px] h-[400px] max-sm:w-[300px] max-sm:h-[300px] mx-auto">
            <div className="absolute bottom-0 w-[80%] h-[80%] bg-[#013747] -z-10"></div>
            <div className="absolute left-2 bottom-2 h-full">
              <img
                src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/black.jpg"
                alt="bg"
                className="h-full object-cover"
              />
            </div>
            <div className="absolute left-[25%] top-[5%] w-[70%] h-[70%] overflow-hidden rounded-xl shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer">
              <img
                src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/smit.jpg"
                alt="karunakaran"
                className="object-cover w-full h-full transform scale-125 hover:scale-100 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col items-center sm:items-start gap-6 max-w-xl text-center sm:text-left mx-auto">
            {/* <img
              src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/logo.svg"
              alt="logo"
              className="w-40 drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]"
            /> */}
            <a
              href="#home"
              className="w-40 text-5xl font-semibold text-[#FF7A01]"
            >
              Karan.
            </a>
            <p className={`text-lg font-semibold ${textColor} text-start`}>
              I’m Karunakaran — a passionate Frontend Developer focused on
              crafting elegant, production-ready web apps using React, Vite, and
              Tailwind. I enjoy turning ideas into clean, efficient, and
              user-friendly experiences.
              <br />
              <br />
              My work reflects attention to detail and a love for both design
              and performance optimization.
            </p>
          </div>
        </div>

        {/* Mail button */}
        <motion.a
          href="mailto:karunakaran@example.com"
          className="absolute bottom-0 left-0 bg-[#001925] border-[10px] border-[#001925] rounded-full p-4 hover:bg-[#FF7A01] hover:border-[#FF7A01] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <Mail
            className="text-[#FF7A01] hover:text-white transition-all duration-300"
            size={32}
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
