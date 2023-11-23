import React from "react";
import { NavLink} from "react-router-dom";
import "../styles/Navbar.css";
import Fade from "react-reveal/Fade";

function Navbar() {
  return (
    <div className="navbar">
      <Fade top>
      <div className="links">
        <NavLink to="/" activeclassname="active" title="Home"> Home </NavLink>
        <NavLink to="/projects" activeclassname="active" title="Projects"> Projects </NavLink>
        <NavLink to="/experience" activeclassname="active" title="Experience"> Experience </NavLink>
      </div>
      </Fade>
    </div>
  );
}

export default Navbar;
