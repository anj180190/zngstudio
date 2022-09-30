import React from "react";
import telephone from "../icons/telephone.png";
import email from "../icons/email.png";
//import logo from "../logo.png";

function Sidebar() {
  return (
    <div className="Sidebar">
      <a href="#home" className="brand">
        <div className="logo-text">Z&Gstudio.</div>
        <sub>A Web Development Agency. </sub>
      </a>

      <div className="menu">
        <ul>
          <li className="active">
            <div className="highlight"></div>
            <a href="#home">Home</a>
          </li>
          <li>
            <div className="highlight"></div>
            <a href="#about">About</a>
          </li>
          <li>
            <div className="highlight"></div>
            <a href="#services">Services</a>
          </li>
          <li>
            <div className="highlight"></div>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <div className="highlight"></div>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="contactinfo">
        <div className="contact">
          <p>
            <img src={telephone} alt="" />
            +919981137331 <br />
            <img src={email} alt="" />
            <a href="mailto:info@zngstudio.com">info@zngstudio</a>
          </p>
        </div>
      </div>
      <div className="parners"></div>
      <div className="footer">
        <div className="contact">
          <p>Copyright &copy; 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
