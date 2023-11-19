import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Renzo</h2>
        <div className="prompt">
          <p>A Computer Engineering student from the National University of Singapore 
            exploring Machine Learning, AI and Hardware & Software Engineering.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
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