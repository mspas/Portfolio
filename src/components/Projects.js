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
    this.setState(
      {
        leftSlide: this.state.projects[this.state.activeProject - 1], //oof
        activeSlide: this.state.projects[this.state.activeProject - 1],
        rightSlide: this.state.projects[this.state.activeProject]
      },
      () => {
        this.setState({
          activeProject: this.state.activeProject - 1
        });
        document
          .getElementById("slider")
          .setAttribute("class", "slider animationSlideLeft");
      }
    );
  };

  onRightSlide = ev => {
    this.setState(
      {
        leftSlide: this.state.projects[this.state.activeProject],
        activeSlide: this.state.projects[this.state.activeProject + 1],
        rightSlide: this.state.projects[this.state.activeProject + 1] //oof
      },
      () => {
        this.setState({
          activeProject: this.state.activeProject + 1
        });
        document
          .getElementById("slider")
          .setAttribute("class", "slider animationSlideRight");
      }
    );
  };

  render() {
    return (
      <div className="projects-section center">
        <div className="slider-btn" id="btn-left" onClick={this.onLeftSlide}>
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </div>
        <div className="wrapper">
          <div className="slider" id="slider">
            <div className="slide slide-left">
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
