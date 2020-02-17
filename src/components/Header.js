import React from "react";
import "../styles/header.sass";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrolledPage: "about", currentActive: "about" };
  }

  componentDidUpdate() {
    if (this.state.scrolledPage !== this.state.currentActive) {
      let currentView = this.state.currentActive;
      let nextView = this.state.scrolledPage;
      this.setActive(nextView);
      this.setInactive(currentView);
      this.setState({
        currentActive: nextView
      });
    }
  }

  setActive(id) {
    let e = document.getElementsByClassName("nav-" + id);
    for (let i = 0; i < e.length; i++) {
      const element = e[i];
      let cl = element.getAttribute("class");
      element.setAttribute("class", cl + " active");
    }
  }

  setInactive(id) {
    let e = document.getElementsByClassName("nav-" + id);
    for (let i = 0; i < e.length; i++) {
      const element = e[i];
      let cl = element.getAttribute("class");
      let newCl = cl.replace("active", "");

      element.setAttribute("class", newCl);
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { scrolledPage: props.scrolledPage };
  }

  render() {
    return (
      <nav className="navbar-side">
        <ul>
          <li className="nav-link nav-home" onClick={this.onRightSlide}>
            <svg height="20" width="100">
              <circle
                className="circle-outside"
                cx="50"
                cy="10"
                r="6"
                fill="white"
              />
              <circle
                className="nav-about circle-inside active"
                cx="50"
                cy="10"
                r="4"
                fill="white"
              />
            </svg>
            <span className="nav-about nav-label active">about</span>
          </li>
          <li className="nav-link nav-skills">
            <svg height="20" width="100">
              <circle
                className="circle-outside"
                cx="50"
                cy="10"
                r="6"
                fill="white"
              />
              <circle
                className="nav-skills circle-inside"
                cx="50"
                cy="10"
                r="4"
                fill="white"
              />
            </svg>
            <span className="nav-skills nav-label">skills</span>
          </li>
          <li className="nav-link nav-projects">
            <svg height="20" width="100">
              <circle
                className="circle-outside"
                cx="50"
                cy="10"
                r="6"
                fill="white"
              />
              <circle
                className="nav-projects circle-inside"
                cx="50"
                cy="10"
                r="4"
                fill="white"
              />
            </svg>
            <span className="nav-projects nav-label">projects</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
