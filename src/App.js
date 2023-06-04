import React from "react";
import "./assets/style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work"
import Contact from "./components/Contact"


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Hero />
        <Work />
        <Contact />
      </div>
    </div>
  )
}

export default App;
