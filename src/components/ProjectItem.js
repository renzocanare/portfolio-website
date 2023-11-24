import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import GithubIcon from "@mui/icons-material/GitHub";
import PinIcon from "@mui/icons-material/PushPin"; // Import an icon for pinned projects
import Fade from "react-reveal/Fade";

function ProjectItem({ image, name, status, shortdesc, skills, ghlink, ghlinkavail, ghlinkreason, longdesc, pinned }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const transparentGif = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const renderPinnedIcon = () => {
    if (pinned) {
      return <div className="pinned-icon" title="Pinned to Top"><PinIcon /></div>;
    } else {
      return <img src={transparentGif} alt="" className="pinned-icon"/>;
    }
  };

  const project = { image, name, status, shortdesc, skills, ghlink, ghlinkavail, ghlinkreason, longdesc, pinned };

  return (
    <div className="projectItem">
      <Fade>
        <div className="project-image-container">
          <div>{renderPinnedIcon()}</div>
          <div className="project-image" style={{ backgroundImage: `url(${image})` }}/>
        </div>
        <div className="project-description">
          <div className="project-title">{name}</div>
          <div className="project-status">{status}</div>
          <div className="project-desc-short">{shortdesc}</div>
          <span className={`project-buttons ${ghlinkavail ? 'ghlink-available' : 'ghlink-unavailable'}`}>
            <div onClick={openModal} className="project-more-button" title="Read More">Read More</div>
            {ghlinkavail ? (
              <a href={ghlink} target="_blank" rel="noreferrer" className="project-GitHub-button-avail" title="View GitHub Repo" alt="GitHub"><GithubIcon />&nbsp;GitHub</a>
            ) : (
              <div className="project-GitHub-button-unavail" title={ghlinkreason}><GithubIcon />&nbsp;{ghlinkreason}</div>
            )}
          </span>
          <hr />
          <div className="project-skills">
            {skills.map((skill, index) => (
              <span key={index} className="project-skill-bubble">{skill}</span>
            ))}
          </div>
        </div>
      </Fade>


      <ProjectModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        project={project}
      />
    </div>
  );
}

export default ProjectItem;
