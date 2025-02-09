import React from "react";
import resumeData from "../data/resumeData";

const Contact = () => (
  <section className="contact">
    <h2>Contact</h2>
    <p>Email: <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a></p>
    <p>Phone: {resumeData.contact.phone}</p>
    <p>
      LinkedIn: <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a>
    </p>
    <p>
      GitHub: <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">View Repos</a>
    </p>
  </section>
);

export default Contact;
