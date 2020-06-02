import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import "../styles/contact.sass";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSubject: "",
      mailText: "",
      showAlert: false,
      canSendMail: true,
      alertText: "",
      alertType: false,
      isLoading: false,
    };
    this.handleSendMail = this.handleSendMail.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.onCloseAlert = this.onCloseAlert.bind(this);
  }

  handleSubjectChange = (event) => {
    const { value } = event.target;
    this.setState({
      mailSubject: value,
    });
  };

  handleMessageChange = (event) => {
    const { value } = event.target;
    this.setState({
      mailText: value,
    });
  };

  validateMailData() {
    if (this.state.mailSubject.length < 0) {
      this.setState({
        showAlert: true,
        alertText: "Subject cannot be an empty field!",
        alertType: false,
      });
      return false;
    }
    if (this.state.mailText.length < 0) {
      this.setState({
        showAlert: true,
        alertText: "Message cannot be an empty field!",
        alertType: false,
      });
      return false;
    }
    return true;
  }

  handleSendMail = (event) => {
    let validate = this.validateMailData();

    if (validate) {
      this.setState({
        isLoading: true,
      });

      fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mailSubject: this.state.mailSubject,
          mailText: this.state.mailText,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({
            showAlert: true,
            alertText: json.message,
            alertType: json.statusCode === "200" ? true : false,
            isLoading: false,
          });
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
          <span className="contact-title">Contact</span>
          <input
            className="input subject-input"
            type="text"
            placeholder={"subject"}
            onChange={this.handleSubjectChange}
          />
          <textarea
            className="input text-input"
            rows="5"
            placeholder={"type your message"}
            onChange={this.handleMessageChange}
          />
          {this.state.isLoading && (
            <span className="spinner">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </span>
          )}
          <button onClick={this.handleSendMail}>send email</button>
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
