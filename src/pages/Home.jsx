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

export default function Home() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* <Navbar></Navbar> */}{" "}
      <BannerSection id="home">
        <Banner />
      </BannerSection>
      <Section id="about" className="container">
        <About />
      </Section>
      <Section id="skills" className="container">
        <Skills />
      </Section>
      <Section id="projects" className="container">
        <Projects />
      </Section>
      <Section id="contact" className="container">
        <Contact />
      </Section>
    </div>
  );
}
