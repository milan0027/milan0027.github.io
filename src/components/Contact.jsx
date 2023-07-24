import React from "react";
import { Grid } from "@mui/material";
import contactSVG from "../assets/images/Contact us-bro.svg";
import { FaLocationDot, FaPhone, FaEnvelopeOpen } from "react-icons/fa6";
import ProfileIcons from "./ProfileIcons";
import { Fade } from "react-reveal";
const Contact = () => {
  return (
    <div className="div-item contact" id="contact">
      <h1>Contact Me</h1>
      <Fade right>
        <Grid className="contact-items" container spacing={1}>
          <Grid item sm={12} md={4}>
            <div className="contact-img">
              <img src={contactSVG} alt="contact"></img>
            </div>
          </Grid>
          <Grid item sm={12} md={8}>
            <div className="contact-item">
              <h2>Reach out to me and discuss anything!</h2>
              <div>
                <p>
                  <FaLocationDot />
                  <span>Dhanbad, Jharkhand</span>
                </p>
                <p>
                  <FaPhone />
                  <span>+91-9556666433</span>
                </p>
                <p>
                  <FaEnvelopeOpen />
                  <span>milanmundhra27@gmail.com</span>
                </p>
              </div>
              <ProfileIcons />
            </div>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
};

export default Contact;
