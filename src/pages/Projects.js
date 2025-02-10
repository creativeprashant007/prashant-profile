import React from "react";
import resumeData from "../data/resumeData";

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {resumeData.projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <ul>
            {project.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
