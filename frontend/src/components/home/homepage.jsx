import React from 'react';

class HomePage extends React.Component {

    render() {
        return (
            <div className="all-main">
                {/* { NavBar } */}
                <div className="report-map">

                </div>

                <div className="report-info">

                </div>
                {/* <button onClick={this.newReport}>Make A New Report</button> */}
                <footer>
                    Copyright &copy; 2020 CrimeWatchers
                </footer>
            </div>
        );
    }
}

export default HomePage;