import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import GithubIcon from "@mui/icons-material/GitHub";

function ProjectItem({ image, name, status, shortdesc, skills, ghlink, ghlinkavail, ghlinkreason, longdesc }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const project = { image, name, status, shortdesc, skills, ghlink, ghlinkavail, ghlinkreason, longdesc };

  return (
    <div className="projectItem">
      <div className="project-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="project-description">
        <div className="project-title">{name}</div>
        <div className="project-status">{status}</div>
        <div className="project-desc-short">{shortdesc}</div>
        <span className={`project-buttons ${ghlinkavail ? 'ghlink-available' : 'ghlink-unavailable'}`}>
          <div onClick={openModal} className="project-more-button">Read More</div>
          {ghlinkavail ? (
            <a href={ghlink} target="_blank" rel="noreferrer" className="project-GitHub-button-avail"><GithubIcon />&nbsp;GitHub</a>
          ) : (
            <div className="project-GitHub-button-unavail"><GithubIcon />&nbsp;{ghlinkreason}</div>
          )}
        </span>

        <hr />

        <div className="project-skills">
          {skills.map((skill, index) => (
            <span key={index} className="project-skill-bubble">{skill}</span>
          ))}
        </div>
      </div>


      <ProjectModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        project={project}
      />
    </div>
  );
}

export default ProjectItem;
