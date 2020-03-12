import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import keys from "../../config/keys";

class CrimeMap extends Component {

  renderMarkers (map, maps){
    let marker = new maps.Marker({
      position: { lat: 40.6924415, lng: -73.9892479 },
      map,
      title: 'Hello World!'
    });
    return marker;
  }
  render() {
    console.log(keys.maps);
    console.log(process.env.GOOGLE_API_KEY);
    console.log(process.env.MONGO_URI);
    console.log(process.env.SECRET_OR_KEY);
    console.log(process.env.PORT);
    console.log(process.env.NODE_ENV);
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.maps }}
          defaultCenter={{ lat: 40.6924415, lng: -73.9892479 }}
          defaultZoom={13}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default CrimeMap;