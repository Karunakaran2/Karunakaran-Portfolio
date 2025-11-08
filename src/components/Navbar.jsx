import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
import { HashLink } from "react-router-hash-link";
import { FiMenu, FiX } from "react-icons/fi";
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
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  img {
    width: 50px;
    height: auto;
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

/* ---------- MOBILE MENU ---------- */
const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    z-index: 9999;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $open }) => ($open ? "0" : "-100%")};
  width: 70%;
  height: 100vh;
  background: ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#ffffff")};
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 999;
`;

const MobileLink = styled(HashLink)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function Navbar() {
  const { state } = useTheme();
  const isDark = state.darkMode;
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Header $dark={isDark} $scrolled={scrolled} className="px-3">
      <NavContainer $scrolled={scrolled}>
        <Logo href="#home">
          <img
            src="/images/aboutMe/Karunakaran-Edited.png"
            alt="Karunakaran"
            className="rounded-0"
          />
        </Logo>

        {/* Desktop Nav */}
        <NavLinks>
          {["home", "about", "skills", "experience", "projects", "contact"].map(
            (section) => (
              <StyledNavLink
                key={section}
                smooth
                to={`#${section}`}
                className={activeSection === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </StyledNavLink>
            )
          )}
        </NavLinks>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MobileMenuIcon onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </MobileMenuIcon>
        </div>
      </NavContainer>

      {/* Mobile Menu Drawer */}
      <MobileMenu $open={menuOpen}>
        {["home", "about", "skills", "experience", "projects", "contact"].map(
          (section) => (
            <MobileLink
              key={section}
              smooth
              to={`#${section}`}
              className={activeSection === section ? "active" : ""}
              onClick={closeMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </MobileLink>
          )
        )}
      </MobileMenu>
    </Header>
  );
}
