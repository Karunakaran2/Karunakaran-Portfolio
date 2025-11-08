import React from "react";
import { motion } from "framer-motion";
import { Mail, Code2, Cpu, Rocket } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";

const Name = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function About() {
  const { state } = useTheme();
  const isDark = state.darkMode;

  const textColor = isDark ? "text-gray-300" : "text-gray-800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className=""
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* ===== Left: Image Card ===== */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="lg:col-span-4 md:col-span-5 flex justify-center"
        >
          <div className="relative w-[260px] sm:w-[300px] h-[340px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={
                isDark
                  ? "./images/aboutMe/Perfect - dark.png"
                  : "./images/aboutMe/Perfect - light.png"
              }
              alt="Karunakaran"
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001925]/80 via-transparent"></div>
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-2xl text-white font-semibold">Karunakaran</h3>
              <p className="text-sm opacity-80 text-white">Frontend Developer</p>
            </div>
          </div>
        </motion.div>

        {/* ===== Right: Text Section ===== */}
        <div
          className={`lg:col-span-8 md:col-span-7 flex flex-col gap-8 ${textColor}`}
        >
          {/* Intro Text */}
          <p className="text-base sm:text-lg leading-relaxed">
            Hey there 👋 I’m <Name className="font-semibold">Karunakaran</Name>,
            a{" "}
            <span className="font-medium text-orange-400">
              frontend developer
            </span>{" "}
            passionate about crafting smooth, responsive, and elegant user
            experiences using <strong>React, Vite, and Tailwind CSS</strong>.
            <br />
            <br />I love writing clean, efficient code and building interfaces
            that feel natural and lightning-fast. My focus is on{" "}
            <span className="font-medium text-blue-400">
              performance, scalability, and intuitive design
            </span>
            .
          </p>

          {/* Highlights / Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              {
                icon: <Code2 className="mx-auto text-orange-400" size={28} />,
                label: "Clean Code",
                desc: "Focused on reusable, maintainable React components",
              },
              {
                icon: <Cpu className="mx-auto text-blue-400" size={28} />,
                label: "Performance",
                desc: "Optimizing load time & smooth animations",
              },
              {
                icon: <Rocket className="mx-auto text-pink-400" size={28} />,
                label: "Innovation",
                desc: "Exploring UI/UX trends and new dev tools",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`rounded-xl p-4 bg-opacity-10 border border-gray-700/40 backdrop-blur-md ${
                  isDark ? "bg-gray-800/40" : "bg-white/40"
                }`}
              >
                {item.icon}
                <h4 className="font-semibold mt-2">{item.label}</h4>
                <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          {/* Contact Button */}
          <motion.a
            href="mailto:karunakaran1.dn@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="w-fit shadow-md modern-btn"
          >
            <Mail size={18} />
            <span>Say Hello</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
