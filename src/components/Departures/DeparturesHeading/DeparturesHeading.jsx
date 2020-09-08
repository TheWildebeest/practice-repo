import React, { Component } from "react";
import styles from "./DeparturesHeading.module.scss";

class DeparturesHeading extends Component {
  render() {
    const { service, destination, departureTime } = this.props;
    return (
      <hgroup className={styles.Heading}>
        <h3 className={styles.Service}>{service}</h3>
        <h3 className={styles.Destination}>{destination}</h3>
        <h3 className={styles.DepartureTime}>{departureTime}</h3>
      </hgroup>
    );
  }
}

export default DeparturesHeading;
