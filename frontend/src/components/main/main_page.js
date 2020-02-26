import React from "react";
import './main_page.css'
// import NavBar from '../nav/navbar';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-div">
        <div className="main-div-2">
          {/* <h1 className="main-h1">Welcome To CrimeWatch</h1> */}
          <div className='main-map'>
            Map will go here!
            <img src="https://media1.giphy.com/media/dOrYKxiH8cQXC/giphy.webp?cid=790b761194726438a76dda80107593e498dcca4345973bf2&rid=giphy.webp" alt=""></img>
          <button className='main-button'>Make a New Report will go here!</button>

          </div>
          <div className='main-report-list'>
            <ul>
              <li>Reports will go here!</li>
            </ul>
          </div>
        </div>
        <div>
        </div>
        <footer className='main-footer'>CrimeWatch &copy; 2020</footer>
      </div>
    );
  }
}

export default MainPage;
