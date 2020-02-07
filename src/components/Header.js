import React from "react";
import "../styles/app.sass";
import "../styles/header.sass";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top fadeInDown">
      <a className="navbar-brand" href="#home-section"></a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 nav-content">
          <li className="nav-item active">
            <a className="nav-link" href="#home-section">
              HOME <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills-section">
              SKILLS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects-section">
              PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects-section">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
