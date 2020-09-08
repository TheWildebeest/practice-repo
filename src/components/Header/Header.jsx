import React, { Component } from "react";
import styles from "./Header.module.scss";
import logo from '../../assets/images/logo.png';
import honk from '../../assets/sounds/honk.mp3'

class Header extends Component {

  playHonk = () => {
    const sound = new Audio(honk);
    sound.play();
  }
  render() {
    return (
      <header className={styles.Header}>
        <img src={logo} alt="omnibus logo" onClick={this.playHonk} />
        <h1 data-subheading={"departures happening near you"}>OMNI<span className={styles.orange}>BUS</span> LIVE</h1>
      </header>
    );
  }
}

export default Header;
