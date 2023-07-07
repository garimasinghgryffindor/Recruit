import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-head">Let's have a Chat!</h1>
      <div className="social-handles">
        <img alt="social" className="social-handle" src="images/fb.png" />
        <img alt="social" className="social-handle" src="images/twitter.png" />
        <img alt="social" className="social-handle" src="images/insta.png" />
        <img alt="social" className="social-handle" src="images/linkedin.png" />
      </div>
      <div className="footer-text">
        Copvright © Codiao - Mobile App Developer Singapore
        <br />
        +65 6455 9790 • 24 Sin Ming Lane. Midview Cit #04-91 Singapore 573970
      </div>
    </div>
  );
}

export default Footer;
