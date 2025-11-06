import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

const Switch = styled.div`
  width: 60px;
  height: 32px;
  border-radius: 50px;
  background: ${({ $dark }) =>
    $dark ? "linear-gradient(135deg, #1f1f1f, #2b2b2b)" : "#e0e0e0"};
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  position: relative;
  box-shadow: ${({ $dark }) =>
    $dark ? "0 0 8px rgba(255,255,255,0.1)" : "0 0 6px rgba(0,0,0,0.15)"};
  transition: background 0.3s ease;
`;

const Circle = styled(motion.div)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ $dark }) =>
    $dark
      ? "linear-gradient(145deg, #f1c40f, #f39c12)"
      : "linear-gradient(145deg, #0f172a, #1e293b)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $dark }) => ($dark ? "#000" : "#fff")};
  font-size: 14px;
`;

export default function ThemeToggle() {
  const { state, dispatch } = useTheme();
  const isDark = state.darkMode;

  return (
    <>
      <Switch $dark={isDark} onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        <Circle
          $dark={isDark}
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            x: isDark ? 28 : 0,
          }}
        >
          {isDark ? <BsMoon /> : <BsSun />}
        </Circle>
      </Switch>
    </>
  );
}
