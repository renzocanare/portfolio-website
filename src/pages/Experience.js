import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Fade from "react-reveal/Fade";
import "react-vertical-timeline-component/style.min.css";
import HPLogo from "../assets/experience/hp-logo.png";
import EVOneLogo from "../assets/experience/evone-logo.png";
import NUSLogo from "../assets/experience/nus-logo.png";
import CJCLogo from "../assets/experience/cjc-logo.jpg";
import SPSLogo from "../assets/experience/sps-logo.png";
import DLSLogo from "../assets/experience/dls-logo.png";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="overall">
      <div className="work-experience">
        <Fade>
          <h1 className="timeline-header">Work Experience_</h1>
        </Fade>
        <VerticalTimeline lineColor="#3e497a">
          {/* Work Experience Timeline Elements */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - May 2023 (5 months)"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={<img src={HPLogo} alt="HPLogo" className="img-logo" />}
          >
            <h3 className="vertical-timeline-element-title">
              HP Inc.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              R&D Firmware Engineering Intern, Singapore
            </h4>
            <p>
              <li>Automated System Testing</li>
              <li>Dashboard for System Test Results and Trends</li>
              <li>Real-world Firmware Debugging</li>
              <li>Technical Presentations</li>
            </p>
            <div>
              <hr />
              <span className="skill-bubble">C++</span>
              <span className="skill-bubble">Qt QML</span>
              <span className="skill-bubble">Python</span>
              <span className="skill-bubble">Flask</span>
              <span className="skill-bubble">Bootstrap</span>
              <span className="skill-bubble">GitHub</span>
              <span className="skill-bubble">Jira</span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={
              <div>
                Jun 2022 - Jul 2022 (2 months)<br />
                May 2021 - Jul 2021 (3 months)<br />
                May 2020 - Jul 2020 (3 months)
              </div>
            }
            iconStyle={{ background: "white", color: "#fff" }}
            icon={<img src={EVOneLogo} alt="EVOneLogo" className="img-logo" />}
          >
            <h3 className="vertical-timeline-element-title">
              EVOne Charging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sales & Marketing Engineer, Singapore
            </h4>
            <p>
              <li>Project Management</li>
              <li>Client Liason</li>
              <li>Technical Sales Presentations</li>
              <li>EV Charger Commissioning</li>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div className="school-experience">
        <Fade>
          <h1 className="timeline-header">Educational Background_</h1>
        </Fade>
        <VerticalTimeline lineColor="#3e497a">
          {/* Education Timeline Elements */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug 2020 - May 2024"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={<img src={NUSLogo} alt="NUSLogo" className="img-logo" />}
          >
            <h3 className="vertical-timeline-element-title">
              National University of Singapore (NUS)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              B.Eng. Computer Engineering (Hons.)
            </h4>
            <div>
              <h4 className="sub-header">Academics</h4>
              <p>
                <li>Proficiency in C, C++, C#, Java and Python</li>
                <li>Interest in Hardware Design and Software Engineering for Machine Learning and Data Science</li>
                <li>List of Projects: <a href="/projects" target="_blank" title="View Projects Page" alt="Projects list">rivera.fun/projects</a></li>
              </p>
            </div>
            <hr />
            <div>
              <h4 className="sub-header">NUS Eusoff Hall</h4>
              <h5 className="sub-header">Aug 2020 - May 2022</h5>
              <p>
                <li>Recepient of the Merit Award</li>
                <li>Hall Promotion Board (Head)</li>
                <li>Hall Relations Board (Publicity Head)</li>
                <li>Special Projects Team (Programs Head)</li>
                <li>Eusoff Hackers (Laundry Bot Project Head)</li>
                <li>Eusoff Football</li>
              </p>
            </div>
            <hr />
            <div>
              <h4 className="sub-header">NUS Clubs & Societies</h4>
              <p>
                <li>NUS Board Games Club (Magic: The Gathering)</li>
                <li>NUS Filipino Cultural Club</li>
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016 - 2017"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={<img src={CJCLogo} alt="CJCLogo" className="img-logo" />}
          >
            <h3 className="vertical-timeline-element-title">
              Catholic Junior College
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              'A' Levels, Singapore
            </h4>
            <p>
              <li>Recipient of the CJC Flame (Academic) Scholarship</li>
              <li>'A' Division Rugby (Team Manager)</li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2012 - 2015"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={<img src={SPSLogo} alt="SPSLogo" className="img-logo" />}
          >
            <h3 className="vertical-timeline-element-title">
              St Patrick's School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              'O' Levels, Singapore
            </h4>
            <p>
              <li>Graduated Valedictorian of the Year</li>
              <li>Student Council (Vice-President)</li>
              <li>Air Rifle Club (President)</li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2006 - 2011"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={<img src={DLSLogo} alt="DLSLogo" className="img-logo" />}
          >
            <h3 className="vertical-timeline-element-title">
              De La Salle School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              PSLE, Singapore
            </h4>
            <p>
              <li>Infocomm & Media Club (Adobe Photoshop, Premiere Pro)</li>
              <li>Taekwondo</li>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
