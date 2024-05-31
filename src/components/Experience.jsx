import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// const secondayColor = 'rgb(139,0,255)';
// const primaryColor = 'rgb(35,35,35)';
const color = "linear-gradient(#8B00FF,#232323)";
const Experience = () => {
  return (
    <div className="div-item div-item-left" id="experience">
      <h1>Experience</h1>
      <VerticalTimeline className="experience-items">
      <VerticalTimelineElement
          className="vertical-timeline-element--work experience-item"
          contentStyle={{
            background: `${color}`,
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: `10px solid  #fff` }}
          date="June 2024 - Present"
          iconStyle={{ background: `${color}`, color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontSize: "1.2rem" }}
          >
            Member, Tech - D. E. Shaw India
          </h3>
          <h5 style={{ marginTop: "4px", fontSize: "0.9rem" }}>
            Hyderabad, Telangana
          </h5>
          <p style={{ lineHeight: "1.2rem" }}>
            Just started working here.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-item"
          contentStyle={{
            background: `${color}`,
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: `10px solid  #fff` }}
          date="May 2023 - Jul 2023"
          iconStyle={{ background: `${color}`, color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontSize: "1.2rem" }}
          >
            Technology Developer Intern - D. E. Shaw India
          </h3>
          <h5 style={{ marginTop: "4px", fontSize: "0.9rem" }}>
            Bangalore, Karnataka
          </h5>
          <p style={{ lineHeight: "1.2rem" }}>
            Worked on support for 2D checklist in DESFlow with all basic edit
            operations and ability to see the diff between updates of checklist.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-item"
          contentStyle={{
            background: `${color}`,
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: `10px solid  #fff` }}
          date="Oct 2022 - May 2024"
          iconStyle={{ background: `${color}`, color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontSize: "1.2rem" }}
          >
            Mentor - CodeISM
          </h3>
          <h5 style={{ marginTop: "4px", fontSize: "0.9rem" }}>
            IIT Dhanbad, Jharkhand
          </h5>
          <p style={{ lineHeight: "1.2rem" }}>
            CodeISM is a CSE society. I took regular sessions on Compeititive
            Programming - teaching & doubt solving.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-item"
          contentStyle={{
            background: `${color}`,
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: `10px solid  #fff` }}
          date="May 2021 - May 2024"
          iconStyle={{ background: `${color}`, color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontSize: "1.2rem" }}
          >
            Web Development Member - CyberLabs
          </h3>
          <h5 style={{ marginTop: "4px", fontSize: "0.9rem" }}>
            IIT Dhanbad, Jharkhand
          </h5>
          <p style={{ lineHeight: "1.2rem" }}>
            CyberLabs is the official programming club of IIT Dhanbad. I took
            regular sessions on web development and collaborated in team
            projects.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
