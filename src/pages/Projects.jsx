import React from "react";
import { projects } from "../data/project";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import MotionSlideUp from "../components/animations/MotionSlideUp";

export default function Projects() {
  return (
    <div className="py-16 px-4">
      <MotionSlideUp>
        <div className="max-w-6xl mx-auto">
          <Typography variant="h5" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={3}>
            {projects.map((p) => (
              <Grid item xs={12} sm={6} md={4} key={p.id} className="col-lg-4">
                <Card className="glass">
                  <CardMedia
                    component="img"
                    height="160"
                    image={p.image}
                    alt={p.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{p.title}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {p.description}
                    </Typography>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Chip key={t} label={t} size="small" />
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button
                        size="small"
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </MotionSlideUp>
    </div>
  );
}
