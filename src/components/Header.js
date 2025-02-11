import React from "react";
import { Link } from "react-router-dom";
import resumeData from "../data/resumeData";

const Header = () => (
  <header className="header">
    <div className="logo">{resumeData.name}</div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/experience">Experience</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;