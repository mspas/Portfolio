import React from "react";
import "../styles/header.sass";
import NavLink from "./Nav-link";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledPage: "about",
      currentActive: "about",
      linksData: [
        { name: "about", active: true },
        { name: "skills", active: false },
        { name: "projects", active: false }
      ]
    };
  }

  componentDidUpdate() {
    if (this.state.scrolledPage !== this.state.currentActive) {
      let next = this.state.scrolledPage;
      let arr = this.state.linksData;

      for (let i = 0; i < arr.length; i++)
        arr[i].active = next === arr[i].name ? true : false;

      this.setState({
        currentActive: this.state.scrolledPage,
        linksData: arr
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { scrolledPage: props.scrolledPage };
  }

  handleLinkClick(data, event) {
    document.getElementById(data.name).scrollIntoView();
  }

  render() {
    let links = this.state.linksData.map((data, index) => {
      return (
        <NavLink
          onClick={this.handleLinkClick.bind(null, data)}
          active={data.active}
          name={data.name}
          key={index}
        />
      );
    });
    return (
      <nav className="navbar-side">
        <ul>{links}</ul>
      </nav>
    );
  }
}

export default Header;
