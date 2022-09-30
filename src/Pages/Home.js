import React from "react";
import homepageImage from "../homagepagebannerremovebg.png";
import alllangs from "../icons/alllangicon.png";
function Home() {
  return (
    <div className="Content" id="home">
      <div className="pageContent">
        <div className="welcome-section">
          <div className="homebannerContent">
            <h1 className="page-title">
              <strong>We are Z&Gstudio.</strong>
            </h1>
            <p>
              We are the team that provide Effective and Effecient solution for
              a web complex problem.
            </p>
          </div>
          <div className="homepageImage">
            <img src={homepageImage} alt="" />
          </div>
        </div>
        <div className="homebottom">
          <p>Behind the design</p>
          <h3>We use most Advanced Tools for solution.</h3>
          <p>Code that we used to built the website with integrating apps</p>
          <img src={alllangs} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
