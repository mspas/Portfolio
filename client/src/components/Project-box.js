import React from "react";
import "../styles/app.sass";
import "../styles/projects.sass";
import "../styles/project-box.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

class ProjectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elemClass: "slide" };
  }

  componentDidMount() {
    let c = "slide-base slide" + this.props.i;
    this.setState({
      elemClass: c,
    });
  }

  static getDerivedStateFromProps(props, state) {
    return { elemClass: "slide-base slide" + props.i };
  }

  render() {
    return (
      <div className={this.state.elemClass}>
        <div className="links-wrap">
          <div className="link center">
            <a href={this.props.link}>
              <FontAwesomeIcon className="link-ico" icon={faCode} />
            </a>
          </div>
          <div className="link center">
            <a href={this.props.gitURL}>
              <FontAwesomeIcon className="link-ico" icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectBox;
