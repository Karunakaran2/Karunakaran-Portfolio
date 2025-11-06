import React from "react";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 text-center">
      <Typography variant="body2">
        © {new Date().getFullYear()} Karunakaran. Built with ❤️ using React.
      </Typography>
    </footer>
  );
}
