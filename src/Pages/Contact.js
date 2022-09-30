import React from "react";
import contactIamge from "../icons/contact.png";
import telephone from "../icons/tel-yellow.png";
import email from "../icons/email-yellow.png";

function Contact() {
  return (
    <div className="Content" id="contact">
      <div className="pageContent">
        <h1 class="page-title">
          <strong>Contact us</strong>
        </h1>
        <div className="contactinformation">
          <p>
            <img src={telephone} alt="" /> +919981137331
          </p>
          <p>
            <img src={email} alt="" />
            <a href="mailto:info@zngstudio.com">info@zngstudio</a>
          </p>
        </div>
        <img src={contactIamge} alt="" />
      </div>
    </div>
  );
}

export default Contact;
