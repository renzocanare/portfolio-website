import React from "react";
import { NavLink} from "react-router-dom";
import "../styles/Navbar.css";
import Fade from "react-reveal/Fade";

function Navbar() {
  return (
    <div className="navbar">
      <Fade top>
      <div className="links">
        <NavLink to="/" activeclassname="active"> Home </NavLink>
        <NavLink to="/projects" activeclassname="active"> Projects </NavLink>
        <NavLink to="/experience" activeclassname="active"> Experience </NavLink>
      </div>
      </Fade>
    </div>
  );
}

export default Navbar;
