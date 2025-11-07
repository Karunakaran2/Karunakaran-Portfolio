import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="mx-auto">
        {/* Highlight Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
            Let’s Connect
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-6">
            Open for opportunities and collaborations — reach out via email or
            LinkedIn.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:yourmail@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full font-medium transition text-white shadow-md"
            >
              <MdEmail className="inline mr-2 text-lg" />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-400 hover:bg-blue-600 hover:text-white text-blue-400 px-5 py-2.5 rounded-full font-medium transition"
            >
              <FaLinkedin className="inline mr-2 text-lg" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 my-8"></div>
      </div>
      <Footer />
    </>
  );
}
