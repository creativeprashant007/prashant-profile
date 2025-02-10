import React from "react";
import resumeData from "../data/resumeData";
import profileImage from "../assets/profile.jpeg";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Hi, I'm {resumeData.name} 👋</h1>
          <h2>{resumeData.title}</h2>
          <p>{resumeData.summary}</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt={resumeData.name} />
        </div>
      </div>
    </section>
  );
};

export default Home;