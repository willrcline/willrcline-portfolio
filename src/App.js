import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div >
      <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <div id='home'>

              <Hero />
              <Work />
              <Contact />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
