import React, { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import { PersonalProjectList, SchoolProjectList } from "../helpers/ProjectList";
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
        <h1>My Personal Projects</h1>
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
              showmore={true}
              courseslist={false}
            />
          );
        })}
      </div>
      <div>
        {
          showSchoolProjects ?
            <div>
              <Fade>
                <h1>My NUS Projects</h1>
              </Fade>
            </div>
            :
            <div>
              <Fade>
                <h1>Pinned NUS Projects</h1>
              </Fade>
            </div>
        }
      </div>
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
              pinned={project.pinned}
              showmore={showSchoolProjects}
              courseslist={true}
            />
          );
        })}
      </div>
      {!showSchoolProjects && (
        <Fade>
          <div onClick={toggleSchoolProjects} className="projects-view-button">
            View All NUS Projects
          </div>
        </Fade>
      )}
    </div>
  );
}

export default Projects;
