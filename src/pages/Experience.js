import React from "react";
import resumeData from "../data/resumeData";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-content">
        <h2>Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role} - {exp.company}</h3>
            <p><strong>Duration:</strong> {exp.duration}</p>
            <p><strong>Location:</strong> {exp.location}</p>
            <ul>
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
