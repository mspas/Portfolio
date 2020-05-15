import React from "react";
import "../styles/header.sass";

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, oldStatus: false, circle: "", text: "" };
  }

  componentDidMount() {
    this.setState({
      circle: "nav-" + this.props.name + " circle-inside",
      text: "nav-" + this.props.name + " nav-label"
    });
  }

  componentDidUpdate() {
    if (this.props.active !== this.state.oldStatus) {
      if (this.props.active) this.setActive(this.props.name);
      else this.setInactive(this.props.name);

      this.setState({
        oldStatus: this.props.active
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
    return { active: props.active };
  }

  render() {
    return (
      <li
        className="nav-link nav-home"
        data-name={this.props.name}
        onClick={this.props.onClick}
      >
        <svg>
          <circle
            className="circle-outside"
            cx="50%"
            cy="10"
            r="6"
            fill="white"
          />
          <circle
            className={this.state.circle}
            cx="50%"
            cy="10"
            r="4"
            fill="white"
          />
        </svg>
        <span className={this.state.text}>{this.props.name}</span>
      </li>
    );
  }
}

export default NavLink;
