import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import "../styles/contact.sass";
import{ init, send } from 'emailjs-com';

class Contact extends React.Component {
  constructor(props) {
    super();
    this.state = {
      mailSubject: "",
      mailText: "",
      showAlert: false,
      alertText: "",
      alertType: false,
      isLoading: false,
      canSendMail: true,
    };
    this.handleSendMail = this.handleSendMail.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
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
        alertText: "Too many messages! Dont'spam please!",
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

    init(process.env.REACT_APP_EMAIL_USER_ID);

      
    let templateParams = {
      'subject': this.state.mailSubject,
      'message': this.state.mailText
    }

      send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAIL_USER_ID)
      .then((res) => {
        console.log(res.status)
        this.setState({
          showAlert: true,
          alertText: res.status === 200 ? "Email was sent successfully!" : "Error. Please try again later or contact me via Linkedin.",
          alertType: res.status === 200 ? true : false,
          isLoading: false,
          canSendMail: false,
        })
      },
      (error) => {
        this.setState({
          showAlert: true,
          alertText: "Error. Please try again later or contact me via Linkedin.",
          alertType: false,
          isLoading: false,
          canSendMail: false,
        })
        console.log('FAILED...', error);
      });
    }
  };

  handleCloseAlert = (event) => {
    this.setState({ showAlert: false });
  };

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
          <button onClick={this.handleSendMail}>
            {this.state.isLoading ? (
              <Loader type="TailSpin" color="#fff" height={25} width={25} />
            ) : (
              "send email"
            )}
          </button>
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
                  onClick={this.handleCloseAlert}
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
