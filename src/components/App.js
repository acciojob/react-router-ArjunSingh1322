import React from "react";
import './../styles/App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // ✅ no plain Router
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <Router>               
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
