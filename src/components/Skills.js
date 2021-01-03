import React from "react";
import "../styles/app.sass";
import "../styles/skills.sass";
import SkillBox from "./Skill-box";
import { cardsData } from "../data";

class Skills extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let cards = cardsData.map((data, index) => {
      return (
        <li className="scene" key={index}>
          <SkillBox data={data} />
        </li>
      );
    });
    return (
      <div className="skills-section">
        <ul className="stage">{cards}</ul>
      </div>
    );
  }
}
export default Skills;
