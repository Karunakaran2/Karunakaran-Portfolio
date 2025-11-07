import React from "react";
import { motion } from "framer-motion";
import { Mail, Code2, Cpu, Rocket } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";

const Name = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
const SectionSubTitle = styled.p`
  color: ${({ theme }) => theme.colors.subtext};
`;

export default function About() {
  const { state } = useTheme();
  const isDark = state.darkMode;

  const bgColor = isDark ? "bg-[#001925]" : "bg-gray-50";
  const textColor = isDark ? "text-gray-300" : "text-gray-800";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=""
      >
        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-10">
          {/* Image Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="col-span-12 md:col-span-3 lg:col-span-4 mx-auto"
          >
            <div className="relative w-[300px] h-[360px] md:w-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] bg-gradient-to-br from-[#013747] to-[#0f2b33]">
              <img
                src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/smit.jpg"
                alt="Karan"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001925]/70 to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-2xl font-semibold">Karunakaran</h3>
                <p className="text-sm text-gray-300">Frontend Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <div
            className={`col-span-12 md:col-span-9 lg:col-span-8 flex flex-col gap-6 ${textColor}`}
          >
            <p className="text-lg leading-relaxed">
              Hey there 👋 I’m{" "}
              <Name className="text-orange-400 font-semibold">Karunakaran</Name>
              , a frontend developer who loves crafting smooth, responsive, and
              clean user interfaces using{" "}
              <strong>React, Vite, and Tailwind</strong>.
              <br />
              <br />I believe great design is invisible — it just feels right.
              I’m passionate about performance, accessibility, and writing code
              that looks as elegant as the UI it powers.
            </p>

            {/* Fun facts / Highlights */}
            <div className="grid grid-cols-3 gap-4 text-center">
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

            {/* Email Button */}
            <motion.a
              href="mailto:karunakaran@example.com"
              whileHover={{ scale: 1.05 }}
              className="w-fit shadow-md modern-btn"
            >
              <Mail size={20} />
              <span>Say Hello</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
