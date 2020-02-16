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
        value_area: 800
      }
    },
    color: {
      value: "#C7493A"
    },
    line_linked: {
      color: "#C7493A",
      opacity: 0.3
    }
  }
};

function Home() {
  return (
    <div>
      <div className="home-section">
        <div className="home-desc-divider">
          <div className="home-desc-wrap">
            <h3 className="home-desc">
              Hi, I'm Marcin Spasiński - computer science{" "}
              <span className="colorFade">student</span> living in Wrocław.{" "}
              <span className="colorFade">Frontend</span> dev wannabe. I just
              want to make some nice looking things. Interested in some{" "}
              <span className="colorFade">backend</span> work aswell.
            </h3>
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
        <div className="angle-divider-wrap angle-divider-wrap-after home-history-divider">
          <div className="container center" style={{ height: "40vh" }}>
            <h2 className="home-history">also big history nerd...</h2>
          </div>
        </div>
      </div>
      <Particles className="particles-wrap" params={particleOpt} />
    </div>
  );
}

export default Home;
