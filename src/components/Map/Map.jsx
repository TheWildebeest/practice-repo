import React, { Component } from "react";
import styles from "./Map.module.scss";
import GoogleMapReact from 'google-map-react';

class Map extends Component {

  defaultLocation = {
    address: 'London',
    lat: 51.5074,
    lng: 0.1278,
  }
  render() {
    return (
      <section id={styles.Map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB9SARU4o0HtipTD3Z6qIqDQ5lg9ZRp_ok' }}
          defaultCenter={this.defaultLocation}
          defaultZoom={12}
        >

        </GoogleMapReact>
      </section>
    );
  }
}

export default Map;
