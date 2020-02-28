import React from "react";
import { withRouter } from "react-router-dom";
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

/*global google */
const maps = window.google.maps;
class CrimeMap extends React.Component {
  componentDidMount() {
    let lat, lng;
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lng = position.coords.longitude
    });
    const LatLng = { lat,lng };
    const mapOptions = {
      center: LatLng,
      zoom: 13
    };
    debugger
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // debugger
    this.marker = new google.maps.Marker({
      position: LatLng,
      map: this.map,
      title: "test"
    });
  }

  render() {
    return (
      <div id="map-container" ref={map => (this.mapNode = map)}>
        <h1>the map</h1>
      </div>
    );
  }
}

export default withRouter(CrimeMap);
