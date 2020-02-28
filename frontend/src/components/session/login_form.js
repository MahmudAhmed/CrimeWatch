import React from "react";
import { withRouter } from "react-router-dom";
import "../modal/modal.css";
import { Link } from 'react-router-dom'
import Modal from "../modal/modal";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleOtherForm = this.handleOtherForm.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push("/tweets");
  //   }

  //   // Set or clear errors
  //   this.setState({ errors: nextProps.errors });
  // }

  // Handle field updates (called in the render method)
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
    this.props.closeModal();
  }

  handleOtherForm(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.otherForm()
  }
  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    // debugger
    return (
      <div className="login-outer-container">
        <div className="login-form-container-1">
          <div onClick={() => this.props.closeModal()} className="modal-overlay">X</div>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="login-message">
              <h2 className="title">Welcome Back!</h2>
              <h3 className="sub-title">We're so excited to see you again!</h3>
            </div>
            <div className="login-wrapper">
              <div className="login-email">
                {this.renderErrors()}
                <h5>EMAIL:</h5>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email*"
                    className="login-emailpw-input"
                  />
              </div>
              <br />
              <div className="login-password">
                <h5>PASSWORD:</h5>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password*"
                    className="login-emailpw-input"
                  />
              <br />
                <div className="login-button">
                  <button
                    className="session-submit"
                    type="submit"
                    value="Submit">
                    <div className="content-text">Log In</div>
                  </button>
                </div>
                {/* <input type="submit" value="Submit" /> */}
                <div className="loginNavContent">
                  <button onClick={this.handleOtherForm} className="other-form">Need an Account?</button>
                </div> 
              </div>
            </div>
          </form>
          <br/>
          <div onClick={() => this.props.closeFormModal()} className="modal-overlay">X</div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
