import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
    //console.log(window.scrollY);
    //console.log(show);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`header ${show && "transparent-header"}`}>
      {/*Add link to home page surrounding the logo later*/}
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="logo">
          <img className="logo-img" src="images/logo.png" alt="Logo" />
          <h2 className={`logo-text ${show && "transparent-logo-text"}`}>
            recruit
          </h2>
        </div>
      </Link>

      <div className={`nav-options ${show && "transparent-header-options"}`}>
        <div className="nav-option">About</div>

        {!show && (
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/candidateSearch"
          >
            <div className="nav-option">Candidate Search</div>
          </Link>
        )}

        {show && (
          <Link
            style={{ textDecoration: "none", color: "#101827" }}
            to="/candidateSearch"
          >
            <div className="nav-option">Candidate Search</div>
          </Link>
        )}

        <div className="nav-option">Shortlist</div>

        {!show && (
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/login">
            <div className="nav-option">Login/Register</div>
          </Link>
        )}

        {show && (
          <Link
            style={{ textDecoration: "none", color: "#101827" }}
            to="/login"
          >
            <div className="nav-option">Login/Register</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
