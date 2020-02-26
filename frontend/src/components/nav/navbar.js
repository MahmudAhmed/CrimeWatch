import React from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import ReportFormContainer from "../report/report_form_container";
import "../modal/modal.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
    this.toggleReport = this.toggleReport.bind(this);

    this.state = {
      showLogin: false,
      showSignup: false,
      showReport: false
    };
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  toggleLogin() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  toggleSignup() {
    this.setState({
      showSignup: !this.state.showSignup
    })
  }

  toggleReport() {
    this.setState({
      showReport: !this.state.showReport
    })
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      const reportForm = (this.state.showReport ?
        <ReportFormContainer showModal={this.state.showReport}
         closeFormModal={() => this.setState({ showReport: false })} />
         : null
         );
         return (
           <div>
          {/* <Link to={"/tweets"}>All Tweets</Link> */}
          <Link to={"/profile"}>Profile</Link>
          {/* <Link to={"/new_tweet"}>Write a Tweet</Link> */}
          <button onClick={this.logoutUser}>Logout</button>
          {reportForm}
          <button onClick={this.toggleReport} >Report A Crime </button>
        </div>
      );
    } else {
      const loginForm = (this.state.showLogin ?
        <LoginFormContainer showModal={this.state.showLogin}
          closeFormModal={() => this.setState({ showLogin: false })} />
        : null
      );

      const signupForm = (this.state.showSignup ?
        <SignupFormContainer showModal={this.state.showSignup}
          closeFormModal={() => this.setState({ showSignup: false })} />
        : null
      );


      return (
        <div>
          {/* <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link> */}
          {loginForm}
          <button onClick={this.toggleLogin} >Login</button>
          {signupForm}
          <button onClick={this.toggleSignup} >Signup</button>
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
