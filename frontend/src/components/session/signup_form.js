import React from "react";
import { withRouter } from "react-router-dom";
import Modal from "../modal/modal";
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOtherForm = this.handleOtherForm.bind(this);
  }

  handleOtherForm(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.otherForm();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    // debugger
    this.props.signup(user);
  }

  render() {
    // debugger
    return (
      <div className="signup-outer-container">
        <div className="signup-form-container-1">
          <form onSubmit={this.handleSubmit} className="login-form">
            {this.props.errors.map((err, idx) => (
              <div key={idx} className="errors">
                {err}
              </div>
            ))}
            <div className="login-message">
              <h2 className="title">Welcome to CrimeWatch!</h2>
            </div>
            <div className="login-wrapper">
                {this.renderErrors()}
                <div className="login-email">
                  <h5>NAME:</h5>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.update("name")}
                    placeholder="Name*"
                    className="login-emailpw-input"
                    />
                </div>
                </div>
                <div>
                <div className="login-email">
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
              </div>
              <br />
              <div className="login-password">
                <h5>CONFIRM PASSWORD:</h5>
                <input
                  type="password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password*"
                  className="login-emailpw-input"
                />
                <br />
                {/* <input type="submit" value="Submit" /> */}
                <div className="signup-button">
                  <button
                    className="session-submit"
                    type="submit"
                    value="Submit"
                  >
                    <div className="content-text-signup">Sign Up</div>
                  </button>
                </div>
              </div>
              <div className="signup-nav-content">
                {/* {signupForm} */}
                <p className="signup-login-link">
                  <Link to="/login" className="signup-login-link">
                    Already have an account?
                  </Link>
                </p>
              </div>
            </div>
          </form>
          <div
            onClick={() => this.props.closeModal()}
            className="modal-overlay"
          >
            X
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default withRouter(SignupForm);
