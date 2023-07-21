import React from "react";
import { Grid } from "@mui/material";
import projects from "../assets/data/projects";
const Projects = () => {
  return (
    <>
      <div className='div-item div-item-left' id="projects">
        <h1 className='item-header-text'>Projects</h1>
        <Grid className='projects' container spacing={1}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4}>
              <div className='project-item'>
                <a href={project.link} target='__blank'>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <div className='tech-stacks'>
                    {project.techStack.map((stack) => (
                      <span className='chip-item'>{stack}</span>
                    ))}
                  </div>
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Projects;
