import React from "react";
import "../styles/app.sass";
import "../styles/projects.sass";
import ProjectBox from "./Project-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const projectsDetails = [
  {
    title: "Pen & Paper",
    gitURL: "https://github.com/mspas/Pen-and-paper",
    link: "",
    text: "Social media, forum",
    tech: "Angular 8, Sass, C#, .NET Core 2.0",
    desc:
      "The 'social media' module of this page was made for my thesis. What I mean by 'social-media' is user profiles, friends lists, creating events and private messages. Client APP was made in Angular 5 and API in .NET Core 2.0 with Entity Framework. After that I created also forum module. Then I reworked the whole graphic desing. After that I reworked API, because I wasn't really happy how it was done. Then I reworked the whole graphic desing again... Currently, after a break that I made for other projects, I came back to this one and of course redesigning the whole thing. Obviously with better knowledge right now, I want to make some things better. I also updated client APP to 8th version of Angular, and converting styles to use preprocessor SASS. Due to all that reworks the app is not finished yet.",
  },
  {
    title: "Nothing.",
    gitURL: "https://github.com/mspas/Nothing",
    link: "https://mspas.github.io/Nothing/",
    text: "Landing page",
    tech: "React, Sass",
    desc:
      "Landing page made while learning React. I just wanted to have some fun during getting a really brief overview of React.",
  },
  {
    title: "So How Is The Weather",
    gitURL: "https://github.com/mspas/So-How-Is-The-Weather",
    link: "https://mspas.github.io/So-How-Is-The-Weather/",
    text: "Weather app",
    tech: "Angular 8, Sass",
    desc:
      "I wanted to make some simple project to refresh my Angular knowledge. So I did. The application is using OpenWeather API. User can check weather due to geolocation of browser or search for any another city.",
  },
  {
    title: "Clip Downloader",
    gitURL: "https://github.com/mspas/Clip-downloader",
    link: "https://clipzz.herokuapp.com/",
    text: "Video downloader",
    tech: "React, Express, Node.js",
    desc:
      "I'm thinking about some bigger project connected to Twitch clips, so to get a little bit into the topic i decided to make this app. User is pasting URL of a Twitch clip or a YouTube video, after some validation, server is calling Twitch/YouTube APIs to get the video's informations and then download it.",
  },
  {
    title: "CheckIT",
    gitURL: "https://github.com/mspas/CheckIT",
    link: "https://mspas.github.io/CheckIT/login",
    text: "Tracker of attendence in lectures",
    tech: "React, Redux",
    desc:
      "University group project where I was responsible for a front-end module. Ok, it's story time - student is entering a classroom and he's putting his phone close to the lecturer's phone to mark his presence. This is the responsibility of the moblie module. Lecturer using the browser app, can check the attendence list and for ex. export it to file. Browser APP was my part of a project. Other modules are not deployed so you can see ony a demo version of my module. This project was really fun that we needed to cooperate and manage our workflow.",
  },
  {
    title: "Office Pathfinder",
    gitURL: "https://github.com/mspas/office-pathfinder",
    link: "",
    text: "Interactive map",
    tech: "Angular 5, C# .NET Core 2",
    desc:
      "Another university group project developed with a company that submitted an idea for it. And yes, it was as interesting expirience as it sounds. We tried to work like commercial-ish team with 2 persons responsible for client APP (I was one of them), 2 other for API and someone like project manager responsible for contacting with company. We worked in SCRUM-like workflow. The application was a SVG map of office where users could click on each desk or room to check who they can found there or type a name and find person's workplace on map. APP also contained a Admin-Panel to manage the whole data",
  },
  {
    title: "About Me",
    gitURL: "https://github.com/mspas/Portfolio",
    link: "",
    text: "Portfolio",
    tech: "React, Sass",
    desc:
      "You are here right now. I wanted to make something nice with 3D-ish effects. It was quite fun, after all. Especially when it finally worked. To make those boxes in skills section I needed to use some tutorials, not gonna lie. After getting that knowledge, the best part was figuring out how to make this project-slider that you're looking at right now.",
  },
];

class SkillBox extends React.Component {
  constructor(props) {
    super(props);
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

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    console.log(this.state.activeProject);
    return (
      <div className="projects-section">
        <h3 className={this.state.isChanging ? "text-fadeInOut" : ""}>
          {this.state.activeSlide.title}
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
              this.state.activeProject > this.state.projects.length - 1
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
                  ? "text-project text-fadeInOut"
                  : "text-project"
              }
              style={{ marginBottom: 0 }}
            >
              Description:
            </p>
            <div
              className={
                this.state.isChanging
                  ? "desc-project text-fadeInOut"
                  : "desc-project"
              }
            >
              {this.state.activeSlide.desc}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SkillBox;
