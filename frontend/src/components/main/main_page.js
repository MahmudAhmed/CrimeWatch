import React from "react";
import ReportFormContainer from "../report/report_form_container";
import LoginFormContainer from "../session/login_form_container";
import "./main_page.css";
// import NavBar from '../nav/navbar';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.getLinks = this.getLinks.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleReport = this.toggleReport.bind(this);

    this.state = {
      showLogin: false,
      showReport: false
    };
  }

  toggleLogin() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  toggleReport() {
    this.setState({
      showReport: !this.state.showReport
    });
  }

  getLinks() {
    if (this.props.loggedIn) {
      const reportForm = this.state.showReport ? (
        <ReportFormContainer
          showModal={this.state.showReport}
          closeFormModal={() => this.setState({ showReport: false })}
        />
      ) : null;

      return (
        <>
          {reportForm}
          <button onClick={this.toggleReport} className="main-button">
            Make a New Report will go here!
          </button>
        </>
      );
    } else {
      const loginForm = this.state.showLogin ? (
        <LoginFormContainer
          showModal={this.state.showLogin}
          closeFormModal={() => this.setState({ showLogin: false })}
        />
      ) : null;

      return (
        <>
          {loginForm}
          <button onClick={this.toggleLogin} className="main-button">
            Make a New Report will go here!
          </button>
        </>
      );
    }
  }

  render() {
    // debugger
    return (
      <div className="main-div">
        <div className="main-div-2">
          {/* <h1 className="main-h1">Welcome To CrimeWatch</h1> */}
          <div className="main-map">
            Map will go here!
            <img
              src="https://media1.giphy.com/media/dOrYKxiH8cQXC/giphy.webp?cid=790b761194726438a76dda80107593e498dcca4345973bf2&rid=giphy.webp"
              alt=""
            ></img>
            {this.getLinks()}
          </div>
          <div className="main-report-list">
            <ul>
              <li>Reports will go here!</li>
            </ul>
          </div>
        </div>
        <div></div>
        <footer className="main-footer">CrimeWatch &copy; 2020</footer>
      </div>
    );
  }
}

export default MainPage;
