import React, { useState, useEffect } from "react";
import "./Feature.css";

function Feature(props) {
  const [hover, setHover] = useState(false);

  function onHover() {
    setHover(true);
  }

  function outHover() {
    setHover(false);
  }

  return (
    <div className="feature" onMouseEnter={onHover} onMouseLeave={outHover}>

    {hover && <div>
        <img className="feature-logo" alt="feature" src={props.img_src} />
        <br /> 
        <div className="feature-sub-heading">{props.heading}</div>
        <div className="feature-description">{props.description}</div>
        </div>}

      {!hover && <div>
        <img className="feature-logo" alt="feature" src={props.img_src} />
        <br />
        <div className="feature-heading">{props.heading}</div>
      </div>}
    </div>
  );
}

export default Feature;
