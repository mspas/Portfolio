import React from "react";
import "../styles/home.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class About extends React.Component {
  render() {
    return (
      <div className="description" onClick={this.props.onClick}>
        <div className="description-text">
          I'm computer science <span className="colorFade">student </span>
          living in Wrocław. Due to all university work I've obviously met C++,
          Java and a few low-level programming languages. However I decided to
          focus completely on web developement and eventually end up with C#
          .NET and JS-related frameworks. Since it's still a begining of this
          adventure and it's all about learning, I'm open to other technologies.
          Right now I would describe myself as a{" "}
          <span className="colorFade">frontend</span> dev wannabe, eager to make
          some nice looking things, but interested in some
          <span className="colorFade"> backend</span> work as well.
        </div>
        <div className="row links">
          <div className="col">
            <a href="https://github.com/mspas">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/in/marcin-spasi%C5%84ski-8454bb1aa/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
