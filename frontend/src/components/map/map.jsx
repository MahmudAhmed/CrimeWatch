import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import keys from "../../config/keys";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class CrimeMap extends Component {

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.maps }}
          defaultCenter={{ lat: 40.6924415, lng: -73.9892479 }}
          defaultZoom={13}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default CrimeMap;