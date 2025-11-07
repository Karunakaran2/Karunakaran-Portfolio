import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
import { HashLink } from "react-router-hash-link";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(12px);
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(15,23,42,0.85)" : "rgba(255,255,255,0.75)"};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.3s ease;
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $scrolled }) => ($scrolled ? "0.6rem 0" : "1rem 0")};
`;

const Logo = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(HashLink)`
  color: ${({ theme }) => theme.colors.subtext};
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Navbar() {
  const { state, dispatch } = useTheme();
  const isDark = state.darkMode;
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      let current = "home";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= 120) current = id;
        }
      });
      setActiveSection(current);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Header $dark={isDark} $scrolled={scrolled}>
      <NavContainer $scrolled={scrolled} className="">
        <Logo href="#home" $dark={isDark}>
          Karan<span>.</span>
        </Logo>

        <NavLinks>
          {["home", "about", "skills", "experience", "projects", "contact"].map(
            (section) => (
              <StyledNavLink
                key={section}
                smooth
                to={`#${section}`}
                className={activeSection === section ? "active" : ""}
                $dark={isDark}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </StyledNavLink>
            )
          )}
        </NavLinks>
        <ThemeToggle />
      </NavContainer>
    </Header>
  );
}
