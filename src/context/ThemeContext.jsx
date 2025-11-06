import React, { createContext, useReducer, useContext, useEffect } from "react";

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { darkMode: !state.darkMode };
    case "SET":
      return { darkMode: action.payload };
    default:
      return state;
  }
};

const initialState = () => {
  try {
    const stored = localStorage.getItem("kp-dark");
    if (stored === "true") return { darkMode: true };
    if (stored === "false") return { darkMode: false };
  } catch (e) {}
  return { darkMode: false };
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, undefined, initialState);

  useEffect(() => {
    try {
      localStorage.setItem("kp-dark", state.darkMode);
    } catch (e) {}
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
