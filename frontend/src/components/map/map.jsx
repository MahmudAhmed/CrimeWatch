import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import keys from "../../config/keys";

class CrimeMap extends Component {
  
  render() {
    const renderMarkers = (map, maps) => {
      let marker = new maps.Marker({
        position: { lat: 40.6924415, lng: -73.9892479 },
        map,
        title: 'Hello World!'
      });
      return marker;
    };
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.maps }}
          defaultCenter={{ lat: 40.6924415, lng: -73.9892479 }}
          defaultZoom={13}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

const Marker = props => {
  return <div className="SuperAwesomePin"></div>
}

export default CrimeMap;