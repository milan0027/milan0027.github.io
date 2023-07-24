import React from "react";
import { Grid } from "@mui/material";
import educationSVG from "../assets/images/Learning-cuate.svg";
import { Fade } from "react-reveal";
const Education = () => {
  return (
    <>
      <div className="div-item education" id="education">
        <h1>Education</h1>
        <Fade left>
          <Grid container spacing={1}>
            <Grid item sm={12} md={6}>
              <div className="education-items">
                <div className="education-item">
                  <h2>Indian Institute of Technology(ISM) Dhanbad</h2>
                  <h3>B.Tech in Computer Science & Engineering</h3>
                  <h3>2020 - 2024</h3>
                  <p>CGPA - 9.10</p>
                </div>
                <div className="education-item">
                  <h2>Sidhhartha Public School, New Delhi</h2>
                  <h3>Senior Seconday Education - CBSE</h3>
                  <h3>2017 - 2019</h3>
                  <p>Scored 95%</p>
                </div>
                <div className="education-item">
                  <h2>Vikash Convent School, Karanjia</h2>
                  <h3>Secondary Education - ICSE</h3>
                  <h3>2017</h3>
                  <p>Scored 97.5%</p>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <div className="education-img">
                <img src={educationSVG} alt="education"></img>
              </div>
            </Grid>
          </Grid>
        </Fade>
      </div>
    </>
  );
};

export default Education;
