import React from "react";
import Modal from "../modal/modal";
import './main_page.css'
import IncidentIndexItem from "../incident/incident_index_item";
import CrimeMap from "../map/map";

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
    const reports = Object.values(this.props.incidents).length > 0 ? (this.props.incidents.reverse().map( incident => 
        <IncidentIndexItem key={incident._id} incident={incident}/>)) : [];
    return (
      <div className="main-div">
        <div className="main-div-2" >
          <div className="main-map">
            <CrimeMap incidents={this.props.incidents}/>
            {this.getLinks()}
          </div>
          <div className="main-report-list">
            <div><h2>All Incidents Near You:</h2></div>
            <ul className='div-ul'>
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
