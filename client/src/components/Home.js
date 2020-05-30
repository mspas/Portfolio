import React from "react";
import "../styles/app.sass";
import "../styles/home.sass";
import Mouse from "../Mouse";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-regular-svg-icons";

const mouse = new Mouse();
const updateRate = 1;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollY: 0, counter: 0, showDescription: false };

    this.text = React.createRef();
    this.textBox = React.createRef();
    this.bgImage = React.createRef();

    this.handleContentClick = this.handleContentClick.bind(this);
  }

  getPos(el) {
    for (
      var lx = 0, ly = 0;
      el != null;
      lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
    );
    return { x: lx, y: ly };
  }

  componentDidMount() {
    let offsetWidth = 0;
    let offsetHeight = 0;
    let textElem = this.text.current;
    let bgImageElem = this.bgImage.current;
    let posText = this.getPos(textElem);
    let posBg = this.getPos(bgImageElem);

    window.onscroll = (e) => {
      this.setScrollY(window.scrollY, posText);
    };

    mouse.setCardPos(posText.x, posText.y, this.state.scrollY);

    bgImageElem.addEventListener("mouseover", (event) => {
      offsetHeight = bgImageElem.offsetHeight;
      offsetWidth = bgImageElem.offsetWidth;
      mouse.setOrigin(
        bgImageElem.offsetLeft,
        bgImageElem.offsetTop,
        offsetWidth,
        offsetHeight
      );
      this.update(event.clientX, event.clientY);
    });

    bgImageElem.addEventListener("mousemove", (event) => {
      if (this.isTimeToUpdate()) {
        this.update(event.clientX, event.clientY);
      }
    });

    bgImageElem.addEventListener("mouseleave", () => {
      if (this.text.current) textElem.removeAttribute("style");
      bgImageElem.removeAttribute("style");
    });
  }

  setScrollY(value, pos) {
    this.setState(
      {
        scrollY: `${value}`,
      },
      () => {
        mouse.setCardPos(pos.x, pos.y, this.state.scrollY);
      }
    );
  }

  isTimeToUpdate() {
    let i = Number(this.state.counter) + 1;
    this.setState({
      counter: `${i}`,
    });
    return i % updateRate === 0;
  }
  update(clientX, clientY) {
    mouse.updatePosition(clientX, clientY);
    this.updateTransformStyle(
      (mouse.delta_y / 1).toFixed(2),
      (mouse.delta_x / 1).toFixed(2)
    );
  }
  updateTransformStyle(x, y) {
    let x1 = (-1 / 2) * Number(x);
    let y1 = (-1 / 2) * Number(y);
    let element = this.bgImage.current;
    let elementText = this.text.current;
    let elementTextBox = this.textBox.current;
    let bgPos = `calc(50% + ${y1}px) calc(50% + ${x1}px)`;
    let textPos = `translate(${Number(y1 / 10)}px, ${Number(x / 10)}px)`;
    element.style.backgroundPosition = bgPos;
    if (!this.state.showDescription)
      elementText.style.backgroundPosition = bgPos;
    if (!this.state.showDescription) elementTextBox.style.transform = textPos;
  }

  handleContentClick() {
    this.setState({
      showDescription: !this.state.showDescription,
    });
  }

  render() {
    return (
      <div className="home-section">
        <div ref={this.bgImage} className="container-bg">
          <div
            ref={this.textBox}
            className="text-wrap"
            onClick={this.handleContentClick}
          >
            <span className="hand-icon">
              <FontAwesomeIcon icon={faHandPointDown} />
            </span>
            {this.state.showDescription ? (
              <About onClick={this.handleContentClick} />
            ) : (
              <span ref={this.text} className="text-name">
                Marcin Spasiński
              </span>
            )}
          </div>
        </div>
        <div className="container center slope-divider">
          <div className="slope slope2"></div>
          <div className="slope slope1"></div>
          <h2>also big history nerd...</h2>
          <div className="slope slope4"></div>
          <div className="slope slope3"></div>
        </div>
      </div>
    );
  }
}
export default Home;
