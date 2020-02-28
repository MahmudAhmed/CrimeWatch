import React from "react";
import "../modal/modal.css";
import "./navbar.css"
import { Link } from "react-router-dom";
import Modal from "../modal/modal";

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

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className='nav-signup-login'>
            <button onClick={() => this.props.openModal('report')} className="nav-links-rl">Write a Report</button>
            <button onClick={this.logoutUser} className='nav-links-rl'>Logout</button>
            <Modal />
        </div>
      );
    } else {
      return (
        <div className='nav-signup-login'>
          <button onClick={() => this.props.openModal('login')} className="nav-links">Log In</button>
          <button onClick={() => this.props.openModal('signup')} className="nav-links-su">Sign Up</button>
          <Modal />
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
