import React from "react";
import "../styles/app.sass";
import "../styles/skills.sass";
import cnet from "../assets/cnet2.png";
import angular from "../assets/angular3.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import sql from "../assets/sql.png";
import react from "../assets/react.png";
import java from "../assets/java.png";

function Skills() {
  return (
    <div className="skills-section">
      <ul className="stage">
        <li className="scene">
          <div className="box-card">
            <div className="card-front">
              <div className="card-img center">
                <img src={angular} alt="angular" height={200} />
              </div>
              <p>Angular</p>
            </div>
            <div className="card-side">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              tincidunt quam. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Aliquam fermentum
              metus sed ante pellentesque tristique. Mauris finibus ex non
              porttitor sollicitudin.
            </div>
          </div>
        </li>
        <li className="scene">
          <div className="box-card">
            <div className="card-front ">
              <div className="card-img center">
                <img src={cnet} alt="cnet" height={200} />
              </div>
              <p>C# + .Net</p>
            </div>
            <div className="card-side">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              tincidunt quam. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Aliquam fermentum
              metus sed ante pellentesque tristique. Mauris finibus ex non
              porttitor sollicitudin.
            </div>
          </div>
        </li>
        <li className="scene">
          <div className="box-card">
            <div className="card-front ">
              <div className="card-img center">
                <img src={html} alt="html" height={200} />
              </div>
              <p>HTML</p>
            </div>
            <div className="card-side">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              tincidunt quam. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Aliquam fermentum
              metus sed ante pellentesque tristique. Mauris finibus ex non
              porttitor sollicitudin.
            </div>
          </div>
        </li>
        <li className="scene">
          <div className="box-card">
            <div className="card-front ">
              <div className="card-img center">
                <img src={css} alt="css" height={200} />
              </div>
              <p>CSS</p>
            </div>
            <div className="card-side">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              tincidunt quam. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Aliquam fermentum
              metus sed ante pellentesque tristique. Mauris finibus ex non
              porttitor sollicitudin.
            </div>
          </div>
        </li>
        <li className="scene">
          <div className="box-card">
            <div className="card-front ">
              <div className="card-img center">
                <img src={js} alt="js" height={200} />
              </div>
              <p>JS</p>
            </div>
            <div className="card-side">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              tincidunt quam. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Aliquam fermentum
              metus sed ante pellentesque tristique. Mauris finibus ex non
              porttitor sollicitudin.
            </div>
          </div>
        </li>
        <li className="scene">
          <div className="box-card">
            <div className="card-front ">
              <div className="card-img center">
                <img src={sql} alt="sql" height={200} />
              </div>
              <p>SQL</p>
            </div>
            <div className="card-side">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              tincidunt quam. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Aliquam fermentum
              metus sed ante pellentesque tristique. Mauris finibus ex non
              porttitor sollicitudin.
            </div>
          </div>
        </li>
        <li className="scene">
          <div className="box-card">
            <div className="card-front ">
              <div className="card-img center">
                <img src={react} alt="react" height={200} />
              </div>
              <p>React</p>
            </div>
            <div className="card-side">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              tincidunt quam. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Aliquam fermentum
              metus sed ante pellentesque tristique. Mauris finibus ex non
              porttitor sollicitudin.
            </div>
          </div>
        </li>
        <li className="scene">
          <div className="box-card">
            <div className="card-front ">
              <div className="card-img center">
                <img src={java} alt="java" height={200} />
              </div>
              <p>Java</p>
            </div>
            <div className="card-side">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              tincidunt quam. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Aliquam fermentum
              metus sed ante pellentesque tristique. Mauris finibus ex non
              porttitor sollicitudin.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
