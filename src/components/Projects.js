import React from "react";
import "../styles/app.sass";
import "../styles/projects.sass";
import ProjectBox from "./Project-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import nothing from "../assets/nothing.jpg";
import shitw from "../assets/shitw.jpg";
import pap from "../assets/pap1.jpg";

const projectsDetails = [
  {
    title: "So How Is The Weather",
    url: "https://mspas.github.io/So-How-Is-The-Weather/",
    text: "Weather app",
    tech: "Angular 8, SASS",
    desc:
      "I wanted to make some simple project to refresh my Angular knowledge. So I did it in, at that time, newest Angular 8. The application uses OpenWeather API. User can check weather due to geolocation of his/her browser or search for any another city.",
    img: { shitw }
  },
  {
    title: "Nothing.",
    url: "https://mspas.github.io/Nothing/",
    text: "Landing page",
    tech: "React, SASS",
    desc:
      "Landing page made while learning React. I just wanted to have some fun during getting a really brief overview of Reat.",
    img: { nothing }
  },
  {
    title: "Pen & Paper",
    url: "https://github.com/mspas/Pen-and-paper",
    text: "Social media, forum",
    tech: "C# .NET Core, Angular 8, SASS",
    desc:
      "The 'social media' aspect of this page was made for my thesis. After that I added also forum-module. Then I reworked the whole graphic desing. After that I reworked API, because I wasn't really happy how it was done. Then I reworked the whole graphic desing again... Currently. after a break that I made for other projects, I came back to this one and of course redesigning the whole thing. Due to all that reworks the app is not finished.",
    img: { pap }
  }
];

class SkillBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      projects: projectsDetails,
      leftSlide: projectsDetails[0],
      activeSlide: projectsDetails[1],
      rightSlide: projectsDetails[2],
      activeProject: 1
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth }, () => {
      this.setButtons();
    });
  }

  onLeftSlide = ev => {
    let activeId = this.state.activeProject;
    let min = activeId < 2 ? 0 : activeId - 2;

    if (activeId > 0) {
      document
        .getElementById("slider")
        .setAttribute("class", "slider animationSlideLeft");
      setTimeout(() => {
        this.setState(
          {
            leftSlide: this.state.projects[min],
            activeSlide: this.state.projects[activeId - 1],
            rightSlide: this.state.projects[activeId],
            activeProject: activeId - 1
          },
          () => {
            document.getElementById("slider").setAttribute("class", "slider");
          }
        );
      }, 700);
    }
  };

  onRightSlide = ev => {
    let activeId = this.state.activeProject;
    let max =
      activeId > this.state.projects.length - 3 ? activeId + 1 : activeId + 2;

    if (activeId < this.state.projects.length - 1) {
      document
        .getElementById("slider")
        .setAttribute("class", "slider animationSlideRight");
      setTimeout(() => {
        this.setState(
          {
            leftSlide: this.state.projects[activeId],
            activeSlide: this.state.projects[activeId + 1],
            rightSlide: this.state.projects[max],
            activeProject: activeId + 1
          },
          () => {
            document.getElementById("slider").setAttribute("class", "slider");
          }
        );
      }, 700);
    }
  };

  componentDidUpdate() {
    this.setButtonActive("btn-left-bg");
    this.setButtonActive("btn-right-bg");
    this.setButtonActive("btn-left-mb");
    this.setButtonActive("btn-right-mb");

    if (this.state.activeProject < 1) {
      this.setButtonDisabled("btn-left-bg");
      this.setButtonDisabled("btn-left-mb");
    }

    if (this.state.activeProject > this.state.projects.length - 2) {
      this.setButtonDisabled("btn-right-bg");
      this.setButtonDisabled("btn-right-mb");
    }
  }

  setButtonClass(id, disabled, hidden) {
    document
      .getElementById(id)
      .setAttribute("class", "big-btns slider-btn " + disabled + " " + hidden);
  }

  setButtonActive(id) {
    let e = document.getElementById(id).getAttribute("class");
    if (e.indexOf("sr-only") === -1) {
      this.setButtonClass(id, "", "");
    }
  }
  setButtonDisabled(id) {
    let e = document.getElementById(id).getAttribute("class");
    if (e.indexOf("sr-only") === -1) {
      this.setButtonClass(id, "disabled", "");
    }
  }

  setButtons() {
    if (this.state.width < 992) {
      this.setButtonClass("btn-left-bg", "", "sr-only");
      this.setButtonClass("btn-right-bg", "", "sr-only");
      document
        .getElementById("mobile-btns")
        .setAttribute("class", "row center");
    } else {
      this.setButtonClass("btn-left-bg", "", "");
      this.setButtonClass("btn-right-bg", "", "");
      document
        .getElementById("mobile-btns")
        .setAttribute("class", "row center sr-only");
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <div className="projects-section angle-divider-wrap">
        <h3>{this.state.activeSlide.title}</h3>
        <div className="row row1 center">
          <div
            className="big-btns slider-btn"
            id="btn-left-bg"
            onClick={this.onLeftSlide}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </div>
          <div className="wrapper">
            <div className="slider" id="slider">
              <div className="slide slide-left" id="slider-left">
                <ProjectBox
                  title={this.state.leftSlide.title}
                  url={this.state.leftSlide.url}
                  i={this.state.activeProject - 1}
                />
              </div>
              <div className="slide slide-center">
                <ProjectBox
                  title={this.state.activeSlide.title}
                  url={this.state.activeSlide.url}
                  i={this.state.activeProject}
                />
              </div>
              <div className="slide slide-right">
                <ProjectBox
                  title={this.state.rightSlide.title}
                  url={this.state.rightSlide.url}
                  i={this.state.activeProject + 1}
                />
              </div>
              <div className="shadow"></div>
            </div>
          </div>
          <div
            className="big-btns slider-btn"
            id="btn-right-bg"
            onClick={this.onRightSlide}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </div>
        </div>
        <div id="mobile-btns" className="row center sr-only">
          <div
            className="slider-btn"
            id="btn-left-mb"
            onClick={this.onLeftSlide}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </div>
          <div
            className="slider-btn"
            id="btn-right-mb"
            onClick={this.onRightSlide}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </div>
        </div>
        <div className="container">
          <p>
            <span className="text-project">Description TL;DR: </span>
            {this.state.activeSlide.text}
          </p>
          <p>
            <span className="text-project">Technology stack: </span>
            {this.state.activeSlide.tech}
          </p>
          <p className="text-project" style={{ marginBottom: 0 }}>
            Description:
          </p>
          <div className="desc-project">{this.state.activeSlide.desc}</div>
        </div>
      </div>
    );
  }
}
export default SkillBox;
