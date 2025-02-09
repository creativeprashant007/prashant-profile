import React from "react";
import resumeData from "../data/resumeData";
import profileImage from "../assets/profile.jpeg";

const About = () => (
  <section className="about">
    <div className="about-content">
      <img src={profileImage} alt={resumeData.name} className="profile-image" />
      <div>
        <h2>About Me</h2>
        <p>{resumeData.summary}</p>
        <h3>Skills</h3>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
