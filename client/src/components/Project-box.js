import React from "react";
import "../styles/app.sass";
import "../styles/projects.sass";
import "../styles/project-box.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

class ProjectBox extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div
        className="slide-base"
        style={{ backgroundImage: `url(${this.props.projectData.img})` }}
      >
        <div className="links-wrap">
          <div className="link center">
            <a href={this.props.projectData.gitURL}>
              <FontAwesomeIcon className="link-ico" icon={faCode} />
            </a>
          </div>
          {this.props.projectData.link !== "" && (
            <div className="link center">
              <a href={this.props.projectData.link}>
                <FontAwesomeIcon className="link-ico" icon={faLink} />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default ProjectBox;
