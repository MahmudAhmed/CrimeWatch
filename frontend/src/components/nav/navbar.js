import React from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import ReportFormContainer from "../report/report_form_container";
import "../modal/modal.css";
import { Link } from "react-router-dom";
import "./navbar.css"
import Modal from "../modal/modal";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    // this.toggleLogin = this.toggleLogin.bind(this);
    // this.toggleSignup = this.toggleSignup.bind(this);
    // this.toggleReport = this.toggleReport.bind(this);

    this.state = {
      // showLogin: false,
      // showSignup: false,
      // showReport: false
    };
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // toggleLogin(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   this.props.openModal()
  // }

  // toggleSignup(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   this.props.openModal()
  // }

  // toggleReport() {
  //   this.setState({
  //     showReport: !this.state.showReport
  //   })
  // }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    // debugger
    if (this.props.loggedIn) {
      // const reportForm = (this.state.showReport ?
      //   <ReportFormContainer showModal={this.state.showReport}
      //   closeFormModal={() => this.setState({ showReport: false })} />
      //   : null
      // );

      return (
        <div className='nav-signup-login'>
            <button onClick={() => this.props.openModal('report')} className="nav-links-rl">Write a Report</button>
            <button onClick={this.logoutUser} className='nav-links-rl'>Logout</button>
            <Modal />
        </div>
      );
    } else {
      // const loginForm = (this.state.showLogin ?
      //   <LoginFormContainer showModal={this.state.showLogin}
      //     closeFormModal={() => this.setState({ showLogin: false })} />
      //   : null
      // );

      // const signupForm = (this.state.showSignup ?
      //   <SignupFormContainer showModal={this.state.showSignup}
      //     closeFormModal={() => this.setState({ showSignup: false })} />
      //   : null
      // );


      return (
        <div className='nav-signup-login'>
          {/* {loginForm} */}
          <button onClick={() => this.props.openModal('login')} className="nav-links">Log In</button>
          {/* {signupForm} */}
          <button onClick={() => this.props.openModal('signup')} className="nav-links-su">Sign Up</button>
          <Modal />
        </div>
      );
    }
  }

  render() {
    // debugger
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
