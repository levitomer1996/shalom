import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import PierPage from "./Pier/PierPage";
import Projects from "./Projects/Projects";
const Main = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pier" element={<PierPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
