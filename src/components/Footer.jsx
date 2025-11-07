import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="container relative from-gray-950 via-gray-900 to-gray-800 text-gray-300">
      {/* Social + Nav */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-6 text-gray-400">
          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-red-400 transition transform hover:scale-110"
            aria-label="Gmail"
          >
            <MdEmail size={23} />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://x.com/yourtwitter"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition transform hover:scale-110"
            aria-label="X"
          >
            <FaXTwitter size={22} />
          </a>
          <a
            href="https://instagram.com/yourinsta"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
        </div>

        {/* Footer Navigation */}
        <ul className="flex gap-6 text-sm flex-wrap justify-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 pb-10">
        © {new Date().getFullYear()} Karan — Built with ❤️ using React &
        Tailwind CSS.
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}

      {/* <Typography variant="body2">
        © {new Date().getFullYear()} Karunakaran. Built with ❤️ using React.
      </Typography> */}
    </footer>
  );
}
