import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Message cannot be empty");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mrbrzewe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="from-gray-50 to-white dark:from-[#0b1220] dark:to-[#0f172a]">
      <div className="mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        {" "}
        {/* Left Side */}{" "}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <h2 className="text-4xl font-bold color-text mb-4">
            {" "}
            Let’s work <span className="color-text-secondary">
              together
            </span> 🚀{" "}
          </h2>{" "}
          <p className=" mb-6 leading-relaxed">
            {" "}
            Got a project or idea you’d like to discuss? Fill out the form and
            I’ll get back to you as soon as possible.{" "}
          </p>{" "}
          {/* <div className="flex gap-4 text-xl text-gray-600 dark:text-gray-300">
            {" "}
            <a
              href="mailto:karan@example.com"
              className="hover:text-red-600 transition"
            >
              {" "}
              <MdEmail />{" "}
            </a>{" "}
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition"
            >
              {" "}
              <FaGithub />{" "}
            </a>{" "}
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition"
            >
              {" "}
              <FaLinkedin />{" "}
            </a>{" "}
            <a
              href="https://instagram.com/yourinsta"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition"
            >
              {" "}
              <FaInstagram />{" "}
            </a>{" "}
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition"
            >
              {" "}
              <FaXTwitter />{" "}
            </a>{" "}
          </div>{" "} */}
        </motion.div>{" "}
        {/* Right Side (Form) */}{" "}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="shadow-md rounded-2xl p-8 space-y-5 border border-gray-200 dark:border-gray-700"
        >
          {" "}
          <div>
            {" "}
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-1 color-text"
            >
              {" "}
              Name{" "}
            </label>{" "}
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 color-text focus:ring-2 focus:ring-red-600"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-1 color-text"
            >
              {" "}
              Email{" "}
            </label>{" "}
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full rounded-lg border border-gray-300 color-text  focus:ring-2 focus:ring-red-600"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-1 color-text"
            >
              {" "}
              Message{" "}
            </label>{" "}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              required
              placeholder="Type your message..."
              className="w-full rounded-lg border border-gray-300 color-text focus:ring-2 focus:ring-red-600"
            ></textarea>{" "}
          </div>{" "}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-button from-red-600 to-rose-600 hover:from-rose-600 hover:to-red-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            {" "}
            {isSubmitting ? "Sending..." : "Send Message"}{" "}
          </button>{" "}
        </motion.form>{" "}
      </div>{" "}
    </section>
  );
};
export default Contact;
