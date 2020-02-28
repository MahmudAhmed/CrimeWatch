import React from 'react';
import { withRouter } from 'react-router-dom';
import "./incident.css";

class IndexItem extends React.Component {
    
    render() {
        const date = this.props.incident.date.slice(0, 10).split("-");
        return (
          <div className="incident-container">
            <div className="cat-time">
              <p className="category">
                {this.props.incident.category}
              </p>
              <p className="time">
                {date[1] +'/'+ date[2] +'/'+ date[0]}
                <br />
                {new Date(this.props.incident.date).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true
                })}
              </p>
            </div>
            <p className="description">
              {this.props.incident.description}
            </p>
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