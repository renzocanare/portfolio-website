import React from 'react';
import '../styles/ProjectModal.css';
import GithubIcon from "@mui/icons-material/GitHub";
import { FocusOn } from 'react-focus-on';
import Fade from "react-reveal/Fade";
import parse from 'html-react-parser'

const ProjectModal = ({ isOpen, closeModal, project }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Fade duration={200}>
      <div className="modalOverlay">
        <FocusOn onEscapeKey={closeModal} onClickOutside={closeModal}>
          <div className="modalContent">
            <button className="modalCloseButton" onClick={closeModal} title="Close Pop-up">&times;</button>
            <img src={project.image} alt={project.name} className="modalImage" />
            <div className="project-description">
              <div className="project-title">{project.name}</div>
              <div className="project-status">{project.status}</div>
              <div className="project-desc-short">{parse(project.longdesc)}</div>
              <span className={`modal-project-buttons ${project.ghlinkavail ? 'ghlink-available' : 'ghlink-unavailable'}`}>
                {project.ghlinkavail 
                  ? (<a href={project.ghlink} target="_blank" rel="noreferrer" className="modal-project-GitHub-button-avail" title="View GitHub Repo" alt="GitHub"><GithubIcon />&nbsp;View GitHub Repo</a>)
                  : project.ghlinkreason === 'Unavailable' 
                  ? (<div className="modal-project-GitHub-button-unavail" title={project.ghlinkreason}><GithubIcon />&nbsp;There is no GitHub Repo for this project</div>)
                  : (<div className="modal-project-GitHub-button-unavail" title={project.ghlinkreason}><GithubIcon />&nbsp;GitHub Repo is currently {project.ghlinkreason}</div>)
                 }
              </span>
              <hr />
              <div className="project-skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="project-skill-bubble">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </FocusOn>
      </div>
    </Fade>
  );
};

export default ProjectModal;
