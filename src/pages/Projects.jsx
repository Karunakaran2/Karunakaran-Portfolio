import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { categories, projects } from "../data/project";
import { useTheme } from "../context/ThemeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const { state } = useTheme();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("All");

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

  const allProjects = Object.values(projects).flat();
  const filteredProjects =
    selected === "All" ? allProjects : projects[selected] || [];

  return (
    <div
      className={` from-white to-gray-50 ${
        state.darkMode ? "" : "bg-gradient-to-b"
      }`}
    >
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

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                // whileHover={{ y: -5 }}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                // transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative rounded-2xl shadow-md overflow-hidden border border-light group cursor-pointer ${
                  state.darkMode ? "" : "bg-white"
                }`}
              >
                {/* Badge */}
                <div
                  className={`absolute z-1 top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${
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
                        className="w-full h-full object-cover"
                      />
                    ))}
                  </Slider>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 transition ${
                      state.darkMode
                        ? "group-hover:text-red-600"
                        : "group-hover:text-blue-600 text-gray-800"
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

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-medium color-text-primary hover-color-text-primary transition ${
                      project.url === "" ? "d-none" : "d-flex"
                    }`}
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p
            className={`text-lg ${
              state.darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
