import React from "react";
import "../styles/app.sass";
import "../styles/projects.sass";
import ProjectBox from "./Project-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import nothing from "../assets/nothing.jpg";
import shitw from "../assets/shitw.jpg";

const projectsDetails = [
  {
    title: "So How Is The Weather",
    text: "Weather app in Angular 8. SASS included",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quistinciunt quam. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos.",
    img: { shitw }
  },
  {
    title: "Nothing.",
    text: "Landing page for product/brand. Made while learning React",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quistinciunt quam. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos.",
    img: { nothing }
  },
  {
    title: "Nothing.",
    text: "Landing page for product/brand. Made while learning React",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quistinciunt quam. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos.",
    img: { nothing }
  }
];

class SkillBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projectsDetails,
      leftSlide: projectsDetails[0],
      activeSlide: projectsDetails[1],
      rightSlide: projectsDetails[2],
      activeProject: 1
    };
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
      }, 1000);
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
      }, 1000);
    }
  };

  componentDidUpdate() {
    this.setButtonActive("btn-left");
    this.setButtonActive("btn-right");

    if (this.state.activeProject < 1) this.setButtonDisabled("btn-left");

    if (this.state.activeProject > this.state.projects.length - 2)
      this.setButtonDisabled("btn-right");
  }

  setButtonActive(id) {
    document.getElementById(id).setAttribute("class", "slider-btn");
  }
  setButtonDisabled(id) {
    document.getElementById(id).setAttribute("class", "slider-btn disabled");
  }

  render() {
    return (
      <div className="projects-section center">
        <div className="slider-btn" id="btn-left" onClick={this.onLeftSlide}>
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </div>
        <div className="wrapper">
          <div className="slider" id="slider">
            <div className="slide slide-left" id="slider-left">
              <ProjectBox
                title={this.state.leftSlide.title}
                text={this.state.leftSlide.text}
                desc={this.state.leftSlide.desc}
                activeProject={this.state.activeProject}
                i={this.state.activeProject - 1}
              />
            </div>
            <div className="slide slide-center">
              <ProjectBox
                title={this.state.activeSlide.title}
                text={this.state.activeSlide.text}
                desc={this.state.activeSlide.desc}
                activeProject={this.state.activeProject}
                i={this.state.activeProject}
              />
            </div>
            <div className="slide slide-right">
              <ProjectBox
                title={this.state.rightSlide.title}
                text={this.state.rightSlide.text}
                desc={this.state.rightSlide.desc}
                activeProject={this.state.activeProject}
                i={this.state.activeProject + 1}
              />
            </div>
          </div>
        </div>
        <div className="slider-btn" id="btn-right" onClick={this.onRightSlide}>
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </div>
      </div>
    );
  }
}
export default SkillBox;
