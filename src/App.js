import React from "react";
import "./styles/app.sass";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Contact from "./components/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledPage: "about",
      skillsOffset: 1000,
      projectsOffset: 2000,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    let so = document.getElementById("skills").offsetTop - 320;
    let po = document.getElementById("projects").offsetTop + 500;
    this.setState({
      skillsOffset: so,
      projectsOffset: po,
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (window.pageYOffset < this.state.skillsOffset)
      this.setActiveSection("about");
    if (
      window.pageYOffset > this.state.skillsOffset &&
      window.pageYOffset < this.state.projectsOffset - window.innerHeight
    )
      this.setActiveSection("skills");
    if (window.pageYOffset > this.state.projectsOffset - window.innerHeight)
      this.setActiveSection("projects");
  }

  setActiveSection(name) {
    this.setState({
      scrolledPage: name,
    });
  }

  render() {
    return (
      <div className="App">
        <Header scrolledPage={this.state.scrolledPage} />
        <div id="about">
          <Home />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <footer>2020</footer>
      </div>
    );
  }
}

export default App;
