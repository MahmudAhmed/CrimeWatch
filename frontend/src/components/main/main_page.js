import React from "react";
import ReportFormContainer from "../report/report_form_container";
import LoginFormContainer from "../session/login_form_container";
import Modal from "../modal/modal";

import './main_page.css'
// import NavBar from '../nav/navbar';
import IncidentIndexItem from "../incident/incident_index_item";

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

  componentDidMount(){
    this.props.requestIncidents();
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

      return (
        <>
          <button onClick={() => this.props.openModal('report')} className='main-button'>Make a New Report will go here!</button>
          <Modal />
        </>
      );
    } else {

      return (
        <>
          <button onClick={() => this.props.openModal('login')} className='main-button'>Make a New Report will go here!</button>
          <Modal />
        </>
      );
    }
  }

  render() {
    // debugger
    const reports = Object.values(this.props.incidents).length > 0 ? (this.props.incidents.map( incident => 
        <IncidentIndexItem key={incident._id} incident={incident}/>)) : [];
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
            <div><h2>All Incidents Near You:</h2></div>
            <ul className='div-ul'>
              {/* <li>Reports will go here!</li> */}
              {reports}
            </ul>
          </div>
        </div>
        <div className='main-footer-div'>
        <footer className="main-footer">CrimeWatch &copy; 2020</footer>
        </div>
      </div>
    );
  }
}

export default MainPage;
