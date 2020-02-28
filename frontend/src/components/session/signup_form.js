import React from "react";
import { withRouter } from "react-router-dom";
import Modal from "../modal/modal";

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
    this.props.closeModal();
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
    // debugger
    return (
      <div className="signup-form-container">
        <div
          onClick={() => this.props.closeModal()}
          className="modal-overlay"
        >
          X
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Name"
            />

            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <br />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
          <button onClick={this.handleOtherForm} className="other-form">
              Already have an Account?
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
