import React, { Component } from "react";
import styles from "./Departures.module.scss";

class Departures extends Component {

  render() {
    const { stopName, departures } = this.props;
    return (
      <section className={styles.DeparturesSection}>
        <div className={styles.DeparturesTitle}>
          <h2 className={styles.stopName}>{stopName ? stopName : "Click anywhere on the map to get started"}</h2>
        </div>
        <div>
          <hgroup className={styles.DeparturesList}>
            {/* {departures[0].line ? "Live departures!" : "Live departures will show here"} */}
            {"Live departures will show here!"}
          </hgroup>
        </div>
      </section>
    );
  }
}

export default Departures;
