import React from "react";
import AboutImage from "../icons/about-us-new-white.png";

function About() {
  return (
    <div className="Content" id="about">
      <div className="pageContent">
        <h1 class="page-title">
          <strong>About us</strong>
        </h1>
        <div className="welcome-section">
          <div>
            <p>
              Z&Gstudio is an India based IT startup company and Our team has
              been providing web solutions from years.
            </p>
            <p>
              We create a solution difference with our expert staff by targeting
              high customer satisfaction in order to respond to complex web
              problem.
            </p>
            <h3>Creative challenges are our passion</h3>
            <p>
              Our team of designers and developers work closely together to
              build a creative and positive working environment. Functionality
              is as important to us as aesthetics.
            </p>
          </div>
          <div>
            <img src={AboutImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
