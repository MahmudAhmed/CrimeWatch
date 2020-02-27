import React from 'react';
import { withRouter } from 'react-router-dom';
import "./incident.css";

class IndexItem extends React.Component {
    render() {
        return(
            <div className="incident-container" >
                <div className="direction"> 
                    <p className="latitude">Lat: {this.props.incident.lat}</p>
                    <p className="longitude">Lng: {this.props.incident.lng}</p>
                </div>
                <div className="cat-time" >
                    <p className="category">Category: {this.props.incident.category}</p>
                    <p className="time">Time: {this.props.incident.time}</p>
                </div>
                <p className="description">Description: {this.props.incident.description}</p>
            </div>

            // <div className="incident-container">
            //     <div className="incident-inner-container">
            //         <div className="incident-lat-long">
            //             <p className="lat-long">Lat: {this.props.incident.lat}</p>
            //             <p className="lat-long">Lng: {this.props.incident.lng}</p>
            //         </div>
            //         <div>

            //         </div>
            //     </div>

            // </div>
        );
    }
}

export default withRouter(IndexItem);