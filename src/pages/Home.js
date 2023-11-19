import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import ProfileImage from '../assets/profile-image.jpeg'; 
import DynamicText from '../components/DynamicText';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={ProfileImage} alt="Renzo" className="profile-image"/>
        <h2>Hi, I'm Renzo</h2>
        <DynamicText />
        <div className="tagline">
          <p>Software & Hardware Engineering, Machine Learning.</p>
        </div>
        <div className="media">
          <a href="https://www.linkedin.com/in/renzo-canare/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:renzo_canare@hotmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/renzocanare" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Software Engineering</h2>
            <span>
              Insert skills here.
            </span>
          </li>
          <li className="item">
            <h2>Hardware Engineering</h2>
            <span>
              Insert skills here.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C, C++, C#, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;