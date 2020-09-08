import React, { Component } from "react";
import styles from "./Map.module.scss";
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  _getLocation = ({ lat, lng }) => {
    console.log(lat, lng);
    this.props.getBusStop();
  }

  defaultLocation = {
    address: 'London',
    lat: 51.501904,
    lng: -0.115871,
  }

  render() {
    return (
      <section id={styles.Map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB9SARU4o0HtipTD3Z6qIqDQ5lg9ZRp_ok' }}
          defaultCenter={this.defaultLocation}
          defaultZoom={11}
          layerTypes={['TransitLayer']}
          onClick={this._getLocation}
        >

        </GoogleMapReact>
      </section>
    );
  }
}

export default Map;
