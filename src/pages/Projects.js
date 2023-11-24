import React, { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import { PersonalProjectList, SchoolProjectListPinned, SchoolProjectListMore } from "../helpers/ProjectList";
import Fade from "react-reveal/Fade";
import "../styles/Projects.css";

function Projects() {
  const [showSchoolProjects, setShowSchoolProjects] = useState(false);

  const toggleSchoolProjects = () => {
    setShowSchoolProjects(!showSchoolProjects);
  };

  return (
    <div className="projects">
      <Fade>
        <h1>My Personal Projects_</h1>
      </Fade>
      <div className="projectList">
        {PersonalProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              image={project.image}
              name={project.name}
              status={project.status}
              shortdesc={project.shortdesc}
              longdesc={project.longdesc}
              skills={project.skills}
              ghlink={project.ghlink}
              ghlinkavail={project.ghlinkavail}
              ghlinkreason={project.ghlinkreason}
              pinned={project.pinned}
            />
          );
        })}
      </div>
      <Fade>
        <h1>NUS Student Projects_</h1>
      </Fade>
      <div className="projectList">
        {SchoolProjectListPinned.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              image={project.image}
              name={project.name}
              status={project.status}
              shortdesc={project.shortdesc}
              longdesc={project.longdesc}
              skills={project.skills}
              ghlink={project.ghlink}
              ghlinkavail={project.ghlinkavail}
              ghlinkreason={project.ghlinkreason}
              pinned={project.pinned}
            />
          );
        })}
      </div>
      <Fade>
        <div onClick={toggleSchoolProjects} className="projects-view-button">{showSchoolProjects ? "View Less Projects" : "View Other Projects"}</div>
      </Fade>
      {showSchoolProjects && (<div className="projectList">
        {SchoolProjectListMore.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              image={project.image}
              name={project.name}
              status={project.status}
              shortdesc={project.shortdesc}
              longdesc={project.longdesc}
              skills={project.skills}
              ghlink={project.ghlink}
              ghlinkavail={project.ghlinkavail}
              ghlinkreason={project.ghlinkreason}
              pinned={project.pinned}
            />
          );
        })}
      </div>)}
    </div>
  );
}

export default Projects;
