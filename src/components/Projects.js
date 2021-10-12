import React from "react";
import "../styles/app.sass";
import "../styles/projects.sass";
import ProjectBox from "./Project-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { projectsDetails } from "../data";

class SkillBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
      width: 0,
      projects: projectsDetails,
      leftSlide: projectsDetails[0],
      activeSlide: projectsDetails[0],
      rightSlide: projectsDetails[1],
      activeProject: 0,
      isChanging: false,
    };
    this.sliderRef = React.createRef();
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  onLeftSlide = (ev) => {
    let activeId = this.state.activeProject;
    let min = activeId < 2 ? 0 : activeId - 2;

    if (activeId > 0) {
      this.setState({
        isChanging: true,
      });

      this.sliderRef.current.setAttribute("class", "slider animationSlideLeft");
      setTimeout(() => {
        this.setState(
          {
            leftSlide: this.state.projects[min],
            activeSlide: this.state.projects[activeId - 1],
            rightSlide: this.state.projects[activeId],
            activeProject: activeId - 1,
            isChanging: false,
          },
          () => {
            this.sliderRef.current.setAttribute("class", "slider");
          }
        );
      }, 700);
    }
  };

  onRightSlide = (ev) => {
    let activeId = this.state.activeProject;
    let max =
      activeId > this.state.projects.length - 3 ? activeId + 1 : activeId + 2;

    if (activeId < this.state.projects.length - 1) {
      this.setState({
        isChanging: true,
      });

      this.sliderRef.current.setAttribute(
        "class",
        "slider animationSlideRight"
      );
      setTimeout(() => {
        this.setState(
          {
            leftSlide: this.state.projects[activeId],
            activeSlide: this.state.projects[activeId + 1],
            rightSlide: this.state.projects[max],
            activeProject: activeId + 1,
            isChanging: false,
          },
          () => {
            this.sliderRef.current.setAttribute("class", "slider");
          }
        );
      }, 700);
    }
  };

  onThumbnailClick = (index) => {
    if (index !== this.state.activeProject) {
      let activeId = this.state.activeProject;

      let animation =
        activeId < index ? "animationSlideRight" : "animationSlideLeft";
      let leftId = index === 0 ? 0 : index - 1;
      let rightId =
        index === this.state.projects.length - 1 ? index : index + 1;

      this.setState({
        leftSlide: this.state.projects[index],
        rightSlide: this.state.projects[index],
        isChanging: true,
      });

      this.sliderRef.current.setAttribute("class", `slider ${animation}`);
      setTimeout(() => {
        this.setState(
          {
            leftSlide: this.state.projects[leftId],
            activeSlide: this.state.projects[index],
            rightSlide: this.state.projects[rightId],
            activeProject: index,
            isChanging: false,
          },
          () => {
            this.sliderRef.current.setAttribute("class", "slider");
          }
        );
      }, 700);
    }
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    let thumbnails = projectsDetails.map((project, index) => {
      return (
        <div className="thumbnail" key={index}>
          <div
            className={
              this.state.activeProject === index
                ? "thumbnail-wrap active"
                : "thumbnail-wrap"
            }
            onClick={() => this.onThumbnailClick(index)}
          >
            <img src={project.img} alt={project.title} />
            <div className="thumbnail-info">
              <span className="title">{project.title}</span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="projects-section">
        <div className={this.state.width < 1200 ? "sr-only" : "thumbnail-list"}>
          {thumbnails}
        </div>
        <h3
          className={
            this.state.isChanging ? "text-title text-fadeInOut" : "text-title"
          }
        >
          {this.state.activeSlide.title}{" "}
          <span>
            {this.state.activeProject + 1}/{this.state.projects.length}
          </span>
        </h3>
        <div className="row row1 center">
          <div className={this.state.width < 992 ? "sr-only" : ""}>
            <div
              className={
                this.state.activeProject > 0
                  ? "big-btns slider-btn"
                  : "big-btns slider-btn disabled"
              }
              id="btn-left-bg"
              onClick={this.onLeftSlide}
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </div>
          </div>
          <div className="wrapper">
            <div className="slider" ref={this.sliderRef}>
              <div className="slide slide-left" id="slider-left">
                <ProjectBox
                  projectData={this.state.leftSlide}
                  i={this.state.activeProject - 1}
                />
              </div>
              <div className="slide slide-center">
                <ProjectBox
                  projectData={this.state.activeSlide}
                  i={this.state.activeProject}
                />
              </div>
              <div className="slide slide-right">
                <ProjectBox
                  projectData={this.state.rightSlide}
                  i={this.state.activeProject + 1}
                />
              </div>
              <div className="shadow"></div>
            </div>
          </div>
          <div className={this.state.width < 992 ? "sr-only" : ""}>
            <div
              className={
                this.state.activeProject < this.state.projects.length - 1
                  ? "big-btns slider-btn"
                  : "big-btns slider-btn disabled"
              }
              id="btn-right-bg"
              onClick={this.onRightSlide}
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
          </div>
        </div>
        <div
          id="mobile-btns"
          className={
            this.state.width < 992 ? "row center" : "row center sr-only"
          }
        >
          <div
            className={
              this.state.activeProject > 0
                ? "big-btns slider-btn"
                : "big-btns slider-btn disabled"
            }
            id="btn-left-mb"
            onClick={this.onLeftSlide}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </div>
          <div
            className={
              this.state.activeProject < this.state.projects.length - 1
                ? "big-btns slider-btn"
                : "big-btns slider-btn disabled"
            }
            id="btn-right-mb"
            onClick={this.onRightSlide}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </div>
        </div>
        <div className="container">
          <div className="project-info">
            <p className={this.state.isChanging ? "text-fadeInOut" : ""}>
              <span className="text-project">Description TL;DR: </span>
              {this.state.activeSlide.text}
            </p>
            <p className={this.state.isChanging ? "text-fadeInOut" : ""}>
              <span className="text-project">Technology stack: </span>
              {this.state.activeSlide.tech}
            </p>
            <p
              className={
                this.state.isChanging
                  ? "desc-project text-fadeInOut"
                  : "desc-project"
              }
            >
              <span className="text-project">Description:</span>
              {this.state.activeSlide.desc}
            </p>
            {this.state.activeSlide.demo.length > 0 && (
              <p className={this.state.isChanging ? "text-fadeInOut" : ""}>
                <span className="text-project">Demo:</span>
                {this.state.activeSlide.demo}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default SkillBox;
