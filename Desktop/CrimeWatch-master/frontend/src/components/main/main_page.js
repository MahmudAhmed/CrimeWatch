import React from "react";
import './main_page.css'


class MainPage extends React.Component {
  render() {
    return (
      <div className="main-div">
        <div className="main-div-2">
          {/* <h1 className="main-h1">Welcome To CrimeWatch</h1> */}
          <div className='main-map'> 
            Maps will go here! 
            <div className='main-report-list'></div>
          </div>
          <div className='main-report-list'>
            <ul>
              <li>Reports will go here!</li>
            </ul>
          </div>
        </div>
        <div>
          <button className='main-buton'>Make a New Report will go here!</button>
        </div>
          <small><footer>CrimeWatch &copy; 2020</footer></small>
      </div>
    );
  }
}

export default MainPage;
