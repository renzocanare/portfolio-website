import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import {
  COriginal, CplusplusOriginal, CsharpOriginal,
  JavaOriginalWordmark, PythonOriginalWordmark,
  PostgresqlOriginalWordmark
} from "devicons-react";
import Fade from "react-reveal/Fade";
import ProfileImage from "../assets/profile-image.jpeg";
import ProfileImageFun from "../assets/profile-image-fun.jpg";
import DynamicText from "../components/DynamicText";
import CertCard from "../components/CertCard";
import { CertList } from "../helpers/CertificationsList";
import CarouselComponent from "../components/CoursesCarousel";

import "../styles/Home.css";

function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="home">
      <div className="about">
        <Fade>
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
            <a href="https://www.linkedin.com/in/renzo-canare/" target="_blank" rel="noreferrer" title="View My LinkedIn Profile" alt="Linkedin">
              <LinkedInIcon />
            </a>
            <a href="mailto:renzo_canare@hotmail.com" alt="Email address" title="Send Me an Email">
              <EmailIcon />
            </a>
            <a href="https://github.com/renzocanare" target="_blank" rel="noreferrer" title="View My GitHub Page"alt="GitHub">
              <GithubIcon />
            </a>
          </div>
        </Fade>
      </div>
      <div className="skills">
        <div>
          {/* About me section */}
          <Fade>
            <h2>Hello World_</h2>
          </Fade>
          <Fade>
            <div className="body-text">
              <p>
                My name is <b>Renzo Rivera Canare</b>, a Final Year Computer Engineering student at the National University of Singapore (NUS).
              </p>
              <p>
                I've always been fascinated about computers and especially on how Hardware is designed.
                Coupled with a deep interest in Machine Learning, I hope to be able explore how I can put
                both of these things together.
              </p>
              <p>
                I enjoy appyling these Machine Learning algorithms
                to make sense of large datasets, or use it to <s>predict the future</s> make good guesses on things.
              </p>
              <p>
                In my free time, I'm probably trying to learn Tennis, working on some projects, tinkering <i>(breaking)</i> my old GameBoys, adventurising with friends,
                losing in Magic: The Gathering or looking after my pet shrimp.
              </p>
            </div>
          </Fade>
          {/* List of Programming Languages Section */}
          <Fade>
            <h2>Programming Languages_</h2>
          </Fade>
          <Fade>
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
          </Fade>
          {/* Certifications Section */}
          <Fade>
            <h2>Self Learning Certifications_</h2>
          </Fade>
          <div className="certifications-container">
            {CertList.map((cert, idx) => {
              return (
                <Fade key={idx}>
                  <CertCard
                    frontContent={cert.frontimg}
                    backContent={<p>{cert.backtext}</p>}
                    linkToCertificate={cert.certlink}
                    certReady={cert.certready}
                    description={cert.desc}
                    backgroundColor={cert.backgroundColor}
                  />
                </Fade>
              );
            })}
          </div>
          <Fade>
            <h2>Relevant Courses Taken at NUS_</h2>
          </Fade>
          <Fade>
            <div className="classes-container">
              <CarouselComponent />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Home;