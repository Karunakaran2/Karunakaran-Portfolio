import { useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
// import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";
import useScrollToTop from "./hooks/useScrollToTop";
import useToggleBodyClass from "./hooks/useToggleBodyClass";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";

import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const { state } = useTheme();
  const isDark = state.darkMode;
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  // useScrollToTop();
  // useToggleBodyClass(state.darkMode);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
