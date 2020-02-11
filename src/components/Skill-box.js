import React from "react";
import "../styles/app.sass";
import "../styles/skills.sass";

class SkillBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box-card">
        <div className="card-front">
          <div className="card-img center">
            <img src={this.props.img} alt={this.props.name} height={200} />
          </div>
          <p>{this.props.name}</p>
        </div>
        <div className="card-side">{this.props.text}</div>
      </div>
    );
  }
}
export default SkillBox;
