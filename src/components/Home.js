import React from "react";
import "../styles/app.sass";
import "../styles/home.sass";
import git from "../assets/git-ico.png";
import lin from "../assets/lin-ico.png";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#C7493A",
    },
    line_linked: {
      color: "#C7493A",
      opacity: 0.3,
    },
  },
};

function Home() {
  return (
    <div>
      <div className="home-section">
        <div className="home-section-content">
          <div className="home-desc">
            <h3>Hi, I'm Marcin Spasiński </h3>
            <p>
              I'm computer science <span className="colorFade">student </span>
              living in Wrocław. Due to all university work I've obviously met
              C++, Java and a few other low-level programming. However I decided
              to focus completely on web developement and eventually end up with
              C# .net and JS-related frameworks. Since it's still a begining of
              this adventure and it's all about learning, I'm open to other
              technologies. Right now I would describe myself as a{" "}
              <span className="colorFade">frontend</span> dev wannabe, eager to
              make some nice looking things, but interested in some
              <span className="colorFade"> backend</span> work aswell.
            </p>
          </div>
          <div className="row links">
            <div className="col col-r col-md-6">
              <a id="git" href="https://gihtub.com/mspas">
                <img src={git} height={50} alt="GitHub" /> <br />
                GitHub
              </a>
            </div>
            <div className="col col-l col-md-6">
              <a id="lin" href="https://linkedin.com/">
                <img src={lin} height={50} alt="Linkedin" /> <br />
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="container center home-history">
          <div className="slope slope2"></div>
          <div className="slope slope1"></div>
          <h2>also big history nerd...</h2>
          <div className="slope slope4"></div>
          <div className="slope slope3"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
