import React from "react";
import ProjectItem from "../components/ProjectItem";
import { PersonalProjectList, SchoolProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects_</h1>
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
            />
          );
        })}
      </div>
      <h1>NUS Student Projects_</h1>
      <div className="projectList">
        {SchoolProjectList.map((project, idx) => {
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
