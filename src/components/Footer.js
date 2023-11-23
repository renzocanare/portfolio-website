import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/renzo-canare/" target="_blank" rel="noreferrer" title="View My LinkedIn Profile" alt="Linkedin">
          <LinkedInIcon />
        </a>
        <a href="mailto:renzo_canare@hotmail.com" alt="Email address" title="Send Me an Email">
          <EmailIcon />
        </a>
        <a href="https://github.com/renzocanare" target="_blank" rel="noreferrer" title="View My GitHub Page" alt="GitHub">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2023 Renzo Rivera Canare (rivera.fun)</p>
    </div>
  );
}

export default Footer;