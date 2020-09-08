import React, { Component } from "react";
import styles from "./Header.module.scss";
import logo from '../../assets/images/logo.png';

class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <h1 data-subheading={"departures near you"}>OMNI<span className={styles.orange}>BUS </span></h1>
      </header>
    );
  }
}

export default Header;
