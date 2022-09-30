import React from "react";
import itCons from "../icons/laptop.png";
import webDesign from "../icons/web-design.png";
import webDevelopment from "../icons/web-development.png";
import seo from "../icons/seo.png";
import help from "../icons/customer-service.png";
import availability from "../icons/availability.png";

function Services() {
  return (
    <div className="Content" id="services">
      <div className="pageContent">
        <h1 className="page-title">
          <strong>Our Services</strong>
        </h1>
        <p>We Deal With The Aspects Of Professional IT Services</p>
        <div className="servicesbox">
          <div className="servicesBoxItem">
            <img src={itCons} alt="" />
            <h3>IT consultancy</h3>
            <p>
              We focuses on advising organizations on how best to use
              information technology in achieving their business objectives.
            </p>
          </div>
          <div className="servicesBoxItem">
            <img src={webDevelopment} alt="" />
            <h3>Web Development</h3>
            <p>
              We use agile methodology and most Advanced Tools in Web
              development and providing effective and efficient result.
            </p>
          </div>
          <div className="servicesBoxItem">
            <img src={webDesign} alt="" />
            <h3>Responsive Design</h3>
            <p>
              In term of web design, we insure web component design fit properly
              across on all devices (mobile,tab,desktop).
            </p>
          </div>
          <div className="servicesBoxItem">
            <img src={seo} alt="" />
            <h3>SEO</h3>
            <p>We providing excellent SEO services.</p>
          </div>

          <div className="servicesBoxItem">
            <img src={help} alt="" />
            <h3>Help solution</h3>
            <p>
              Helping is a key of our success. we providing web related
              solutions for your business.
            </p>
          </div>
          <div className="servicesBoxItem">
            <img src={availability} alt="" />
            <h3>24/7 live support</h3>
            <p>We are availabe 24/7.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
