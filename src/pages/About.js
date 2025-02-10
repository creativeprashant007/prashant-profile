import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa"; // Import icons
import resumeData from "../data/resumeData";
import profileImage from "../assets/profile.jpeg";

const About = () => (
  <section className="about">
    <div className="about-content">
      <div className="profile-section">
        <img src={profileImage} alt={resumeData.name} className="profile-image" />
        <div className="personal-info">
          <h1>{resumeData.name}</h1>
          <p className="title">{resumeData.title}</p>
          <p className="location">
            <FaMapMarkerAlt /> {resumeData.location}
          </p>
          <div className="contact-info">
            <p><FaEnvelope /> <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a></p>
            <p><FaPhone /> <a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a></p>
            <p><FaLinkedin /> <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><FaGithub /> <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
        </div>
      </div>
      
      <div className="about-details">
        <h2>About Me</h2>
        <p>{resumeData.summary}</p>
        
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <ul>
            <li><strong>Programming Languages:</strong> {resumeData.technicalSkills.programmingLanguages.join(", ")}</li>
            <li><strong>Frameworks/Libraries:</strong> {resumeData.technicalSkills.frameworksLibraries.join(", ")}</li>
            <li><strong>Cloud Platforms:</strong> {resumeData.technicalSkills.cloudPlatforms.join(", ")}</li>
            <li><strong>Databases:</strong> {resumeData.technicalSkills.databases.join(", ")}</li>
            <li><strong>DevOps Tools:</strong> {resumeData.technicalSkills.devOpsTools.join(", ")}</li>
          </ul>
        </div>
        
        <div className="soft-skills-section">
          <h3>Soft Skills</h3>
          <ul>
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
