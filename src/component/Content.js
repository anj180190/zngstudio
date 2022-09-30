import React from "react";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import ProjectList from "../Pages/ProjectList";
import Services from "../Pages/Services";

function Main() {
  return (
    <div className="Main">
      <Home />
      <About />
      <Services />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default Main;
