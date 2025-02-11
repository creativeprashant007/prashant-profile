import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";


const App = () => {
  return (
    <Router>
      <div className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes to Home */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
