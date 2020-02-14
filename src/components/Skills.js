import React from "react";
import "../styles/app.sass";
import "../styles/skills.sass";
import SkillBox from "./Skill-box";
import cnet from "../assets/cnet2.png";
import angular from "../assets/angular3.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import sql from "../assets/sql.png";
import react from "../assets/react.png";
import java from "../assets/java.png";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quistincidunt quam. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Aliquam fermentum metus sed ante pellentesque tristique. Mauris finibus ex non porttitor sollicitudin.";

function Skills() {
  return (
    <div className="skills-section">
      <ul className="stage">
        <li className="scene">
          <SkillBox
            img={angular}
            name="Angular"
            text={text}
            progress={70}
            develop={true}
          />
        </li>
        <li className="scene">
          <SkillBox
            img={cnet}
            name="C# + .Net"
            text={text}
            progress={60}
            develop={true}
          />
        </li>
        <li className="scene">
          <SkillBox
            img={html}
            name="HTML"
            text={text}
            progress={80}
            develop={true}
          />
        </li>
        <li className="scene">
          <SkillBox
            img={css}
            name="CSS"
            text={text}
            progress={75}
            develop={true}
          />
        </li>
        <li className="scene">
          <SkillBox
            img={js}
            name="JavaScript"
            text={text}
            progress={60}
            develop={true}
          />
        </li>
        <li className="scene">
          <SkillBox
            img={sql}
            name="SQL"
            text={text}
            progress={40}
            develop={false}
          />
        </li>
        <li className="scene">
          <SkillBox
            img={react}
            name="React"
            text={text}
            progress={40}
            develop={true}
          />
        </li>
        <li className="scene">
          <SkillBox
            img={java}
            name="Java"
            text={text}
            progress={50}
            develop={false}
          />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
