import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import ProfileImage from '../assets/profile-image.jpeg';
import ProfileImageFun from '../assets/profile-image-fun.jpg'; 
import DynamicText from '../components/DynamicText';
import { COriginal } from "devicons-react";
import { CplusplusOriginal } from "devicons-react";
import { CsharpOriginal } from "devicons-react";
import { JavaOriginalWordmark } from "devicons-react";
import { PythonOriginalWordmark } from "devicons-react"
import { PostgresqlOriginalWordmark } from "devicons-react";
import "../styles/Home.css";

function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className="home">
      <div className="about">
      <div className={`profile-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <img src={ProfileImage} alt="Renzo" className="profile-image front"/>
        <img src={ProfileImageFun} alt="Renzo fun" className="profile-image back"/>
      </div>
        <h2>Hi, I'm Renzo</h2>
        <DynamicText />
        <div className="tagline">
          <p>Hardware & Software Engineering, Machine Learning.</p>
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
            <h2>Programming Languages</h2>
            <span>
              <COriginal className="skill-icon" color="currentColor" size="100"/> 
              <CplusplusOriginal className="skill-icon" color="red" size="100"/> 
              <CsharpOriginal className="skill-icon" color="red" size="100"/> 
              <JavaOriginalWordmark className="skill-icon" color="red" size="100"/> 
              <PythonOriginalWordmark className="skill-icon" color="red" size="100"/>
              <PostgresqlOriginalWordmark className="skill-icon" color="red" size="100"/>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;