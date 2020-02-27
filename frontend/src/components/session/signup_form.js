import React from "react";
import { withRouter } from "react-router-dom";
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
    this.clearedErrors = false;
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
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    // debugger
    this.props.signup(user);
    this.props.closeFormModal();
  }

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
    return (
      <div className="login-outer-container">
        <div className="login-form-container-1">
          <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-message">
            <h2 className="title">Welcome to CrimeWatch!</h2>
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
                    value="Submit">
                    <div className="content-text-signup">Sign Up</div>
                  </button>
                </div>
              {this.renderErrors()}
            </div>
              <div className="signup-nav-content">
                {/* {signupForm} */}
                <p className='signup-login-link'><Link to="/login" className='signup-login-link'>Already have an account?</Link></p>
              </div>
            </div>
          </form>
          <div onClick={() => this.props.closeFormModal()} className="modal-overlay">X</div>
        </div>
        </div>
        // </div>
      
    );
  }
}

export default withRouter(SignupForm);
