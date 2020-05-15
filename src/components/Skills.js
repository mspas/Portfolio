import React from "react";
import "../styles/app.sass";
import "../styles/skills.sass";
import SkillBox from "./Skill-box";
import cnet from "../assets/cnet2.png";
import angular from "../assets/angular3.png";
import css from "../assets/css.png";
import sql from "../assets/sql.png";
import react from "../assets/react.png";
import java from "../assets/java.png";

const cardsData = [
  {
    name: "Angular",
    img: angular,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quistincidunt quam. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Aliquam fermentum metus sed ante pellentesque tristique. Mauris finibus ex non porttitor sollicitudin.",
    progress: 55,
    develop: true,
  },
  {
    name: "C# + .NET",
    img: cnet,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quistincidunt quam. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Aliquam fermentum metus sed ante pellentesque tristique. Mauris finibus ex non porttitor sollicitudin.",
    progress: 50,
    develop: true,
  },
  {
    name: "CSS",
    img: css,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quistincidunt quam. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Aliquam fermentum metus sed ante pellentesque tristique. Mauris finibus ex non porttitor sollicitudin.",
    progress: 50,
    develop: true,
  },
  {
    name: "SQL",
    img: sql,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quistincidunt quam. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Aliquam fermentum metus sed ante pellentesque tristique. Mauris finibus ex non porttitor sollicitudin.",
    progress: 30,
    develop: false,
  },
  {
    name: "React",
    img: react,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quistincidunt quam. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Aliquam fermentum metus sed ante pellentesque tristique. Mauris finibus ex non porttitor sollicitudin.",
    progress: 40,
    develop: true,
  },
  {
    name: "Java",
    img: java,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quistincidunt quam. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Aliquam fermentum metus sed ante pellentesque tristique. Mauris finibus ex non porttitor sollicitudin.",
    progress: 40,
    develop: false,
  },
];

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillCards: cardsData,
    };
  }
  render() {
    let cards = this.state.skillCards.map((data, index) => {
      return (
        <li className="scene" key={index}>
          <SkillBox
            img={data.img}
            name={data.name}
            text={data.text}
            progress={data.progress}
            develop={data.develop}
          />
        </li>
      );
    });
    return (
      <div className="skills-section">
        <ul className="stage">{cards}</ul>
        <div className="slope slope0"></div>
      </div>
    );
  }
}
export default Skills;
