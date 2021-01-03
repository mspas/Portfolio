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
          located in Wrocław. Due to all university duties I've started my
          programming journey from C, C++ and Java. However, after some time
          (precisely, after my uni project "Office Pathfinder", more in
          "Projects" section), I decided to focus completely on web developement
          and eventually end up with C# .NET and JS-related frameworks.
          Nonetheless, <span className="colorFade">frontend</span> is my biggest
          interest for now. For me, it gives vent to imagination and creativity
          with some technical spice within. But some ideas include
          functionalities that require also a server-side work. Thanks for that
          I will not feel so lost if it comes to some{" "}
          <span className="colorFade">backend</span> work.
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
