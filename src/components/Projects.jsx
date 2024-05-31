import React from "react";
import { Grid } from "@mui/material";
import projects from "../assets/data/projects";
import { Fade } from "react-reveal";
import { FaArrowUp } from "react-icons/fa6";

const Projects = () => {
  return (
    <>
      <div className="div-item div-item-left" id="projects">
        <h1 className="item-header-text">Projects</h1>
        <Fade top>
          <Grid className="projects" container spacing={1}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.name}>
                <div className="project-item">
                  <a href={project.link} target="__blank">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div className="tech-stacks">
                      {project.techStack.map((stack) => (
                        <span key={stack + index} className="chip-item">
                          {stack}
                        </span>
                      ))}
                    </div>
                    <div className="project-top-right"></div>
                    <div className="project-icon-arrow">
                      <FaArrowUp />
                    </div>
                  </a>
                </div>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </div>
    </>
  );
};

export default Projects;
