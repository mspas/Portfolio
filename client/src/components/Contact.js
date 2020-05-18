import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import "../styles/contact.sass";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      showAlert: false,
      alertText: "",
      alertType: false,
      isLoading: false,
    };
    this.handleSendMail = this.handleSendMail.bind(this);
    this.onCloseAlert = this.onCloseAlert.bind(this);
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      mail: value,
    });
  };

  handleSendMail = (event) => {
    let validateUrl = new RegExp(
      "[A-Za-z0-9]+@[A-Za-z0-9]+(.[A-Za-z0-9]+)+$"
    ).test(this.state.mail);

    console.log(validateUrl, this.state.mail);

    if (validateUrl) {
      this.setState({
        isLoading: true,
      });

      fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: this.state.mail }),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.statusCode !== "200")
            this.setState({
              showAlert: true,
              alertText:
                "Sorry! Email has not been send. Please try to conntact me via linkedin instead.",
              alertType: false,
              isLoading: false,
            });
          else
            this.setState({
              showAlert: true,
              alertText: "Email with CV was sent to you successfully!",
              alertType: true,
              isLoading: false,
            });
        });
    } else {
      this.setState({
        showAlert: true,
        alertText: "Invalid email!",
        alertType: false,
        isLoading: false,
      });
    }
  };

  onCloseAlert() {
    this.setState({ showAlert: false });
  }

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
          {this.state.isLoading && (
            <span className="spinner">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </span>
          )}
          <button onClick={this.handleSendMail}>send</button>
          {this.state.showAlert && (
            <div
              className={
                this.state.alertType ? "alert-box success" : "alert-box error"
              }
            >
              <div className="alert-content">
                <FontAwesomeIcon
                  className="close-icon"
                  icon={faTimes}
                  onClick={this.onCloseAlert}
                />
                <p>{this.state.alertText}</p>
              </div>
            </div>
          )}
        </div>
        <div className="slope slope4"></div>
        <div className="slope slope3"></div>
      </div>
    );
  }
}
export default Contact;
