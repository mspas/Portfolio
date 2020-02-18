import React from "react";
import "../styles/header.sass";
import NavLink from "./Nav-link";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledPage: "about",
      currentActive: "about",
      activeFlags: [
        { name: "about", active: true },
        { name: "skills", active: false },
        { name: "projects", active: false }
      ]
    };
  }

  componentDidUpdate() {
    if (this.state.scrolledPage !== this.state.currentActive) {
      let next = this.state.scrolledPage;
      let arr = this.state.activeFlags;

      for (let i = 0; i < arr.length; i++)
        arr[i].active = next === arr[i].name ? true : false;

      this.setState({
        currentActive: this.state.scrolledPage,
        activeFlags: arr
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { scrolledPage: props.scrolledPage };
  }

  render() {
    return (
      <nav className="navbar-side">
        <ul>
          <NavLink
            active={this.state.activeFlags[0].active}
            name={this.state.activeFlags[0].name}
          />
          <NavLink
            active={this.state.activeFlags[1].active}
            name={this.state.activeFlags[1].name}
          />
          <NavLink
            active={this.state.activeFlags[2].active}
            name={this.state.activeFlags[2].name}
          />
        </ul>
      </nav>
    );
  }
}

export default Header;
