import React from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import "../modal/modal.css";
// import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.toggleForm1 = this.toggleForm1.bind(this);
    this.toggleForm2 = this.toggleForm2.bind(this);

    this.state = {
      showForm1: false,
      showForm2: false
    };
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  toggleForm1() {
    this.setState({
      showForm1: !this.state.showForm1
    });
  }

  toggleForm2() {
    this.setState({
      showForm2: !this.state.showForm2
    })
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          {/* <Link to={"/tweets"}>All Tweets</Link> */}
          {/* <Link to={"/profile"}>Profile</Link> */}
          {/* <Link to={"/new_tweet"}>Write a Tweet</Link> */}
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      const loginForm = (this.state.showForm1 ?
        <LoginFormContainer showModal={this.state.showForm1}
          closeFormModal={() => this.setState({ showForm1: false })} />
        : null
      );

      const signupForm = (this.state.showForm2 ?
        <SignupFormContainer showModal={this.state.showForm2}
          closeFormModal={() => this.setState({ showForm2: false })} />
        : null
      );

      return (
        <div>
          {/* <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link> */}
          {loginForm}
          <button onClick={this.toggleForm1} >Login</button>
          {signupForm}
          <button onClick={this.toggleForm2} >Signup</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>CrimeWatch</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
