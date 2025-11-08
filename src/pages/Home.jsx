import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";
import MotionFadeIn from "../components/animations/MotionFadeIn";
import MotionSlideUp from "../components/animations/MotionSlideUp";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Section from "../components/Section";
import Banner from "./Banner";
import BannerSection from "../components/BannerSection";
import Experience from "./Experience";

export default function Home() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* <Navbar></Navbar> */}{" "}
      <BannerSection id="home">
        <Banner />
      </BannerSection>
      <Section
        id="about"
        className="container"
        title="Who I Am"
        subtitle="A Frontend developer crafting clean and creative digital experiences."
      >
        <About />
      </Section>
      <Section
        id="skills"
        className="container"
        title="What I Do Best"
        subtitle="Tools and tech that shape my front-end craft."
      >
        <Skills />
      </Section>
      <Section
        id="experience"
        className="container"
        title="My Journey"
        subtitle="Real-world projects that sharpened my skills."
      >
        <Experience />
      </Section>
      <Section
        id="projects"
        className="container"
        title="Work That Speaks"
        subtitle="A collection of ideas turned into impactful solutions."
      >
        <Projects />
      </Section>
      <Section
        id="contact"
        className="container"
        title="Contact"
        subtitle="Got a project or idea in mind? I’d love to collaborate and bring it to life."
      >
        <Contact />
      </Section>
    </div>
  );
}
