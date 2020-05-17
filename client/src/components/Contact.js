import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact.sass";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
    };
    this.handleSendMail = this.handleSendMail.bind(this);
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      mail: value,
    });
  };

  handleSendMail = (event) => {
    fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail: this.state.mail }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.statusCode != "200")
          alert(
            "Error! Email has not been send. Please try to conntact my via linkedin instead."
          );
        else alert("Gucci");
      });
  };

  render() {
    return (
      <div className="container slope-divider">
        <div className="slope slope2"></div>
        <div className="slope slope1"></div>
        <div className="contact-content">
          <h3>Contact</h3>
          <p>
            Let's do it like this, type your email down there and I will send
            you my CV with necessary informations. I mean, more like app will
            send it for me.
          </p>
          <input
            className="email-input"
            type="email"
            placeholder={"type your email"}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSendMail}>send</button>
        </div>
        <div className="slope slope4"></div>
        <div className="slope slope3"></div>
      </div>
    );
  }
}
export default Contact;
