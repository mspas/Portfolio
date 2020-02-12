import React from "react";
import "../styles/app.sass";
import "../styles/projects.sass";
import "../styles/project-box.sass";

class ProjectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elemClass: "slide" };
  }

  componentDidMount() {
    let c = "slide-base slide" + this.props.i;
    this.setState({
      elemClass: `${c}`
    });
  }

  static getDerivedStateFromProps(props, state) {
    return { elemClass: "slide-base slide" + props.i };
  }

  render() {
    return <div className={this.state.elemClass}>{this.props.title}</div>;
  }
}
export default ProjectBox;
