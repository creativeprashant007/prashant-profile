import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";  // Import icons from react-icons
import resumeData from "../data/resumeData";

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact</h2>
    <div className="contact-info">
      <p><FaEnvelope /> <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a></p>
      <p><FaPhone /> {resumeData.contact.phone}</p>
      <p><FaLinkedin /> <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a></p>
      <p><FaGithub /> <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">View Repos</a></p>
    </div>
  </section>
);

export default Contact;
