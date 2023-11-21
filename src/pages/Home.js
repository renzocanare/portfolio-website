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
          <img src={ProfileImage} alt="Renzo" className="profile-image front" />
          <img src={ProfileImageFun} alt="Renzo fun" className="profile-image back" />
        </div>
        <h2><b>Hi, I'm Renzo</b></h2>
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
        <div>
          <h2>Hello World_</h2>
          <p className="body-text">
            <p>
              My name is <b>Renzo Rivera Canare</b>, a Final Year Computer Engineering student at the National University of Singapore (NUS).
            </p>
            <p>
              Since young, I've always been fascinated about computers and especially on how Hardware is designed.
              Coupled with a newfound interest in Machine Learning, I hope to be able explore how I can put
              both of these things together.
            </p>
            <p>
              I also enjoy appyling these Machine Learning algorithms
              to make sense of large datasets, or use it to <s>predict the future</s> make good guesses on things.
            </p>
            <p>
              In my free time, I'm probably trying to learn Tennis, working on some projects, tinkering <i>(breaking)</i> my old GameBoys, adventurising with friends,
              losing in Magic: The Gathering or looking after my pet shrimp.
            </p>
          </p>
          {/* <h2>Software Engineering</h2>
          <span>
            Insert skills here.
          </span>
          <h2>Hardware Engineering</h2>
          <span>
            Insert skills here.
          </span> */}
          <h2>Programming Languages_</h2>
          <div className="skill-badges">
            <span>
              <COriginal className="skill-icon" color="currentColor" size="100" />
              <CplusplusOriginal className="skill-icon" color="red" size="100" />
              <CsharpOriginal className="skill-icon" color="red" size="100" />
              <JavaOriginalWordmark className="skill-icon" color="red" size="100" />
              <PythonOriginalWordmark className="skill-icon" color="red" size="100" />
              <PostgresqlOriginalWordmark className="skill-icon" color="red" size="100" />
            </span>
          </div>
          <h2>Certifications_</h2>
          <p className="body-text">
            Insert certification cards here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;