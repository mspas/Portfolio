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
    if (this.state.mailSubject.length < 1) {
      this.setState({
        showAlert: true,
        alertText: "Subject cannot be an empty field!",
        alertType: false,
      });
      return false;
    }
    if (this.state.mailText.length < 1) {
      this.setState({
        showAlert: true,
        alertText: "Message cannot be an empty field!",
        alertType: false,
      });
      return false;
    }
    if (!this.state.canSendMail) {
      this.setState({
        showAlert: true,
        alertText: "5 min timeout between emails! Don't try to spam please!",
        alertType: false,
      });
      return false;
    }
    return true;
  }

  handleSendMail = (event) => {
    let validate = this.validateMailData();
    let check = false;

    if (validate) {
      this.setState({
        isLoading: true,
      });

      fetch("/api/send-mail", {
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
          if (json.statusCode !== "200")
            this.setState({
              showAlert: true,
              alertText:
                "Sorry! Email has not been sent. Please try to conntact me via linkedin instead.",
              alertType: false,
              isLoading: false,
            });
          else {
            check = true;
            this.setState({
              showAlert: true,
              alertText: "Email was sent successfully!",
              alertType: true,
              isLoading: false,
            });
          }
        })
        .then(() => {
          if (check) {
            this.setState({
              canSendMail: false,
            });
          }
          setTimeout(() => {
            this.setState({
              canSendMail: true,
            });
            check = false;
          }, 300000);
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
