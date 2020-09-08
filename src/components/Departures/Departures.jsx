import React, { Component } from "react";
import styles from "./Departures.module.scss";
import DepartureListing from './DepartureListing';

class Departures extends Component {

  listDepartures = (departures) => {
    return departures.map(bus => {
      return <DepartureListing
        service={bus.service ? bus.service : ""}
        destination={bus.destination ? bus.destination : ""}
        departureTime={bus.departureTime ? bus.departureTime : ""}
      />
    })
  }

  placeholder = () => {
    return <h3 className={styles.Placeholder}>Live departures will show here!</h3>
  }

  render() {
    const { stopName, departures } = this.props;
    return (
      <section className={styles.DeparturesSection}>
        <div className={styles.DeparturesTitle}>
          <h2 className={styles.StopName}>{stopName ? stopName : "Click anywhere on the map to get started"}</h2>
        </div>
        <div className={styles.DeparturesList}>
          {departures[0] && departures[0].service ? this.listDepartures(departures) : this.placeholder()}
        </div>
      </section>
    );
  }
}

export default Departures;
