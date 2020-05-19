import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/app.sass";
import "../styles/skill-box.sass";

class SkillBox extends React.Component {
  constructor(props) {
    super(props);
    this.expRef = React.createRef();
  }

  componentDidMount() {
    this.expRef.current.style.width = this.props.data.progress.toString() + "%";
  }

  render() {
    return (
      <div className="box-card">
        <div className="card-front">
          <div className="card-img center">
            <img src={this.props.data.img} alt={this.props.data.name} />
          </div>
          <p>{this.props.data.name}</p>
          <div className="exp-bar">
            <div className="exp" ref={this.expRef}></div>
            <div className={this.props.data.develop ? "developing" : "sr-only"}>
              <FontAwesomeIcon icon={faAngleRight} />
              <FontAwesomeIcon icon={faAngleRight} />
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
        <div className="card-side">
          <div className="card-desc">
            <p>{this.props.data.text}</p>
            <p className="comment">{this.props.data.comment}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default SkillBox;
