import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import MotionSlideUp from "../components/animations/MotionSlideUp";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Message sent (demo).");
  };

  return (
    <div className="py-16 px-4">
      <MotionSlideUp>
        <div className="max-w-2xl mx-auto">
          <Typography variant="h5" gutterBottom>
            Contact Me
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            mt={2}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField label="Name" name="name" required />
            <TextField label="Email" name="email" type="email" required />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={5}
              required
            />
            <Button variant="contained" type="submit">
              Send
            </Button>
          </Box>
        </div>
      </MotionSlideUp>
    </div>
  );
}
