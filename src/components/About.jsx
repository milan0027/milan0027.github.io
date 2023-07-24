import { Grid } from "@mui/material";
import React from "react";
import profileImage from "../assets/images/IMG_20230719_052955.jpg";
import ProfileIcons from "./ProfileIcons";
import { Fade } from "react-reveal";
const About = () => {
  return (
    <>
      <Grid className="div-item about" id="about" container spacing={1}>
        <Grid item xs={12} md={6}>
          <Fade top big>
            <div className="div-item-left">
              <h1 className="item-header-text">Hi, I'm Milan</h1>
              <p
                className="item-text"
                style={{ marginTop: "2rem", lineHeight: "40px" }}
              >
                A final year Computer Science undergraduate student at IIT
                Dhanbad. I'm Passionate about Competitve Programming and Full
                Stack Web Development, having experience of building Web
                applications with JavaScript / Reactjs / Nodejs and some other
                cool libraries and frameworks.
              </p>
              <ProfileIcons />
              <a
                href="https://docs.google.com/document/d/1zZRerbj2kLAhmdySisVTLfS0ZjTvtOMU8kSnhKRs94E/edit?usp=sharing"
                target="__blank"
              >
                <button className="btn">SEE MY RESUME</button>
              </a>
            </div>
          </Fade>
        </Grid>
        <Grid item xs={12} md={6}>
          <Fade top big>
            <div className="div-item-right">
              <img
                className="profile-image"
                src={profileImage}
                alt="Profile"
              ></img>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
