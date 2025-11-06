import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background: ${({ $dark }) => ($dark ? "#1e1e2e" : "#f9f9f9")};
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    width: ${({ $open }) => ($open ? "240px" : "0")};
    overflow: hidden;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2rem 1rem;
  gap: 1rem;
  text-align: right;
`;

const NavItem = styled(HashLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.15rem;
  color: ${({ $dark }) => ($dark ? "rgba(255,255,255,0.6)" : "#555")};
  transition: all 0.3s ease;
  position: relative;

  &.active {
    color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
  }

  &:hover {
    color: #007bff;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    right: 0;
    width: 0;
    height: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, #5e42a6, #b74e91);
    transition: width 0.3s ease;
  }

  &.active::after,
  &:hover::after {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  margin-left: 240px;
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const MobileToggle = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1200;
  background: ${({ $dark }) => ($dark ? "#2a2a3a" : "#fff")};
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    color: ${({ $dark }) => ($dark ? "#fff" : "#333")};
    font-size: 1.4rem;
  }
`;

export default function Sidebar({ children }) {
  const { state } = useTheme();
  const isDark = state.darkMode;
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= 120) current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MobileToggle $dark={isDark} onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </MobileToggle>

      <SidebarWrapper $dark={isDark} $open={open}>
        <Nav>
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <NavItem
              key={section}
              smooth
              to={`#${section}`}
              className={activeSection === section ? "active" : ""}
              $dark={isDark}
              onClick={() => setOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </NavItem>
          ))}
          <ThemeToggle />
        </Nav>
      </SidebarWrapper>

      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}
