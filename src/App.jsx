import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import Departures from './components/Departures';
import Map from './components/Map';

class App extends Component {

  render() {
    return (
      <div className={styles.App} >
        <Header />
        <Departures />
        <Map />
      </div>
    );
  }
}

export default App;
