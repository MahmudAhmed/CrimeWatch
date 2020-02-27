import React from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import ReportFormContainer from "../report/report_form_container";
import "../modal/modal.css";
import { Link } from "react-router-dom";
import "./navbar.css"

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
        <div className='nav-signup-login'>
            {/* <Link to={"/"} className="nav-links">WatchList</Link> */}
            <Link to={"/profile"} className="nav-links">Profile</Link>
            <Link to={"/reports"} className="nav-links">All Reports</Link>
            {reportForm}
            <button onClick={this.toggleReport} className="nav-links-rl"><Link to={"/new_report"}>Write a Report</Link> </button>
            <button onClick={this.logoutUser} className='nav-links-rl'>Logout</button>
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
        <div className='nav-signup-login'>
          {/* {/* <Link to={"/login"} className="nav-links">Log In</Link> */}
          {/* <Link to={"/signup"} className="nav-links-su">Sign Up</Link> */} 
          {loginForm}
          <button onClick={this.toggleLogin} className="nav-links">Log In</button>
          {signupForm}
          <button onClick={this.toggleSignup} className="nav-links-su">Sign Up</button>
        </div>
      );
    }
  }

  render() {
    return (
      <header className='nav-header'>
        <div className='top-nav-div'>
          <Link to="/"><h1 className='nav-h1'>CrimeWatch</h1></Link>
          {this.getLinks()}
        </div>
      </header>
    );
  }
}

export default NavBar;
