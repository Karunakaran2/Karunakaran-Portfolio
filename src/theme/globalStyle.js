
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* ===== HEADINGS ===== */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.3;
    margin-bottom: 0.75rem;
    transition: color 0.3s ease;
  }

  h1 {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1.1rem;
  }

  h6 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.subtext};
  }

  /* ===== PARAGRAPHS ===== */
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.subtext};
    margin-bottom: 1rem;
    line-height: 1.7;
    transition: color 0.3s ease;
  }

  /* ===== LINKS ===== */
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.2s ease, border-bottom 0.2s ease;
    border-bottom: 1px solid transparent;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      ${'' /* border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}; */}
    }
  }

  /* ===== BUTTONS ===== */
  button {
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.6rem 1.4rem;
    color: #fff;
    ${"" /* background: ${({ theme }) => theme.colors.gradient}; */}
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transition: all 0.3s ease;
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.md};
      transform: translateY(0px);
    }
    &:active {
      transform: scale(0.98);
      box-shadow: ${({ theme }) => theme.shadows.sm};
    }
  }

.bg-button {
   background: ${({ theme }) => theme.colors.primary};
}
.bg-button:hover {
   background: ${({ theme }) => theme.colors.secondary};
}
.color-text {
  color: ${({ theme }) => theme.colors.text};
}
.color-text-primary {
  color: ${({ theme }) => theme.colors.primary};
}
.color-text-secondary {
  color: ${({ theme }) => theme.colors.secondary};
}
.hover-color-text-primary:hover {
 color: ${({ theme }) => theme.colors.secondary};
 ${'' /* background: ${({ theme }) => theme.colors.primary}; */}
 ${'' /* border: 1px solid ${({ theme }) => theme.colors.primary}; */}
}
.modern-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  /* box-shadow: 0 8px 20px rgba(255, 81, 47, 0.3); */
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.modern-btn:hover {
  transform: translateY(-3px);
  /* box-shadow: 0 12px 24px rgba(255, 81, 47, 0.5); */
  color: #fff;
  background: ${({ theme }) => theme.colors.secondary};
}

.modern-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transform: skewX(-25deg);
  transition: left 0.7s ease;
}

.modern-btn:hover::before {
  left: 125%;
}

  /* ===== INPUTS & TEXTAREAS ===== */
  input, textarea {
    width: 100%;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.subtext};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-family: inherit;
    transition: all 0.3s ease;
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
    }
  }

  /* ===== LISTS ===== */
  ul {
    margin-left: 1.5rem;
    list-style: none;
    color: ${({ theme }) => theme.colors.subtext};
    margin-bottom: 1rem;
  }

  ol {
    margin-left: 1.5rem;
    list-style: decimal;
    color: ${({ theme }) => theme.colors.subtext};
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  /* ===== IMAGES ===== */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  /* ===== BLOCKQUOTES ===== */
  blockquote {
    margin: 1.5rem 0;
    padding: 1rem 1.5rem;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.subtext};
    font-style: italic;
    border-radius: 0 8px 8px 0;
  }

  /* ===== CODE BLOCKS ===== */
  code {
    font-family: "Fira Code", monospace;
    background-color: ${({ theme }) => theme.colors.surface};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary};
  }

  pre {
    background-color: ${({ theme }) => theme.colors.surface};
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
  }

  /* ===== TABLE ===== */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  th, td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }

  tr:nth-child(even) {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#1e293b" : "#f3f4f6"};
  }

  /* ===== SCROLLBAR ===== */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary}88;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.secondary}aa;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;
