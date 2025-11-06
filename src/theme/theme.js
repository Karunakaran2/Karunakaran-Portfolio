import { createTheme } from "@mui/material/styles";

export const getAppTheme = (isDark) =>
  createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: { main: isDark ? "#90caf9" : "#1976d2" },
      background: {
        default: isDark ? "#0f172a" : "#f9fafb",
        paper: isDark ? "#0b1220" : "#fff",
      },
      text: { primary: isDark ? "#fff" : "#111" },
    },
    typography: { fontFamily: "Inter, sans-serif" },
  });
