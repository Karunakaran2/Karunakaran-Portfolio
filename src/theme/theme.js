
export const lightTheme = {
  mode: "light",
  colors: {
    primary: "#007bff",
    secondary: "#c80808",
    accent: "#22c55e",
    text: "#111827",
    subtext: "#374151",
    background: "#f9fafb",
    surface: "#ffffff",
    border: "#e5e7eb",
    highlight: "#fef3c7",
    gradient: "linear-gradient(90deg, #007bff 0%, #00bcd4 100%)",
  },
  shadows: {
    sm: "0 2px 4px rgba(0,0,0,0.05)",
    md: "0 4px 8px rgba(0,0,0,0.1)",
    lg: "0 8px 20px rgba(0,0,0,0.15)",
  },
};

export const darkTheme = {
  mode: "dark",
  colors: {
    primary: "#c80808",
    secondary: "#007bff",
    accent: "#34d399",
    text: "#f9fafb",
    subtext: "#d1d5db",
    background: "#0f172a",
    surface: "#1e293b",
    border: "#334155",
    highlight: "#374151",
    gradient: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)",
  },
  shadows: {
    sm: "0 2px 4px rgba(255,255,255,0.05)",
    md: "0 4px 8px rgba(255,255,255,0.08)",
    lg: "0 8px 20px rgba(255,255,255,0.12)",
  },
};

// import { createTheme } from "@mui/material/styles";

// export const getAppTheme = (isDark) =>
//   createTheme({
//     palette: {
//       mode: isDark ? "dark" : "light",
//       primary: {
//         main: isDark ? "#FF8C1A" : "#FF7A01", // accent orange
//         contrastText: "#fff",
//       },
//       secondary: {
//         main: isDark ? "#FF9D23" : "#FFB547", // warm amber
//       },
//       background: {
//         default: isDark ? "#001925" : "#F9FAFB", // main background
//         paper: isDark ? "#012B39" : "#FFFFFF", // surface cards
//       },
//       text: {
//         primary: isDark ? "#E2E8F0" : "#1E293B", // headings, main content
//         secondary: isDark ? "#94A3B8" : "#475569", // subtitles, labels
//       },
//       divider: isDark ? "#0D3A45" : "#E2E8F0",
//       info: {
//         main: isDark ? "#4FC3F7" : "#007BFF", // links
//       },
//       warning: {
//         main: isDark ? "#FFAA33" : "#E86B00", // active/hover
//       },
//     },
//     typography: {
//       fontFamily: `"Poppins", sans-serif`,
//       h1: {
//         fontWeight: 700,
//         fontSize: "3rem",
//         background: "linear-gradient(90deg, #FF7A01, #FFB547)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//       },
//       h2: {
//         fontWeight: 600,
//         fontSize: "2rem",
//         color: isDark ? "#FF8C1A" : "#FF7A01",
//       },
//       body1: {
//         color: isDark ? "#E2E8F0" : "#1E293B",
//       },
//       body2: {
//         color: isDark ? "#94A3B8" : "#475569",
//       },
//     },
//     shadows: [
//       "none",
//       "0 2px 8px rgba(0, 0, 0, 0.08)",
//       "0 4px 10px rgba(0, 0, 0, 0.1)",
//       "0 6px 15px rgba(0, 0, 0, 0.2)",
//     ],
//     components: {
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             borderRadius: "8px",
//             padding: "10px 20px",
//             fontWeight: 600,
//             textTransform: "none",
//             transition: "all 0.3s ease",
//             boxShadow: isDark
//               ? "0 4px 12px rgba(0, 0, 0, 0.4)"
//               : "0 4px 10px rgba(0, 0, 0, 0.1)",
//             background: `linear-gradient(135deg, ${
//               isDark ? "#FF8C1A" : "#FF7A01"
//             }, ${isDark ? "#FF9D23" : "#FFB547"})`,
//             color: "#fff",
//             "&:hover": {
//               transform: "scale(1.05)",
//               background: `linear-gradient(135deg, ${
//                 isDark ? "#FF9D23" : "#FFB547"
//               }, ${isDark ? "#FF8C1A" : "#FF7A01"})`,
//             },
//             "&:active": {
//               transform: "scale(0.98)",
//               background: isDark ? "#FFAA33" : "#E86B00",
//             },
//           },
//         },
//       },
//       MuiPaper: {
//         styleOverrides: {
//           root: {
//             backgroundImage: "none",
//             borderRadius: "12px",
//             boxShadow: isDark
//               ? "0 4px 12px rgba(0, 0, 0, 0.4)"
//               : "0 4px 10px rgba(0, 0, 0, 0.1)",
//           },
//         },
//       },
//       MuiOutlinedInput: {
//         styleOverrides: {
//           root: {
//             background: `linear-gradient(135deg, ${
//               isDark ? "#FF8C1A" : "#FF7A01"
//             }, ${isDark ? "#FF9D23" : "#FFB547"})`,
//             color: isDark ? "#94A3B8" : "#475569",
//           },
//         },
//       },
//       MuiInputLabel: {
//         styleOverrides: {
//           root: {
//             color: isDark ? "#94A3B8" : "#475569",
//           },
//         },
//       },
//     },
//   });
