import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import keys from "../../config/keys";

class CrimeMap extends Component {

  renderMarkers (map, maps){
    this.props.incidents.map(
      incident => {
        new maps.Marker({
          position: { lat: incident.lat, lng: incident.lng },
          map,
          title: incident.category,
          animation: window.google.maps.Animation.DROP
        });
      }
    );
  }
  render() {

    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.maps }}
          defaultCenter={{ lat: 40.71283, lng: -73.9152178 }}
          defaultZoom={12}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default CrimeMap;