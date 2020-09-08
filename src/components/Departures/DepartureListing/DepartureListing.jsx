import React, { Component } from "react";
import styles from "./DepartureListing.module.scss";

class DepartureListing extends Component {
  render() {
    const { service, destination, departureTime } = this.props;
    return (
      <hgroup className={styles.Bus}>
        <h3 className={styles.BusService}>{service}</h3>
        <h3 className={styles.BusDestination}>{destination}</h3>
        <h3 className={styles.BusDepartureTime}>{departureTime}</h3>
      </hgroup>
    );
  }
}

export default DepartureListing;
