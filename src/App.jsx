import { useState } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
// import { ThemeProvider } from "./context/ThemeContext";
import { getAppTheme } from "./theme/theme";
import { useTheme } from "./context/ThemeContext";
import useScrollToTop from "./hooks/useScrollToTop";
import useToggleBodyClass from "./hooks/useToggleBodyClass";
import ThemeToggle from "./components/ThemeToggle";

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

function App() {
  const { state } = useTheme();
  // useScrollToTop();
  // useToggleBodyClass(state.darkMode);
  const muiTheme = getAppTheme(state.darkMode);
  return (
    <>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </MuiThemeProvider>
    </>
  );
}

export default App;
