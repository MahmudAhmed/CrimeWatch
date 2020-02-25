import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className='nav-loggedin-links'>
          <Link to={"/reports"} className="nav-links">All Reports</Link>
          <Link to={"/profile"} className="nav-links">Profile</Link>
          <Link to={"/new_report"} className="nav-links">Write a Report</Link>
          <button onClick={this.logoutUser} className='nav-logout-but'>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='nav-signup-login'>
          <Link to={"/login"} className="nav-links">Log In</Link>
          <Link to={"/signup"} className="nav-links-su">Sign Up</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <header className='nav-header'>
        <div className='top-nav-div'>
          <a href="/"><h1 className='nav-h1'>CrimeWatch</h1></a>
          {this.getLinks()}
        </div>
      </header>
    );
  }
}

export default NavBar;
