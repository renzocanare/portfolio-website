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
        {skills.map((skill) => (
          <span className="skill-bubble">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ClassesCard;
