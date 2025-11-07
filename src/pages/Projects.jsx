import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/project";
import { useTheme } from "../context/ThemeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const { state } = useTheme();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  return (
    <div
      className={` from-white to-gray-50 ${
        state.darkMode ? "" : "bg-gradient-to-b"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative rounded-2xl shadow-md overflow-hidden border border-light group cursor-pointer ${
                state.darkMode ? "" : "bg-white"
              }`}
            >
              {/* Badge */}
              <div
                className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${
                  project.tag === "Ongoing"
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                    : "bg-gradient-to-r from-green-500 to-emerald-400 text-white"
                }`}
              >
                {project.tag}
              </div>

              {/* Image */}

              <div className="carousal overflow-hidden h-48 bg-gray-100">
                <Slider {...sliderSettings} className="banner-slider">
                  {project.img.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  ))}
                </Slider>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 group-hover:text-red-600 transition ${
                    state.darkMode ? "" : "text-gray-800"
                  }`}
                >
                  {project.name}
                </h3>
                <p
                  className={` text-sm leading-relaxed mb-4 ${
                    state.darkMode ? "" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition">
                  View Project
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
