import React from 'react';
import '../styles/ClassesCard.css'; 

const ClassesCard = ({ title, semester, description, skills }) => {
  return (
    <div className="classes-card">
      <h3 className="course-title">{title}</h3>
      <div className="course-semester">{semester}</div>
      <p className="course-description">{description}</p>
      <hr/>
      <div className="skill-bubbles">
        {skills.map((skill, idx) => (
          <span className="skill-bubble" key={idx}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ClassesCard;
