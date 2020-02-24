import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

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
                <div className="nav-links">
                    <Link to={'/reports'}>Reports</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/new_report'}>Write a Report</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="nav-user">
                    <Link to="/login" className="nav-login">Log In</Link>
                    <Link to="/signup" className="nav-signup">Sign Up</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="all-nav">
                <a href="#" className="nav-logo"><h1>Celp <img src="" className="nav-img-logo" /></h1></a>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;