import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/app.sass";
import "../styles/skill-box.sass";

class SkillBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { barId: "exp-", arrowsId: "developing-" };
  }

  componentDidMount() {
    this.setState(
      {
        barId: this.state.barId + this.props.name,
        arrowsId: this.state.arrowsId + this.props.name,
      },
      () => {
        let bar = document.getElementById(this.state.barId);
        bar.style.width = this.props.progress.toString() + "%";

        if (!this.props.develop)
          document
            .getElementById(this.state.arrowsId)
            .setAttribute("class", "sr-only");
      }
    );
  }

  render() {
    return (
      <div className="box-card">
        <div className="card-front">
          <div className="card-img center">
            <img src={this.props.img} alt={this.props.name} />
          </div>
          <p>{this.props.name}</p>
          <div className="exp-bar">
            <div id={this.state.barId} className="exp"></div>
            <div id={this.state.arrowsId} className="developing">
              <FontAwesomeIcon icon={faAngleRight} />
              <FontAwesomeIcon icon={faAngleRight} />
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
        <div className="card-side">
          <div className="card-desc">{this.props.text}</div>
        </div>
      </div>
    );
  }
}
export default SkillBox;
